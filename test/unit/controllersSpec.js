'use strict';

describe('Controller', function() {

    beforeEach(module('app'));

    describe('SecondCtrl', function() {

        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('SecondCtrl', {'$scope': scope});
        }));
        describe('reverse methood', function() {
            it('should reverse a strng', function() {
                expect(scope.reverse('ABCD')).toBe('DCBA');
            });
        });
    });
});