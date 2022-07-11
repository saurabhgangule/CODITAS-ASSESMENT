import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpClient) { }

  login(creds: ILogin) {
    return this.httpService.post('auth/login', creds, { headers: { message: 'user login' } });
  }
}
