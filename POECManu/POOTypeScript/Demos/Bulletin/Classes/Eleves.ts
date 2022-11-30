import Bulletin from "./Bulletin";
import Note from "./Notes";

export default class Eleve {
  private _nom: string;
  private _prenom: string;
  private _bulletin: Bulletin;

  constructor(nom: string, prenom: string, bulletin: Bulletin) {
    this._nom = nom;
    this._prenom = prenom;
    this._bulletin = bulletin;
  }
/**
 * Ajoute une oudes nouvelles notes au bulletin
 * @param nouvellesNotes la liste des notes à ajouter
 * 
 */
  public ajouterNotes(...nouvellesNotes: Note[]): void {
    nouvellesNotes.forEach(
        (note) => {
      this._bulletin.ajouterNote(note);
    });
  }
}
