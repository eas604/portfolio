'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
    'ui.router',
    'portfolio.home',
    'portfolio.nav',
    'portfolio.hero',
    'portfolio.about',
    'portfolio.footer'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                views: {
                    '': {templateUrl: 'home/home.html'},
                    'nav@home': {
                        templateUrl: 'nav/nav.html',
                        controller: 'navCtrl'
                    },
                    'hero@home': {
                        templateUrl: 'hero/hero.html',
                        controller: 'heroCtrl'
                    },
                    'about@home': {
                        templateUrl: 'about/about.html',
                        controller: 'aboutCtrl'
                    },
                    'footer@home': {
                        templateUrl: 'footer/footer.html',
                        controller: 'footerCtrl'
                    }
                }
            })
/*            .state('home.nav', {
                templateUrl: 'nav/nav.html',
                controller: 'navCtrl'
            })
            .state('home.about', {
                templateUrl: 'about/about.html',
                controller: 'aboutCtrl'
            })
            .state('footer', {
                url: '/footer',
                templateUrl: 'footer/footer.html',
                controller: 'footerCtrl'
            })*/
        ;
    }])
;
