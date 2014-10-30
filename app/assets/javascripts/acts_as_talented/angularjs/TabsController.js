ActsAsTalentedModule.controller("TabsController", ["$scope", "$state", function ($scope, $state) {

  $scope.tabClass = { myJobs: 'inactive', 
                      myJobs: 'inactive', 
                      searchCandidate: 'inactive', 
                      myProfile: 'inactive', 
                      'myApplicants.list': 'inactive'
                    }

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $scope.tabClass[toState.name] = 'active';
  });

  $scope.makeActiveTab = function(tab) {

    angular.forEach($scope.tabClass, function(value, key) {
      if(key != tab)
        $scope.tabClass[key] = 'inactive';
      else
        $scope.tabClass[key] = 'active';
    });

  }
}]);