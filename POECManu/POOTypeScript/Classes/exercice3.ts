class Chat {
  private _nom: string;
  private _age: number;
  private _poids: number;
  private _race: string;

  constructor(nom: string, age: number, poids: number, race: string) {
    this._nom = nom;
    this._age = age;
    this._poids = poids;
    this._race = race;
  }

  public get nom(): string {
    return this._nom;
  }
  public get age(): number {
    return this._age;
  }
  public get poids(): number {
    return this._poids;
  }
  public get race(): string {
    return this._race;
  }
}
/** 
  public set nom(nouveauNom: string) {
    return (this._nom = nouveauNom);
  }
  public set age(nouvelAge: number) {
    return (this._age = nouvelAge);
  }
  public set poids(nouveauPoids: number) {
    return (this._poids = nouveauPoids);
  }
  public set race(nouvelleRace: string) {
    return (this._race = nouvelleRace);
  }
}

  afficherChat(): void {
      console.log(`Ce chat s'appele ${this.nom} \r\n il est de race ${this.race} \r\n il a ${this.age} \r\n et pése ${this.poids} kilos.
     `);
    }
  }
  
  const Chat1: Chat = new Chat();
  Chat1.nom = "Apreupré";
  Chat1.age = 3;
  Chat1.poids = 5;
  
  Chat1.afficherChat();
  */
