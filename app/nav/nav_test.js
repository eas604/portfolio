describe('portfolio.nav module', function() {

    beforeEach(module('portfolio.nav'));

    describe('nav controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('nav/nav.json').respond([
                {title: 'gmail', url: 'https://gmail.com'},
                {title: 'reddit', url: 'https://reddit.com'}
            ]);

            scope = $rootScope.$new();
            ctrl = $controller('navCtrl', {$scope: scope});
        }));

        it('should link to reddit', function () {
            expect(scope.links).toBeUndefined();
            $httpBackend.flush();
            expect(scope.links).toContain({title: 'reddit', url: 'https://reddit.com'});
        });

    });
});