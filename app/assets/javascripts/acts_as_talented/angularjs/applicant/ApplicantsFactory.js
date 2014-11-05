ActsAsTalentedModule.factory("ApplicantsFactory", ["$resource", function ($resource) {
  return {
    applicants: function(){
      var msgs = [
        {
          name: "Batman",
          job_position: "Vigilante",
          message: "I consider myself a worthy candidate, Dark Knight",
          id: 0,
          resume: "Cool file/link here",
          message_id: 0
        },
        {
          name: "Superman",
          job_position: "Gamer",
          message: "I consider myself a worthy candidate, Man of Steel",
          id: 1,
          resume: "Cool file/link here",
          message_id: 1
        },
        {
          name: "Flash",
          job_position: "Coder",
          message: "I consider myself a worthy candidate, Fastest man!",
          id: 2,
          resume: "Cool file/link here",
          message_id: 2
        }
      ];
      return msgs;
    },

    messages: function (){
      var msgs = [
        {
          id: 0,
          sender_id: 1,
          sender_name: "Applicant 1",
          message: "Whats up man?",
          receiver_id: 6,
          receiver_name: "Batman",
          sent_at: "8:25 pm on some evening"
        },
        {
          id: 1,
          sender_id: 6,
          sender_name: "Batman",
          message: "just fighting crime",
          receiver_id: 1,
          receiver_name: "Applicant 1",
          sent_at: "8:30 pm on some evening"
        },
        {
          id: 2,
          sender_id: 1,
          sender_name: "Applicant 1",
          message: "Hello Joker here.",
          receiver_id: 6,
          receiver_name: "Batman",
          sent_at: "8:45 pm on some evening"
        },
      ]
    }
  }
}]);