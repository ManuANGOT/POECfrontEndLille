import Note from "./Notes";

export default class Bulletin {
  private _notes: Note[] = [];
// private _notes: Note[] = [];  Signifie que le bulletin peut retourner un tableau vide.


  /**
   * Ajoute une nouvelle note au carnet de notes
   * @param nouvelleNote La nouvelle note à ajouter au tableau de notes
   */
  public ajouterNote(nouvelleNote: Note) {
    if (nouvelleNote.valeur > 20 || nouvelleNote.valeur < 0) {
      throw new Error("La note est incorrecte !!!");
    } else {
      this._notes.push(nouvelleNote);
    }
  }

  /**
   * Calcule la moyenne générale à partir des notes du bulletin
   * @returns Moyenne
   */
  public calculerMoyenne(): string {
    let somme: number = 0;
    this._notes.forEach((note) => {
      somme += note.valeur;
    });
    return (somme / this._notes.length).toFixed(2);
  }

  /**
   * Affiche toutes les notes
   */
  public afficherNotes(): void {
    this._notes.forEach((note) => {
      note.afficherNote();
    });
  }
}
