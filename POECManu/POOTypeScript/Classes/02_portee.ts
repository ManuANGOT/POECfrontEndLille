//Définit la classe
class Employe {
  private _nom: string;
  private _prenom: string;
  private _salaire: number;

  constructor(nom: string, prenom: string, salaire: number = 1000) {
    this._nom = nom;
    this._prenom = prenom;
    this._salaire = salaire;
  }

  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get fullName(): string {
    return `${this._nom} ${this._prenom}`;
  }

  get salaire(): number {
    return this._salaire;
  }

  set nom(nouveauNom: string) {
    if (nouveauNom.trim().length > 1) {
      this._nom = nouveauNom;
    } else {
      throw new Error(`Le nom est trop court`);
    }
  }

  set prenom(nouveauPrenom: string) {
    if (nouveauPrenom.trim().length > 1) {
      this._prenom = nouveauPrenom;
    } else {
      throw new Error(`Le nom est trop court`);
    }
  }

  set salaire(nouveausalaire: number) {
    if (nouveausalaire > this.salaire) {
      this._salaire = nouveausalaire;
    } else {
      throw new Error(`Le salaire est identique ou inférieur au précédent`);
    }
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

  /*
  const employe1: Employe = new Employe("Nareff Paul");
  console.log(employe1.fullName);
  employe1.augmentation(10);
  employe1.nom="Fucked
  console.log(employe1.fullName);
  */
}
