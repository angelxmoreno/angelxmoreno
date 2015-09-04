/* global angular */
'use strict';
var app = angular.module('app.Routes', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            hashPrefix: '!'
        });
        $routeProvider.when('/', {
            templateUrl: '/assets/views/home.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).when('/about', {
            templateUrl: '/assets/views/about.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).when('/services', {
            templateUrl: '/assets/views/services.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).when('/repos', {
            templateUrl: '/assets/views/repos.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).when('/portfolio', {
            templateUrl: '/assets/views/portfolio.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).when('/contact', {
            templateUrl: '/assets/views/contact.html',
            controller: 'PageCtrl',
            reloadOnSearch: false
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);