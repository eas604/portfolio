(function (angular) {
'use strict';

angular.module('portfolio.works', ['ui.router'])

    .controller('worksCtrl', ['$scope', '$http', function (sc, ht) {

        ht.get('models/works.json').success(function (data) {
            sc.title = data.title;
            sc.works = data.works;
        });
    }]);
})(angular);