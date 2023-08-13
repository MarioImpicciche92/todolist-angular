import { formatPercent } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoStatus } from 'src/app/models/enums/todo-status';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  @Output() addedTodo = new EventEmitter<Todo>();

  TodoStatus = TodoStatus;
  createTodo: FormGroup;

  constructor(private fb: FormBuilder){
    this.createTodo = this.fb.group({
      title : new FormControl(""),
      description : new FormControl(""),
      status : new FormControl(TodoStatus.TODO),
    });

  }

  addTodo(): void {
    if(this.createTodo.valid){
      this.addedTodo.emit(this.createTodo.value);
    }
  }
}
