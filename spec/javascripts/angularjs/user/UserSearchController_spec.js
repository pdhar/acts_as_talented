/*
//= require ../../../../app/assets/javascripts/acts_as_talented/application
*/

describe('Unit: UserSearchController', function() {
  var mockUserSearch, $httpBackend;
  beforeEach(angular.mock.module('ActsAsTalentedModule'));

  var ctrl, scope;
  var skills = [
  {id:1, name:"game"}, 
  {id:2, name:"pc"},
  {id:3, name:"android"}]

  var fake_user_collection = [
    {
      id: 1,
      first_name: "Satya",
      last_name: "Pramodh",
      username: "pramodh",
      course: "computers",
      graduation_year: 2014,
      photo: "http://static.comicvine.com/uploads/scale_super/11111/111112793/3031477-nealadamsbatman.jpg",
      is_friend: "pending",
      gender: "male",
      detailed: {
        status: "Student",
        profile_stage: "finish",
        looking_for_job: true,
        address: "bangalore, india",
        lat: 12.123,
        lng: 11.123,
        about: "lorem ipsum",
        university: "Amity University"
      },
      professional: {
        work: [
          {
            id: 2,
            company: "codebrahma",
            title: "developer",
            from_date: 1-1-2014,
            to_date: 1-1-2015,
            desc: "dev"
          }
        ],
        skills: [
          {
            id: 185,
            name: "rails"
          },
          {
            id: 186,
            name: "ruby"
          },
          {
            id: 187,
            name: "html"
          },
          {
            id: 188,
            name: "javascript"
          },
          {
            id: 189,
            name: "jquery"
          }
        ],
        awards: [
          {
            id: 1,
            title: "game show",
            date: null,
            desc: "Won it"
          }
        ],
        languages: [
          {
            id: 41,
            name: "English"
          },
          {
            id: 155,
            name: "Telugu"
          }
        ]
      }
    }
  ]
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('UserSearchController', {
      $scope: scope
    });

    angular.mock.inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      mockUserSearch = $injector.get('UserSearchFactory');
    })

  }));

  describe("load users", function(){
    
    it("should fetch users", inject(function(UserSearchFactory){
      $httpBackend.expectGET(/search/)
      .respond(fake_user_collection);

      scope.search_term = "Batman";
      scope.searchUsers();

      $httpBackend.flush();
      console.log(scope.users);
      expect(scope.users).toBeTruthy();
    }))

    it("should not fetch users with no search term", function(){
      scope.search_term = "";
      scope.searchUsers();

      expect(scope.users).toBeNull();
    })
    
  })

  describe("reset_form", function () {
    beforeEach(function(){
      $httpBackend.expectGET(/search/)
      .respond(fake_user_collection);

      scope.search_term = "Batman";
      scope.searchUsers();
      
      $httpBackend.flush();
    })

    it("should reset", function(){
      expect(scope.users).toBeTruthy();
      expect(scope.search_term).toBeTruthy();
      scope.reset_form();
      expect(scope.users).toBeNull();
    })
  });

  describe("skills in words", function(){
    it("list skills in words", function(){
      expect(scope.skills_in_words(skills)).toBe("game, pc, android")
    })
  })
})