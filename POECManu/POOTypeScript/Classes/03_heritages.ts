abstract class Collaborateur {
  protected _nom: string;
  protected _prenom: string;

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this._prenom = prenom;
  }
  abstract travailler(): string;
}
class Salarie extends Collaborateur {
  private _salaire: number;

  constructor(nom: String, prenom: string, salaire: Number) {}

  travailler(): string {
    return `${this._prenom} ${this._nom} travaille comme un fou car il veut un `;
  }

  class Stagiaire extends Collaborateur {
    private _finContrat : Date
    constructor(nom : string, prenom : string, finContrat : date) {
        super(nom, prenom)
        this._finContrat = finContrat
        
    }

    get fin(): string {
        return this._finContrat.toLocaleDateString();
  }

  prolonger(jours :number):void {
    this._finContrat.setDate(this._finContrat.getDate() + jours)
    console.log(`La adate de fin de contrat a été prolongée jusqu'à ${this._finContrat} `)
  }
  travailler():string{
    return `${}`
  }
}
