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
            expect(element.all(by.css('ul.menu.ng-scope li.ng-scope a')).first().getText()).
                toMatch(/Home/);
        });

        it('should have five navigation links', function () {
            var linkElements = element.all(by.css('ul.menu.ng-scope li.ng-scope a'));
            expect(linkElements.count()).toEqual(5);
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

    describe('works', function() {

        beforeEach(function() {
            browser.get('#/#works');
        });

        it('should render works', function() {
            expect(element(by.css('#works')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#works h3')).get(0).getText()).
                toMatch(/SEDMAN/);
        });

        it('should show four eHydro tags', function () {
            expect(element(by.css('#works .tags')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#works .tags')).get(1).getText()).toContain('Desktop');
        });

    });

    describe('education', function() {

        beforeEach(function() {
            browser.get('#/#education');
        });

        it('should render education', function() {
            expect(element(by.css('#education')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#education h2')).get(0).getText()).
                toMatch(/Education/);
        });

        it('should show two degrees', function () {
            expect(element(by.css('#education h3')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#education h3')).get(0).getText()).toContain('Information Systems');
            expect(element.all(by.css('#education h3')).get(1).getText()).toContain('Spanish');
        });

        it('should show two minors', function () {
            expect(element(by.css('#education p.minor')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#education p.minor span.minor'))
                .get(0).getText()).toContain('Information Technology');
            expect(element.all(by.css('#education p.minor span.minor'))
                .get(1).getText()).toContain('Political Science');
        });

    });

    describe('footer', function() {

        beforeEach(function() {
            browser.get('#/#footer');
        });

        it('should render footer', function() {
            expect(element(by.css('#meta')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#meta h3')).get(1).getText()).
                toMatch(/Around the Web/);
        });

    });


});
