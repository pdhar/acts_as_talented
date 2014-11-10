/*
//= require ../../../../app/assets/javascripts/acts_as_talented/application
*/

describe('Unit: UserSearchController', function() {
  beforeEach(module('ActsAsTalentedModule'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('UserSearchController', {
      $scope: scope
    });
  }));

  describe("load users", function(){
    
    it("should fetch users", function(){
      scope.search_term = "Batman";
      scope.searchUsers();
      expect(scope.users).toBeTruthy();
    })

    it("should not fetch users with no search term", function(){
      scope.search_term = "";
      scope.searchUsers();
      expect(scope.users).toBeNull();
    })
    
  })

  describe("reset_form", function () {
    beforeEach(function(){
      scope.search_term = "Batman";
      scope.searchUsers();
    })

    it("should reset", function(){
      expect(scope.users).toBeTruthy();
      expect(scope.search_term).toBeTruthy();
      scope.reset_form();
      expect(scope.users).toBeNull();
    })
  })
})