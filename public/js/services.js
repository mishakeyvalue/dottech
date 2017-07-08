'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.value('version', '0.1')
.service('pagesService', function($http){

  this.getPages = function() {
    return $http.get('/api/pages')
  };


})
.service('rootService', function($http){

  this.getLog = function(){
    return $http.get('/api/root/_log')
  };
})
.service('authService', function($http){
  this.login = function(credentials){
    return $http.post('/api/login', credentials);
  };
  this.logout = function(){
    return $http.get('/api/logout');
  };
})
;
