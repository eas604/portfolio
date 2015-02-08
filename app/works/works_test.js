'use strict';

describe('portfolio.works module', function() {

    beforeEach(module('portfolio.works'));

    describe('works controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('works/works.json').respond({
                title: 'Portfolio',
                works: [{
                    app: 'portfolio',
                    description: ['simple portfolio app'],
                    role: 'developer'
                }]
            });

            scope = $rootScope.$new();
            ctrl = $controller('worksCtrl', {$scope: scope});
        }));

        it('should have a title `Portfolio`', function () {
            expect(scope.title).toBeUndefined();
            $httpBackend.flush();
            expect(scope.title).toEqual('Portfolio');
        });

        it('should have a `portfolio` work', function () {
            expect(scope.works).toBeUndefined();
            $httpBackend.flush();
            expect(scope.works.length).toBe(1);
            expect(scope.works[0].app).toBe('portfolio');
            expect(scope.works[0].description.length).toBe(1);
            expect(scope.works[0].role).toBe('developer');
        });

    });
});