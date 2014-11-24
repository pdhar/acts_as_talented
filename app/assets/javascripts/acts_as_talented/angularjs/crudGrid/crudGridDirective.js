ActsAsTalentedModule.directive('crudGrid', function () {
	return {
		//	'A' - only matches attribute name
		//	'E' - only matches element name
		//	'C' - only matches class name
		restrict: 'A',
		// Don't replace the element that contains the attribute
		replace: false,
		// scope = false, parent scope
		// scope = true, get new scope
		// scope = {..}, isolated scope
		scope: true,
		// view
		templateUrl: 'acts_as_talented/templates/crudGrid/crudGridView.html',
		// controller
		controller: "crudgridController as itemsCtrl"
	}
});