import { NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService implements OnInit {
  public _token!: string | null;
  public _id!: string | null;
  public headers!: HttpHeaders;

  constructor(private httpService: HttpClient, private authService: AuthService) {
    this._token = this.authService.getUserToken();
    this._id = this.authService.getUserId();
    this.loadCommonService();
  }

  private loadCommonService() {
    if (this._token && this._id) {
      this.headers = new HttpHeaders({
        Authorization: this._token
      })
    }
  }

  ngOnInit(): void {
    this.loadCommonService();
  }

  getAllUsers() {
    this.loadCommonService();
    return this.httpService.get('user', { headers: this.headers });
  }

  getProfile() {
    return this.httpService.get('user/profile', { headers: this.headers });
  }

  getMessages(_token: string) {
    return this.httpService.get('message', { headers: { Authorization: _token } })
  }

  createChangeRequest(data: { for: string; replacement: string; reason: string; }) {
    const successMsg = 'Change Request Created Successfully...';
    const errorMsg = 'Error! Change Request not sent...';

    this.headers.append('successMsg', successMsg);
    this.headers.append('errorMsg', errorMsg);

    return this.httpService.post('change-request', data, { headers: this.headers });
  }

  getUsersBasedOnCondition(role: string, occupied: string) {
    return this.httpService.get(`user?role=${role}&occupied=${occupied}`, { headers: this.headers })
  }

  createReminder(_id: string, _token: string) {
    const successMsg = 'Notification sent successfully...';
    const errorMsg = 'Error! Notification not sent...';
    this.headers.append('successMsg', successMsg);
    this.headers.append('errorMsg', errorMsg);
    return this.httpService.post(`reminder/${_id}`, {
      headers: {
        Authorization: _token,
        successMsg: successMsg,
        errorMsg: errorMsg
      }
    });
  }

  getChangeRequests(_token: string) {
    return this.httpService.get('change-request', { headers: { Authorization: _token } });
  }

}
