ActsAsTalentedModule.controller("crudgridController", ["$scope", "$element", "$attrs", "ajaxServiceFactory", "notificationFactory", "modalWindowFactory", "reactiveFactory", itemsController]);
 
function itemsController($scope, $element, $attrs, ajaxServiceFactory, notificationFactory, modalWindowFactory, reactiveFactory) {
 
  'use strict';
  var self = this;

  //// ---------------- PUBLIC -----------------

  //// PUBLIC fields

  // Columns he grid should display
  self.columnsDefinition = [];

  // All items
  self.allItems = [];

  // The item being added
  self.newItem = {};

  // Indicates if the view is being loaded
  self.loading = false;

  // Indicates if the view is in add mode
  self.addMode = false;

  // The column used for ordering
  self.orderByColumn = '';

  // Indicates if the ordering is reversed or not
  self.orderByReverse = false;

  //// PUBLIC Methods

  // Initialize module
  self.initialize = _initialize;

  // Toggle the grid between add and normal mode
  self.toggleAddMode = _toggleAddMode;

  // Toggle an item between normal and edit mode
  self.toggleEditMode = _toggleEditMode;

  // Creates the 'newItem' on the server
  self.createItem = _createItem;

  // Gets an item from the server using the id
  self.readItem = _readItem;

  // Updates an item
  self.updateItem = _updateItem;

  // Deletes an item
  self.deleteItem = _deleteItem;

  // Get all items from the server
  self.getAllItems = _getAllItems;

  // In edit mode, if user press ENTER, update item
  self.updateModeKeyUp = _updateModeKeyUp;

  // In add mode, if user press ENTER, add item
  self.createModeKeyUp = _createModeKeyUp;

  // Set the order by column and order
  self.setOrderByColumn = _setOrderByColumn;

  // Apply filter with throttle
  self.filterChanged = _filterChanged;

  // Clear current filter
  self.clearFilter = _clearFilter;
  //// ---------------- CODE TO RUN ------------

  self.initialize();

  //// ---------------- PRIVATE ----------------

  //// PRIVATE fields

  var _itemsService;

  // var _createItemThrottle = reactiveFactory.getThrottle(100);
  // var _updateItemThrottle = reactiveFactory.getThrottle(100);
  var _filterThrottle     = reactiveFactory.getThrottle(100);

  //// PRIVATE Functions - Public Methods Implementation

  function _initialize() {
    // create a service to do the communication with the server
    _itemsService = ajaxServiceFactory.getService($attrs.serverUrl);

    // configured columns
    self.columnsDefinition = angular.fromJson($attrs.columnsDefinition);

    // Initialize
    self.getAllItems();
  }

  function _toggleAddMode() {
    self.addMode = !self.addMode;

    // Empty new item
    self.newItem = {};

    // Set an default id or the validation will crash
    self.newItem.id = 0;
    self.newItem.hasErrors = !_isValid(self.newItem);
  };

  function _toggleEditMode(item) {
    // Toggle
    item.editMode = !item.editMode;

    // if item is not in edit mode anymore
    if (!item.editMode) {
      // Undo changes
      _restoreServerValues(item);
    } else {
      // save server name to restore it if the user cancel edition
      item.serverValues = angular.toJson(item);

      // Set edit mode = false and restore the name for the rest of items in edit mode 
      // (there should be only one)
      self.allItems.forEach(function (i) {
        // item is not the item being edited now and it is in edit mode
        if (item.id != i.id && i.editMode) {
          // Save current editing values 
          self.updateItem(i);
        }
      });
    }
  };

  function _createItem(item) {
    if (_isValid(item)) {
      _itemsService.save(item,
        // success response
        function (createdItem) {
          // Add at the first position
          self.allItems.unshift(createdItem);
          self.toggleAddMode();

          _requestSuccess(response);
        },
        // error callback
        function (error) {
          _requestError(error);
        });
    }
  };

  function _readItem(itemId) {
    _itemsService.get({ id: itemId }, _requestSuccess, _requestError);
  };

  function _updateItem(item) {
    if (_isValid(item)) {
      item.editMode = false;

      // Only update if there are changes
      if (_isDirty(item)) {
        _itemsService.update({ id: item.id }, item, function (response) {
          // Refresh item with server values
          // NOTE: Edit this
          // console.log(response);
          _copyItem(response, item);
          _requestSuccess();
        }, function (error) {
          _requestError(error);
          _restoreServerValues(item);
        });
      }
    }
  };

  function _deleteItem(item) {

    var title = "Delete '" + item.name + "'";
    var msg = "Are you sure you want to remove this item?";
    var confirmCallback = function () {
      return _itemsService.delete(
        // id
        { id: item.id },
        // item 
        item,
        // success callback
        function () {
            _requestSuccess();
            // Remove from scope
            var index = self.allItems.indexOf(item);
            self.allItems.splice(index, 1);

        },
        // error callback
        function (error) {
            _requestError(error);
        });
    };

    modalWindowFactory.show(title, msg, confirmCallback);
  };

  function _getAllItems() {
    self.loading = true;
    self.allItems = _itemsService.query(function () {
      // success callback
      self.loading = false;
    },
    // error callback
    function () {
      _requestError("Error loading items.");
    });
  };

  function _updateModeKeyUp(args, item) {
    // if key is enter
    if (args.keyCode == 13) {
        // update
        self.updateItem(item);
        // remove focus
        args.target.blur();
    }

    // refresh validation
    item.hasErrors = !_isValid(item);
  };

  function _createModeKeyUp(args, item) {
    // if key is enter
    if (args.keyCode == 13) {
      // create
      self.createItem(item);
      // remove focus
      args.target.blur();
    }

    // refresh validation
    item.hasErrors = !_isValid(item);
  };

  function _setOrderByColumn(column) {
    if (self.orderByColumn == column) {
      // change order
      self.orderByReverse = !self.orderByReverse;
    } else {
      // order using new column
      self.orderByColumn = column;
      self.orderByReverse = false;
    }
  }

  //// PRIVATE Functions

  function _requestSuccess() {
    notificationFactory.success();
  };

  function _requestError(error) {
    notificationFactory.error(error.statusText);
  };

  function _isValid(item) {
    var isValid = true;

    // validate all columns
    self.columnsDefinition.forEach(function (column) {
      if (isValid) {

        // required validation
        if (column.required == 'true') {
          isValid = item[column.binding] != undefined;
        }
      }

    });

    return isValid;
  };

  function _isDirty(item) {
    var serverItem = angular.fromJson(item.serverValues);

    var isDirty = false;

    self.columnsDefinition.forEach(function (column) {
      if (!isDirty && // short circuit if item is dirty
        (item[column.binding] != serverItem[column.binding])) {
        isDirty = true;
      }
    });

    return isDirty;
  };

  function _restoreServerValues(item) {

    var serverItem = angular.fromJson(item.serverValues);

    _copyItem(serverItem, item);
    self.columnsDefinition.forEach(function (column) {
      item[column.binding] = serverItem[column.binding];
    });
  }

  function _copyItem(itemSource, itemTarget) {
    self.columnsDefinition.forEach(function (column) {
      itemTarget[column.binding] = itemSource[column.binding];
    });
  }
 
  function _filterChanged() {
    // console.log("asds");
    _filterThrottle.run(function () {
      // update filter
      $scope.$apply(function () {
          self.filter = self.filterText;
      });
    });
  }

  function _clearFilter() {
    self.filterText = "";
    self.filter = "";
  }

};