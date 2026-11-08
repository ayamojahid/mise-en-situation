const DivElement = document.getElementById("products");



const products = [
    "Clavier",
    "Souris",
    "Écran",
    "Casque"
];


function Remplir() {
    DivElement.innerHTML="";

    products.forEach(function(opt) {
        DivElement.innerHTML+= `
        <div> 
        <li>${opt}</li>
        <button id="plus">+</button>
        <p class="quantite"></p>
        <button id="moins">-</button>
        </div>
        `
    })

}

Remplir();


const PlusBtns = document.querySelectorAll("#plus");
const MoinsBtns = document.querySelectorAll("#moins");
const Quantites = document.querySelectorAll(".quantite");
 



PlusBtns.forEach(function(btn , index) {
   btn.addEventListener("click" , function() {
   let p =Number(Quantites[index].textContent);
    console.log(p);
   if(p<3) p++;
   Quantites[index].textContent=p;
   })
}) 


MoinsBtns.forEach(function(btn , index) {
    btn.addEventListener("click" , function() {
    let p = Number(Quantites[index].textContent);
    if(p<=3 && p>0) p--;
    Quantites[index].textContent=p;

    })
})