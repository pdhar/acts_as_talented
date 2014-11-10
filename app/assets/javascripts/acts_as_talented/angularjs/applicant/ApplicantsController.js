ActsAsTalentedModule.controller("ApplicantsController", ["$scope", "ApplicantsFactory", "notificationFactory", function ($scope, ApplicantsFactory, notificationFactory) {
 
  // init variables
  $scope.no_messages=true;
  $scope.focusedThread = null ;

  $scope.job_position = [
    {name: "Vigilante"}, 
    {name: "Coder"}, 
    {name: "Gamer"},
    {name: "Web Developer"},
    {name: "Software Engineer"},
    {name: "Data Analytics"},
    {name: "Marketing"}
  ];

  // set current user for later use in the applicant message thread
  $scope.current_user = 6;
  $scope.current_applicant = null;

  // PRIVATE FUNCTIONS 
  var requestSuccess = function () {
    notificationFactory.success();
  }

  var requestError = function (error) {
    notificationFactory.error(error.statusText);
  }

  // Get all items from the server
  $scope.getAllItems = function () {
    $scope.loading = true;
    // $scope.applicantsList = ApplicantsFactory.fac(function (success) {
    //   $scope.loading = false;
    // }, requestError);
    $scope.applicantsList = ApplicantsFactory.applicants();
    requestSuccess();
    $scope.loading = false;
    if($scope.applicantsList.length > 0){
      $scope.msgInit();
    }    
  }

  $scope.msgInit = function(){
    $scope.focusedThread = ApplicantsFactory.messages($scope.applicantsList[0].message_id);
    $scope.current_applicant = $scope.applicantsList[0];
    $scope.no_messages = false;    
  }

  $scope.getMsgFromApplicant = function(applicant_id){
    $scope.focusedThread = ApplicantsFactory.messages(applicant_id);    
    $scope.getApplicant(applicant_id)
    $scope.no_messages = false;
  }

  $scope.getApplicant = function(applicant_id){
    for(num in $scope.applicantsList){
      user = $scope.applicantsList[num]
      if (user.id == applicant_id){
        $scope.current_applicant = user;
      }
    }
  }

}]);