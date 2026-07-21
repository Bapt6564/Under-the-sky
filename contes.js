/* =====================================================================
   CONTES.JS — les récits des Contes du ciel
   ---------------------------------------------------------------------
   Contrairement au mémo (fiches courtes, format éclair), les contes
   sont faits pour être lus d'une traite, à voix haute si l'envie vous
   en prend — un format plus long, plus narratif.

   ➕ POUR AJOUTER UN CONTE : copiez un bloc entre accolades { ... },
   changez le slug (l'identifiant entre guillemets, sans espaces ni
   accents), le titre, le résumé et le texte.
   - `texte` est un tableau de paragraphes HTML (un ou plusieurs
     `<p>...</p>`) : découpez le récit en plusieurs paragraphes pour
     qu'il reste agréable à lire, mais rien n'impose de sous-titres
     comme dans le mémo — laissez l'histoire couler.
   - `voirAussi` peut pointer vers des fiches du mémo (pas seulement
     d'autres contes) : écrivez `#/memo/slug-du-sujet` dans le texte,
     ou listez des slugs de contes dans le tableau voirAussi.
   ===================================================================== */
const CONTES = {

  "grande-ourse": {
    titre: "La Grande Ourse et Callisto",
    resume: "Pourquoi cette constellation ne se couche jamais — et pourquoi une mère et son fils tournent éternellement l'un autour de l'autre sans jamais se retrouver.",
    texte: [
      `<p>Callisto était l'une des compagnes de la déesse Artémis, et avait fait vœu de rester chaste pour toujours. Mais Zeus la remarqua et, prenant l'apparence d'Artémis elle-même pour l'approcher, la séduisit. Callisto donna naissance à un fils, Arcas — et le secret ne resta pas secret bien longtemps.</p>`,
      `<p>Héra, l'épouse de Zeus, découvrit la trahison et, folle de jalousie, transforma Callisto en ourse d'un simple geste. Pendant des années, l'ourse erra dans les forêts, fuyant les chasseurs, se cachant de tous — y compris de son propre fils, qui grandissait sans savoir ce qu'elle était devenue.</p>`,
      `<p>Un jour, le destin les remit face à face : Arcas, devenu chasseur, leva sa lance contre l'ourse qui s'approchait de lui sans qu'il la reconnaisse. Zeus, voyant la scène depuis l'Olympe, intervint au tout dernier instant : il changea Arcas en ourson et saisit les deux animaux par la queue pour les placer au ciel, hors de portée de tout danger — ce qui explique, disent les Grecs, pourquoi les ours ont la queue si courte et si étirée : Zeus les a fait tournoyer avant de les lancer parmi les étoiles.</p>`,
      `<p>Héra, jamais apaisée, obtint une dernière vengeance : elle demanda à Poséidon que la Grande Ourse et la Petite Ourse ne puissent jamais se coucher sous l'horizon, ni se baigner dans l'océan comme les autres étoiles. C'est resté vrai depuis : sous nos latitudes, ces deux constellations ne se couchent jamais — elles tournent sans fin autour de l'étoile polaire, la mère et le fils condamnés à se voir de loin, pour toujours, sans jamais se rejoindre.</p>`
    ],
    voirAussi: ["etoile-polaire", "alcor-mizar"]
  },

  "saga-persee": {
    titre: "La saga de Persée",
    resume: "Une reine vaniteuse, un monstre marin, une princesse enchaînée et un héros volant sur un cheval ailé — toute une saga écrite dans le ciel d'automne.",
    texte: [
      `<p>Tout commence par un excès d'orgueil. La reine Cassiopée, épouse du roi Céphée, se vantait haut et fort que sa fille Andromède était plus belle que les Néréides, les nymphes de la mer. Les Néréides, insultées, se plaignirent à Poséidon — et le dieu des mers, pour punir cette arrogance, envoya un monstre marin, Cétus, ravager les côtes du royaume.</p>`,
      `<p>Un oracle consulté par le roi ne laissa qu'une issue : pour apaiser Poséidon, il fallait sacrifier la princesse Andromède au monstre. Enchaînée à un rocher au bord de la mer, elle attendait sa mort quand un jeune héros passa par là, revenant tout juste d'une mission qui semblait impossible : Persée, qui venait de trancher la tête de la Gorgone Méduse — un regard si terrible qu'il pétrifiait quiconque le croisait.</p>`,
      `<p>Persée vit Andromède, tomba immédiatement amoureux, et proposa un marché au roi : il sauverait la princesse si on la lui donnait en mariage. L'accord conclu, il affronta Cétus — certaines versions racontent qu'il le combattit à l'épée, d'autres qu'il lui montra simplement la tête de Méduse, encore capable de pétrifier même morte. Le monstre fut vaincu, Andromède libérée, et les deux se marièrent, montés tous deux sur Pégase, le cheval ailé né du sang de la Gorgone.</p>`,
      `<p>Tous les personnages de cette histoire ont fini par rejoindre le ciel : Cassiopée, Céphée, Andromède, Persée, Pégase et même Cétus se retrouvent aujourd'hui côte à côte dans le ciel d'automne, comme si les dieux avaient voulu garder toute la distribution sous les yeux, pour toujours. Il ne manque qu'un détail cruel : Cassiopée fut condamnée à tourner autour du pôle céleste attachée à son trône — et la moitié de l'année, elle s'y retrouve suspendue la tête en bas, punition éternelle pour sa vanité.</p>`
    ],
    voirAussi: ["andromede", "amas-et", "double-amas-perse", "mythe-persee"]
  },

  "orion-scorpion": {
    titre: "Orion et le Scorpion",
    resume: "Le duel raconté par le ciel lui-même : ces deux constellations ne se lèvent jamais ensemble, et ce n'est pas un hasard.",
    texte: [
      `<p>Orion était un chasseur d'une force et d'une adresse extraordinaires, si sûr de lui qu'il se vantait un jour de pouvoir tuer tous les animaux de la Terre, un par un, s'il le voulait. La déesse Gaïa, la Terre elle-même, entendit cette menace et n'apprécia guère l'arrogance du chasseur envers les créatures qu'elle avait mises au monde.</p>`,
      `<p>Pour lui donner une leçon, elle envoya un simple scorpion — minuscule face au géant chasseur, mais armé d'un venin mortel. Orion, malgré toute sa force, ne vit pas le coup venir : la piqûre suffit à le terrasser. Le chasseur qui se croyait invincible face à n'importe quelle bête tomba devant la plus modeste d'entre elles.</p>`,
      `<p>Zeus plaça les deux adversaires au ciel, mais jamais l'un à côté de l'autre : il les installa aux antipodes exacts de la sphère céleste, pour qu'ils ne se croisent plus jamais. Et c'est exactement ce que l'on peut vérifier soi-même, n'importe quelle nuit d'été ou d'hiver : quand le Scorpion se lève à l'est, Orion est déjà en train de se coucher à l'ouest, comme s'il fuyait éternellement son adversaire. Les deux ne partagent jamais le ciel en même temps — le seul duel de l'histoire grecque qui continue, sans fin, mais toujours à distance.</p>`
    ],
    voirAussi: ["antares-scorpion"]
  }

};
