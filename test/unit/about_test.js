'use strict';

describe('portfolio.about module', function() {
    
    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('portfolio.about'));

    describe('about controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('models/about.json').respond({
                title: {
                    'en': 'About', 'es': 'Sobre'
                },
                messages: {
                    'en': [
                        'Let\'s make the unit',
                        'tests for our Angular app',
                        'in form of haiku'
                    ],
                    'es': [
                        'Cuida que en nada',
                        'dependas',
                        'de exceso'
                    ]
                }
            });

            scope = $rootScope.$new();
            ctrl = $controller('aboutCtrl', {$scope: scope});
        }));

        it('should have a title `About`', function () {
            expect(scope.title).toBeUndefined();
            $httpBackend.flush();
            expect(scope.title['en']).toEqualData('About');
            expect(scope.title['es']).toEqualData('Sobre');
        });

        it('should have 3 messages', function () {
            expect(scope.messages).toBeUndefined();
            $httpBackend.flush();
            expect(scope.messages['en'].length).toBe(3);
            expect(scope.messages['es'].length).toBe(3);
        });

    });
});