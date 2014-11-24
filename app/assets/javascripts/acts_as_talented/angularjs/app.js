
var ActsAsTalentedModule = angular.module("ActsAsTalentedModule", ["ui.router", "ui.bootstrap", "ui.bootstrap.datepicker", "ngResource", "templates", "angularUtils.directives.dirPagination"]);
 
ActsAsTalentedModule.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
 
  // For any unmatched URL, redirect to Employers
  $urlRouterProvider.otherwise("/Employers");

  $stateProvider
	  .state('myJobs', {
      url: "/myJobs",
      templateUrl: "acts_as_talented/templates/my_jobs.html"
    })
    .state('searchCandidate', {
      url: "/searchCandidate",
      templateUrl: "acts_as_talented/templates/Users/search.html",
      controller: "UserSearchController"
    })
    .state('myProfile', {
      url: "/myProfile",
      templateUrl: "acts_as_talented/templates/my_profile.html"
    })    
    .state('companyProfile', {
      url: "/companyProfile",
      templateUrl: "acts_as_talented/templates/company_profile.html"
    })
    .state('myApplicants', {
      // abstract: true,
      url: "/myApplicants",
      templateUrl: "acts_as_talented/templates/MyApplicants/my_applicants.html",
      controller: "ApplicantsController"     
    })
    // .state('myApplicants.list', { 
    //   url: "/list",
    //   templateUrl: "acts_as_talented/templates/MyApplicants/my_applicants.list.html"              
    // })
    .state('myApplicants.detail', {      
      url: '/:id',
      templateUrl: 'acts_as_talented/templates/MyApplicants/my_applicants.detail.html',
      controller: ["$scope", "$stateParams", function($scope, $stateParams){
              $scope.getMsgFromApplicant($stateParams.id);
            }]        
    })
	  .state('Employers', {
      url: "/Employers",
      templateUrl: "acts_as_talented/templates/employers.html"
      // controller: "EmployersController"
	  });

}]);

// ActsAsTalentedModule.directive('showErrors', ["$timeout", "showErrorsConfig", function ($timeout, showErrorsConfig) {
//   var getShowSuccess, linkFn;
    
//   getShowSuccess = function (options) {
//     var showSuccess;
//     showSuccess = showErrorsConfig.showSuccess;
//     if (options && options.showSuccess != null) {
//       showSuccess = options.showSuccess;
//     }
//     return showSuccess;
//   };

//   linkFn = function (scope, el, attrs, formCtrl) {
//     var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses;
//     blurred = false;
//     options = scope.$eval(attrs.showErrors);
//     showSuccess = getShowSuccess(options);
//     inputEl = el[0].querySelector('[name]');
//     inputNgEl = angular.element(inputEl);
//     inputName = inputNgEl.attr('name');
//     if (!inputName) {
//       throw 'show-errors element has no child input elements with a \'name\' attribute';
//     }
//     inputNgEl.bind('blur', function () {
//       blurred = true;
//       return toggleClasses(formCtrl[inputName].$invalid);
//     });
//     scope.$watch(function () {
//       return formCtrl[inputName] && formCtrl[inputName].$invalid;
//     }, function (invalid) {
//       if (!blurred) {
//         return;
//       }
//       return toggleClasses(invalid);
//     });
//     scope.$on('show-errors-check-validity', function () {
//       return toggleClasses(formCtrl[inputName].$invalid);
//     });
//     scope.$on('show-errors-reset', function () {
//       return $timeout(function () {
//         el.removeClass('has-error');
//         el.removeClass('has-success');
//         return blurred = false;
//       }, 0, false);
//     });
//     return toggleClasses = function (invalid) {
//       el.toggleClass('has-error', invalid);
//       if (showSuccess) {
//         return el.toggleClass('has-success', !invalid);
//       }
//     };
//   };
//   return {
//     restrict: 'A',
//     require: '^form',
//     compile: function (elem, attrs) {
//       if (!elem.hasClass('form-group')) {
//         throw 'show-errors element does not have the \'form-group\' class';
//       }
//       return linkFn;
//     }
//   };

// }]);

// ActsAsTalentedModule.provider('showErrorsConfig', function () {
//   var _showSuccess;
//   _showSuccess = false;
//   this.showSuccess = function (showSuccess) {
//     return _showSuccess = showSuccess;
//   };
//   this.$get = function () {
//     return { showSuccess: _showSuccess };
//   };
// });

ActsAsTalentedModule.directive('userCard',  function () {
  return {
    restrict: "E",
    templateUrl: "acts_as_talented/templates/Users/user_card.html"
  }
});

