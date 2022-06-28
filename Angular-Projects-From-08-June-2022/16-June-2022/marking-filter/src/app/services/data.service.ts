import { Injectable } from '@angular/core';
import { backendStudentList } from '../mock/backend';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  async getStudentList() {

    const studentList = await backendStudentList();
    return studentList;

  }
}
