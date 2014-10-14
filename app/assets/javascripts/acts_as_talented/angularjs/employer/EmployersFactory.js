ActsAsTalentedModule.factory("EmployersFactory", function ($resource) {
    return $resource('/api/KnownItems/:id',
    {
        // default URL params
        // @ Indicates that the value should be obtained from a data property
        id: '@Id'
    },
    {
        // add update to actions (is not defined by default)
        'update': { method: 'PUT' }
    });
});