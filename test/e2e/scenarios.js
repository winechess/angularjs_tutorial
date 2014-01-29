'use strict';
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngularJS Tutorial app', function() {

    beforeEach(function() {
        browser().navigateTo('AngularJSTutorial/index.html');
    });
    describe('index page', function() {

        it('should load films from TopFilm service', function() {
            expect(repeater('tbody tr').count()).toBe(10);
        });
        
        it('should filter films by text in input', function() {
            input('query.$').enter('Побег из Шоушенка');
            expect(repeater('tbody tr').count()).toBe(1);
        });
        
        it('should order film by place', function() {
            expect(element('tbody tr:eq(0) td:eq(0)').html()).toBe("1"); 
        });
        
        it('should order film by title', function() {
            select('filter.orderBy').option('title');
            expect(element('tbody tr:eq(0) td:eq(1)').html()).toBe("12 рaзгневанных мужчин"); 
        });
        
        it('should order film by year', function() {
            select('filter.orderBy').option('year');
            expect(element('tbody tr:eq(0) td:eq(2)').html()).toBe("1957"); 
        });
        
        it('should order film by rating', function() {
            select('filter.orderBy').option('rating');
            expect(element('tbody tr:eq(0) td:eq(3)').html()).toBe("8.8"); 
        });
        
        it('should sort film in descending order', function() {
            select('filter.sortBy').option('-');
            expect(element('tbody tr:eq(0) td:eq(0)').html()).toBe("10"); 
        });
        
        it('should limit films in table to 5', function() {
            select('filter.limitTo').option(4);
            expect(repeater('tbody tr').count()).toBe(5); 
        });
        
        it('should find film directive in the page', function(){
           expect(element('film').html()).toContain('This is film directive!!!'); 
        });
    });
});
