'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('DetailsCtrl', ['$routeParams', '$rootScope', 'CONSTANTS', '$scope', 'detailsService', 'detailsData',
        function($routeParams, $rootScope, CONSTANTS, $scope, detailsService, detailsData) {
            function getDataForPageFn() {
                detailsService.getPackageInfo().then(function(data) {
                    detailsData.packages = data.data;
                });
            }

            function closeSlideFn() {
                $scope.slideList.opened = false;
                detailsData.selectPackages.isOpen = false;
            }

            function setPackageAsSelectedFn(selectedPackage) {
                $scope.slideList.opened = false;
                detailsData.selectPackages.isOpen = false
                detailsData.selectPackages.details = selectedPackage;
                $rootScope.$broadcast(CONSTANTS.CLOSE_MODAL);
            }

            function closeCalendarFn() {
                $scope.slideList.opened = false;
            }

            $scope.category = $routeParams.category.toLowerCase();
            $scope.slug = $routeParams.slug.toLowerCase().replace(/-/g, " ");
            $scope.categoryText = $scope.category == "activities" ? "Activities" : "Tours & Packages";
            $scope.breadcrumbText = [$scope.categoryText, $routeParams.slug];
            $scope.breadcrumbText = [
                { 'name': $scope.categoryText, 'url': "/" + $routeParams.category },
                { 'name': $scope.slug, 'url': "/" + $routeParams.category + "/" + $routeParams.slug }
            ];
            $scope.detailsData = detailsData;
            $scope.selectPackages = $scope.detailsData.selectPackages;
            $scope.datePicker = $scope.detailsData.datePicker;
            $scope.closeSlide = closeSlideFn;
            $scope.setPackageAsSelected = setPackageAsSelectedFn;

            $scope.$watch('datePicker.date', closeCalendarFn);
            getDataForPageFn();
        }
    ]);
