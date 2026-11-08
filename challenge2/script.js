/*
🟩 Défi 2 – Ajouter un cours
Objectif JS : écouter un événement + manipuler le DOM.
 Consigne :
 Créer un petit formulaire avec un champ texte + bouton Ajouter.
 Quand on clique, le nouveau cours est ajouté visuellement dans la liste.

*/


const coursInput = document.getElementById("coursInput");
const ajouterBtn = document.getElementById("ajouterBtn");
const listeCours = document.getElementById("listeCours");


ajouterBtn.addEventListener("click"  , function(){

const vl = coursInput.value;

const eleLI = document.createElement("li");

eleLI.textContent=vl;

listeCours.appendChild(eleLI);

console.log("hello");

coursInput.value="";
})