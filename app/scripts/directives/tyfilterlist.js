'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyfilterList
 * @description
 * # tyfilterList
 */
angular.module('myAppApp')
    .directive('tyFilterList', function() {
        return {
            scope: {
                allowmultiple: "=",
                setting: "=",
                prop: "@"
            },
            template: '<div class="ty-filter" ng-click="filterlist.toggleDisplay()" ng-class="{\'modal-open\':filterlist.setting[filterlist.prop]}">' +
                '<span ng-transclude class="ty-filter-name"></span> <i class="fa ty-icon" ng-class="{up:filterlist.setting[filterlist.prop]}"></i>' +
                '</div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            controllerAs: 'filterlist',
            controller: ['$rootScope', '$scope', function($rootScope, $scope) {
                var that = this;

                function toggleDisplayFn() {
                    var toggledOpenState = !that.setting[that.prop];
                    if (!$scope.allowmultiple) {
                        $rootScope.$broadcast('close-modal');
                    }
                    if (toggledOpenState) {
                        $rootScope.$broadcast('open-modal');
                    }
                    $scope.setting[that.prop] = that.setting[that.prop] = toggledOpenState;
                }

                function closeFilterFn() {
                    $scope.setting[that.prop] = that.setting[that.prop] = false;
                }

                that.setting = $scope.setting;
                that.prop = $scope.prop;
                that.toggleDisplay = toggleDisplayFn;

                $scope.$on('close-modal', closeFilterFn);
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
