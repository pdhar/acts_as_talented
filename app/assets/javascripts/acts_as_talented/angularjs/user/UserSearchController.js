ActsAsTalentedModule.controller("UserSearchController", ["$scope", "UserSearchFactory", "notificationFactory", function ($scope, UserSearchFactory, notificationFactory) {
 
  // init variables
  $scope.no_results=true;
  $scope.focusedUser = null;

  $scope.filters = {};
  $scope.filters.location = {
    address: "",
    lat: "",
    lng: ""
  }
  $scope.location_details = null;

  // PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    notificationFactory.success();
  }

  var requestError = function () {
    notificationFactory.error();    
  }

  /*
   * This is for the Jobs page
   */
  
  $scope.totalResults = 0;
  $scope.currentPage = 1;
  $scope.no_search_term = true;
  $scope.end_of_results=false;
  $scope.show_landing_page = true;
  $scope.search_term = "qwer";
  $scope.reset = false;
  $scope.users = null;

  $scope.searchUsers = function() {

    if($scope.search_term.length>0){
      $scope.no_search_term = false;
      $scope.end_of_results=false;
      $scope.show_landing_page = false;
      $scope.reset = false;
             
      $scope.users = UserSearchFactory.users($scope.search_term);
        
    } else {
      $scope.no_search_term = true;
    }
  }

  $scope.reset_form = function(){
    $scope.search_term = '';
    $scope.reset = true;
    $scope.users = null;
    $scope.currentPage = 1;

    $scope.no_search_term = true;
    $scope.end_of_results=true;
    $scope.show_landing_page = true;
  }

  $scope.$watch('location_details', function() {
    $scope.filters.location.lat = $scope.location_details['geometry']['location']['k'];
    $scope.filters.location.lng = $scope.location_details['geometry']['location']['B'];
  });
 

}]);