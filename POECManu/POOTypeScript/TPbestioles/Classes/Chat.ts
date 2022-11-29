import Animal from "../Interfaces/Animal";
import { Terrestre } from "../Interfaces/Terrestre";

class Chat implements Animal {
  nom: string;
  poids: number;
  dateDeNaissance: Date;
  miauler: string;

  constructor(nom: string, poids: number, dateDeNaissance: Date) {
    this.nom = nom;
    this.poids = poids;
    this.dateDeNaissance = dateDeNaissance;
    this.miauler = this.miauler;
  }

  vivre(): string {
    return `Je suis un chat, je m'appelle ${this.nom}, je pése ${this.poids} kilos et je suis né(e), le ${this.dateDeNaissance}`;
  }

  marcher() : string{
    return `Super, j'ai des pattes, je marche !`;
  }
}

export default Chat;
