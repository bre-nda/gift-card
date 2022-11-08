import { TestBed } from '@angular/core/testing';

import { RestWorkService } from './rest-work.service';

describe('RestWorkService', () => {
  let service: RestWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
