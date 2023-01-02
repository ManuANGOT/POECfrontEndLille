import express, {Request, Response} from "express";
import router from "./router/todo.router";
import "dotenv/config"

// instance de express
const app = express();
const port = process.env.PORT
// instance du router de  express

app.use("/todo",router);


// Définition du port pour le server
app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}`)
})