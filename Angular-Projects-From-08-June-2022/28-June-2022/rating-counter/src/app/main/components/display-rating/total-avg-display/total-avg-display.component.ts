import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-avg-display',
  templateUrl: './total-avg-display.component.html',
  styleUrls: ['./total-avg-display.component.css']
})
export class TotalAvgDisplayComponent implements OnInit {
  @Input() totalAvg: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
