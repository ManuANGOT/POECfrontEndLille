import Note from "./Notes";

export default class Bulletin {
  private _notes: Note[];

  /**
   * Ajoute une nouvelle note au carner de notes
   * @param nouvelleNote Note à ajouter
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
