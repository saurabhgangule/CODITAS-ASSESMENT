import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    const roleId = this.authService.getUserRole();
    for (let role of environment.roles) {
      if (role._id === roleId) {
        this.router.navigate([role.name.toLowerCase()]);
        return false;
      }
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    const url = segments[0].path;
    return this.checkUserLogin(route, url);
  }

  checkUserLogin(route: Route, url: string): boolean {
    if (this.authService.isUserLoggedIn()) {
      const userRole = this.authService.getUserRole();
      if (route.data?.['role'] && route.data?.['role'].indexOf(userRole) === -1) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }

    this.router.navigate(['']);
    return false;
  }


}
