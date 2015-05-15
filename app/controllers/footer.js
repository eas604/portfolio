(function (angular) {
    'use strict';
    
    angular.module('portfolio.footer', ['ui.router'])
    
    .controller('footerCtrl', ['$scope','$state', 'Footer', function (sc, st, Footer) {
    
        sc.$on('$viewContentLoaded', function () {
            Footer.get(function (data) {
                sc.location = data.location;
                sc.web = data.web;
                sc.details = data.details;
                sc.copyright = data.copyright;
            });
        });
    
        st.setPage = function (page) {
            st.transitionTo(page);
        };
    }]);
})(angular);