'use strict';

/**
 * @ngdoc service
 * @name myAppApp.toursData
 * @description
 * # toursData
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
    .factory('toursData', ['$http', '$q', function($http, $q) {
        var tours = {
            activities: [],
            destinations: [],
            packages: [],
            filteredActivities: {},
            filteredDestinations: {},
            filter: {
                'activity': false,
                'destination': false,
                'sort': false
            },
            sort: {
                'by': 'price',
                'reverse': false
            },
            slideList: {
                'opened': false
            }
        };

        return tours;
    }]);
