'use strict';
/**
 * @ngdoc directive
 * @name myAppApp.directive:tyCheckout
 * @description
 * # tyCheckout
 */
angular.module('myAppApp')
    .directive('tyCheckout', ['CONSTANTS', function(CONSTANTS) {
        return {
            scope: true,
            templateUrl: '/views/tycheckout.html',
            restrict: 'E',
            replace: true,
            controller: ['$scope', function($scope) {
                function setCountAsSelectedFn() {
                    $scope.detailsData.noOfTravellersSelected = $scope.eachpackage.travellerCountList[0];
                }

                function openPackageSelectionFn(e) {
                    e.stopPropagation();
                    $scope.slideList.opened = !$scope.slideList.opened;
                    $scope.selectPackages.isOpen = !$scope.selectPackages.isOpen;
                    if ($scope.selectPackages.isOpen) {
                        $scope.$emit(CONSTANTS.OPEN_MODAL);
                        $scope.datePicker.isOpen = false;
                    } else {
                        $scope.$emit(CONSTANTS.CLOSE_MODAL);
                    }
                }

                function closePackageSelectionFn() {
                    $scope.selectPackages.isOpen = false;
                }

                function toggleCalendarFn(e) {
                    e.stopPropagation();
                    $scope.slideList.opened = !$scope.slideList.opened;
                    $scope.datePicker.isOpen = !$scope.datePicker.isOpen;
                    if ($scope.datePicker.isOpen) {
                        $scope.$emit(CONSTANTS.OPEN_MODAL);
                        $scope.selectPackages.isOpen = false;
                    } else {
                        $scope.$emit(CONSTANTS.CLOSE_MODAL);
                    }
                }

                function closeAllModalsFn() {
                    $scope.$emit(CONSTANTS.CLOSE_MODAL);
                }

                function stopPropagationFn(e) {
                    e.stopPropagation();
                }

                function toggleCheckoutFn() {
                    $scope.checkoutBlock.isCollapsed = !$scope.checkoutBlock.isCollapsed;
                }

                $scope.setCountAsSelected = setCountAsSelectedFn;
                $scope.openPackageSelection = openPackageSelectionFn;
                $scope.toggleCalendar = toggleCalendarFn;
                $scope.closeAllModals = closeAllModalsFn;
                $scope.stopPropagation = stopPropagationFn;
                $scope.selectPackages.details = $scope.eachpackage.packageOptions[0];
                $scope.checkoutBlock = $scope.detailsData.checkoutBlock;
                $scope.toggleCheckout = toggleCheckoutFn;

                $scope.$on(CONSTANTS.CLOSE_MODAL, closePackageSelectionFn);
            }],
            link: function postLink(scope, element, attrs) {}
        };
    }]);
