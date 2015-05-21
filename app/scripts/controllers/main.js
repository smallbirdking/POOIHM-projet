
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
    Edit.all(function(users){
        $scope.users = users;
        buildMeals();
        buildMeals2(users);
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
    }
  };

  $scope.put = function(user) {
    if(user.id !== '' && (user.title !== '' || user.description !== '')){
      Edit.put(user.id,user);
      getAllNotes();
    }
  };

  $scope.search = function(id) {
    Edit.get(function(users){
        $scope.userSearch = users;

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
      window.location.reload();
    }
  };


  /*$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };*/
    $scope.currentPage = 1;
    $scope.pageSize = 2;
    $scope.notes = [];
    var buildMeals = function () {
      var i = 0;
      angular.forEach($scope.users, function (user) {
        $scope.notes.push(user);
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
    Edit.all(function(users){
        $scope.users = users;
        buildMeals2();
      },
      function(error){
        console.log(error);
      }
    );
  }

  $scope.currentPage = 1;
  $scope.pageSize = 5;
  $scope.recents = [];
  var buildMeals2 = function () {
    angular.forEach($scope.users, function (user) {
      console.log(user);
      $scope.recents.push(user);
    });
  };
  /*var buildMeals2 = function () {
    angular.forEach($scope.users, function (user) {
      var uu= user;
      $scope.drinks.push(uu);
    });
  };*/
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}



