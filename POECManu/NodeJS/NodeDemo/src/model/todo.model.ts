// Définition du model de données

export default class TodoModel {
// équivaut au DTO (Data Transfert Object)
    id : number
    task : string
    completed : boolean
    static count = 1;
    
    constructor( task: string) {
        this.id = TodoModel.count;
        this.task= task
        this.completed= false
        TodoModel.count ++
        

    }

}