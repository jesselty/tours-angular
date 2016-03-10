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
            controllerAs: 'eachdesc',
            templateUrl: '/views/tyeachdesc.html',
            restrict: 'E',
            controller: ['$scope', function($scope){
                this.title = $scope.title;
                this.list = $scope.list;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
