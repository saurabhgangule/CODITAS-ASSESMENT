import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ileave } from '../models/leave';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  @Input() leaveData!: Ileave;
  @Input() leavesTypes!: string[];
  @Output() changePositionEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changePosition(from: string, to: string, date: string) {
    this.changePositionEvent.emit({ from, to, date });
  }

}
