/* 
Cours Rappels JS

console.log("Hello World");

let number = 25;
{
 let nom = "Toto";   
console.log(nom);
}

number++;
console.log(number);
----------------------------------------------

Camel Case : MaFonctionADeclarer
Pascal Case : MaFonctionADeclarer
Snaker Case : ma_fonction (sql)

---------------------------------------------
let nom = prompt("Veuillez entrer votre nom");
console.log('bienvenue + ${nom}');


string: "une chaîne de caractéres";
number: 5
Boolean: true or false

tableau : [25, "France",[23, "Italie"], { nom: "Luigi"} ]
objet : {
    nom: "Luigi";
    prenomDeLaStagiaire:"Laura"
}
---------------------------------------------
let nombre1=28;
let nombre2=31;
let nombre3 = nombre1 + nombre2;
console.log(nombre3);
---------------------------------------------
*/
// Exemple addition avec fonction simple
/* function calcul(num1, num2){
    return (num1+num2);
}
console.log(calcul(25,5));


//Exemple avec parseInt

let UserNum1 = parseInt(prompt("Nombre 1 = ?"));
let Usernumber2=parseInt(prompt("Nombre 2 = ?"));

let UserNumber3 = UserNum1 + Usernumber2;

console.log(UserNum3);
---------------------------------------------
function ValidePalindrome(palindrome)
{
    for( var i = palindrome.length; i > 0; i-- )
    {
        if( palindrome[i] = palindrome.charAt(palindrome.length)-1 ){
             document.write('OK palindrome.');
        }
        else if {
            document.write('Pas un palindrome!');
        }
    }
}
ValidePalindrome('Ce mot est un palindrome');

---------------------------------------------
console.log(Math.random());
---------------------------------------------
let age=30
console.log(`L'algo c'est la vie ${age}`);

***********Tableaux**********************
const tableau=["chien", "chat","poisson"]

for(i=0; i<tableau.lenght; i++){
    console.log(tableau[i]);
}


**********Fonction*********************** !!!
function eleves(eleve, eleve1, eleve2){
    console.log()
}

function eleves(... eleve){
    console.log (eleve[2])
}

const tab1=["x", "y"]
const tab2 ["v", "z"]
const tab3=[... tab1, tab3]

console.log(tab3); donne ["x","y","v","z"]   dans la console.
---------------------------------------------
let pDV= parseInt(prompt"Veuillez saisir");
let pDF= parseInt(prompt"Veuillez saisir");

console.log(pDV, pDF);
let profit = pDV - pDF;

if (profit >= 0){
    console.log(`profit de ${profit} €`);
} else if(profit<0){
    console.log (`perte de ${profit} €`);
} else{
    console.log(`On ne perd ni ne gagne rien`);
}
}

*/






