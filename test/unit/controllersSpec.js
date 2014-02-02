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

        it('should if filter initialized with correct parameters', function(){
           expect(scope.filter.orderBy).toEqual('place');
           expect(scope.filter.sortBy).toEqual('+');
           expect(scope.filter.limitTo).toEqual(null);
        });
        
        it('should add 2 films to the films list', function(){
            scope.loadMoreFilms();
            expect(scope.imdb.films.length).toEqual(12);
        });
    });
});