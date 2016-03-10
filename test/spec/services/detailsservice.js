'use strict';

describe('Service: detailsService', function () {

  // load the service's module
  beforeEach(module('myAppApp'));

  // instantiate service
  var detailsService;
  beforeEach(inject(function (_detailsService_) {
    detailsService = _detailsService_;
  }));

  it('should do something', function () {
    expect(!!detailsService).toBe(true);
  });

});
