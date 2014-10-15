ActsAsTalentedModule.controller("EmployersController", function ($scope, EmployersFactory) {
 
 	// PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    // notificationFactory.success();
  }

  var requestError = function () {
    // notificationFactory.error();
    console.log("error");
  }

  var isNameDuplicated = function (itemName) {
    return $scope.knownItems.some(function (entry) {
      return entry.name.toUpperCase() == itemName.toUpperCase();
    });
  };

  var isDirty = function(item) {
    // return item.name != item.serverName;
  }

  // All the items
  $scope.employersList = ["test1", "test2"];

  // Get all items from the server
  $scope.getAllItems = function () {
    $scope.loading = true;
    $scope.employersList = EmployersFactory.query(function (success) {
      $scope.loading = false;
    }, requestError);
  }

  // LOADS ALL ITEMS
  $scope.getAllItems();

});