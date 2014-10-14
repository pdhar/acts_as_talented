var ActsAsTalentedModule = angular.module("ActsAsTalentedModule", ["ui.router", "ngResource", "templates"]);
 
ActsAsTalentedModule.config(function ($stateProvider, $urlRouterProvider) {
 
  // For any unmatched URL, redirect to stock
  $urlRouterProvider.otherwise("/Employers");

  $stateProvider
	  // Known items
	  .state('Employers', {
	      url: "/Employers",
	      templateUrl: "acts_as_talented/templates/employers.html",
	      controller: "EmployersController"
	  });
 
});