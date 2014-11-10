/*
//= require ../../../../app/assets/javascripts/acts_as_talented/application
*/

describe('Unit: ApplicantsFactory', function() {
  beforeEach(module('ActsAsTalentedModule'));

  it('should be return Applicant messages', inject(function(ApplicantsFactory){
    expect(true).toBe(true);
    expect(ApplicantsFactory.applicants().length).toBe(3)        
  }));

})