'use strict';
var app = angular.module('app.Filters', []);
app.filter('break', function () {
    return function (text) {
        return text.replace(';', '<br />');
    };
});
