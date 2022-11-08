import { TestBed } from '@angular/core/testing';

import { RestMessageService } from './rest-message.service';

describe('RestMessageService', () => {
  let service: RestMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
