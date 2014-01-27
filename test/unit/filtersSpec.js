'use strict';

describe('Filters', function(){
   
    beforeEach(module('imdbApp'));
    
    describe('reverse', function(){
       
        it('should reverse a string', inject(function(reverseFilter){
            expect(reverseFilter('ABCD')).toEqual('DCBA');
            expect(reverseFilter('12345')).toEqual('54321');
        }));
        
    });
    
});