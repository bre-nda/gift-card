import { TestBed } from '@angular/core/testing';

import { RestShareService } from './rest-share.service';

describe('RestShareService', () => {
  let service: RestShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
