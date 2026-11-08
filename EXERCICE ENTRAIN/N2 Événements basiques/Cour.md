# Cours complet — JavaScript : les événements basiques (DOM)



Concept 2

Débutant → Avancé



L'objectif de ce chapitre est de savoir rendre une page Web interactive grâce aux événements JavaScript.

Tu vas apprendre à écouter les actions de l'utilisateur, identifier l'élément concerné, modifier cet élément, faire interagir plusieurs éléments et gérer un état comme un compteur.

Nous allons suivre exactement les cinq exercices de ton programme :

| Exercice | Sujet                                | Ce que tu vas apprendre              |
| -------- | ------------------------------------ | ------------------------------------ |
| ex2n1    | Écouteur d'événement simple          | Détecter une action                  |
| ex2n2    | Altération de l'élément déclencheur  | Modifier l'élément concerné          |
| ex2n3    | Collection d'éléments interactifs    | Gérer plusieurs boutons              |
| ex2n4    | Interaction entre multiples éléments | Faire communiquer plusieurs éléments |
| ex2n5    | Gestion d'état (compteur)            | Conserver et modifier une valeur     |

# Chapitre 1 — Comprendre les événements

## 1.1. Définition

Un événement (Event) est une action qui se produit dans une page Web.

Cette action peut être déclenchée par l'utilisateur ou par le navigateur.

Exemples :

- Cliquer sur un bouton.
- Passer la souris sur une image.
- Écrire dans un champ.
- Envoyer un formulaire.
- Appuyer sur une touche du clavier.

En JavaScript, on peut détecter ces événements et exécuter du code lorsqu'ils se produisent.

## 1.2. Pourquoi utiliser les événements ?

Imagine une page avec un bouton :

```
<button>Afficher un message</button>
```

Sans JavaScript, le bouton est simplement affiché. Il ne réalise aucune action particulière.

Avec JavaScript, tu peux lui demander :

- D'afficher un message.
- De changer son texte.
- De changer sa couleur.
- D'afficher ou masquer un élément.
- D'ajouter un produit au panier.

L'idée principale : attendre une action, puis exécuter une instruction.

En darija : كنستناو المستخدم يدير شي action، ومن بعد JavaScript كينفذ شي حاجة.

## 1.3. Les événements les plus utilisés

| Événement    | Signification             | Exemple                      |
| ------------ | ------------------------- | ---------------------------- |
| `click`      | Clic                      | Cliquer sur un bouton        |
| `dblclick`   | Double-clic               | Double-cliquer sur une image |
| `mouseenter` | Entrée de la souris       | Survoler une carte           |
| `mouseleave` | Sortie de la souris       | Quitter une carte            |
| `mousemove`  | Mouvement de la souris    | Déplacer la souris           |
| `input`      | Modification d'une valeur | Écrire dans un input         |
| `change`     | Changement confirmé       | Choisir une option           |
| `submit`     | Envoi d'un formulaire     | Envoyer une inscription      |
| `keydown`    | Touche enfoncée           | Appuyer sur Entrée           |
| `keyup`      | Touche relâchée           | Relâcher une touche          |

## 1.4. Différence entre les événements de souris

`click`

