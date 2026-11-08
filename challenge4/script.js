/*🟨 Défi 4 – Afficher les sections d’un cours
Objectif JS : événements + affichage conditionnel.
 Consigne :
 Tu as plusieurs cours avec sections :
const courses = [
  { title: "JavaScript", sections: ["Intro", "DOM", "Async"] },
  { title: "PHP", sections: ["Syntaxe", "PDO", "POO"] }
];

Afficher la liste des cours.
 Quand on clique sur un cours → afficher ses sections en dessous.
*/

const courses = [
  { title: "JavaScript", sections: ["Intro", "DOM", "Async"] },
  { title: "PHP", sections: ["Syntaxe", "PDO", "POO"] }
];

const btnJavaScript=document.getElementById("BtnJavaScript");
const btnPHP =document.getElementById("BtnPHP");

const uljs =document.getElementById("ULBtnJavaScript");
const ulphp = document.getElementById("ULBtnPHP");


btnJavaScript.addEventListener("click" , function() {
courses.forEach(function(opt) {
    if(opt.title == "JavaScript" ) {
        uljs.innerHTML = "";

        opt.sections.forEach(function(section) {
            uljs.innerHTML+= `<li>${section}</li>`
        })
    }

})
});

btnPHP.addEventListener("click" , function() {
    courses.forEach(function(opt) {

         if(opt.title == "PHP") {
         ulphp.innerHTML="";


       
           opt.sections.forEach(function(section) {
             ulphp.innerHTML+=`
            <li>     ${section}    </li>
            `
           })
                 }

    })
})