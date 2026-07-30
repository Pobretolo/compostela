/* Render helpers compartidos por varias páginas */

function renderQueVer() {
  const wrap = document.getElementById("que-ver-list");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = QUE_VER_ITEMS.map((item, i) => `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.title[lang]}" style="border-radius:4px;margin-bottom:16px;aspect-ratio:4/3;object-fit:cover;">` : ""}
      ${item.time ? `<span class="eyebrow" style="color:var(--rust)">${item.time[lang]}</span>` : ""}
      <h3>${item.title[lang]}</h3>
      <p>${item.description[lang]}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
        ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
        ${item.bookingUrl ? `<a class="btn btn-solid" target="_blank" rel="noopener" href="${item.bookingUrl}">${item.bookingLabel ? item.bookingLabel[lang] : UI_TEXT.que_ver_book[lang]}</a>` : ""}
      </div>
    </div>
  `).join("");
}

function renderTengoCoche() {
  const wrap = document.getElementById("tengo-coche-list");
  if (!wrap) return;
  const lang = getLang();
  wrap.innerHTML = TENGO_COCHE_ITEMS.map((item) => {
    const rating = item.rating || 0;
    const ringsHtml = Array.from({ length: 5 }).map((_, i) => `
      <span class="ring-icon ${i < rating ? "filled" : ""}">${ICONS.ring()}</span>
    `).join("");
    return `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.title[lang]}" style="border-radius:4px;margin-bottom:16px;aspect-ratio:4/3;object-fit:cover;">` : ""}
      <h3>${item.title[lang]}</h3>
      <div class="rings-rating" title="${UI_TEXT.coche_rating_label[lang]}: ${rating}/5">${ringsHtml}</div>
      <span class="tag" style="color:var(--rust);border-color:var(--rust)">${item.distance[lang]}</span>
      <p style="margin-top:12px;">${item.description[lang]}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
        ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}">${ICONS.pin()}${UI_TEXT.maps_link[lang]}</a>` : ""}
        ${item.extraUrl ? `<a class="btn btn-solid" target="_blank" rel="noopener" href="${item.extraUrl}">${item.extraLabel ? item.extraLabel[lang] : ""}</a>` : ""}
      </div>
    </div>
  `;
  }).join("");
}

let comerFilters = { category: "all", breakfast: false, terrace: false, michelin: false };

function renderComer() {
  const wrap = document.getElementById("comer-list");
  if (!wrap) return;
  const lang = getLang();
  const catLabel = {
    marisco: UI_TEXT.comer_cat_marisco,
    tradicional: UI_TEXT.comer_cat_tradicional,
    tapas: UI_TEXT.comer_cat_tapas,
    cafeteria: UI_TEXT.comer_cat_cafeteria,
    altacocina: UI_TEXT.comer_cat_altacocina,
    vegano: UI_TEXT.comer_cat_vegano,
  };
  const catIcon = {
    marisco: ICONS.fish,
    tradicional: ICONS.pot,
    tapas: ICONS.plate,
    cafeteria: ICONS.cup,
    altacocina: ICONS.star,
    vegano: ICONS.leaf,
  };

  const filtered = COMER_ITEMS.filter((item) => {
    if (comerFilters.category !== "all" && item.category !== comerFilters.category) return false;
    if (comerFilters.breakfast && !item.breakfast) return false;
    if (comerFilters.terrace && !item.terrace) return false;
    if (comerFilters.michelin && !item.michelin) return false;
    return true;
  });

  if (filtered.length === 0) {
    wrap.innerHTML = `<p style="text-align:center;color:var(--parchment-dim);grid-column:1/-1;">${UI_TEXT.comer_no_results[lang]}</p>`;
    return;
  }

  wrap.innerHTML = filtered.map((item) => {
    const ratingHtml = typeof item.rating === "number" ? `
      <div class="rings-rating" style="margin-bottom:2px;" title="Google: ${item.rating}/5">
        ${Array.from({ length: 5 }).map((_, i) => `<span class="ring-icon ${i < Math.round(item.rating) ? "filled" : ""}">${ICONS.ring()}</span>`).join("")}
        <span style="font-family:var(--font-mono);font-size:0.72rem;color:#4a5560;margin-left:4px;">${item.ratingApprox ? "~" : ""}${item.rating} · Google</span>
      </div>` : "";

    const priceHtml = typeof item.price === "number" ? `
      <span class="tag icon-tag" style="color:var(--moss);border-color:var(--moss);">
        ${"€".repeat(item.price)}<span style="opacity:0.35;">${"€".repeat(5 - item.price)}</span>
      </span>` : "";

    return `
    <div class="card">
      ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:4px;margin-bottom:14px;">` : ""}
      <h3>${item.name}</h3>
      ${ratingHtml}
      <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;">
        ${item.category && catLabel[item.category] ? `
          <span class="tag icon-tag" style="color:var(--rust);border-color:var(--rust);">
            ${catIcon[item.category]()}${catLabel[item.category][lang]}
          </span>` : ""}
        ${item.breakfast ? `<span class="tag icon-tag" style="color:var(--gold);border-color:var(--gold);">${ICONS.cup()}${UI_TEXT.comer_breakfast[lang]}</span>` : ""}
        ${item.terrace ? `<span class="tag icon-tag" style="color:var(--moss);border-color:var(--moss);">${ICONS.terrace()}${UI_TEXT.comer_filter_terrace[lang]}</span>` : ""}
        ${item.michelin ? `<span class="tag icon-tag" style="color:var(--rust);border-color:var(--rust);">${ICONS.michelin()}${UI_TEXT.comer_filter_michelin[lang]}</span>` : ""}
        ${priceHtml}
      </div>
      <p style="margin-top:12px;">${item.description[lang]}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center;">
        ${item.mapsUrl ? `<a class="btn" target="_blank" rel="noopener" href="${item.mapsUrl}" aria-label="${UI_TEXT.maps_link[lang]}" title="${UI_TEXT.maps_link[lang]}" style="padding:11px 14px;">${ICONS.pin()}</a>` : ""}
        ${item.website ? `<a class="btn" target="_blank" rel="noopener" href="${item.website}">${UI_TEXT.comer_website[lang]}</a>` : ""}
        ${(() => {
          const menuUrl = lang === "en" ? (item.menuUrlEn || item.menuUrlEs) : (item.menuUrlEs || item.menuUrlEn);
          return menuUrl ? `<a class="btn btn-solid" target="_blank" rel="noopener" href="${menuUrl}">${UI_TEXT.comer_menu[lang]}</a>` : "";
        })()}
        ${item.instagram ? `<a class="btn" target="_blank" rel="noopener" href="${item.instagram}" aria-label="Instagram" title="Instagram" style="padding:11px 14px;">${ICONS.instagram()}</a>` : ""}
      </div>
    </div>
  `;
  }).join("");
}

function paintComerPillIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const key = el.getAttribute("data-icon");
    if (ICONS[key] && !el.innerHTML) el.innerHTML = ICONS[key]();
  });
}

function setupComerFilters() {
  const catButtons = document.querySelectorAll("[data-cat-filter]");
  if (catButtons.length === 0) return;

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      comerFilters.category = btn.getAttribute("data-cat-filter");
      catButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderComer();
    });
  });

  const toggles = [
    ["filter-breakfast", "breakfast"],
    ["filter-terrace", "terrace"],
    ["filter-michelin", "michelin"],
  ];

  toggles.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("click", () => {
      comerFilters[key] = !comerFilters[key];
      el.classList.toggle("active", comerFilters[key]);
      renderComer();
    });
  });
}

function renderDatosInteres() {
  const wrap = document.getElementById("datos-interes-list");
  if (!wrap) return;
  const lang = getLang();

  wrap.innerHTML = DATOS_INTERES_ITEMS.map((item) => `
    <div class="card" style="display:flex;gap:16px;align-items:flex-start;">
      <span class="stamp stamp-earned" style="width:52px;height:52px;flex-shrink:0;">
        ${ICONS[item.icon] ? ICONS[item.icon]() : ""}
      </span>
      <div>
        <h3>${item.title[lang]}</h3>
        <p style="margin-bottom:0;">${item.description[lang]}</p>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  paintComerPillIcons();
  setupComerFilters();
  renderQueVer();
  renderTengoCoche();
  renderComer();
  renderDatosInteres();
});
document.addEventListener("langchange", () => {
  renderQueVer();
  renderTengoCoche();
  renderComer();
  renderDatosInteres();
});
