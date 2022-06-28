import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBudgetItems } from 'src/app/models/budgetItem';

@Component({
  selector: 'app-budget-input-item',
  templateUrl: './budget-input-item.component.html',
  styleUrls: ['./budget-input-item.component.css']
})
export class BudgetInputItemComponent implements OnInit {

  @Input() item: IBudgetItems = new IBudgetItems(0, '');
  @Output() itemForm: EventEmitter<IBudgetItems> = new EventEmitter<IBudgetItems>();
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitHandler(form: NgForm) {
    this.itemForm.emit(form.value);
    form.reset();
  }

}
