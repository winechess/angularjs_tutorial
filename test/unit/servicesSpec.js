'use strict';

describe('Services', function(){
    
   beforeEach(module('imdbApp'));
   
   describe('TopFilms', function(){
      
      it('should return top 10 films', inject(function(TopFilms){
          expect(TopFilms.films.length).toBe(10);
      }));
       
   });
    
});