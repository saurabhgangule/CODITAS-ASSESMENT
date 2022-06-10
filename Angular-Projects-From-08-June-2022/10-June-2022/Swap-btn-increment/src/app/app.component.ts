import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countForTwo = 0;
  countForOne = 0;

  getFirstValue(value: number) {
    this.countForTwo = value;
  }

  getSecondValue(value: number) {
    this.countForOne = value;
  }
}
