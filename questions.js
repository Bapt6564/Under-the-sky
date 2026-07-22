/* =====================================================================
   QUESTIONS.JS — la réserve de questions du quiz
   ---------------------------------------------------------------------
   Toutes les questions ci-dessous forment une RÉSERVE : à chaque
   lancement du quiz, l'app en tire 10 au hasard (réglable dans
   app.js, constante NB_QUESTIONS_QUIZ). Ajoutez-en autant que vous
   voulez, sans limite — plus la réserve est grande, plus le quiz
   change d'une soirée à l'autre.

   ➕ POUR AJOUTER UNE QUESTION : copiez un bloc { ... },
   - cat : la catégorie affichée au-dessus de la question
   - q : la question
   - r : les propositions (2 à 4) — pensez à en glisser une décalée !
   - bonne : la position de la bonne réponse (0 = première, 1 = deuxième…)
   - e : l'explication affichée après la réponse
   ===================================================================== */
const QUESTIONS_POOL = [
  {
    cat: "Lumière", q: "Combien de temps met la lumière du Soleil pour arriver jusqu'à nous ?",
    r: ["Aucun, c'est instantané", "8 minutes", "8 heures", "Le temps de cuire une pizza"],
    bonne: 1,
    e: "8 minutes et 20 secondes (une pizza, c'est 12 minutes : la lumière gagne). Vous voyez donc le Soleil tel qu'il était il y a 8 minutes — regarder loin, c'est regarder dans le passé."
  },
  {
    cat: "Étoiles filantes", q: "Une étoile filante, c'est…",
    r: ["Une étoile qui tombe", "Une étoile qui a raté une marche", "Un grain de poussière qui brûle", "Un satellite pressé"],
    bonne: 2,
    e: "Un simple grain de poussière, souvent plus petit qu'un petit pois, qui entre dans l'atmosphère à ~60 km/s et se consume. Les grandes « pluies » ? La Terre traverse le sillage poussiéreux d'une comète."
  },
  {
    cat: "Saturne", q: "Les anneaux de Saturne font 280 000 km de large. Et en épaisseur ?",
    r: ["Quelques dizaines de mètres", "Quelques milliers de kilomètres", "C'est un disque plein", "C'est un autocollant sur le télescope"],
    bonne: 0,
    e: "Quelques dizaines de mètres par endroits : proportionnellement plus fins qu'une feuille de papier. Des milliards de blocs de glace en orbite, du grain de sable à la maison. Et non, ce n'est pas un autocollant — on nous pose vraiment la question."
  },
  {
    cat: "La Lune", q: "Combien d'humains ont marché sur la Lune ?",
    r: ["2", "12", "27", "Aucun, c'était un plateau de cinéma"],
    bonne: 1,
    e: "Douze, entre 1969 et 1972. Et pour les amateurs de plateau de cinéma : les réflecteurs laser déposés là-haut permettent encore aujourd'hui de mesurer la distance Terre-Lune au centimètre près."
  },
  {
    cat: "Planètes", q: "La très brillante « étoile du Berger », c'est en fait…",
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
    e: "Le Big Bang n'a produit que de l'hydrogène et de l'hélium. Tout le reste — carbone, oxygène, calcium, fer — a été forgé dans des étoiles puis dispersé par leurs explosions. Nous sommes littéralement des poussières d'étoiles (désolé pour la Lorraine)."
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
    r: ["Plus elle vit longtemps", "Plus elle vit court", "Plus elle est paresseuse", "Sa masse ne change rien"],
    bonne: 1,
    e: "Les étoiles massives dévorent leur carburant à toute vitesse : quelques millions d'années à peine avant d'exploser en supernova. Les petites naines rouges, économes, vivront des centaines de milliards d'années. Vivre vite ou vivre longtemps, il faut choisir."
  },
  {
    cat: "Antarès", q: "Antarès, l'étoile rouge du Scorpion, tire son nom du grec « Anti-Arès ». Ça veut dire…",
    r: ["La rivale de Mars", "L'ennemie du Soleil", "Celle qui pique", "La reine des scorpions"],
    bonne: 0,
    e: "« Rivale de Mars » : les Grecs comparaient déjà sa couleur rouge à celle de la planète (Arès, c'est Mars). Quand Mars passe dans le coin, on peut vraiment les confondre. Antarès est une supergéante 700 fois plus grande que le Soleil."
  },
  {
    cat: "Le Scorpion", q: "Si on plaçait Antarès à la place du Soleil, jusqu'où irait sa surface ?",
    r: ["Jusqu'à Mercure", "Jusqu'à l'orbite de Mars", "Jusqu'à Pluton", "Elle resterait toute petite"],
    bonne: 1,
    e: "Elle engloberait l'orbite de Mars ! C'est une supergéante rouge en fin de vie, si dilatée que sa surface est « froide » (3 400 °C, d'où le rouge) malgré sa taille démesurée. Un jour, elle explosera en supernova."
  },
  {
    cat: "Andromède", q: "La galaxie d'Andromède fonce vers nous. Que va-t-il se passer dans ~4,5 milliards d'années ?",
    r: ["Un choc titanesque entre étoiles", "Une fusion des deux galaxies presque sans collision", "Elle nous évite de justesse", "La Terre sera aspirée"],
    bonne: 1,
    e: "Les deux galaxies fusionneront en une seule (« Lactomède »), mais les étoiles sont si espacées que presque aucune ne s'entrechoquera : elles se croiseront dans le vide. C'est la gravité des ensembles qui fera le travail."
  },
  {
    cat: "Andromède", q: "À l'œil nu, la galaxie d'Andromède est l'objet le plus lointain visible sans instrument. À quelle distance ?",
    r: ["2 500 années-lumière", "250 000 années-lumière", "2,5 millions d'années-lumière", "2,5 milliards d'années-lumière"],
    bonne: 2,
    e: "2,5 millions d'années-lumière : sa lumière est partie bien avant l'apparition du genre humain. C'est le point le plus éloigné que l'œil humain peut atteindre sans aide."
  },
  {
    cat: "Distances", q: "La lumière d'Antarès met environ 550 ans à nous parvenir. Ce soir, on la voit donc telle qu'elle était…",
    r: ["À l'instant même", "Il y a 550 ans", "Il y a 8 minutes", "En 1977"],
    bonne: 1,
    e: "Il y a ~550 ans, à l'époque de Jeanne d'Arc. Regarder loin dans l'espace, c'est toujours regarder dans le passé : plus un astre est lointain, plus sa lumière est ancienne."
  },
  {
    cat: "Le Sagittaire", q: "En regardant vers la Théière du Sagittaire, on regarde vers…",
    r: ["Le centre de notre galaxie", "La sortie de la galaxie", "La galaxie d'Andromède", "Le pôle Nord céleste"],
    bonne: 0,
    e: "Vers le centre de la Voie lactée, à ~26 000 années-lumière. C'est pour ça que la bande lactée y est la plus dense et la plus riche en amas et nébuleuses. Au cœur : un trou noir de 4 millions de masses solaires."
  },
  {
    cat: "Signal Wow", q: "En 1977, un radiotélescope capte un signal si intrigant que l'astronome écrit un mot en marge. Lequel ?",
    r: ["« Aliens ! »", "« Wow! »", "« Bingo »", "« Enfin »"],
    bonne: 1,
    e: "« Wow! », entouré au stylo rouge par Jerry Ehman. Ce signal radio de 72 secondes, venu du Sagittaire, n'a jamais été recapté. Longtemps candidat au message extraterrestre, il s'expliquerait plutôt par un sursaut naturel d'hydrogène."
  },
  {
    cat: "Les Pléiades", q: "Les Pléiades sont surnommées « les Sept Sœurs ». Combien de temps leur reste-t-il avant de se disperser ?",
    r: ["Elles sont éternelles", "~250 millions d'années", "Quelques siècles", "Elles se dispersent demain"],
    bonne: 1,
    e: "~250 millions d'années : cet amas ouvert est trop peu dense pour se retenir, ses étoiles s'écartent lentement. Nées ensemble il y a ~100 millions d'années, les Sœurs finiront chacune leur route de leur côté."
  },
  {
    cat: "Les Pléiades", q: "Une célèbre marque de voitures tire son nom et son logo des Pléiades. Laquelle ?",
    r: ["Subaru", "Toyota", "Peugeot", "Tesla"],
    bonne: 0,
    e: "Subaru : c'est le nom japonais des Pléiades, et son logo montre six étoiles de l'amas. Un bel exemple de ciel qui s'invite dans la vie quotidienne."
  },
  {
    cat: "Albireo", q: "Au télescope, Albireo se sépare en deux étoiles de couleurs franchement différentes. Que révèle cette couleur ?",
    r: ["Leur âge", "Leur distance", "Leur température", "Leur humeur"],
    bonne: 2,
    e: "La température ! Comme un métal chauffé : l'étoile bleue est brûlante (~13 000 °C), l'orangée plus « froide » (~4 300 °C). Une fois cette clé donnée, tout le ciel devient un thermomètre géant."
  },
  {
    cat: "Alcor & Mizar", q: "Dans le manche de la Grande Casserole, distinguer Alcor à côté de Mizar servait autrefois de…",
    r: ["Test de vue", "Calendrier", "Boussole", "Preuve de noblesse"],
    bonne: 0,
    e: "De test de vue ! Chez les Romains, les Arabes (qui appelaient Alcor « l'Oubliée ») et les samouraïs japonais. Au télescope, surprise : ce point de lumière cache en réalité un système de six étoiles."
  },
  {
    cat: "Constellations", q: "La constellation qui ressemble le plus vraiment à son nom, c'est sans doute…",
    r: ["La Grande Ourse", "Le Scorpion", "Hercule", "La Balance"],
    bonne: 1,
    e: "Le Scorpion : la longue courbe d'étoiles dessine vraiment un corps qui se termine par une queue recourbée en dard. La plupart des autres constellations demandent beaucoup d'imagination !"
  },
  {
    cat: "Mythologie", q: "Pourquoi la Grande Ourse ne se couche-t-elle jamais sous nos latitudes, selon le mythe grec ?",
    r: ["Elle a peur du noir", "La vengeance jalouse d'Héra", "Elle est trop lourde", "Zeus l'a clouée au ciel"],
    bonne: 1,
    e: "Vengeance d'Héra : jalouse de Callisto (changée en ourse), elle obtient que la constellation ne puisse jamais se reposer sous l'horizon ni se baigner dans la mer. Astronomiquement, c'est parce qu'elle est circumpolaire."
  },
  {
    cat: "Orion", q: "Juste sous la ceinture d'Orion, dans « l'épée », se cache une tache floue visible à l'œil nu. C'est…",
    r: ["Une autre planète", "Une pouponnière d'étoiles (M42)", "Un vaisseau spatial", "Un nuage terrestre"],
    bonne: 1,
    e: "La nébuleuse d'Orion (M42) : un nuage de gaz où des étoiles sont en train de naître en ce moment même. L'un des rares endroits où l'on peut montrer au public une pouponnière stellaire en direct."
  },
  {
    cat: "Éclipses", q: "Pourquoi n'y a-t-il pas une éclipse de Soleil à chaque nouvelle lune ?",
    r: ["La Lune est trop petite", "Son orbite est inclinée", "Le Soleil se cache", "Il en faut deux d'affilée"],
    bonne: 1,
    e: "L'orbite de la Lune est inclinée d'environ 5° : la plupart du temps, son ombre passe au-dessus ou en dessous du Soleil. Il faut un alignement précis, ce qui n'arrive que lors des « saisons d'éclipses », deux fois par an."
  },
  {
    cat: "Éclipses", q: "Une éclipse totale de Soleil est possible grâce à une coïncidence extraordinaire. Laquelle ?",
    r: ["La Lune et le Soleil ont la même taille apparente", "La Lune est en or", "Le Soleil rétrécit", "La Terre s'arrête"],
    bonne: 0,
    e: "Le Soleil est ~400 fois plus grand que la Lune, mais aussi ~400 fois plus loin : les deux ont donc quasiment la même taille dans le ciel. Comme la Lune s'éloigne lentement, cette coïncidence finira par disparaître."
  },
  {
    cat: "La Lune", q: "Beaucoup de cultures voient un animal dans les taches de la Lune. Au Japon et en Chine, c'est…",
    r: ["Un lapin", "Un dragon", "Un tigre", "Un chat"],
    bonne: 0,
    e: "Un lapin, souvent en train de piler du riz (ou du mochi). Ce sont les « mers » lunaires, d'anciennes coulées de lave sombres, qui dessinent la silhouette. En Europe, on y voit plutôt un visage."
  },
  {
    cat: "Télescopes", q: "Pour un télescope, ce qui compte le plus, ce n'est pas le grossissement, mais…",
    r: ["Le diamètre", "La longueur", "La couleur", "La marque"],
    bonne: 0,
    e: "Le diamètre : un télescope est un entonnoir à lumière. Plus le miroir est large, plus il capte de lumière et de détails. Trop grossir ne donne qu'une image sombre et floue. Un miroir de 20 cm collecte ~800 fois plus de lumière que l'œil."
  },
  {
    cat: "Nébuleuses", q: "Une « nébuleuse planétaire », comme l'anneau de la Lyre, a un rapport avec les planètes ?",
    r: ["Oui, elle en fabrique", "Aucun, c'est une étoile morte", "Oui, c'est une planète géante", "Elle les détruit"],
    bonne: 1,
    e: "Aucun rapport ! Le nom vient de leur forme ronde vue dans les petits télescopes du 18e siècle. En réalité, c'est le gaz soufflé par une étoile mourante comme le Soleil. C'est ce qui attend notre Soleil dans ~5 milliards d'années."
  },
  {
    cat: "Cycle des étoiles", q: "Le carbone de nos cellules, le fer de notre sang… d'où viennent ces atomes ?",
    r: ["Du Big Bang directement", "Forgés au cœur d'étoiles", "De la Lune", "On l'ignore totalement"],
    bonne: 1,
    e: "Forgés au cœur d'étoiles, puis dispersés par leurs explosions avant de former le Soleil, la Terre et nous. Le Big Bang n'a produit que de l'hydrogène et de l'hélium. Nous sommes littéralement des poussières d'étoiles."
  },
  {
    cat: "M13", q: "L'amas M13 dans Hercule contient ~300 000 étoiles serrées en boule. Quel âge ont-elles ?",
    r: ["Quelques millions d'années", "~12 milliards d'années", "Elles viennent de naître", "Le même que le Soleil"],
    bonne: 1,
    e: "~12 milliards d'années, presque l'âge de l'Univers : des survivantes de la petite enfance de la Galaxie. En 1974, on a envoyé vers M13 un message radio décrivant l'humanité. Réponse possible dans… au moins 46 000 ans."
  },
  {
    cat: "ISS", q: "La Station spatiale internationale file au-dessus de nos têtes. À quelle vitesse ?",
    r: ["800 km/h comme un avion", "28 000 km/h", "300 km/h", "Elle est immobile"],
    bonne: 1,
    e: "28 000 km/h : un tour de la Terre en 90 minutes, et 16 levers de soleil par jour pour l'équipage. On la repère à l'œil nu comme un point brillant qui glisse sans clignoter (ce qui clignote, c'est un avion)."
  },
  {
    cat: "Exoplanètes", q: "La première planète découverte autour d'une autre étoile que le Soleil (1995) l'a été par une équipe…",
    r: ["Américaine", "Suisse, depuis la France", "Russe", "Chinoise"],
    bonne: 1,
    e: "Les Suisses Michel Mayor et Didier Queloz, depuis l'observatoire de Haute-Provence : 51 Pegasi b. Prix Nobel de physique 2019. On connaît aujourd'hui plus de 5 000 exoplanètes."
  },
  {
    cat: "Pollution lumineuse", q: "Pourquoi utilise-t-on des lampes rouges lors des soirées d'observation ?",
    r: ["C'est plus joli", "Pour préserver la vision nocturne", "Pour effrayer les moustiques", "Par tradition"],
    bonne: 1,
    e: "L'œil met 20 à 30 minutes à s'adapter à l'obscurité, et quelques secondes de lumière blanche suffisent à tout annuler. Le rouge, lui, préserve cette précieuse vision nocturne."
  },
  {
    cat: "Précession", q: "L'étoile polaire n'a pas toujours été Polaris, et ne le restera pas. Pourquoi ?",
    r: ["Les étoiles bougent au hasard", "L'axe de la Terre décrit un lent cercle", "Polaris s'éteint", "C'est une légende"],
    bonne: 1,
    e: "Comme une toupie qui ralentit, l'axe de la Terre décrit un grand cercle en 26 000 ans (la précession). Dans ~12 000 ans, ce sera Véga, bien plus brillante, la future « étoile polaire de luxe »."
  },
];
