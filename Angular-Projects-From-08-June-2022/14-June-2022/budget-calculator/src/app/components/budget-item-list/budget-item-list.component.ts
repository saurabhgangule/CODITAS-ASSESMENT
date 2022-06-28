import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBudgetItems } from 'src/app/models/budgetItem';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  constructor() { }
  @Input() budgetItems?: IBudgetItems[];
  @Output() onItemCardClickEmit = new EventEmitter<IBudgetItems>();
  @Output() onItemDeleteClickEmit = new EventEmitter<IBudgetItems>();

  ngOnInit(): void {
  }

  onItemCardClick(item: IBudgetItems) {
    this.onItemCardClickEmit.emit(item);
  }

  handleBudgetItemDelete(item: IBudgetItems) {
    this.onItemDeleteClickEmit.emit(item);
  }

}
