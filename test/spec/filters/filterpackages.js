'use strict';

describe('Filter: filterPackages', function () {

  // load the filter's module
  beforeEach(module('myAppApp'));

  // initialize a new instance of the filter before each test
  var filterPackages;
  beforeEach(inject(function ($filter) {
    filterPackages = $filter('filterPackages');
  }));

  it('should return the input prefixed with "filterPackages filter:"', function () {
    var text = 'angularjs';
    expect(filterPackages(text)).toBe('filterPackages filter: ' + text);
  });

});
