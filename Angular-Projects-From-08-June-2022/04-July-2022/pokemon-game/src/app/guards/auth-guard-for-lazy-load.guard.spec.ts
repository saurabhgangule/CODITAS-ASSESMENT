import { TestBed } from '@angular/core/testing';

import { AuthGuardForLazyLoadGuard } from './auth-guard-for-lazy-load.guard';

describe('AuthGuardForLazyLoadGuard', () => {
  let guard: AuthGuardForLazyLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardForLazyLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
