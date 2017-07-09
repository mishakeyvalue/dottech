'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.tinymce',
    'ngCookies',
    'message-flash'
])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        });

        // root
        $routeProvider.when('/root/login', {
            templateUrl: 'partials/root/login.html',
            controller: 'RootLoginCtrl'
        });
        $routeProvider.when('/root/pages', {
            templateUrl: 'partials/root/pages.html',
            controller: 'RootPagesCtrl'
        });
        $routeProvider.when('/root/pages/edit/:id', {
            templateUrl: 'partials/root/edit.html',
            controller: 'RootEditPageCtrl'
        });
        $routeProvider.when('/root/_log', {
            templateUrl: 'partials/root/log.html',
            controller: 'RootLogCtrl'
        });

        $routeProvider.when('/:url', {
            templateUrl: 'partials/page.html',
            controller: 'PageCtrl'
        });


        $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
        $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
        $routeProvider.otherwise({ redirectTo: '/home' });

        $locationProvider.html5Mode(true);
    }])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('myHttpInterceptor');
    });
