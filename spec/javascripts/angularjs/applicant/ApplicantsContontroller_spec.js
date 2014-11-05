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

    ApplicantMsgs = [
      {
        name: "Batman",
        job_position: "Vigilante",
        message: "I consider myself a worthy candidate, Dark Knight",
        id: 0,
        resume: "Cool file/link here"
      },
      {
        name: "Superman",
        job_position: "Gamer",
        message: "I consider myself a worthy candidate, Man of Steel",
        id: 1,
        resume: "Cool file/link here"
      },
      {
        name: "Flash",
        job_position: "Coder",
        message: "I consider myself a worthy candidate, Fastest man!",
        id: 2,
        resume: "Cool file/link here"
      }
    ];
  }));

  it('should be true', function(){
    expect(true).toBe(true);
  });

  it('should get the message that is selected', function () {
    expect(scope.focusedMsg).toBeNull();
    scope.getMsg(ApplicantMsgs[0]);
    expect(scope.focusedMsg).toBe(ApplicantMsgs[0]);
  });

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
      expect(scope.focusedMsg).toBeTruthy();
    });
  })
})