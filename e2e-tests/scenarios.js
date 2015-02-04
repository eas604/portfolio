'use strict';

describe('portfolio', function() {

    browser.get('/app/#/');

    var sayMyNameSayMyName = function () {
        expect(element.all(by.css('h1')).first().getText()).
            toMatch(/Edwin Sheldon/);
    };

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/');
        sayMyNameSayMyName();
    });

    describe('nav', function () {

        beforeEach(function() {
            browser.get('#/#home');
        });

        it('should show a navigation', function () {
            expect(element(by.css('#home')).isPresent()).toBeTruthy();
            expect(element(by.css('ul.menu.ng-scope li.ng-scope a')).getText()).
                toMatch(/Home/);
        });

    });

    describe('home', function() {

        it('should render title element', function() {
            sayMyNameSayMyName();
        });

    });

    describe('about', function() {

        beforeEach(function() {
            browser.get('#/#home');
        });

        it('should render about', function() {
            expect(element(by.css('#about')).isPresent()).toBeTruthy();
            expect(element.all(by.css('h2')).first().getText()).
                toMatch(/About/);
        });

    });

    describe('footer', function() {

        beforeEach(function() {
            browser.get('#/#footer');
        });

        it('should render footer', function() {
            expect(element(by.css('#meta')).isPresent()).toBeTruthy();
            expect(element.all(by.css('h3')).get(1).getText()).
                toMatch(/Around the Web/);
        });

    });


});
