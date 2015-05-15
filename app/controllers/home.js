(function (angular) {
    'use strict';
    
    angular.module('portfolio.home', ['ui.router'])
    
        .controller('homeCtrl', ['$scope', function (sc) {
    
            sc.lang = 'en';
    
            sc.changeLang = function(lang) {
                sc.lang = lang;
            };
    
        }]);
})(angular);