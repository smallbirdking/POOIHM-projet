
/**
 * @ngdoc function
 * @name projectIhmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectIhmApp
 */
angular.module('projectIhmApp')
  .controller('MainCtrl', function ($scope, Edit) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

    getAllNotes();
  function getAllNotes(){
    Edit.all(function(notes){
        $scope.notes = notes;
        buildNotes();
        buildNotes2(notes);
      },
      function(error){
        console.log(error);
      }
    );
  }

  $scope.delet = function(id) {
    if(id !== '') {
      Edit.delete(id);
      getAllNotes();
      window.location.reload();
    }
  };

    $scope.currentPage = 1;
    $scope.pageSize = 2;
    $scope.notes = [];
    var buildNotes = function () {
      var i = 0;
      angular.forEach($scope.users, function (note) {
        $scope.notes.push(note);
      });
    };

    $scope.pageChangeHandler = function(num) {
      //console.log('meals page changed to ' + num);
    };

    $scope.getdate=function (t) {
       var d = new Date(t);
       //console.log(t);
      var day = d.getDate();
      if(day.toString().length == 1){
        day="0"+day.toString();
      }
      return day;
     };

    $scope.month=function (t) {
      var d = new Date(t);
      var monthArray=new Array("January","February","March","April","May","June","July","August", "September","October","November","December");
      //console.log(t);
      var month = d.getMonth();
      return monthArray[month];
    };
});

function ThirdController($scope,Edit) {
  getAllNotes();
  function getAllNotes(){
    Edit.all(function(notes){
        $scope.users = notes;
        buildNotes2();
      },
      function(error){
        console.log(error);
      }
    );
  }

  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.recents = [];
  var buildNotes2 = function () {
    angular.forEach($scope.users, function (note) {
      console.log(note);
      $scope.recents.push(note);
    });
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}



