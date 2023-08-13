import { TodoStatus } from "./enums/todo-status";

export class Todo {
    title: String = "";
    description: String = "";
    status: TodoStatus = TodoStatus.TODO;

    constructor(
        title: String,
        description: String,
        status: TodoStatus
    ){
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
