/* Ecrire une variable contenant ton age (number),et une constante contenant ta date de naissance (string)
let age = 48;
console.log(age);

const dateOfBirth = (`Je suis né le 27 juillet 1974 et j'ai ${age} ans`);
console.log(dateOfBirth);

// Ecrire un code qui t'affiche ton prénom si ton âge est pair.
//if ((age / 2) == 0){
    if(age % 2){
    console.log("Emmanuel");
}
---------------------------------------------------------
if (age < 27 ){
    console.log("Emmanuel");
}
else
{
    console.log("Angot");
}

//
function getToto(){
return ("Toto");
}
console.log(getToto());

---------------------------------------------------------
function getTotoArrow(){
    return ("Toto");
}
console.log(getTotoArrow());
/*
ou, en version "fonction fléchée)" :
const getToArrow = () => "Toto";
console.log(getTotoArrow());

---------------------------------------------------------
function d6() {
   return MathFloor(MathRandom()* 1 +6);
}
console.log(d6);
---------------------------------------------------------
let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
/* ou version const :
const add = (num1, num2) => num1 + num2;
console.log(add(2, 3);)
---------------------------------------------------------
let prenom = "Emmanuel";
let sexe = "Homme";
let loisir = "plein de choses";
let langage = "Ch'Ti";

function IAm(){
    return (`Je m'appele ${prenom}, j'ai ${age} ans, je suis un ${sexe}, j'aime faire ${loisir} et mon langage de prédilection est le ${langage}`);
}
console.log(IAm());

---------------------------------------------------------
let couleur ="";
let rouge="Arrêtez-vous !";
let vert="Avancez";
let orange="Préparez-vous à vous arrêter !";


if (couleur = rouge){
    console.log(rouge);
}
else if(couleur = vert){
    console.log(vert);
}
else if(couleur = orange){
    console.log(orange);
}
else{
    console.log("Cette couleur n'est pas acceptée");
}
---------------------------------------------------------
let couleur ="rouge";
switch(couleur){
    case "rouge":
        console.log("Arrêtez-vous !");
        break;

        case"orange":
        console.log("préparez-vous !");
        break;
        (...)for(i=0, i<tableau.lenght, i++){

    console.log(tableau[i]);
}

        default : 
        console.log("couleur invalide");
}
---------------------------------------------------------

const tableau=["*", "**", "***", "****","*****"]

for(i=0; i<=5; i++){

    console.log(tableau[i]);
}
---------------------------------------------------------

let i=0
let escalier = []

while (i<5){
    escalier.push(`*`)
    console.log(escalier.join(`*`))
    i++;
}
------------------------------------------------------

// Créer un script qui affiche les nombres de 1 à 100
// si divisible par 3, afficher "Fizz"
// si divisible par 5, afficher "Buzz"
// si divisible par 3 et par 5, afficher "FizzBuzz"

let i = 0;

while (i < 100) {
  i++;

  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i,`FizzBuzz`);
  } 
  else if (i % 3 == 0) {
    console.log(i,`Fizz`);
  } 
  else if (i % 5 == 0) {
    console.log(i,`Buzz`);
  } 
  else console.log(i);
}
//version fonction
function fizzbuzz(number){
  for (let i = number; i<=100; i++){

        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i,`FizzBuzz`);
            } 
        else if (i % 3 == 0) {
        console.log(i,`Fizz`);
        } 
        else if (i % 5 == 0) {
        console.log(i,`Buzz`);
        } 
        else {
             console.log(i);
        }
    }
}

fizzbuzz(number);
------------------------------------------------------
// Résultat attendu : "profit de 12 Euros" ou "perte de 12 Euros"

let pDV= parseInt(prompt`Veuillez saisir un prix de vente`);
let pDF= parseInt(prompt`Veuillez saisir un prix de fabrication`);

console.log(pDV, pDF);
let profit = pDV - pDF;

if (profit >= 0){
    console.log(`profit de ${profit} €`);
} else if(profit<0){
    console.log (`perte de ${profit} €`);
} else{
    console.log(`On ne perd ni ne gagne rien`);
}
------------------------------------------------------

let num1 = parseInt(prompt`Veuillez saisir un nombre 1`);
let num2 = parseInt(prompt`Veuillez saisir un nombre 2`);
let num3 = parseInt(prompt`Veuillez saisir un nombre 3`);

console.log(num1, num2, num3);

if ((num1 > num2) && (num1>num3)){
    console.log(`[${num1}, ${num2}, ${num3}] Le nombre num1 : ${num1} est le plus grand`);
}
else if ((num2 > num1) && (num2>num3)){
    console.log(`[${num1}, ${num2}, ${num3}] Le nombre num2 : ${num2} est le plus grand`);
}
else if((num3 > num1) && (num3>num2)){
    console.log(`[${num1}, ${num2}, ${num3}] Le nombre num3 : ${num3} est le plus grand`);
}


version avec méthode 
function nombreMax(nb1, nb2, nb3){
    const tableauNombre = [nb1, nb2, nb3];
    return Math.max(... tableauNombre);
}

console.log(nombreMax(15, 20, 10));
------------------------------------------------------
// Exo Notation"
let note = parseInt(prompt`Veuillez saisir une note entre 0 et 20`);
console.log(note);
if (note < 0 || note > 20) {
  console.log(`Erreur de saisie, la note doit être comprise entre 0 et 20`);
} else if (note >= 0 && note <= 4) {
  console.log(`Catastrophique, il faut tout revoir !`);
} else if (note > 4 && note <= 10) {
  console.log(`Insuffisant !`);
} else if (note > 10 && note <= 14) {
  console.log(`Peut mieux faire`);
} else if (note > 14 && note <= 17) {
  console.log(`Bien`);
} else if (note > 17 && note <= 20) {
  console.log(`Excellent, bon travail`);
}

/* Version switch
let note = parseFloat(prompt"Veuillez saisir une note entre 0 et 20");
switch(note){
    case note < 0 && note:
    case note > 20 && note:
        console.log("Note impossible");
        break;
case note <= 4) {
  console.log(`Catastrophique, il faut tout revoir !`);
  break;
}
case  note <= 10) {
  console.log(`Insuffisant !`);
  break;
}
case note <= 14) {
  console.log(`Peut mieux faire`);
}
case note <= 17) {
  console.log(`Bien`);
} 
case& note <= 20) {
  console.log(`Excellent, bon travail`);
}
}------------------------------------------------------
//Exo "Calculatrice"
let num1 = parseInt(prompt`Veuillez saisir un nombre `);
let operateur = prompt(`Veuillez saisir un opérateur`);
let num2 = parseInt(prompt`Veuillez saisir un deuxième nombre `);

if (operateur == "+"){
    console.log (`${num1} + ${num2} = ${(num1 + num2)}`);
}
else if (operateur == "-"){
    console.log (`${num1} - ${num2} = ${(num1 - num2)}`);
}
else if 
(operateur == "*"){
    console.log (`${num1} x ${num2} = ${(num1 * num2)}`);
}
else if
(operateur == "/" && num2!= 0){
    console.log (`${num1} / ${num2} = ${(num1 / num2)}`); // régle le problème de "différent de 0"
}
else {
    console.log(`Votre opération n'est pas valide`);
}
------------------------------------------------------

// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-desous !
const characterNames = [
  '36AIS',
  "A'misandra",
  'Amimari',
  'Alika',
  '54B2',
  "A'merpact",
  'Amazora',
];
// Affiche le nombre de personnages dans le tableau
console.log(characterNames.length);
// Affiche le nom du premier personnage
console.log(characterNames[0]); 
// Affiche le nom du dernier personnage (le 7eme)
console.log(characterNames[7]); 
// Affiche le nom du dernier personnage **SANS** savoir qu'il est le 7eme
console.log(characterNames['Amazora']);
characterNames.forEach(element => console.log(element[7]));
  
// Affiche les noms de tous les personnages
characterNames.forEach((item) => console.log(item));

// Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient
// Ex: Alika (5)
characterNames.forEach((item) => console.log(`${item.length}`));
    

// Affiche le nom de chaque personnage en minuscules 
characterNames.forEach((item) => console.log(`${item.toLowerCase()}`));

// Affiche les noms des personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)
function filtreTexte(){
for (i=0; i<characterNames.length; i++);
}
console.log(filtreTexte(characterNames, 'a'));


characterNames.forEach((item) =>{
  if(item.toLowerCase().includes("a")){
    console.log(item);
  }
});
// Crée une fonction `search(needle)` qui te renvoie les personnages dont le nom contient la lettre passée en paramètre
function searchLetter (){
  for (i=0; i<characterNames.length; i++){
    console.log(filtreTexte());
  }
}
console.log(searchLetter(characterNames, `a`));
// ----------------------------------------------------------------------

let userNumber = parseInt(prompt`Veuillez saisir un nombre`);

console.log(userNumber);
let somme = 0;
i=1;
while (1 <= userNumber){
  somme = userNumber +i; i= i + 1;
}
console.log(somme);
*/

let userNumber = parseInt(prompt`Veuillez saisir un nombre`);
console.log(userNumber);
let operateur = " + ";
let somme =(userNumber);
 
for (i =0; i <= userNumber ; i = i +1){
console.log(`1 + ${i} = ${userNumber} `);
}


