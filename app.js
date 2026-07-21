/* =====================================================================
   APP.JS — le moteur de l'application
   ---------------------------------------------------------------------
   Ce fichier gère la navigation entre pages, l'affichage des sujets
   du mémo (définis dans sujets.js) et le déroulement du quiz (dont
   les questions viennent de la réserve définie dans questions.js).
   Vous n'avez normalement pas besoin d'y toucher pour ajouter du
   contenu — voir sujets.js et questions.js pour ça.
   ===================================================================== */

/* Nombre de questions tirées au hasard à chaque partie de quiz.
   Doit être inférieur ou égal au nombre de questions dans la réserve
   (QUESTIONS_POOL, défini dans questions.js). */
const NB_QUESTIONS_QUIZ = 10;

/* Tire n éléments au hasard dans un tableau, sans les répéter
   (mélange de Fisher-Yates, puis on garde les n premiers). */
function piocher(tableau, n) {
  const copie = tableau.slice();
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie.slice(0, Math.min(n, copie.length));
}

/* ============================ NAVIGATION ============================ */
/* La navigation est gérée en JavaScript : les liens internes
   (href="#/...") sont interceptés, donc tout fonctionne aussi bien
   hébergé sur GitHub Pages qu'ouvert dans un environnement qui bloque
   la navigation par liens (aperçu d'application, iframe...). */
const app = document.getElementById("app");
let quizEtat = { questions: [], index: 0, score: 0, repondu: false };

function afficher(route) {
  window.scrollTo(0, 0);
  if (route === "") return pageAccueil();
  if (route === "memo") return pageMemo();
  if (route.startsWith("memo/")) {
    const slug = route.slice(5);
    if (SUJETS[slug]) return pageSujet(slug);
    return pageMemo();
  }
  if (route === "quiz") { demarrerQuiz(); return pageQuiz(); }
  pageAccueil();
}

function naviguer(route) {
  try {
    if (location.hash.replace(/^#\/?/, "") !== route) {
      history.pushState(null, "", "#/" + route);
    }
  } catch (e) { /* environnement qui bloque l'historique : on ignore */ }
  afficher(route);
}

/* Intercepte les clics sur tous les liens internes href="#/..." */
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a) return;
  e.preventDefault();
  naviguer(a.getAttribute("href").replace(/^#\/?/, ""));
});

/* ============================ PAGES ============================ */
function pageAccueil() {
  app.innerHTML = `
    <header class="hero">
      <div class="surtitre">Soirée d'observation</div>
      <h1>Sous les <span class="or">étoiles</span></h1>
      <p class="sous-titre">Le compagnon de la soirée : des histoires du ciel à explorer,<br>et un quiz pour se tester entre deux télescopes.</p>
    </header>
    <div class="portes">
      <a class="porte" href="#/memo">
        <div class="icone">📖</div>
        <h2>Le mémo</h2>
        <p>Les objets et les idées du ciel, sujet par sujet : distances, records, histoires et idées reçues.</p>
      </a>
      <a class="porte" href="#/quiz">
        <div class="icone">🌠</div>
        <h2>Le quiz du ciel</h2>
        <p>${NB_QUESTIONS_QUIZ} questions tirées au hasard à chaque partie. Attention aux pièges.</p>
      </a>
    </div>`;
}

function pageMemo() {
  const cartes = Object.entries(SUJETS).map(([slug, s]) => `
    <a class="sujet" href="#/memo/${slug}">
      <div class="icone">${s.icone}</div>
      <h3>${s.titre}</h3>
      <p>${s.resume}</p>
    </a>`).join("");
  app.innerHTML = `
    <header class="hero">
      <div class="surtitre">Le mémo</div>
      <h1>Choisissez un <span class="or">sujet</span></h1>
    </header>
    <div class="sujets">${cartes}</div>`;
}

function pageSujet(slug) {
  const s = SUJETS[slug];
  const voirAussi = (s.voirAussi || []).filter(v => SUJETS[v]);
  const liens = voirAussi.length
    ? `<div class="voir-aussi">Voir aussi : ${voirAussi.map(v =>
        `<a href="#/memo/${v}">${SUJETS[v].icone} ${SUJETS[v].titre}</a>`).join(" · ")}</div>`
    : "";
  app.innerHTML = `
    <a class="retour" href="#/memo">← Tous les sujets</a>
    <article class="carte">
      <div class="icone-titre">${s.icone}</div>
      <h1>${s.titre}</h1>
      <p class="resume">${s.resume}</p>
      ${s.sections.map(sec => `<section>${sec}</section>`).join("")}
      ${liens}
    </article>`;
}

/* ============================ QUIZ ============================ */
/* Tire NB_QUESTIONS_QUIZ questions au hasard dans la réserve
   QUESTIONS_POOL (définie dans questions.js) et démarre une partie. */
