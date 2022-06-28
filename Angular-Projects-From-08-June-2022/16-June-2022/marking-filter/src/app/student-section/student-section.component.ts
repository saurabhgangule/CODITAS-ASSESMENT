import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEData } from '../models/emit';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {
  @Input('studentData') currentStudent!: Istudent;
  newStudent!: Istudent;
  @Input('id') fromId!: number;
  toId!: number;
  @Output() detectChange = new EventEmitter();
  emitStructure!: IEData;
  constructor() { }

  ngOnInit(): void {
    this.newStudent = this.currentStudent;
  }

  updateStudentMarks(inputEvent: Event) {
    this.newStudent.marks = +((inputEvent.target as HTMLInputElement).value);
    this.toId = (this.newStudent.marks >= 70 && this.newStudent.marks <= 100) ? 1 : (this.newStudent.marks < 70 && this.newStudent.marks >= 50) ? 2 : 3;
    this.emitStructure = { currentStudent: this.currentStudent, fromId: this.fromId, toId: this.toId, newStudent: this.newStudent }
    this.detectChange.emit(this.emitStructure);
  }

}