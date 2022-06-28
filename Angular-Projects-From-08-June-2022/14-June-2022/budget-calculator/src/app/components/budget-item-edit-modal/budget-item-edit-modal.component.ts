import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBudgetItems } from 'src/app/models/budgetItem';

@Component({
  selector: 'app-budget-item-edit-modal',
  templateUrl: './budget-item-edit-modal.component.html',
  styleUrls: ['./budget-item-edit-modal.component.css']
})
export class BudgetItemEditModalComponent implements OnInit {

  @Input() openEditModal: boolean = false;
  @Input() item: IBudgetItems = new IBudgetItems(0, '');
  @Output() closeEditModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() itemUpdate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEditModal.emit(!this.openEditModal);
  }

  itemUpdateFormHandler(updatedItem: IBudgetItems) {
    this.itemUpdate.emit({ updatedItem: updatedItem, currentItem: this.item });
    this.closeModal();
  }

}
