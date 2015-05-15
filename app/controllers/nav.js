(function (angular) {
    'use strict';
    
    angular.module('portfolio.nav', ['ui.router'])
    
    .controller('navCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {
    
        ht.get('models/nav.json').success(function (data) {
            sc.links = data.links;
            sc.languages = data.languages;
        });
    
        st.setPage = function (page) {
            st.transitionTo(page);
        };
    
    }]);
})(angular);