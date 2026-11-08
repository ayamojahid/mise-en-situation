# Cours JavaScript – Concept 4 : Création dynamique

DOM – Niveau débutant à intermédiaire

Thème : Le CRUD du DOM

Dans ce chapitre, tu vas apprendre à créer des éléments HTML avec JavaScript, leur ajouter du contenu, les afficher dans la page, construire des listes et supprimer ou modifier des éléments.

On va suivre tes 5 exercices dans l'ordre, du plus simple au plus avancé.

## 1. Comprendre la création dynamique du DOM

### 1.1. C'est quoi la création dynamique ?

Normalement, on écrit les éléments HTML directement dans le fichier :

```
<div>
    <p>Bonjour</p>
    <p>Bienvenue</p>
</div>
```

Mais avec JavaScript, on peut créer ces éléments automatiquement, sans les écrire manuellement dans le HTML.

Par exemple, on peut avoir un tableau de produits et demander à JavaScript de créer une carte HTML pour chaque produit.

C'est ce qu'on appelle la création dynamique des éléments HTML.

### 1.2. C'est quoi le CRUD ?

CRUD est un acronyme qui représente quatre opérations fondamentales :

| Lettre | Opération | Signification                |
| ------ | --------- | ---------------------------- |
| C      | Create    | Créer un élément             |
| R      | Read      | Lire ou récupérer un élément |
| U      | Update    | Modifier un élément          |
| D      | Delete    | Supprimer un élément         |

Exemple concret : une liste de tâches (To-do list).

- Create : ajouter une nouvelle tâche.
- Read : afficher les tâches.
- Update : modifier le texte d'une tâche.
- Delete : supprimer une tâche.

