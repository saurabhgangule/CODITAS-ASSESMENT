import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBudgetItems } from 'src/app/models/budgetItem';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item!: IBudgetItems;
  @Input() isIncome: boolean = false;
  @Output() budgetItemDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBudgetItemDelete(nullvoid: void) {
    this.budgetItemDelete.emit();
  }

}
