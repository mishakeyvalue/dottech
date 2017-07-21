
    let controller = function ($scope, authService, flashMessageService, $location, $log) {
        $scope.site = {
            logo: "img/myLogo.jpg",
            footer: "mitutee, 2017"
        }
    };

    angular.module('myApp.controllers', []).controller('appCtrl', ['$scope', 'authService', 'flashMessageService', '$location', '$log', controller]);
