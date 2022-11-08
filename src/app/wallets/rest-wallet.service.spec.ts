import { TestBed } from '@angular/core/testing';

import { RestWalletService } from './rest-wallet.service';

describe('RestWalletService', () => {
  let service: RestWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
