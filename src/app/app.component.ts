import { Component } from '@angular/core';
import { TodoStatus } from './models/enums/todo-status';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    {
      title: "Test title",
      description: "Description test",
      status: TodoStatus.TODO,
    }
  ];
  addTodoToList($event: Todo): void {
    this.todos.push($event);
  }
}
