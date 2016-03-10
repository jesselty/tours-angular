'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyPackages
 * @description
 * # tyPackages
 */
angular.module('myAppApp')
    .directive('tyPackages', function() {
        return {
            scope: true,
            templateUrl: '/views/typackages.html',
            restrict: 'E',
            replace: true,
            link: function postLink(scope, element, attrs) {}
        };
    });
