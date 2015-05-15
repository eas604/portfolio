(function (angular) {
'use strict';

angular.module('portfolio.works', ['ui.router'])

    .controller('worksCtrl', ['$scope', 'Works', function (sc, Works) {
        Works.get(function (data) {
            sc.title = data.title;
            sc.works = data.works;
        });
    }]);
})(angular);