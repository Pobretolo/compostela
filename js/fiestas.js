/* ==========================================================================
   Fiestas del Apóstol — lista de días
   Se actualiza dinámicamente: las citas cuya fecha ya ha pasado (comparado
   con la fecha real del dispositivo de quien esté mirando la web en cada
   momento) desaparecen solas de la lista, sin que haga falta editar nada.
   ========================================================================== */

/* Devuelve la fecha de "hoy" en formato YYYY-MM-DD, según el reloj del
   propio dispositivo del visitante (no depende de ningún servidor). */
function fiestasTodayIso() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function renderFiestas() {
  const wrap = document.getElementById("fiestas-list");
  if (!wrap) return;
  const lang = getLang();
  const today = fiestasTodayIso();

  // Solo mostramos las citas de hoy en adelante, y las ordenamos por fecha
  // por si en algún momento se añaden nuevas fuera de orden.
  const upcoming = FIESTAS_ITEMS
    .filter((item) => !item.isoDate || item.isoDate >= today)
    .sort((a, b) => (a.isoDate || "").localeCompare(b.isoDate || ""));

  if (upcoming.length === 0) {
    wrap.innerHTML = `<p style="text-align:center;color:var(--parchment-dim);">${UI_TEXT.fiestas_all_past[lang]}</p>`;
    return;
  }

  wrap.innerHTML = upcoming.map((day) => {
    const isWeddingEve = !!day.isWeddingEve;
    const isGaias = !!day.isGaias;
    const icon = isGaias ? ICONS.sunset() : ICONS.fireworks();

    return `
      <div class="card" style="${isWeddingEve ? "border-color:var(--gold);" : ""}display:flex;gap:18px;align-items:flex-start;">
        <span class="stamp ${isWeddingEve ? "stamp-earned" : "stamp-locked"}" style="width:56px;height:56px;flex-shrink:0;">
          ${icon}
        </span>
        <div>
          ${isWeddingEve ? `<span class="tag" style="color:var(--gold);border-color:var(--gold);margin-bottom:8px;">${UI_TEXT.fiestas_wedding_eve[lang]}</span>` : ""}
          ${isGaias ? `<span class="tag" style="color:var(--moss);border-color:var(--moss);margin-bottom:8px;">Atardecer no Gaiás</span>` : ""}
          <p class="eyebrow" style="color:var(--rust);">${day.date[lang]}</p>
          <h3>${day.title[lang]}</h3>
          <p>${day.description[lang]}</p>
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderFiestas);
document.addEventListener("langchange", renderFiestas);
