/*
console.log(window);
// affiche toutes les ressources Win dans la console.

console.log(document);
// affiche toutes les données javascript du doc

//Récup d'un élément' : avec le querySelector...
//ex avec sélecteur CSS: let document = document.querySeclector(`#demo`);
//ex avec une précision (div, id...=): let document = document.querySeclector(`div.demo`);
const body =document.querySelector(`body`);
//h2.innerText = (`coucou !`);
body.append(`coucou !!!`);

const div = document.createElement(`div`);
div.innerHTML = `<h1>Coucou 2 !</h1>` ;
body.append(`Coucou 2 !`);

function element(balise, contenu){
    const b=document.createElement(`balise`);
    b.innerHTML = contenu;
    body.append(`b`);
}

element(`h1`, `blaireau`);
element(`p`, `Welcome`);
element(`div`, `example`);
*********************************************
const eleves = [
  {
    nom: "Blaireau",
    prenom: "Toto",
    age: 22,
  },
  {
    nom: "Lolo",
    prenom: "Toto",
    age: 23,
  },
  {
    nom: "Tata",
    prenom: "Titi",
    age: 22,
  },
];
let divEleve = document.querySelector("#eleve");
//divEleve.innerHTML = `<p>${eleve.nom}, ${eleve.prenom}, ${eleve.age}</p>`;
let liste = document.createElement("ul");
divEleve.append(liste);


let LiEleve = "";
for (let i = 0; i < eleves.length; i++) {
  let eleve = eleves[i];
  LiEleve += `<li>${eleve.nom}, ${eleve.prenom}</li>`;
}
liste.innerHTML = LiEleve;

Méthode 2 :

for (let i= 0; i< eleves.length; i++){
    let puce = document.createElement("li");
    puce.innerText = `${eleves[i].prenom} ${eleves[i].nom}`;
    liste.append(puce);
}
****************************************

const body = document.querySelector("body") ;
//const h1 = document.createElement("h1");
const h1 = document.querySelector("h1");

h1.classList.add("titre1");

//h1.classList.remove("titre2"); supprime la classe
//h1.classList.contains("titre2"); cherche la classe
//h1.classList.replace("titre2", "titre4"); remplace une classe par une autre
****************************************

// Créer un javaScript qui augmente la taille de la police et qui changera la couleur d'un éléments toutes les secondes.
//Exemple : Voici un moyen de générer une couleur héxadécimale de manière aléatoire

const changeLetter = document.querySelector(`.changeLetter`);

function getRandomColor() {
  letters = "0123456789ABCDEF";
  color = `#`;
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomSize() {
  for (var i = 0; i < 15; i++) {
    changeLetter += letter[(Math.floor(Math.random() * 9) + em)];
  }
  changeLetter += em;
  return changeLetter;
}

function chrono() {
  window.setTimeout("chrono()", 1000);
  changeLetter.style.color = getRandomColor();
  changeLetter.style.fontSize = getRandomSize();
}

chrono();
****************************************
version corrigée (autre méthode)

function colorRandom() {
  letters = "0123456789ABCDEF";
  color = `#`;
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let h1= document.querySelector(`h1`);

function changeColor(){
  h1.style.color=colorRandom();
  h1.style.fontSize=`${(fontSize += 2)}px`;
}
setInterval(changeColor, 1000);
changeColor();

const h1 = document.querySelector("h1");
//h1.addEventListener("click", (Event) => {
//h1.style.color = "green";
//});
h1.addEventListener("mouseover", (Event) => {
  h1.style.color = "green";
});
h1.addEventListener("mouseout", (Event) => {
  h1.style.color = "red";
  h1.style.backgroundColor = "yellow";
});
****************************************
*/
//Compteur
const button = document.querySelector(`button`);
button.addEventListener(`click`, (Event) => {
  button.innerHTML = `Nombre de click : ${Event.detail}`;
});

//Autre méthode :
let compte = true;

let pCompteur = document.querySeclector(`p`);
let button2 = document.querySeclector(`button2`);
button2.addEventListener("click", (event) => {
  compte = !compte;
  pCompteur.innerHTML = compte;
})

let div = document.querySelector("div");
let compteur3 = document.createElement("button3");
div.prepend(button3);
button3.innerText = "+1";
let compte2 = 0;
button3.addEventListener("click", (event) =>{
  compte2 ++;
  compteur3.innerHTML = compte2;
});

