'use strict';

describe('Controller', function() {

    beforeEach(module('imdbApp'));

    describe('TopFilmsCtrl', function() {

        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('TopFilmsCtrl', {'$scope': scope});
        }));

        it('should check contoller initialized with top 10 films', function() {
            expect(scope.imdb.films.length).toBe(10);
        });

    });
});