[Tired of Writing the Same Tests Again and Again? Meet Keploy - DEV Community](https://images.openai.com/static-rsc-4/pYAfhXRBQZ8yc4bTu9U2jXx29nEsVdgVjlMgh3amN_wS_3ulxZL88mbHaXBEJksQwOM18vSHSVoS_vi1Nhac9JInv4FesNEbSDuqeu23HrIcPLE7ShatllKsjWGX_HOgD6eyeghgE1EeDj6OCVLRrrMFJcz0TVeUgF-qc3iPjNU?purpose=inline)

[dev.to](https://dev.to/mettasurendhar/stop-writing-repetitive-tests-how-keploy-generates-them-automatically-cim?utm_source=chatgpt.com)

Attention : le CRUD peut concerner les données et le DOM. Ici, on étudie principalement la manipulation des éléments HTML.

## 2. Les méthodes fondamentales à connaître

Avant de commencer les exercices, il faut comprendre les outils que JavaScript met à notre disposition.

### 2.1. `document.createElement()`

CREATE

Définition : cette méthode permet de créer un nouvel élément HTML.

Syntaxe :

```
document.createElement("p");
```

Explication :

- `document` : représente le document HTML.
- `createElement()` : demande la création d'un élément.
- `"p"` : indique le type de balise à créer.

Exemples :

```
document.createElement("div");
document.createElement("h1");
document.createElement("button");
document.createElement("img");
document.createElement("li");
```

Attention : créer un élément ne signifie pas qu'il est automatiquement affiché dans la page.

C'est comme fabriquer une boîte sans encore la placer dans une pièce.

### 2.2. `textContent`

Cette propriété permet d'ajouter ou de modifier le texte d'un élément.

```
let titre = document.createElement("h2");

titre.textContent = "Bienvenue";
```

Résultat : l'élément contient maintenant le texte `Bienvenue`.

Différence importante :

```
titre.textContent = "Bonjour";
```

Ici, on affecte une valeur à une propriété. Ce n'est pas une fonction, donc pas de parenthèses.

### 2.3. `innerHTML`

Cette propriété permet de lire ou modifier le contenu HTML d'un élément.

```
let container = document.querySelector("#container");

container.innerHTML = "<p>Bonjour</p>";
```

Résultat :

```
<div id="container">
    <p>Bonjour</p>
</div>
```

Différence entre `textContent` et `innerHTML` :

| textContent                            | innerHTML                           |
| -------------------------------------- | ----------------------------------- |
| Ajoute du texte                        | Interprète du HTML                  |
| Les balises sont affichées comme texte | Les balises deviennent des éléments |
| Plus sûr pour du texte utilisateur     | Attention aux injections XSS        |

Exemple :

```
element.textContent = "<strong>Bonjour</strong>";
```

Le navigateur affiche littéralement les caractères `<strong>`.

Alors que :

```
element.innerHTML = "<strong>Bonjour</strong>";
```

Le mot Bonjour devient gras.



Sécurité

&#x20;Évite d'insérer directement du contenu fourni par un utilisateur avec `innerHTML`. Préfère `textContent` pour afficher du texte non fiable.



### 2.4. `appendChild()`

INSERTION

Cette méthode permet d'ajouter un élément enfant à l'intérieur d'un élément parent.

Syntaxe :

```
parent.appendChild(child);
```

Exemple :

```
const container = document.querySelector("#container");

const p = document.createElement("p");

p.textContent = "Bonjour";

container.appendChild(p);
```

Comprendre les relations :

- `container` : Parent.
- `p` : Child.
- `appendChild()` : ajoute le Child à la fin du Parent.

### 2.5. `prepend()`

Ajoute un élément au début du Parent.

```
container.prepend(p);
```

Différence :

- `append()` : ajoute à la fin.
- `prepend()` : ajoute au début.

### 2.6. `remove()`

Permet de supprimer directement un élément.

```
let p = document.querySelector("p");

p.remove();
```

L'élément est supprimé du DOM.

### 2.7. `removeChild()`

Permet au Parent de supprimer un de ses enfants.

```
container.removeChild(p);
```

Différence :

- `remove()` : l'élément se supprime lui-même.
- `removeChild()` : le parent supprime un enfant.

### 2.8. `setAttribute()`

Permet d'ajouter ou de modifier un attribut HTML.

```
let image = document.createElement("img");

image.setAttribute("src", "photo.jpg");
image.setAttribute("alt", "Une photo");
```

Tu peux également utiliser les propriétés directement :

```
image.src = "photo.jpg";
image.alt = "Une photo";
```

### 2.9. `classList`

Permet de gérer les classes CSS.

```
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

- `add()` : ajoute une classe.
- `remove()` : supprime une classe.
- `toggle()` : ajoute si elle est absente, supprime si elle est présente.

## 3. Exercice 4N1 – Création d'un élément simple

Débutant

### Objectif

Créer un élément HTML avec JavaScript et l'ajouter dans la page.

Imaginons qu'on ait un bouton. Quand l'utilisateur clique dessus, on veut afficher un nouveau paragraphe.

HTML :

```
<button id="btn">Ajouter</button>

<div id="container"></div>
```

JavaScript :

```
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {

    const p = document.createElement("p");

    p.textContent = "Nouveau paragraphe";

    container.appendChild(p);

});
```

### Explication étape par étape

Étape 1 – Sélectionner les éléments existants

```
const btn = document.getElementById("btn");
const container = document.getElementById("container");
```

On récupère les éléments déjà présents dans HTML.

Étape 2 – Écouter le clic

```
btn.addEventListener("click", () => {
```

On demande à JavaScript d'exécuter une action lorsque l'utilisateur clique.

Étape 3 – Créer le paragraphe

```
const p = document.createElement("p");
```

On crée un nouvel élément `p`.

Attention : à ce stade, il n'est pas encore affiché dans la page.

Étape 4 – Ajouter le texte

```
p.textContent = "Nouveau paragraphe";
```

On donne un contenu à notre paragraphe.

Étape 5 – Insérer l'élément

```
container.appendChild(p);
```

On ajoute le paragraphe à la fin du `div`.

### Cas particuliers à connaître

- Si on clique 5 fois, on crée 5 paragraphes.
- Si le conteneur est vide, l'ajout fonctionne.
- Si le conteneur n'existe pas, `container` sera `null` et `appendChild()` provoquera une erreur.
- Si on crée l'élément mais qu'on oublie de l'ajouter au document, il ne sera pas visible.

### À retenir

La logique fondamentale :

1\. Sélectionner le parent\
`document.getElementById()`

2\. Créer l'enfant\
`document.createElement()`

3\. Ajouter le contenu\
`textContent`

4\. Insérer l'enfant\
`appendChild()`

## 4. Exercice 4N2 – Création d'un élément enrichi

Débutant – Intermédiaire

### Objectif

Créer un élément HTML qui contient plusieurs informations :

- Un titre.
- Une description.
- Une image.
- Un bouton.
- Des classes CSS.
- Des attributs HTML.

On appelle cela un élément enrichi parce qu'il ne contient pas seulement du texte.

### 4.1. Exemple : créer une carte produit

[Neumorphism UI design recipe, examples, AI guidelines | Setproduct Blog](https://images.openai.com/static-rsc-4/J_9iVHxT6AQwCvK5kjlGaW5ZtGX_IiNwndkv3MNJhmGUgA9-7Iv75vdQY8aDXYDHxdFntVBRiJiXz5-TN37TQfnl_qDeym3E5GmscdBOx1drmFav7KZU91hmV4qAF4yHKCuASy2K36yHk4fCqr1OQfO751UUWH6zYDJ73A5nLec?purpose=inline)

[setproduct.com](https://www.setproduct.com/blog/neumorphism-design-guide?utm_source=chatgpt.com)

HTML de départ :

```
<div id="products"></div>
```

JavaScript :

```
const products = document.getElementById("products");

// Création de la carte
const card = document.createElement("div");
card.classList.add("product-card");

// Création du titre
const title = document.createElement("h2");
title.textContent = "Café Latte";

// Création de la description
const description = document.createElement("p");
description.textContent = "Un délicieux café au lait";

// Création de l'image
const image = document.createElement("img");
image.src = "cafe.jpg";
image.alt = "Café Latte";

// Création du bouton
const button = document.createElement("button");
button.textContent = "Ajouter au panier";

// Construction de la carte
card.appendChild(image);
card.appendChild(title);
card.appendChild(description);
card.appendChild(button);

// Insertion dans la page
products.appendChild(card);
```

### 4.2. Comprendre la structure Parent / Child

Regarde comment les éléments sont organisés :

```
<div id="products">
    <div class="product-card">

        <img src="cafe.jpg" alt="Café Latte">

        <h2>Café Latte</h2>

        <p>Un délicieux café au lait</p>

        <button>Ajouter au panier</button>

    </div>
</div>
```

On a une hiérarchie :

- `products` est le parent de `card`.
- `card` est le parent de `image`, `title`, `description` et `button`.
- Les quatre éléments sont des enfants de `card`.

Pourquoi créer chaque élément séparément ?

Parce que chaque élément peut avoir ses propres propriétés, classes, événements et attributs.

### 4.3. Ajouter des attributs

Un attribut fournit une information supplémentaire à un élément HTML.

Exemples :

| Attribut   | Rôle                      |
| ---------- | ------------------------- |
| `src`      | Chemin de l'image         |
| `alt`      | Description de l'image    |
| `id`       | Identifiant               |
| `class`    | Classe CSS                |
| `href`     | Destination d'un lien     |
| `type`     | Type d'un input ou bouton |
| `disabled` | Désactive un élément      |

Deux façons de modifier les attributs :

```
image.src = "cafe.jpg";
image.alt = "Café";
```

Ou :

```
image.setAttribute("src", "cafe.jpg");
image.setAttribute("alt", "Café");
```

Pour lire un attribut :

```
image.getAttribute("src");
```

Pour supprimer un attribut :

```
image.removeAttribute("alt");
```

### 4.4. Ajouter un événement à un élément créé

On peut également rendre le bouton interactif :

```
button.addEventListener("click", () => {
    console.log("Produit ajouté !");
});
```

L'événement est attaché directement au bouton créé.

Cas important : si tu crées un bouton dynamiquement, tu peux lui ajouter son événement avant ou après son insertion dans le DOM.

## 5. Exercice 4N3 – Génération d'une liste itérative

Intermédiaire

### Objectif

Apprendre à créer automatiquement plusieurs éléments HTML à partir d'un tableau JavaScript.

C'est un concept très important dans les projets Web.

### 5.1. Pourquoi utiliser une boucle ?

Imaginons que tu as 5 notes :

```
const notes = [12, 8, 15, 9, 18];
```

Tu souhaites afficher chaque note dans un élément `li`.

Sans boucle, tu devrais répéter les mêmes instructions plusieurs fois.

Avec `forEach()`, tu peux parcourir automatiquement les éléments du tableau et créer un `li` pour chaque valeur.

### 5.2. Exemple complet

HTML :

```
<ul id="grades"></ul>
```

JavaScript :

```
const notes = [12, 8, 15, 9, 18];

const grades = document.getElementById("grades");

notes.forEach((opt) => {

    const li = document.createElement("li");

    li.textContent = opt;

    if (opt >= 10) {
        li.classList.add("success");
    } else {
        li.classList.add("danger");
    }

    grades.appendChild(li);

});
```

### 5.3. Comprendre le fonctionnement de forEach()

La méthode `forEach()` parcourt un tableau et exécute une fonction pour chaque élément.

Syntaxe :

```
tableau.forEach((element) => {
    // Instructions
});
```

Tu peux recevoir trois paramètres :

```
tableau.forEach((element, index, array) => {
    // Instructions
});
```

| Paramètre | Signification         |
| --------- | --------------------- |
| `element` | Valeur actuelle       |
| `index`   | Position de l'élément |
| `array`   | Tableau original      |

Exemple :

```
const fruits = ["Pomme", "Banane", "Orange"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Résultat :

```
0 Pomme
1 Banane
2 Orange
```

Attention : les index commencent à zéro, pas à un.

### 5.4. Les différents types de boucles

Tu peux utiliser plusieurs solutions pour générer une liste.

| Méthode     | Particularité                                            |
| ----------- | -------------------------------------------------------- |
| `for`       | Contrôle complet de la boucle                            |
| `for...of`  | Parcourt directement les valeurs                         |
| `forEach()` | Exécute une fonction pour chaque élément                 |
| `map()`     | Transforme chaque élément et retourne un nouveau tableau |

Exemple avec `for...of` :

```
for (const note of notes) {
    console.log(note);
}
```

Exemple avec `forEach()` :

```
notes.forEach((note) => {
    console.log(note);
});
```

Attention à la différence entre `map()` et `forEach()` :

- `forEach()` sert principalement à exécuter une action sur chaque élément.
- `map()` sert à créer un nouveau tableau à partir du tableau original.

Par exemple, transformer les notes en messages :

```
const messages = notes.map((note) => {
    return `Note : ${note}`;
});
```

`messages` contient un nouveau tableau de chaînes de caractères.

### 5.5. Cas particuliers

- Tableau vide : aucune itération, aucun élément créé.
- Un seul élément : un seul `li`.
- Valeur `0` : elle est affichée normalement.
- Valeur `null` : attention, elle peut être affichée sous forme de texte `null`.
- Valeurs négatives : elles sont traitées comme des nombres ordinaires, sauf si tu ajoutes une condition.

### 5.6. Ajouter les éléments avec DocumentFragment

Tu connais déjà `DocumentFragment`. Ici, il devient très utile.

Au lieu d'ajouter chaque `li` directement à la liste, tu peux :

1. Créer un fragment.
2. Créer chaque `li`.
3. Ajouter chaque `li` au fragment.
4. Ajouter le fragment à la liste à la fin.

```
const notes = [12, 8, 15, 9, 18];

const grades = document.getElementById("grades");

const fragment = document.createDocumentFragment();

notes.forEach((opt) => {

    const li = document.createElement("li");

    li.textContent = opt;

    fragment.appendChild(li);

});

grades.appendChild(fragment);
```

Le résultat HTML est le même.

[LinkeDOM: A JSDOM Alternative. JSDOM is awesome, but it’s slow at… | by Andrea Giammarchi | Medium](https://images.openai.com/static-rsc-4/L8HSAFNv7EIRMZiUC8pZ5nvzWPR7Ui0ZmcRRnoXWU8NiJIQnFyBzGNO2uaaWZUFsVkxfmXbgoeoUGhcwgpjqtqG8qDbZ9qHRcSeV05x9BKCPrMi5-GLSYJ07Si9CeEWwmNE-sEE2GPnni1mkz5rjzRtprnNqs3l-kr9qiv6VvKI?purpose=inline)

[webreflection.medium.com](https://webreflection.medium.com/linkedom-a-jsdom-alternative-53dd8f699311?utm_source=chatgpt.com)

Important : `DocumentFragment` permet de regrouper les nœuds avant leur insertion. Son avantage de performance n'est pas systématiquement important dans tous les navigateurs ; il est surtout utile pour organiser une insertion groupée.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN+1



## 6. Exercice 4N4 – Construction de structures complexes (Template Literals)

Intermédiaire – Avancé

### Objectif

Apprendre à générer plusieurs éléments HTML en utilisant les chaînes de caractères dynamiques avec les backticks.

### 6.1. C'est quoi Template Literals ?

Les Template Literals sont une fonctionnalité JavaScript qui permet de créer des chaînes de caractères en utilisant les backticks :

```
`Bonjour`
```

Au lieu des guillemets simples ou doubles :

```
"Bonjour"
'Bonjour'
```

Leur grand avantage : elles permettent d'insérer facilement des variables dans une chaîne de caractères.

On appelle cela l'interpolation.

### 6.2. L'interpolation avec `${}`

Exemple :

```
const name = "Aya";

const message = `Bonjour ${name}`;
```

Résultat :

```
Bonjour Aya
```

Explication :

- Les backticks délimitent la chaîne.
- `${}` permet d'insérer une variable ou une expression JavaScript.
- `name` représente la valeur à insérer.

Tu peux également effectuer des calculs :

```
const price = 20;
const quantity = 3;

const total = `Total : ${price * quantity} DH`;
```

Résultat :

```
Total : 60 DH
```

### 6.3. Générer du HTML avec Template Literals

Imaginons que tu veuilles créer une carte produit.

```
const product = {
    name: "Cappuccino",
    price: 25,
    description: "Café avec mousse de lait"
};

const container = document.getElementById("products");

container.innerHTML = `
    <div class="card">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>${product.price} DH</span>
    </div>
`;
```

Résultat HTML :

```
<div class="card">
    <h2>Cappuccino</h2>
    <p>Café avec mousse de lait</p>
    <span>25 DH</span>
</div>
```

### 6.4. Générer plusieurs cartes avec map()

Maintenant, imaginons que tu as plusieurs produits :

```
const products = [
    {
        name: "Espresso",
        price: 18
    },
    {
        name: "Latte",
        price: 25
    },
    {
        name: "Cappuccino",
        price: 22
    }
];
```

On peut transformer chaque produit en une structure HTML.

```
const html = products.map((product) => {

    return `
        <div class="card">
            <h2>${product.name}</h2>
            <p>${product.price} DH</p>
        </div>
    `;

}).join("");

container.innerHTML = html;
```

### 6.5. Comprendre map() et join()

Ces deux méthodes sont importantes dans la génération dynamique.

Première méthode : `map()`

Elle transforme chaque produit en chaîne HTML.

Exemple conceptuel :

| Produit    | Résultat de map()           |
| ---------- | --------------------------- |
| Espresso   | HTML de la carte Espresso   |
| Latte      | HTML de la carte Latte      |
| Cappuccino | HTML de la carte Cappuccino |

Le résultat de `map()` est un tableau.

Deuxième méthode : `join("")`

Elle rassemble tous les éléments du tableau dans une seule chaîne de caractères.

Sans `join("")` :

```
[
    "<div>Espresso</div>",
    "<div>Latte</div>"
]
```

Avec `join("")` :

```
<div>Espresso</div><div>Latte</div>
```

Pourquoi utiliser une chaîne vide `""` ?

Parce qu'on veut coller les morceaux HTML sans ajouter de séparateur entre eux.

### 6.6. Comparaison des deux approches

| createElement + appendChild                | Template Literals + innerHTML                    |
| ------------------------------------------ | ------------------------------------------------ |
| Création d'éléments DOM                    | Construction d'une chaîne HTML                   |
| Ajout des enfants séparément               | Insertion d'une structure HTML complète          |
| Plus de lignes de code                     | Souvent plus concis                              |
| Pratique pour les événements individuels   | Pratique pour générer des structures répétitives |
| `textContent` protège le texte utilisateur | Attention aux injections HTML                    |

Sécurité importante

N'utilise pas directement les données saisies par un utilisateur dans `innerHTML`.

Par exemple, si un utilisateur saisit du HTML ou du JavaScript malveillant, l'insertion directe peut entraîner une faille XSS.

Pour du contenu utilisateur, privilégie `createElement()` et `textContent`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN+1



### 6.7. Autre possibilité : les balises HTML multilignes

Les Template Literals permettent aussi de construire facilement des structures imbriquées :

```
const html = `
    <article class="product">
        <header>
            <h2>Café Latte</h2>
        </header>

        <div class="details">
            <p>Un café délicieux</p>
            <span>25 DH</span>
        </div>

        <footer>
            <button>Ajouter</button>
        </footer>
    </article>
`;
```

Tu peux ainsi représenter des structures complexes sans multiplier les appels à `createElement()`.

## 7. Exercice 4N5 – Optimisation avec DocumentFragment

Intermédiaire – Avancé

### Objectif

Comprendre comment préparer plusieurs éléments avant de les insérer dans le DOM.

### 7.1. Le problème à résoudre

Imagine que tu dois afficher 1 000 produits.

Une première approche consiste à créer les éléments et à les ajouter directement dans le conteneur à chaque itération.

```
products.forEach((product) => {

    const card = document.createElement("div");

    card.textContent = product.name;

    container.appendChild(card);

});
```

Une deuxième approche consiste à utiliser `DocumentFragment`.

### 7.2. Comment fonctionne DocumentFragment ?

C'est un objet DOM temporaire qui peut contenir plusieurs éléments.

Il ne fait pas partie de l'arbre DOM principal tant que tu ne l'insères pas.

Sa création :

```
const fragment = document.createDocumentFragment();
```

Tu peux ensuite lui ajouter des éléments :

```
fragment.appendChild(card);
```

Et finalement insérer le contenu du fragment :

```
container.appendChild(fragment);
```

### 7.3. Exemple complet

```
const products = [
    { name: "Espresso", price: 18 },
    { name: "Latte", price: 25 },
    { name: "Cappuccino", price: 22 }
];

const container = document.getElementById("products");

const fragment = document.createDocumentFragment();

products.forEach((product) => {

    const card = document.createElement("div");

    const title = document.createElement("h2");

    const price = document.createElement("p");

    title.textContent = product.name;

    price.textContent = `${product.price} DH`;

    card.appendChild(title);

    card.appendChild(price);

    fragment.appendChild(card);

});

container.appendChild(fragment);
```

### 7.4. Comprendre l'ordre des opérations

| Étape | Opération                        | Résultat                       |
| ----- | -------------------------------- | ------------------------------ |
| 1     | `createDocumentFragment()`       | Création du fragment           |
| 2     | `createElement()`                | Création des éléments          |
| 3     | `textContent`                    | Ajout du contenu               |
| 4     | `appendChild()` sur la carte     | Construction de la carte       |
| 5     | `appendChild()` sur le fragment  | Regroupement des cartes        |
| 6     | `appendChild()` sur le container | Insertion de toutes les cartes |

### 7.5. Que devient le fragment après l'insertion ?

C'est un point très important.

Avant :

```
fragment
   ├── card 1
   ├── card 2
   └── card 3
```

Après :

```
container
   ├── card 1
   ├── card 2
   └── card 3
```

Le fragment devient vide parce que ses enfants sont déplacés dans le conteneur.

Il ne faut pas confondre cela avec une copie : les éléments sont déplacés, pas clonés.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN+1



### 7.6. DocumentFragment ou innerHTML ?

| Critère                   | DocumentFragment             | innerHTML                                              |
| ------------------------- | ---------------------------- | ------------------------------------------------------ |
| Type                      | Objet DOM                    | Chaîne HTML                                            |
| Création                  | `createElement()`            | Template Literals                                      |
| Insertion                 | `appendChild()`              | Affectation à `innerHTML`                              |
| Sécurité                  | Bon choix avec `textContent` | Attention au contenu non fiable                        |
| Manipulation individuelle | Très pratique                | Nécessite de sélectionner les éléments après insertion |

Important : DocumentFragment n'est pas automatiquement plus rapide dans toutes les situations. Son intérêt est surtout de construire une collection de nœuds avant de l'insérer. Pour quelques éléments, une insertion directe est parfaitement acceptable.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN



## 8. Complément indispensable : maîtriser les quatre opérations CRUD

Maintenant que tu sais créer des éléments, il faut comprendre comment les gérer après leur création.

### C – Create : créer

Méthodes principales :

```
document.createElement("div");
```

```
parent.appendChild(child);
```

### R – Read : lire

On récupère les éléments existants :

```
const title = document.querySelector("h1");
```

Lire leur contenu :

```
console.log(title.textContent);
```

Lire leurs attributs :

```
console.log(title.getAttribute("class"));
```

### U – Update : modifier

Modifier le texte :

```
title.textContent = "Nouveau titre";
```

Modifier une classe :

```
title.classList.add("active");
```

Modifier un attribut :

```
image.setAttribute("src", "new-image.jpg");
```

Remplacer un élément :

```
oldElement.replaceWith(newElement);
```

### D – Delete : supprimer

Supprimer directement :

```
element.remove();
```

Ou à travers le parent :

```
parent.removeChild(element);
```

### Tableau récapitulatif CRUD

| Opération | Méthodes                                                  |
| --------- | --------------------------------------------------------- |
| Create    | `createElement()`, `appendChild()`, `append()`            |
| Read      | `querySelector()`, `getElementById()`, `textContent`      |
| Update    | `textContent`, `innerHTML`, `classList`, `setAttribute()` |
| Delete    | `remove()`, `removeChild()`                               |

## 9. Les méthodes supplémentaires à connaître

Ces méthodes complètent les cinq exercices et te seront utiles dans les projets réels.

| Méthode          | Fonction                                 |
| ---------------- | ---------------------------------------- |
| `append()`       | Ajoute un ou plusieurs éléments à la fin |
| `prepend()`      | Ajoute au début                          |
| `before()`       | Ajoute avant un élément                  |
| `after()`        | Ajoute après un élément                  |
| `replaceWith()`  | Remplace un élément                      |
| `remove()`       | Supprime un élément                      |
| `cloneNode()`    | Copie un élément                         |
| `insertBefore()` | Insère un enfant avant un autre enfant   |
| `replaceChild()` | Remplace un enfant dans son parent       |

### Exemple : append() vs appendChild()

```
container.append("Bonjour");

container.appendChild(p);
```

La différence :

- `append()` accepte du texte et plusieurs nœuds.
- `appendChild()` accepte un seul nœud DOM et retourne le nœud ajouté.

### Exemple : cloneNode()

```
const original = document.querySelector(".card");

const copie = original.cloneNode(true);

container.appendChild(copie);
```

Deux possibilités :

```
original.cloneNode(false);
```

Copie uniquement l'élément, sans ses enfants.

```
original.cloneNode(true);
```

Copie l'élément avec tous ses descendants.

Attention : `cloneNode()` ne copie pas les événements ajoutés avec `addEventListener()`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN+1



## 10. Les erreurs fréquentes à éviter

| Erreur                                            | Pourquoi ?                        | Correction                                 |
| ------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| `grades.createElement("li")`                      | Mauvais objet                     | `document.createElement("li")`             |
| `li.textContent(opt)`                             | Propriété utilisée comme fonction | `li.textContent = opt`                     |
| `grades.appendChild("Bonjour")`                   | Une chaîne n'est pas un nœud      | Utiliser `append()` ou créer un nœud texte |
| Oublier `appendChild()`                           | L'élément reste hors du document  | L'ajouter au parent                        |
| Créer `li` avant la boucle                        | On réutilise le même élément      | Créer un nouveau `li` à chaque itération   |
| Utiliser `innerHTML` avec des données non fiables | Risque XSS                        | Utiliser `textContent`                     |
| Utiliser le même ID sur plusieurs cartes          | Un ID doit être unique            | Utiliser des classes                       |

Une autre erreur très fréquente :

```
container.innerHTML += "<p>Bonjour</p>";
```

Cette instruction peut reconstruire le contenu HTML existant et faire perdre les événements attachés aux anciens éléments.

Privilégie les méthodes DOM lorsque tu veux conserver et manipuler les éléments existants.

## 11. Mini-projet : Gestion dynamique des produits

Application pratique

[markXpand - AI Marketing Platform | Launch Ads on Every Channel](https://images.openai.com/static-rsc-4/AoSx0uFs5ub6tqhOcSmqkEuHeCLroncJ0VM7krgPCf571g6p_TrLiWqsM09EL96sQW8A0agBfvVkDK2TKW5IEGRexsE7rzKGvply1CXfaED4CDkzinME6w_uqnbS2dHKD_X6LgYZk04SzS_qj0YFNaokLAbtj5k9tD2RZetkjlA?purpose=inline)

[markxpand.com](https://markxpand.com/?utm_source=chatgpt.com)

Maintenant, tu vas réunir les notions des cinq exercices dans un seul projet.

Objectif : créer une petite application de gestion des produits d'un café.

Tu disposes de ces données :

```
const products = [
    { id: 1, name: "Espresso", price: 18 },
    { id: 2, name: "Latte", price: 25 },
    { id: 3, name: "Cappuccino", price: 22 }
];
```

Fonctionnalités demandées :

1. Afficher tous les produits dans des cartes HTML.
2. Créer les cartes dynamiquement.
3. Afficher le nom et le prix.
4. Ajouter une classe CSS selon le prix.
5. Ajouter un bouton Supprimer pour chaque produit.
6. Ajouter un bouton Modifier pour changer son nom.
7. Utiliser `DocumentFragment` pour construire les cartes.
8. Utiliser les événements pour rendre les boutons interactifs.

Notions mobilisées : `createElement`, `textContent`, `appendChild`, `classList`, `forEach`, `map`, `DocumentFragment`, `dataset`, `addEventListener`, `remove`, `textContent`.

## 12. Exercices pour vérifier tes connaissances

Je te conseille de les faire sans regarder les exemples du cours.

Progression des exercices

0/8 terminés

1\. Créer un paragraphe

Facile · Créer un p avec createElement, lui donner un texte et l'ajouter dans un div.

2\. Créer une liste

Facile · À partir du tableau [10, 15, 8, 20], générer quatre éléments li.

3\. Ajouter une classe

Facile · Ajouter success aux notes supérieures ou égales à 10 et danger aux autres.

4\. Créer une carte produit

Intermédiaire · Créer une carte contenant un titre, un prix, une image et un bouton.

5\. Génération avec map()

Intermédiaire · Transformer un tableau d'objets en structures HTML avec map et join.

6\. Utiliser DocumentFragment

Intermédiaire · Générer une liste de 20 éléments et insérer le fragment une seule fois.

7\. Gestion CRUD

Avancé · Créer une liste de produits avec ajout, lecture, modification et suppression.

8\. Mini-projet

Avancé · Construire une interface complète de gestion de produits avec événements et dataset.

## 13. Fiche de révision – À mémoriser

| Ce que tu veux faire            | Méthode                                      |
| ------------------------------- | -------------------------------------------- |
| Créer un élément                | `document.createElement()`                   |
| Ajouter du texte                | `textContent`                                |
| Ajouter du HTML                 | `innerHTML`                                  |
| Ajouter un attribut             | `setAttribute()`                             |
| Ajouter une classe              | `classList.add()`                            |
| Ajouter à la fin                | `appendChild()`                              |
| Ajouter au début                | `prepend()`                                  |
| Parcourir un tableau            | `forEach()`                                  |
| Transformer un tableau          | `map()`                                      |
| Rassembler des chaînes          | `join()`                                     |
| Créer une collection temporaire | `createDocumentFragment()`                   |
| Supprimer                       | `remove()`                                   |
| Modifier                        | `textContent`, `classList`, `setAttribute()` |
| Copier                          | `cloneNode()`                                |

## 14. Documentation officielle pour approfondir

- [MDN – Building and updating the DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree?utm_source=chatgpt.com) : création, insertion, modification et suppression.
- [MDN – createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement?utm_source=chatgpt.com) : création des éléments.
- [MDN – appendChild()](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild?utm_source=chatgpt.com) : insertion dans le DOM.
- [MDN – DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment?utm_source=chatgpt.com) : création et insertion groupée.

Mon conseil pour apprendre ce chapitre :

Ne commence pas directement par `map()`, `innerHTML` ou `DocumentFragment`.

Maîtrise d'abord cette logique :

1. Sélectionner le parent.
2. Créer l'enfant.
3. Ajouter son contenu.
4. Ajouter ses classes et attributs.
5. Insérer l'enfant dans le parent.

Quand tu maîtrises ces cinq étapes, la génération dynamique devient beaucoup plus facile. Et surtout, tu pourras construire seule les cartes produits, les listes, les paniers et les interfaces de tes projets JavaScript.