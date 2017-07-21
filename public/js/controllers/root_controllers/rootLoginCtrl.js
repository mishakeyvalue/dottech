(function () {
    let controller = function ($scope, $location, $cookies, authService, flashMessageService) {
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
    angular.module('myApp.controllers', []).controller('rootLoginCtrl', controller);
    alert('rootLoginCtrl')
})();