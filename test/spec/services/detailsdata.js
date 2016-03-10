'use strict';

describe('Service: detailsData', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var detailsData;
  beforeEach(inject(function (_detailsData_) {
    detailsData = _detailsData_;
  }));

  it('should do something', function () {
    expect(!!detailsData).toBe(true);
  });

});
