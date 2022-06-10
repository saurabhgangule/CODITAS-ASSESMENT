import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css']
})
export class FirstPartComponent {
  countForTwo = 0;
  @Input('count-for-one') countForOne = 0;
  @Output() detectChange = new EventEmitter();

  changeTwo() {
    // this.countForTwo = Math.random() * 100;
    this.countForTwo = this.countForTwo + 1;
    this.detectChange.emit(this.countForTwo);
  }
}
