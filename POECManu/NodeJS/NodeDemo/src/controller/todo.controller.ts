import TodoModel from "../model/todo.model";
import TodoService from "../service/todo.service";
import { Response, Request } from "express";

export default class TodoController {
  service: TodoService;

  constructor(service: TodoService) {
    this.service = service;
  }

  getAll = (req: Request, res: Response): void => {
    res.send(this.service.getAll());
  };

  getByID = (req: Request, res: Response): void => {
    const id = req.params.id;
    const data = this.service.getById1(+id);
    res.send(data);
  };

  deleteById = (req: Request, res: Response): void => {
    const id = req.params.id;
    this.service.deleteById(+id);
    res.sendStatus(200);
  };

  /**
   * deleteById2 = (req : Request, res : Response):void => {
   *
   *
   * }
   */

  create = (req: Request, res: Response) => {
    const task = req.body.task;
    const todo = this.service.createTodo(task);
    res.send(todo);
  };

  /**
   * Si l'id n'existe pas, je crée l'objet
   * l'id dans l'url doit correspondre à l'id du boby
   * si les id sont identiques, je modifie l'objet (on ne touche pas à l'id)
   */

  update = (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const data = new TodoModel(req.body);
    this.service.updateTodo(body, +id);
    res.send(data);
  };
}
