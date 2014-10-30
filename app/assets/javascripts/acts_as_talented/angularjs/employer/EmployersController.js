ActsAsTalentedModule.controller("EmployersController", ["$scope", "EmployersFactory", "notificationFactory", function ($scope, EmployersFactory, notificationFactory) {
 
 	// PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    // notificationFactory.success();
  }

  var requestError = function () {
    // notificationFactory.error();
    console.log("error");
  }

  var isNameDuplicated = function (itemName) {
    return $scope.employersList.some(function (entry) {
      return entry.name.toUpperCase() == itemName.toUpperCase();
    });
  };

  var isDirty = function(item) {
    return item.name != item.serverName;
  }

  // PUBLIC PROPERTIES

  // the item being added
  $scope.newItem = { name: '' };
  // indicates if the view is being loaded
  $scope.loading = false;
  // indicates if the view is in add mode
  $scope.addMode = false;
  // All the items
  $scope.employersList = [];

  // Get all items from the server
  $scope.getAllItems = function () {
    $scope.loading = true;
    $scope.employersList = EmployersFactory.query(function (success) {
      $scope.loading = false;
    }, requestError);
  }

  // PUBLIC FUNCTIONS
 
  // Toggle the grid between add and normal mode
  $scope.toggleAddMode = function () {
    $scope.addMode = !$scope.addMode;

    // Default new item name is empty
    $scope.newItem.name = '';
  };
  
  // Switch to edit mode on selected row 
  $scope.toggleEditMode = function (item) {
    // Toggle
    item.editMode = !item.editMode;

    // if item is not in edit mode anymore
    if (!item.editMode) {
      // Restore name
      item.name = item.serverName;
    } else {
      // save server name to restore it if the user cancel edition
      item.serverName = item.name;

      // Set edit mode = false and restore the name for the rest of items in edit mode 
      // (there should be only one)
      $scope.employersList.forEach(function (i) {
        // item is not the item being edited now and it is in edit mode
        if (item.id != i.id && i.editMode) {
          // Restore name
          i.name = i.serverName;
          i.editMode = false;
        }
      });

    }

    notificationFactory.error("The item already exists.");
  }

  // LOADS ALL ITEMS
  $scope.getAllItems();

}]);