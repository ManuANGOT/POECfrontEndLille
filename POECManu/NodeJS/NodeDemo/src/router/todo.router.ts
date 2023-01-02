import TodoController from "../controller/todo.controller";
import express from "express";
import TodoRepository from "../repository/todo.repository";
import TodoService from "../service/todo.service";

const repo = new TodoRepository();
const service = new TodoService(repo);
console.log(repo);
const controller = new TodoController(service);

const router = express.Router()
router.get("/", controller.getAll)
router.get("/:id", controller.getByID)

export default router;