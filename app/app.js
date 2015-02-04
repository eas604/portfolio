'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
    'ui.router',
    'portfolio.home',
    'portfolio.about',
    'portfolio.footer',
    'portfolio.nav'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
            .state('home.nav', {
                templateUrl: 'nav/nav.html',
                controller: 'navCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about/about.html',
                controller: 'aboutCtrl'
            })
            .state('footer', {
                url: '/footer',
                templateUrl: 'footer/footer.html',
                controller: 'footerCtrl'
            })
        ;
    }])
;
