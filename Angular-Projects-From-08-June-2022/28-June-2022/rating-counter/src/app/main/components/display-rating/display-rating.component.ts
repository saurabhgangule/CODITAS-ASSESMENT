import { Component, Input, OnInit } from '@angular/core';
import { IratingData } from 'src/app/models/ratingDataInterface';

@Component({
  selector: 'app-display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.css']
})
export class DisplayRatingComponent implements OnInit {
  @Input() ratingData!: IratingData[];

  constructor() { }

  ngOnInit(): void {
  }

  getAverage(key: "ambience" | "cleanliness" | "service" | "food" | "totalAvg") {
    return (this.ratingData.reduce((sum, rating) => sum + (+rating[key]), 0)) / this.ratingData.length;
  }

}
