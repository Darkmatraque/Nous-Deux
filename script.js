// =========================
// CONFIG (avec vos vraies dates)
// =========================

// Premier message : 28 mai 2026
const firstMessageDate = new Date(2026, 4, 28, 0, 0); // mois 4 = mai

// Ensemble depuis : 29 mai 2026
const relationshipDate = new Date(2026, 4, 29);

// Timeline
const timelineEvents = [
  {
    title: "Premier message",
    date: "28 mai 2026",
    text: "Un simple message. Et pourtant, tu sais que c’était pas si simple."
  },
  {
    title: "Premier vrai échange",
    date: "Fin mai 2026",
    text: "Les messages commencent à ressembler à quelque chose de sérieux."
  },
  {
    title: "Officiellement ensemble",
    date: "29 mai 2026",
    text: "À partir de là, ce n’est plus toi et moi, c’est nous."
  },
  {
    title: "Premier date sous la pluie",
    date: "Un jour qui reste",
    text: "La voiture, la pluie, et pourtant, c’était parfait."
  }
];

// Pourquoi je l’aime
const loveReasonsInitial = [
  "Son sourire qui change instantanément ma journée.",
  "Sa façon de me comprendre sans que j’aie besoin de tout expliquer.",
  "Nos private jokes qui n’ont aucun sens pour les autres.",
  "Sa présence qui rend tout plus simple, même les jours compliqués.",
  "Le fait qu’elle soit là, même quand je ne suis pas simple à suivre."
];

// Lettres
const lettersInitial = [
  {
    from: "Kevin",
    text: "Merci d’être là, même quand je ne suis pas parfait. Tu comptes plus que tu ne l’imagines.",
    date: "Aujourd’hui"
  },
  {
    from: "Elle",
    text: "Tu ne réalises pas à quel point tu es important pour moi.",
    date: "Un jour qui compte"
  }
];

// Playlist
const playlist = [
  {
    title: "Musique de voiture",
    artist: "Vous deux",
    url: "" // tu peux mettre un lien vers un mp3
  },
  {
    title: "Musique du date sous la pluie",
    artist: "Ce soir-là",
    url: ""
  },
  {
    title: "Musique qui me fait penser à toi",
    artist: "Toujours",
    url: ""
  }
];

// Souvenirs
const memories = [
  "Ce fou rire dans la voiture, quand il pleuvait trop pour sortir.",
  "Ce message où tu as écrit quelque chose de simple, mais qui m’a fait fondre.",
  "Ce moment où on s’est regardés sans rien dire, et c’était suffisant.",
  "La fois où on a fait des plans pour plus tard, juste pour le plaisir d’y croire.",
  "Ce jour où tu m’as fait sentir que j’étais vraiment important pour toi."
];

// Mot de passe galerie
const GALLERY_PASSWORD = "amour";

// =========================
// LOGIQUE
// =========================

const mainContent = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");

// Affichage progressif des sections
function showSections() {
  const sections = document.querySelectorAll("main section");
  sections.forEach((sec, index) => {
    setTimeout(() => {
      sec.classList.add("visible");
    }, 200 + index * 150);
  });
}

enterBtn.addEventListener("click", () => {
  showSections();
  window.scrollTo({ top: mainContent.offsetTop, behavior: "smooth" });
});

// Compteur premier message
function updateFirstMessageCounter() {
  const now = new Date();
  const diffMs = now - firstMessageDate;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  document.getElementById("fmDays").textContent = diffDays;
  document.getElementById("fmHours").textContent = diffHours;
  document.getElementById("fmMinutes").textContent = diffMinutes;

  document.getElementById("fmText").textContent =
    `Cela fait ${diffDays} jours que ce premier message a tout changé.`;

  const heroDaysEl = document.getElementById("heroDays");
  if (heroDaysEl) heroDaysEl.textContent = diffDays;
}

// Compteur relation
function updateRelationshipCounter() {
  const now = new Date();
  const diffMs = now - relationshipDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30.4375);
  const diffYears = Math.floor(diffMonths / 12);

  document.getElementById("relYears").textContent = diffYears;
  document.getElementById("relMonths").textContent = diffMonths;
  document.getElementById("relWeeks").textContent = diffWeeks;
  document.getElementById("relDays").textContent = diffDays;

  document.getElementById("relText").textContent =
    `Depuis ${diffYears} an(s), ${diffMonths} mois et ${diffDays} jours, vous écrivez cette histoire ensemble.`;
}

