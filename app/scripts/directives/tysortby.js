'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tySortBy
 * @description
 * # tySortBy
 */
angular.module('myAppApp')
    .directive('tySortBy', function() {
        return {
            scope: true,
            template: '<div class="ty-filter-block">'+
                '<ty-filter-list setting="filter" prop="sort"><span ng-transclude></span> </ty-filter-list>'+
                '<div class="ty-filter-list-block right" ng-show="filter.sort"'+
                ' ng-class="{\'filters-active\':ifAppliedFilters()}">' +
                    '<ty-sort-by-list></ty-sort-by-list>'+
                '</div>'+
            '</div>',
            restrict: 'E',
            replace:true,
            transclude:true,
            link: function postLink(scope, element, attrs) {}
        };
    });
