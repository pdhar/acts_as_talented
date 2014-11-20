ActsAsTalentedModule.factory("UserSearchFactory", ["$resource", "$http", function ($resource, $http) {
  return {    
    // http://home.127.0.0.1.xip.io:3000/api/v1/users/search
    Users: $resource('https://v2.bevy.is/api/v1/users/search')
    // users: function(search_term){
    //   // use search_term
    //   var users = [{
    //     name: "Batman",
    //     course: "Computers",
    //     location: "Bangalore",
    //     graduation_year: "2014",
    //     skills: "Web, vigilante, technology",
    //     about: "I am batman I am batman I am batman I am batman I am batman I am batman I am batman I am batman I am batman ",
    //     interests: "rails, ruby",
    //     age: "24",
    //     experience: "3 yr",
    //     status: "Alumni",
    //     photo: "http://static.comicvine.com/uploads/scale_super/11111/111112793/3031477-nealadamsbatman.jpg"
    //   },
    //   {
    //     name: "Superman",
    //     course: "Electronics",
    //     location: "Bangalore",
    //     graduation_year: "2015",
    //     skills: "Web, vigilante, strength",
    //     about: "I am superman I am superman I am superman I am superman I am superman I am superman I am superman I am superman I am superman ",
    //     interests: "java, python",
    //     age: "24",
    //     experience: "2 yr",
    //     status: "Working",
    //     photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqtwASrIsgGhn6RnJQuDHJqhEVHZQGC7SLNTv8KcGhwfoRcFZO"
    //   },
    //   {
    //     name: "Flash",
    //     course: "Biotechnology",
    //     location: "Bangalore",
    //     graduation_year: "2016",
    //     skills: "Web, vigilante, speed",
    //     about: "I am flash I am flash I am flash I am flash I am flash I am flash I am flash I am flash ",
    //     interests: "rails, python",
    //     age: "24",
    //     experience: "1 yr",
    //     status: "Student",
    //     photo: "http://t0.gstatic.com/images?q=tbn:ANd9GcR8iEXTneF6nW_3ZgQkgpL4eFUoXDsltOclt0BMyM6lA65VXfTv"
    //   },
    //   {
    //     name: "Aquaman",
    //     course: "Computers",
    //     location: "Bangalore",
    //     graduation_year: "2014",
    //     skills: "Web, vigilante, technology",
    //     about: "I am Aquaman I am Aquaman I am Aquaman I am Aquaman I am Aquaman I am Aquaman I am Aquaman I am Aquaman I am Aquaman ",
    //     interests: "rails, ruby",
    //     age: "24",
    //     experience: "3 yr",
    //     status: "Alumni",
    //     photo: "http://media.dcentertainment.com/sites/default/files/AquamanSideburns.jpg"
    //   },
    //   {
    //     name: "Green Lantern",
    //     course: "Electronics",
    //     location: "Bangalore",
    //     graduation_year: "2015",
    //     skills: "Web, vigilante, strength",
    //     about: "I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern I am Green Lantern ",
    //     interests: "java, python",
    //     age: "24",
    //     experience: "2 yr",
    //     status: "Working",
    //     photo: "http://facomics.com/wp-content/uploads/2014/10/greenlanternhaljordan.jpg"
    //   },
    //   {
    //     name: "Cyborg",
    //     course: "Biotechnology",
    //     location: "Bangalore",
    //     graduation_year: "2016",
    //     skills: "Web, vigilante, speed",
    //     about: "I am Cyborg I am Cyborg I am Cyborg I am Cyborg I am Cyborg I am Cyborg I am Cyborg I am Cyborg ",
    //     interests: "rails, python",
    //     age: "24",
    //     experience: "1 yr",
    //     status: "Student",
    //     photo: "http://www.staractionfigures.co.uk/user/products/large/-pre-order-cyborg-artfx-justice-league-new-52-statue-1516-p.jpg"
    //   }];
    //   return users;
    // },
  }
}]);