[Click here button with Cursor icon](https://images.openai.com/static-rsc-4/Undd4wWRbNXNW19XqdtndNMNGlUP_vujaS0TLE8mcP82EWHh94hQvpdtXbFbnVJ_pjS-mqVJoAMZT9-V-_9GIORRiEuEh-CXPpDXUwS-I_L3mYE1syb-IJW-9MRhlWGA3WHxZVnU2ban7m7omSHd7AbgYcS9YRI4tEs2QbQhtyI06U3o68EvPZJ2PqDomTwW?purpose=inline)

L'utilisateur clique sur l'élément.

`mouseenter`

[Subtle Animation designs, themes, templates and downloadable graphic elements on Dribbble](https://images.openai.com/static-rsc-4/udyQSeC6iQPcNic2X-EiHGJiI9Nv-gTAYPUUooit-iipWVES-cRu0LEVTzyKsEFJVBtU8CnOYRZ8rIYeJBUAj4YwzQmTu7EIeKEwksMbFrwNWuKgwpQu5ARsetUFviRYcbQPmAGLLfrbdMk2sGvRaNyapNZjlX07yG5FrssLJSo?purpose=inline)

[dribbble.com](https://dribbble.com/tags/subtle-animation?utm_source=chatgpt.com)

La souris entre dans la zone de l'élément.

`mouseleave`

La souris quitte la zone de l'élément.

Attention à une différence importante :

- `mouseenter` se déclenche quand la souris entre dans un élément.
- `mouseover` peut aussi se déclencher lorsqu'on passe d'un élément parent à un élément enfant à l'intérieur de celui-ci.
- `mouseleave` ne se déclenche pas simplement en passant sur un enfant.

Pour débuter, retiens surtout `mouseenter` et `mouseleave`.

## 1.5. Syntaxe générale d'un événement

```
element.addEventListener("click", function() {
    // Instructions à exécuter
});
```

Décomposons cette syntaxe :

| Partie             | Signification                                |
| ------------------ | -------------------------------------------- |
| `element`          | L'élément HTML concerné                      |
| `addEventListener` | Méthode qui ajoute un écouteur               |
| `"click"`          | Nom de l'événement                           |
| `function()`       | Fonction exécutée lorsque l'événement arrive |
| `{ }`              | Instructions à exécuter                      |

Un écouteur d'événement (event listener) est simplement un mécanisme qui attend qu'un événement se produise.

## 1.6. Comment ça fonctionne ?

Prenons un bouton.

1\. JavaScript sélectionne le bouton

document.querySelector(".btn")

2\. JavaScript installe un écouteur

addEventListener("click", ...)

3\. L'utilisateur clique

L'événement se produit.

4\. La fonction s'exécute

Le code à l'intérieur est exécuté.

Point important : JavaScript n'exécute pas immédiatement les instructions de la fonction. Il attend l'événement.

## 1.7. Exemple simple

HTML :

```
<button id="btn">Clique-moi</button>
```

JavaScript :

```
const bouton = document.querySelector("#btn");

bouton.addEventListener("click", function() {
    console.log("Le bouton a été cliqué !");
});
```

Résultat attendu dans la console :

```
Le bouton a été cliqué !
```

Explication ligne par ligne :

1. `document.querySelector("#btn")` : recherche le bouton qui possède l'identifiant `btn`.
2. `const bouton` : stocke la référence vers cet élément.
3. `addEventListener("click", ...)` : installe un écouteur pour les clics.
4. `function()` : définit les instructions qui seront exécutées.
5. `console.log(...)` : affiche un message dans la console.

Pourquoi utiliser `const` ? Parce que la variable `bouton` garde la même référence à l'élément. Nous n'avons pas besoin de lui affecter un autre élément.

## 1.8. Les variantes de syntaxe

Il existe plusieurs manières d'écrire la fonction :

Avec une fonction classique :

```
bouton.addEventListener("click", function() {
    console.log("Clic !");
});
```

Avec une fonction fléchée :

```
bouton.addEventListener("click", () => {
    console.log("Clic !");
});
```

Avec une fonction déclarée séparément :

```
function afficherMessage() {
    console.log("Clic !");
}

bouton.addEventListener("click", afficherMessage);
```

Dans le dernier cas, on écrit `afficherMessage` sans parenthèses : on transmet la fonction, on ne l'exécute pas immédiatement.

| Écriture          | Utilisation                                    |
| ----------------- | ---------------------------------------------- |
| `function() {}`   | Fonction classique directement dans l'écouteur |
| `() => {}`        | Fonction fléchée, pratique et concise          |
| `afficherMessage` | Fonction définie séparément, réutilisable      |

## 1.9. Les erreurs fréquentes

Erreur 1 : oublier les parenthèses de `addEventListener`

```
bouton.addEventListener;
```

Cette instruction ne fait qu'accéder à la méthode. Elle n'installe aucun écouteur.

Erreur 2 : exécuter la fonction au lieu de la transmettre

```
bouton.addEventListener("click", afficherMessage());
```

Ici, la fonction est appelée immédiatement. Il faut transmettre sa référence :

```
bouton.addEventListener("click", afficherMessage);
```

Erreur 3 : sélectionner un élément inexistant

```
const bouton = document.querySelector(".bouton-inexistant");
bouton.addEventListener("click", afficherMessage);
```

Si aucun élément ne correspond, `querySelector()` renvoie `null`. Appeler `addEventListener` sur `null` provoque une erreur.

On peut vérifier :

```
if (bouton) {
    bouton.addEventListener("click", afficherMessage);
}
```

Erreur 4 : mauvais nom d'événement

```
bouton.addEventListener("clic", afficherMessage);
```

Le nom correct est `"click"`.

## 1.10. Bonnes pratiques

- Utiliser des noms de variables explicites : `bouton`, `formulaire`, `champEmail`.
- Préférer `addEventListener()` pour ajouter des événements.
- Séparer les fonctions lorsqu'elles sont longues ou réutilisées.
- Vérifier que les éléments existent avant de leur ajouter un écouteur si nécessaire.
- Charger le JavaScript après le HTML, par exemple avec `defer`.

```
<script src="script.js" defer></script>
```

`defer` permet au navigateur de terminer l'analyse du HTML avant d'exécuter le fichier JavaScript.

## 1.11. Exemple réel : afficher un message

Sur un site Web, un utilisateur clique sur « Ajouter au panier ». On peut afficher une confirmation :

```
<button id="ajouter">Ajouter au panier</button>
<p id="message"></p>
```

```
const bouton = document.querySelector("#ajouter");
const message = document.querySelector("#message");

bouton.addEventListener("click", function() {
    message.textContent = "Produit ajouté au panier !";
});
```

Tu retrouves ici deux éléments différents :

- Le bouton déclenche l'événement.
- Le paragraphe reçoit le message.

C'est une première forme d'interaction entre éléments, que nous étudierons plus loin.

## 1.12. Exercices — Chapitre 1

Essaie de les résoudre seule. Je ne donne pas les solutions maintenant.

Facile

1. Crée un bouton HTML. Lorsqu'on clique dessus, affiche `Bonjour !` dans la console.
2. Crée un bouton dont le texte devient `Survol détecté` lorsque la souris entre dessus (`mouseenter`).
3. Crée un paragraphe et un bouton. Au clic, affiche `Bienvenue` dans le paragraphe.

Intermédiaire

4. Crée un bouton qui change de texte à chaque clic : `Activer` puis `Désactiver`.
5. Crée une image. Lorsqu'on passe la souris dessus, affiche un message dans la console. Lorsqu'on quitte l'image, affiche un autre message.
6. Crée un champ texte et affiche dans la console chaque caractère saisi avec l'événement `input`.

Avancé

7. Crée un formulaire avec un bouton. Empêche son envoi normal et affiche `Formulaire envoyé !` dans la console.
8. Crée un bouton qui affiche un message uniquement si un paragraphe existe dans la page. Gère le cas où le paragraphe est absent.

# Chapitre 2 — L'objet Event et l'élément déclencheur

Ce chapitre correspond particulièrement à ton exercice ex2n2 : Altération de l'élément déclencheur.

## 2.1. Définition : qu'est-ce que `event` ?

Lorsque tu utilises `addEventListener`, tu peux recevoir un paramètre appelé `event` (ou `e`).

C'est un objet événement qui contient des informations sur l'action qui vient de se produire.

Par exemple :

- Quel événement s'est produit ?
- Quel élément a déclenché l'événement ?
- Sur quel élément l'écouteur est-il installé ?
- Quelle touche a été pressée ?

Exemple :

```
bouton.addEventListener("click", function(event) {
    console.log(event);
});
```

Ici, `event` est un paramètre fourni automatiquement par le navigateur au moment où l'événement se produit.

Tu peux aussi écrire :

```
bouton.addEventListener("click", (e) => {
    console.log(e);
});
```

`event` et `e` sont deux noms possibles pour le même paramètre.

## 2.2. Pourquoi utiliser `event` ?

Imagine que tu as cinq boutons.

Tu veux que chaque bouton change son propre texte lorsqu'on clique dessus.

Comment savoir quel bouton a été cliqué ?

C'est précisément là que l'objet `event` devient intéressant.

## 2.3. Les propriétés importantes

| Propriété                  | Signification                                       |
| -------------------------- | --------------------------------------------------- |
| `event.target`             | L'élément à l'origine de l'événement                |
| `event.currentTarget`      | L'élément sur lequel l'écouteur actuel est installé |
| `event.type`               | Le nom de l'événement                               |
| `event.target.textContent` | Le texte de l'élément déclencheur                   |
| `event.target.id`          | L'identifiant de l'élément déclencheur              |
| `event.target.className`   | Les classes de l'élément déclencheur                |

### Différence entre `target` et `currentTarget`

C'est une différence fondamentale.

HTML :

```
<div id="parent">
    <button>
        <span>Clique ici</span>
    </button>
</div>
```

JavaScript :

```
const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

Si tu cliques sur le texte `Clique ici` :

- `event.target` correspond au `<span>` : c'est l'élément sur lequel tu as réellement cliqué.
- `event.currentTarget` correspond au `<div>` : c'est là où l'écouteur a été installé.

Schéma :

ÉCOUTEUR INSTALLÉ ICI

div#parent — currentTarget

button

span — target (si tu cliques dessus)

À retenir :

- `target` : sur quel élément l'action a commencé ?
- `currentTarget` : sur quel élément l'écouteur est-il en train de fonctionner ?

Si tu installes l'écouteur directement sur le bouton et que tu cliques sur le bouton lui-même, les deux peuvent être identiques.

## 2.4. Modifier l'élément déclencheur

HTML :

```
<button class="btn">Bouton 1</button>
<button class="btn">Bouton 2</button>
<button class="btn">Bouton 3</button>
```

JavaScript :

```
const boutons = document.querySelectorAll(".btn");

boutons.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
        event.currentTarget.textContent = "Cliqué !";
    });
});
```

Résultat :

- Si tu cliques sur Bouton 1, seul Bouton 1 change.
- Si tu cliques sur Bouton 2, seul Bouton 2 change.
- Si tu cliques sur Bouton 3, seul Bouton 3 change.

Pourquoi ?

Parce que `event.currentTarget` représente le bouton sur lequel l'écouteur est installé et dont le clic est actuellement traité.

## 2.5. Fonctionnement étape par étape

1. `querySelectorAll(".btn")` récupère les trois boutons.
2. `forEach()` parcourt chaque bouton.
3. Pour chaque bouton, on installe un écouteur.
4. L'utilisateur clique sur un bouton.
5. Le navigateur déclenche l'événement.
6. Le navigateur transmet l'objet `event` à la fonction.
7. `event.currentTarget` identifie le bouton concerné.
8. `textContent` modifie son texte.

## 2.6. Les variantes

Avec `currentTarget` :

```
event.currentTarget.textContent = "Cliqué !";
```

Avec une variable qui représente le bouton :

```
bouton.textContent = "Cliqué !";
```

Les deux sont valides dans notre exemple : `bouton` représente l'élément sur lequel l'écouteur a été installé.

Avec `target` :

```
event.target.textContent = "Cliqué !";
```

Attention : si le bouton contient un élément enfant et que l'utilisateur clique sur cet enfant, `target` peut être cet enfant, et non le bouton.

Dans ce cas, `currentTarget` est souvent plus adapté.

## 2.7. Les erreurs fréquentes

| Erreur                                                       | Pourquoi c'est problématique ?                  |
| ------------------------------------------------------------ | ----------------------------------------------- |
| Écrire `event` sans le recevoir comme paramètre              | La variable peut être inexistante dans ton code |
| Confondre `target` et `currentTarget`                        | Tu risques de modifier le mauvais élément       |
| Utiliser `target` sans vérifier son type                     | L'élément déclencheur peut être un enfant       |
| Modifier `textContent` en pensant conserver les enfants HTML | Le contenu HTML enfant est remplacé             |

Exemple de dernier cas :

```
<button>
    <span>Ajouter</span>
    <strong>+</strong>
