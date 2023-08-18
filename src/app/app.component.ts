import { Component } from '@angular/core';
import { TodoStatus } from './models/enums/todo-status';
import { TodoModel } from './models/todo';
import { v4 as uuidv4 } from "uuid";

import { Modal } from "bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos:TodoModel[] = [];

  todoToUpdate!:TodoModel;
  

  addTodoToList($event: TodoModel): void {
    const newTodo = {...$event, id: uuidv4()}
    this.todos.push(newTodo);
  }

  deleteTodoForReal($event: TodoModel): void {
    this.todos = this.todos.filter(todo => todo.id != $event.id);
  }

  updateTodoForReal($event: TodoModel): void{
    this.todoToUpdate = $event;
    
    const myModal = new Modal('#updateTodoModal', {
      focus: false
    });

    myModal.show();
  }

  saveTodoInList($event: TodoModel): void {
    this.todos = this.todos.filter(todo => todo.id != $event.id);
    this.todos.push($event);
  }
}
