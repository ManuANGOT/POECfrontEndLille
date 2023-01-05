export default class TodoPersistance{
    id! : number
    task : string
    completed : boolean

    constructor(...data:any[]){
const [obj] = data
for (let key in obj){
    this[key] = obj[key]
}

        this.task = task
        this.completed = false
        
    }
}