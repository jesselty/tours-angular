'use strict';

/**
 * @ngdoc service
 * @name myAppApp.toursService
 * @description
 * # toursservice
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
    .factory('toursService', ['$http', '$q', function($http, $q) {
        var tours = {
            getActivities: function() {
                var deferred = $q.defer();
                $http({
                    'cache': true,
                    'url': 'http://demo.beta.travelyaari.com/api/package/activitiesList',
                    'method': 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            },
            getActivityDestinations: function() {
                var deferred = $q.defer(),
                    arrayOfDestinationMap = [],
                    destinationhash = {};
                tours.getActivities().then(function(activitiesData) {
                    var activitiesData = activitiesData.data;
                    for (var i = 0, ilen = activitiesData.length; i < ilen; i++) {
                        var activityCategory = activitiesData[i],
                            activityCategoryValues = activityCategory.values;
                        for (var j = 0, jlen = activityCategoryValues.length; j < jlen; j++) {
                            var activities = activityCategoryValues[j],
                                activitiesMap = activities.map;
                            for (var k = 0, klen = activitiesMap.length; k < klen; k++) {
                                if (destinationhash[activitiesMap[k]] !== undefined) {
                                    destinationhash[activitiesMap[k]].push(activities.name);
                                } else {
                                    destinationhash[activitiesMap[k]] = [];
                                    destinationhash[activitiesMap[k]].push(activities.name);
                                }
                            }
                        }
                    }

                    for (var a in destinationhash) {
                        arrayOfDestinationMap.push({
                            name: a,
                            map: destinationhash[a]
                        });
                    }

                    deferred.resolve({ data: arrayOfDestinationMap });
                });

                return deferred.promise;
            },
            getActivityPackages: function() {
                var deferred = $q.defer();
                $http({
                    'cache': true,
                    'url': 'http://demo.beta.travelyaari.com/api/package/activitiesPackagesList',
                    'method': 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            },
            getToursDestinations: function() {
                var deferred = $q.defer();
                $http({
                    'cache': true,
                    'url': 'http://demo.beta.travelyaari.com/api/package/gatewaysDestinationsList',
                    'method': 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            },
            getToursPackages: function() {
                var deferred = $q.defer();
                $http({
                    'cache': true,
                    'url': 'http://demo.beta.travelyaari.com/api/package/activitiesPackagesList?cityid=2',
                    'method': 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        };

        return tours;
    }]);
