import { IPatch, TodoModel } from "../model/todo.model";
import TodoRepository from "../repository/todo.repository";
// C'est à partir du fichier Service qu'on va effectuer nos tests unitaires

export default class TodoService {
  repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  getAll = (): TodoModel[] => {
    return this.repo.getAll();
  };

  getById1 = (id: number): TodoModel => {
    const resu = this.repo.getAll().find((item) => item.id == id);
    if (!resu) throw "Cet id n'existe pas dans la liste";
    return resu;
  };

  // filter renvoie toutes les occurences qui marchent avec la condition
  getById2 = (id: number): TodoModel => {
    const resu = this.repo.getAll().filter((item) => item.id == id)[0];
    if (!resu) throw "id non trouvé";
    return resu;
  };

  deleteById = (id: number): void => {
    this.repo.deleteById(id);
  };

  /*
  deleteById2 = (id: number) => {
    const index = this.getAll().findIndex((item) => item.id == id);
    this.repo.deleteById2(index)
  };
  */

  createTodo = (task: string): TodoModel => {
    if (!task) throw "il manque un paramètre";
    const newTodo = new TodoModel(task);
    this.repo.createTodo(newTodo);
    return newTodo;
  };

  updateTodo = (item: TodoModel, id: number): TodoModel => {
    if (item.id != id) throw "to do incorrecte";
    const exist = this.getAll().find((data) => data.id == item.id);
    if (!exist) {
      const todo = new TodoModel(item.task, item.completed);
      this.repo.createTodo(todo);
      return todo;
    } else {
      const todo = new TodoModel(item);
      const index = this.getAll().findIndex((item) => item.id == todo.id);
      this.repo.update(todo, index);
      return todo;
    }
  };

  patch = (id: number, item: Partial<IPatch>): TodoModel => {
    const index = this.getAll().findIndex((data) => data.id == id);

    if (!index) throw "id inexistante";

    const data = this.repo.patch(index, item);
    return data;
  };
}
