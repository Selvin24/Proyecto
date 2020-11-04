var app = angular.module("puentes", ["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller:"MainController",
        templateUrl: "./js/temple/puentes.html"
    })
    .when("/photos/:id", {
        controller:"MainController",
        templateUrl : "./js/temple/info.html"
    })
    .otherwise({ 
        redirectTo: '/' 
      }); 
});