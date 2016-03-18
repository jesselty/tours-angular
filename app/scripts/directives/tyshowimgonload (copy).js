'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyShowImgOnLoad
 * @description
 * # tyShowImgOnLoad
 */
! function() {
    angular.module('myAppApp')
        .directive('tyShowImgOnLoad', ['$window', '$timeout', function($window, $timeout) {
            var tyShowImgOnLoad = {
                    scope: {
                        'defaultImage': '=',
                        'imgsrc': '='
                    },
                    replace: true,
                    template: '<div class="ty-async-img" ng-style="{\'background-image\':\'url(\'+tyShow.imgsrc+\')\'}" ng-class="{\'loaded\':loaded}"></div>',
                    restrict: 'E',
                    controllerAs: 'tyShow',
                    controller: ['$scope', function($scope) {
                        var that = this;

                        $scope.imgsrc = $scope.imgsrc.replace(/\\/g, "");

                        function loadedFn() {
                            that.imgsrc = $scope.imgsrc;
                            $scope.loaded = true;
                            $timeout(function() {
                                $scope.$digest();
                            });
                        }

                        function initializeFn() {
                            var img = document.createElement('img');
                            img.src = $scope.imgsrc;
                            if (('complete' in img) && img.complete) {
                                loadedFn();
                            } else {
                                img.onload = loadedFn;
                            }
                        }

                        $scope.initialize = initializeFn;

                        if (isWindowLoaded) {
                            initializeFn();
                        } else {
                            scopesStore.push($scope);
                        }
                    }],
                    link: function postLink(scope, element, attrs) {}
                },
                scopesStore = [],
                isWindowLoaded = false;

            function onLoadFn() {
                for (var i = 0, len = scopesStore.length; i < len; i++) {
                    scopesStore[i].initialize();
                }
                isWindowLoaded = true;
            }

            if (('readyState' in document) && document.readyState == 'complete') {
                isWindowLoaded = true;
            } else {
                $window.addEventListener("load", onLoadFn, false);
            }

            return tyShowImgOnLoad;
        }]);
}();
