// Code goes here
'use strict';
var myApp = angular.module('projectIhmApp');

function MyController($scope, User) {
  getAllUsers();
  function getAllUsers(){
    User.all(function (users, userlength){
        $scope.users = users;
        $scope.userlength= users.length;
        buildMeals();
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

  $scope.currentPage = 1;
  $scope.pageSize = 2;
  $scope.meals = [];


  var dishes = [
    'noodles',
    'sausage',
    'beans on toast',
    'cheeseburger',
    'battered mars bar',
    'crisp butty',
    'yorkshire pudding',
    'wiener schnitzel',
    'sauerkraut mit ei',
    'salad',
    'onion soup',
    'bak choi',
    'avacado maki'
  ];
  var sides = [
    'with chips',
    'a la king',
    'drizzled with cheese sauce',
    'with a side salad',
    'on toast',
    'with ketchup',
    'on a bed of cabbage',
    'wrapped in streaky bacon',
    'on a stick with cheese',
    'in pitta bread'
  ];

/*var buildMeals = function () {
  var lll = 10;
  lll=$scope.userlength;
  for (var i = 1; i <= lll; i++) {
    var dish = dishes[Math.floor(Math.random() * dishes.length)];
    var side = sides[Math.floor(Math.random() * sides.length)];
    $scope.meals.push('meal ' + i + ': ' + dish + ' ' + side);
  }
};*/

 $scope.meals = [];
  var buildMeals = function () {
    var i = 0;
    angular.forEach($scope.users, function (user) {
      $scope.meals.push(user);
      //myFunction(user);
    });

  };


  $scope.pageChangeHandler = function(num) {
    console.log('meals page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}




myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);


