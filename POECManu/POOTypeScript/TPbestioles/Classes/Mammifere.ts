import Animal from "../Interfaces/Animal";


class Mammifere implements Animal {
    nom: string;
    poids: number;
    dateDeNaissance: Date;
  
    constructor(nom:string, poids : number, dateDeNaissance : Date){
      this.nom=nom;
      this.poids=poids;
      this.dateDeNaissance=dateDeNaissance;
    }
 

    vivre() : string{
        return `Je suis une bestiole, je m'appelle ${this.nom}, je pése ${this.poids} kilos et je suis né(e), le ${this.dateDeNaissance}`;
    }

  }

  export default Mammifere;