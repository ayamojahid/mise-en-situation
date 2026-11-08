# DOCUMENTATION – CONCEPT 1 : AFFICHAGE ET SÉLECTION DU DOM

## 1. Introduction : qu'est-ce que le DOM ?

Le DOM (*Document Object Model*) est une représentation de la page HTML sous forme d'objets que JavaScript peut manipuler.

Grâce au DOM, JavaScript peut :
- Sélectionner des éléments HTML.
- Lire leur contenu.
- Modifier leur texte.
- Modifier leurs attributs.
- Ajouter ou supprimer des éléments.
- Injecter des données provenant de variables, de tableaux ou d'objets JavaScript.

### Exemple HTML

```html
<h1 id="titre">Bonjour</h1>
<p class="description">Bienvenue</p>
```

JavaScript peut sélectionner ces éléments et modifier leur contenu.

**Définition : l'injection de données**

L'injection de données consiste à prendre des informations stockées dans JavaScript (variable, objet ou tableau) et à les afficher dans des éléments HTML.

---

# 2. EX1N1 – Injection d'une variable simple

### A. Le principe

On possède une variable JavaScript et on souhaite afficher sa valeur dans une balise HTML.

HTML :

```html
<h1 id="titre"></h1>
```

JavaScript :

```javascript
let nom = "Aya";

const titre = document.querySelector("#titre");

titre.textContent = nom;
```

Résultat dans la page :

```text
Aya
```

### B. Comprendre chaque élément

- `document` : représente le document HTML.
- `querySelector()` : permet de sélectionner un élément HTML.
- `#titre` : sélectionne l'élément qui possède l'identifiant `titre`.
- `textContent` : permet de lire ou modifier le texte d'un élément.
- `nom` : contient la valeur à injecter.

### C. Qu'est-ce que retourne `querySelector()` ?

`document.querySelector("#titre")` retourne :

- Un objet représentant le premier élément HTML correspondant au sélecteur.
- `null` si aucun élément ne correspond.

**Attention :** `querySelector()` retourne un seul élément, même si plusieurs éléments correspondent au sélecteur.

### D. `textContent` : lire et modifier le texte

Pour lire le texte :

```javascript
const texte = titre.textContent;
console.log(texte);
```

Pour modifier le texte :

```javascript
titre.textContent = "Bienvenue";
```

`textContent` retourne une chaîne de caractères lorsqu'on le lit.

**À retenir :** `textContent` manipule le texte, pas une structure HTML.

---

# 3. EX1N2 – Hydratation multiple depuis un objet

### A. Le principe

Au lieu d'avoir une seule variable, on peut avoir un objet contenant plusieurs informations.

Un objet JavaScript permet de regrouper plusieurs propriétés dans une seule structure.

Exemple :

```javascript
const utilisateur = {
    nom: "Aya",
    email: "aya@gmail.com",
    role: "Développeuse"
};
```

Chaque information possède :
- Une clé : `nom`, `email`, `role`.
- Une valeur : `"Aya"`, `"aya@gmail.com"`, `"Développeuse"`.

### B. Le HTML

```html
<article class="card">
    <h2 class="card-title"></h2>
    <p class="card-email"></p>
    <p class="card-role"></p>
</article>
```

### C. Le principe de l'injection

On sélectionne chaque élément HTML et on lui affecte la propriété correspondante de l'objet.

```javascript
const card = document.querySelector(".card");

card.querySelector(".card-title").textContent = utilisateur.nom;

card.querySelector(".card-email").textContent = utilisateur.email;

card.querySelector(".card-role").textContent = utilisateur.role;
```

### D. Pourquoi utiliser `card.querySelector()` ?

Il existe deux possibilités :

1. `document.querySelector()` : recherche dans tout le document.
2. `card.querySelector()` : recherche uniquement à l'intérieur de la carte sélectionnée.

Cette deuxième méthode permet de travailler dans un contexte précis.

### E. Différence entre un objet et un élément HTML

| Objet JavaScript | Élément HTML |
|---|---|
| `utilisateur` | `card` |
| `utilisateur.nom` | `card.querySelector(".card-title")` |
| Contient des données | Représente un élément de la page |
| On lit ses propriétés | On peut modifier son contenu |

**À retenir :** l'objet contient les données, et le DOM permet de les afficher.

---

# 4. EX1N3 – Ciblage contextuel (sélection depuis le parent)

### A. Le principe

Imagine que tu possèdes plusieurs cartes HTML.

Chaque carte contient son propre titre, son email et son rôle.

Si tu sélectionnes directement `.card-title` depuis `document`, tu récupères uniquement le premier titre trouvé.

