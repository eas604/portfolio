'use strict';

describe('portfolio.hero module', function() {

    beforeEach(module('portfolio.hero'));

    describe('hero controller', function() {
        var scope, $httpBackend, ctrl, state;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller, $state) {

            state = $state;
            $httpBackend = _$httpBackend_;

            // Load the hero model
            $httpBackend.expectGET('hero/hero.json').respond({
                title: 'hero',
                messages: [
                    'Human Being',
                    'Alabamian',
                    'estadounidense'
                ]
            });

            scope = $rootScope.$new();
            ctrl = $controller('heroCtrl', {$scope: scope});
        }));

        it('should have a title `hero`', function () {
            expect(scope.title).toBeUndefined();

            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');

            $httpBackend.flush();
            expect(scope.title).toEqual('hero');
        });

        it('should have 3 messages', function () {
            expect(scope.messages).toBeUndefined();
            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');
            $httpBackend.flush();
            expect(scope.messages.length).toBe(3);
        });

        it('should have `estadounidense` in messages[]', function () {
            expect(scope.messages).toBeUndefined();
            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');
            $httpBackend.flush();
            expect(scope.messages).toContain('estadounidense');
        });

    });
});