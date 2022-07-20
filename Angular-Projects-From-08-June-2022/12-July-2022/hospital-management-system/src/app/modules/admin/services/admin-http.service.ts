import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private httpService: HttpClient) { }

  public _token = localStorage.getItem('_token');
  public _id = localStorage.getItem('_id');

  getChangeRequests() {
    return this.httpService.get('change-request', { headers: { Authorization: this._token! } });
  }

  getReminders() {
    return this.httpService.get('reminder?deleted=false', { headers: { Authorization: this._token! } });
  }

  createDoctor(data: { name: string; email: string; role: string; speciality: string; nurses: [] }) {
    const successMsg = 'Doctor Created Successfully...';
    const errorMsg = 'Error! Doctor not created...';
    return this.httpService.post('user/register', data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

  editDoctor(data: { name?: string; email?: string; role?: string; speciality?: string; nurses?: [] }, id: string) {
    const successMsg = 'Doctor Edited Successfully...';
    const errorMsg = 'Error! Someting went wrong...';
    return this.httpService.patch(`user/${id}`, data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

  createNurse(data: { name: string; email: string; role: string; assignedDoctor: string; }) {
    const successMsg = 'Nurse Created Successfully...';
    const errorMsg = 'Validation Error! Check your input again...';
    return this.httpService.post('user/register', data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

  editNurse(data: { name?: string; email?: string; role?: string; assignedDoctor?: string; }, id: string) {
    const successMsg = 'Nurse Edited Successfully...';
    const errorMsg = 'Validation Error! Check your input again...';
    return this.httpService.patch(`user/${id}`, data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

  deleteUser(id: string) {
    const successMsg = 'User Deleted Successfully...';
    const errorMsg = 'Something went wrong...';
    return this.httpService.delete(`user/${id}`, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

  updateChangeRequest(id: string, data: { status: string }) {
    const successMsg = 'User Status Updated...';
    const errorMsg = 'Something went wrong...';
    return this.httpService.patch(`change-request/${id}`, data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
  }

}
