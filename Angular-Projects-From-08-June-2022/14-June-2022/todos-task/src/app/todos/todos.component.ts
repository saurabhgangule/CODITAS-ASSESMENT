import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  todoText?: String;
  display?: string;
  currentTodo?: Todo;
  showValidationErrors!: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  updateTodo(todo: Todo) {
    this.display = 'block';
    this.currentTodo = todo;
    this.todoText = todo.text;
  }

  onCloseHandled() {
    this.display = 'none';
  }
  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
    } else {
      this.dataService.addToTodo(new Todo(form.value.todoText));
      this.showValidationErrors = false;
      form.reset();
    }
  }

  replaceTodo(data: NgForm) {
    this.dataService.updateTodo(this.todos.indexOf(data.value.currentTodo), new Todo(data.value.updatedTodoText))
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    const _index = this.todos.indexOf(todo);
    this.dataService.removeTodo(_index);
  }
}
