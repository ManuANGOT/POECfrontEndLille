import express, {Request, Response} from "express";
import TodoModel from "./model/todo.model";

// instance de express
const app = express();
// instance du router de  express
const router = express.Router();

// route définie sur test
router.get("/test", (req: Request, res: Response) => {
    res.send("Page de test")
})

// appel du router
app.use(router);


// Route définie sur la page par défaut
app.get("/", (req: Request, res: Response) => {

    new TodoModel()
    new TodoModel()
    new TodoModel()
    
    res.send("ok, c'est tout bon")
})

// Définition du port pour le server
app.listen(3000, () => {
    console.log(`serveur lancé sur le port 3000`)
})