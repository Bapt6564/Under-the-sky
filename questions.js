/* =====================================================================
   QUESTIONS.JS — la réserve de questions du quiz
   ---------------------------------------------------------------------
   Toutes les questions ci-dessous forment une RÉSERVE : à chaque lancement du quiz, l'app en tire 10 au hasard (réglable dans app.js, constante NB_QUESTIONS_QUIZ). 
   Plus la réserve est grande, plus le quiz change d'un essai à l'autre.

   POUR AJOUTER UNE QUESTION : copiez un bloc { ... },
   - cat : la catégorie affichée au-dessus de la question
   - q : la question
   - r : les propositions (2 à 4) — pensez à en glisser une un peu fun !
   - bonne : la position de la bonne réponse (0 = première, 1 = deuxième…)
   - e : l'explication affichée après la réponse
   ===================================================================== */
const QUESTIONS_POOL = [
  {
    cat: "Lumière", q: "Combien de temps met la lumière du Soleil pour arriver jusqu'à nous ?",
    r: ["Aucun, c'est instantané", "8 minutes", "8 heures", "Le temps d'une sieste"],
    bonne: 1,
    e: "8 minutes et 20 secondes. Vous voyez donc le Soleil tel qu'il était il y a 8 minutes. Regarder loin, c'est regarder dans le passé..."
  },
  {
    cat: "Étoiles filantes", q: "Une étoile filante, c'est…",
    r: ["Une étoile qui tombe", "Un extraterrestre qui a raté une marche", "Un grain de poussière qui brûle", "Un satellite pressé"],
    bonne: 2,
    e: "Un simple grain de poussière, souvent plus petit qu'un petit pois, qui entre dans l'atmosphère à ~60 km/s et se consume. Les grandes « pluies » ? La Terre traverse le sillage poussiéreux d'une comète."
  },
  {
    cat: "Saturne", q: "Les anneaux de Saturne font 280 000 km de large. Et en épaisseur ?",
    r: ["Quelques dizaines de mètres", "Quelques kilomètres", "Quelques milliers de kilomètres", "C'est juste une tâche sur le télescope"],
    bonne: 0,
    e: "Quelques dizaines de mètres par endroits : proportionnellement plus fins qu'une feuille de papier. Des milliards de blocs de glace en orbite, du grain de sable à la maison."
  },
  {
    cat: "La Lune", q: "Combien d'humains ont marché sur la Lune ?",
    r: ["2", "12", "27", "Aucun"],
    bonne: 1,
    e: "Douze, entre 1969 et 1972. Et pour les amateurs de plateau de cinéma : les réflecteurs laser déposés là-haut permettent encore aujourd'hui de mesurer la distance Terre-Lune au centimètre près."
  },
  {
    cat: "La Lune", q: "Au fil des années, la distance Terre–Lune :",
    r: ["Augmente", "Diminue", "Ne change pas"],
    bonne: 1,
    e: "En moyenne, la Lune s'éloigne de la Terre de 3,8cm/an. La Lune tombe vers la Terre, mais en s'éloignant !"
  },
  {
    cat: "Planètes", q: "La très connue « étoile du Berger », c'est en fait…",
    r: ["La planète Vénus", "Sirius", "L'étoile d'un berger nommé Gérard", "L'étoile polaire"],
    bonne: 0,
    e: "C'est Vénus, qui ne produit aucune lumière : elle réfléchit celle du Soleil. Si brillante qu'on la signale régulièrement comme OVNI. Sous ses jolis nuages : 460 °C et des pluies d'acide."
  },
  {
    cat: "Trous noirs", q: "Si le Soleil devenait un trou noir de même masse, la Terre serait…",
    r: ["Aspirée immédiatement", "Éjectée du système solaire", "Tranquille sur la même orbite", "Transformée en spaghetti"],
    bonne: 2,
    e: "Elle continuerait exactement la même orbite ! Un trou noir n'attire pas plus qu'une étoile de même masse — ce n'est pas un aspirateur. Le spaghetti, c'est réservé à ceux qui s'approchent vraiment trop près."
  },
  {
    cat: "Étoiles", q: "Une étoile bleue est…",
    r: ["Plus froide qu'une rouge", "Plus chaude qu'une rouge", "Triste", "Toujours plus petite"],
    bonne: 1,
    e: "Comme un métal qu'on chauffe : rouge d'abord, puis blanc, puis bleu. Une étoile bleue dépasse les 10 000 °C en surface, une rouge plafonne vers 3 000 °C. Le bleu, ici, c'est la fournaise."
  },
  {
    cat: "ISS", q: "À quelle vitesse file la Station spatiale internationale ?",
    r: ["130 km/h, elle respecte les limitations", "900 km/h, comme un avion", "28 000 km/h", "À la vitesse de la lumière"],
    bonne: 2,
    e: "28 000 km/h : un tour de la Terre en 90 minutes, 16 levers de soleil par jour pour les astronautes. Aucun radar ne l'a jamais flashée."
  },
  {
    cat: "Nous", q: "Le fer de votre sang a été fabriqué…",
    r: ["Au cœur d'étoiles disparues", "Dans le noyau de la Terre", "Pendant le Big Bang", "Dans une usine en Lorraine"],
    bonne: 0,
    e: "Le Big Bang n'a produit que de l'hydrogène et de l'hélium. Tout le reste (carbone, oxygène, calcium, fer, ...) a été forgé dans des étoiles puis dispersé par leurs explosions. Nous sommes littéralement des poussières d'étoiles (désolé pour la Lorraine)."
  },
  {
    cat: "Repères", q: "L'étoile polaire est…",
    r: ["La plus brillante du ciel", "Environ la 50e plus brillante", "Invisible à l'œil nu", "Une ampoule très haute"],
    bonne: 1,
    e: "Idée reçue ! Elle n'est qu'environ 50e. Son vrai talent : l'axe de la Terre pointe vers elle, donc elle indique le nord et ne bouge presque pas de la nuit. La plus brillante, c'est Sirius."
  },
  {
    cat: "Voie lactée", q: "La grande bande laiteuse qui traverse le ciel par nuit noire, c'est…",
    r: ["Des nuages d'altitude", "Notre galaxie vue de l'intérieur", "Du lait renversé par une déesse", "La trace d'un avion géant"],
    bonne: 1,
    e: "Notre propre galaxie vue par la tranche : la lumière cumulée de milliards d'étoiles trop faibles pour être vues une à une. Cela dit, le lait renversé n'est pas si faux : le mythe grec raconte que c'est le lait de la déesse Héra — d'où le mot « galaxie », du grec gala, le lait."
  },
  {
    cat: "Étoiles", q: "Plus une étoile est massive…",
    r: ["Plus elle vit longtemps", "Moins elle vit longtemps", "Plus elle est paresseuse", "Sa masse ne change rien"],
    bonne: 1,
    e: "Les étoiles massives dévorent leur carburant à toute vitesse : quelques millions d'années à peine avant d'exploser en supernova. Les petites naines rouges, économes, vivront des centaines de milliards d'années. Vivre vite ou vivre longtemps, il faut choisir."
  }
];