function demarrerQuiz() {
  quizEtat = {
    questions: piocher(QUESTIONS_POOL, NB_QUESTIONS_QUIZ),
    index: 0,
    score: 0,
    repondu: false
  };
}

function pageQuiz() {
  const total = quizEtat.questions.length;
  if (quizEtat.index >= total) return pageQuizFinal();
  const q = quizEtat.questions[quizEtat.index];
  app.innerHTML = `
    <a class="retour" href="#/">← Accueil</a>
    <div class="carte">
      <span class="chip">${q.cat}</span>
      <div class="question">${q.q}</div>
      <div class="reponses" id="reponses"></div>
      <div id="zoneExplication"></div>
      <div class="nav-quiz">
        <span class="progression">Question ${quizEtat.index + 1} / ${total}</span>
        <button class="suivant" id="suivant">${quizEtat.index === total - 1 ? "Voir mon résultat →" : "Suivant →"}</button>
      </div>
    </div>`;
  const zone = document.getElementById("reponses");
  q.r.forEach((texte, i) => {
    const b = document.createElement("button");
    b.className = "reponse";
    b.textContent = texte;
    b.addEventListener("click", () => repondre(i, b, q));
    zone.appendChild(b);
  });
  document.getElementById("suivant").addEventListener("click", () => {
    quizEtat.index++;
    quizEtat.repondu = false;
    pageQuiz();
  });
}

function repondre(i, bouton, q) {
  if (quizEtat.repondu) return;
  quizEtat.repondu = true;
  document.querySelectorAll(".reponse").forEach((b, j) => {
    b.disabled = true;
    if (j === q.bonne) b.classList.add("juste");
  });
  const juste = i === q.bonne;
  if (juste) quizEtat.score++;
  else bouton.classList.add("faux");
  document.getElementById("zoneExplication").innerHTML = `
    <div class="explication" aria-live="polite">
      <span class="verdict">${juste ? "✦ Exact !" : "✦ Pas tout à fait…"}</span>${q.e}
    </div>`;
  document.getElementById("suivant").classList.add("visible");
}

function pageQuizFinal() {
  const total = quizEtat.questions.length;
  const ratio = quizEtat.score / total;
  let c;
  if (ratio === 1) c = "Sans faute ! Il ne vous reste plus qu'à passer de l'autre côté du télescope.";
  else if (ratio >= 0.7) c = "Très beau score — le ciel n'a presque plus de secrets pour vous. Presque.";
  else if (ratio >= 0.4) c = "Pas mal du tout. Le ciel est plein de pièges, c'est bien pour ça qu'il est intéressant.";
  else c = "Le ciel est plein de surprises, n'est-ce pas ? Bonne nouvelle : les vraies réponses sont juste au-dessus de vos têtes.";
  app.innerHTML = `
    <div class="carte final">
      <div class="surtitre">Résultat</div>
      <div class="score">${quizEtat.score} / ${total}</div>
      <p>${c}</p>
      <button class="rejouer" id="rejouer">Rejouer</button>
      <p style="margin-top:16px"><a class="retour" href="#/memo" style="margin:0">Explorer le mémo →</a></p>
    </div>`;
  document.getElementById("rejouer").addEventListener("click", () => {
    demarrerQuiz();
    pageQuiz();
  });
}

/* ---------- mode nuit rouge ---------- */
const btnRouge = document.getElementById("boutonRouge");
btnRouge.addEventListener("click", () => {
  const actif = document.body.classList.toggle("mode-rouge");
  btnRouge.setAttribute("aria-pressed", String(actif));
  btnRouge.textContent = actif ? "⭐ Mode normal" : "🔴 Mode nuit";
});

/* ---------- champ d'étoiles ---------- */
(function () {
  const conteneur = document.getElementById("etoiles");
  for (let i = 0; i < 90; i++) {
    const e = document.createElement("div");
    e.className = "etoile-pt";
    const taille = Math.random() < 0.85 ? 1.5 : 2.5;
    e.style.width = e.style.height = taille + "px";
    e.style.left = Math.random() * 100 + "%";
    e.style.top = Math.random() * 100 + "%";
    e.style.setProperty("--d", (3 + Math.random() * 5).toFixed(1) + "s");
    e.style.setProperty("--o", (0.3 + Math.random() * 0.6).toFixed(2));
    e.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
    conteneur.appendChild(e);
  }
})();

/* Boutons précédent/suivant du navigateur (sur GitHub Pages) */
function routeDepuisUrl() { return location.hash.replace(/^#\/?/, ""); }
window.addEventListener("hashchange", () => afficher(routeDepuisUrl()));
window.addEventListener("popstate", () => afficher(routeDepuisUrl()));

afficher(routeDepuisUrl());
