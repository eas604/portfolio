'use strict';

describe('portfolio.home module', function() {

    beforeEach(module('portfolio.home'));

    describe('home controller', function() {
        var scope, $httpBackend, ctrl, state;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller, $state) {

            state = $state;

            $httpBackend = _$httpBackend_;

            // Expect our partial views. This is a side-effect of
            // nesting our views in one parent view.
            $httpBackend.expectGET('home/home.html').respond('<div></div>');
            $httpBackend.expectGET('nav/nav.html').respond('<div></div>');

            // and our model
            $httpBackend.expectGET('home/home.json').respond({
                title: 'Home',
                messages: [
                    'Human Being',
                    'Alabamian',
                    'estadounidense'
                ]
            });

            scope = $rootScope.$new();
            ctrl = $controller('homeCtrl', {$scope: scope});
        }));

        it('should have a title `home`', function () {
            expect(scope.title).toBeUndefined();

            // Ensure the $viewContentLoaded event is fired
            scope.$broadcast('$viewContentLoaded');

            $httpBackend.flush();
            expect(scope.title).toEqual('Home');
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