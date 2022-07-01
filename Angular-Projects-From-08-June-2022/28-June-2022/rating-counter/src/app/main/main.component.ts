import { Component, EventEmitter, OnInit } from '@angular/core';
import { IratingData } from '../models/ratingDataInterface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ratingData: IratingData[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ratingDataHandler(ratingData: IratingData) {
    ratingData.totalAvg = +(Object.values(ratingData).slice(0, 4).reduce((sum, all) => sum + (+all), 0) / 4).toFixed(1);
    this.ratingData.push(ratingData);
  }


}
