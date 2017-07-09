'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])
.directive('navBar', function () {
    let directive = {};

    directive.controller = function ($scope, pagesService, $location, $log) {
        let path = $location.path().substr(0, 5);

        $scope.navLinks = [];

        pagesService.getPages().then(
            function (res) {
                $scope.navLinks = $scope.navLinks.concat(res.data);
            },
            function (err) {
                $log.log(err)
            }
        );

        if (path == '/root') {
            $scope.navLinks.push(
                new NavLink('Pages', 'root/pages'),
                new NavLink('Settings', 'root/settings')
            );
        };
    };

    directive.templateUrl = 'partials/directives/nav.html';

    return directive;
});


/**
 * 
 * @param {*String} title 
 * @param {*String} url 
 */
function NavLink(title, url){
    this.title = title;
    this.url = url;
};