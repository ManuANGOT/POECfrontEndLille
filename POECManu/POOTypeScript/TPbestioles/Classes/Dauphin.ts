import Animal from "../Interfaces/Animal";
import { Aquatique } from "../Interfaces/Aquatique";

class Dauphin implements Animal {
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
    return `Je suis un Dauphin, je m'appelle ${this.nom}, je pése ${this.poids} kilos et je suis né(e), le ${this.dateDeNaissance}`;
  }
  nager () : string {
    return `Super, j'ai des nageoires, je nage !!!`;
  }}

export default Dauphin;
