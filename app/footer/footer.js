'use strict';

angular.module('portfolio.footer', ['ui.router'])

.controller('footerCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {

    sc.$on('$viewContentLoaded', function () {
        ht.get('footer/footer.json').success(function (data) {
            sc.location = data.location;
            sc.web = data.web;
            sc.copyright = data.copyright;
        });
    });

    st.setPage = function (page) {
        st.transitionTo(page);
    };
}]);