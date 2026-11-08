/*🟩 Défi 3 – Compter le nombre de sections
Objectif JS : parcourir un objet simple.
 Consigne :
const course = {
  title: "JavaScript",
  sections: ["Intro", "Fonctions", "DOM", "ES6"]
};

Afficher :
"Le cours JavaScript contient 4 sections."
*/
const salamasalama= document.getElementById("salama");
const course = {
  title: "JavaScript",
  sections: ["Intro", "Fonctions", "DOM", "ES6"]
};



function afficher() {

    const vale = ` "Le cours"  ${course.title}  contient  ${course.sections.length} "sections" `;
    salamasalama.textContent=vale;
    
}
afficher() 