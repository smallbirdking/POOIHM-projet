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

    getAllUsers();
    function getAllUsers(){
      User.all(function(users){
          $scope.users = users;
          $scope.userlength= users.length;
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
      }
    };

    $scope.put = function(user) {
      if(user.id !== '' && (user.title !== '' || user.description !== '')){
        User.put(user.id,user);
        getAllUsers();
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

    $scope.delet = function(id) {
      if(id !== '') {
        User.delete(id);
        getAllUsers();
      }
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
