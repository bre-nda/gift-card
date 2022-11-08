import { TestBed } from '@angular/core/testing';

import { RestPurchasesService } from './rest-purchases.service';

describe('RestPurchasesService', () => {
  let service: RestPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