Mais si tu sélectionnes d'abord une carte, puis son titre, tu peux travailler uniquement à l'intérieur de cette carte.

### B. Exemple HTML

```html
<article class="card">
    <h2 class="card-title">Utilisateur 1</h2>
    <p class="card-email">user1@gmail.com</p>
</article>

<article class="card">
    <h2 class="card-title">Utilisateur 2</h2>
    <p class="card-email">user2@gmail.com</p>
</article>
```

### C. Comprendre le ciblage contextuel

```javascript
const card = document.querySelector(".card");

const titre = card.querySelector(".card-title");
```

La première instruction sélectionne la première carte.

La deuxième recherche le titre uniquement dans cette carte.

### D. Pourquoi c'est important ?

Imagine que tu as 10 cartes avec chacune une classe `.card-title`.

Si tu fais :

```javascript
document.querySelector(".card-title");
```

Tu obtiens uniquement le premier titre.

Mais si tu fais :

```javascript
card.querySelector(".card-title");
```

Tu recherches le titre dans la carte contenue dans `card`.

### E. Différence entre les deux méthodes

| Méthode | Zone de recherche |
|---|---|
| `document.querySelector()` | Tout le document |
| `parent.querySelector()` | À l'intérieur du parent |
| `document.querySelectorAll()` | Tous les éléments correspondants dans le document |
| `parent.querySelectorAll()` | Tous les éléments correspondants dans le parent |

**À retenir :** le ciblage contextuel permet d'éviter de modifier le mauvais élément HTML.

---

# 5. EX1N4 – Peuplement de structures statiques (boucle et index)

### A. Le principe

Imagine que tu as :
- Un tableau JavaScript contenant 3 utilisateurs.
- Trois cartes HTML déjà créées.

Tu souhaites afficher chaque utilisateur dans sa carte correspondante.

Sans boucle, tu devrais répéter les mêmes instructions plusieurs fois.

La boucle permet d'automatiser ce travail.

### B. Exemple de tableau d'objets

```javascript
const users = [
    {
        nom: "Aya",
        email: "aya@gmail.com"
    },
    {
        nom: "Sara",
        email: "sara@gmail.com"
    },
    {
        nom: "Salma",
        email: "salma@gmail.com"
    }
];
```

### C. Comprendre `forEach()`

`forEach()` est une méthode qui permet de parcourir les éléments d'un tableau.

Syntaxe :

```javascript
tableau.forEach((element, index) => {
    // Instructions
});
```

Les deux paramètres :

- `element` : représente l'élément actuel du tableau.
- `index` : représente sa position dans le tableau.

**Important :** `index` commence à 0.

Exemple :

| Index | Utilisateur |
|---:|---|
| 0 | Aya |
| 1 | Sara |
| 2 | Salma |

Tu peux aussi utiliser `forEach()` sans index :

```javascript
users.forEach((user) => {
    console.log(user.nom);
});
```

L'index est facultatif. Tu l'utilises uniquement lorsque tu as besoin de connaître la position de l'élément.

### D. Associer les données aux cartes avec l'index

HTML :

```html
<article class="card">
    <h2 class="card-title"></h2>
</article>

<article class="card">
    <h2 class="card-title"></h2>
</article>

<article class="card">
    <h2 class="card-title"></h2>
</article>
```

Sélection des cartes :

```javascript
const cards = document.querySelectorAll(".card");
```

Le principe consiste à parcourir le tableau `users` et à utiliser le même index pour récupérer la carte correspondante.

Exemple de raisonnement :

- `users[0]` correspond à `cards[0]`.
- `users[1]` correspond à `cards[1]`.
- `users[2]` correspond à `cards[2]`.

**Attention :** cette technique suppose que l'ordre des utilisateurs et celui des cartes HTML sont identiques.

### E. Que retourne `querySelectorAll()` ?

`document.querySelectorAll(".card")` retourne une **NodeList** contenant les éléments HTML qui correspondent au sélecteur.

Une NodeList :

- Peut contenir plusieurs éléments.
- Possède des indices qui commencent à 0.
- Possède une propriété `length`.
- Permet d'accéder à un élément avec `[index]`.
- Possède une méthode `forEach()`.

Exemple :

```javascript
cards[0];
cards[1];
cards.length;
```

**À retenir :** `querySelectorAll()` retourne une liste d'éléments HTML, tandis que `querySelector()` retourne un seul élément.

---

# 6. EX1N5 – Mapping avancé avec les attributs data-*

### A. Le principe

Dans l'exercice précédent, on associait les utilisateurs et les cartes grâce à leur position (`index`).

