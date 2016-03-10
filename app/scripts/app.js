'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
    .module('myAppApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
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
            .when('/package/:category', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
                resolve: {
                    paramCheck: ['$route', '$location', checkCategory]
                }
            })
            .when('/package/:category/:slug?', {
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
    }]).run(['$rootScope', '$timeout', 'toursData', function($rootScope, $timeout, toursData) {

        /* properties ,methods and event needed for $rootScope */
        $rootScope.slideList = toursData.slideList;
        $rootScope.modalShow = false;
        $rootScope.menuShow = false;

        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
                $rootScope.menuShow = false;
            }, 1000);
        });

        $rootScope.$on('open-modal', function() {
            $rootScope.modalShow = true;
        });
        $rootScope.$on('close-modal', function() {
            $rootScope.modalShow = false;
        });
        $rootScope.closeModal = function() {
            $rootScope.$broadcast('close-modal');
        };

        $rootScope.toggleSideMenu = function() {
            $rootScope.menuShow = !$rootScope.menuShow;
        };
        /* END : properties ,methods and event needed for $rootScope */
    }]);
