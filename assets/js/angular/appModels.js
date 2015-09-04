/* global angular */
'use strict';
var app = angular.module('app.Models', [
    'ngResource'
]);

app.config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.actions.query.cache = true;
    }]);

app.factory('Projects', ['$resource', function ($resource) {
        return $resource('/api/cities/:id', {}, {
        });
    }]);
