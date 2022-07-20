import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/models/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpClient) {
  }
  login(creds: ILogin) {
    const successMsg = 'You logged in successfully...';
    const errorMsg = 'Your crendentials are not matching';
    return this.httpService.post('user/login', creds, { headers: { successMsg: successMsg, errorMsg: errorMsg } });
  }

  getUserToken() {
    return localStorage.getItem('_token');
  }

  getUserRole() {
    return localStorage.getItem('_role');
  }

  getUserId() {
    return localStorage.getItem('_id');
  }

  isUserLoggedIn() {
    if (this.getUserToken() && this.getUserRole() && this.getUserId()) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    return true;
  }
}
