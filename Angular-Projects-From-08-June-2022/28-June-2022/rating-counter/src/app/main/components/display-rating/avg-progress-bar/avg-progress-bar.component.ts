import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avg-progress-bar',
  templateUrl: './avg-progress-bar.component.html',
  styleUrls: ['./avg-progress-bar.component.css']
})
export class AvgProgressBarComponent implements OnInit {
  @Input() average: number = 0;

  constructor() { }
  ngOnInit(): void {
  }

  getStyle() {
    return {
      'width': `${this.average * 20 || 0}%`
    }
  }

}
