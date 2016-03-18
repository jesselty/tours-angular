'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyFilterBlock
 * @description
 * # tyFilterBlock
 */
angular.module('myAppApp')
    .directive('tyFilterBlock', ['CONSTANTS', '$rootScope', 'commonFactory', function(CONSTANTS, $rootScope, commonFactory) {
        return {
            templateUrl: '/views/tyfilterblock.html',
            restrict: 'E',
            replace: true,
            controller: ['$scope', function($scope) {
                function onFilterFn(filterCategoryName, type, inputType) {
                    var filterCategory = $scope.toursData[filterCategoryName];
                    if (inputType === undefined || inputType == 'isChecked') {
                        if (type.isChecked) {
                            filterCategory[type.name] = type;
                        } else {
                            delete filterCategory[type.name];
                        }
                    } else {
                        for (var a in filterCategory) {
                            delete filterCategory[a];
                        }
                        if (filterCategoryName == 'filteredDestinations') {
                            $scope.triggerslideValue = type.name;
                        }
                        filterCategory[type.name] = type;
                        $rootScope.$broadcast(CONSTANTS.CLOSE_MODAL);
                        $scope.toursData.slideList.opened = false;
                    }

                    commonFactory.storeToLocalStorage($scope.category + filterCategoryName, filterCategory);
                }

                function removeFilterFn(filterCategoryName, type) {
                    var filterCategory = $scope.toursData[filterCategoryName];
                    type.isChecked = false;
                    delete filterCategory[type.name];
                    commonFactory.storeToLocalStorage($scope.category + filterCategoryName, filterCategory);
                }

                $scope.onFilter = onFilterFn;

                $scope.removeFilter = removeFilterFn;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    }]);
