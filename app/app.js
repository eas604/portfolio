'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ui.router',
  'portfolio.home',
  'portfolio.about'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html',
                controller: 'aboutCtrl'
            })
        ;
    }])
;
