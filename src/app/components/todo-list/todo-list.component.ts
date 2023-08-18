import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoModel } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todosInput!:TodoModel[];
  @Output() deleteTodo = new EventEmitter<TodoModel>;
  @Output() updateTodo = new EventEmitter<TodoModel>;

  deleteTodoFromList($event: TodoModel): void {
    this.deleteTodo.emit($event);
  }

  updateTodoFromList($event: TodoModel): void {
    this.updateTodo.emit($event);
  }
}
