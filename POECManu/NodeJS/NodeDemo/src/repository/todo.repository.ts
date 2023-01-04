import TodoModel from "../model/todo.model";

export default class TodoRepository {
  private todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Aller bosser"),
    new TodoModel("Se reveiller"),
  ];

  getAll = (): TodoModel[] => {
    return this.todos;
  };

  deleteById = (id: number): void => {
    this.todos = this.todos.filter((item) => item.id != id);
  };

  createTodo = (item: TodoModel): void => {
    this.todos.push(item);
  };

  update = (item: TodoModel, index:number): void => {
    this.todos[index] = item

  };
}
