'use strict';

describe('portfolio.education module', function() {

    beforeEach(module('portfolio.education'));

    describe('education controller', function() {
        var scope, $httpBackend, ctrl;

        beforeEach(module('portfolio'));

        beforeEach(inject(function (_$httpBackend_, $rootScope,  $controller) {
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('models/education.json').respond({
                title: 'Education',
                degrees: [{
                    'degree': 'Bachelor of Arts',
                    'concentration': 'Sitting around drinking Bud Light',
                    'school': 'The University of Alabama'
                }]
            });

            scope = $rootScope.$new();
            ctrl = $controller('educationCtrl', {$scope: scope});
        }));

        it('should have a title `Education`', function () {
            expect(scope.title).toBeUndefined();
            $httpBackend.flush();
            expect(scope.title).toEqual('Education');
        });

        it('should tell the world what the most common Bama major is', function () {
            expect(scope.degrees).toBeUndefined();
            $httpBackend.flush();
            expect(scope.degrees.length).toBe(1);
            expect(scope.degrees[0].concentration).toContain('Bud Light');
            expect(scope.degrees[0].school).toBe('The University of Alabama');
        });

    });
});