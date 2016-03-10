'use strict';

/**
 * @ngdoc service
 * @name myAppApp.commonFactory
 * @description
 * # commonFactory
 * Factory in the myAppApp.
 */
angular.module('myAppApp')
  .factory('commonFactory', function () {
    var common = {
            isStorageSupported: function() {
                if(typeof Storage !== "undefined") {
                    return true;
                }
                return false;
            }(),
            storeToLocalStorage: function(prop, value) {
                if(common.isStorageSupported){
                    if(Object.prototype.toString.call(value) == '[object Object]'){
                        localStorage.setItem(prop, JSON.stringify(value));
                    } else {
                        localStorage.setItem(prop, value);
                    }
                }
            },
            getFromLocalStorage: function(prop) {
                if(common.isStorageSupported){
                    var propValue = localStorage.getItem(prop);
                    return propValue===null?{}:JSON.parse(propValue);
                }
            },
            deleteItemFromStorage: function(prop) {
                if(common.isStorageSupported){
                    localStorage.removeItem(prop);
                }
            }
        };

        return common;
  });
