import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NurseHttpService {

    constructor(private httpService: HttpClient) { }

    public _token = localStorage.getItem('_token');
    public _id = localStorage.getItem('_id');

    sendMessage(data: { to: string, text: string }) {
        const successMsg = 'Message Sent Successfully...';
        const errorMsg = 'Error! Message not sent...';
        return this.httpService.post('message', data, { headers: { Authorization: this._token!, successMsg: successMsg, errorMsg: errorMsg } });
    }

}