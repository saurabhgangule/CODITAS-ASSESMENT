import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-budget-display',
  templateUrl: './total-budget-display.component.html',
  styleUrls: ['./total-budget-display.component.css']
})
export class TotalBudgetDisplayComponent implements OnInit {
  @Input() totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
