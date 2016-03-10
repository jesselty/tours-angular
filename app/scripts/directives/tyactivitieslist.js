'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyActivitiesList
 * @description
 * # tyActivitiesList
 */
angular.module('myAppApp')
    .directive('tyActivitiesList', function() {
        return {
            scope:true,
            templateUrl: '/views/tyactivitieslist.html',
            restrict: 'E',
            replace:true,
            controllerAs:'activitiesList',
            controller:['$scope', '$filter', function($scope, $filter){
                function showIfAvailableFn(subCategory){
                    subCategory.isAvailable = $filter('matchesAnyIn')(subCategory.map,$scope.filteredDestinations,true);

                    return subCategory.isAvailable;
                }

                function convertToIconNameFn(activityName){
                    return (activityName || "").replace(/[^\w]+/g,"-").toLowerCase();
                }
                $scope.filteredDestinations = $scope.toursData.filteredDestinations;
                $scope.showIfAvailable = showIfAvailableFn;
                $scope.convertToIconName = convertToIconNameFn;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
