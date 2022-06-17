import { Component, OnInit } from '@angular/core';
import { Istudent } from '../models/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  studentData!: Istudent[];
  studentDataMeritOne!: Istudent[];
  studentDataMeritTwo!: Istudent[];
  studentDataMeritThree!: Istudent[];
  name!: string;
  marks!: number;

  private filterData(min: number, max: number) {
    return this.studentData.filter(student => student.marks >= min && student.marks < max);
  }

  constructor(public dataSevice: DataService) {
  }

  async ngOnInit(): Promise<void> {
    this.studentData = await this.dataSevice.getStudentList();
    this.studentDataMeritOne = this.filterData(70, 100);
    this.studentDataMeritTwo = this.filterData(50, 70);
    this.studentDataMeritThree = this.filterData(0, 50);
  }

  detectChange(event: Istudent[]) {
    this.studentData = event;
  }
}

