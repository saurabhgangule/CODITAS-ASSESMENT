import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { IsUserActiveService } from '../shared-services/is-user-active.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardForLazyLoadGuard implements CanLoad {
  constructor(private isUserActiveService: IsUserActiveService, private router: Router) { }
  canLoad() {
    return this.isUserActiveService.isActive() ? true : this.router.navigate(['/']);
  }
}
