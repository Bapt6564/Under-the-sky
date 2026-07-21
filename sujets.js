/* =====================================================================
   SUJETS.JS — le contenu du mémo
   ---------------------------------------------------------------------
   Ce fichier ne contient QUE les fiches du mémo : aucun code technique
   ici, vous pouvez modifier ou ajouter un sujet sans rien casser.

   ➕ POUR AJOUTER UN SUJET : copiez un bloc entre accolades { ... },
   changez le slug (l'identifiant entre guillemets, sans espaces ni
   accents), le titre, l'icône, le résumé et les sections.
   ➕ POUR FAIRE UN LIEN INTERNE vers un autre sujet, écrivez dans le
   texte : <a href="#/memo/slug-du-sujet">texte du lien</a>
   Les sections acceptent du HTML : <strong>, <ul><li>, etc.
   La classe "chiffre-cle" met un paragraphe en évidence (encadré doré).
   ===================================================================== */
const SUJETS = {

  "alcor-mizar": {
    titre: "Alcor & Mizar",
    icone: "👁️",
    resume: "Le plus vieux test de vue de l'humanité, caché dans le manche de la Grande Casserole.",
    sections: [
      `<h2>Le test de vue des anciens</h2>
       <p>Regardez la deuxième étoile du manche de la Grande Ourse : c'est <strong>Mizar</strong>. Juste à côté, une étoile plus faible : <strong>Alcor</strong>. Chez les Arabes du Moyen Âge comme chez les Romains, distinguer les deux à l'œil nu était un test de bonne vue — on l'appelait « le cavalier et son cheval ».</p>`,
      `<h2>La surprise au télescope</h2>
       <p>Pointez un <a href="#/memo/types-telescopes">télescope</a> sur Mizar : elle se dédouble ! Mizar fut la <strong>première étoile double découverte au télescope</strong> (vers 1617). Et ce n'est pas fini : chacune de ces deux étoiles est elle-même double, et Alcor aussi.</p>
       <div class="chiffre-cle">Ce point de lumière est en réalité un système de <strong>6 étoiles</strong> liées par la gravité, à environ 80 années-lumière de nous.</div>`,
      `<h2>À raconter au public</h2>
       <ul>
         <li>Faire faire le test à l'œil nu avant de montrer le télescope — effet garanti quand Mizar se dédouble.</li>
         <li>La lumière qu'on reçoit ce soir est partie il y a ~80 ans : demander aux gens ce qui se passait sur Terre à l'époque.</li>
         <li>La majorité des étoiles de la Galaxie vivent en couple ou en famille — notre Soleil solitaire est plutôt l'exception.</li>
       </ul>`
    ],
    voirAussi: ["types-telescopes", "cycle-vie-etoiles"]
  },

  "iss": {
    titre: "La Station spatiale internationale",
    icone: "🛰️",
    resume: "Le troisième objet le plus brillant du ciel est habité — et il passe peut-être ce soir.",
    sections: [
      `<h2>Une maison en orbite</h2>
       <p>L'ISS est habitée <strong>en permanence depuis novembre 2000</strong> : depuis cette date, il y a toujours eu des humains dans l'espace. Grande comme un terrain de football, elle tourne à environ <strong>400 km</strong> d'altitude — la distance Paris–Lyon, mais à la verticale.</p>
       <div class="chiffre-cle">Vitesse : <strong>28 000 km/h</strong>, soit un tour de la Terre en 90 minutes. Les astronautes voient <strong>16 levers de soleil par jour</strong>.</div>`,
      `<h2>Comment la repérer</h2>
       <ul>
         <li>Un point très brillant qui <strong>glisse lentement</strong> et régulièrement, sans clignoter (ce qui clignote, c'est un avion).</li>
         <li>Visible seulement en début ou fin de nuit : il faut qu'elle soit éclairée par le Soleil pendant que nous sommes dans l'ombre.</li>
         <li>Quand elle entre dans l'ombre de la Terre, elle rougit puis <strong>s'éteint en quelques secondes</strong> — spectaculaire.</li>
         <li>Les passages se prévoient à la minute près (heavens-above.com, appli Spot the Station) : à vérifier avant chaque soirée.</li>
       </ul>`,
      `<h2>Bon à savoir</h2>
       <p>À bord, la gravité n'est pas nulle : elle vaut ~90 % de celle au sol ! Les astronautes flottent parce qu'ils sont en <strong>chute libre permanente</strong> — la station tombe autour de la Terre sans jamais la toucher. C'est aussi ce qui arrive à la Lune.</p>`
    ],
    voirAussi: []
  },

  "m13": {
    titre: "Le grand amas d'Hercule (M13)",
    icone: "✨",
    resume: "Une boule de 300 000 étoiles presque aussi vieilles que l'Univers.",
    sections: [
      `<h2>Une ruche d'étoiles</h2>
       <p>Dans la constellation d'Hercule, ce petit flocon flou au télescope est un <strong>amas globulaire</strong> : environ <strong>300 000 étoiles</strong> serrées dans une sphère de 150 années-lumière, à ~23 000 années-lumière de nous. Au centre, les étoiles sont des centaines de fois plus proches les unes des autres que dans notre voisinage : là-bas, la nuit n'existe presque pas.</p>`,
      `<h2>Des fossiles du ciel</h2>
       <p>Ses étoiles ont environ <strong>12 milliards d'années</strong> — presque l'âge de l'Univers. Ce sont des survivantes de la petite enfance de la Galaxie, qui n'ont jamais explosé car les étoiles peu massives <a href="#/memo/cycle-vie-etoiles">vivent très longtemps</a>. La Voie lactée compte ~150 amas globulaires en orbite autour d'elle, comme des abeilles autour de la ruche.</p>`,
      `<h2>Le message d'Arecibo</h2>
       <p>En 1974, le radiotélescope d'Arecibo a envoyé vers M13 un message décrivant l'humanité : notre ADN, notre système solaire, notre silhouette. Réponse au plus tôt dans… <strong>46 000 ans</strong>. C'était surtout un geste symbolique — et une belle façon de parler des distances.</p>`
    ],
    voirAussi: ["cycle-vie-etoiles", "types-telescopes"]
  },

  "trous-noirs": {
    titre: "Les trous noirs",
    icone: "🕳️",
    resume: "Ni trous, ni aspirateurs cosmiques : des astres si denses que même la lumière n'en sort pas.",
    sections: [
      `<h2>C'est quoi, au juste ?</h2>
       <p>Un trou noir, c'est de la matière tellement comprimée que sa gravité empêche tout de s'échapper, <strong>même la lumière</strong>. La frontière de non-retour s'appelle <strong>l'horizon des événements</strong>. Pour transformer la Terre en trou noir, il faudrait la compresser à la taille… d'une bille de 2 cm.</p>`,
      `<h2>Non, ils n'aspirent pas tout</h2>
       <p>Idée reçue tenace ! Si le Soleil devenait un trou noir de même masse, la Terre <strong>continuerait exactement la même orbite</strong> (il ferait juste très froid et très noir). Un trou noir n'attire pas plus qu'une étoile de même masse — il faut vraiment s'en approcher pour être en danger.</p>`,
      `<h2>D'où viennent-ils ?</h2>
       <p>Les trous noirs « ordinaires » naissent à la <a href="#/memo/cycle-vie-etoiles">mort des étoiles très massives</a>, quand le cœur s'effondre sur lui-même. Mais il existe aussi des <strong>trous noirs supermassifs</strong> au centre des galaxies : le nôtre, Sagittarius A*, pèse 4 millions de Soleils.</p>
       <div class="chiffre-cle">On les a longtemps « vus » indirectement (étoiles qui orbitent autour de rien, gaz surchauffé). Depuis <strong>2019</strong>, on a de vraies images de leur silhouette, et depuis <strong>2015</strong> on les « entend » fusionner grâce aux ondes gravitationnelles.</div>`,
      `<h2>La question qui revient toujours</h2>
       <p>« Que se passe-t-il si on tombe dedans ? » Près d'un petit trou noir, la gravité tire tellement plus fort sur les pieds que sur la tête qu'on serait étiré comme un spaghetti — le terme scientifique est vraiment <strong>« spaghettification »</strong>. Vu de dehors, paradoxe : on verrait la personne ralentir et se figer pour toujours sur l'horizon.</p>`
    ],
    voirAussi: ["cycle-vie-etoiles"]
  },

  "cycle-vie-etoiles": {
    titre: "Le cycle de vie d'une étoile",
    icone: "⭐",
    resume: "De nuage de gaz à naine blanche, étoile à neutrons ou trou noir — et nous au milieu.",
    sections: [
      `<h2>1. La naissance</h2>
       <p>Tout commence par un nuage de gaz et de poussière qui s'effondre sous sa propre gravité. Quand le cœur atteint ~10 millions de degrés, la <strong>fusion de l'hydrogène s'allume</strong> : une étoile est née. La nébuleuse d'Orion, visible l'hiver, est une pouponnière où ça se passe en ce moment.</p>`,
      `<h2>2. La vie adulte : un bras de fer</h2>
       <p>Toute la vie d'une étoile est un équilibre entre la <strong>gravité</strong> qui la comprime et la <strong>pression de la fusion</strong> qui la gonfle. Le Soleil transforme 600 millions de tonnes d'hydrogène en hélium <em>chaque seconde</em>, et il tiendra 10 milliards d'années au total.</p>
       <div class="chiffre-cle">Le paradoxe à retenir : <strong>plus une étoile est massive, plus elle vit court</strong>. Les géantes brûlent tout en quelques millions d'années ; les petites naines rouges vivront des centaines de milliards d'années.</div>`,
      `<h2>3. Fin de vie des étoiles comme le Soleil</h2>
       <p>À court d'hydrogène, l'étoile gonfle en <strong>géante rouge</strong> (le Soleil avalera Mercure et Vénus), souffle ses couches externes en une <strong>nébuleuse planétaire</strong> (M57, l'anneau de la Lyre, en est une superbe au télescope), et son cœur devient une <strong>naine blanche</strong> : une étoile morte de la taille de la Terre.</p>`,
      `<h2>4. Fin de vie des étoiles massives</h2>
       <p>Les plus massives finissent en <strong>supernova</strong> : pendant quelques semaines, une seule étoile brille comme une galaxie entière. Le cœur devient une <strong>étoile à neutrons</strong> (une cuillère à café pèserait un milliard de tonnes) ou, pour les plus massives, un <a href="#/memo/trous-noirs">trou noir</a>.</p>`,
      `<h2>5. Et nous dans tout ça</h2>
       <p>Le Big Bang n'a fabriqué que de l'hydrogène et de l'hélium. Le carbone, l'oxygène, le calcium, le fer de notre corps ont été <strong>forgés au cœur d'étoiles</strong> puis dispersés par leurs explosions, avant de former le Soleil, la Terre… et nous. <strong>Nous sommes littéralement des poussières d'étoiles.</strong></p>`
    ],
    voirAussi: ["trous-noirs", "m13", "alcor-mizar"]
  },

  "types-telescopes": {
    titre: "Les types de télescopes",
    icone: "🔭",
    resume: "Lentilles ou miroirs ? Ce qui compte, ce n'est pas le grossissement : c'est le diamètre.",
    sections: [
      `<h2>Deux grandes familles</h2>
       <ul>
         <li><strong>La lunette (réfracteur)</strong> : des lentilles, comme celle de Galilée en 1609. Images très contrastées, idéale pour la Lune et les planètes, mais chère au-delà de 10 cm de diamètre.</li>
         <li><strong>Le télescope (réflecteur)</strong> : un miroir au fond du tube, inventé par Newton en 1668. C'est la formule de tous les grands instruments — beaucoup de diamètre pour beaucoup moins cher.</li>
       </ul>
       <p>Le fameux <strong>Dobson</strong>, star des soirées publiques, est un télescope de Newton posé sur une monture ultra-simple : tout le budget passe dans le miroir.</p>`,
      `<h2>Ce qui compte vraiment : le diamètre</h2>
       <p>Un télescope est avant tout un <strong>entonnoir à lumière</strong>. Plus le miroir est grand, plus on capte de lumière et de détails. Le grossissement, lui, se change simplement avec l'oculaire — et trop grossir ne donne qu'une image sombre et floue.</p>
       <div class="chiffre-cle">Un miroir de 200 mm collecte environ <strong>800 fois plus de lumière que l'œil</strong> : c'est ce qui rend visibles les nébuleuses et les <a href="#/memo/m13">amas d'étoiles</a>.</div>`,
      `<h2>Pourquoi l'image est à l'envers ?</h2>
       <p>Question favorite du public ! Optiquement, l'image est renversée, et on ne la redresse pas exprès : chaque lentille ajoutée mange de la lumière, et dans l'espace… il n'y a ni haut ni bas.</p>`,
      `<h2>Et les télescopes géants</h2>
       <p>Les observatoires professionnels utilisent des miroirs de 8 à 40 mètres, souvent en segments, installés en altitude pour fuir la turbulence de l'air. Et le télescope spatial James-Webb observe depuis l'espace, avec son miroir doré de 6,5 m, à 1,5 million de km de la Terre.</p>`
    ],
    voirAussi: ["alcor-mizar", "m13"]
  }
};
