/* ==========================================================================
   Foto Explorer — minijuego de pistas
   - Intenta geolocalizar al jugador para averiguar POR QUÉ RETO EMPEZAR.
   - Si no puede (permiso denegado, sin GPS, navegador sin soporte...),
     pide elegir uno de los 3 puntos de partida (STARTING_POINTS en data.js).
   - Los retos son una secuencia narrativa fija (1, 2, 3...): la ubicación
     SOLO decide en qué punto de esa secuencia empezar. A partir de ahí,
     siempre se continúa en orden numérico estricto (nunca se desordenan).
   Progreso guardado en localStorage del navegador de cada invitado.
   ========================================================================== */

const PROGRESS_KEY = "guia_foto_explorer_progress";
let feReferencePoint = null; // {lat, lng} usado solo para elegir el punto de partida

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function setFound(id) {
  const progress = getProgress();
  const alreadyFound = !!progress[id];
  progress[id] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  if (!alreadyFound) {
    trackEvent("foto-explorer-encontrado", { reto: id });
    const allFound = PHOTO_CHALLENGES.every((c) => progress[c.id]);
    if (allFound) trackEvent("foto-explorer-completado");
  }
}

function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

/* Distancia en metros entre dos coordenadas (fórmula de Haversine) */
function distanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* Encuentra el índice del reto más cercano al punto de referencia (solo
   entre los que ya tienen lat/lng). Ese va a ser el punto de partida. */
function findNearestChallengeIndex(refPoint) {
  // "Trampa" a propósito: dentro de la Praza do Obradoiro siempre empezamos
  // por el Hostal dos Reis Católicos, para no liarlo con la Catedral, la
  // Iglesia de San Fructuoso o el Arco de Xelmírez, que en algunos puntos
  // de la plaza podrían salir técnicamente más cerca.
  const obradoiroAnchor = STARTING_POINTS.find((p) => p.id === "obradoiro");
  if (obradoiroAnchor) {
    const distToObradoiro = distanceMeters(refPoint.lat, refPoint.lng, obradoiroAnchor.lat, obradoiroAnchor.lng);
    if (distToObradoiro <= 80) {
      const hostalIndex = PHOTO_CHALLENGES.findIndex((c) => c.id === "reto-01");
      if (hostalIndex !== -1) return hostalIndex;
    }
  }

  let bestIndex = 0;
  let bestDist = Infinity;
  PHOTO_CHALLENGES.forEach((ch, index) => {
    const hasCoords = typeof ch.lat === "number" && typeof ch.lng === "number";
    if (!hasCoords) return;
    const dist = distanceMeters(refPoint.lat, refPoint.lng, ch.lat, ch.lng);
    if (dist < bestDist) {
      bestDist = dist;
      bestIndex = index;
    }
  });
  return bestIndex;
}

/* Devuelve los retos en su ORDEN NUMÉRICO fijo, empezando por el reto más
   cercano al punto de referencia y continuando en secuencia (dando la
   vuelta al llegar al final, para que ninguno quede inalcanzable). */
function getSortedChallenges() {
  if (!feReferencePoint) return PHOTO_CHALLENGES;

  const startIndex = findNearestChallengeIndex(feReferencePoint);
  return PHOTO_CHALLENGES.slice(startIndex).concat(PHOTO_CHALLENGES.slice(0, startIndex));
}

/* ---------- Selección de punto de partida / geolocalización ---------- */

let feStep = "locating"; // "locating" | "choosing" | "done"
let feDoneLabel = "";

function feRenderLocationPanel() {
  const status = document.getElementById("fe-location-status");
  const buttons = document.getElementById("fe-start-buttons");
  if (!status || !buttons) return;
  const lang = getLang();

  if (feStep === "locating") {
    status.textContent = UI_TEXT.fe_locating[lang];
    buttons.style.display = "none";
  } else if (feStep === "choosing") {
    status.textContent = UI_TEXT.fe_choose_start[lang];
    buttons.innerHTML = STARTING_POINTS.map((p) => `
      <button class="filter-pill" data-start-point="${p.id}">${p.name[lang]}</button>
    `).join("");
    buttons.style.display = "flex";
    buttons.querySelectorAll("[data-start-point]").forEach((btn) => {
      btn.addEventListener("click", () => feSetReferenceFromStart(btn.getAttribute("data-start-point")));
    });
  } else if (feStep === "done") {
    status.innerHTML = `${UI_TEXT.fe_starting_from[lang]} <strong>${feDoneLabel[lang] || feDoneLabel}</strong>`;
    buttons.style.display = "none";
  }
}

function feShowStartButtons() {
  feStep = "choosing";
  feRenderLocationPanel();
}

