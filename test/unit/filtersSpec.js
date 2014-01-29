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
    
});