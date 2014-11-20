ActsAsTalentedModule.controller("UserSearchController", ["$scope", "UserSearchFactory", "notificationFactory", function ($scope, UserSearchFactory, notificationFactory) {
 
  // init variables
  $scope.no_results=true;
  $scope.focusedUser = null;

  $scope.filters = {};
  $scope.filters.location = {
    address: "",
    lat: "",
    lng: ""
  };
  $scope.location_details = {};
  $scope.location_details = {
    'geometry': {
      'location': {
        'k': "",
        'B': ""
      }
    }
  };

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
  $scope.search_term = "pram";
  $scope.reset = false;
  $scope.users = null;

  $scope.searchUsers = function() {

    if($scope.search_term.length>0){
      $scope.no_search_term = false;
      $scope.end_of_results=false;
      $scope.show_landing_page = false;
      $scope.reset = false;
        
      console.log($scope.filters)
      // first name and last name as name
      $scope.users = UserSearchFactory.Users.query({
        keyword: $scope.search_term,
        course:     $scope.filters.course,
        skills:     $scope.filters.skills,
        interests:  $scope.filters.interests,
        experience: $scope.filters.exp,
        location:   $scope.filters.location.address,
        country:    $scope.filters.country
      });

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

  $scope.skills_in_words = function(skills){
    var skill_list = skills.slice(0,3).map(function(s){
      return s.name
    }).toString();
    return skill_list.replace(/,/g, ", ");
  }


}]);