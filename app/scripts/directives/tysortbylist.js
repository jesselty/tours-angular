'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tySortByList
 * @description
 * # tySortByList
 */
angular.module('myAppApp')
    .directive('tySortByList', function() {
        return {
            scope: true,
            template: '<form class="ty-sort-form">'+ 
                '<ul class="ty-filter-list filter-list sort-list ty-ul-pad-left">' +
                '<li><label><input type="radio" name="sortBy" value="price-low-high" ng-click="sortPackage(\'price\',false)" ng-checked="sort.by == \'price\' && sort.reverse === false"/> Price: Low to High</label></li>' +
                '<li><label><input type="radio" name="sortBy" value="price-high-low" ng-click="sortPackage(\'price\',true)" ng-checked="sort.by == \'price\' && sort.reverse === true"/> Price: High to Low</label></li>' +
                '<li><label><input type="radio" name="sortBy" value="duration-low-high" ng-click="sortPackage(\'duration\',false)" ng-checked="sort.by == \'duration\' && sort.reverse === false"/> Duration: Low to High</label></li>' +
                '<li><label><input type="radio" name="sortBy" value="duration-high-low" ng-click="sortPackage(\'duration\',true)" ng-checked="sort.by == \'duration\' && sort.reverse === true"/> Duration: High to Low</label></li>' +
                '</ul>'+
                '</form>',
            restrict: 'E',
            replace: true,
            controller: ['$scope', function($scope) {
                function sortPackageFn(prop,order){
                    $scope.sort.by = prop;
                    $scope.sort.reverse = order;
                }
                function isFilterSelected(prop, order){
                    return $scope.sort.by == prop && $scope.sort.reverse === order;
                }

                $scope.sortPackage = sortPackageFn;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
