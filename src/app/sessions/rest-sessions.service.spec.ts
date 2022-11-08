import { TestBed } from '@angular/core/testing';

import { RestSessionsService } from './rest-sessions.service';

describe('RestSessionsService', () => {
  let service: RestSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
