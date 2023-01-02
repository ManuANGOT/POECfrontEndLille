import TodoModel from "../model/todo.model";


export default class TodoRepository{
    private todos: TodoModel [] = [
        new TodoModel("Decuver"),
        new TodoModel("Aller bosser"),
        new TodoModel("Se reveiller")
    ]

    getAll = () :TodoModel[] => {
        return this.todos;
    }
}