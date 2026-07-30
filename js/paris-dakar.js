/* ==========================================================================
   Pasaporte París-Dakar
   Progreso guardado en localStorage del navegador de cada invitado.
   Las paradas "opcionales" se muestran aparte y no cuentan para el sello.
   ========================================================================== */

const PD_PROGRESS_KEY = "guia_paris_dakar_progress";

function pdGetProgress() {
  try {
    return JSON.parse(localStorage.getItem(PD_PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function pdSetVisited(name) {
  const progress = pdGetProgress();
  const alreadyVisited = !!progress[name];
  progress[name] = true;
  localStorage.setItem(PD_PROGRESS_KEY, JSON.stringify(progress));
  if (!alreadyVisited) {
    trackEvent("parisdakar-visitado", { parada: name });
    const mainStops = pdMainStops();
    const allVisited = mainStops.every((s) => progress[s.name]);
    if (allVisited) trackEvent("parisdakar-completado");
  }
}

function pdResetProgress() {
  localStorage.removeItem(PD_PROGRESS_KEY);
}

function pdMainStops() {
  return PARIS_DAKAR_ITEMS.filter((s) => !s.isOptional);
}

function pdOptionalStops() {
  return PARIS_DAKAR_ITEMS.filter((s) => s.isOptional);
}

function renderParisDakar() {
  const wrap = document.getElementById("pd-route");
  if (!wrap) return;
  const lang = getLang();
  const progress = pdGetProgress();
  const mainStops = pdMainStops();

  wrap.innerHTML = mainStops.map((stop) => {
    const visited = !!progress[stop.name];
    let badge = "";
    if (stop.isStart) badge = UI_TEXT.parisdakar_start[lang];
    if (stop.isFinish) badge = UI_TEXT.parisdakar_finish[lang];

    return `
      <button class="pd-stop" data-stop-name="${stop.name.replace(/"/g, '&quot;')}">
        <span class="stamp ${visited ? "stamp-earned" : "stamp-locked"}">
          ${ICONS.wineCup()}
        </span>
        <span class="pd-stop-info">
          ${badge ? `<span class="tag" style="color:var(--gold);border-color:var(--gold);margin-bottom:4px;">${badge}</span>` : ""}
          <span class="pd-stop-name">${stop.name}</span>
        </span>
      </button>
    `;
  }).join("");

  pdUpdateProgressCount();
  renderPdOptional();

  wrap.querySelectorAll("[data-stop-name]").forEach((el) => {
    el.addEventListener("click", () => pdOpenStop(el.getAttribute("data-stop-name")));
  });

  const allDone = mainStops.every((s) => progress[s.name]);
  const banner = document.getElementById("pd-complete-banner");
  if (banner) banner.style.display = allDone ? "block" : "none";
}

function renderPdOptional() {
  const wrap = document.getElementById("pd-optional-list");
  if (!wrap) return;
  const lang = getLang();

  wrap.innerHTML = pdOptionalStops().map((stop) => `
    <div class="card">
      <h3>${stop.name}</h3>
      <p>${(stop.description || stop.tip)[lang]}</p>
      ${stop.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${stop.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    </div>
  `).join("");
}

function pdUpdateProgressCount() {
  const el = document.getElementById("pd-progress-count");
  if (!el) return;
  const progress = pdGetProgress();
  const mainStops = pdMainStops();
  const done = mainStops.filter((s) => progress[s.name]).length;
  el.textContent = `${done} / ${mainStops.length}`;
}

function pdOpenStop(name) {
  const stop = PARIS_DAKAR_ITEMS.find((s) => s.name === name);
  if (!stop) return;
  const lang = getLang();
  const visited = !!pdGetProgress()[name];
  const modal = document.getElementById("pd-modal");
  const body = document.getElementById("pd-modal-body");

  body.innerHTML = `
    <h2>${stop.name}</h2>
    <p>${stop.tip[lang]}</p>
    ${stop.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${stop.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    <div style="margin-top:20px;">
      ${visited
        ? `<span class="tag icon-tag" style="color:var(--gold);border-color:var(--gold);">${ICONS.wineCup()}${UI_TEXT.parisdakar_visited[lang]}</span>`
        : `<button class="btn btn-solid" id="pd-mark-visited-btn">${UI_TEXT.parisdakar_mark_visited[lang]}</button>`}
    </div>
  `;

  if (!visited) {
    document.getElementById("pd-mark-visited-btn").addEventListener("click", () => {
      pdSetVisited(name);
      closePdModal();
      renderParisDakar();
    });
  }

  modal.classList.add("open");
}

function closePdModal() {
  document.getElementById("pd-modal").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  renderParisDakar();
  const modal = document.getElementById("pd-modal");
  const closeBtn = document.getElementById("pd-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closePdModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closePdModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePdModal(); });

  const resetBtn = document.getElementById("pd-reset-btn");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    pdResetProgress();
    renderParisDakar();
  });
});

document.addEventListener("langchange", renderParisDakar);
