ActsAsTalentedModule.controller("UserSearchController", ["$scope", "UserSearchFactory", function ($scope, UserSearchFactory) {
 
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
    $scope.candidateList = UserSearchFactory.users();

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

  $scope.searchUsers = function(reset) {
    if(reset==true){
      $scope.currentPage = 1;
    }

    if($scope.search_term.length>0){
      $scope.no_search_term = false;
      $scope.end_of_results=false;
      $scope.show_landing_page = false;

             
      $scope.users = [{
        "name": "Batman",
        "course": "Computers",
        "location": "Bangalore",
        "graduation_year": "2014",
        "skills": "Web, vigilante, technology",
        "about": "I am batman I am batman I am batman I am batman I am batman I am batman I am batman I am batman I am batman ",
        "interests": "rails, ruby",
        "age": "24",
        "experience": "3 yr",
        "status": "Alumni",
        "photo": "http://media.edge-online.com/wp-content/uploads/edgeonline/2013/08/Batman-Arkham-Origins-610x343.jpg"
      },
      {
        "name": "Superman",
        "course": "Electronics",
        "location": "Bangalore",
        "graduation_year": "2015",
        "skills": "Web, vigilante, strength",
        "about": "I am superman I am superman I am superman I am superman I am superman I am superman I am superman I am superman I am superman ",
        "interests": "java, python",
        "age": "24",
        "experience": "2 yr",
        "status": "Working",
        "photo": "http://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5285267ee4b048ecbebd1ce9/1384457859598/big-batman-vs-superman-movie-rumors-possible-spoilers.jpg"
      },
      {
        "name": "Flash",
        "course": "Biotechnology",
        "location": "Bangalore",
        "graduation_year": "2016",
        "skills": "Web, vigilante, speed",
        "about": "I am flash I am flash I am flash I am flash I am flash I am flash I am flash I am flash ",
        "interests": "rails, python",
        "age": "24",
        "experience": "1 yr",
        "status": "Student",
        "photo": "http://t0.gstatic.com/images?q=tbn:ANd9GcR8iEXTneF6nW_3ZgQkgpL4eFUoXDsltOclt0BMyM6lA65VXfTv"
      }]
        
    } else {
      $scope.no_search_term = true;
    }
  }

  $scope.reset_form = function(){
    $scope.search_term = '';
    $scope.reset = true;
    $scope.searchUsers(true);
  }
 

}]);