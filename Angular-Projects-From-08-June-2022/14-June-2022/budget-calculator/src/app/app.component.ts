import { Component } from '@angular/core';
import { IBudgetItems } from './models/budgetItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  budgetItems: IBudgetItems[] = new Array<IBudgetItems>();
  currentItem: IBudgetItems = new IBudgetItems(0, '');
  openEditModal: boolean = false;
  totalBudget: number = 0;

  title = 'budget calculator';

  itemFormHandler(form: IBudgetItems) {
    this.budgetItems.push(form);
    this.totalBudget += form.amount;
  }

  onItemCardClick(item: IBudgetItems) {
    this.currentItem = item;
    this.openEditModal = true;
  }

  onCloseEditModal(flag: boolean) {
    this.openEditModal = flag;
  }

  onItemDelete(item: IBudgetItems) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  onItemUpdate(item: { updatedItem: IBudgetItems, currentItem: IBudgetItems }) {
    const index = this.budgetItems.indexOf(item.currentItem);
    this.budgetItems.splice(index, 1, item.updatedItem);
    this.totalBudget += (item.updatedItem.amount - item.currentItem.amount);
  }
}
