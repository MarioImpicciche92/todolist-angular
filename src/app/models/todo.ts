import { TodoStatus } from "./enums/todo-status";
import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
    id?: String = "";
    title: String = "";
    description: String = "";
    status: TodoStatus = TodoStatus.TODO;

    constructor(
        title: String,
        description: String,
        status: TodoStatus
    ){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
