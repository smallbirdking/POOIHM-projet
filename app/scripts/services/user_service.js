'use strict';


angular.module('projectIhmApp')
  .factory('Edit',['$http',function($http) {
    var obj = {
      post: function(data) {
        $http.post('http://localhost:3000/api/Projects',data)
          .success()
          .error();
      },

      get: function (successCB,failCB,noteId) {
        $http.get('http://localhost:3000/api/Projects/'+noteId)
          .success(function (Result){
            if (Result.status === 'success') {
              var note = Result.data;
              successCB(note);
            }
          })
          .error(function (Error){
            failCB(Error);
          });
      },

      put: function(noteid,data) {
        $http.put('http://localhost:3000/api/Projects/'+noteid,data)
          .error();
      },

      delete: function (noteid) {
        $http.delete('http://localhost:3000/api/Projects/'+noteid)
          .success()
          .error();
      },

      all: function (successCB, failCB) {
        $http.get('http://localhost:3000/api/Projects')
          .success(function (Result) {
            if (Result.status === 'success') {
              var notes = Result.data;
              successCB(notes);
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
