'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyEachDesc
 * @description
 * # tyEachDesc
 */
angular.module('myAppApp')
    .directive('tyEachDesc', function() {
        return {
            scope: {
                note: '=',
                list: '='
            },
            replace: true,
            transclude: true,
            templateUrl: '/views/tyeachdesc.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });
