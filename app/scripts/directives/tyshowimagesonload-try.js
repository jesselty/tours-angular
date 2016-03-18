'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:tyShowImgOnLoad
 * @description
 * # tyShowImgOnLoad
 */
! function() {
    function replaceEscapedSlashesFn(str) {
        return str.replace(/\\/g, "");
    }

    function isInReadyStateFn() {
        return ('readyState' in document) && document.readyState == 'complete';
    }

    function initializeFn(elem, src, callback) {
        var element = document.createElement(elem);
        element.src = src;
        return function() {
            if (('complete' in element) && element.complete) {
                callback();
            } else if (element && ('onload' in element) && element.onload !== null) {
                element.onload = callback;
            } else {
                callback();
            }
        };
    }

    function onLoadFn() {
        var scopeStore = this.scopeStore;
        for (var i = 0, len = (scopeStore && scopeStore.length || 0); i < len; i++) {
            scopeStore[i].initialize();
        }
        this.isWindowLoaded = true;
    }

    function showResourcesIfPageLoadedFn() {
        var that = this;
        if (isInReadyStateFn()) {
            that.isWindowLoaded = true;
        } else {
            window.addEventListener("load", function() {
                that.onLoad();
            }, false);
        }
    }

    function _directiveExtensions() {
        this.scopeStore = [];
        this.isWindowLoaded = false;
    }

    _directiveExtensions.prototype.initialize = initializeFn;
    _directiveExtensions.prototype.onLoad = onLoadFn;
    _directiveExtensions.prototype.showResourcesIfPageLoaded = showResourcesIfPageLoadedFn;

    angular.module('myAppApp')
        .directive('tyAddScriptsOnLoad', ['$timeout', function($timeout) {
            var dir = new _directiveExtensions(),
                tyAddScriptsOnLoad = {
                    scope: {
                        tySrc: "="
                    },
                    replace: true,
                    template: "<div></div>",
                    restrict: 'E',
                    controllerAs: "tyAddScripts",
                    controller: ['$scope', '$element', function($scope, $element) {
                        var that = this;

                        $scope.tySrc = replaceEscapedSlashesFn($scope.tySrc);

                        function loadedFn() {
                            var script = document.createElement('script');
                            script.src = $scope.tySrc;
                            document.body.appendChild(script);
                            angular.bootstrap(document, ['myAppApp']);
                        }

                        $scope.initialize = dir.initialize('script', $scope.tySrc, loadedFn);

                        if (dir.isWindowLoaded) {
                            $scope.initialize();
                        } else {
                            dir.scopeStore.push($scope);
                        }
                    }]
                };

            dir.showResourcesIfPageLoaded();
            return tyAddScriptsOnLoad;
        }])
        .directive('tyShowImgOnLoad', ['$timeout', function($timeout) {
            var dir = new _directiveExtensions(),
                tyShowImgOnLoad = {
                    scope: {
                        'defaultImage': '=',
                        'imgsrc': '='
                    },
                    replace: true,
                    template: '<div class="ty-async-img" ng-style="{\'background-image\':\'url(\'+tyShowImg.imgsrc+\')\'}" ng-class="{\'loaded\':loaded}"></div>',
                    restrict: 'E',
                    controllerAs: 'tyShowImg',
                    controller: ['$scope', function($scope) {
                        var that = this;

                        $scope.imgsrc = replaceEscapedSlashesFn($scope.imgsrc);

                        function loadedFn() {
                            that.imgsrc = $scope.imgsrc;
                            $scope.loaded = true;
                            $timeout(function() {
                                $scope.$digest();
                            });
                        }

                        $scope.initialize = dir.initialize('img', $scope.imgsrc, loadedFn);

                        if (dir.isWindowLoaded) {
                            $scope.initialize();
                        } else {
                            dir.scopeStore.push($scope);
                        }
                    }],
                    link: function postLink(scope, element, attrs) {}
                };

            dir.showResourcesIfPageLoaded();
            return tyShowImgOnLoad;
        }]);
}();
