/*  🟩 Défi 1 – Lister les cours
Objectif JS : manipuler des tableaux & afficher dans le DOM.
 Consigne :
 Tu as un tableau :
const courses = ["JavaScript", "PHP", "SQL", "React"];

Affiche chaque cours dans une liste <ul> sur la page.     */


const courses = ["JavaScript", "PHP", "SQL", "React"];

const Container =document.querySelector(".container");

function afficher() {

    courses.forEach(function(opt) {
    Container.innerHTML+=`
    <ul>
    <li>${opt}</li>
    </ul>
    `
    })
}

afficher();