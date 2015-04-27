'use strict';

/**
 * @ngdoc function
 * @name projectIhmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectIhmApp
 */
angular.module('projectIhmApp')
  .controller('MainCtrl', ['$scope',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
