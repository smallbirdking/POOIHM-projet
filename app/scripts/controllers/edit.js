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
  .controller('EditsCtrl', ['$scope','$routeParams','Edit','$window', function ($scope,$routeParams,Edit,$window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.id=$routeParams.id;

    $scope.buttonState={show: true};

      getAllNotes();
    function getAllNotes(){
      Edit.all(function(users){
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
        Edit.post(user);
        getAllNotes();
        $window.location.assign("/");
      }
    };

    $scope.put = function(user) {
      if(user.id !== '' && (user.title !== '' || user.description !== '')){
        Edit.put(user.id,user);
        getAllNotes();
        $window.location.assign("/");
      }
    };

    $scope.search = function(id) {
      Edit.get(function(users){
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
        Edit.delete(id);
        getAllNotes();
      }
    };


    var getid = function(id) {

      //ss=id;
      Edit.get(function(users){
          $scope.user = users;
          if(id) {
            $scope.buttonState2 = {show: true};
            $scope.buttonState = {show: false};
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
