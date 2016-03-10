'use strict';

/**
 * @ngdoc service
 * @name myAppApp.detailsService
 * @description
 * # detailsService
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
    .factory('detailsService', ['$http', '$q', function($http, $q) {
        var details = {
            getPackageInfo: function() {
                var deferred = $q.defer();
                $http({
                    'cache': true,
                    'url': 'http://still-shadow-5622.getsandbox.com/packageDetails',
                    'method': 'GET'
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }
        };

        return details;
    }]);
