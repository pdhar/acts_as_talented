ActsAsTalentedModule.controller("UsersController", ["$scope", "UsersFactory", "notificationFactory", function ($scope, UsersFactory, notificationFactory) {
 
  // init variables
  $scope.no_results=true;
  $scope.focusedUser = null ; 

  // PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    // notificationFactory.success();
  }

  var requestError = function () {
    // notificationFactory.error();    
  }

  // Get all items from the server
  $scope.getAllItems = function () {
    $scope.loading = true;
    // $scope.candidateList = ApplicantsFactory.fac(function (success) {
    //   $scope.loading = false;
    // }, requestError);
    $scope.candidateList = UsersFactory.users();

    $scope.loading = false;
    if($scope.candidateList.length > 0){
      $scope.no_results = false;
      $scope.userInit();
    }    
  }

  // LOADS ALL ITEMS
  // $scope.getAllItems();

  $scope.userInit = function(){
    $scope.focusedUser = $scope.candidateList[0];
    $scope.no_results = false;    
  }

  $scope.getUser = function(user){
    $scope.focusedUser = user;
    $scope.no_results = false;    
  }

}]);