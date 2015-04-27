/**
 * Created by sth on 15/04/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('projectIhmApp')
  .controller('UsersCtrl', ['$scope','User', function ($scope,User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    User.all(function(users){
      $scope.users = users;
    },
    function(error){
      console.log(error);
    });

    $scope.post = function(user) {
      if(user.name !== '' || user.surname !== ''){
        User.post(user);
      }
    };

    $scope.put = function(user) {
      if(user.id !== '' && (user.name !== '' || user.surname !== '')){
        User.put(user.id,user);
      }
    };

    $scope.search = function(id) {
      User.get(function(users){
        $scope.userSearch = users;
      },
      function(error){
        console.log(error);
      },
      id);
    };


  }]);
