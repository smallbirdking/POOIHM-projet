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
        templateUrl: '../views/mainpage.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: '../views/edit.html',
        controller: 'EditsCtrl'
      })
      .when('/:id', {
        templateUrl: '../views/edit.html',
        controller: 'EditsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
