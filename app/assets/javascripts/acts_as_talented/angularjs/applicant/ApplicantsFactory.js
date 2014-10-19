ActsAsTalentedModule.factory("ApplicantsFactory", function ($resource) {
  return {
    messages: function(){
      var msgs = [
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
      return msgs;
    }
  }
});