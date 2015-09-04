/* global angular */
'use strict';
var app = angular.module('app.Directives', []);

app.directive('navigation', [function(){
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/navigation.html'
        };
}]);

app.directive('profilePic', [function(){
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/profile-pic.html'
        };
}]);

