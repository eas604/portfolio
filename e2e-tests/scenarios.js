'use strict';

describe('portfolio', function() {

    browser.get('/app/#/');

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });


    describe('home', function() {

        beforeEach(function() {
            browser.get('#/home');
        });


        it('should render home when user navigates to /home', function() {
            expect(element.all(by.css('h1')).first().getText()).
                toMatch(/Edwin Sheldon/);
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
});
