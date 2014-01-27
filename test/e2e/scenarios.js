'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngularJS Tutorial app', function() {

    beforeEach(function() {
        browser().navigateTo('AngularJSTutorial/index.html');
    });

    describe('index page', function() {

        it('should load default values for title from service data', function() {
            //console.log(element('h2'));
            expect(element('div#first h2').html()).toContain('ecivres morf eltit si sihT');
            expect(element('div#second h2').html()).toContain('ecivres morf eltit si sihT');
        });

        it('values of titles must be always equals', function() {
            
            using("#first").input("film.title").enter('title1');
            expect(element('div#first h2').html()).toContain("1eltit");
            
            using("#second").input("film.title").enter('title2');
            expect(element('div#second h2').html()).toContain("2eltit");
            
            expect(element('div#first h2').html()).toEqual("2eltit");
        });
    });
});
