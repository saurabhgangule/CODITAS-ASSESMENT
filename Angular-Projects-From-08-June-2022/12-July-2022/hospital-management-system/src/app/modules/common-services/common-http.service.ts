import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService implements OnInit {


  constructor(private httpService: HttpClient) { }

  ngOnInit(): void { }

  getAllUsers() {
    return this.httpService.get('user');
  }

  getProfile() {
    return this.httpService.get('user/profile');
  }

  getMessages() {
    return this.httpService.get('message')
  }

  createChangeRequest(data: { for: string; replacement: string; reason: string; }) {
    const successMsg = 'Change Request Created Successfully...';
    const errorMsg = 'Error! Change Request not sent...';

    return this.httpService.post('change-request', data, { headers: { successMsg: successMsg, errorMsg: errorMsg } });
  }

  getUsersBasedOnRole(role: string) {
    return this.httpService.get(`user?role=${role}`)
  }

  getChangeRequests() {
    return this.httpService.get('change-request');
  }

  getReminders() {
    return this.httpService.get('reminder?deleted=false');
  }

  createReminder(_id: string) {
    const successMsg = 'Notification sent successfully...';
    const errorMsg = 'Error! Notification not sent...';
    return this.httpService.post(`reminder/${_id}`, { headers: { successMsg: successMsg, errorMsg: errorMsg } });
  }

}
