/**type Chat = {
    nom : string,
    age : number,
    poids : number,
    race : string
}

const chat = {
  nom: "Clown",
  race: "Eupopéen",
  age: 3,
  poids: 5,
};

function getChat(...surnoms: string[]) {
  let listesurnoms = surnoms.map((surnom) => {
    `${surnoms.join(", ")}`;
    console.log(`Ce chat s'appele : ${chat.nom}, il est de race ${chat.race}, il a ${chat.age} et pése${chat.poids} kilos.
   Ses surnoms sont ${listesurnoms}`);
  });
}

getChat("enfoiré", "européen","on ne sais pas quel âge", "très gros", "clowny");
*/