function feSetReferenceFromStart(pointId) {
  const point = STARTING_POINTS.find((p) => p.id === pointId);
  if (!point) return;
  feReferencePoint = { lat: point.lat, lng: point.lng };
  sessionStorage.setItem("fe_chosen_start", pointId);
  feFinishLocationSetup(point.name);
}

function feFinishLocationSetup(placeLabel) {
  feStep = "done";
  feDoneLabel = placeLabel;
  feRenderLocationPanel();
  renderPhotoGrid();
}

function feInitLocation() {
  feStep = "locating";
  feRenderLocationPanel();

  if (!("geolocation" in navigator)) {
    feShowStartButtons();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      feReferencePoint = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      feFinishLocationSetup(UI_TEXT.fe_your_location);
    },
    () => {
      // Permiso denegado, timeout, o error: pedimos que elija un punto de partida
      feShowStartButtons();
    },
    { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
  );
}

/* ---------- Guía de proximidad (vibración + brújula) ----------
   Todo esto se activa solo si la persona lo pide explícitamente (botón),
   y cada capacidad se comprueba por separado: si el móvil no soporta
   vibración, o no da permiso de brújula, simplemente esa parte no se
   activa — el resto sigue funcionando con normalidad. */

let feProximityActive = false;
let feWatchId = null;
let feCurrentPos = null;
let feDeviceHeading = null; // grados 0-360, o null si no hay brújula
let feNotifiedArrival = new Set(); // ids de retos ya notificados esta sesión
const FE_ARRIVAL_RADIUS_M = 15;

/* Rumbo inicial (bearing) en grados de un punto A a un punto B */
function getBearing(lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const toDeg = (r) => (r * 180) / Math.PI;
  const dLng = toRad(lng2 - lng1);
  const y = Math.sin(dLng) * Math.cos(toRad(lat2));
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

/* El reto "activo" es el que está abierto en el modal en este momento;
   si no hay ninguno abierto, el más cercano aún no encontrado. */
function feGetActiveChallenge() {
  if (feOpenChallengeId) {
    const open = PHOTO_CHALLENGES.find((c) => c.id === feOpenChallengeId);
    if (open) return open;
  }
  const progress = getProgress();
  const ordered = getSortedChallenges();
  return ordered.find((c) => !progress[c.id]) || null;
}

function feRenderProximityWidget() {
  const widget = document.getElementById("fe-proximity-widget");
  if (!widget) return;
  const lang = getLang();

  if (!feProximityActive) {
    widget.style.display = "none";
    return;
  }

  const target = feGetActiveChallenge();
  if (!target || !feCurrentPos || typeof target.lat !== "number" || typeof target.lng !== "number") {
    widget.style.display = "none";
    return;
  }

  const dist = distanceMeters(feCurrentPos.lat, feCurrentPos.lng, target.lat, target.lng);
  const bearing = getBearing(feCurrentPos.lat, feCurrentPos.lng, target.lat, target.lng);
  const arrowRotation = feDeviceHeading !== null ? bearing - feDeviceHeading : bearing;

  widget.style.display = "flex";
  widget.innerHTML = `
    <span class="fe-proximity-arrow" style="transform:rotate(${arrowRotation}deg);">${ICONS_FE_ARROW}</span>
    <span class="fe-proximity-info">
      <strong>${target.title[lang]}</strong>
      <span>${Math.round(dist)} m</span>
    </span>
  `;
}

const ICONS_FE_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v16M12 3l-5 5M12 3l5 5"/></svg>`;

function feShowArrivalBanner(target) {
  const lang = getLang();
  const banner = document.getElementById("fe-arrival-banner");
  if (!banner) return;
  banner.querySelector("span").textContent = `${UI_TEXT.fe_arrived[lang]} ${target.title[lang]}`;
  banner.classList.add("show");
  setTimeout(() => banner.classList.remove("show"), 5000);
}

function feCheckArrival() {
  if (!feCurrentPos) return;
  const target = feGetActiveChallenge();
  if (!target || typeof target.lat !== "number" || typeof target.lng !== "number") return;
  if (feNotifiedArrival.has(target.id)) return;

  const dist = distanceMeters(feCurrentPos.lat, feCurrentPos.lng, target.lat, target.lng);
  if (dist <= FE_ARRIVAL_RADIUS_M) {
    feNotifiedArrival.add(target.id);
    if ("vibrate" in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
    feShowArrivalBanner(target);
  }
}

function feHandleOrientation(event) {
  // iOS expone webkitCompassHeading (ya es rumbo real); el resto usamos
  // una aproximación a partir de alpha (funciona razonablemente al aire libre)
  if (typeof event.webkitCompassHeading === "number") {
    feDeviceHeading = event.webkitCompassHeading;
  } else if (typeof event.alpha === "number") {
    feDeviceHeading = 360 - event.alpha;
  } else {
    return;
  }
  feRenderProximityWidget();
}

function feStartProximityGuide() {
  if (!("geolocation" in navigator)) return; // sin soporte: no se activa nada, sin error visible

  feProximityActive = true;

  const startBtn = document.getElementById("fe-proximity-btn");
  if (startBtn) startBtn.style.display = "none";

  // Vigilancia continua de la posición
  feWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      feCurrentPos = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      feRenderProximityWidget();
      feCheckArrival();
    },
    () => { /* si falla a mitad de partida, simplemente dejamos de actualizar */ },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );

  // Brújula: en iOS hace falta permiso explícito tras un gesto del usuario
  const DOE = window.DeviceOrientationEvent;
  if (DOE && typeof DOE.requestPermission === "function") {
    DOE.requestPermission().then((result) => {
      if (result === "granted") {
        window.addEventListener("deviceorientation", feHandleOrientation);
      }
      // si deniega, seguimos sin brújula — la flecha usará rumbo fijo hacia el norte-arriba
    }).catch(() => {});
  } else if ("DeviceOrientationEvent" in window) {
    window.addEventListener("deviceorientation", feHandleOrientation);
  }

  feRenderProximityWidget();
}

