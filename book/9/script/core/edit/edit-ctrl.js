app.controller('editCtrl', function($scope, $location, $filter, categories) {
    $scope.categories = categories;
    $scope.formData = {
        type: $scope.categories[0],
        estimates: $scope.estimates = 1,
        date: $filter('date')(Date.now(), "dd/M/yyyy"),
        newTodo: 'Test'
    };
    $scope.addTodo = function() {
        //   console.log('addTodo');
        $scope.$parent.todos.push({
            'title': $scope.formData.newTodo,
            'done': false,
            'type': $scope.formData.type,
            'estimates': $scope.formData.estimates,
            'date': $scope.formData.date
        });
        $scope.formData.newTodo = '';
        $location.path('/list');
    };
});