</button>
```

Si tu fais :

```
bouton.textContent = "Ajouté";
```

Le `<span>` et le `<strong>` sont remplacés par le texte `Ajouté`.

## 2.8. Bonnes pratiques

- Utilise `currentTarget` quand tu veux modifier l'élément qui porte l'écouteur.
- Utilise `target` quand tu veux connaître l'élément précis à l'origine de l'événement.
- Nomme ton paramètre `event` ou `e` de façon cohérente.
- Ne suppose pas que `target` est toujours un bouton.

## 2.9. Exemple réel : boutons de produits

Sur une boutique, chaque produit possède son bouton « Ajouter ».

Quand l'utilisateur clique sur un bouton, tu peux modifier uniquement ce bouton :

```
<div class="produit">
    <h3>Cappuccino</h3>
    <button class="ajouter">Ajouter au panier</button>
</div>

<div class="produit">
    <h3>Latte</h3>
    <button class="ajouter">Ajouter au panier</button>
</div>
```

```
const boutons = document.querySelectorAll(".ajouter");

boutons.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
        event.currentTarget.textContent = "Ajouté !";
    });
});
```

Tu peux ensuite utiliser le même événement pour retrouver le produit correspondant et l'ajouter à ton panier.

## 2.10. Exercices — Chapitre 2

Facile

1. Crée deux boutons. Au clic, affiche le texte du bouton cliqué dans la console.
2. Crée un bouton dont le texte change grâce à `event.currentTarget`.
3. Affiche `event.type` dans la console lorsqu'un bouton est cliqué.

Intermédiaire

4. Crée trois boutons. Au clic, le bouton concerné devient `Sélectionné`.
5. Crée un bouton contenant un `<span>`. Clique sur le texte et compare `event.target` et `event.currentTarget`.
6. Crée une carte contenant un titre et un bouton. Au clic sur le bouton, modifie le texte du bouton uniquement.

Avancé

7. Crée quatre cartes produits. Lorsqu'on clique sur une carte, affiche dans la console l'identifiant de la carte à l'aide de `dataset`.
8. Crée une liste de boutons contenant chacun une icône. Fais en sorte que le clic sur l'icône permette quand même de modifier le bouton parent correctement. Essaie de comprendre le rôle de `target` et `currentTarget`.

# Chapitre 3 — Gérer une collection d'éléments interactifs

Ce chapitre correspond à ex2n3 : Gestion d'une collection d'éléments interactifs.

## 3.1. Définition

Une collection est un ensemble de plusieurs éléments.

Par exemple :

```
<button class="btn">Bouton 1</button>
<button class="btn">Bouton 2</button>
<button class="btn">Bouton 3</button>
```

Tu as trois boutons avec la même classe.

Au lieu de sélectionner chaque bouton individuellement, tu peux les récupérer ensemble avec :

```
const boutons = document.querySelectorAll(".btn");
```

La variable `boutons` contient une collection de type NodeList.

## 3.2. Pourquoi utiliser une collection ?

Imagine que tu as 20 boutons.

Sans collection, tu pourrais écrire :

```
const bouton1 = document.querySelector("#btn1");
const bouton2 = document.querySelector("#btn2");
const bouton3 = document.querySelector("#btn3");
```

Et continuer jusqu'à 20.

C'est répétitif et difficile à maintenir.

Avec `querySelectorAll()`, tu sélectionnes les éléments en une seule instruction.

## 3.3. Comprendre `NodeList`

Une `NodeList` est une collection de nœuds du DOM.

Elle permet notamment :

- D'accéder à un élément par son index.
- De connaître le nombre d'éléments.
- De parcourir les éléments avec `forEach()`.

Exemple :

```
const boutons = document.querySelectorAll(".btn");

