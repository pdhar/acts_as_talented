/*
//= require ../../../app/assets/javascripts/acts_as_talented/application
*/

describe('Unit: TabsController', function() {
  beforeEach(module('ActsAsTalentedModule'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('TabsController', {
      $scope: scope
    });
  }));

  it('should make a tab active', function(){
    expect(scope.tabClass['searchCandidate']).toEqual('inactive');
    scope.makeActiveTab('searchCandidate')
    expect(scope.tabClass['searchCandidate']).toEqual('active');
  })
})