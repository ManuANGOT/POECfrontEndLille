import TodoPersistance from "../model/todo.model.persistance";
import TodoRepositoryPersistance from "../repository/todo.repository.persistance";

export default class TodoServicePersistance {

    #repo : TodoRepositoryPersistance

    constructor(repo: TodoRepositoryPersistance) {
        this.#repo = repo
    }

    getAll = (): Promise<TodoPersistance[]> => {
        return this.#repo.getAll()
    }

    getById = (id: number): Promise<TodoPersistance> => {
        return this.#repo.getById(id)
    }

    deleteById = (id: number): Promise<any> => {
        return this.#repo.delete(id)
    }
}
