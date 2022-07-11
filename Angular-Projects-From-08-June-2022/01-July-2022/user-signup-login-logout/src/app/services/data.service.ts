import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      products: [
        {
          id: 1,
          name: 'saurabh gangule',
          email: 'saurabh@gmail.com',
          password: 'saurabh'
        },
        {
          id: 2,
          name: 'sai h',
          email: 'sai@gmail.com',
          password: 'sai'
        },
        {
          id: 3,
          name: 'anil g',
          email: 'anil@gmail.com',
          price: 'anil'
        }
      ]
    };
  }
}
