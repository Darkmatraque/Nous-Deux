// =========================
// CONFIG À PERSONNALISER
// =========================

// Date du premier message
const firstMessageDate = new Date(2024, 0, 15, 21, 30);

// Date officielle de la relation
const relationshipDate = new Date(2024, 2, 1);

// Timeline
const timelineEvents = [
  { title: "Premier message", date: "15 janvier 2024", text: "Un simple message, mais un énorme changement." },
  { title: "Premier appel", date: "22 janvier 2024", text: "La première fois que ta voix a rempli ma soirée." },
  { title: "Premier date", date: "5 février 2024", text: "La pluie, la voiture, et pourtant, c’était parfait." },
  { title: "Premier bisou", date: "20 février 2024", text: "Ce moment où le temps a ralenti." }
];

// Pourquoi je l’aime
const loveReasonsInitial = [
  "Son sourire qui change ma journée.",
  "Sa façon de me comprendre.",
  "Nos private jokes.",
  "Sa présence qui rend tout plus simple."
];

// Lettres
const lettersInitial = [
  { from: "Kevin", text: "Merci d’être là.", date: "Aujourd’hui" },
  { from: "Elle", text: "Tu comptes pour moi.", date: "Un jour important" }
];

// Playlist
const playlist = [
  { title: "Musique de voiture", artist: "Nous", url: "" },
  { title: "Musique du date", artist: "Ce soir-là", url: "" },
  { title: "Musique qui me fait penser à toi", artist: "Toujours", url: "" }
];

// Souvenirs
const memories = [
  "Ce fou rire dans la voiture.",
  "Ce message qui m’a fait fondre.",
  "Ce regard silencieux.",
  "Nos plans pour plus tard.",
  "Ce jour où tu m’as fait sentir important."
];

// Mot de passe galerie
const GALLERY_PASSWORD = "amour";

// =========================
// LOGIQUE
// =========================

const mainContent = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  document.querySelectorAll("main section").forEach((sec, i) => {
    setTimeout(() => sec.classList.add("visible"), 200 + i * 150);
  });
  window.scrollTo({ top: mainContent.offsetTop, behavior: "smooth" });
});

// Compteur premier message
function updateFirstMessageCounter() {
  const now = new Date();
  const diffMs = now - firstMessageDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  document.getElementById("fmDays").textContent = diffDays;
  document.getElementById("fmHours").textContent = diffHours;
  document.getElementById("fmMinutes").textContent = diffMinutes;

  document.getElementById("fmText").textContent =
    `Cela fait ${diffDays} jours que nos vies ont changé.`;
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
    `Depuis ${diffYears} an(s), ${diffMonths} mois et ${diffDays} jours.`;
}

// Timeline
function renderTimeline() {
  const container = document.getElementById("timeline");
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
  loveReasonsInitial.forEach(reason => {
    const li = document.createElement("li");
    li.textContent = reason;
    list.appendChild(li);
  });
}

document.getElementById("loveAddBtn").addEventListener("click", () => {
  const text = document.getElementById("loveInput").value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("loveList").appendChild(li);
  document.getElementById("loveInput").value = "";
});

// Galerie privée
document.getElementById("galleryUnlockBtn").addEventListener("click", () => {
  const pwd = document.getElementById("galleryPassword").value;
  const grid = document.getElementById("galleryGrid");
  const status = document.getElementById("galleryStatus");

  if (pwd === GALLERY_PASSWORD) {
    grid.style.display = "grid";
    status.textContent = "Galerie déverrouillée 💗";
  } else {
    grid.style.display = "none";
    status.textContent = "Mot de passe incorrect.";
  }
});

// Lettres
function renderLetters() {
  const list = document.getElementById("lettersList");
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

document.getElementById("letterAddBtn").addEventListener("click", () => {
  const from = document.getElementById("letterFrom").value || "Anonyme";
  const text = document.getElementById("letterText").value.trim();
  if (!text) return;

  const div = document.createElement("div");
  div.className = "letter";
  div.innerHTML = `
    <div class="letter-meta">${from} · ${new Date().toLocaleDateString("fr-FR")}</div>
    <div>${text}</div>
  `;

  document.getElementById("lettersList").prepend(div);
  document.getElementById("letterText").value = "";
});

// Playlist
function renderPlaylist() {
  const list = document.getElementById("playlistList");
  playlist.forEach((track, index) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `
      <span>${track.title} · <span style="color: var(--text-soft);">${track.artist}</span></span>
      <button data-index="${index}">Écouter</button>
    `;
    list.appendChild(div);
  });

  document.querySelectorAll(".track button").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-index");
      const audio = document.getElementById("audioPlayer");
      const track = playlist[idx];

      if (track.url) {
        audio.src = track.url;
        audio.play();
      } else {
        alert("Ajoute une URL audio dans le code 😉");
      }
    });
  });
}

// Souvenir aléatoire
function showRandomMemory() {
  const idx = Math.floor(Math.random() * memories.length);
  document.getElementById("memoryText").textContent = memories[idx];
}

document.getElementById("memoryRefreshBtn").addEventListener("click", showRandomMemory);

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

setInterval(() => {
  updateFirstMessageCounter();
  updateRelationshipCounter();
}, 60000);
