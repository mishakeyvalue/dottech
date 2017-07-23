'use strict';

/* Services */

const PAGE_CACHE_KEY = "_pageCache"; 

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    .service('pagesService', function ($http) {

        this.getPages = function () {
            return $http.get('/api/pages')
        };

        this.getDetailedPages = function () {
            return $http.get('/api/pages/details')
        };

        this.getPage = function (uri) {
            return $http.get('/api/pages/' + uri);
        };

        this.getPage_AsRoot = function (id) {
            return $http.get('/api/pages/details/' + id);
        };

        this.savePage = function (pageData) {
            if (pageData._id == 0) {
                return $http.post('/api/pages', pageData);
            } else return $http.put('/api/pages', pageData);
        };

        this.deletePage = function (id) {
            return $http.delete('/api/pages/' + id);
        };

        this.setPageCache = function(page){
            let pageForCache = JSON.stringify(page);
            console.log(pageForCache)
            window.localStorage[PAGE_CACHE_KEY] = pageForCache; 
        }; 
 
        this.getPageCache = function() {
            try{
                let cachedPage = JSON.parse(window.localStorage[PAGE_CACHE_KEY]);
                return cachedPage;             
            }
            catch (err) {
                console.log(err);
            }
            
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
    .factory('myHttpInterceptor', function ($q, $location) {
        let factory = {};

        factory.response = function (response) {
            return response;
        };

        factory.responseError = function (response) {
            if (response.status === 401) {
                $location.path('/root/login');
                return $q.reject(response);
            }
            return $q.reject(response);
        }

        return factory;
    })
    ;
