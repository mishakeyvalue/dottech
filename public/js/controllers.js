'use strict';

/* Controllers */
let controllers = {};

controllers.AppCtrl = function($scope, authService, flashMessageService, $location, $log){
    $scope.site = {
        logo: "img/myLogo.jpg",
        footer: "mitutee, 2017"
    }
};

controllers.PageCtrl = function($scope, pagesService, $routeParams, $sce){
    let url = $routeParams.url;
    $scope.pageContent = {};
    pagesService.getPage(url).then(
        function(res){
            $scope.pageContent.title = res.data.title;
            $scope.pageContent.content = $sce.trustAsHtml(res.data.content);
        },
        function(err){
            $log.log(err);
        }
    )
};

/******HOME CONTROLLERS */

controllers.HomeCtrl = function ($scope, pagesService, flashMessageService, $sce) {
    $scope.allPages = [];
    pagesService.getPages().then(function (res) {
        let arrOfPages = res.data;
        for(let i = 0; i < arrOfPages.length; i++){
            arrOfPages[i].content = $sce.trustAsHtml(arrOfPages[i].content);
        }
        $scope.allPages = arrOfPages;
    }, function (err) {
        throw err;
    });

};
/******HOME */

/******ROOT CONTROLLERS */

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
    flashMessageService.setMessage('Hello');

    pagesService.getDetailedPages().then(function (res) {
        $scope.allPages = res.data;
    }, function (err) {
        throw err;
    });

    $scope.deletePage = function (id) {

        pagesService.deletePage(id).then(function (res) {
            $scope.allPages = res.data;
        }),
            function (err) {
                flashMessageService.setMessage("Error in deleting: " + err);
            }
    }
};

controllers.RootEditPageCtrl = function ($scope,
    $routeParams,
    pagesService,
    $location,
    flashMessageService,
    $log, $filter) {
    $scope.pageContent = {};
    $scope.pageContent._id = $routeParams.id;
    $scope.heading = "Add a New Page";

    $scope.updateURL = function () {
        $scope.pageContent.url = $filter('formatURL')($scope.pageContent.title);
    };

    if ($scope.pageContent._id != 0) {
        $scope.heading = "Update page";

        this.pageContent = pagesService.getPage_AsRoot($scope.pageContent._id).then(
            function (res) {
                $scope.pageContent = res.data;
                $log.info($scope.pageContent);
            },
            function (err) {
                flashMessageService.setMessage(err.data);
            }
        );
    }

    $scope.savePage = function () {
        pagesService.savePage($scope.pageContent).then(
            function () {
                flashMessageService.setMessage("Page Saved Successfully");
                $location.path('/root/pages');
            },
            function (err) {
                flashMessageService.setMessage("Page Saved Successfully");
            }
        )
    }
};

controllers.RootLogCtrl = function ($scope, rootService) {

    $scope.logFile = 'Loading logs..';
    rootService.getLog().then(function (data) {
        $scope.logFile = data;
    }, function (err) {
        $scope.logFile = err;
    });
};
/******ROOT */


angular.module('myApp.controllers', []).controller(controllers)
