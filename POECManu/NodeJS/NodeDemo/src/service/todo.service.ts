import TodoModel from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";

export default class TodoService {
  repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  getAll = (): TodoModel[] => {
    return this.repo.getAll();
  };

  todoByID(id: number) {
    let result;
    this.repo.getAll().forEach(function (todos) {
      console.log(todos);
      if (todos.id == id) {
        result = todos;
      }
    });
    if (!result) throw "Cet id n'existe pas dans la liste";
    return result;
  }
}
