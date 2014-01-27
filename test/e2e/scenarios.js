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
        
    });
});
