/* Filtro y render de "¡Voy con un perro!" */

let perroFilters = { type: "all" };

function renderPerro() {
  const wrap = document.getElementById("perro-list");
  if (!wrap) return;
  const lang = getLang();

  const filtered = PERRO_ITEMS.filter((item) => {
    if (perroFilters.type !== "all" && item.type !== perroFilters.type) return false;
    return true;
  });

  if (filtered.length === 0) {
    wrap.innerHTML = `<p style="text-align:center;color:var(--parchment-dim);grid-column:1/-1;">${UI_TEXT.perro_no_results[lang]}</p>`;
    return;
  }

  const typeColor = { comer: "var(--rust)", parque: "var(--moss)", ruta: "var(--gold)" };

  wrap.innerHTML = filtered.map((item) => `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.name[lang]}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:4px;margin-bottom:14px;">` : ""}
      <h3>${item.name[lang]}</h3>
      <div style="margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;">
        <span class="tag icon-tag" style="color:${typeColor[item.type] || "var(--rust)"};border-color:${typeColor[item.type] || "var(--rust)"}">${ICONS[item.tagIcon] ? ICONS[item.tagIcon]() : ""}${item.tag[lang]}</span>
      </div>
      <p>${item.description[lang]}</p>
      ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}" style="margin-top:10px;">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
    </div>
  `).join("");
}

function setupPerroFilters() {
  document.querySelectorAll("[data-perro-type-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      perroFilters.type = btn.getAttribute("data-perro-type-filter");
      document.querySelectorAll("[data-perro-type-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPerro();
    });
  });
}

function paintPerroPillIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.getAttribute("data-icon");
    if (ICONS[key] && !el.innerHTML) el.innerHTML = ICONS[key]();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  paintPerroPillIcons();
  setupPerroFilters();
  renderPerro();
});
document.addEventListener("langchange", renderPerro);
