import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todoInput!:TodoModel;
  @Output() todoDeleted = new EventEmitter<TodoModel>();

  @Output() todoUpdate = new EventEmitter<TodoModel>();

  deleteTodo(): void {
    this.todoDeleted.emit(this.todoInput);
  }

  update(): void {
    this.todoUpdate.emit(this.todoInput);
  }
}
