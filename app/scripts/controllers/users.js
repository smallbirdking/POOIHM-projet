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
  .controller('UsersCtrl', ['$scope','$routeParams','User','$window', function ($scope,$routeParams,User,$window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id=$routeParams.id;

    $scope.menuState={show: true};

      getAllUsers();
    function getAllUsers(){
      User.all(function(users){
          $scope.users = users;
          $scope.userlength= users.length;
          getid( $scope.id);
        },
        function(error){
          console.log(error);
        }
      );
    }


    $scope.post = function(user) {
      if(user.title !== '' || user.description !== ''){
        User.post(user);
        getAllUsers();
        $window.location.assign("/");
      }
    };

    $scope.put = function(user) {
      if(user.id !== '' && (user.title !== '' || user.description !== '')){
        User.put(user.id,user);
        getAllUsers();
        $window.location.assign("/");
      }
    };

    $scope.search = function(id) {
      User.get(function(users){
        $scope.userSearch = users;

          getid();
      },
      function(error){
        console.log(error);
      },
      id);

    };

    $scope.delet = function(id) {
      if(id !== '') {
        User.delete(id);
        getAllUsers();
      }
    };


    var getid = function(id) {

      //ss=id;
      User.get(function(users){
          $scope.user = users;
          if(id) {
            $scope.menuState2 = {show: true};
            $scope.menuState = {show: false};
          }

        },
        function(error){
          console.log(error);
        },
        id);
    };

  }]);

function AutoGrowTextArea(textField)
{
  if (textField.clientHeight < textField.scrollHeight)
  {
    textField.style.height = textField.scrollHeight + "px";
    if (textField.clientHeight < textField.scrollHeight)
    {
      textField.style.height =
        (textField.scrollHeight * 2 - textField.clientHeight) + "px";
    }
  }
}
