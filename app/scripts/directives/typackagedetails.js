'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyPackageDetails
 * @description
 * # tyPackageDetails
 */
angular.module('myAppApp')
    .directive('tyPackageDetails', function() {
        return {
            scope: true,
            replace: true,
            templateUrl: '/views/typackagedetails.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });
