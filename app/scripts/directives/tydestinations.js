'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyDestinations
 * @description
 * # tyDestinations
 */
angular.module('myAppApp')
    .directive('tyDestinations', function() {
        return {
            scope: true,
            template: '<div class="ty-filter-block">'+
                '<ty-filter-list setting="filter" prop="destination"><span ng-transclude></span></ty-filter-list>'+
                '<div class="ty-filter-list-block center" ng-show="filter.destination"'+
                ' ng-class="{\'filters-active\':ifAppliedFilters()}">' +
                    '<ty-destinations-list></ty-destinations-list>'+
                '</div>'+
            '</div>',
            restrict: 'E',
            replace:true,
            transclude:true,
            link: function postLink(scope, element, attrs) {}
        };
    });