function feStopProximityGuide() {
  feProximityActive = false;
  if (feWatchId !== null) navigator.geolocation.clearWatch(feWatchId);
  feWatchId = null;
  window.removeEventListener("deviceorientation", feHandleOrientation);
  feRenderProximityWidget();
  const startBtn = document.getElementById("fe-proximity-btn");
  if (startBtn) startBtn.style.display = "inline-flex";
}

/* ---------- Rejilla de retos ---------- */

function renderPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  if (!grid) return;
  const lang = getLang();
  const progress = getProgress();
  const ordered = getSortedChallenges();

  grid.innerHTML = ordered.map((ch) => {
    const found = !!progress[ch.id];
    const thumb = ch.rewardImage || ch.clueImage;
    const miniStamp = `
      <span class="stamp stamp-mini ${found ? "stamp-earned" : "stamp-locked"}">
        <svg viewBox="0 0 24 24" stroke-width="1.6"><path d="M12 3l2.2 4.8 5.2.6-3.9 3.6 1 5.2L12 14.8 7.5 17.2l1-5.2L4.6 8.4l5.2-.6L12 3z"/></svg>
      </span>`;
    return `
      <button class="photo-tile" data-challenge-id="${ch.id}" aria-label="${ch.title[lang]}">
        ${thumb
          ? `<span class="photo-tile-thumb-wrap">
              <img src="${thumb}" alt="" style="width:100%;aspect-ratio:1/1;object-fit:cover;object-position:${ch.imagePosition || "center"};border-radius:4px;${found ? "" : "filter:grayscale(0.3) brightness(0.9);"}">
              ${miniStamp}
            </span>`
          : miniStamp}
        <span class="photo-tile-title">${found ? ch.title[lang] : UI_TEXT.fe_find_this[lang]}</span>
        <span class="photo-tile-hint">${found ? UI_TEXT.photo_found_hint[lang] : UI_TEXT.photo_locked_hint[lang]}</span>
      </button>
    `;
  }).join("");

  updateProgressCount();

  grid.querySelectorAll("[data-challenge-id]").forEach((el) => {
    el.addEventListener("click", () => openChallenge(el.getAttribute("data-challenge-id")));
  });
}

function updateProgressCount() {
  const el = document.getElementById("photo-progress-count");
  if (!el) return;
  const progress = getProgress();
  const found = PHOTO_CHALLENGES.filter((c) => progress[c.id]).length;
  el.textContent = `${found} / ${PHOTO_CHALLENGES.length}`;
}

let feModalStage = 0; // 0: solo miniatura | 1: + pista | 2: + ubicación
let feOpenChallengeId = null;

function openChallenge(id) {
  feModalStage = 0;
  feOpenChallengeId = id;
  renderModal(id);
  document.getElementById("photo-modal").classList.add("open");
  feRenderProximityWidget();
}