Mais imagine que l'ordre des cartes HTML change.

L'utilisateur Aya se trouve dans la troisième carte au lieu de la première.

L'index ne permet plus de retrouver correctement sa carte.

La solution : utiliser les attributs personnalisés `data-*`.

### B. Qu'est-ce qu'un attribut data-* ?

Les attributs `data-*` permettent de stocker des informations personnalisées dans les éléments HTML.

Exemple :

```html
<article class="card" data-user-id="3">
    <h2 class="card-title"></h2>
</article>
```

Ici :

- `class="card"` identifie la classe CSS.
- `data-user-id="3"` stocke l'identifiant de l'utilisateur.
- `3` est la valeur de cet attribut.

On peut créer différents attributs :

```html
data-user-id="3"
data-product-id="10"
data-category="coffee"
```

### C. Récupérer un attribut avec `getAttribute()`

Syntaxe :

```javascript
element.getAttribute("data-user-id");
```

Cette méthode retourne la valeur de l'attribut sous forme de chaîne de caractères.

Exemple :

```javascript
const id = card.getAttribute("data-user-id");
```

Résultat : `"3"`.

Si l'attribut n'existe pas, la méthode retourne `null`.

### D. Récupérer un attribut avec `dataset`

Il existe une autre méthode : `dataset`.

Exemple :

```javascript
const id = card.dataset.userId;
```

Résultat : `"3"`.

`dataset` permet d'accéder directement aux attributs `data-*`.

Attention à la transformation des noms :

| Attribut HTML | Accès JavaScript |
|---|---|
| `data-user-id` | `dataset.userId` |
| `data-product-id` | `dataset.productId` |
| `data-category` | `dataset.category` |
| `data-first-name` | `dataset.firstName` |

Les tirets disparaissent et la lettre qui suit chaque tiret devient une majuscule.

### E. Différence entre `getAttribute()` et `dataset`

| `getAttribute()` | `dataset` |
|---|---|
| Méthode | Propriété |
| Reçoit le nom complet de l'attribut | Utilise le nom transformé en camelCase |
| Fonctionne avec différents attributs HTML | Fonctionne avec les attributs `data-*` |
| Retourne une chaîne ou `null` | Retourne la valeur sous forme de chaîne ou `undefined` si elle n'existe pas |

Exemple :

```javascript
card.getAttribute("data-user-id");
card.dataset.userId;
```

Les deux permettent de récupérer la même valeur.

### F. Sélectionner un élément grâce à un attribut data-*

On peut aussi utiliser un attribut `data-*` directement dans `querySelector()`.

Syntaxe générale :

```javascript
document.querySelector('[data-user-id="3"]');
```

Cette instruction recherche le premier élément qui possède `data-user-id="3"`.

Mais on peut rendre la recherche dynamique en utilisant une variable JavaScript.

C'est précisément ce que tu as travaillé dans ton exercice !

### G. Pourquoi utiliser les data-* plutôt que l'index ?

| Avec index | Avec data-* |
|---|---|
| On utilise la position de l'élément | On utilise son identifiant |
| Dépend de l'ordre des cartes | Ne dépend pas de l'ordre |
| Adapté lorsque les deux listes sont alignées | Adapté lorsque les éléments doivent être associés par ID |
| Exemple : `cards[0]` | Exemple : `[data-user-id="3"]` |

**À retenir :** l'index répond à la question « Où se trouve l'élément ? », tandis que `data-user-id` répond à la question « À quel utilisateur appartient cet élément ? ».

---

# 7. LES MÉTHODES ET PROPRIÉTÉS À MAÎTRISER

Voici les principales méthodes et propriétés rencontrées dans ce concept.

| Méthode / propriété | Rôle | Ce qu'elle retourne |
|---|---|---|
| `document` | Représente le document HTML | Objet Document |
| `querySelector()` | Sélectionne le premier élément correspondant | Élément HTML ou `null` |
| `querySelectorAll()` | Sélectionne tous les éléments correspondants | NodeList |
| `getElementById()` | Sélectionne un élément par son ID | Élément HTML ou `null` |
| `getAttribute()` | Lit un attribut HTML | Chaîne ou `null` |
| `dataset` | Accède aux attributs `data-*` | DOMStringMap |
| `textContent` | Lit ou modifie le texte | Chaîne lorsqu'on le lit |
| `innerHTML` | Lit ou modifie le contenu HTML | Chaîne lorsqu'on le lit |
| `forEach()` | Parcourt les éléments d'un tableau ou d'une NodeList | `undefined` |
| `length` | Donne le nombre d'éléments | Nombre |
| `[index]` | Accède à un élément par sa position | Élément ou valeur correspondante |

