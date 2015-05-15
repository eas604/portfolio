(function (angular) {
    'use strict';
    
    angular.module('portfolio.hero', ['ui.router'])
    
        .controller('heroCtrl', ['$scope', '$state', 'Hero', function (sc, st, Hero) {
    
            sc.$on('$viewContentLoaded', function () {
                Hero.get(function (data) {
                    sc.title = data.title;
                    sc.messages = data.messages;
                });
            });
    
            st.setPage = function (page) {
                st.transitionTo(page);
            };
    
        }]);
})(angular);    