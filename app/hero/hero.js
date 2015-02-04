'use strict';

angular.module('portfolio.hero', ['ui.router'])

    .controller('heroCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {

        sc.$on('$viewContentLoaded', function () {
            ht.get('hero/hero.json').success(function (data) {
                sc.title = data.title;
                sc.messages = data.messages;
            });
        });

        st.setPage = function (page) {
            st.transitionTo(page);
        };

    }]);