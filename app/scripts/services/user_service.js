/**
 * Created by sth on 15/04/15.
 */
'use strict';


angular.module('projectIhmApp')
  .factory('User',['$http',function($http) {
     var obj = {
       post: function(data) {
         $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',data)
           .success()
           .error();
       },

       get: function (successCB,failCB,useId) {
         $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+useId)
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
         $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+useId,data)
           .error();
       },

       delete: function (useId) {
         $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+useId)
           .success()
           .error();
       },

       all: function (successCB, failCB) {
         $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
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
