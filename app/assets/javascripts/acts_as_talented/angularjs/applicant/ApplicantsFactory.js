ActsAsTalentedModule.factory("ApplicantsFactory", ["$resource", function ($resource) {
  return {
    applicants: function(){
      var user = [
        {
          name: "Batman",
          job_position: "Vigilante",
          message: "I consider myself a worthy candidate, Dark Knight",
          id: 0,
          resume: "Cool file/link here",
          message_id: 0,
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Dark Knight",
          course: "Superheroes 101",
          photo: "http://media.edge-online.com/wp-content/uploads/edgeonline/2013/08/Batman-Arkham-Origins-610x343.jpg",
          age: 24,
          location: "Metropolis",
          skills: "stealth, technology, tech toys",
          interests: "gadgets, technology",
          status: "Alumni",
          experience: "2 yrs" 
        },
        {
          name: "Superman",
          job_position: "Gamer",
          message: "I consider myself a worthy candidate, Man of Steel",
          id: 1,
          resume: "Cool file/link here",
          message_id: 1,
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Man of Steel",
          course: "Superheroes 102",
          photo: "http://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5285267ee4b048ecbebd1ce9/1384457859598/big-batman-vs-superman-movie-rumors-possible-spoilers.jpg",
          age: 24,
          location: "Metropolis",
          skills: "strength, laser beam eyes, bullerproof",
          interests: "kryptonite, krypton, lois lane",
          status: "Alumni",
          experience: "2 yrs" 
        },
        {
          name: "Flash",
          job_position: "Coder",
          message: "I consider myself a worthy candidate, Fastest man!",
          id: 2,
          resume: "Cool file/link here",
          message_id: 2,
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Fastest man!",
          course: "Superheroes 103",
          photo: "http://t0.gstatic.com/images?q=tbn:ANd9GcR8iEXTneF6nW_3ZgQkgpL4eFUoXDsltOclt0BMyM6lA65VXfTv",
          age: 24,
          location: "Metropolis",
          skills: "super speed, time travel",
          interests: "justice league",
          status: "Alumni",
          experience: "2 yrs"
        }
      ];
      return user;
    },

    messages: function (message_id){

      // get messages for the message_id
      var msgs = [
        {
          id: 0,
          sender_id: 1,
          sender_name: "Applicant 1",
          message: "Whats up man?",
          receiver_id: 6,
          receiver_name: "Batman",
          sent_at: "8:25 pm on some evening",
          message_id: 1
        },
        {
          id: 1,
          sender_id: 6,
          sender_name: "Batman",
          message: "just fighting crime",
          receiver_id: 1,
          receiver_name: "Applicant 1",
          sent_at: "8:30 pm on some evening",
          message_id: 1
        },
        {
          id: 2,
          sender_id: 1,
          sender_name: "Applicant 1",
          message: "Hello Joker here.",
          receiver_id: 6,
          receiver_name: "Batman",
          sent_at: "8:45 pm on some evening",
          message_id: 1
        },
      ];
      return msgs;
    }
  }
}]);