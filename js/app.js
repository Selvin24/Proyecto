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
    .when("/contactUs/", {
        controller:"info",
        templateUrl : "./js/temple/form.html"
    })
    .when("/about/", {
        controller:"info",
        templateUrl : "./js/temple/about.html"
    })
    .otherwise({ 
        redirectTo: '/' 
      }); 
});