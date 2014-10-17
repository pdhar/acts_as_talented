ActsAsTalentedModule.controller('ProfileController', function($scope) {
  $scope.save = function() {
    $scope.$broadcast('show-errors-check-validity');
    
    if ($scope.userForm.$valid) {
      alert('User saved');
      $scope.reset();
    }
  };
  
  $scope.reset = function() {
    $scope.$broadcast('show-errors-reset');
    $scope.user = { name: '', email: '' };
  }
});