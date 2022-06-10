import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.css']
})
export class SecondPartComponent {
  countForOne = 0;
  @Input('count-for-two') countForThis = 0;
  @Output() detectChange = new EventEmitter();

  changeOne() {
    // this.countForOne = Math.random() * 100;
    this.countForOne = this.countForOne + 1;
    this.detectChange.emit(this.countForOne);
  }
}