### Attention : `textContent` et `innerHTML`

Ces deux propriétés ne font pas la même chose.

Avec `textContent`, le contenu est traité comme du texte.

Avec `innerHTML`, le navigateur interprète le contenu comme du HTML.

Pour afficher simplement le nom ou l'email d'un utilisateur, privilégie `textContent`.

---

# 8. LES DIFFÉRENCES IMPORTANTES À NE PAS CONFONDRE

## A. `querySelector()` et `querySelectorAll()`

- `querySelector()` : un seul élément, le premier correspondant.
- `querySelectorAll()` : tous les éléments correspondants dans une NodeList.

## B. `getElementById()` et `getAttribute()`

- `getElementById()` : recherche un élément par son identifiant HTML.
- `getAttribute()` : récupère la valeur d'un attribut sur un élément déjà sélectionné.

Ce ne sont pas deux méthodes interchangeables.

## C. `dataset` et `textContent`

- `dataset` : récupère les informations stockées dans les attributs `data-*`.
- `textContent` : récupère le texte visible ou textuel contenu dans un élément.

## D. `forEach()` et `index`

- `forEach()` : permet de parcourir une collection.
- `index` : représente la position de l'élément actuel.
- On peut utiliser `forEach()` sans index.

## E. `document.querySelector()` et `parent.querySelector()`

- Le premier recherche dans tout le document.
- Le deuxième recherche uniquement à l'intérieur de l'élément parent.

---

# 9. PETIT EXEMPLE FINAL : UTILISER LES CONCEPTS ENSEMBLE

### Situation

Tu as un tableau de deux utilisateurs :

```javascript
const users = [
    {
        id: 1,
        nom: "Aya",
        email: "aya@gmail.com"
    },
    {
        id: 2,
        nom: "Sara",
        email: "sara@gmail.com"
    }
];
```

Et deux cartes HTML :

```html
<article class="card" data-user-id="2">
    <h2 class="card-title"></h2>
    <p class="card-email"></p>
</article>

<article class="card" data-user-id="1">
    <h2 class="card-title"></h2>
    <p class="card-email"></p>
</article>
```

### Questions pour comprendre le fonctionnement

1. Pourquoi ne peut-on pas utiliser directement `index` pour associer les cartes et les utilisateurs ?
2. Quelle méthode permet de parcourir le tableau `users` ?
3. Quelle propriété permet de récupérer l'identifiant de l'utilisateur ?
4. Quelle méthode permet de retrouver la carte avec `data-user-id` ?
5. Pourquoi utilise-t-on `card.querySelector()` plutôt que `document.querySelector()` pour trouver le titre ?
6. Quelle propriété permet d'injecter le nom et l'email ?

### Le raisonnement attendu

- Parcourir les utilisateurs.
- Récupérer l'ID de chaque utilisateur.
- Chercher la carte qui possède le même `data-user-id`.
- Sélectionner le titre et l'email dans cette carte.
- Injecter les données de l'utilisateur.

L'ordre des cartes n'a aucune importance puisque l'association se fait grâce à l'identifiant.

---

# 10. RÉSUMÉ GÉNÉRAL – CONCEPT 1

| Exercice | Ce que tu apprends | Technique principale |
|---|---|---|
| EX1N1 | Injecter une variable | `querySelector()` + `textContent` |
| EX1N2 | Injecter plusieurs propriétés d'un objet | `objet.propriete` |
| EX1N3 | Sélectionner un élément depuis son parent | `parent.querySelector()` |
| EX1N4 | Injecter plusieurs objets dans plusieurs cartes | `forEach()` + `index` |
| EX1N5 | Associer les objets et les cartes par identifiant | `data-*` + `querySelector()` |

## Les 5 idées essentielles à retenir

1. **Sélectionner :** trouver l'élément HTML avec `querySelector()`.
2. **Lire :** récupérer les informations avec `textContent`, `getAttribute()` ou `dataset`.
3. **Injecter :** afficher les données avec `textContent`.
4. **Parcourir :** utiliser `forEach()` pour traiter plusieurs éléments.
5. **Associer :** utiliser l'index si l'ordre correspond, ou un identifiant `data-*` si l'ordre peut changer.

## Mon conseil pour maîtriser ce concept

Ne mémorise pas uniquement les syntaxes. Pour chaque exercice, pose-toi ces quatre questions :

- Quelles sont mes données ? (variable, objet ou tableau)
- Quels éléments HTML dois-je sélectionner ?
- Comment vais-je associer mes données aux éléments ?
- Quelle propriété vais-je utiliser pour afficher les données ?

