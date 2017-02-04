app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "script/core/default/default.html"
        })
        .when('/list', {
            templateUrl: "script/core/list/list.tpl.html",
            controller: "listCtrl"
        })
        .when('/edit', {
            templateUrl: "script/core/edit/edit.tpl.html",
            controller: "editCtrl"
        })
        .when('/json', {
            templateUrl: "script/core/json/json.tpl.html"
        })
        .otherwise({
            template: "Brak strony!"
        });
});