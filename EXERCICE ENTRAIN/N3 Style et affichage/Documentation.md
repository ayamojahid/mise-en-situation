# Documentation – Concept 3 : Style et affichage avec JavaScript (DOM)

Dans ce chapitre, tu vas apprendre à modifier l'apparence des éléments HTML avec JavaScript.

On va travailler avec les 5 exercices de QuestGrid, mais aussi comprendre comment créer des éléments HTML avec `createElement()`, ajouter du contenu avec `textContent`, les insérer avec `appendChild()` et gérer leurs classes CSS.

L'objectif est de comprendre la logique, pas simplement mémoriser les méthodes.

## 1. Les bases à connaître avant de commencer

### A. Sélectionner un élément HTML

Avant de modifier un élément, il faut le sélectionner.

```
const titre = document.getElementById("titre");
const box = document.querySelector(".box");
const boutons = document.querySelectorAll("button");
```

| Méthode              | Résultat                                    |
| -------------------- | ------------------------------------------- |
| `getElementById()`   | Un élément par son ID                       |
| `querySelector()`    | Le premier élément correspondant            |
| `querySelectorAll()` | Tous les éléments correspondants (NodeList) |

### B. Modifier le contenu

```
titre.textContent = "Bonjour";
```

Remplace le texte de l'élément.

```
titre.innerHTML = "<span>Bonjour</span>";
```

Interprète le contenu comme du HTML.

Différence importante :

- `textContent` : insère du texte.
- `innerHTML` : insère du contenu HTML.

### C. Modifier le style directement

```
titre.style.color = "red";
titre.style.backgroundColor = "yellow";
titre.style.fontSize = "24px";
```

Attention : en JavaScript, les propriétés CSS composées utilisent généralement le camelCase.

| CSS                | JavaScript        |
| ------------------ | ----------------- |
| `background-color` | `backgroundColor` |
| `font-size`        | `fontSize`        |
| `border-radius`    | `borderRadius`    |
| `margin-top`       | `marginTop`       |

## 2. Créer et ajouter des éléments HTML

C'est une partie très importante du DOM. Tu dois comprendre ces méthodes pour réussir notamment l'exercice ex3n5.

### A. `document.createElement()`

Permet de créer un nouvel élément HTML.

```
const li = document.createElement("li");
```

Tu viens de créer un élément `<li>` en mémoire.

Mais attention : il n'est pas encore visible dans ta page HTML !

### B. `textContent`

Permet de donner du texte à ton nouvel élément.

```
li.textContent = "Accueil";
```

Ton élément contient maintenant le texte `Accueil`.

### C. `classList.add()`

Permet d'ajouter une classe CSS.

```
li.classList.add("active");
```

### D. `appendChild()`

Permet d'ajouter un élément enfant à un élément parent.

```
const menu = document.getElementById("menu");

menu.appendChild(li);
```

Maintenant, ton `<li>` est inséré dans le `<ul id="menu">`.

Comprendre les relations parent / enfant

`ul#menu`

Élément parent

`li.active`

Élément enfant

Accueil

`menu.appendChild(li)` : place le li à l'intérieur du ul.

### E. Les trois étapes à retenir

1. `createElement()` : créer l'élément.
2. `textContent` : lui donner un contenu.
3. `appendChild()` : l'ajouter dans la page.

Tu peux aussi utiliser `append()` pour ajouter un ou plusieurs éléments ou du texte. `appendChild()` attend un nœud DOM et retourne le nœud ajouté.

### F. Différence entre `appendChild()` et `append()`

| Méthode         | Ce qu'elle accepte             |
| --------------- | ------------------------------ |
| `appendChild()` | Un seul nœud DOM               |
| `append()`      | Plusieurs éléments ou du texte |

Exemple :

```
const p = document.createElement("p");

p.textContent = "Bonjour";

grades.appendChild(p);
```

Autre possibilité :

```
grades.append("Bonjour");
```

Attention : `append("Bonjour")` ajoute du texte, pas un élément `<p>`.

### G. Autres méthodes utiles pour manipuler les éléments

