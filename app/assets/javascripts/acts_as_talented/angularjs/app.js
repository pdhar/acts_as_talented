var ActsAsTalentedModule = angular.module("ActsAsTalentedModule", ["ui.router", "ngResource", "templates"]);
 
ActsAsTalentedModule.config(function ($stateProvider, $urlRouterProvider) {
 
  // For any unmatched URL, redirect to stock
  $urlRouterProvider.otherwise("/Employers");

  $stateProvider
	  .state('myJobs', {
      url: "/myJobs",
      templateUrl: "acts_as_talented/templates/my_jobs.html"
    })
    .state('searchCandidate', {
      url: "/searchCandidate",
      templateUrl: "acts_as_talented/templates/search_candidate.html"
    })
    .state('myProfile', {
      url: "/myProfile",
      templateUrl: "acts_as_talented/templates/my_profile.html"
    })
    .state('jobAnalytics', {
      url: "/jobAnalytics",
      templateUrl: "acts_as_talented/templates/job_analytics.html"
    })
	  .state('Employers', {
      url: "/Employers",
      templateUrl: "acts_as_talented/templates/employers.html",
      controller: "EmployersController"
	  });

});