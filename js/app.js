var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/landing", {
            templateUrl: "html/landing.html"
        })
        .when("/", {
            templateUrl: "html/home.html"
        })
        .when("/contact", {
            templateUrl: "html/contact.html"
        });;

});

