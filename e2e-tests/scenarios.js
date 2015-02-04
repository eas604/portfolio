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

    describe('home', function() {

        beforeEach(function() {
            browser.get('#/home');
        });

        it('should render navigation when user navigates to /home', function () {
            expect(element(by.css('ul.menu.ng-scope li.ng-scope a')).getText()).
                toMatch(/Home/);
        });

        it('should render title element when user navigates to /home', function() {
            sayMyNameSayMyName();
        });

    });

    describe('about', function() {

        beforeEach(function() {
            browser.get('#/about');
        });

        it('should render about when user navigates to /about', function() {
            expect(element.all(by.css('h2')).first().getText()).
                toMatch(/About/);
        });

    });

    describe('footer', function() {

        beforeEach(function() {
            browser.get('#/footer');
        });

        it('should render footer when user navigates to /footer', function() {
            expect(element.all(by.css('h3')).get(1).getText()).
                toMatch(/Around the Web/);
        });

    });


});
