ActsAsTalentedModule.factory("UsersFactory", ["$resource", function ($resource) {
  return {
    users: function(){
      var users = [
        {
          name: "Batman",
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Dark Knight",
          course: "Superheroes 101",
          id: 0,
          photo: "http://media.edge-online.com/wp-content/uploads/edgeonline/2013/08/Batman-Arkham-Origins-610x343.jpg",
          age: 24,
          location: "Metropolis",
          skills: "stealth, technology, tech toys",
          interests: "gadgets, technology"        
        },
        {
          name: "Superman",
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Man of Steel",
          course: "Superheroes 102",
          id: 1,
          photo: "http://static.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5285267ee4b048ecbebd1ce9/1384457859598/big-batman-vs-superman-movie-rumors-possible-spoilers.jpg",
          age: 24,
          location: "Metropolis",
          skills: "strength, laser beam eyes, bullerproof",
          interests: "kryptonite, krypton, lois lane"          
        },
        {
          name: "Flash",
          seeking_job: true,
          graduation_year: 2014,
          about: "I consider myself a worthy candidate, Fastest man!",
          course: "Superheroes 103",
          id: 2,
          photo: "http://t0.gstatic.com/images?q=tbn:ANd9GcR8iEXTneF6nW_3ZgQkgpL4eFUoXDsltOclt0BMyM6lA65VXfTv",
          age: 24,
          location: "Metropolis",
          skills: "super speed, time travel",
          interests: "justice league"          
        }
      ];
      return users;
    }
  }
}]);