'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('AngularJS Tutorial app', function() {

  beforeEach(function() {
    browser().navigateTo('AngularJSTutorial/index.html');
  });


  it('should contains output input value', function() {
      input("title").enter('Title');
      expect(element('h2').html()).toContain("Title");
  });
});
