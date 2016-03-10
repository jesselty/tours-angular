'use strict';

describe('Service: toursData', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var toursData;
  beforeEach(inject(function (_toursData_) {
    toursData = _toursData_;
  }));

  it('should do something', function () {
    expect(!!toursData).toBe(true);
  });

});
