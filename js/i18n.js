/* ==========================================================================
   Sistema de idiomas (ES/EN)
   - El texto de la interfaz (menús, botones, títulos fijos) vive aquí en UI_TEXT.
   - El contenido "editable" (qué ver, tengo coche, salir, foto explorer)
     vive en data.js, cada texto con sus dos versiones {es: "...", en: "..."}.
   ========================================================================== */

const UI_TEXT = {
  nav_home:        { es: "Inicio",          en: "Home" },
  nav_photo:       { es: "Foto Explorer",   en: "Photo Explorer" },
  nav_ver:         { es: "Qué ver en un día", en: "One-day guide" },
  nav_coche:       { es: "¡Tengo coche!",   en: "I have a car!" },
  nav_salir:       { es: "¿Por dónde salir?", en: "Nightlife guide" },
  nav_comer:       { es: "Dónde comer",     en: "Where to eat" },
  nav_fiestas:     { es: "Fiestas del Apóstol", en: "Fiestas del Apóstol" },
  nav_parisdakar:  { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  nav_datos:       { es: "Datos de interés", en: "Practical info" },

  eyebrow_photo:      { es: "Minijuego", en: "Mini-game" },
  eyebrow_ver:        { es: "Ruta recomendada", en: "Recommended route" },
  eyebrow_coche:      { es: "Escapadas", en: "Day trips" },
  eyebrow_comer:      { es: "Gastronomía", en: "Food & drink" },
  eyebrow_salir:      { es: "Vida nocturna", en: "Nightlife" },
  eyebrow_fiestas:    { es: "Programa oficial", en: "Official program" },
  eyebrow_parisdakar: { es: "Tradición compostelana", en: "Compostela tradition" },
  eyebrow_datos:      { es: "Información práctica", en: "Practical information" },

  hero_eyebrow:    { es: "Guía de viaje", en: "Travel guide" },
  hero_date:       { es: "Camino, historia y buena mesa", en: "The Camino, history, and good food" },
  hero_sub:        { es: "Todo lo que necesitas para descubrir la ciudad mientras estás por aquí.", en: "Everything you need for discovering the city while you're here." },

  home_photo_title: { es: "Foto Explorer", en: "Photo Explorer" },
  home_photo_desc:  { es: "Un juego de pistas por la ciudad. Encuentra el lugar y consigue tu sello.", en: "A clue-hunting game around the city. Find the spot and earn your stamp." },

  home_ver_title:  { es: "Qué ver en un día", en: "One-day guide" },
  home_ver_desc:   { es: "Nuestra ruta favorita para descubrir Santiago si solo tienes un día.", en: "Our favorite route to discover Santiago if you only have one day." },

  home_coche_title: { es: "¡Tengo coche!", en: "I have a car!" },
  home_coche_desc:  { es: "Escapadas por Galicia y A Coruña si te quieres alejar un poco de la ciudad.", en: "Day trips around Galicia and A Coruña if you fancy venturing outside the city." },

  home_salir_title: { es: "¿Por dónde salir?", en: "Nightlife guide" },
  home_salir_desc:  { es: "Bares y planes nocturnos, filtrados por lo que te apetezca esta noche.", en: "Bars and night plans, filtered by whatever you're in the mood for tonight." },

  home_comer_title: { es: "Dónde comer", en: "Where to eat" },
  home_comer_desc:  { es: "Nuestros sitios de confianza para comer bien en Santiago.", en: "Our trusted spots to eat well in Santiago." },

  home_fiestas_title: { es: "Fiestas del Apóstol", en: "Fiestas del Apóstol" },
  home_fiestas_desc:  { es: "El programa oficial de las fiestas patronales, del 22 al 31 de julio.", en: "The official program for the patron saint festivities, 22 to 31 July." },

  home_parisdakar_title: { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  home_parisdakar_desc:  { es: "La mítica ruta de bares de los estudiantes compostelanos, convertida en pasaporte de sellos.", en: "Santiago students' legendary bar route, turned into a stamp passport." },

  home_datos_title: { es: "Datos de interés", en: "Practical info" },
  home_datos_desc:  { es: "Teléfonos, transporte y otra información práctica para el día a día en Santiago.", en: "Phone numbers, transport and other practical info for getting around Santiago." },

  footer_text: { es: "Guía no oficial de Santiago de Compostela", en: "An unofficial guide to Santiago de Compostela" },

  page_photo_title: { es: "Foto Explorer", en: "Photo Explorer" },
  page_photo_sub: {
    es: "Cada tarjeta esconde un rincón de Santiago. Ábrela, sigue las pistas y márcalo como encontrado cuando estés delante del sitio.",
    en: "Each card hides a corner of Santiago. Open it, follow the clues, and mark it found once you're standing right in front of it."
  },
  photo_progress: { es: "sellos conseguidos", en: "stamps collected" },
  photo_clue1: { es: "Pista · La foto", en: "Clue · The photo" },
  photo_reveal_clue3: { es: "Revelar ubicación", en: "Reveal location" },
  photo_open_maps: { es: "Abrir en Google Maps", en: "Open in Google Maps" },
  photo_found_btn: { es: "¡Lo he encontrado!", en: "I found it!" },
  photo_reward_title: { es: "Sello conseguido", en: "Stamp earned" },
  photo_close: { es: "Cerrar", en: "Close" },
  photo_locked_hint: { es: "Toca para empezar", en: "Tap to start" },
  fe_find_this: { es: "Encuentra este lugar", en: "Find this place" },
  fe_reveal_clue: { es: "Revelar pista", en: "Reveal clue" },
  photo_found_hint: { es: "Encontrado", en: "Found" },
  photo_reset: { es: "Reiniciar progreso", en: "Reset progress" },

  fe_locating: { es: "Detectando tu ubicación…", en: "Detecting your location…" },
  fe_your_location: { es: "tu ubicación", en: "your location" },
  fe_starting_from: { es: "Empezando desde:", en: "Starting from:" },
  fe_choose_start: {
    es: "No hemos podido detectar tu ubicación. Elige desde dónde empiezas:",
    en: "We couldn't detect your location. Choose where you're starting from:"
  },
  fe_no_image_yet: {
    es: "(Aún no se ha añadido la foto de esta pista)",
    en: "(No photo has been added for this clue yet)"
  },
  fe_enable_proximity: { es: "🧭 Activar guía de proximidad", en: "🧭 Enable proximity guide" },
  fe_arrived: { es: "¡Estás cerca de", en: "You're near" },

  page_ver_title: { es: "Qué ver en un día", en: "One-day guide" },
  page_ver_sub: {
    es: "Algunos de los puntos más interesantes a los que puedes acercarte caminando si solo tienes un día en Santiago.",
    en: "Some of the most interesting spots you can walk to if you only have one day in Santiago."
  },

  page_coche_title: { es: "¡Tengo coche!", en: "I have a car!" },
  page_coche_sub: {
    es: "Si te apetece alquilar un coche y salir de la ciudad, estas son nuestras recomendaciones por Galicia y A Coruña. Los anillos indican lo imprescindible que nos parece cada sitio si es tu primera vez en Galicia.",
    en: "If you fancy renting a car and heading out of the city, here are our recommendations around Galicia and A Coruña. The rings show how essential each place feels if it's your first time in Galicia."
  },
  coche_rating_label: { es: "Interés para tu primera vez en Galicia", en: "Interest for your first time in Galicia" },
  coche_distance: { es: "Distancia desde Santiago", en: "Distance from Santiago" },

  page_salir_title: { es: "¿Por dónde salir?", en: "Nightlife guide" },
  page_salir_sub: {
    es: "Santiago no compite en tamaño con Madrid o Barcelona, pero sí en ambiente: al ser ciudad universitaria y de peregrinación, cada noche mezcla a estudiantes, vecinos, turistas y peregrinos en un público muy diverso. Filtra abajo por lo que te apetezca esta noche.",
    en: "Santiago doesn't compete with Madrid or Barcelona in size, but it does in atmosphere: as a university and pilgrimage city, every night mixes students, locals, tourists, and pilgrims into a wonderfully varied crowd. Filter below by whatever you're in the mood for tonight."
  },
  salir_filter_music: { es: "Música", en: "Music" },
  salir_filter_tapa: { es: "Tapa con la bebida", en: "Tapa with your drink" },
  salir_filter_gay: { es: "Mayoritariamente gay", en: "Predominantly gay" },
  salir_filter_irish: { es: "Irlandés", en: "Irish" },
  salir_filter_live: { es: "Música en directo", en: "Live music" },
  salir_filter_all: { es: "Todos", en: "All" },
  salir_music_celta: { es: "Celta / Folk", en: "Celtic / Folk" },
  salir_music_moderna: { es: "Moderna", en: "Modern" },
  salir_music_tranquila: { es: "Tranquila", en: "Chill" },
  salir_no_results: { es: "No hay planes con esos filtros. Prueba a quitar alguno.", en: "No spots match those filters. Try removing one." },
  maps_link: { es: "Ver en Google Maps", en: "View on Google Maps" },
  comer_website: { es: "Web", en: "Website" },
  comer_menu: { es: "Ver carta", en: "View menu" },
  que_ver_book: { es: "Reservar", en: "Book" },
  que_ver_fototour_title: { es: "Empieza con un mini free tour", en: "Start with a mini free tour" },
  que_ver_fototour_text: {
    es: "Antes de seguir con esta guía, os proponemos el Foto Explorer: un juego de pistas por la zona vieja que funciona como un pequeño \"free tour\" de la ciudad, con historias y curiosidades en cada parada.",
    en: "Before going through this guide, give the Photo Explorer a try: a clue-hunting game around the old town that works like a mini \"free tour\" of the city, with stories and fun facts at every stop."
  },
  que_ver_fototour_btn: { es: "Ir al Foto Explorer", en: "Go to the Photo Explorer" },

  page_comer_title: { es: "Dónde comer", en: "Where to eat" },
  page_comer_sub: {
    es: "Nuestros sitios de confianza en Santiago, con ubicación en Google Maps, su nota real en Google (en anillos), el precio orientativo (en €) y el tipo de cocina. Prácticamente todos tienen alguna alternativa vegetariana o vegana en la carta (aunque sea una ensalada, tortilla o pimientos de Padrón) — los marcados como \"Vegano / vegetariano\" son los únicos exclusivamente vegetarianos o veganos, sin carne ni pescado en la carta.",
    en: "Our trusted spots in Santiago, with a Google Maps location, their real Google rating (shown as rings), a rough price level (in €), and the type of cuisine. Practically all of them have some vegetarian or vegan option on the menu (even if it's just a salad, tortilla, or Padrón peppers) — the ones marked \"Vegan / vegetarian\" are the only exclusively vegetarian or vegan spots, with no meat or fish on the menu at all."
  },
  comer_cat_marisco: { es: "Marisco", en: "Seafood" },
  comer_cat_tradicional: { es: "Tradicional", en: "Traditional" },
  comer_cat_tapas: { es: "Tapas", en: "Tapas" },
  comer_cat_cafeteria: { es: "Cafetería / postre", en: "Café / dessert" },
  comer_cat_altacocina: { es: "Alta cocina", en: "Fine dining" },
  comer_cat_vegano: { es: "Vegano / vegetariano", en: "Vegan / vegetarian" },
  comer_breakfast: { es: "Desayunos", en: "Breakfast" },
  comer_filter_all: { es: "Todos", en: "All" },
  comer_filter_breakfast: { es: "Desayunos", en: "Breakfast" },
  comer_filter_terrace: { es: "Terraza / jardín", en: "Terrace / garden" },
  comer_filter_michelin: { es: "Guía Michelin", en: "Michelin Guide" },
  comer_no_results: { es: "No hay locales con esos filtros. Prueba a quitar alguno.", en: "No spots match those filters. Try removing one." },

  page_fiestas_title: { es: "Fiestas del Apóstol 2026", en: "Fiestas del Apóstol 2026" },
  page_fiestas_sub: {
    es: "El programa oficial de las fiestas patronales de Santiago.",
    en: "The official program for Santiago's patron saint festivities."
  },
  fiestas_closing_night: { es: "Cierre de fiestas", en: "Closing night" },
  fiestas_all_past: {
    es: "Las Fiestas del Apóstol de este año ya han terminado. ¡Hasta el año que viene!",
    en: "This year's Fiestas del Apóstol have already wrapped up. See you next year!"
  },

  page_parisdakar_title: { es: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  page_parisdakar_sub: {
    es: "La ruta de bares más tradicional de Santiago, con formato de credencial: un sello por cada parada superada.",
    en: "Santiago's most traditional bar route, passport-style: one stamp for every stop you complete."
  },
  parisdakar_history: {
    es: "El «París-Dakar» nació a finales de los años 80 entre estudiantes universitarios de Santiago, como un rally con guiño de humor a la carrera automovilística. La ruta original recorría la Rúa do Franco y la Rúa da Raíña, empezando en la cafetería O París y terminando en el bar Dakar, tomando una cunca de vino Ribeiro en cada parada — con pruebas de por medio, como cantar una canción o contar un chiste. Hoy sigue siendo una tradición muy viva entre locales y visitantes, en versión bastante más tranquila.",
    en: "The 'Paris-Dakar' was born in the late 1980s among Santiago university students, a playful nod to the car rally of the same name. The original route ran along Rúa do Franco and Rúa da Raíña, starting at the O París café and ending at the Dakar bar, with a cunca (traditional bowl) of Ribeiro wine at every stop — often with a little challenge along the way, like singing a song or telling a joke. It's still a lively tradition among locals and visitors today, in a much more relaxed version."
  },
  parisdakar_moderation: {
    es: "Ve a tu ritmo: no hace falta terminar la ruta ni beber en todas las paradas para pasarlo bien. Alterna con agua, y si alguien prefiere no beber alcohol, la mayoría de estos bares tienen alternativa sin alcohol — el objetivo es la tradición y el ambiente, no la cantidad.",
    en: "Go at your own pace: you don't need to finish the whole route or drink at every stop to have a good time. Alternate with water, and if someone would rather skip the alcohol, most of these bars have a non-alcoholic option — the point is the tradition and the atmosphere, not the quantity."
  },
  parisdakar_progress: { es: "sellos conseguidos", en: "stamps collected" },
  parisdakar_mark_visited: { es: "Marcar como visitado", en: "Mark as visited" },
  parisdakar_visited: { es: "Visitado", en: "Visited" },
  parisdakar_start: { es: "Salida", en: "Start" },
  parisdakar_finish: { es: "Meta", en: "Finish" },
  parisdakar_optional_title: { es: "Paradas opcionales", en: "Optional stops" },
  parisdakar_optional_sub: {
    es: "Si os apetece alargar la ruta o hacer una parada más tranquila para comer algo, estos sitios no forman parte del recorrido clásico de la Rúa do Franco/Raíña pero merecen la pena igualmente. No cuentan para el pasaporte de sellos.",
    en: "If you fancy extending the route or taking a calmer sit-down stop for food, these places aren't part of the classic Rúa do Franco/Raíña route but are still worth it. They don't count toward the stamp passport."
  },
  parisdakar_complete_title: { es: "¡Ruta completada!", en: "Route complete!" },
  parisdakar_complete_text: {
    es: "Habéis llegado al Dakar. Enhorabuena, ya formáis parte de la tradición compostelana.",
    en: "You've made it to the Dakar. Congratulations — you're now part of Compostela tradition."
  },

  page_datos_title: { es: "Datos de interés", en: "Practical info" },
  page_datos_sub: {
    es: "Algunos teléfonos y datos prácticos que pueden venir bien durante vuestra estancia en Santiago.",
    en: "A few phone numbers and practical details that might come in handy during your stay in Santiago."
  },
};

function getLang() {
  const stored = localStorage.getItem("guia_lang");
  if (stored) return stored;
  return detectDeviceLang();
}

/* Si el visitante no ha elegido idioma nunca (primera visita), usamos el
   idioma del dispositivo: español si el dispositivo está en español,
   inglés en cualquier otro caso. */
function detectDeviceLang() {
  const raw = (navigator.language || (navigator.languages && navigator.languages[0]) || "en").toLowerCase();
  return raw.startsWith("es") ? "es" : "en";
}

function setLang(lang) {
  localStorage.setItem("guia_lang", lang);
  applyLang();
}

function applyLang() {
  const lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_TEXT[key]) {
      el.textContent = UI_TEXT[key][lang];
    }
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
  });

  // Let each page re-render dynamic content (data.js driven) in the new language
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* Envía un evento anónimo a Umami (si está configurado). Si el script de
   analítica no está cargado, bloqueado por el navegador, o el sitio aún no
   tiene el ID configurado, esta función simplemente no hace nada — nunca
   rompe el resto de la web. No identifica a nadie, solo cuenta eventos
   agregados (ej. "cuántos sellos se han marcado en total"). */
function trackEvent(name, data) {
  try {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(name, data || {});
    }
  } catch (e) {
    // silencioso a propósito
  }
}

function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });
  applyLang();
}

function initNavToggle() {
  const btn = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("mobile-open");
    btn.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the dropdown if the viewport is resized back to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 640 && links.classList.contains("mobile-open")) {
      links.classList.remove("mobile-open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangToggle();
  initNavToggle();
});
