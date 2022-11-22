const body = document.querySelector("body");
const div1 = document.querySelector("div1Accueil");
const div2 = document.querySelector("div2Liste");
const div3 = document.querySelector("div3Horloge");
const div4 = document.querySelector("div4FizzBuzz");
const div5 = document.querySelector("div5FizzBuzzBonus");


const header = document.createElement("nav");

body.append(header);


header.innerHTML= (`
  
    <a class="div1Accueil" href="./index2.html">Accueil</a>, 
    <a class="div2Liste" href="./liste.html">Exercice 2 : la liste</a>,
    <a class="div3Horloge" href="./horloge.html">Exercice 2 : l'horloge</a>,
    <a class="div4FizzBuzz" href="./fizzBuzz.html">Exercice 3 : le FizzBuzz</a>,
    <a class="div5FizzBuzzBonus" href="./FizzBuzzBonus.html" >Exercice 4 : le FizzBuzz++</a>,
`
);

const div6 =document.createElement("div6view");
body.append(div6);

div6.classList.add("ListeExercices");

div6.innerHTML=`<div class="div6view href="./index2.html">Liste des Exercices
<h2> Exercice 0</h2>
<h3>page d'accueil</h3>
<a class="div1Accueil" href="./index2.html">Accueil</a>

<h2> Exercice 1</h2>
<h3>La Liste</h3>
<a class="div2Liste" href="./liste.html">Exercice 2 : la liste</a>

<h2> Exercice 2</h2>
<h3>L'horloge'</h3>
<a class="div3Horloge" href="./horloge.html">Exercice 2 : l'horloge</a>

<h2> Exercice 3</h2>
<h3>FizzBuzz</h3>
<a class="div4FizzBuzz" href="./fizzBuzz.html">Exercice 3 : le FizzBuzz</a>

<h2> Exercice 4</h2>
<h3>FizzBuzz++</h3>
<a class="div5FizzBuzzBonus" href="./FizzBuzzBonus.html" >Exercice 4 : le FizzBuzz++</a>
</div>`;


const div8=document.createElement("div8Horloge");


const div9=document.createElement("div9number");
function fizzbuzz(number){
  for (let i = number; i<=100; i++){

        if (i % 3 == 0 && i % 5 == 0) {
            return(i,`FizzBuzz`);
            } 
        else if (i % 3 == 0) {
            return(i,`Fizz`);
        } 
        else if (i % 5 == 0) {
            return(i,`Buzz`);
        } 
        else {
            return(i);
        }
    }
}
fizzbuzz(number);



