import { TestBed } from '@angular/core/testing';

import { RestContactsService } from './rest-contacts.service';

describe('RestContactsService', () => {
  let service: RestContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
