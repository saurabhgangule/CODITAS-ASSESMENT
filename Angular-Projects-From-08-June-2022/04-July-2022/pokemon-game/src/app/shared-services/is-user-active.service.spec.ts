import { TestBed } from '@angular/core/testing';

import { IsUserActiveService } from './is-user-active.service';

describe('IsUserActiveService', () => {
  let service: IsUserActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsUserActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
