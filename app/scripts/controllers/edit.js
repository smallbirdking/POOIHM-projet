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
      Edit.all(function(notes){
          $scope.users = notes;
          $scope.userlength= notes.length;
          getid( $scope.id);
        },
        function(error){
          console.log(error);
        }
      );
    }


    $scope.post = function(note) {
      if(note.title !== '' || note.description !== ''){
        Edit.post(note);
        getAllNotes();
        $window.location.assign("/");
      }
    };

    $scope.put = function(note) {
      if(note.id !== '' && (note.title !== '' || note.description !== '')){
        Edit.put(note.id,note);
        getAllNotes();
        $window.location.assign("/");
      }
    };

    $scope.search = function(id) {
      Edit.get(function(notes){
        $scope.userSearch = notes;
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
      Edit.get(function(notes){
          $scope.user = notes;
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
