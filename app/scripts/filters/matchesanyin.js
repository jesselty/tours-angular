'use strict';

/**
 * @ngdoc filter
 * @name myAppApp.filter:matchesAnyIn
 * @function
 * @description
 * # matchesAnyIn
 * Filter in the myAppApp.
 */
angular.module('myAppApp')
  .filter('matchesAnyIn', function () {
    return function (inputArray, objToMatch, trueIfNoSelection) {
      var i=0;
      for(var a in objToMatch){
        i++;
      	if(inputArray.indexOf(a)!==-1){
      		return true;
      	}
      }
      if(i===0){
        return true;
      }
      return false;
    };
  });