console.log(boutons.length);
console.log(boutons[0]);
console.log(boutons[1]);
```

Si tu as trois boutons :

```
3
<button class="btn">Bouton 1</button>
<button class="btn">Bouton 2</button>
```

Attention : les index commencent à zéro.

| Index        | Élément          |
| ------------ | ---------------- |
| `boutons[0]` | Premier bouton   |
| `boutons[1]` | Deuxième bouton  |
| `boutons[2]` | Troisième bouton |

## 3.4. La méthode `forEach()`

`forEach()` permet de parcourir chaque élément d'une collection.

Syntaxe :

```
collection.forEach((element, index) => {
    // Instructions
});
```

| Paramètre | Rôle                          |
| --------- | ----------------------------- |
| `element` | Élément actuellement parcouru |
| `index`   | Position de cet élément       |

Tu peux utiliser d'autres noms que `element` et `index`.

Par exemple :

```
boutons.forEach((opt, i) => {
    console.log(opt);
    console.log(i);
});
```

Ici :

- `opt` représente le bouton actuel.
- `i` représente sa position.

`index` est facultatif si tu n'en as pas besoin.

## 3.5. Exemple simple

HTML :

```
<button class="btn">Accueil</button>
<button class="btn">Services</button>
<button class="btn">Contact</button>
```

JavaScript :

```
const boutons = document.querySelectorAll(".btn");

boutons.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
        event.currentTarget.textContent = "Vous avez cliqué !";
    });
});
```

Explication :

1. On récupère tous les éléments ayant la classe `.btn`.
2. `forEach()` prend chaque bouton un par un.
3. On installe un écouteur sur le bouton actuel.
4. Lorsqu'on clique, on modifie le texte du bouton concerné.

## 3.6. Les différentes manières de parcourir une collection

| Méthode     | Utilisation                        | Particularité     |
| ----------- | ---------------------------------- | ----------------- |
| `forEach()` | Parcourir tous les éléments        | Simple et lisible |
| `for`       | Parcourir avec un index            | Plus de contrôle  |
| `for...of`  | Parcourir directement les éléments | Syntaxe simple    |

Avec `for` :

```
for (let i = 0; i < boutons.length; i++) {
    console.log(boutons[i]);
}
```

Avec `for...of` :

```
for (const bouton of boutons) {
    console.log(bouton);
}
```

Avec `forEach` :

```
boutons.forEach((bouton) => {
    console.log(bouton);
});
```

Pour commencer, `forEach()` est un excellent choix pour installer le même écouteur sur plusieurs éléments.

## 3.7. Cas particuliers

Cas 1 : aucun élément trouvé

```
const boutons = document.querySelectorAll(".inexistant");
```

Résultat :

```
boutons.length // 0
```

Ce n'est pas une erreur. C'est une collection vide.

Et ceci fonctionne sans problème :

```
boutons.forEach((bouton) => {
    console.log(bouton);
});
```

La fonction ne sera simplement exécutée aucune fois.

Cas 2 : un seul élément

Même si tu as un seul bouton, `querySelectorAll()` renvoie une NodeList contenant un élément.

Cas 3 : différence avec `querySelector()`

| `querySelector()`                         | `querySelectorAll()`                      |
| ----------------------------------------- | ----------------------------------------- |
| Retourne le premier élément correspondant | Retourne tous les éléments correspondants |
| Retourne un élément ou `null`             | Retourne une NodeList                     |
| Pas de `.forEach()` sur l'élément seul    | `.forEach()` disponible sur la NodeList   |

Cas 4 : collection dynamique ou statique

`querySelectorAll()` renvoie une NodeList statique : elle ne se met pas automatiquement à jour si tu ajoutes ensuite de nouveaux éléments au DOM.

C'est important dans un projet où tu crées des boutons dynamiquement.

Exemple :

```
const boutons = document.querySelectorAll(".btn");

// Un nouveau bouton est ajouté après cette sélection.
```

Le nouveau bouton ne sera pas automatiquement présent dans la collection `boutons`.

## 3.8. Différence entre `querySelectorAll()` et `getElementsByClassName()`

| Méthode                         | Résultat                             | Collection               |
| ------------------------------- | ------------------------------------ | ------------------------ |
| `querySelectorAll(".btn")`      | Tous les éléments correspondants     | NodeList statique        |
| `getElementsByClassName("btn")` | Tous les éléments ayant cette classe | HTMLCollection dynamique |

Pour débuter, `querySelectorAll()` est souvent plus pratique car il accepte les sélecteurs CSS.

## 3.9. Exemple réel : sélection de catégories

Imagine une boutique de café avec plusieurs catégories :

```
<button class="categorie">Espresso</button>
<button class="categorie">Latte</button>
<button class="categorie">Cappuccino</button>
```

Tu peux installer le même événement sur chaque catégorie :

```
const categories = document.querySelectorAll(".categorie");

