import TodoModel from "../model/todo.model";
import TodoService from "../service/todo.service";
import {Response, Request } from "express";


export default class TodoController {
    service : TodoService

    constructor(service : TodoService){
        this.service = service
    }

    getAll = (req: Request, res:Response): void => {
        res.send(this.service.getAll())
    }

    getByID= (req: Request, res:Response): void => {
        const id = req.params.id
        res.send(this.service.todoByID(+id))
    }


   
}