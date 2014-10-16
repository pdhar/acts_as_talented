ActsAsTalentedModule.controller("TabsController", function ($scope) {
  
  $scope.tabClass = { tab1: 'active', 
                      tab2: 'inactive', 
                      tab3: 'inactive', 
                      tab4: 'inactive', 
                      tab5: 'inactive'
                    }

  $scope.makeActiveTab = function(tab) {

    angular.forEach($scope.tabClass, function(value, key) {
      if(key != tab)
        $scope.tabClass[key] = 'inactive';
      else
        $scope.tabClass[key] = 'active';
    });

  }
});