'use strict';

angular.module('portfolio.nav', ['ui.router', 'ngMaterial'])

.controller('navCtrl', ['$scope', '$http', '$mdSidenav',
        function (sc, ht, mdSidenav) {

    ht.get('models/nav.json').success(function (data) {
        sc.links = data.links;
        sc.languages = data.languages;
        sc.menu = data.menu;
    });

    sc.close = function () {
        mdSidenav('left').close();
    };

    sc.toggle = function () {
        mdSidenav('left').toggle();
    };

}]);