categories.forEach((categorie) => {
    categorie.addEventListener("click", (event) => {
        console.log(event.currentTarget.textContent);
    });
});
```

Chaque clic affiche le nom de la catégorie sélectionnée.

## 3.10. Bonnes pratiques et erreurs

- Ne confonds pas un élément DOM avec une collection d'éléments.
- Vérifie le nombre d'éléments avec `.length` lorsque c'est utile.
- Utilise `forEach()` pour installer le même comportement sur plusieurs éléments.
- N'oublie pas que `querySelectorAll()` retourne une collection même si un seul élément correspond.
- Ne pense pas que la collection se met automatiquement à jour après l'ajout d'éléments.

## 3.11. Exercices — Chapitre 3

Facile

1. Sélectionne tous les boutons ayant la classe `.btn` et affiche chaque bouton dans la console.
2. Affiche le nombre de boutons sélectionnés.
3. Installe un écouteur `click` sur chaque bouton et affiche `Bonjour` dans la console.

Intermédiaire

4. Crée cinq boutons. Au clic, chaque bouton change son propre texte.
5. Crée une liste de catégories. Au clic sur chaque catégorie, affiche son nom.
6. Parcours une collection de cartes et affiche leur index et leur titre.

Avancé

7. Crée une liste de produits avec des boutons « Ajouter ». Chaque clic doit modifier uniquement le bouton concerné.
8. Ajoute un nouveau bouton après avoir exécuté `querySelectorAll()`. Vérifie s'il est présent dans la collection initiale et explique pourquoi.

# Chapitre 4 — Interaction entre plusieurs éléments

Ce chapitre correspond à ex2n4 : Interaction entre multiples éléments.

## 4.1. Définition

Jusqu'ici, nous avons appris à modifier l'élément qui déclenche l'événement.

Mais dans un projet réel, l'élément cliqué n'est pas toujours celui qu'on veut modifier.

Par exemple :

- Tu cliques sur un bouton « Afficher ».
- Un paragraphe caché devient visible.
- Tu cliques sur « Fermer ».
- Le paragraphe disparaît.

Ici, le bouton déclenche l'action, mais c'est le paragraphe qui est modifié.

C'est une interaction entre plusieurs éléments du DOM.

## 4.2. Pourquoi utiliser cette technique ?

Parce qu'une interface Web est composée de plusieurs éléments qui doivent travailler ensemble.

Quelques exemples :

| Élément déclencheur  | Élément modifié     |
| -------------------- | ------------------- |
| Bouton « Afficher »  | Paragraphe          |
| Bouton « Ajouter »   | Compteur du panier  |
| Bouton « Supprimer » | Carte du produit    |
| Champ de recherche   | Liste des résultats |
| Bouton « Menu »      | Menu de navigation  |

## 4.3. Comprendre la sélection contextuelle

Imaginons ce HTML :

```
<div class="carte">
    <h2>Mon produit</h2>
    <p>Prix : 20 DH</p>
    <button class="btn">Modifier</button>
</div>
```

Tu peux sélectionner :

```
const carte = document.querySelector(".carte");
const titre = carte.querySelector("h2");
```

Pourquoi utiliser `carte.querySelector("h2")` ?

Parce que tu recherches le titre à l'intérieur de la carte, et non dans tout le document.

Schéma :

document

div.carte

h2 — Mon produit

p — Prix : 20 DH

button — Modifier

carte.querySelector("h2") recherche uniquement dans la carte.

Attention : `querySelector()` sélectionne le premier élément correspondant dans la zone recherchée.

## 4.4. Exemple simple : modifier un autre élément

HTML :

```
<button id="afficher">Afficher</button>
<p id="message">Message caché ? Non, visible !</p>
```

JavaScript :

```
const bouton = document.querySelector("#afficher");
const message = document.querySelector("#message");

bouton.addEventListener("click", () => {
    message.textContent = "Bonjour, bienvenue !";
});
```

Explication ligne par ligne :

1. On sélectionne le bouton.
2. On sélectionne le paragraphe.
3. On installe un écouteur sur le bouton.
4. Au clic, on modifie le texte du paragraphe.

Remarque : `message` et `bouton` sont deux variables qui représentent deux éléments différents.

## 4.5. Exemple : afficher et masquer un élément

HTML :

```
<button id="toggle">Afficher / Masquer</button>

<p id="description" hidden>
    Voici la description du produit.
</p>
```

JavaScript :

```
const bouton = document.querySelector("#toggle");
const description = document.querySelector("#description");

bouton.addEventListener("click", () => {
    description.hidden = !description.hidden;
});
```

Comprenons cette instruction :

```
description.hidden = !description.hidden;
```

- `description.hidden` vaut `true` si l'élément est masqué.
- `!` signifie la négation, donc inverse une valeur booléenne.
- Si `hidden` vaut `true`, il devient `false`.
- Si `hidden` vaut `false`, il devient `true`.

| Avant   | Après   |
| ------- | ------- |
| `true`  | `false` |
| `false` | `true`  |

C'est une manière simple de créer un bouton qui affiche et masque un élément.

## 4.6. La propriété `classList`

En développement Web, on préfère souvent modifier les classes CSS plutôt que d'écrire directement les styles depuis JavaScript.

Voici les méthodes importantes :

| Méthode                | Rôle                          |
| ---------------------- | ----------------------------- |
| `classList.add()`      | Ajouter une classe            |
| `classList.remove()`   | Supprimer une classe          |
| `classList.toggle()`   | Ajouter ou retirer une classe |
| `classList.contains()` | Vérifier si une classe existe |

Exemple :

HTML :

```
<button id="btn">Changer</button>
<p id="texte">Bonjour</p>
```

CSS :

```
.active {
    color: red;
    font-weight: bold;
}
```

JavaScript :

```
const bouton = document.querySelector("#btn");
const texte = document.querySelector("#texte");

bouton.addEventListener("click", () => {
    texte.classList.toggle("active");
});
```

À chaque clic, la classe `active` est ajoutée ou retirée.

Pourquoi choisir `classList` ?

Parce que le CSS reste responsable de l'apparence et le JavaScript de l'interaction. Cela sépare les responsabilités.

## 4.7. `classList.toggle()` avec un état forcé

Tu peux également écrire :

```
element.classList.toggle("active", true);
```

Cela ajoute la classe.

```
element.classList.toggle("active", false);
```

Cela la retire.

Cette variante est utile lorsque tu connais déjà l'état que tu souhaites appliquer.

## 4.8. Les cas particuliers et les erreurs

Cas 1 : élément inexistant

```
const texte = document.querySelector(".texte");
```

Si aucun élément n'existe, `texte` vaut `null`. Tu dois vérifier avant de modifier son contenu.

Cas 2 : plusieurs cartes

```
<div class="carte">
    <h3>Café A</h3>
    <button class="btn">Afficher</button>
