import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() currentTodo?: Todo;
  @Input() display?: String;
  @Input() currentText?: String;
  @Output() closeModal = new EventEmitter();
  @Output() sendUpdatedData = new EventEmitter();
  @Input() todo?: Todo;
  showValidationErrors?: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseHandled() {
    this.closeModal.emit();
  }

  onUpdate(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
    } else {
      this.sendUpdatedData.emit(form);
      this.showValidationErrors = false;
      form.reset();
      this.closeModal.emit();
    }
  }
}
