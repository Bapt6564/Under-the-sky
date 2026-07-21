# 🔭 Sous les étoiles — Mémo & Quiz

Application web pour les soirées d'observation : un **mémo** pour les
animateurs (une fiche par sujet) et un **quiz** pour le public (10
questions tirées au hasard à chaque partie).

👉 **Voir le site en ligne :** `https://VOTRE-PSEUDO.github.io/NOM-DU-DEPOT/`
*(à activer une fois, voir plus bas)*

---

## Structure des fichiers

```
index.html      → la page, ne contient (presque) pas de contenu à modifier
style.css       → toute l'apparence (couleurs, mise en page, mode nuit rouge)
sujets.js       → 📖 LE CONTENU DU MÉMO — c'est ici que vous ajoutez des sujets
questions.js    → 🌠 LA RÉSERVE DE QUESTIONS DU QUIZ — c'est ici que vous en ajoutez
app.js          → le moteur (navigation, affichage, tirage aléatoire du quiz)
images/         → 🖼️ vos photos/illustrations pour les fiches (à créer au besoin)
```

**Pour ajouter du contenu, vous n'avez besoin d'ouvrir que `sujets.js`
ou `questions.js`.** Les deux fichiers ont un mode d'emploi en commentaire
tout en haut.

---

## Modifier le contenu depuis GitHub (sans rien installer)

1. Ouvrez le fichier à modifier (`sujets.js` ou `questions.js`) sur GitHub.
2. Cliquez sur le crayon ✏️ en haut à droite (« Edit this file »).
3. Copiez un bloc existant, collez-le juste après, et modifiez-le.
4. En bas de page, cliquez **Commit changes**.
5. Le site se met à jour tout seul en moins d'une minute.

### Ajouter un sujet au mémo (`sujets.js`)

Copiez un bloc entier, par exemple celui d'ISS, et changez :
- le **slug** (l'identifiant entre guillemets avant les deux-points,
  ex. `"iss"`) — sans espace ni accent, c'est ce qui apparaît dans l'URL ;
- `titre`, `icone`, `resume` ;
- `sections` : un tableau de blocs de texte HTML (vous pouvez utiliser
  `<strong>`, `<ul><li>`, et la classe `chiffre-cle` pour un encadré doré) ;
- `voirAussi` : la liste des slugs des sujets liés en bas de page.

**Pour faire un lien vers un autre sujet** dans un paragraphe, écrivez :
```html
<a href="#/memo/iss">la Station spatiale</a>
```
(`iss` étant le slug du sujet visé.)

**Pour ajouter une image** dans une fiche :

1. Déposez le fichier image dans un dossier `images/` à la racine du
   dépôt (créez-le s'il n'existe pas encore) — par exemple
   `images/nebuleuse-orion.jpg`.
2. Dans la section concernée de `sujets.js`, ajoutez :
   ```html
   <figure class="illustration">
     <img src="images/nebuleuse-orion.jpg" alt="La nébuleuse d'Orion">
     <figcaption>Légende courte (facultative)</figcaption>
   </figure>
   ```
   L'image s'adapte automatiquement à la largeur de la fiche (pas besoin
   de préciser une taille), et reste lisible en mode nuit rouge comme le
   reste du contenu.

Conseils pratiques :
- **Formats** : `.jpg` pour les photos, `.png` pour les captures
  d'écran ou schémas avec du texte/transparence.
- **Poids** : compressez vos images avant de les déposer (visez moins
  de 300-500 Ko chacune) pour que le site reste rapide à charger,
  surtout sur le terrain avec une connexion mobile. Des outils comme
  [squoosh.app](https://squoosh.app) font ça gratuitement en
  glisser-déposer.
- **Droits d'auteur** : préférez des images libres de droits — NASA/ESA
  (la plupart de leurs photos sont libres d'usage), Wikimedia Commons,
  ou vos propres photos/captures Stellarium.
- `alt="..."` (la description textuelle) n'est pas qu'un détail
  technique : elle s'affiche si l'image ne charge pas (mauvaise
  connexion sur le terrain) et sert aux personnes malvoyantes.

### Ajouter une question au quiz (`questions.js`)

Copiez un bloc entier et changez :
- `cat` : la catégorie affichée au-dessus de la question ;
- `q` : la question ;
- `r` : un tableau de 2 à 4 réponses — **pensez à glisser une proposition
  décalée/drôle** parmi les mauvaises réponses, c'est plus fun pour le
  public ;
- `bonne` : la position de la bonne réponse dans le tableau `r`
  (0 = la première, 1 = la deuxième, etc.) ;
- `e` : l'explication affichée une fois la réponse donnée.

Vous pouvez ajouter **autant de questions que vous voulez** dans cette
réserve : à chaque lancement du quiz, l'application en tire **10 au
hasard**. Plus la réserve est grande, plus le quiz change d'une soirée
à l'autre, et plus les gens qui rejouent auront des questions
différentes.

Pour changer le nombre de questions tirées (ex. 15 au lieu de 10),
modifiez la constante `NB_QUESTIONS_QUIZ` tout en haut de `app.js`.

---

## Héberger le site avec GitHub Pages

1. Déposez ces 5 fichiers (`index.html`, `style.css`, `sujets.js`,
   `questions.js`, `app.js`) à la racine du dépôt GitHub, et un dossier
   `images/` si vous illustrez des fiches.
2. Dans le dépôt : **Settings → Pages**.
3. Sous « Build and deployment » → Source : **Deploy from a branch**.
4. Branch : `main`, dossier `/ (root)` → **Save**.
5. Après 1 à 2 minutes, l'URL du site apparaît en haut de cette même
   page (`https://votre-pseudo.github.io/nom-du-depot/`).

C'est cette URL que vous pouvez partager ou mettre en QR code pour le
public — accessible sans compte GitHub.

---

## Fonctionnement du mode nuit rouge

Le bouton 🔴 en haut à droite bascule tout l'écran en rouge (texte,
étoiles, boutons) pour préserver la vision nocturne pendant les
observations — comme les applications d'astronomie. Réglages dans
`style.css`, section *« filtre rouge intégral »*.
