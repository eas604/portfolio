describe('portfolio.nav module', function() {

    beforeEach(module('portfolio.nav'));

    describe('nav controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('models/nav.json').respond(
                {
                    'links': [{
                        title: {'en': 'About', 'es': 'Sobre'}, url: 'https://reddit.com'
                    }],
                    'languages': [{
                        'name': 'English', 'val': 'en'
                    }, {
                        'name': 'Español', 'val': 'es'
                    }]
                }
            );

            scope = $rootScope.$new();
            ctrl = $controller('navCtrl', {$scope: scope});
        }));

        it('should link to reddit', function () {
            expect(scope.links).toBeUndefined();
            $httpBackend.flush();
            expect(scope.links).toBeDefined();
            var link = scope.links[0];
            expect(link.title['en']).toBe('About');
            expect(link.title['es']).toBe('Sobre');
            expect(link.url).toBe('https://reddit.com');
        });

        it('should have English and Spanish languages', function () {
            expect(scope.languages).toBeUndefined();
            $httpBackend.flush();
            expect(scope.languages).toBeDefined();
            expect(scope.languages[0].name).toBe('English');
            expect(scope.languages[0].val).toBe('en');
            expect(scope.languages[1].name).toBe('Español');
            expect(scope.languages[1].val).toBe('es');
        });

    });
});