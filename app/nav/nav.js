'use strict';

angular.module('portfolio.nav', ['ui.router'])

.controller('navCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {

    ht.get('nav/nav.json').success(function (data) {
        sc.links = data;
    });

    st.setPage = function (page) {
        st.transitionTo(page);
    };

}]);