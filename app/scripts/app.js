'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */

loadCSS("styles/main.css", document.getElementById("loadcss"));
angular
    .module('myAppApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .constant("CONSTANTS", {
        'DATE_REGEX': /^(3[0-1]|[0-2][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/\d{4}/,
        // 'DATE_REGEX': /^(1[0-2]|0?[1-9])\/(3[0-1]|[0-2][0-9]|[1-9])\/\d{4}/,
        'OPEN_MODAL': 'open-modal',
        'CLOSE_MODAL': 'close-modal',
        'DATE_FORMAT': 'dd/MM/yyyy'
    })
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        function checkCategory($route, $location) {
            var toursCategory = $route.current.params.category;
            if (toursCategory != 'activities' && toursCategory != 'tours') {
                $location.path("/");
            }
        }

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/:category', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
                resolve: {
                    paramCheck: ['$route', '$location', checkCategory]
                }
            })
            .when('/:category/:slug?', {
                templateUrl: 'views/details.html',
                controller: 'DetailsCtrl',
                controllerAs: 'details',
                resolve: {
                    paramCheck: ['$route', '$location', checkCategory]
                }
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]).run(['CONSTANTS', '$rootScope', '$timeout', 'toursData', function(CONSTANTS, $rootScope, $timeout, toursData) {

        /* properties ,methods and event needed for $rootScope */
        $rootScope.slideList = toursData.slideList;
        $rootScope.modalShow = false;
        $rootScope.menuShow = false;

        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
                $rootScope.menuShow = false;
            }, 1000);
        });

        $rootScope.$on(CONSTANTS.OPEN_MODAL, function() {
            $rootScope.modalShow = true;
        });
        $rootScope.$on(CONSTANTS.CLOSE_MODAL, function() {
            $rootScope.modalShow = false;
        });
        $rootScope.closeModal = function() {
            if ($rootScope.modalShow) {
                $rootScope.$broadcast(CONSTANTS.CLOSE_MODAL);
            }
        };

        $rootScope.toggleSideMenu = function() {
            $rootScope.menuShow = !$rootScope.menuShow;
        };
        /* END : properties ,methods and event needed for $rootScope */
    }]);
