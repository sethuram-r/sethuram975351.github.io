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
        }) .when("/about", {
        templateUrl: "html/about.html"
    }).when("/skill", {
        templateUrl: "html/skill.html"
    }).when("/portfolio", {
        templateUrl: "html/portfolio.html"
    });

});

