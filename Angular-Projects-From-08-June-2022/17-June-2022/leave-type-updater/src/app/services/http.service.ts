import { Injectable } from '@angular/core';
import { leaveData } from '../mock/data'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  async getLeavesData() {

    const leaveList = await leaveData();
    return leaveList;
  }
}