| Méthode         | Rôle                                  |
| --------------- | ------------------------------------- |
| `remove()`      | Supprimer un élément                  |
| `removeChild()` | Supprimer un enfant depuis son parent |
| `replaceWith()` | Remplacer un élément                  |
| `before()`      | Insérer avant un élément              |
| `after()`       | Insérer après un élément              |
| `prepend()`     | Insérer au début des enfants          |
| `append()`      | Insérer à la fin des enfants          |

Exemple :

```
const li = document.createElement("li");

li.textContent = "Contact";

menu.appendChild(li);
```

Si tu souhaites supprimer ce même élément plus tard :

```
li.remove();
```

## 3. Ex3n1 – Modification de style en ligne (inline style)

Objectif : modifier directement le CSS avec JavaScript

Imagine que tu as un bouton et que tu souhaites changer sa couleur lorsqu'on clique dessus.

### A. Comprendre `element.style`

`style` permet de modifier les propriétés CSS directement sur un élément HTML.

```
const btn = document.querySelector("button");

btn.style.color = "white";
btn.style.backgroundColor = "blue";
btn.style.padding = "10px";
```

Résultat : le bouton reçoit directement ces styles.

### B. Modifier le style au clic

```
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
});
```

Chaque clic applique la couleur verte.

### C. Supprimer un style inline

```
btn.style.backgroundColor = "";
```

Cela retire la valeur inline de cette propriété et laisse le CSS normal déterminer l'apparence.

À retenir :

- `element.style.color` : modifier une propriété CSS.
- `element.style.backgroundColor` : modifier la couleur de fond.
- `element.style.display` : modifier l'affichage.
- `element.style.fontSize` : modifier la taille du texte.

Petit exercice

Essaie de modifier la couleur d'un paragraphe lorsque tu cliques sur un bouton.

À pratiquer

`addEventListener()` + `style`

## 4. Ex3n2 – Afficher / masquer un élément (toggle d'affichage)

Objectif : montrer ou cacher un élément HTML

Imagine une carte contenant des détails. Tu veux afficher ces détails lorsque l'utilisateur clique sur un bouton, puis les cacher au prochain clic.

### A. Comprendre `display`

La propriété CSS `display` contrôle la manière dont un élément est affiché.

| Valeur   | Signification                   |
| -------- | ------------------------------- |
| `block`  | Affiche l'élément comme un bloc |
| `none`   | Cache complètement l'élément    |
| `inline` | Affiche l'élément en ligne      |
| `flex`   | Utilise Flexbox                 |
| `grid`   | Utilise CSS Grid                |

Exemple :

```
details.style.display = "none";
```

L'élément est caché.

```
details.style.display = "block";
```

L'élément est affiché.

### B. La logique du toggle

Le principe est de vérifier l'état actuel :

```
Est-ce que l'élément est caché ?
           |
       Oui | Non
           | 
      Afficher | Cacher
```

Pour cela, tu peux utiliser `if / else` :

- Si `display` vaut `"none"`, tu affiches.
- Sinon, tu caches.

### C. Une autre méthode : `hidden`

HTML possède aussi un attribut `hidden`.

```
details.hidden = true;
```

Cache l'élément.

```
details.hidden = false;
```

Affiche l'élément.

Tu peux également utiliser une classe CSS :

```
.hidden {
    display: none;
}
```

Puis gérer cette classe avec `classList`.

À retenir : `display` agit sur le style d'affichage, tandis que `hidden` représente un état masqué de l'élément.

## 5. Ex3n3 – Ajout et suppression de classes (état actif)

Objectif : gérer un menu actif

C'est l'exercice que tu as déjà réussi !

Imagine ce menu :

AccueilProduitsBlogContact

Élément actif : Accueil

### A. Comprendre `classList`

`classList` permet de gérer les classes CSS d'un élément sans remplacer toutes ses classes.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developer.mozilla.org\&sz=32)

MDN



Voici ses méthodes principales :

| Méthode      | Rôle                               |
| ------------ | ---------------------------------- |
| `add()`      | Ajouter une classe                 |
| `remove()`   | Supprimer une classe               |
| `toggle()`   | Basculer une classe                |
| `contains()` | Vérifier si une classe existe      |
| `replace()`  | Remplacer une classe par une autre |

### B. `classList.add()`

```
element.classList.add("active");
```

Ajoute la classe `active`.

### C. `classList.remove()`

```
element.classList.remove("active");
```

Supprime la classe `active`.

