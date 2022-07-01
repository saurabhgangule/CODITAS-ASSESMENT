import { Injectable } from '@angular/core';
import { levelsData } from '../backend/backend';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  async getCourseLevels() {
    const levels = await levelsData();
    return levels;
  }

}
