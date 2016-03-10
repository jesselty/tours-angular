'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyActivities
 * @description
 * # tyActivities
 */
angular.module('myAppApp')
    .directive('tyActivities', function() {
        return {
            scope: true,
            template: '<div class="ty-filter-block">' +
                '<ty-filter-list setting="filter" prop="activity"><span ng-transclude></span></ty-filter-list>' +
                '<div class="ty-filter-list-block center activity-filter" ng-show="filter.activity"' +
                ' ng-class="{\'filters-active\':ifAppliedFilters()}">' +
                '<ty-activities-list></ty-activities-list>' +
                '</div>' +
                '</div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            link: function postLink(scope, element, attrs) {}
        };
    });
