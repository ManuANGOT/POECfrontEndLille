import Bulletin from "./Classes/Bulletin";
import Eleve from "./Classes/Eleves";
import Note from "./Classes/Notes";

const eleve: Eleve = new Eleve("Cover", "Harry", new Bulletin());
/**
 * ou
 * const bulletin : Bulletin = new Bulletin
 * const eleve: Eleve = new Eleve("Cover", "Harry", Bulletin)
 */

const note1: Note = new Note(`POO`, 20);
const note2: Note = new Note(`TS`, 15);
const note3: Note = new Note(`JS`, 5);
const note4: Note = new Note(`UML`, 0);
const note5: Note = new Note(`PHP`, 0);

eleve.ajouterNotes(note1, note2, note3, note4, note5);

eleve.afficherNotes();
eleve.afficherMoyenne();
