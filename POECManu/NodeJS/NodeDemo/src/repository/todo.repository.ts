import { Request, Response } from "express";
import {IPatch,TodoModel} from "../model/todo.model";
import TodoService from "../service/todo.service";

export default class TodoRepository {
  private todos: TodoModel[] = [
    new TodoModel("Decuver"),
    new TodoModel("Aller bosser"),
    new TodoModel("Se reveiller"),
  ];
  /**
   * Fake API pour tester notre appli
   * installation Base de donnée de simulation json
   * npm install -g json-server
   * 
   * Mettre notre programme à l'écoute du fichier
   * json-server --watch db.json
   */

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

  patch = (index:number, item: Partial<IPatch>): TodoModel => {
    this.todos[index].patch(item)
    return this.todos[index]
  }
 }
