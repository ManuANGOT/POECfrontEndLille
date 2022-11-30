import Terrestre from '../Interfaces/Terrestre';
import Mammifere from '../Classes/Mammifere';

export default class Chat extends Mammifere implements Terrestre {
  private _couleurs: string[];
  constructor(
    nom: string,
    poids: number,
    dateNaissance: Date,
    ...couleurs: string[]
  ) {
    super(nom, poids, dateNaissance);
    this._couleurs = couleurs;
  }

  get couleurs(): string[] {
    return this._couleurs;
  }

  set couleurs(couleurs: string[]) {
    this._couleurs = couleurs;
  }
/**
 * Méthode pour ajouter couleur avec forEach() et push()
 * @param couleurs 
 * 
 */

  ajouterCouleur(...couleurs: string[]) {
    couleurs.forEach((couleur) => {
      this._couleurs.push(couleur);
    });
  }

/**
 * Méthode pour supprimer couleur avec filter()
 * @param couleurASupprimer 
 */
  supprimerCouleur(couleurASupprimer: string): void {
    if (this.couleurs.includes(couleurASupprimer)) {
      this._couleurs = this._couleurs.filter((couleur) => {
        return couleur !== couleurASupprimer;
      });
    } else {
      console.log("Cette couleur n'existe pas !");
    }
  }

  marcher(): void {
    console.log(`Le Chat ${this._nom} marche !`);
  }

  respirerHorsDeLeau(): void {
    console.log(`Le Chat ${this._nom} respire !`);
  }

  miauler(): void {
    console.log(`Le Chat ${this._nom} miaule !`);
  }

  display(): void {
    console.log(
      `Le Chat ${this._nom} a ${this._dateNaissance} an(s) et pèse ${this._poids} kg, ses couleurs sont ${this.couleurs}!`
    );
  }
}