import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserActiveService {

  constructor() { }

  isActive() {
    return !!localStorage.getItem('_token');
  }
}
