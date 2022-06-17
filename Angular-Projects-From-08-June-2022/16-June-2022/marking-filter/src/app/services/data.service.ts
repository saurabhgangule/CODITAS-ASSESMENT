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

  async getFilteredStudent(min: number = 0, max: number = 0) {
    const studentList = await backendStudentList();
    return studentList.filter(student => student.marks >= min && student.marks < max);
  }

}
