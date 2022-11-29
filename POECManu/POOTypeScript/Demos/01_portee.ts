//Définit la classe
class Employe {
  private nom: string;
  private prenom: string;
  private salaire: number;

  constructor(nom: string, prenom: string, salaire: number = 1000) {
    this.nom = nom;
    this.prenom = prenom;
    this.salaire = salaire;
  }

  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error(`Le pourcentage doit être positif`);
    } else {
      console.log(
        `le salaire de ${this.prenom} ${this.nom} va être augmenté de ${pourcentage} %. Il est actuellement de ${this.salaire}`
      );
      const augmentation = (this.salaire * pourcentage) / 100;
      console.log(`Il gagnera ${augmentation}€ supplémentaires`);
      this.salaire += augmentation;
      console.log(`le nouveau salaire annuel sera de ${this.salaire}`);
    }
  }
}

/** 
let Employe1: Employe = new Employe();
Employe1.nom="Charles";
Employe1.prenom="Chaplin";
Employe1.salaire = 2000;

Employe1.augmentation(10);
*/