'use strict';

/**
 * @ngdoc directive
 * @name myAppApp.directive:breadcrumbCategory
 * @description
 * # breadcrumbCategory
 */
angular.module('myAppApp')
    .directive('tyBreadcrumbCategory', function() {
        return {
            scope: {
                'content': '='
            },
            replace: true,
            template: '<div class="ty-breadcrumb"><a href="/package" class="ty-link">Home</a>' +
                '<a class="ty-category ty-link" ng-href="{{::eachcontent.url}}" ng-repeat="eachcontent in content">' +
                '<div>{{::eachcontent.name}}</div>' +
                '</a>' +
                '</div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });
