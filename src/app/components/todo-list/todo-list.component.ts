import { Component, Input } from '@angular/core';
import { TodoStatus } from 'src/app/models/enums/todo-status';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos!: Todo[];
}
