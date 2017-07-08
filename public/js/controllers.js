'use strict';

/* Controllers */
let controllers = {};



controllers.RootPagesCtrl = function ($scope, pagesService) {
  pagesService.getPages().then(function (data) {
    $scope.allPages = data;
  }, function (err) {
    throw err;
  })
};

controllers.RootEditPageCtrl = function () {

};

controllers.RootLogCtrl = function ($scope, rootService) {

  $scope.logFile = 'Loading logs..';
  rootService.getLog().then(function (data) {
    $scope.logFile = data;
  }, function (err) {
    $scope.logFile = err;
  });
};


angular.module('myApp.controllers', []).controller(controllers)
.controller('RootLoginCtrl', ['$scope', '$location','authService', function ($scope, $location, authService) {
  $scope.credentials = {
    username: 'mitutee',
    password: 'password'
  };
  $scope.login = function (credentials) {
    authService.login(credentials).then(function (res) {
      $cookies.loggedInUser = res.data;
      $location.path('/admin/pages');
    }, function (err) {
      $scope = err;
    })
  }
}]);
