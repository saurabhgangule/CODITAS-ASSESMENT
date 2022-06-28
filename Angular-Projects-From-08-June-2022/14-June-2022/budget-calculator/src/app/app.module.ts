import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalBudgetDisplayComponent } from './components/total-budget-display/total-budget-display.component';
import { BudgetInputItemComponent } from './components/budget-input-item/budget-input-item.component';
import { BudgetItemListComponent } from './components/budget-item-list/budget-item-list.component';
import { BudgetItemEditModalComponent } from './components/budget-item-edit-modal/budget-item-edit-modal.component';
import { BudgetItemCardComponent } from './components/budget-item-list/budget-item-card/budget-item-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TotalBudgetDisplayComponent,
    BudgetInputItemComponent,
    BudgetItemListComponent,
    BudgetItemEditModalComponent,
    BudgetItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
