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

  get nom() : string{
    return this._nom
  }
  get age() : number{
    return this._age
  }
  get poids() : number{
    return this._poids
  }
  get race() : string{
    return this._race
  }

  set nom (nouveauNom: string){
    if(nouveauNom.length>1){
        this._nom = nouveauNom;
    }
    else {
        throw new Error(`Incorrect`);
    }
  }
}

/**   afficherChat(): void {
      console.log(`Ce chat s'appele ${this.nom} \r\n il est de race ${this.race} \r\n il a ${this.age} \r\n et pése ${this.poids} kilos.
     `);
    }
  }
  
  const Chat1: Chat = new Chat();
  Chat1.nom = "Apreupré";
  Chat1.age = 3;
  Chat1.poids = 5;
  
  Chat1.afficherChat();*/