</div>

<div class="carte">
    <h3>Café B</h3>
    <button class="btn">Afficher</button>
</div>
```

Une mauvaise approche serait de sélectionner une seule carte avec :

```
const carte = document.querySelector(".carte");
```

Cela sélectionne seulement la première carte.

Pour travailler sur toutes les cartes, il faut parcourir la collection.

Cas 3 : oublier le contexte

Si tu as plusieurs éléments `.prix`, cette instruction :

```
document.querySelector(".prix");
```

retourne le premier prix de toute la page.

Alors que :

```
carte.querySelector(".prix");
```

recherche le prix dans une carte précise.

## 4.9. Exemple réel : gérer un produit

HTML :

```
<div class="produit">
    <h3>Cappuccino</h3>
    <p class="prix">25 DH</p>
    <button class="btn">Afficher le prix</button>
</div>
```

JavaScript :

```
const boutons = document.querySelectorAll(".btn");

boutons.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
        const carte = event.currentTarget.parentElement;
        const prix = carte.querySelector(".prix");

        prix.textContent = "Prix affiché : 25 DH";
    });
});
```

Deux nouvelles notions apparaissent :

- `parentElement` : récupère le parent direct d'un élément.
- `querySelector()` : recherche un élément dans ce parent.

Ici, on remonte du bouton vers sa carte, puis on recherche le prix dans cette carte.

Il existe aussi `closest()`, qui remonte dans les parents jusqu'à trouver un élément correspondant à un sélecteur. Nous pourrons l'étudier plus en détail dans le chapitre sur la navigation dans le DOM.

## 4.10. Exercices — Chapitre 4

Facile

1. Crée un bouton et un paragraphe. Au clic, change le texte du paragraphe.
2. Crée un bouton qui ajoute une classe CSS à un titre.
3. Crée un bouton qui affiche ou masque une description.

Intermédiaire

4. Crée trois cartes avec un titre et un bouton. Chaque bouton doit modifier le titre de sa propre carte.
5. Crée une liste de produits. Au clic sur « Afficher le prix », affiche le prix uniquement dans la carte concernée.
6. Crée un menu de navigation qui s'affiche et se masque grâce à `classList.toggle()`.

Avancé

7. Crée quatre cartes produits. Chaque carte contient un bouton « Supprimer ». Au clic, supprime uniquement la carte correspondante.
8. Crée une interface avec plusieurs cartes. Lorsqu'on clique sur une carte, ajoute une classe `selected` à cette carte et retire cette classe des autres cartes.

# Chapitre 5 — Gestion d'état : le compteur

Ce chapitre correspond à ex2n5 : Gestion d'état (le compteur).

C'est une notion très importante : tu vas apprendre à conserver une valeur et à la modifier au fur et à mesure des actions de l'utilisateur.

## 5.1. Définition : qu'est-ce qu'un état ?

Un état (state) est une information qui représente la situation actuelle d'un élément ou d'une application.

Exemples :

- Le nombre de produits dans un panier.
- Le nombre de likes.
- Le nombre de clics sur un bouton.
- La quantité d'un produit.
- Le nombre de notifications non lues.

Un état peut changer au cours de l'utilisation du site.

## 5.2. Pourquoi utiliser un état ?

Imagine un compteur :

- Au début : 0.
- Premier clic : 1.
- Deuxième clic : 2.
- Troisième clic : 3.

Le programme doit donc se souvenir de la valeur précédente pour pouvoir calculer la suivante.

C'est le rôle de la variable qui stocke l'état.

## 5.3. Exemple simple : un compteur

HTML :

```
<h2 id="compteur">0</h2>
<button id="incrementer">+1</button>
```

JavaScript :

```
let compteur = 0;

const affichage = document.querySelector("#compteur");
const bouton = document.querySelector("#incrementer");

