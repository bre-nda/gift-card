import { TestBed } from '@angular/core/testing';

import { RestFriendService } from './rest-friend.service';

describe('RestFriendService', () => {
  let service: RestFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
