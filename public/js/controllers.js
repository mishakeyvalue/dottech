'use strict';

/* Controllers */
let controllers = {};

controllers.RootLoginCtrl = function () {
  
};

controllers.RootPagesCtrl = function () {

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


angular.module('myApp.controllers', []).controller(controllers);
