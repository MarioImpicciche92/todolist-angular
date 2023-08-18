import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoStatus } from 'src/app/models/enums/todo-status';
import { TodoModel } from 'src/app/models/todo';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss']
})
export class ModalUpdateComponent {
  @Input() todo!: TodoModel;
  @Output() saveTodo = new EventEmitter<TodoModel>();

  updateTodoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.updateTodoForm = this.fb.group({
      title : new FormControl(""),
      description : new FormControl(""),
      status : new FormControl(""),
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["todo"]) {
      const newInputData = changes["todo"].currentValue;

      // Update form control values based on newInputData
      this.updateTodoForm.setValue({
        title: newInputData.title,
        description: newInputData.description,
        status: newInputData.status,
      });
    }
  }

  save(): void {
    const tmpTodo = new TodoModel(
      this.updateTodoForm.controls["title"].value,
      this.updateTodoForm.controls["description"].value,
      this.updateTodoForm.controls["status"].value,
    );

    tmpTodo.id = this.todo.id;


    this.saveTodo.emit(tmpTodo);
  }


}


