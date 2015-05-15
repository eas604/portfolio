(function (angular) {
    'use strict';
    
    angular.module('portfolio.about', ['ui.router'])
    
    .controller('aboutCtrl', ['$scope', '$state', 'About', 
            function (sc, st, About) {
    
        About.get(function (data) {
            sc.title = data.title;
            sc.messages = data.messages;
        });
    
        st.setPage = function (page) {
            st.transitionTo(page);
        };    
    }]);
})(angular);