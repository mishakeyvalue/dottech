'use strict';

/* Controllers */
let controllers = {};

controllers.RootLoginCtrl = function ($scope, $location, $cookies, authService, flashMessageService) {
  $scope.credentials = {
    username: 'mitutee',
    password: 'q1w2e3r4'
  };
  $scope.login = function (credentials) {
    authService.login(credentials).then(function (res) {
      $cookies.loggedInUser = res.data;
      $location.path('/root/pages');
    }, function (err) {
      flashMessageService.setMessage(err);
    })
  }
};

controllers.RootPagesCtrl = function ($scope, pagesService, flashMessageService) {
  flashMessageService.setMessage('Hello')
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
