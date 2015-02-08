'use strict';

angular.module('portfolio.works', ['ui.router'])

    .controller('worksCtrl', ['$scope', '$http', function (sc, ht) {

        ht.get('works/works.json').success(function (data) {
            sc.title = data.title;
            sc.works = data.works;
        });
    }]);