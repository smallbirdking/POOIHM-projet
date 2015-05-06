'use strict';


angular.module('projectIhmApp')
  .factory('User',['$http',function($http) {
    var obj = {
      post: function(data) {
        $http.post('http://localhost:3000/api/Users',data)
          .success()
          .error();
      },

      get: function (successCB,failCB,useId) {
        $http.get('http://localhost:3000/api/Users/'+useId)
          .success(function (Result){
            if (Result.status === 'success') {
              var user = Result.data;
              successCB(user);
            }
          })
          .error(function (Error){
            failCB(Error);
          });
      },

      put: function(useId,data) {
        $http.put('http://localhost:3000/api/Users/'+useId,data)
          .error();
      },

      delete: function (useId) {
        $http.delete('http://localhost:3000/api/Users/'+useId)
          .success()
          .error();
      },

      all: function (successCB, failCB) {
        $http.get('http://localhost:3000/api/Users')
          .success(function (Result) {
            if (Result.status === 'success') {
              var users = Result.data;
              successCB(users);
            }
          })
          .error(function (Error) {
            if (Error.status === 'error') {
              failCB(Error);
            }
          });}
    };

    return obj;


  }]);
