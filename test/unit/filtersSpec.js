'use strict';

describe('Filter', function(){
   
    beforeEach(module('imdbApp'));
    
    describe('reverse', function(){
       
        it('should reverse a string', inject(function(reverseFilter){
            expect(reverseFilter('ABCD')).toEqual('DCBA');
            expect(reverseFilter('12345')).toEqual('54321');
        }));
        
    });
    
    describe('range', function(){
       
        it('should create array from 1 to 100', inject(function(rangeFilter){
            expect(rangeFilter([], 1, 100).length).toEqual(100);
        }));
        
    });
    
    describe('filterTable', function(){
       
        it('should filter film array', inject(function(TopFilms, filterTableFilter){
            var films = TopFilms.films;
            var filter = {query: "Крестный отец", sortBy: "-", orderBy: "rating", limitTo: '1'};
            var filteredFilms = filterTableFilter(films, filter);
            expect(filteredFilms.length).toEqual(1);
            expect(filteredFilms[0].title).toEqual("Крестный отец");
            
            filter.sortBy = '+';
            filteredFilms = filterTableFilter(films, filter);
            expect(filteredFilms.length).toEqual(1);
            expect(filteredFilms[0].title).toEqual("Крестный отец 2");
        }));
        
    });
    
});