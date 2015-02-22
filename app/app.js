'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
    'ui.router',
    'btford.markdown',
    'portfolio.home',
    'portfolio.nav',
    'portfolio.hero',
    'portfolio.about',
    'portfolio.works',
    'portfolio.education',
    'portfolio.footer'
])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                views: {
                    '': {templateUrl: 'views/home.html'},
                    'nav@home': {
                        templateUrl: 'views/nav.html',
                        controller: 'navCtrl'
                    },
                    'hero@home': {
                        templateUrl: 'views/hero.html',
                        controller: 'heroCtrl'
                    },
                    'about@home': {
                        templateUrl: 'views/about.html',
                        controller: 'aboutCtrl'
                    },
                    'works@home': {
                        templateUrl: 'views/works.html',
                        controller: 'worksCtrl'
                    },
                    'education@home': {
                        templateUrl: 'views/education.html',
                        controller: 'educationCtrl'
                    },
                    'footer@home': {
                        templateUrl: 'views/footer.html',
                        controller: 'footerCtrl'
                    }
                }
            })
        ;
    }])
;
