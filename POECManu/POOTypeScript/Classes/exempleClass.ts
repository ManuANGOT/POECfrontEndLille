/**
 * class Formateur {
  nom!: string;
  prenom!: string;
}

let formateur1: Formateur = new Formateur();
formateur1.nom = "Bitos";
formateur1.prenom = "Super";

console.log(`${formateur1.prenom} ${formateur1.nom}`);


 * Définition d'une classe employé
 *  */
class Employe {
  // Les attriburs de ma classe
  // Le "!" permet de préciser qu'on définira la valeur plus tard.
  nom!: string;
  prenom!: string;
  salaire!: number;

  /**
   * Permet d'augmenter le salaire d'un salarié
   * @param pourcentage pourcentage de l'augmentation
   *  */

  augmentation(pourcentage: number): void {
    if (pourcentage < 0) {
      throw new Error(`Le proucentage doit être positif`);
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

const Employe1: Employe = new Employe();
Employe1.nom = "Apreupré";
Employe1.prenom = "Jean-Michel";
Employe1.salaire = 1000;

Employe1.augmentation(10);
