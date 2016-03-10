'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('AboutCtrl', ['$window', '$routeParams', '$scope', 'commonFactory', 'toursService', 'toursData',
        function($window, $routeParams, $scope, commonFactory, toursService, toursData) {
            function openFilterByUrl(params) {
                $scope.filter[params.filter] = true;
            }

            function openSlideAndShowFn(filterProp) {
                $scope.slideList.opened = true;
                var filterStates = $scope.filter;
                for (var a in filterStates) {
                    filterStates[a] = false;
                }
                filterStates[filterProp] = true;
            }

            function closeSlideFn() {
                $scope.slideList.opened = false;
            }

            function isAnyActivityAppliedFn() {
                var filteredActivities = $scope.toursData.filteredActivities
                for (var a in filteredActivities) {
                    return true;
                }
                return false;
            }

            function isAnyDestinationAppliedFn() {
                var filteredDestinations = $scope.toursData.filteredDestinations;
                for (var a in filteredDestinations) {
                    return true;
                }
                return false;
            }

            function ifAppliedFiltersFn() {
                var filteredActivities = $scope.toursData.filteredActivities,
                    filteredDestinations = $scope.toursData.filteredDestinations;
                for (var a in filteredActivities) {
                    return true;
                }
                for (var a in filteredDestinations) {
                    return true;
                }
                return false;
            }

            function clearSelectionFn(filterProp) {
                var filteredSelections = $scope.toursData[filterProp];
                for (var a in filteredSelections) {
                    filteredSelections[a].isChecked = false;
                    delete filteredSelections[a];
                }
                if (filterProp == "filteredDestinations") {
                    $scope.triggerslideValue = "";
                }

                commonFactory.deleteItemFromStorage($scope.category + filterProp);
            }

            function setTriggerSlideValueFn() {
                var filteredDestinations = toursData.filteredDestinations;
                for (var a in filteredDestinations) {
                    return a;
                }
            }

            function getDataForPageFn() {
                if ($scope.category == 'activities') {
                    toursService.getActivities().then(function(data) {
                        toursData.activities = data.data;
                    });

                    toursService.getActivityDestinations().then(function(data) {
                        toursData.destinations = data.data;
                    });

                    toursService.getActivityPackages().then(function(data) {
                        toursData.packages = data.data;
                    });
                } else {
                    toursService.getToursDestinations().then(function(data) {
                        toursData.destinations = data.data;
                    });

                    toursService.getToursPackages().then(function(data) {
                        toursData.packages = data.data;
                    });
                }
            }

            $scope.category = $routeParams.category.toLowerCase();
            toursData.filteredActivities = commonFactory.getFromLocalStorage($scope.category + 'filteredActivities');
            toursData.filteredDestinations = commonFactory.getFromLocalStorage($scope.category + 'filteredDestinations');;
            $scope.categoryText = $scope.category == "activities" ? "Activities" : "Tours & Packages";
            $scope.breadcrumbText = [
                { 'name': $scope.categoryText, 'url': "/package/" + $routeParams.category }
            ];
            $scope.toursData = toursData;
            $scope.filter = toursData.filter;
            $scope.sort = toursData.sort;
            $scope.slideList = toursData.slideList;
            $scope.isFilter = toursData.isFilter;
            $scope.openSlideAndShow = openSlideAndShowFn;
            $scope.closeSlide = closeSlideFn;
            $scope.ifAppliedFilters = ifAppliedFiltersFn;
            $scope.clearSelection = clearSelectionFn;
            $scope.isAnyActivityApplied = isAnyActivityAppliedFn;
            $scope.isAnyDestinationApplied = isAnyDestinationAppliedFn;
            $scope.triggerslideValue = setTriggerSlideValueFn();

            getDataForPageFn();
            openFilterByUrl($routeParams);
        }
    ]);
