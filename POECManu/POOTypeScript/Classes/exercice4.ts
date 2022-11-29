abstract class Chat {
    protected _nom: string;
    protected _age: number;
    protected _poids: number;
  
    constructor(nom: string, age: number, poids: number) {
      this._nom = nom;
      this._age = age;
      this._poids = poids;
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
  
    public set nom(nom: string) {
      this._nom = nom;
    }
  
    public set age(age: number) {
      this._age = age;
    }
  
    public set poids(poids: number) {
      this._poids = poids;
    }
  
    public afficherChat() {
      console.log(
        `Voici mon chat, il s'appelle ${this.nom}, il a ${this.age} an(s) et pèse ${this.poids} kg ! `
      );
    }
  }
  
  class Europeen extends Chat {
    _surnoms: string[];
    _origine: string = 'Europe';
  
    constructor(nom: string, age: number, poids: number, ...surnoms: string[]) {
      super(nom, age, poids);
      this._surnoms = surnoms;
    }
  
    get surnoms(): string[] {
      return this._surnoms;
    }
  
    set surnoms(surnoms: string[]) {
      surnoms.forEach((surnom) => {
        this._surnoms.push(surnom);
      });
    }
  }
  
  const chat: Europeen = new Europeen('Bébou 4', 0.5, 5, 'Bidule', 'TrucQuiPue');
  
  chat.afficherChat();
  chat.surnoms = ['Kiki', 'Chaton'];
  console.log(chat.surnoms);