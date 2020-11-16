var app = angular.module("puentes", ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller:"bridges",
        templateUrl: "./js/temple/puentes.html"
    })
    .when("/photos/:id/", {
        controller:"info",
        templateUrl : "./js/temple/info.html"
    })
    .otherwise({ 
        redirectTo: '/' 
      }); 
});