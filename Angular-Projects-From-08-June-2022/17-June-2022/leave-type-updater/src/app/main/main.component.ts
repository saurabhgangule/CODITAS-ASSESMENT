import { Component, OnInit } from '@angular/core';
import { Ileave } from '../models/leave';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  leavesData!: Ileave[];
  leavesTypes!: string[];
  constructor(private httpService: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.leavesData = await this.httpService.getLeavesData();
    this.leavesTypes = this.leavesData.map(each => each.type);
  }

  changePosition({ from = 'planned', to = 'unplanned', date = '10-Nov-2022' }) {
    this.leavesData.forEach(each => {
      if (each.type === from) {
        each.dates.splice(each.dates.indexOf(date), 1);
      }
      if (each.type === to) {
        each.dates.push(date);
      }
    })
  }

}
