ActsAsTalentedModule.controller("ApplicantsController", ["$scope", "ApplicantsFactory", "notificationFactory", function ($scope, ApplicantsFactory, notificationFactory) {
 
  // init variables
  $scope.no_messages=true;
  $scope.focusedMsg = null ;

  $scope.filter_position = [
    {name: "Vigilante"}, 
    {name: "Coder"}, 
    {name: "Gamer"}
  ];

  // PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    notificationFactory.success();
  }

  var requestError = function (error) {
    notificationFactory.error(error.statusText);
  }

  // Get all items from the server
  $scope.getAllItems = function () {
    $scope.loading = true;
    // $scope.applicantsList = ApplicantsFactory.fac(function (success) {
    //   $scope.loading = false;
    // }, requestError);
    $scope.applicantsList = ApplicantsFactory.applicants();
    requestSuccess();
    $scope.loading = false;
    if($scope.applicantsList.length > 0){
      $scope.msgInit();
    }    
  }

  // LOADS ALL ITEMS
  // $scope.getAllItems();

  $scope.msgInit = function(){
    $scope.focusedMsg = $scope.applicantsList[0];
    $scope.no_messages = false;    
  }

  $scope.getMsg = function(msg){
    $scope.focusedMsg = msg;
    $scope.no_messages = false;    
  }

}]);