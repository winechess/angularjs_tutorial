'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngularJS Tutorial app', function() {

    beforeEach(function() {
        browser().navigateTo('AngularJSTutorial/index.html');
    });

    describe('index page', function() {
        
        it('should load default value for title from controller', function(){
           expect(element('h2').html()).toContain('This is title from controller'); 
        });
        
        it('should output input value', function() {
            input("title").enter('Title');
            expect(element('h2').html()).toContain("Title");
        });
    });
});
