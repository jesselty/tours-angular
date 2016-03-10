'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyDestinationsList
 * @description
 * # tyDestinationsList
 */
angular.module('myAppApp')
    .directive('tyDestinationsList', function() {
        return {
            scope:true,
            templateUrl: '/views/tydestinationslist.html',
            restrict: 'E',
            replace:true,
            controllerAs: 'destinationsList',
            controller:['$scope', '$filter', function($scope, $filter){
                function showIfAvailableFn(destination){
                    destination.isAvailable = $filter('matchesAnyIn')(destination.map,$scope.toursData.filteredActivities,true);

                    return destination.isAvailable;
                }

                $scope.filteredActivities = $scope.toursData.filteredActivities;
                $scope.showIfAvailable = showIfAvailableFn;
            }],
            link: function postLink(scope, element, attrs) {}
        };
    });
