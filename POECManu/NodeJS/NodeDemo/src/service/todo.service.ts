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

 getById1 = (id : number):TodoModel => {
  const resu = this.repo.getAll().find(item => item.id == id)
  if (!resu) throw "id non trouvé"
  return resu
 }

 getById2 = (id : number):TodoModel => {
  const resu = this.repo.getAll().filter(item => item.id == id)[0]
  if (!resu) throw "id non trouvé"
  return resu
 }

 

deleteById = (id : number) =>{
   
    const idDeleted = this.repo.getAll().find(item => item.id == id);
   if (!idDeleted) throw "id non trouvé"
   return idDeleted
}

 
}


