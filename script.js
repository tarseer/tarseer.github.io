// create the module and name it scotchApp

var scotchApp = angular.module('tarseer', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        // route for the press page
        .when('/press', {
            templateUrl : 'pages/press.html',
            controller  : 'pressController'
        });


});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = '3 million people are suffering in the United States from glaucoma, globally this number will rise ' +
        'to 80 million by 2020.';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = '';
});

scotchApp.controller('contactController', function($scope) {
});

scotchApp.controller('pressController', function($scope) {
});