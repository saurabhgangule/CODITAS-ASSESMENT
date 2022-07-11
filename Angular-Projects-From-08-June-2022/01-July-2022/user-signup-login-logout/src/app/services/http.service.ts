import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../models/iterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url!: string;
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/users';
  }

  getUsers() {
    return this.http.get<IUser[]>(this.url);
  }

  createUser(user: IUser) {
    return this.http.post<IUser>(this.url, user);
  }

}
