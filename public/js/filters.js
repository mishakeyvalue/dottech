'use strict';

/* Filters */

angular.module('myApp.filters', [])
.filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }])
.filter('formatURL', function(){
    return function myFilter(input){
        let uri = input.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]]/gi, '');
        uri = uri.replace(/[\s+]/g, '-');
        return uri.toLowerCase();
    };
})
