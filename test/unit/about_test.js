'use strict';

describe('portfolio.about module', function() {

    beforeEach(module('portfolio.about'));

    describe('about controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('models/about.json').respond({
                title: 'About',
                messages: [
                    'Let\'s make the unit',
                    'tests for our Angular app',
                    'in form of haiku'
                ]
            });

            scope = $rootScope.$new();
            ctrl = $controller('aboutCtrl', {$scope: scope});
        }));

        it('should have a title `About`', function () {
            expect(scope.title).toBeUndefined();
            $httpBackend.flush();
            expect(scope.title).toEqual('About');
        });

        it('should have 3 messages', function () {
            expect(scope.messages).toBeUndefined();
            $httpBackend.flush();
            expect(scope.messages.length).toBe(3);
        });

    });
});