function renderModal(id) {
  const ch = PHOTO_CHALLENGES.find((c) => c.id === id);
  if (!ch) return;
  const lang = getLang();
  const found = !!getProgress()[ch.id];
  const body = document.getElementById("photo-modal-body");
  const mapsUrl = ch.mapsQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ch.mapsQuery)}`
    : null;

  const showClue = found || feModalStage >= 1;
  const showLocation = found || feModalStage >= 2;

  body.innerHTML = `
    <h2>${found ? ch.title[lang] : UI_TEXT.fe_find_this[lang]}</h2>

    ${ch.rewardImage && !found ? `
      <p class="eyebrow">${UI_TEXT.fe_find_this[lang]}</p>
      <img src="${ch.rewardImage}" alt="" style="border-radius:4px;margin-bottom:18px;width:100%;aspect-ratio:4/3;object-fit:cover;object-position:${ch.imagePosition || "center"};filter:grayscale(0.3) brightness(0.9);">
    ` : ""}

    ${!found && !showClue ? `
      <button class="btn" id="reveal-clue-btn">${UI_TEXT.fe_reveal_clue[lang]}</button>
    ` : ""}

    ${showClue ? `
      <p class="eyebrow">${UI_TEXT.photo_clue1[lang]}</p>
      ${ch.clueImage
        ? `<img src="${ch.clueImage}" alt="" style="border-radius:4px;margin-bottom:20px;width:100%;aspect-ratio:4/3;object-fit:cover;">`
        : `<p style="color:var(--parchment-dim);font-style:italic;">${UI_TEXT.fe_no_image_yet[lang]}</p>`}
    ` : ""}

    ${showClue && !found && !showLocation ? `
      <button class="btn" id="reveal-location-btn">${UI_TEXT.photo_reveal_clue3[lang]}</button>
    ` : ""}

    ${showLocation && mapsUrl ? `
      <p style="margin-top:14px;">
        <a class="btn btn-solid" target="_blank" rel="noopener" href="${mapsUrl}">
          ${UI_TEXT.photo_open_maps[lang]}
        </a>
      </p>
    ` : ""}

    <div id="photo-reward-zone" style="margin-top:24px;">
      ${found ? rewardHtml(ch, lang) : `<button class="btn btn-solid" id="mark-found-btn">${UI_TEXT.photo_found_btn[lang]}</button>`}
    </div>
  `;

  const revealClueBtn = document.getElementById("reveal-clue-btn");
  if (revealClueBtn) revealClueBtn.addEventListener("click", () => {
    feModalStage = 1;
    renderModal(id);
  });

  const revealLocationBtn = document.getElementById("reveal-location-btn");
  if (revealLocationBtn) revealLocationBtn.addEventListener("click", () => {
    feModalStage = 2;
    renderModal(id);
  });

  const markFoundBtn = document.getElementById("mark-found-btn");
  if (markFoundBtn) markFoundBtn.addEventListener("click", () => {
    setFound(ch.id);
    renderModal(id);
    renderPhotoGrid();
  });
}

/* Convierte cualquier formato de enlace de YouTube (watch, shorts, youtu.be)
   en la URL de embed correspondiente. Devuelve null si no lo reconoce. */
function getYoutubeEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
    return null;
  } catch (e) {
    return null;
  }
}

function rewardHtml(ch, lang) {
  const embedUrl = ch.video ? getYoutubeEmbedUrl(ch.video) : null;
  const videoHtml = embedUrl ? `
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:4px;margin:16px 0;">
      <iframe src="${embedUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>` : "";

  let rewardText = ch.reward[lang] || "";
  let bodyHtml;
  if (embedUrl && rewardText.includes("[[VIDEO]]")) {
    // El vídeo se coloca exactamente donde esté el marcador [[VIDEO]] en el texto
    const parts = rewardText.split("[[VIDEO]]");
    bodyHtml = parts
      .map((part) => `<p>${part.replace(/\n/g, "<br><br>")}</p>`)
      .join(videoHtml);
  } else {
    // Sin marcador: el texto va entero, y el vídeo (si lo hay) al final
    bodyHtml = `<p>${rewardText.replace(/\n/g, "<br><br>")}</p>${videoHtml}`;
  }

  return `
    <div class="card" style="border-color:var(--gold);">
      <span class="eyebrow">${UI_TEXT.photo_reward_title[lang]}</span>
      <h3>${ch.title[lang]}</h3>
      ${ch.rewardImage ? `<img src="${ch.rewardImage}" alt="" style="border-radius:4px;margin:12px 0;aspect-ratio:4/3;object-fit:cover;object-position:${ch.imagePosition || "center"};">` : ""}
      ${bodyHtml}
    </div>
  `;
}

function closeModal() {
  document.getElementById("photo-modal").classList.remove("open");
  feOpenChallengeId = null;
  feRenderProximityWidget();
}

document.addEventListener("DOMContentLoaded", () => {
  feInitLocation();
  renderPhotoGrid();

  const modal = document.getElementById("photo-modal");
  const closeBtn = document.getElementById("photo-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  const resetBtn = document.getElementById("photo-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    resetProgress();
    renderPhotoGrid();
  });

  const proximityBtn = document.getElementById("fe-proximity-btn");
  if (proximityBtn && !("geolocation" in navigator)) {
    proximityBtn.style.display = "none"; // sin soporte de geolocalización: ni se ofrece
  } else if (proximityBtn) {
    proximityBtn.addEventListener("click", feStartProximityGuide);
  }
});

document.addEventListener("langchange", () => {
  feRenderLocationPanel();
  renderPhotoGrid();
  feRenderProximityWidget();
});
