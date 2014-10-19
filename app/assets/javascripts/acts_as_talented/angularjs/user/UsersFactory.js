ActsAsTalentedModule.factory("UsersFactory", function ($resource) {
  return {
    users: function(){
      var users = [
        {
          name: "Batman",
          seeking_job: true,
          graduation_year: "I consider myself a worthy candidate, Dark Knight",
          course: "Superheroes 101",
          id: 1,
          photo: "http://google.com/logo.jpg",
          age: 24,
          location: "Metropolis",
          skills: "stealth, technology, tech toys",
          interests: "gadgets, technology"        
        },
        {
          name: "Superman",
          seeking_job: true,
          graduation_year: "I consider myself a worthy candidate, Man of Steel",
          course: "Superheroes 102",
          id: 2,
          photo: "http://google.com/logo.jpg",
          age: 24,
          location: "Metropolis",
          skills: "strength, laser beam eyes, bullerproof",
          interests: "kryptonite, krypton, lois lane"          
        },
        {
          name: "Flash",
          seeking_job: true,
          graduation_year: "I consider myself a worthy candidate, Fastest man!",
          course: "Superheroes 103",
          id: 3,
          photo: "http://google.com/logo.jpg",
          age: 24,
          location: "Metropolis",
          skills: "super speed, time travel",
          interests: "justice league"          
        }
      ];
      return users;
    }
  }
});