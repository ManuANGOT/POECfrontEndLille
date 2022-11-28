class Chat {
  nom!: string;
  age!: number;
  poids!: number;
  race!: string;

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
