(function (angular) {
    'use strict';
    
    angular.module('portfolio.hero', ['ui.router'])
    
        .controller('heroCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {
    
            sc.$on('$viewContentLoaded', function () {
                ht.get('models/hero.json').success(function (data) {
                    sc.title = data.title;
                    sc.messages = data.messages;
                });
            });
    
            //sc.$on('languageChanged', function (lang) {
            //    console.log('Received languageChanged');
            //    sc.changeLang(lang);
            //});
    
            st.setPage = function (page) {
                st.transitionTo(page);
            };
    
        }]);
})(angular);    