'use strict';

/**
 * @ngdoc service
 * @name myAppApp.detailsData
 * @description
 * # detailsData
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
    .factory('detailsData', function() {
        var details = {
            'packages':[]
        };

        return details;
    });
