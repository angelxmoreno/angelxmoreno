/* global angular */
'use strict';
var app = angular.module('angularApp', [
    'ngSanitize',
    'app.Routes',
    'app.Controllers',
    'app.Models',
    'app.Directives',
    'app.Filters'
]);
//make lodash work in angular world
//http://stackoverflow.com/a/29710617/372875
app.constant('_', window._);
