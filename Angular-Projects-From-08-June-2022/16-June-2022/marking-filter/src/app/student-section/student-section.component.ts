import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {
  @Input() studentData!: Istudent[]
  @Output() detectChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updateStudentMarks(inputEvent: Event, currentStudent: Istudent) {
    // console.log((input.currentTarget as HTMLInputElement).value, currentStudent)
    this.studentData.forEach(student => {
      if (currentStudent.name === student.name) {
        student.marks = +(inputEvent.currentTarget as HTMLInputElement).value;
        this.detectChange.emit(this.studentData);
      }
    })
  }

}
