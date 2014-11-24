ActsAsTalentedModule.directive('formGroupInclude', function($compile) {
  
  return {
    replace : true,
    scope : false,
    restrict : 'E',
    template: "<div test='{{test}}' class='form-group col-sm-8 col-sm-offset-2 margin-bottom-sm' show-errors='{showSuccess: true}'><label class='control-label'>"
    + "{{placeholder}}</label><input type='text' class='form-control' name='address' ng-model='{{objectName}}' required placeholder='{{placeholder}}' /><p class='help-block' ng-if='userForm.address.$error.required'>The user's address is required</p></div>",
    link : function($scope, $element, $attrs) {
    	$scope.test = $attrs.test;
    	$scope.placeholder = $attrs.placeholder;
    	$scope.objectName = "user.address";
    }
  };
});


