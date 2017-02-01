var myApp = angular.module('myApp', ['myApp2']);
var myApp2 = angular.module('myApp2', []);
myApp.controller('someCtrl', function($scope) {
    $scope.message = 'Hello, Arek!';
});
myApp2.controller('otherCtrl', function($scope) {
    $scope.otherMessage = 'Hello, Datek!';
});