// Timeline
function renderTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";
  timelineEvents.forEach(ev => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-title">${ev.title}</div>
      <div class="timeline-date">${ev.date}</div>
      <div class="timeline-text">${ev.text}</div>
    `;
    container.appendChild(item);
  });
}

// Pourquoi je l’aime
function renderLoveReasons() {
  const list = document.getElementById("loveList");
  list.innerHTML = "";
  loveReasonsInitial.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    list.appendChild(li);
  });
}

const loveInput = document.getElementById("loveInput");
const loveAddBtn = document.getElementById("loveAddBtn");

loveAddBtn.addEventListener("click", () => {
  const text = loveInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("loveList").appendChild(li);
  loveInput.value = "";
});

// Galerie privée
const galleryPasswordInput = document.getElementById("galleryPassword");
const galleryUnlockBtn = document.getElementById("galleryUnlockBtn");
const galleryStatus = document.getElementById("galleryStatus");
const galleryGrid = document.getElementById("galleryGrid");

galleryUnlockBtn.addEventListener("click", () => {
  if (galleryPasswordInput.value === GALLERY_PASSWORD) {
    galleryGrid.style.display = "grid";
    galleryStatus.textContent = "Galerie déverrouillée. 💗";
  } else {
    galleryGrid.style.display = "none";
    galleryStatus.textContent = "Mot de passe incorrect.";
  }
});

// Boîte à lettres
function renderLetters() {
  const list = document.getElementById("lettersList");
  list.innerHTML = "";
  lettersInitial.forEach(letter => {
    const div = document.createElement("div");
    div.className = "letter";
    div.innerHTML = `
      <div class="letter-meta">${letter.from} · ${letter.date}</div>
      <div>${letter.text}</div>
    `;
    list.appendChild(div);
  });
}

const letterFromInput = document.getElementById("letterFrom");
const letterTextInput = document.getElementById("letterText");
const letterAddBtn = document.getElementById("letterAddBtn");

letterAddBtn.addEventListener("click", () => {
  const from = letterFromInput.value.trim() || "Anonyme";
  const text = letterTextInput.value.trim();
  if (!text) return;
  const div = document.createElement("div");
  div.className = "letter";
  const dateStr = new Date().toLocaleDateString("fr-FR");
  div.innerHTML = `
    <div class="letter-meta">${from} · ${dateStr}</div>
    <div>${text}</div>
  `;
  document.getElementById("lettersList").prepend(div);
  letterTextInput.value = "";
});

// Playlist
function renderPlaylist() {
  const list = document.getElementById("playlistList");
  list.innerHTML = "";
  playlist.forEach((track, index) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `
      <span>${track.title} · <span style="color: var(--text-soft);">${track.artist}</span></span>
      <button data-index="${index}">Écouter</button>
    `;
    list.appendChild(div);
  });

  list.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const track = playlist[idx];
      const audio = document.getElementById("audioPlayer");
      if (track.url) {
        audio.src = track.url;
        audio.play();
      } else {
        alert("Tu peux ajouter une URL audio pour cette musique dans le code 😉");
      }
    });
  });
}

// Souvenir aléatoire
function showRandomMemory() {
  const idx = Math.floor(Math.random() * memories.length);
  document.getElementById("memoryText").textContent = memories[idx];
}

const memoryRefreshBtn = document.getElementById("memoryRefreshBtn");
memoryRefreshBtn.addEventListener("click", showRandomMemory);

// Footer année
document.getElementById("siteYear").textContent = new Date().getFullYear();

// Init
updateFirstMessageCounter();
updateRelationshipCounter();
renderTimeline();
renderLoveReasons();
renderLetters();
renderPlaylist();
showRandomMemory();

// Met à jour les compteurs toutes les minutes
setInterval(() => {
  updateFirstMessageCounter();
  updateRelationshipCounter();
}, 60000);
