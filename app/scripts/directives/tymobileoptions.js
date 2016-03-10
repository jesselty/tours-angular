'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyMobileOptions
 * @description
 * # tyMobileOptions
 */
angular.module('myAppApp')
    .directive('tyMobileOptions', ['$rootScope', function($rootScope) {
        return {
            scope: true,
            templateUrl: '/views/tymobileoptions.html',
            restrict: 'E',
            replace: true,
            controller: ['$scope', function($scope) {
                function showMobileSortDisplayFn() {
                    $scope.slideList.opened = true;
                    $scope.isFilter.opened = false;
                }

                function closeSlideListFn() {
                    if($scope.category=='activities'){
                        return;
                    }
                    $scope.slideList.opened = false;
                }

                $scope.showMobileSortDisplay = showMobileSortDisplayFn;
                $scope.closeSlideList = closeSlideListFn;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    }]);
