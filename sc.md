غادي نحلّو هاد 9 défis JavaScript من المستوى débutant حتى avancé بطريقة بسيطة، مع HTML وCSS وJavaScript، وشرح بالدارجة باش تفهمي المنطق وماشي غير تنقلي الكود.
بما أنك كتتعلمي JavaScript وكتحتاجي تتدربي على كتابة الكود من الصفر، غادي نقسمو الحلول حسب المستوى، وكل تحدّي فيه الفكرة والكود ديالو.
🟩 Niveau débutant
Défi 1 — Lister les cours
الفكرة: عندنا array فيه أسماء الكورسات، وغادي نستعملو forEach() باش نعرضو كل عنصر داخل <ul>.
HTML — index.html
<h1>Mes cours</h1>
<ul id="liste-cours"></ul>
<script src="script.js"></script>
JavaScript — script.js
const courses = ["JavaScript", "PHP", "SQL", "React"];
const liste = document.getElementById("liste-cours");
courses.forEach(function(cours) {
    const li = document.createElement("li");
    li.textContent = cours;
    liste.appendChild(li);
});
Résultat attendu
Mes cours
	• JavaScript
	• PHP
	• SQL
	• React
شرح بالدارجة:
	• courses : tableau ديال الكورسات.
	• getElementById() : كنجيبو العنصر من HTML.
	• createElement("li") : كنصايبو عنصر جديد.
	• textContent : كنعطيوه النص.
	• appendChild() : كنزيدو العنصر داخل اللائحة.
	• forEach() : كتدوز على كل عنصر فالـ array.
Défi 2 — Ajouter un cours
الفكرة: المستخدم كيكتب اسم الكورس، ومنين كيضغط على الزر كنزيدوه للائحة.
HTML
<h1>Mes cours</h1>
<input type="text" id="nouveau-cours"
       placeholder="Nom du cours">
<button id="btn-ajouter">Ajouter</button>
<ul id="liste-cours"></ul>
<script src="script.js"></script>
JavaScript
const input = document.getElementById("nouveau-cours");
const bouton = document.getElementById("btn-ajouter");
const liste = document.getElementById("liste-cours");
bouton.addEventListener("click", function() {
    const nom = input.value.trim();
if (nom !== "") {
        const li = document.createElement("li");
        li.textContent = nom;
liste.appendChild(li);
input.value = "";
    }
});
شرح بالدارجة:
	1. addEventListener("click", ...) كتسنى المستخدم يكليكي.
	2. input.value كتجيب النص اللي كتبو المستخدم.
	3. trim() كتحيد الفراغات من البداية والنهاية.
	4. if (nom !== "") كتمنع إضافة اسم فارغ.
	5. appendChild(li) كتزيد الكورس فاللائحة.
	6. input.value = "" كتفرغ الخانة باش يقدر يزيد كورس آخر.
