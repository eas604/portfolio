'use strict';

describe('portfolio', function() {

    browser.get('/app/#/');

    var sayMyNameSayMyName = function () {
        expect(element.all(by.css('h1')).first().getText()).
            toMatch(/Edwin Sheldon/);
    };

    var en = element(by.css('#en'));
    var es = element(by.css('#es'));

    it('should automatically redirect to /home when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/');
        sayMyNameSayMyName();
    });

    describe('nav', function () {

        it('should have two language buttons', function () {
            expect(en.isPresent()).toBeTruthy();
            expect(es.isPresent()).toBeTruthy();
        });

        it('should show a navigation', function () {
            expect(element(by.css('#home')).isPresent()).toBeTruthy();
            expect(element.all(by.css('ul#home li.ng-scope a')).first().getText()).
                toMatch(/Home/);
            es.click();
            expect(element.all(by.css('ul#home li.ng-scope a')).first().getText()).
                toMatch(/Inicio/);
            en.click();
        });

        it('should have five navigation links', function () {
            var linkElements = element.all(by.css('ul.menu li.ng-scope a'));
            expect(linkElements.count()).toEqual(5);
        });



    });

    describe('home', function() {

        it('should render title element', function() {
            sayMyNameSayMyName();
        });

        it('should indicate that some folk say I\'m a terrific athlete', function () {
            var skills = element.all(by.css('.intro-text p span.skills'));
            expect(skills).toBeDefined();
            expect(skills.get(1).getText()).toContain('Runner');
            es.click();
            expect(skills.get(1).getText()).toContain('Corredor');
            en.click();
        });
    });

    describe('about', function() {
        it('should render about', function() {
            expect(element(by.css('#about')).isPresent()).toBeTruthy();
            var about = element.all(by.css('h2')).first();
            expect(about.getText()).toMatch(/About/);
            es.click();
            expect(about.getText()).toMatch(/Sobre/);
            en.click();
        });

    });

    describe('works', function() {

        it('should render works', function() {
            expect(element(by.css('#works')).isPresent()).toBeTruthy();

            var works = element(by.css('#works div.container div.row div.col h2'));
            expect(works).toBeDefined();
            expect(works.getText()).toBe('Portfolio');
            es.click();
            expect(works.getText()).toBe('Cartera');
            en.click();

            expect(element.all(by.css('#works h3')).get(0).getText()).
                toMatch(/SEDMAN/);
        });

        it('should show four eHydro tags', function () {
            expect(element(by.css('#works .tags')).isPresent()).toBeTruthy();
            expect(element.all(by.css('#works .tags')).get(1).getText()).toContain('Desktop');
        });

    });

    describe('education', function() {

        it('should render education', function() {
            expect(element(by.css('#education')).isPresent()).toBeTruthy();

            var edu = element.all(by.css('#education h2')).get(0);

            expect(edu.getText()).toBe('Education');
            es.click();
            expect(edu.getText()).toBe('Instrucción');
            en.click();

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

        it('should render footer', function() {
            expect(element(by.css('#meta')).isPresent()).toBeTruthy();

            var web = element.all(by.css('#meta h3')).get(1);

            expect(web.getText()).toBe('Around the Web');
            es.click();
            expect(web.getText()).toBe('Alrededor de la Red');
            en.click();

        });

    });


});
