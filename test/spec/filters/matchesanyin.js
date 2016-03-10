'use strict';

describe('Filter: matchesAnyIn', function () {

  // load the filter's module
  beforeEach(module('myAppApp'));

  // initialize a new instance of the filter before each test
  var matchesAnyIn;
  beforeEach(inject(function ($filter) {
    matchesAnyIn = $filter('matchesAnyIn');
  }));

  it('should return the input prefixed with "matchesAnyIn filter:"', function () {
    var text = 'angularjs';
    expect(matchesAnyIn(text)).toBe('matchesAnyIn filter: ' + text);
  });

});
