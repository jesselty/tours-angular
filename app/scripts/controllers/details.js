'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the myAppApp
 */
angular.module('myAppApp')
    .controller('DetailsCtrl', ['$routeParams', '$scope', 'detailsService', 'detailsData', function($routeParams, $scope, detailsService, detailsData) {
        function getDataForPageFn() {
            detailsService.getPackageInfo().then(function(data){
                detailsData.packages = data.data;
            });
        }
        $scope.category = $routeParams.category.toLowerCase();
        $scope.slug = $routeParams.slug.toLowerCase().replace(/-/g, " ");
        $scope.categoryText = $scope.category == "activities" ? "Activities" : "Tours & Packages";
        $scope.breadcrumbText = [$scope.categoryText, $routeParams.slug];
        $scope.breadcrumbText = [
            { 'name': $scope.categoryText, 'url': "/package/" + $routeParams.category },
            { 'name': $scope.slug, 'url': "/package/" + $routeParams.category + "/" + $routeParams.slug }
        ];

        $scope.detailsData = detailsData;

        getDataForPageFn();
    }]);
