'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    .service('pagesService', function ($http) {

        this.getPages = function () {
            return $http.get('/api/pages')
        };

        this.getPage = function(uri){
            return $http.get('/api/pages/' + uri);
        };

        this.getPage_AsRoot = function(id){
            return $http.get('/api/pages/' + id);
        };

        this.savePage = function(pageData){
            if(pageData._id == 0){
                return $http.post('/api/pages', pageData);
            } else return $http.put('/api/pages', pageData);
        };


    })
    .service('rootService', function ($http) {

        this.getLog = function () {
            return $http.get('/api/root/_log')
        };
    })
    .service('authService', function ($http) {
        this.login = function (credentials) {
            return $http.post('/api/root/login', credentials);
        };
        this.logout = function () {
            return $http.get('/api/root/logout');
        };
    })
    ;
