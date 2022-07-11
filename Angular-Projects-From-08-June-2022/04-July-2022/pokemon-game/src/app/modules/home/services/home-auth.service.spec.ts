import { TestBed } from '@angular/core/testing';

import { HomeAuthService } from './home-auth.service';

describe('HomeAuthService', () => {
  let service: HomeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