### D. La logique de ton exercice

Tu dois retenir cette organisation :

```
Sélectionner tous les li
          |
          v
Ajouter un événement click à chaque li
          |
          v
       Au clic
          |
          v
Supprimer active de tous les li
          |
          v
Ajouter active au li cliqué
```

C'est exactement la logique que tu as réalisée avec ta fonction `ana()`.

## 6. Ex3n4 – Bascule de classe (`classList.toggle`)

Objectif : ajouter ou supprimer une classe automatiquement

`toggle()` est une méthode très pratique.

Elle fonctionne comme un interrupteur.

- Si la classe existe : elle la supprime.
- Si la classe n'existe pas : elle l'ajoute.

Exemple :

```
btn.classList.toggle("active");
```

### Comprendre le fonctionnement

## Démo interactive

# INACTIF

État de la classe active

Activer la classe

En JavaScript, chaque clic exécute `classList.toggle("active")`.

### Différence entre `add`, `remove` et `toggle`

| Méthode    | Comportement       |
| ---------- | ------------------ |
| `add()`    | Toujours ajouter   |
| `remove()` | Toujours supprimer |
| `toggle()` | Inverser l'état    |

Quand utiliser quoi ?

- Menu de navigation : généralement `remove()` puis `add()`.
- Bouton mode sombre : `toggle()`.
- Supprimer un état actif : `remove()`.

## 7. Ex3n5 – Rendu conditionnel de styles basé sur les données

Objectif : créer des éléments et appliquer une classe selon une condition

C'est l'exercice des notes que tu as travaillé.

Imaginons ce tableau :

```
const notes = [12, 8, 15, 9, 18];
```

La règle :

- Note supérieure ou égale à 10 : classe `success`.
- Note inférieure à 10 : classe `danger`.

### A. Comprendre le rendu dynamique

Tu as un tableau de données, mais tu n'as pas encore les éléments HTML correspondants.

Tu dois donc :

1. Parcourir le tableau.
2. Créer un élément HTML pour chaque note.
3. Lui attribuer une classe selon sa note.
4. Ajouter cet élément dans la liste.

### B. Le rôle de `if / else`

Tu connais déjà cette condition :

```
if (note >= 10) {
    // Note réussie
} else {
    // Note insuffisante
}
```

Ici, `if / else` permet de choisir quelle classe CSS sera attribuée.

### C. Deux façons de créer le HTML

Méthode 1 : avec `innerHTML`

Tu construis directement le HTML sous forme de chaîne de caractères.

```
const couleur = "success";

grades.innerHTML += `
    <li class="${couleur}">12/20</li>
`;
```

La valeur de `couleur` est injectée dans l'attribut `class`.

Méthode 2 : avec `createElement()` et `appendChild()`

Tu crées un vrai élément DOM, tu lui donnes son contenu, tu ajoutes sa classe puis tu l'insères.

```
const li = document.createElement("li");

li.textContent = "12/20";

li.classList.add("success");

grades.appendChild(li);
```

Cette deuxième méthode est particulièrement importante à maîtriser.

Comparaison des deux méthodes

| `innerHTML`                       | `createElement`                        |
| --------------------------------- | -------------------------------------- |
| Construit du HTML en texte        | Crée un élément DOM                    |
| Utilise les template literals     | Utilise `textContent`                  |
| Pratique pour du HTML simple      | Pratique pour manipuler chaque élément |
| Attention aux données non fiables | Plus sûr pour insérer du texte         |

Pour du texte provenant de données utilisateur, préfère `textContent` plutôt que d'injecter ces données dans `innerHTML`.

### D. Visualiser le résultat attendu

Notes des étudiants

Étudiant 1

## 12/20

Réussi

Étudiant 2

## 8/20

Échec

Étudiant 3

## 15/20

Réussi

Étudiant 4

## 9/20

Échec

Étudiant 5

## 18/20

Réussi

## 8. Tableau récapitulatif du Concept 3

