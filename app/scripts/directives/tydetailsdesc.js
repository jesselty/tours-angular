'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyDetailsDesc
 * @description
 * # tyDetailsDesc
 */
angular.module('myAppApp')
    .directive('tyDetailsDesc', function() {
        return {
            scope: true,
            replace: true,
            templateUrl: '/views/tydetailsdesc.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });
