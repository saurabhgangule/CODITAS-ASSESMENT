import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IEData } from '../models/emit';
import { IstudentStructure } from '../models/structure';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  studentData!: IstudentStructure[];
  name!: string;

  constructor(public dataSevice: DataService) {
  }

  async ngOnInit(): Promise<void> {
    this.studentData = await this.dataSevice.getStudentList();
  }

  detectChange(data: IEData) {
    this.studentData.forEach(each => {
      if (each.id === data.fromId && each.id !== data.toId) {
        each.students.splice(each.students.indexOf(data.currentStudent), 1);
      }
      if (each.id === data.toId && each.id !== data.fromId) {
        each.students.push(data.newStudent);
      }
    })
  }
}