| Ce que tu veux faire             | Méthode                           |
| -------------------------------- | --------------------------------- |
| Modifier une couleur directement | `element.style.color`             |
| Cacher un élément                | `element.style.display = "none"`  |
| Afficher un élément              | `element.style.display = "block"` |
| Ajouter une classe               | `classList.add()`                 |
| Supprimer une classe             | `classList.remove()`              |
| Basculer une classe              | `classList.toggle()`              |
| Vérifier une classe              | `classList.contains()`            |
| Créer un élément                 | `document.createElement()`        |
| Ajouter du texte                 | `textContent`                     |
| Ajouter un enfant                | `appendChild()`                   |
| Supprimer un élément             | `remove()`                        |
| Parcourir une collection         | `forEach()`                       |

## 9. Exemple complet : créer une liste dynamiquement

Voici un exemple qui rassemble plusieurs notions du chapitre :

HTML :

```
<h2>Liste des étudiants</h2>
<ul id="grades"></ul>
```

CSS :

```
.success {
    color: green;
    font-weight: bold;
}

.danger {
    color: red;
    font-weight: bold;
}
```

JavaScript :

```
const notes = [12, 8, 15, 9, 18];

const grades = document.getElementById("grades");

notes.forEach((note) => {

    // 1. Créer un élément li
    const li = document.createElement("li");

    // 2. Ajouter le texte
    li.textContent = `${note}/20`;

    // 3. Vérifier la note
    if (note >= 10) {
        li.classList.add("success");
    } else {
        li.classList.add("danger");
    }

    // 4. Ajouter le li dans le ul
    grades.appendChild(li);

});
```

Comprends bien l'ordre :

- `note` : représente la valeur actuelle du tableau.
- `li` : représente l'élément HTML créé.
- `textContent` : ajoute le texte dans le `<li>`.
- `if / else` : choisit la classe.
- `appendChild()` : ajoute le `<li>` dans le `<ul>`.

C'est une logique que tu pourras réutiliser pour afficher des produits, des utilisateurs, des tâches ou des notes.

## 10. Les erreurs fréquentes à éviter

| Erreur                                                              | Pourquoi ?                                          |
| ------------------------------------------------------------------- | --------------------------------------------------- |
| `opt.classList.add()` alors que `opt` est un nombre                 | `classList` appartient aux éléments HTML            |
| `all.classList.add()` alors que `all` vient de `querySelectorAll()` | `all` est une NodeList                              |
| Utiliser deux boucles alors qu'une suffit                           | Tu répètes inutilement les comparaisons             |
| Utiliser `=` dans une condition pour comparer                       | `=` affecte une valeur, `===` compare               |
| Utiliser `appendChild("Bonjour")`                                   | `appendChild()` attend un nœud, pas une chaîne      |
| Oublier `appendChild()`                                             | L'élément créé n'est pas encore inséré dans la page |

## 11. Les ressources pour approfondir

Voici les documentations de référence :

- [MDN – Manipuler le DOM et les styles](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting?trk=article-ssr-frontend-pulse_little-text-block\&utm_source=chatgpt.com) : création, modification et styles.
- [MDN – classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList?utm_source=chatgpt.com) : les classes CSS.
- [MDN – createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement?utm_source=chatgpt.com) : créer des éléments HTML.
- [MDN – appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild?utm_source=chatgpt.com) : ajouter des éléments.
- [MDN – Construire et mettre à jour l'arbre DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree?utm_source=chatgpt.com) : comprendre les relations parent/enfant.

## 12. Vérification de tes connaissances

Avant de passer au Concept 4, vérifie que tu maîtrises ces notions.

QCM – Concept 3

0/6 répondues

1\. Quelle méthode permet de créer un élément HTML ?

appendChild()

createElement()

querySelector()

2\. Quelle méthode ajoute un enfant à un parent ?

appendChild()

classList.add()

textContent

3\. Que retourne querySelectorAll() ?

Un seul élément

Une NodeList

Une chaîne de caractères

4\. Quelle méthode permet d'inverser une classe CSS ?

remove()

add()

toggle()

5\. Dans ex3n5, que représente note dans forEach((note) => {}) ?

Un élément HTML

La valeur actuelle du tableau

Le parent HTML

6\. Quelle méthode permet d'insérer du texte sans interpréter du HTML ?

innerHTML

textContent

classList

Corriger mes réponses

Mon conseil pour tes exercices : continue à privilégier `createElement()` + `textContent` + `classList` + `appendChild()`. Ce sont des bases essentielles pour construire des interfaces dynamiques en JavaScript.