// Récupération données utilisateurs dans le formaulaire
let form = document.forms[0].elements;
//Création d'une variable vide qui va contenir notre objet
let user = {};
//Sélection de la div de résultat
let divResult = document.querySelector("#result");
// récupération du bouton submit
let submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  //Récupération mots de passe
  let password = form["password"].value;
  let password2 = form["password2"].value;

  //Vérification validité
  if (checkPassword(password, password2)) {
    user.nom = form["nom"].value;
    user.prenom = form["prenom"].value;
    user.email = form["email"].value;
    user.password = form["password"].value;
    divResult.innerText = JSON.stringify(user);
  } else {
    form["password"].value = "";
    form["password2"].value = "";
    alert("Les mots de passe ne sont pas identiques");
  }
});

//Vérification du mot de passe
/*
@param {String} password
@param {String} password2
@returns Boolean
*/

function checkPassword(password, password2) {
  if (password != password2 || password == "" || password2 == "") {
    return false;
  } else {
    return true;
  }
};