Défi 3 — Compter le nombre de sections
الفكرة: sections هي array داخل object. كنستعملو length باش نعرفو عدد العناصر.
const course = {
    title: "JavaScript",
    sections: ["Intro", "Fonctions", "DOM", "ES6"]
};
const nombre = course.sections.length;
console.log(
    `Le cours ${course.title} contient ${nombre} sections.`
);
النتيجة:
Le cours JavaScript contient 4 sections.
علاش؟
	• course.title كترجع "JavaScript".
	• course.sections كترجع الـ array ديال sections.
	• course.sections.length كترجع العدد ديال العناصر، وهو 4.
	• ${...} كتسمح لينا ندخلو قيمة متغيّر داخل template literal باستعمال backticks `, ماشي علامات الاقتباس العادية.
🟨 Niveau intermédiaire
Défi 4 — Afficher les sections d’un cours
الفكرة: عندنا array ديال objects. كل object فيه title و sections. غادي نعرضو الكورسات، ومنين نكليكو على واحد فيهم كتبان sections ديالو.
HTML
<h1>Mes cours</h1>
<div id="liste-cours"></div>
<script src="script.js"></script>
JavaScript
const courses = [
    {
        title: "JavaScript",
        sections: ["Intro", "DOM", "Async"]
    },
    {
        title: "PHP",
        sections: ["Syntaxe", "PDO", "POO"]
    }
];
const liste = document.getElementById("liste-cours");
courses.forEach(function(cours) {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
    const listeSections = document.createElement("ul");
titre.textContent = cours.title;
cours.sections.forEach(function(section) {
        const li = document.createElement("li");
        li.textContent = section;
        listeSections.appendChild(li);
    });
listeSections.hidden = true;
titre.addEventListener("click", function() {
        listeSections.hidden = !listeSections.hidden;
    });
article.appendChild(titre);
    article.appendChild(listeSections);
    liste.appendChild(article);
});
كيفاش خدام؟
	• courses.forEach() كتدوز على كل كورس.
	• cours.title هو اسم الكورس الحالي.
	• cours.sections.forEach() كتدوز على sections ديالو.
	• hidden = true كتخبي اللائحة.
	• hidden = !listeSections.hidden كتبدل الحالة: إلا كانت مخبية كتبان، وإلا كانت باينة كتختفي.
ملاحظة: فهاد الحل، الكليك على عنوان الكورس كيبين أو كيخبي sections ديالو.
Défi 5 — Rechercher un cours
الفكرة: مع كل حرف كيكتبو المستخدم، كنصفّيو اللائحة باستعمال filter().
HTML
<h1>Rechercher un cours</h1>
<input id="recherche" type="text"
       placeholder="Rechercher un cours">
<ul id="liste-cours"></ul>
<script src="script.js"></script>
JavaScript
const courses = ["JavaScript", "PHP", "SQL", "React"];
const input = document.getElementById("recherche");
const liste = document.getElementById("liste-cours");
function afficherCours(tableau) {
    liste.innerHTML = "";
tableau.forEach(function(cours) {
        const li = document.createElement("li");
        li.textContent = cours;
        liste.appendChild(li);
    });
}
afficherCours(courses);
input.addEventListener("input", function() {
    const recherche = input.value.toLowerCase();
const resultats = courses.filter(function(cours) {
        return cours.toLowerCase().includes(recherche);
    });
afficherCours(resultats);
});
شرح أهم الأسطر:
	• input : الحدث كيتنفذ مع كل تغيير فالخانة.
	• filter() : كتصايب array جديدة فيها غير العناصر اللي كتناسب الشرط.
	• includes() : كتشوف واش النص موجود داخل اسم الكورس.
	• toLowerCase() : كتحول الحروف للصغيرة باش البحث ما يتأثرش بحالة الحروف.
	• innerHTML = "" : كتمسح النتائج القديمة قبل ما تعرض الجديدة.
مثال: إلا كتبتي ph غادي تبان PHP.
Défi 6 — Progression dans une section
فهاد التحدي، كل section عندها زر. ملي نكليكو عليه، كتولي خضرا، وكيزيد العداد غير مرة وحدة لكل section.
HTML
<h1>Mes sections</h1>
<p id="progression">Progression : 0/5 sections terminées.</p>
<ul id="liste-sections"></ul>
<script src="script.js"></script>
JavaScript
const sections = [
    "Introduction",
    "Variables",
    "Fonctions",
    "DOM",
    "ES6"
];
const liste = document.getElementById("liste-sections");
const progression = document.getElementById("progression");
let terminees = 0;
sections.forEach(function(section) {
    const li = document.createElement("li");
    const bouton = document.createElement("button");
li.textContent = section + " ";
    bouton.textContent = "Mark as completed";
bouton.addEventListener("click", function() {
        if (bouton.disabled === false) {
            terminees++;
li.style.color = "green";
            bouton.textContent = "Completed";
            bouton.disabled = true;
progression.textContent =
                `Progression : ${terminees}/${sections.length} sections terminées.`;
        }
    });
li.appendChild(bouton);
    liste.appendChild(li);
});
الفكرة المهمة: استعملنا terminees كمتغير للحالة، وbouton.disabled = true باش ما نعاودوش نحتاسبو نفس section أكثر من مرة.
🟥 Niveau avancé
Défi 7 — Générateur de plan de cours dynamique
الفكرة: المستخدم كيدخل اسم الكورس، ويقدر يزيد عدة sections، ومن بعد كيكليكي على « Créer le cours » باش يظهر الكورس كامل.
HTML
<h1>Créer un cours</h1>
<input id="titre-cours" placeholder="Nom du cours">
<h2>Ajouter des sections</h2>
<input id="nom-section" placeholder="Nom de la section">
<button id="btn-section">Ajouter section</button>
<ul id="liste-sections"></ul>
<button id="btn-creer">Créer le cours</button>
<div id="resultat"></div>
<script src="script.js"></script>
JavaScript
const titreCours = document.getElementById("titre-cours");
const nomSection = document.getElementById("nom-section");
const btnSection = document.getElementById("btn-section");
const btnCreer = document.getElementById("btn-creer");
const listeSections = document.getElementById("liste-sections");
const resultat = document.getElementById("resultat");
const sections = [];
btnSection.addEventListener("click", function() {
    const nom = nomSection.value.trim();
if (nom !== "") {
        sections.push(nom);
const li = document.createElement("li");
        li.textContent = nom;
        listeSections.appendChild(li);
nomSection.value = "";
    }
});
btnCreer.addEventListener("click", function() {
    const titre = titreCours.value.trim();
if (titre === "" || sections.length === 0) {
        alert("Saisis un titre et au moins une section.");
        return;
    }
const cours = {
        title: titre,
        sections: [...sections]
    };
resultat.innerHTML = "";
const h2 = document.createElement("h2");
    h2.textContent = "Cours : " + cours.title;
const ul = document.createElement("ul");
cours.sections.forEach(function(section) {
        const li = document.createElement("li");
        li.textContent = section;
        ul.appendChild(li);
    });
resultat.appendChild(h2);
    resultat.appendChild(ul);
});
شنو خاصك تفهمي هنا؟
	• sections.push(nom) : كتزيد section للـ array.
	• sections.length : كتعطينا عدد sections.
	• const cours = { ... } : كنصايبو object فيه معلومات الكورس.
	• [...sections] : كتدير نسخة من array ديال sections.
	• return : كتوقف تنفيذ الدالة الحالية إلا كانت المعلومات ناقصة.
Défi 8 — Système de navigation (SPA light)
SPA معناها صفحة واحدة، ولكن المحتوى كيتبدل بلا ما نعاودو نحمّلو الصفحة.
غادي نصايبو لائحة الكورسات، صفحة التفاصيل، وزر الرجوع.
HTML
<div id="page-liste">
    <h1>Mes cours</h1>
    <div id="cours"></div>
</div>
<div id="page-detail" hidden>
    <button id="btn-retour">Retour</button>
    <h1 id="titre-detail"></h1>
    <ul id="sections-detail"></ul>
</div>
<script src="script.js"></script>
JavaScript
const courses = [
    {
        title: "JavaScript",
        sections: ["Introduction", "DOM", "ES6"]
    },
    {
        title: "PHP",
        sections: ["Syntaxe", "PDO", "POO"]
    }
];
const pageListe = document.getElementById("page-liste");
const pageDetail = document.getElementById("page-detail");
const liste = document.getElementById("cours");
const titreDetail = document.getElementById("titre-detail");
const sectionsDetail = document.getElementById("sections-detail");
const btnRetour = document.getElementById("btn-retour");
courses.forEach(function(cours, index) {
    const bouton = document.createElement("button");
bouton.textContent = cours.title;
bouton.addEventListener("click", function() {
        afficherDetail(index);
    });
liste.appendChild(bouton);
});
function afficherDetail(index) {
    const cours = courses[index];
titreDetail.textContent = cours.title;
    sectionsDetail.innerHTML = "";
cours.sections.forEach(function(section) {
        const li = document.createElement("li");
        li.textContent = section;
        sectionsDetail.appendChild(li);
    });
pageListe.hidden = true;
    pageDetail.hidden = false;
}
btnRetour.addEventListener("click", function() {
    pageDetail.hidden = true;
    pageListe.hidden = false;
});
شرح بالدارجة:
	1. index هو رقم الكورس داخل الـ array.
	2. courses[index] كتجيب الكورس اللي اختار المستخدم.
	3. afficherDetail(index) كتبدل المحتوى وكتعرض التفاصيل.
	4. hidden = true كتخبي صفحة اللائحة.
	5. زر Retour كيرجعنا للائحة.
ما استعملنا لا location.reload() لا window.location؛ يعني التنقل كيوقع بلا إعادة تحميل الصفحة.
Défi 9 — Charger des cours via API
الفكرة: كنجيبو البيانات من API باستعمال fetch(), وكنستناو النتيجة باستعمال async/await.
HTML
<h1>Mes cours en ligne</h1>
<p id="loader" hidden>Chargement des cours...</p>
<p id="erreur"></p>
<div id="liste-cours"></div>
<script src="script.js"></script>
JavaScript
const loader = document.getElementById("loader");
const erreur = document.getElementById("erreur");
const liste = document.getElementById("liste-cours");
async function chargerCours() {
    loader.hidden = false;
    erreur.textContent = "";
try {
        const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
if (!reponse.ok) {
            throw new Error("Erreur lors du chargement");
        }
const posts = await reponse.json();
const cours = posts.slice(0, 10);
cours.forEach(function(post) {
            const article = document.createElement("article");
            const titre = document.createElement("h2");
            const description = document.createElement("p");
titre.textContent = post.title;
            description.textContent = post.body;
article.appendChild(titre);
            article.appendChild(description);
            liste.appendChild(article);
        });
} catch (error) {
        erreur.textContent = "Impossible de charger les cours.";
        console.error(error);
} finally {
        loader.hidden = true;
    }
}
chargerCours();
أهم المفاهيم:
	• async : كتسمح لينا نستعملو await داخل الدالة.
	• await fetch(...) : كتسنى حتى تجي استجابة API.
	• await reponse.json() : كتقرا البيانات وكتحوّلها لـ JavaScript.
	• slice(0, 10) : كتختار أول 10 عناصر بلا ما تبدل الـ array الأصلية.
	• try/catch : لمعالجة الأخطاء.
	• finally : كيتنفذ سواء نجح التحميل أو وقع خطأ، لذلك كنخبيو loader فيه.
ملاحظة: هاد الـ API كترجع بيانات تجريبية اسمها posts، وحنا كنستعملوها بحال إلا كانت كورسات.
كيفاش تتدربي باش تولّي تحلي بوحدك؟
ما تحفظيش التسعة حلول دفعة وحدة. ركزي على هاد الترتيب:
1. Défis 1–3
Tableaux, objets, forEach, length, DOM.
حاولي تكتبي كل حل من الصفر بلا ما تشوفي الكود.
2. Défis 4–6
Événements, filter, conditions, variables d’état.
تدربي على addEventListener, if, hidden, وdisabled.
3. Défis 7–9
Objets, navigation, API, async/await.
هنا جمعي المفاهيم اللي تعلمتي من قبل، وزيدي كل مرة ميزة وحدة.
اختبري راسك دابا
1. Quelle propriété donne le nombre d’éléments d’un tableau ?
size
length
count
2. Quelle méthode ajoute un élément à la fin d’un tableau ?
push()
filter()
forEach()
3. Quel événement permet de détecter chaque frappe dans un champ ?
click
submit
input
4. Quelle méthode permet de récupérer les données JSON d’une réponse fetch ?
response.text() uniquement
response.json()
response.push()
5. Comment afficher un cours sans recharger la page ?
Modifier le DOM
Toujours utiliser reload()
Fermer le navigateur
Recommencer le quiz
Mon conseil : بداي بـ Défi 1، ومن بعد حاولي تعاودي Défi 2 بلا ما تشوفي الحل. إلا قدرتي تديريهم بوحدك، راه كتبدأي تفهمي كيفاش تبني برنامج JavaScript، ماشي غير كيفاش تقراي الكود.
