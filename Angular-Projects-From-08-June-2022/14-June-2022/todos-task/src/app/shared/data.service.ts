import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[] = [];
  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  addToTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
