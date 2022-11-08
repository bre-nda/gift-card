import { TestBed } from '@angular/core/testing';

import { RestBalanceService } from './rest-balance.service';

describe('RestBalanceService', () => {
  let service: RestBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
