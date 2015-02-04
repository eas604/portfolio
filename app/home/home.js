'use strict';

angular.module('portfolio.home', ['ui.router'])

.controller('homeCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {

    sc.$on('$viewContentLoaded', function () {
        ht.get('home/home.json').success(function (data) {
            sc.title = data.title;
            sc.messages = data.messages;
        });
    });

    st.setPage = function (page) {
        st.transitionTo(page);
    };

    // load partial views here
    st.setPage('home.nav');

}]);