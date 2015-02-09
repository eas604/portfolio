'use strict';

angular.module('portfolio.education', ['ui.router'])

    .controller('educationCtrl', ['$scope', '$http', function (sc, ht) {

        ht.get('education/education.json').success(function (data) {
            sc.title = data.title;
            sc.degrees = data.degrees;
        });
    }]);