/*
//= require ../../../../app/assets/javascripts/acts_as_talented/application
*/

describe('Unit: ApplicantsController', function() {
  beforeEach(module('ActsAsTalentedModule'));

  var ctrl, scope, ApplicantMsgs;

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('ApplicantsController', {
      $scope: scope
    });
  }));

  // it('should get the message that is selected', function () {
  //   expect(scope.focusedThread).toBeNull();
  //   scope.getAllItems();
  //   expect(scope.focusedThread).toBe(applicantsList[0]);
  // });

  describe("load messages", function(){
    beforeEach(function(){
      scope.getAllItems();  
    })
    
    it("should get all messages", function(){
      expect(scope.applicantsList).toBeTruthy();
      // paginate to 10
      expect(scope.applicantsList.length).toBe(3);
    });

    it("should init 1st message", function(){
      expect(scope.focusedThread).toBeTruthy();
    });

    it("should init current_applicant", function(){
      expect(scope.current_applicant).toBeTruthy();
    });

    it("should get message from applicant", function(){
      scope.getMsgFromApplicant(scope.applicantsList[1].id) 
      expect(scope.focusedThread[0].message_id).toEqual(scope.applicantsList[1].message_id);
    });

    it("should set current_applicant", function(){
      scope.getApplicant(scope.applicantsList[1].id)
      expect(scope.current_applicant).toEqual(scope.applicantsList[1]);
    });    
  })
})