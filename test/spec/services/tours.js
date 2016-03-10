'use strict';

describe('Service: tours', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var tours;
  beforeEach(inject(function (_tours_) {
    tours = _tours_;
  }));

  it('should do something', function () {
    expect(!!tours).toBe(true);
  });

});
