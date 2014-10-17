ActsAsTalentedModule.factory("ApplicantsFactory", function ($resource) {
  return {
    messages: function(){
      var msgs = [
        {
          sender: "Batman",
          job_position: "Vigilante",
          message: "I consider myself a worthy candidate, Dark Knight",
          sender_id: 1,
          resume: "Cool file/link here"
        },
        {
          sender: "Superman",
          job_position: "Vigilante",
          message: "I consider myself a worthy candidate, Man of Steel",
          sender_id: 2,
          resume: "Cool file/link here"
        },
        {
          sender: "Flash",
          job_position: "Vigilante",
          message: "I consider myself a worthy candidate, Fastest man!",
          sender_id: 3,
          resume: "Cool file/link here"
        }
      ];
      return msgs;
    }
  }
});