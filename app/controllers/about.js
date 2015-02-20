'use strict';

angular.module('portfolio.about', ['ui.router'])

.controller('aboutCtrl', ['$scope', '$http', '$state', function (sc, ht, st) {

    ht.get('models/about.json').success(function (data) {
        sc.title = data.title;
        sc.messages = data.messages;
    });

    st.setPage = function (page) {
        st.transitionTo(page);
    };

}]);