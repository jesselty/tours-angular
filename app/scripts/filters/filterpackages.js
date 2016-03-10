'use strict';

/**
 * @ngdoc filter
 * @name myAppApp.filter:filterPackages
 * @function
 * @description
 * # filterPackages
 * Filter in the myAppApp.
 */
angular.module('myAppApp')
    .filter('filterPackages', function() {
        return function(map, filters) {
            var booleanIndex = [];

            function checkIfValueInFilterFn(filter) {
                var objNotEmpty = false,
                    i = 0;
                for (var a in filter) {
                    objNotEmpty = true;
                    i++;
                    break;
                }
                if (objNotEmpty) {
                    for (var j = 0, jlen = map.length; j < jlen; j++) {
                        var filterMapVal = filter[map[j]];
                        if (filterMapVal !== undefined && filterMapVal.isAvailable) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return true;
                }
            }
            for (var i = 0, ilen = filters.length; i < ilen; i++) {
                booleanIndex.push(checkIfValueInFilterFn(filters[i]));
            }

            return booleanIndex.indexOf(false) === -1;
        };
    });