bouton.addEventListener("click", () => {
    compteur++;
    affichage.textContent = compteur;
});
```

Résultat attendu :

# 0 → 1 → 2 → 3

Illustration du fonctionnement du compteur.

## 5.4. Explication ligne par ligne

Ligne 1 :

```
let compteur = 0;
```

On crée une variable qui contient la valeur initiale du compteur.

Pourquoi `let` et non `const` ?

Parce que la valeur va changer :

```
compteur = 1;
compteur = 2;
```

Une variable déclarée avec `const` ne peut pas être réaffectée.

Ligne 2 :

```
const affichage = document.querySelector("#compteur");
```

On récupère le titre qui affiche le compteur.

Ligne 3 :

```
const bouton = document.querySelector("#incrementer");
```

On récupère le bouton.

Ligne 4 :

```
bouton.addEventListener("click", () => {
```

On installe un écouteur qui attend un clic.

Ligne 5 :

```
compteur++;
```

On augmente la valeur de 1.

Cette instruction est équivalente à :

```
compteur = compteur + 1;
```

Ligne 6 :

```
affichage.textContent = compteur;
```

On actualise l'affichage avec la nouvelle valeur.

## 5.5. Comprendre les opérateurs

| Opérateur | Signification       | Exemple         |
| --------- | ------------------- | --------------- |
| `++`      | Augmenter de 1      | `compteur++`    |
| `--`      | Diminuer de 1       | `compteur--`    |
| `+=`      | Ajouter une valeur  | `compteur += 5` |
| `-=`      | Retirer une valeur  | `compteur -= 5` |
| `=`       | Affecter une valeur | `compteur = 10` |

Exemple :

```
let nombre = 10;

nombre++;
// 11

nombre--;
// 10

nombre += 5;
// 15

nombre -= 3;
// 12
```

Attention : `compteur++` et `++compteur` peuvent avoir des comportements différents lorsqu'ils sont utilisés dans une expression. Pour le moment, utilise `compteur++` comme instruction seule.

## 5.6. Compteur avec trois boutons

HTML :

```
<h2 id="valeur">0</h2>

<button id="plus">+1</button>
<button id="moins">-1</button>
<button id="reset">Réinitialiser</button>
```

JavaScript :

```
let compteur = 0;

const valeur = document.querySelector("#valeur");
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const reset = document.querySelector("#reset");

plus.addEventListener("click", () => {
    compteur++;
    valeur.textContent = compteur;
});

moins.addEventListener("click", () => {
    compteur--;
    valeur.textContent = compteur;
});

reset.addEventListener("click", () => {
    compteur = 0;
    valeur.textContent = compteur;
});
```

Tu as trois événements, mais une seule variable d'état.

Chaque événement modifie cette variable, puis l'affichage est actualisé.

## 5.7. Cas particulier : empêcher les valeurs négatives

Supposons que tu ne souhaites jamais avoir un compteur inférieur à zéro.

Tu peux utiliser une condition :

```
moins.addEventListener("click", () => {
    if (compteur > 0) {
        compteur--;
    }

    valeur.textContent = compteur;
});
```

Explication :

- `if` vérifie une condition.
- `compteur > 0` vérifie si le compteur est supérieur à zéro.
- Si la condition est vraie, on diminue le compteur.
- Sinon, on ne change rien.

Le compteur reste donc à zéro si l'utilisateur clique sur le bouton « -1 » alors qu'il vaut déjà zéro.

## 5.8. Attention à la différence entre état et affichage

C'est un point essentiel.

Dans notre exemple :

```
let compteur = 0;
```

La variable `compteur` représente l'état réel.

Alors que :

```
valeur.textContent = compteur;
```

représente simplement l'affichage de cet état dans le HTML.

Schéma :

Action utilisateur

Clic sur +1

État JavaScript

# compteur = 1

Affichage HTML

# 1

En darija : المتغير هو القيمة الحقيقية اللي كنحتافظو بها، و HTML غير كيعرضها للمستخدم.

## 5.9. Les erreurs fréquentes

Erreur 1 : utiliser `const` pour un compteur modifiable

```
const compteur = 0;
compteur++;
```

Cela provoque une erreur, car on ne peut pas réaffecter une variable `const`.

Erreur 2 : oublier de mettre à jour l'affichage

```
compteur++;
```

La variable change, mais l'utilisateur ne voit pas forcément le nouveau résultat.

Il faut également actualiser l'affichage.

Erreur 3 : modifier seulement le HTML

```
affichage.textContent++;
```

Cette solution peut fonctionner dans certains cas grâce aux conversions de types, mais elle mélange l'état et l'affichage. Il est préférable de conserver une variable dédiée.

Erreur 4 : réinitialiser la valeur au mauvais endroit

```
bouton.addEventListener("click", () => {
    let compteur = 0;
    compteur++;
});
```

Ici, la variable est recréée à chaque clic. Elle ne conserve donc pas sa valeur entre deux clics.

La déclaration de la variable doit être placée en dehors de l'écouteur.

## 5.10. Les variantes et les bonnes pratiques

Tu peux écrire :

```
compteur++;
affichage.textContent = compteur;
```

Ou utiliser une fonction pour éviter de répéter l'instruction d'affichage :

```
function actualiserCompteur() {
    affichage.textContent = compteur;
}
```

Puis appeler cette fonction après chaque modification.

C'est intéressant quand ton compteur possède plusieurs actions.

Bonne pratique : une variable représente l'état, et une fonction peut s'occuper de synchroniser l'affichage avec cet état.

## 5.11. Exemple réel : quantité d'un produit dans un panier

Imagine que ton panier contient un cappuccino.

- Quantité initiale : 1.
- L'utilisateur clique sur `+` : quantité 2.
- L'utilisateur clique sur `-` : quantité 1.
- Le prix unitaire est de 25 DH.
- Le total dépend de la quantité.

La logique est :

\\[ Total = Prix\ unitaire \times Quantité \\]

Par exemple :

| Quantité | Prix unitaire | Total |
| -------- | ------------- | ----- |
| 1        | 25 DH         | 25 DH |
| 2        | 25 DH         | 50 DH |
| 3        | 25 DH         | 75 DH |

Tu peux donc utiliser les événements pour modifier la quantité et recalculer le prix.

Cette logique est très proche de celle que tu retrouveras dans un véritable panier e-commerce.

## 5.12. Exercices — Chapitre 5

Facile

1. Crée un compteur qui commence à zéro et augmente de 1 à chaque clic.
2. Ajoute un bouton qui diminue le compteur de 1.
3. Ajoute un bouton qui remet le compteur à zéro.

Intermédiaire

4. Empêche le compteur de devenir négatif.
5. Crée un compteur qui augmente de 5 à chaque clic.
6. Affiche un message `Objectif atteint !` lorsque le compteur arrive à 10.

Avancé

7. Crée un compteur de quantité de produit avec les boutons `+` et `-`. Le minimum est 1 et le prix total doit être actualisé automatiquement.
8. Crée un compteur de likes. Chaque clic augmente le nombre de likes. Ajoute également un bouton pour retirer un like, sans permettre une valeur négative.

# Chapitre 6 — Fiche de révision générale

## 6.1. Tableau récapitulatif des méthodes et propriétés

| Méthode / propriété    | Rôle                               | Exemple                                |
| ---------------------- | ---------------------------------- | -------------------------------------- |
| `querySelector()`      | Sélectionner le premier élément    | `document.querySelector(".btn")`       |
| `querySelectorAll()`   | Sélectionner plusieurs éléments    | `document.querySelectorAll(".btn")`    |
| `addEventListener()`   | Écouter un événement               | `btn.addEventListener("click", fn)`    |
| `forEach()`            | Parcourir une collection           | `boutons.forEach(...)`                 |
| `textContent`          | Lire ou modifier du texte          | `element.textContent = "Bonjour"`      |
| `event.target`         | Élément à l'origine de l'événement | `event.target`                         |
| `event.currentTarget`  | Élément portant l'écouteur actuel  | `event.currentTarget`                  |
| `event.type`           | Type de l'événement                | `event.type`                           |
| `parentElement`        | Récupérer le parent direct         | `btn.parentElement`                    |
| `classList.add()`      | Ajouter une classe                 | `element.classList.add("active")`      |
| `classList.remove()`   | Retirer une classe                 | `element.classList.remove("active")`   |
| `classList.toggle()`   | Ajouter ou retirer une classe      | `element.classList.toggle("active")`   |
| `classList.contains()` | Vérifier une classe                | `element.classList.contains("active")` |
| `hidden`               | Masquer ou afficher un élément     | `element.hidden = true`                |
| `length`               | Obtenir le nombre d'éléments       | `boutons.length`                       |

## 6.2. Les différences à ne pas confondre

| Notion A        | Notion B           | Différence                                             |
| --------------- | ------------------ | ------------------------------------------------------ |
| `click`         | `mouseenter`       | Clic / entrée de la souris                             |
| `target`        | `currentTarget`    | Origine de l'événement / élément portant l'écouteur    |
| `querySelector` | `querySelectorAll` | Premier élément / tous les éléments                    |
| `forEach`       | `for`              | Parcours d'une collection avec ou sans index explicite |
| `textContent`   | `innerHTML`        | Texte / contenu HTML                                   |
| `let`           | `const`            | Réaffectation possible / impossible                    |
| État            | Affichage          | Valeur conservée / représentation visuelle             |
| `classList.add` | `classList.toggle` | Ajout / ajout ou suppression                           |

## 6.3. Les erreurs à éviter absolument

1. Oublier les parenthèses de `addEventListener()`.
2. Mettre `afficherMessage()` au lieu de `afficherMessage` quand on transmet une fonction.
3. Confondre `target` et `currentTarget`.
4. Utiliser `querySelector()` alors qu'on veut gérer tous les éléments.
5. Oublier que les index commencent à zéro.
6. Déclarer une variable de compteur à l'intérieur de l'écouteur.
7. Modifier seulement l'affichage sans actualiser l'état.
8. Sélectionner un élément inexistant et essayer de le modifier.
9. Confondre une collection `NodeList` avec un élément DOM.
10. Installer un écouteur sur un élément qui n'existe pas encore dans le DOM.

# Chapitre 7 — Mini-projet pratique : une petite interface de panier

Projet de synthèse

Tu vas créer une petite interface de panier pour une boutique de café.

[Coffee Haven - Uno Platform AI Challenge Entry - DEV Community](https://images.openai.com/static-rsc-4/h1cONnykWc0WKrZWsPSvnmk6YA7bFCCNRTNleswL_8lFrW78XGY3M_ve3SR43p_h1nCv7yh__0TQV7fcsKIvlH1iJb40xifSjMSWJy7yfViVoHCMrOte_kKl-TkCtfyIloNZy2u2vafKJJSScfRk8FQ2VFNwfodc60cHr8pdlig?purpose=inline)

[dev.to](https://dev.to/shiva_shanker_k/coffee-haven-uno-platform-ai-challenge-entry-4ib?utm_source=chatgpt.com)

## Objectif

Créer trois cartes produits :

- Cappuccino : 25 DH.
- Latte : 30 DH.
- Espresso : 18 DH.

Chaque carte possède :

- Un nom.
- Un prix.
- Un bouton `Ajouter au panier`.

Ton panier doit afficher :

- Le nombre total de produits.
- Le montant total.
- Un message de confirmation après l'ajout.

## Partie 1 — HTML et CSS

Construis trois cartes avec une structure similaire.

Chaque carte doit avoir une classe commune, par exemple `.produit`.

Ajoute un bouton avec la classe `.ajouter` dans chaque carte.

Ajoute également une zone pour afficher le nombre de produits et le prix total.

## Partie 2 — JavaScript

Travaille dans cet ordre :

Étape 1 : sélection

- Sélectionne toutes les cartes.
- Sélectionne tous les boutons.
- Sélectionne les zones d'affichage du panier.

Étape 2 : événements

- Installe un écouteur `click` sur chaque bouton.
- Détecte le bouton qui a été cliqué.

Étape 3 : interaction entre éléments

- Retrouve la carte du bouton cliqué.
- Récupère le nom et le prix du produit.
- Affiche un message de confirmation.

Étape 4 : gestion d'état

- Crée une variable pour le nombre de produits.
- Crée une variable pour le total.
- Augmente le nombre après chaque ajout.
- Ajoute le prix du produit au total.
- Actualise les deux affichages.

## Critères de réussite

- Les trois boutons fonctionnent.
- Chaque bouton concerne uniquement son produit.
- Le nombre de produits augmente correctement.
- Le prix total est correct.
- Le message de confirmation apparaît.
- Le code ne génère pas d'erreur dans la console.

# Chapitre 8 — Comment raisonner seule devant un exercice ?

Avant d'écrire du JavaScript, pose-toi ces cinq questions :

1\. Quel élément déclenche l'action ?

Exemple : un bouton.

2\. Quel événement doit être détecté ?

Exemple : `click`, `mouseenter`, `input`.

3\. Quel élément dois-je modifier ?

Exemple : le bouton lui-même, un paragraphe ou une carte.

4\. Est-ce que je travaille avec un seul élément ou plusieurs ?

Un élément : `querySelector()`.

Plusieurs éléments : `querySelectorAll()`.

5\. Est-ce que je dois conserver une valeur ?

Exemple : compteur, quantité, total. Dans ce cas, pense à une variable d'état.

C'est ce raisonnement qui te permettra de résoudre les exercices sans recopier une solution.

# Évaluation finale — Avant de passer au concept 3

QCM — 5 questions

0/5 répondues

1\. Quelle méthode permet d'écouter un clic ?

querySelector()

addEventListener()

forEach()

2\. Que retourne querySelectorAll() ?

Le premier élément

Une NodeList

Toujours null

3\. Quel paramètre représente l'élément portant l'écouteur actuel ?

event.target

event.currentTarget

event.type

4\. Pourquoi déclarer le compteur en dehors de la fonction de clic ?

Pour conserver sa valeur entre les clics

Pour accélérer le navigateur

Pour créer un élément HTML

5\. Quelle méthode permet d'ajouter ou de retirer une classe ?

classList.toggle()

textContent

parentElement

Corriger mes réponses

Ma recommandation pédagogique : ne commence pas directement le mini-projet. Fais d'abord les exercices des chapitres 1 et 2, puis envoie-moi tes réponses. Je corrigerai ton raisonnement, pas seulement le résultat du code. Nous avancerons ensuite chapitre par chapitre jusqu'à ce que tu puisses réaliser le mini-projet seule.