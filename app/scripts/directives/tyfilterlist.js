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
            template: '<div class="ty-filter" ng-click="toggleDisplay()" ng-class="{\'modal-open\':setting[prop]}">' +
                '<span ng-transclude class="ty-filter-name"></span> <i class="fa ty-icon" ng-class="{up:setting[prop]}"></i>' +
                '</div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            controller: ['CONSTANTS', '$rootScope', '$scope', function(CONSTANTS, $rootScope, $scope) {
                function toggleDisplayFn() {
                    var toggledOpenState = !$scope.setting[$scope.prop];
                    if (!$scope.allowmultiple) {
                        $rootScope.$broadcast(CONSTANTS.CLOSE_MODAL);
                    }
                    if (toggledOpenState) {
                        $rootScope.$broadcast(CONSTANTS.OPEN_MODAL);
                    }
                    $scope.setting[$scope.prop] = $scope.setting[$scope.prop] = toggledOpenState;
                }

                function closeFilterFn() {
                    $scope.setting[$scope.prop] = $scope.setting[$scope.prop] = false;
                }

                $scope.toggleDisplay = toggleDisplayFn;

                $scope.$on(CONSTANTS.CLOSE_MODAL, closeFilterFn);
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
