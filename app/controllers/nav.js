(function (angular) {
    'use strict';
    
    angular.module('portfolio.nav', ['ui.router'])
    
    .controller('navCtrl', ['$scope', '$state', 'Nav', function (sc, st, Nav) {
    
        Nav.get(function (data) {
            sc.links = data.links;
            sc.languages = data.languages;
        });
    
        st.setPage = function (page) {
            st.transitionTo(page);
        };
    
    }]);
})(angular);