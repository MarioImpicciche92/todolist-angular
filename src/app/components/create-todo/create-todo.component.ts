import { formatPercent } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoStatus } from 'src/app/models/enums/todo-status';
import { TodoModel } from 'src/app/models/todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  @Output() addedTodo = new EventEmitter<TodoModel>();

  TodoStatus = TodoStatus;
  createTodoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.createTodoForm = this.fb.group({
      title : new FormControl(""),
      description : new FormControl(""),
      status : new FormControl(TodoStatus.TODO),
    });

  }

  addTodo(): void {
    if(this.createTodoForm.valid){
      this.addedTodo.emit(this.createTodoForm.value);
    }
  }
}
