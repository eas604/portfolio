(function (angular) {
    'use strict';
    
    angular.module('portfolio.education', ['ui.router'])
    
        .controller('educationCtrl', ['$scope', 'Edu', function (sc, Edu) {
    
            Edu.get(function (data) {
                sc.title = data.title;
                sc.degrees = data.degrees;
            });
        }]);
})(angular);