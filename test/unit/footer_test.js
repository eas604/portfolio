'use strict';

describe('portfolio.footer module', function() {

    beforeEach(module('portfolio.footer'));

    describe('footer controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('models/footer.json').respond({
                location: 'La Mancha',
                copyright: 'Copyright © 1605 Miguel de Cervantes',
                web: {twitter: 'https://twitter.com/SwiftOnSecurity'}
            });

            scope = $rootScope.$new();
            ctrl = $controller('footerCtrl', {$scope: scope});
        }));

        it('should be from La Mancha', function () {
            expect(scope.location).toBeUndefined();
            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');
            $httpBackend.flush();
            expect(scope.location).toEqual('La Mancha');
        });

        it('should have a copyright', function () {
            expect(scope.copyright).toBeUndefined();
            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');
            $httpBackend.flush();
            expect(scope.copyright).toContain('©');
        });

        it('should have Infosec Taylor Swift\'s Twitter', function () {
            expect(scope.web).toBeUndefined();
            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');
            $httpBackend.flush();
            expect(scope.web.twitter).toContain('Swift');
        });

    });
});