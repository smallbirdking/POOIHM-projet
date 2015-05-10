'use strict';

/**
 * @ngdoc overview
 * @name projectIhmApp
 * @description
 * # projectIhmApp
 *
 * Main module of the application.
 */
angular
  .module('projectIhmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/manpage.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/pages.html',
        controller: 'MyController'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
