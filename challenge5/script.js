/*🟨 Défi 5 – Rechercher un cours
Objectif JS : filtrer un tableau + input event.
 Consigne :
 Créer un champ texte "Rechercher un cours".
 À chaque frappe, filtrer la liste et afficher uniquement les cours correspondants.
Exemple : taper "ph" → affiche seulement PHP.
*/


const courses = [
    { title: "JavaScript" },
    { title: "PHP" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "Python" },
    { title: "Laravel" },
    { title: "laravel" }
];

const ListeCours =document.getElementById("listeCours");
const Recherche =document.getElementById("recherche");


function afficher() {
courses.forEach(function(opt) {
ListeCours.innerHTML +=`
<li> ${opt.title}  </li> `})}

afficher();

Recherche.addEventListener("input" , function() {
    const text = Recherche.value.toLocaleLowerCase();
    const resultat = courses.filter(function(cours) {
        return cours.title.toLocaleLowerCase().includes(text);
    });
        ListeCours.innerHTML = "";
        resultat.forEach(function(cours){
            ListeCours.innerHTML += `<li>${cours.title}</li>`;
        }) 
    });
