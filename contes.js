/* =====================================================================
   CONTES.JS — les récits des Contes du ciel
   ---------------------------------------------------------------------
   Contrairement au mémo (fiches courtes, format éclair), les contes
   sont faits pour être lus d'une traite, à voix haute si l'envie vous
   en prend — un format plus long, plus narratif.

   ➕ POUR AJOUTER UN CONTE : copiez un bloc entre accolades { ... },
   changez le slug (l'identifiant entre guillemets, sans espaces ni
   accents), le titre, le résumé et le texte.
   - `texte` est un tableau de paragraphes HTML. Vous pouvez utiliser
     <h2>...</h2> pour titrer les différentes versions culturelles d'un
     même mythe, <p>...</p> pour les paragraphes, <strong> pour les
     mots importants.
   - `voirAussi` peut pointer vers des fiches du mémo (#/memo/slug) ou
     vers d'autres contes (dans le tableau, un slug de conte suffit).
   ===================================================================== */
const CONTES = {

  "deux-ourses": {
    titre: "Les deux Ourses",
    resume: "La constellation la plus connue du ciel du nord a inspiré des récits sur tous les continents : nymphe changée en ourse, écureuil poursuivi, serpent vengeur, char d'Odin, jambe de bœuf de Seth…",
    texte: [
      `<p>La « Casserole » (ou « Chariot ») est probablement l'astérisme le plus connu du ciel, pourtant il ne représente qu'une petite partie de la constellation de la <strong>Grande Ourse</strong>. Celle-ci fait partie des constellations <strong>circumpolaires</strong> : sous nos latitudes, elle ne passe jamais sous l'horizon. Voici quelques-unes des innombrables histoires qu'elle a inspirées à travers le monde.</p>`,

      `<h2>Grèce — Callisto</h2>
       <p>Callisto était une nymphe et suivante d'Artémis. Zeus en tomba amoureux, et neuf mois plus tard elle donna naissance à son fils, Arcas (« ours » en grec). Héra, jalouse, transforma Callisto en une Grande Ourse, condamnée à errer dans la forêt. Arcas fut recueilli par Artémis et élevé comme chasseur. Des années plus tard, alors qu'il chassait dans la forêt avec ses deux chiens, il aperçut une petite ourse et sa mère. Au moment où il s'apprêtait à la tuer, Zeus eut pitié et les envoya toutes deux dans le ciel, formant la Grande et la Petite Ourse. Arcas, découvrant qu'il s'agissait de sa mère, demanda à les rejoindre : il devint <a href="#/memo/etoile-polaire">Arcturus</a>, le gardien des ours, ses chiens de chasse à ses côtés. Héra, pour se venger, obtint que ces constellations ne puissent jamais se reposer sous l'horizon ni se baigner dans la mer.</p>
       <p>Les deux ourses sont ainsi condamnées à tourner sans cesse autour de l'étoile Polaire, suivies par la constellation du Bouvier, dont l'étoile principale, <strong>Arcturus</strong>, signifie « gardien de l'Ours ». Le nom du Bouvier vient du latin : les étoiles de la Grande Ourse y étaient vues comme sept bœufs (<em>septem triones</em>), et le Bouvier comme un laboureur guidant chaque nuit ces sept bœufs dans leur rotation autour du pôle. C'est de là que vient le mot <strong>septentrion</strong>, qui désigne le Nord (comme <em>méridional</em> désigne le Sud).</p>`,

      `<h2>Amérique du Nord — l'écureuil et le serpent</h2>
       <p>Dans une ancienne légende d'une tribu d'Amérique du Nord, animaux et humains vivaient en harmonie, mais la Grande Ourse, gourmande, se mit à dévorer les enfants des Indiens. Malgré un avertissement du Grand Esprit, elle continua, et fut transformée en écureuil. Plus tard, pour se racheter, elle sauva des oiseaux prisonniers d'un sorcier et d'un Grand Ours Blanc. Par la ruse, elle libéra les oiseaux, mais fut poursuivie par ses ennemis. En s'échappant vers le ciel, une flèche du sorcier immobilisa sa queue, formant la Petite et la Grande Ourse, l'étoile Polaire marquant l'endroit. Toutes les nuits, on peut encore observer cette course-poursuite : le Petit Écureuil tourne en rond autour de la flèche qui immobilise le bout de sa queue, et le Grand Ours Blanc ne cesse de le poursuivre.</p>
       <p>Une autre tribu raconte l'histoire d'un serpent à sonnettes moqué par l'étoile Polaire, qui l'appelait « ridicule » à cause de son corps sans bras ni jambes. Humilié, le serpent implora Mère la Terre, qui lui offrit des crochets venimeux. La fois suivante où l'étoile Polaire l'insulta, le serpent la mordit. Effrayée, l'étoile Polaire retourna à sa place dans le ciel et, depuis ce jour, elle reste immobile, tandis que toutes les autres étoiles tournent autour d'elle.</p>`,

      `<h2>Monde arabe — les Filles du Brancard</h2>
       <p>Dans la culture arabe coexistent deux traditions : l'une propre aux Arabes, souvent antérieure à l'Islam, l'autre héritée des Grecs par leurs traductions. La Grande Ourse y porte donc deux noms : « Le Grand Ours », venu de la légende de Callisto, et « les Filles du Grand Brancard », d'une légende où sept filles cherchent à venger leur père, tué par le Capricorne, en portant sans fin son brancard mortuaire et en poursuivant le meurtrier.</p>
       <p>Les noms d'étoiles que nous utilisons aujourd'hui viennent des deux légendes : <strong>Megrez</strong> (« la queue de l'ours ») et <strong>Phecda</strong> (« la cuisse de l'ours ») dérivent des noms arabes désignant les parties du corps de l'Ourse, tandis qu'<strong>Alkaïd</strong>, légèrement à l'écart des autres, est aussi appelée « la Boiteuse », en référence à son nom complet « le Chef des Filles du Brancard ».</p>
       <p>Chez les Arabes du Tigré, en Abyssinie, la légende diffère : les sept étoiles sont les frères d'un homme tué par erreur par Djah, l'étoile Polaire. Effrayé, Djah se réfugia auprès des étoiles κ et λ du Dragon, les Qerên, qui le protégèrent en se plaçant entre lui et les frères en colère. Ceux-ci, refusant d'enterrer leur frère avant de l'avoir vengé, le placèrent sur un brancard mortuaire qu'ils portent dans le ciel. L'étoile centrale, Megrez, représente le frère mort — ce qui explique pourquoi sa lumière est plus faible que les autres.</p>`,

      `<h2>Chine — le Boisseau du Nord</h2>
       <p>En Chine, la Grande Ourse est connue sous plusieurs noms, notamment <em>Tchi-Hsing</em> (« Les Sept Étoiles ») et <em>Tou</em>, une mesure de contenance pour le riz ou le blé, souvent traduite par « Boisseau ». Appelée <em>Bei-Tou</em> (« Le Boisseau du Nord »), elle a un pendant mythique au Sud, <em>Nan-Tou</em>, où deux dieux jouent aux échecs et décident de l'heure de la mort des humains. Perçue comme le siège d'esprits malfaisants par les Taoïstes et comme le trône de Shang-Di, le dieu suprême, elle était aussi vénérée par les marins, qui l'assimilaient à Tian-Hou, la déesse protectrice des navigateurs.</p>`,

      `<h2>Égypte — la Jambe de Bœuf</h2>
       <p>Les Égyptiens appelaient la Grande Ourse « la Jambe de Bœuf », « l'Outil qui Frappe » ou « le Bâton ». Dès le début de leur histoire, cette constellation était considérée comme maléfique, bien qu'elle fasse partie des « étoiles indestructibles » qui ne se couchent jamais. En raison de cette association avec le mal, elle fut progressivement assimilée à <strong>Seth</strong>, le dieu ennemi d'Osiris, et reçut le nom de « Chien de Seth ». Pour se protéger de ses maléfices, les Égyptiens l'entourèrent d'autres constellations chargées de la surveiller.</p>`,

      `<h2>Micmacs — la chasse à l'Ours</h2>
       <p>Les Micmacs (peuple autochtone du Nord-Est américain) racontent la chasse de l'Ours par sept chasseurs, représentés par les étoiles de la Grande Ourse et du Bouvier. Au printemps, l'Ours sort de sa caverne — la <a href="#/memo/couronne-boreale">Couronne boréale</a> — déclenchant la chasse. Les chasseurs le poursuivent toute l'année. En automne, le chasseur Rouge-Gorge blesse l'Ours, et son sang colore les feuilles en rouge. Finalement, les chasseurs l'attrapent et le mangent, laissant son squelette visible dans le ciel durant l'hiver. Au printemps suivant, un nouvel Ours sort de sa tanière, et la chasse reprend. C'est aussi pourquoi le rouge-gorge porte une tache rouge sur son plumage : le signe de sa victoire sur l'Ourse.</p>`,

      `<h2>Mésopotamie — le Chariot</h2>
       <p>Le Chariot est une figure céleste d'origine mésopotamienne. Dès la première moitié du IIe millénaire avant notre ère, le nom <em>Ṣumbu</em> (« le Chariot ») apparaît dans des textes comme les « Prières aux dieux de la nuit », où il désigne l'étoile Alpha Ursae Majoris. La série MUL.APIN, premier traité d'astronomie de cette civilisation (au plus tard 627 av. J.-C.), décrit les étoiles de Ṣumbu. La déesse Mulissu, « la Dame du Vent », lui est associée ; elle est l'épouse du dieu Elil, « le Maître du Vent », qui préside le ciel boréal. Marduk, dieu prééminent de Babylone, prit aussi <em>zarû</em>, « le timon », comme emblème céleste.</p>`,

      `<h2>Odin et le corbeau</h2>
       <p>Dans la tradition germanique, la Grande Ourse est perçue comme le char d'Odin, accompagné de trois chevaux — <a href="#/memo/alcor-mizar">Alcor</a> étant le corbeau d'Odin. Dans l'Antiquité, Alcor et sa voisine Mizar servaient de test de vision : au Japon, où on les nommait Nakaga et Miakaga, leur séparation évaluait la vue des samouraïs — ceux capables de distinguer Alcor étaient jugés aptes à devenir archers.</p>`
    ],
    voirAussi: ["etoile-polaire", "alcor-mizar", "couronne-boreale"]
  },

  "saga-persee": {
    titre: "Cassiopée et la légende d'Andromède",
    resume: "Une reine vaniteuse, un monstre marin, une princesse enchaînée et un héros sur un cheval ailé — toute une saga que l'on retrouve, personnage par personnage, dans le ciel d'automne.",
    texte: [
      `<p>Près du Dragon, on trouve les constellations de <strong>Cassiopée</strong>, <strong>Céphée</strong>, <strong>Andromède</strong>, <strong>Persée</strong> et <strong>Pégase</strong> — et elles racontent toutes une seule et même histoire.</p>`,
      `<p>Dans la mythologie grecque, Cassiopée est l'épouse de Céphée, roi d'Éthiopie. Elle prétendit un jour que leur fille Andromède était plus belle que les Néréides, les nymphes de la mer. Outrées, celles-ci implorèrent Poséidon de les venger. Le dieu des mers envoya alors un monstre marin, <strong>Cetus</strong>, ravager les côtes d'Éthiopie. La seule façon de sauver le royaume était de sacrifier Andromède en l'offrant au monstre.</p>`,
      `<p>Andromède fut donc enchaînée à un rocher en bord de mer, destinée à être dévorée. Mais <strong>Persée</strong>, le héros qui venait de vaincre la Méduse, intervint. Monté sur son cheval ailé Pégase, il avait arraché à Céphée la promesse de lui donner la main d'Andromède en échange de son sauvetage. Grâce à la tête de Méduse, capable de pétrifier quiconque la regardait, Persée transforma le monstre en pierre et sauva la princesse.</p>`,
      `<p>Pour rappeler qu'il n'est jamais bon de se vanter, et pour punir l'orgueil de Cassiopée, tous les protagonistes de cette histoire — Cetus compris — furent placés dans le ciel sous forme de constellations, où ils brillent encore aujourd'hui. Cassiopée, elle, fut condamnée à tourner autour du pôle attachée à son trône : une partie de la nuit, elle s'y retrouve la tête en bas, ultime punition de sa vanité.</p>`,
      `<p>Toute cette région du ciel se prête à une belle soirée d'observation : on y trouve la <a href="#/memo/andromede">galaxie d'Andromède</a>, l'<a href="#/memo/amas-et">amas E.T.</a> dans Cassiopée, et le <a href="#/memo/double-amas-perse">double amas de Persée</a>. Et c'est dans la constellation voisine de Pégase que fut découverte, en 1995, la toute première <a href="#/memo/exoplanetes">exoplanète</a> autour d'une étoile comme le Soleil.</p>`
    ],
    voirAussi: ["andromede", "amas-et", "double-amas-perse", "mythe-persee", "exoplanetes"]
  },

  "orion-scorpion": {
    titre: "Orion et le Scorpion",
    resume: "Le chasseur qui se croyait invincible, terrassé par le plus petit des animaux — un duel que le ciel rejoue chaque nuit, les deux adversaires ne se croisant jamais.",
    texte: [
      `<p>À l'époque grecque très ancienne, du temps des chasseurs, <strong>Orion</strong> servait de calendrier : lorsqu'il se levait juste avant l'aube, l'été approchait ; juste après le crépuscule, l'hiver ; et lorsqu'il se levait à minuit, il était temps de récolter les raisins.</p>`,
      `<h2>Grèce — le chasseur et le scorpion</h2>
       <p>Orion, fils de Poséidon et de la nymphe Euryale, était très grand, très fort et très beau — si grand, dit la légende, qu'il pouvait marcher dans la mer sans se mouiller la tête. Sur l'île de Chios, il tomba follement amoureux de la princesse Mérope. Pour l'épouser, Œnopion, le père de Mérope, lui demanda de tuer tous les animaux dangereux de l'île. Accompagné de son grand et de son petit chien, Orion s'exécuta — sauf un énorme taureau sauvage caché au fond de la forêt. Le roi refusa alors de lui donner la main de sa fille.</p>
       <p>Furieux, Orion quitta l'île en jurant de tuer tous les animaux qui croiseraient sa route. La déesse de la Terre, Gaïa, le prit très mal et ordonna à un scorpion d'aller le piquer. Orion, mortellement blessé, tomba à terre. De nos jours encore, on voit la constellation du <a href="#/memo/antares-scorpion">Scorpion</a> se lever à l'est au moment où les étoiles d'Orion touchent l'horizon ouest. Heureusement, la mort d'un demi-dieu ne dure pas : le lendemain soir, grâce à Ophiuchus (« Celui qui tient le Serpent », le père des médecins) qui lui donne une potion, Orion réapparaît en pleine forme. Le Scorpion le poursuit donc toujours — mais comme ils sont placés aux antipodes du ciel, ils ne se rencontreront jamais.</p>`,
      `<h2>Égypte — Osiris et Seth</h2>
       <p>Les Égyptiens associaient Orion à Horus, le dieu-soleil, et parfois à Osiris, son père. Osiris, dieu et roi du monde, avait un demi-frère jaloux, <strong>Seth</strong>, dieu des ténèbres. Un jour, Seth présenta à Osiris une superbe boîte, promettant de l'offrir à qui y entrerait parfaitement. La boîte, fabriquée sur mesure pour Osiris, se referma sur lui : Seth scella le couvercle et laissa Osiris mourir étouffé, puis découpa son corps en quatorze morceaux dispersés à travers l'Égypte.</p>
       <p>Isis, l'épouse d'Osiris, retrouva tous les morceaux et, avec l'aide de Neftys, Anubis et Toth, reconstitua le corps — créant ainsi la première momie. Par la magie, Isis et Neftys, changées en milans, insufflèrent la vie à Osiris ; une semence divine jaillit, engendrant Horus et créant, en montant au ciel, la <a href="#/memo/voie-lactee">Voie lactée</a>. Osiris devint le dieu immortel de l'au-delà, sous la forme de la constellation d'Orion. Seth, lui, fut représenté par la « Jambe de Bœuf » (notre <a href="#/contes/deux-ourses">Grande Ourse</a>), symbole de son caractère maléfique.</p>`,
      `<h2>Le Scorpion, de la Mésopotamie à Antarès</h2>
       <p>La constellation du Scorpion trouve ses origines dans l'astronomie mésopotamienne : dès la fin du IIIe millénaire avant notre ère, les astronomes y avaient identifié Alpha Scorpii, dédiant cette région australe au seigneur de la Sagesse et des Eaux, Enki, et à la divinité de l'Amour, Inanna (Ishtar chez les Babyloniens).</p>
       <p>Au cœur du Scorpion brille <strong>Antarès</strong>, remarquable par sa couleur rougeâtre. Son nom, du grec « Anti-Arès », en fait le rival de la planète Mars, le dieu de la guerre : les deux astres se disputent la même teinte rouge. La constellation s'étire derrière Antarès en une longue queue recourbée comme la crosse d'un évêque, prête à piquer l'imprudent.</p>`,
      `<p>Chez les Arabes, l'histoire du Scorpion se mêle à celle des Pléiades : voir le conte de <a href="#/contes/pleiades">Soraya</a>.</p>`
    ],
    voirAussi: ["antares-scorpion", "voie-lactee", "deux-ourses", "pleiades"]
  },

  "triangle-ete": {
    titre: "Le Triangle d'été et ses musiciens",
    resume: "Véga la lyre d'Orphée, Altaïr l'œil de l'aigle de Zeus, Deneb la queue du cygne — trois constellations liées par la musique, d'Orphée à Aryon sauvé par un dauphin.",
    texte: [
      `<p>Le <a href="#/memo/triangle-ete">Triangle d'été</a> se compose de trois étoiles brillantes de trois constellations différentes : <strong>Véga</strong>, <strong>Deneb</strong> et <strong>Altaïr</strong>.</p>`,
      `<h2>Véga et la lyre d'Orphée</h2>
       <p>Véga, l'étoile la plus brillante de la constellation de la Lyre, incarne l'instrument d'<strong>Orphée</strong>, le légendaire musicien de la Grèce antique, capable d'envoûter les dieux et d'apaiser les esprits des Enfers par ses mélodies. Véga tient aussi une place à part dans l'histoire de l'astronomie : première étoile photographiée après le Soleil (en 1850), première dont on a mesuré le spectre, et l'une des premières dont on a déterminé la distance par parallaxe. Elle sert encore de référence pour mesurer la luminosité des autres étoiles.</p>
       <p>Dans la Lyre, on trouve aussi Sheliak et Sulafat, dont les noms signifient « la harpe » et « la tortue » — Sulafat évoquant l'époque où les carapaces de tortue servaient de caisse de résonance aux instruments.</p>`,
      `<h2>Altaïr, l'œil de l'Aigle</h2>
       <p>Altaïr est l'étoile principale de la constellation de l'Aigle. Dans la mythologie grecque, l'aigle est l'animal sacré de Zeus, qui l'utilise pour porter la foudre. En tant qu'œil de l'aigle, Altaïr symbolise la puissance et la vigilance divines.</p>`,
      `<h2>Deneb, la queue du Cygne</h2>
       <p>Deneb représente la queue du Cygne. Selon une légende grecque, Zeus se transforma en cygne pour séduire Léda, donnant naissance aux Gémeaux (Castor et Pollux) et à Hélène de Troie. Deneb pourrait aussi symboliser Orphée qui, après sa mort violente, fut transformé en cygne et placé près de sa lyre. En astronomie chinoise, Deneb fait partie de l'astérisme Tianjin, un gué permettant de traverser la Voie lactée, perçue comme un fleuve céleste. Le Cygne est parfois surnommé « la Croix du Nord », en écho à la Croix du Sud.</p>
       <p>Au sein du Cygne, <a href="#/memo/albireo">Albireo</a> se distingue comme une superbe étoile double, remarquable pour le contraste de couleur entre ses deux composantes.</p>`,
      `<h2>La légende d'Aryon</h2>
       <p>Ces constellations se retrouvent dans la légende d'Aryon, musicien et poète de la Grèce antique. Lors d'une traversée en mer pour donner un concert, les marins complotèrent de le tuer pour s'emparer de ses richesses. Aryon demanda à jouer une dernière mélodie. Sa performance, d'une beauté mélancolique, évoquait le chant du cygne. Émus, les marins ne purent se résoudre à le tuer ; Aryon en profita pour se jeter à la mer. Un dauphin, sensible à sa musique, le sauva et le ramena sur la terre ferme. Aryon révéla le complot, et les marins furent punis. En reconnaissance de son courage, Aryon et le dauphin furent immortalisés dans le ciel, aux côtés du Cygne.</p>`
    ],
    voirAussi: ["triangle-ete", "albireo", "epsilon-lyre", "nebuleuse-lyre"]
  },

  "hercule-dragon": {
    titre: "Hercule et le Dragon",
    resume: "Nichée entre la Lyre et le Bouvier, la constellation d'Hercule évoque les douze travaux du héros — et son combat éternel contre Ladon, le dragon aux cent têtes.",
    texte: [
      `<p>Nichée entre la Lyre et le Bouvier, la constellation d'<strong>Hercule</strong> évoque les exploits du héros mythologique et ses douze travaux. Parmi ces épreuves, il devait s'emparer des pommes d'or du jardin des Hespérides, gardées par <strong>Ladon</strong>, un dragon à cent têtes.</p>`,
      `<p>Ce dragon, désormais figé dans le ciel sous la constellation du Dragon, serpente autour du pôle nord céleste, enroulant la Petite Ourse dans son étreinte. Hercule, souvent représenté tout près sur les cartes célestes, semble en perpétuel combat avec la créature.</p>`,
      `<p>Près du buste d'Hercule brille <a href="#/memo/m13">M13, le Grand amas d'Hercule</a>, l'un des plus beaux amas globulaires du ciel boréal — découvert par Edmond Halley en 1714, et vers lequel fut envoyé, en 1974, le célèbre message d'Arecibo.</p>`
    ],
    voirAussi: ["m13", "couronne-boreale"]
  },

  "pleiades": {
    titre: "Les Pléiades, les Sept Sœurs",
    resume: "Sept filles d'Atlas changées en étoiles, mais aussi une poule et ses poussins, sept chiots amérindiens, le calendrier aztèque de la fin du monde… et la tragique Soraya des Arabes.",
    texte: [
      `<p>Les <a href="#/memo/pleiades">Pléiades</a>, ou « Sept Sœurs », sont un amas d'étoiles bien visible à l'œil nu dans la constellation du Taureau. Six ou sept étoiles se distinguent facilement, jusqu'à une douzaine par ciel très sombre — ce qui a nourri partout des légendes sur la « septième étoile disparue ».</p>`,
      `<h2>Grèce — les filles d'Atlas</h2>
       <p>Dans la mythologie grecque, les Pléiades étaient les filles d'Atlas, le titan condamné à porter le ciel sur ses épaules, et de Pléioné : Alcyone, Célaeno, Électre, Astérope, Taygète, Maia et Mérope. Pour les protéger, Zeus les transforma en étoiles. Plusieurs mythes expliquent pourquoi l'une d'elles est plus discrète : sept colombes portaient l'ambroisie à Zeus enfant, mais l'une fut écrasée par des rochers ; ou bien l'une des sœurs, frappée par la foudre, devint invisible.</p>`,
      `<h2>Arabie — Soraya</h2>
       <p>En arabe, les Pléiades sont appelées <strong>Soraya</strong>. La légende raconte l'histoire de deux épouses d'un marchand, Soraya et Aqrab. Le mari, souvent en voyage, tarde un jour à rentrer, et les provisions s'épuisent. Soraya, la plus jeune, demande de l'aide à Aqrab, jalouse d'elle. Celle-ci propose un plan cruel : que chacune tue un de ses enfants pour survivre. Soraya, désespérée, sacrifie ses enfants un à un, tandis qu'Aqrab, ayant caché les siens, la trompe. Lorsque le mari revient, Soraya découvre avec horreur que les enfants d'Aqrab sont vivants. Accablée de chagrin, elle tombe à genoux ; Dieu, touché, la transporte au ciel où elle devient les Pléiades. Aqrab, pour sa cruauté, est transformée en Scorpion. Au Moyen-Orient, on couvre les enfants endormis sous les étoiles pour les protéger du regard triste de Soraya, qui pourrait envier leur sommeil.</p>`,
      `<h2>Amérique du Nord — les enfants danseurs et les sept chiots</h2>
       <p>Chez une tribu iroquoise de l'Ontario, des enfants fatigués de travailler se réunissaient chaque jour pour danser à l'écart, malgré l'avertissement d'un vieil homme vêtu de plumes blanches. Peu à peu, ils se mirent à flotter dans les airs en dansant, s'élevant toujours plus haut. Un enfant, reconnaissant la voix de son père, s'arrêta et tomba comme une étoile filante. Depuis, les six autres continuent de danser dans le ciel sans jamais s'arrêter.</p>
       <p>Une légende assiniboine raconte sept jeunes Indiens pauvres et affamés qui, un soir, décidèrent de se changer en étoiles pour briller éternellement. En dansant autour du feu, leur fatigue disparut et ils s'élevèrent dans le ciel, découvrant des tipis féeriques remplis de vêtements d'or : ils étaient devenus des étoiles.</p>
       <p>Dans une autre légende, une jeune fille visitée chaque nuit par un mystérieux jeune homme enduisit sa main de peinture rouge pour le marquer. Le lendemain, elle trouva les marques sur le dos du chien de son père. Elle donna naissance à sept chiots, que son père emmena. En les suivant, elle les vit se transformer en étoiles, formant les Pléiades.</p>`,
      `<h2>Ailleurs dans le monde</h2>
       <p>Pour les Roumains, les Pléiades sont une poule et ses six poussins. Les Aztèques, qui les appelaient <em>Tianquitzli</em> (« la Place du marché »), s'en servaient pour vérifier que la fin du monde n'était pas imminente : tous les cinquante-deux ans, si les Pléiades passaient au méridien à minuit comme prévu, le cosmos était assuré de continuer. De façon exceptionnelle, les Indiens Barasana de Colombie y voient non pas sept, mais huit étoiles.</p>`
    ],
    voirAussi: ["pleiades", "antares-scorpion", "orion-scorpion"]
  },

  "couronne-boreale": {
    titre: "La Couronne boréale d'Ariane",
    resume: "La couronne offerte par Dionysos à Ariane, placée parmi les étoiles — mais aussi un bol cassé pour les Arabes, un boomerang pour les Aborigènes, et la tanière de l'Ours pour les Micmacs.",
    texte: [
      `<p>La <a href="#/memo/couronne-boreale">Couronne boréale</a> est une petite formation d'étoiles en demi-cercle, entre Hercule et le Bouvier.</p>`,
      `<h2>Grèce — la couronne d'Ariane</h2>
       <p>Dans la mythologie grecque, cette constellation représente la couronne d'<strong>Ariane</strong>, fille du roi Minos de Crète. Après avoir aidé Thésée à vaincre le Minotaure et s'être enfuie avec lui, Ariane fut abandonnée sur l'île de Naxos. Le dieu Dionysos, tombé amoureux d'elle, lui offrit cette couronne ornée de pierres précieuses comme symbole de leur union éternelle. À sa mort, il la plaça parmi les étoiles, où elle brille encore. L'étoile la plus brillante, <strong>Alphecca</strong>, est parfois appelée Gemma, du latin « la perle ».</p>`,
      `<h2>Autres regards</h2>
       <p>Les Arabes voient dans cette constellation un bol cassé : l'étoile principale Alphecca signifie « brisé », et l'étoile secondaire Nusakan désigne « le bol des pauvres ». Pour les Aborigènes d'Australie, c'est un boomerang, objet emblématique de leur culture. Et pour les <a href="#/contes/deux-ourses">Micmacs</a> d'Amérique du Nord, ce demi-cercle est la tanière d'où l'Ours sort chaque printemps, déclenchant la grande chasse céleste.</p>`
    ],
    voirAussi: ["couronne-boreale", "deux-ourses"]
  },

  "voie-lactee": {
    titre: "La Voie lactée, rivière et chemin",
    resume: "Presque partout, une rivière ou un chemin de lumière : le lait d'Héra ou d'Amalthée pour les Grecs, le chemin des morts pour les Indiens, celui des oiseaux migrateurs pour les Estoniens.",
    texte: [
      `<p>Il existe de nombreuses interprétations de la <a href="#/memo/voie-lactee">Voie lactée</a> à l'œil nu. Presque toujours, elle est vue comme une <strong>rivière</strong> ou un <strong>chemin</strong> : « Rivière de lumière » des Hébreux, « Rivière céleste » des Chinois, « Lit du Gange » dans la tradition sanscrite.</p>`,
      `<h2>Grèce — trois légendes du lait</h2>
       <p>La première : Hercule, encore enfant, fut placé sur le sein d'Héra endormie. Sans maîtriser sa force, il tira si violemment que le lait jaillit, formant une vaste traînée blanche dans le ciel.</p>
       <p>La deuxième : la Voie lactée serait le vestige d'un grand incendie céleste, causé par Phaéton qui emprunta le char de feu de son père Hélios et en perdit le contrôle, enflammant la Terre et le ciel. Zeus le foudroya. Son demi-frère Cycnos, désespéré, fut transformé par Zeus en constellation du Cygne, placée parmi les traces de l'incendie.</p>
       <p>La troisième : Amalthée, la chèvre nourricière de Zeus enfant, renversa un jour du lait en l'apportant, et ce lait se répandit dans le ciel. Pour l'honorer, Zeus la plaça parmi les étoiles, sous la forme du Capricorne ou de la brillante étoile Capella (« la chèvre ») dans le Cocher.</p>`,
      `<h2>Autour du monde</h2>
       <p>Dans la symbolique tahitienne, la Voie lactée est un bras de mer où nagent les poissons — les étoiles scintillantes. Pour les Indiens d'Amérique du Nord, c'est le « chemin des morts », les étoiles étant les feux de camp qui guident les âmes vers l'au-delà. Pour les Estoniens et les peuples voisins, c'est le « chemin des oiseaux » : ils avaient remarqué que les oiseaux migrateurs suivaient cette voie, et l'apparition du Cygne céleste annonçait le retour des cygnes terrestres. En Chine, c'est <em>Tianhe</em>, un fleuve céleste où naviguent des astérismes ; en vietnamien, la « Rivière d'Argent ». Chez les Tatars, le toit de la yourte est orné d'une couture représentant la Voie lactée, ses petits trous laissant passer la lumière des étoiles.</p>`
    ],
    voirAussi: ["voie-lactee", "orion-scorpion"]
  },

  "lune": {
    titre: "La Lune et son lapin",
    resume: "Pourquoi la Lune brille moins que le Soleil, pourquoi on y voit un lapin, un homme puni ou l'œil d'Horus — et le chant sumérien à Nanna, dieu de la Lune.",
    texte: [
      `<p>La <a href="#/memo/lune">Lune</a>, seul satellite naturel de la Terre, a inspiré des récits sur tous les continents — souvent pour expliquer les taches sombres visibles à sa surface, ou sa lumière plus douce que celle du Soleil.</p>`,
      `<h2>Côte d'Ivoire — pourquoi la Lune brille moins</h2>
       <p>Un conte Dioula explique pourquoi la Lune brille moins que le Soleil. Le Soleil et la Lune étaient frères. Le Soleil, obéissant, écoutait ses parents ; la Lune se montrait désobéissante. Un jour, leur mère demanda à la Lune de lui laver le dos, mais celle-ci se moqua d'elle devant ses amis. Offensée, la mère les chassa, puis demanda la même chose au Soleil, qui obéit sans hésiter. En reconnaissance, elle lui dit : « Tout le monde te craindra, mais personne n'aura peur de la Lune. » C'est pourquoi on ne peut regarder le Soleil en face, mais on peut fixer la Lune sans crainte.</p>`,
      `<h2>Europe — l'homme puni</h2>
       <p>D'après les anciens Prussiens, le dieu de la Lune, marié à la déesse du Soleil, lui fut infidèle avec Vénus : en punition, Perkounos, le dieu du tonnerre, frappa le visage de la Lune d'un coup de hache dont on voit encore la trace. Dans le folklore européen, la silhouette sombre est celle de « l'homme de la Lune », expédié là-haut pour avoir transgressé la règle interdisant de travailler le dimanche ou à Noël.</p>`,
      `<h2>Égypte — l'œil d'Horus</h2>
       <p>Dans la suite de la légende égyptienne, Horus perdit son œil gauche lors de la bataille contre Seth : cet œil se transforma en Lune. Rê confia ensuite la gestion de la Lune à Thôt, le dieu de la sagesse. Chaque mois, Seth, sous la forme d'un grand cochon noir, déchirait la Lune de ses dents ; Thôt en récupérait patiemment les morceaux et les reconstituait, assurant le cycle perpétuel des phases lunaires.</p>`,
      `<h2>Japon — le lapin de la Lune</h2>
       <p>Il y a longtemps, un esprit divin habitait la Lune, magnifique mais solitaire. Fasciné par la vie sur Terre, il y descendit, mais atterrit affamé dans une forêt, ses voiles en lambeaux, ressemblant à un mendiant. Touchés par sa détresse, un renard, un singe et un lapin lui proposèrent leur aide. Le singe apporta des fruits, le renard un poisson, mais le lapin, ne trouvant que de l'herbe, désespéré et honteux, proposa de se sacrifier en sautant dans le feu pour nourrir l'esprit. Ému par ce geste, l'esprit se dressa dans un flash aveuglant, commanda au vent d'arrêter le feu, et sauva le lapin. Il l'invita à vivre éternellement à ses côtés sur la Lune. Aujourd'hui encore, en observant attentivement la Lune, on peut voir la silhouette d'un lapin — qui, dit-on, fabrique du <em>mochi</em> à l'aide d'un mortier et d'un pilon.</p>`,
      `<h2>Sumer — Nanna, dieu de la Lune</h2>
       <p>Dans la cosmogonie sumérienne, l'une des plus anciennes que nous connaissions, <strong>Nanna</strong> (aussi appelé Sin) est le dieu de la Lune et de la sagesse, avec des mentions remontant aux débuts de l'écriture, vers 3500 avant notre ère. Pour les Sumériens, la Lune n'était pas seulement un astre, mais un régulateur du temps, marquant mois et années. Cette fonction est exprimée dans ce chant :</p>
       <p><em>Nanna, grand seigneur<br>
       Brillance légère dans les cieux clairs<br>
       Portant sur ta tête la couronne d'un Prince<br>
       Le Dieu qui peut amener et ramener jour et nuit<br>
       Qui sait établir le mois<br>
       Et amener l'année jusqu'à son terme</em></p>`
    ],
    voirAussi: ["lune", "eclipses", "orion-scorpion"]
  },

  "eclipses": {
    titre: "Contes sur les éclipses",
    resume: "Partout, l'astre est dévoré ou attaqué — un chien affamé, deux loups vikings, un monstre cambodgien — et partout, les humains font du bruit pour le sauver.",
    texte: [
      `<p>Les <a href="#/memo/eclipses">éclipses</a>, brusques disparitions d'un astre, ont partout été comprises comme une attaque : une créature dévore ou blesse le Soleil ou la Lune. Et presque partout, les humains interviennent — souvent en faisant le plus de bruit possible.</p>`,
      `<h2>Afrique — le chien Aso Ledgo</h2>
       <p>Une légende africaine raconte qu'autrefois une échelle permettait aux hommes de monter au ciel, mais un palier était gardé par un énorme chien, Aso Ledgo, qui dévorait les imprudents. Seuls les morts osaient encore monter, mais ils ne nourrissaient pas le chien, qui devint affamé et furieux. Il décida de descendre sur Terre ; les hommes, effrayés, coupèrent l'échelle. En colère, le chien menaça de dévorer la Lune, l'épouse du Soleil. Prévenue par les hommes, la Lune se cache parfois pour lui échapper : c'est l'éclipse.</p>`,
      `<h2>Afrique australe — le combat des Yaos</h2>
       <p>Les Yaos considèrent le Soleil et la Lune comme des ennemis naturels. Lors d'une éclipse, ils imaginent les deux astres livrant un combat féroce et incertain. Pour y mettre fin, ils frappent des pioches et des haches ensemble en leur criant de se séparer — et, selon eux, ça marche : les deux astres finissent par se calmer.</p>`,
      `<h2>Cambodge — le monstre Râhu</h2>
       <p>Un riche marchand avait trois fils. Un jour, le plus jeune provoqua une dispute en éteignant accidentellement le feu de cuisson. Un moine, en réalité Bouddha, leur offrit à chacun un vœu : l'aîné voulut devenir le Soleil, le cadet la Lune, et le plus jeune, pour se venger, le puissant monstre <strong>Râhu</strong>. En colère contre ses frères, Râhu avale parfois le Soleil ou la Lune, causant les éclipses — mais les humains, en faisant beaucoup de bruit, l'aident à libérer les astres.</p>`,
      `<h2>Brésil — la flèche des Gé</h2>
       <p>La tribu amazonienne des Gé voit dans l'éclipse un combat entre la Lune et le Soleil. L'œil de la Lune est percé par un jeune garçon qui lance une flèche sur les combattants pour les séparer ; la blessure qui saigne symbolise la Lune qui rougit et s'assombrit. C'est un chaman qui retire la flèche et permet à la blessure de guérir.</p>`,
      `<h2>Scandinavie — les loups Skoll et Hati</h2>
       <p>Pour les Vikings, deux énormes loups partent en chasse : Skoll veut dévorer le Soleil, Hati la Lune. Quand l'un des astres est attrapé, il se produit une éclipse. Là encore, ce sont les hommes qui viennent à son secours en faisant le plus de bruit possible pour chasser le loup — qui finit heureusement par lâcher prise.</p>`
    ],
    voirAussi: ["eclipses", "lune"]
  },

  "origine-monde": {
    titre: "L'origine du monde et des étoiles",
    resume: "Un œuf de fer brisé par un canard chez les Finlandais, des mites affamées grignotant la toile de la nuit chez les Tibétains : deux façons d'expliquer la naissance des étoiles.",
    texte: [
      `<h2>Finlande — l'œuf du canard</h2>
       <p>Au début des temps, il n'y avait que chaos, une étendue infinie d'eau et d'obscurité. De ce vide surgit <strong>Ilmatar</strong>, la déesse de l'air, flottant sur les eaux. Un jour, un canard cherchant où pondre trouva refuge sur son genou, levé au-dessus des eaux. L'oiseau y pondit six œufs en or et un en fer, mais le nid fut renversé. Les fragments de l'œuf de fer créèrent la Terre, le jaune devint le Soleil, le blanc la Lune, et les morceaux des œufs dorés se transformèrent en étoiles scintillantes.</p>`,
      `<h2>Tibet — les mites affamées</h2>
       <p>Une légende tibétaine dit que, derrière la toile noire de la nuit, luit un immense Soleil. Autrefois, cette toile était intacte, et les hommes vivaient dans le noir total. Une nuit, un enfant pleura : sa mère découvrit des mites grouillant dans son lit et, horrifiée, les lança une à une dans le ciel. Le peuple des mites se retrouva sur la grande toile de la nuit et, affamé, se mit à la grignoter — mais seulement de tout petits bouts, pour passer inaperçu. La lumière du grand Soleil perça alors ces trous, ses rayons atteignant la Terre : ce fut la naissance des étoiles. Pour se faire pardonner, les mites dessinèrent des messages avec leurs trous : les constellations sont ces derniers messages du peuple des mites.</p>`
    ],
    voirAussi: ["lune", "voie-lactee"]
  },

  "sagittaire": {
    titre: "Le Sagittaire, du centaure aux autruches",
    resume: "Le sage centaure Chiron pour les Grecs, le dieu-scorpion Pabilsag pour les Sumériens, des autruches au bord du fleuve céleste pour les Arabes — et, plein cœur, le mystérieux « Signal Wow ».",
    texte: [
      `<p>La constellation du <strong>Sagittaire</strong>, dans l'hémisphère sud, représente traditionnellement un centaure armé d'un arc, prêt à tirer. C'est aussi la direction du centre de notre galaxie.</p>`,
      `<h2>Grèce — le centaure Chiron</h2>
       <p>Le Sagittaire est souvent associé à <strong>Chiron</strong>, le centaure qui fut un grand enseignant pour de nombreux héros grecs, dont Achille et Jason. Contrairement aux autres centaures, connus pour leur nature sauvage, Chiron était réputé pour sa sagesse et sa maîtrise de la guérison. Après avoir été accidentellement blessé par une flèche empoisonnée d'Hercule, Chiron, immortel, souffrait tant qu'il demanda à Zeus de le libérer de son immortalité. En hommage à sa sagesse et à son sacrifice, Zeus le plaça dans le ciel.</p>`,
      `<h2>Sumer — Pabilsag</h2>
       <p>Avant les Grecs, la constellation était connue des Sumériens, qui y voyaient <strong>Pabilsag</strong>, un dieu guerrier et protecteur, souvent représenté comme un être hybride tenant un arc. Il est une manifestation de Ninurta, le dieu de la Guerre. L'étoile la plus brillante, Alpha Sagittarii, était nommée « la Brillante de la pointe de la Flèche de Pabilsag ».</p>`,
      `<h2>Arabie — les autruches</h2>
       <p>Dans l'astronomie arabe traditionnelle, ce sont des <strong>autruches</strong> que l'on observe ici. On ne parlait pas de constellations mais de stations lunaires, divisées en groupes : « les Autruches qui descendent boire » au Fleuve (la <a href="#/memo/voie-lactee">Voie lactée</a>), et de l'autre côté, « les Autruches qui reviennent de boire », articulées autour du « Berger des Autruches ». À côté, deux groupes annexes, « le Nid » et « les Deux Autruches mâles », et la XXIe station lunaire, « le Lieu vide » d'étoiles.</p>`,
      `<h2>La Théière et le Signal Wow</h2>
       <p>L'astérisme le plus célèbre du Sagittaire est « la Théière » : une forme reconnaissable, avec bec, couvercle et anse, dont la vapeur sortant du bec correspond à la Voie lactée. C'est dans cette région qu'a été détecté, le 15 août 1977, le fameux <strong>« Signal Wow »</strong> par le radiotélescope Big Ear : une émission radio à 1420 MHz, longue de 72 secondes, jamais réexpliquée depuis, et le signal le plus intrigant jamais capté dans le cadre de la recherche de vie extraterrestre. Son nom vient de l'exclamation « Wow! » inscrite en marge par l'astronome qui la découvrit.</p>`
    ],
    voirAussi: ["voie-lactee"]
  }

};
