import { TestBed } from '@angular/core/testing';

import { RestRedemptionService } from './rest-redemption.service';

describe('RestRedemptionService', () => {
  let service: RestRedemptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestRedemptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
