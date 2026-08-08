/* ==========================================================================
   Sistema de idiomas (ES/EN)
   - El texto de la interfaz (menús, botones, títulos fijos) vive aquí en UI_TEXT.
   - El contenido "editable" (qué ver, tengo coche, salir, foto explorer)
     vive en data.js, cada texto con sus dos versiones {es: "...", en: "..."}.
   ========================================================================== */

const UI_TEXT = {
  nav_home:        { es: "Inicio",          gl: "Inicio",          en: "Home" },
  nav_photo:       { es: "Foto Explorer",   gl: "Foto Explorer",   en: "Photo Explorer" },
  nav_ver:         { es: "Qué ver en un día", gl: "Que ver nun día", en: "One-day guide" },
  nav_coche:       { es: "¡Tengo coche!",   gl: "¡Teño coche!",    en: "I have a car!" },
  nav_salir:       { es: "¿Por dónde salir?", gl: "¿Por onde saír?", en: "Nightlife guide" },
  nav_comer:       { es: "Dónde comer",     gl: "Onde comer",      en: "Where to eat" },
  nav_perro:       { es: "¡Voy con un perro!", gl: "¡Vou cun can!", en: "Travelling with a dog!" },
  nav_fiestas:     { es: "Fiestas del Apóstol", gl: "Festas do Apóstolo", en: "Fiestas del Apóstol" },
  nav_parisdakar:  { es: "Pasaporte París-Dakar", gl: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  nav_datos:       { es: "Datos de interés", gl: "Datos de interese", en: "Practical info" },

  eyebrow_photo:      { es: "Minijuego", gl: "Minixogo", en: "Mini-game" },
  eyebrow_ver:        { es: "Ruta recomendada", gl: "Ruta recomendada", en: "Recommended route" },
  eyebrow_coche:      { es: "Escapadas", gl: "Escapadas", en: "Day trips" },
  eyebrow_comer:      { es: "Gastronomía", gl: "Gastronomía", en: "Food & drink" },
  eyebrow_perro:      { es: "Con mascota", gl: "Con mascota", en: "With a pet" },
  eyebrow_salir:      { es: "Vida nocturna", gl: "Vida nocturna", en: "Nightlife" },
  eyebrow_fiestas:    { es: "Programa oficial", gl: "Programa oficial", en: "Official program" },
  eyebrow_parisdakar: { es: "Tradición compostelana", gl: "Tradición compostelá", en: "Compostela tradition" },
  eyebrow_datos:      { es: "Información práctica", gl: "Información práctica", en: "Practical information" },

  hero_eyebrow:    { es: "Guía de viaje", gl: "Guía de viaxe", en: "Travel guide" },
  hero_date:       { es: "Camino, historia y buena mesa", gl: "Camiño, historia e boa mesa", en: "The Camino, history, and good food" },
  hero_sub:        { es: "Todo lo que necesitas para descubrir la ciudad mientras estás por aquí.", gl: "Todo o que precisas para descubrir a cidade mentres esteas por aquí.", en: "Everything you need for discovering the city while you're here." },

  home_photo_title: { es: "Foto Explorer", gl: "Foto Explorer", en: "Photo Explorer" },
  home_photo_desc:  { es: "Un juego de pistas por la ciudad. Encuentra el lugar y consigue tu sello.", gl: "Un xogo de pistas pola cidade. Atopa o lugar e consegue o teu selo.", en: "A clue-hunting game around the city. Find the spot and earn your stamp." },

  home_ver_title:  { es: "Qué ver en un día", gl: "Que ver nun día", en: "One-day guide" },
  home_ver_desc:   { es: "Nuestra ruta favorita para descubrir Santiago si solo tienes un día.", gl: "A nosa ruta favorita para descubrir Santiago se só tes un día.", en: "Our favorite route to discover Santiago if you only have one day." },

  home_coche_title: { es: "¡Tengo coche!", gl: "¡Teño coche!", en: "I have a car!" },
  home_coche_desc:  { es: "Escapadas por Galicia y A Coruña si te quieres alejar un poco de la ciudad.", gl: "Escapadas por Galicia e A Coruña se queres afastarte un pouco da cidade.", en: "Day trips around Galicia and A Coruña if you fancy venturing outside the city." },

  home_salir_title: { es: "¿Por dónde salir?", gl: "¿Por onde saír?", en: "Nightlife guide" },
  home_salir_desc:  { es: "Bares y planes nocturnos, filtrados por lo que te apetezca esta noche.", gl: "Bares e plans nocturnos, filtrados polo que che apeteza esta noite.", en: "Bars and night plans, filtered by whatever you're in the mood for tonight." },

  home_comer_title: { es: "Dónde comer", gl: "Onde comer", en: "Where to eat" },
  home_comer_desc:  { es: "Nuestros sitios de confianza para comer bien en Santiago.", gl: "Os nosos sitios de confianza para comer ben en Santiago.", en: "Our trusted spots to eat well in Santiago." },

  home_perro_title: { es: "¡Voy con un perro!", gl: "¡Vou cun can!", en: "Travelling with a dog!" },
  home_perro_desc:  { es: "Restaurantes, parques caninos y rutas de paseo para disfrutar de Santiago con tu perro.", gl: "Restaurantes, parques caninos e rutas de paseo para gozar de Santiago co teu can.", en: "Restaurants, dog parks, and walking routes to enjoy Santiago with your dog." },

  home_fiestas_title: { es: "Fiestas del Apóstol", gl: "Festas do Apóstolo", en: "Fiestas del Apóstol" },
  home_fiestas_desc:  { es: "El programa oficial de las fiestas patronales, del 22 al 31 de julio.", gl: "O programa oficial das festas patronais, do 22 ao 31 de xullo.", en: "The official program for the patron saint festivities, 22 to 31 July." },

  home_parisdakar_title: { es: "Pasaporte París-Dakar", gl: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  home_parisdakar_desc:  { es: "La mítica ruta de bares de los estudiantes compostelanos, convertida en pasaporte de sellos.", gl: "A mítica ruta de bares dos estudantes composteláns, convertida en pasaporte de selos.", en: "Santiago students' legendary bar route, turned into a stamp passport." },

  home_datos_title: { es: "Datos de interés", gl: "Datos de interese", en: "Practical info" },
  home_datos_desc:  { es: "Teléfonos, transporte y otra información práctica para el día a día en Santiago.", gl: "Teléfonos, transporte e outra información práctica para o día a día en Santiago.", en: "Phone numbers, transport and other practical info for getting around Santiago." },

  footer_text: { es: "Guía no oficial de Santiago de Compostela", gl: "Guía non oficial de Santiago de Compostela", en: "An unofficial guide to Santiago de Compostela" },

  page_photo_title: { es: "Foto Explorer", gl: "Foto Explorer", en: "Photo Explorer" },
  page_photo_sub: {
    es: "Cada tarjeta esconde un rincón de Santiago. Ábrela, sigue las pistas y márcalo como encontrado cuando estés delante del sitio.",
    gl: "Cada tarxeta agocha un recuncho de Santiago. Ábrea, segue as pistas e márcao como atopado cando esteas diante do lugar.",
    en: "Each card hides a corner of Santiago. Open it, follow the clues, and mark it found once you're standing right in front of it."
  },
  photo_progress: { es: "sellos conseguidos", gl: "selos conseguidos", en: "stamps collected" },
  photo_clue1: { es: "Pista · La foto", gl: "Pista · A foto", en: "Clue · The photo" },
  photo_reveal_clue3: { es: "Revelar ubicación", gl: "Revelar localización", en: "Reveal location" },
  photo_open_maps: { es: "Abrir en Google Maps", gl: "Abrir en Google Maps", en: "Open in Google Maps" },
  photo_found_btn: { es: "¡Lo he encontrado!", gl: "¡Xa o atopei!", en: "I found it!" },
  photo_reward_title: { es: "Sello conseguido", gl: "Selo conseguido", en: "Stamp earned" },
  photo_close: { es: "Cerrar", gl: "Pechar", en: "Close" },
  photo_locked_hint: { es: "Toca para empezar", gl: "Toca para comezar", en: "Tap to start" },
  fe_find_this: { es: "Encuentra este lugar", gl: "Atopa este lugar", en: "Find this place" },
  fe_reveal_clue: { es: "Revelar pista", gl: "Revelar pista", en: "Reveal clue" },
  photo_found_hint: { es: "Encontrado", gl: "Atopado", en: "Found" },
  photo_reset: { es: "Reiniciar progreso", gl: "Reiniciar progreso", en: "Reset progress" },

  fe_locating: { es: "Detectando tu ubicación…", gl: "Detectando a túa localización…", en: "Detecting your location…" },
  fe_your_location: { es: "tu ubicación", gl: "a túa localización", en: "your location" },
  fe_starting_from: { es: "Empezando desde:", gl: "Comezando desde:", en: "Starting from:" },
  fe_choose_start: {
    es: "No hemos podido detectar tu ubicación. Elige desde dónde empiezas:",
    gl: "Non puidemos detectar a túa localización. Escolle desde onde comezas:",
    en: "We couldn't detect your location. Choose where you're starting from:"
  },
  fe_no_image_yet: {
    es: "(Aún no se ha añadido la foto de esta pista)",
    gl: "(Aínda non se engadiu a foto desta pista)",
    en: "(No photo has been added for this clue yet)"
  },
  fe_enable_proximity: { es: "🧭 Activar guía de proximidad", gl: "🧭 Activar guía de proximidade", en: "🧭 Enable proximity guide" },
  fe_arrived: { es: "¡Estás cerca de", gl: "¡Estás preto de", en: "You're near" },

  fe_extra_title: { es: "Un extra: las marcas de las casas", gl: "Un extra: as marcas das casas", en: "A little extra: the house marks" },
  fe_extra_text: {
    es: "Si te ha gustado fijarte en los detalles, en el casco histórico también hay cientos de marcas talladas en las fachadas de las casas — señales que antiguamente indicaban a qué convento o institución pertenecía cada edificio. La cuenta de Instagram @marcas_de_compostela las cataloga, con un mapa de más de 250 ubicaciones para ir descubriéndolas mientras paseas.",
    gl: "Se che gustou fixarte nos detalles, no casco histórico tamén hai centos de marcas talladas nas fachadas das casas — sinais que antigamente indicaban a que convento ou institución pertencía cada edificio. A conta de Instagram @marcas_de_compostela recompílaas, cun mapa de máis de 250 localizacións para ir descubríndoas mentres paseas.",
    en: "If you enjoyed spotting little details, the old town also hides hundreds of marks carved into house façades — symbols that once showed which convent or institution owned each building. The Instagram account @marcas_de_compostela catalogs them, with a map of over 250 locations to keep discovering as you wander."
  },
  fe_extra_maps_btn: { es: "Ver el mapa", gl: "Ver o mapa", en: "View the map" },
  fe_extra_ig_btn: { es: "Instagram", gl: "Instagram", en: "Instagram" },

  page_ver_title: { es: "Qué ver en un día", gl: "Que ver nun día", en: "One-day guide" },
  page_ver_sub: {
    es: "Algunos de los puntos más interesantes a los que puedes acercarte caminando si solo tienes un día en Santiago.",
    gl: "Algúns dos puntos máis interesantes aos que podes achegarte camiñando se só tes un día en Santiago.",
    en: "Some of the most interesting spots you can walk to if you only have one day in Santiago."
  },

  page_coche_title: { es: "¡Tengo coche!", gl: "¡Teño coche!", en: "I have a car!" },
  page_coche_sub: {
    es: "Si te apetece alquilar un coche y salir de la ciudad, estas son nuestras recomendaciones por Galicia y A Coruña. Los anillos indican lo imprescindible que nos parece cada sitio si es tu primera vez en Galicia.",
    gl: "Se che apetece alugar un coche e saír da cidade, estas son as nosas recomendacións por Galicia e A Coruña. Os aneis indican o imprescindible que nos parece cada lugar se é a túa primeira vez en Galicia.",
    en: "If you fancy renting a car and heading out of the city, here are our recommendations around Galicia and A Coruña. The rings show how essential each place feels if it's your first time in Galicia."
  },
  coche_rating_label: { es: "Interés para tu primera vez en Galicia", gl: "Interese para a túa primeira vez en Galicia", en: "Interest for your first time in Galicia" },
  coche_distance: { es: "Distancia desde Santiago", gl: "Distancia desde Santiago", en: "Distance from Santiago" },

  page_salir_title: { es: "¿Por dónde salir?", gl: "¿Por onde saír?", en: "Nightlife guide" },
  page_salir_sub: {
    es: "Santiago no compite en tamaño con Madrid o Barcelona, pero sí en ambiente: al ser ciudad universitaria y de peregrinación, cada noche mezcla a estudiantes, vecinos, turistas y peregrinos en un público muy diverso. Filtra abajo por lo que te apetezca esta noche.",
    gl: "Santiago é pequena, pero iso non lle resta nin un chisco de ambiente: ao ser cidade universitaria e de peregrinación, cada noite mestura estudantes, veciños, turistas e peregrinos nun público moi diverso. Filtra embaixo polo que che apeteza esta noite.",
    en: "Santiago doesn't compete with Madrid or Barcelona in size, but it does in atmosphere: as a university and pilgrimage city, every night mixes students, locals, tourists, and pilgrims into a wonderfully varied crowd. Filter below by whatever you're in the mood for tonight."
  },
  salir_filter_music: { es: "Música", gl: "Música", en: "Music" },
  salir_filter_tapa: { es: "Tapa con la bebida", gl: "Tapa coa bebida", en: "Tapa with your drink" },
  salir_filter_gay: { es: "Mayoritariamente gay", gl: "Maioritariamente gay", en: "Predominantly gay" },
  salir_filter_irish: { es: "Irlandés", gl: "Irlandés", en: "Irish" },
  salir_filter_live: { es: "Música en directo", gl: "Música en directo", en: "Live music" },
  salir_filter_all: { es: "Todos", gl: "Todos", en: "All" },
  salir_music_celta: { es: "Celta / Folk", gl: "Celta / Folk", en: "Celtic / Folk" },
  salir_music_moderna: { es: "Moderna", gl: "Moderna", en: "Modern" },
  salir_music_tranquila: { es: "Tranquila", gl: "Tranquila", en: "Chill" },
  salir_no_results: { es: "No hay planes con esos filtros. Prueba a quitar alguno.", gl: "Non hai plans con eses filtros. Proba a quitar algún.", en: "No spots match those filters. Try removing one." },
  maps_link: { es: "Ver en Google Maps", gl: "Ver en Google Maps", en: "View on Google Maps" },
  comer_website: { es: "Web", gl: "Web", en: "Website" },
  comer_menu: { es: "Ver carta", gl: "Ver carta", en: "View menu" },
  que_ver_book: { es: "Reservar", gl: "Reservar", en: "Book" },
  que_ver_fototour_title: { es: "Empieza con un mini free tour", gl: "Comeza cun mini free tour", en: "Start with a mini free tour" },
  que_ver_fototour_text: {
    es: "Antes de seguir con esta guía, os proponemos el Foto Explorer: un juego de pistas por la zona vieja que funciona como un pequeño \"free tour\" de la ciudad, con historias y curiosidades en cada parada.",
    gl: "Antes de seguir con esta guía, propoñémosvos o Foto Explorer: un xogo de pistas pola zona vella que funciona como un pequeno \"free tour\" da cidade, con historias e curiosidades en cada parada.",
    en: "Before going through this guide, give the Photo Explorer a try: a clue-hunting game around the old town that works like a mini \"free tour\" of the city, with stories and fun facts at every stop."
  },
  que_ver_fototour_btn: { es: "Ir al Foto Explorer", gl: "Ir ao Foto Explorer", en: "Go to the Photo Explorer" },

  page_comer_title: { es: "Dónde comer", gl: "Onde comer", en: "Where to eat" },
  page_comer_sub: {
    es: "Nuestros sitios de confianza en Santiago, con ubicación en Google Maps, su nota real en Google (en anillos), el precio orientativo (en €) y el tipo de cocina. Prácticamente todos tienen alguna alternativa vegetariana o vegana en la carta (aunque sea una ensalada, tortilla o pimientos de Padrón) — los marcados como \"Vegano / vegetariano\" son los únicos exclusivamente vegetarianos o veganos, sin carne ni pescado en la carta.",
    gl: "Os nosos sitios de confianza en Santiago, con localización en Google Maps, a súa nota real en Google (en aneis), o prezo orientativo (en €) e o tipo de cociña. Practicamente todos teñen algunha alternativa vexetariana ou vegana na carta (aínda que sexa unha ensalada, tortilla ou pementos de Padrón) — os marcados como \"Vegano / vexetariano\" son os únicos exclusivamente vexetarianos ou veganos, sen carne nin peixe na carta.",
    en: "Our trusted spots in Santiago, with a Google Maps location, their real Google rating (shown as rings), a rough price level (in €), and the type of cuisine. Practically all of them have some vegetarian or vegan option on the menu (even if it's just a salad, tortilla, or Padrón peppers) — the ones marked \"Vegan / vegetarian\" are the only exclusively vegetarian or vegan spots, with no meat or fish on the menu at all."
  },
  comer_cat_marisco: { es: "Marisco", gl: "Marisco", en: "Seafood" },
  comer_cat_tradicional: { es: "Tradicional", gl: "Tradicional", en: "Traditional" },
  comer_cat_tapas: { es: "Tapas", gl: "Tapas", en: "Tapas" },
  comer_cat_cafeteria: { es: "Cafetería / postre", gl: "Cafetería / sobremesa", en: "Café / dessert" },
  comer_cat_altacocina: { es: "Alta cocina", gl: "Alta cociña", en: "Fine dining" },
  comer_cat_vegano: { es: "Vegano / vegetariano", gl: "Vegano / vexetariano", en: "Vegan / vegetarian" },
  comer_breakfast: { es: "Desayunos", gl: "Almorzos", en: "Breakfast" },
  comer_filter_all: { es: "Todos", gl: "Todos", en: "All" },
  comer_filter_breakfast: { es: "Desayunos", gl: "Almorzos", en: "Breakfast" },
  comer_filter_terrace: { es: "Terraza / jardín", gl: "Terraza / xardín", en: "Terrace / garden" },
  comer_filter_michelin: { es: "Guía Michelin", gl: "Guía Michelin", en: "Michelin Guide" },
  comer_filter_pet: { es: "Pet friendly", gl: "Pet friendly", en: "Pet friendly" },
  comer_no_results: { es: "No hay locales con esos filtros. Prueba a quitar alguno.", gl: "Non hai locais con eses filtros. Proba a quitar algún.", en: "No spots match those filters. Try removing one." },

  page_perro_title: { es: "¡Voy con un perro!", gl: "¡Vou cun can!", en: "Travelling with a dog!" },
  page_perro_sub: {
    es: "Restaurantes y cafeterías donde tu perro es bienvenido, parques caninos y rutas de paseo por Santiago. Información contrastada con el listado oficial de Turismo de Santiago y prensa local — si vas a un restaurante, siempre es buena idea avisar al reservar.",
    gl: "Restaurantes e cafetarías onde o teu can é benvido, parques caninos e rutas de paseo por Santiago. Información contrastada coa listaxe oficial de Turismo de Santiago e prensa local — se vas a un restaurante, sempre é boa idea avisar ao reservar.",
    en: "Restaurants and cafés where your dog is welcome, dog parks, and walking routes around Santiago. Information cross-checked against Turismo de Santiago's official list and local press — if you're heading to a restaurant, it's always a good idea to mention your pet when booking."
  },
  perro_filter_all: { es: "Todos", gl: "Todos", en: "All" },
  perro_filter_comer: { es: "Restaurantes y cafeterías", gl: "Restaurantes e cafetarías", en: "Restaurants & cafés" },
  perro_filter_parque: { es: "Parques caninos", gl: "Parques caninos", en: "Dog parks" },
  perro_filter_ruta: { es: "Rutas y actividades", gl: "Rutas e actividades", en: "Routes & activities" },
  perro_no_results: { es: "No hay sitios con esos filtros. Prueba a quitar alguno.", gl: "Non hai sitios con eses filtros. Proba a quitar algún.", en: "No spots match those filters. Try removing one." },

  page_fiestas_title: { es: "Fiestas del Apóstol 2026", gl: "Festas do Apóstolo 2026", en: "Fiestas del Apóstol 2026" },
  page_fiestas_sub: {
    es: "El programa oficial de las fiestas patronales de Santiago.",
    gl: "O programa oficial das festas patronais de Santiago.",
    en: "The official program for Santiago's patron saint festivities."
  },
  fiestas_closing_night: { es: "Cierre de fiestas", gl: "Peche das festas", en: "Closing night" },
  fiestas_all_past: {
    es: "Las Fiestas del Apóstol de este año ya han terminado. ¡Hasta el año que viene!",
    gl: "As Festas do Apóstolo deste ano xa remataron. ¡Ata o ano que vén!",
    en: "This year's Fiestas del Apóstol have already wrapped up. See you next year!"
  },

  page_parisdakar_title: { es: "Pasaporte París-Dakar", gl: "Pasaporte París-Dakar", en: "Paris-Dakar passport" },
  page_parisdakar_sub: {
    es: "La ruta de bares más tradicional de Santiago, con formato de credencial: un sello por cada parada superada.",
    gl: "A ruta de bares máis tradicional de Santiago, en formato de credencial: un selo por cada parada superada.",
    en: "Santiago's most traditional bar route, passport-style: one stamp for every stop you complete."
  },
  parisdakar_history: {
    es: "El «París-Dakar» nació a finales de los años 80 entre estudiantes universitarios de Santiago, como un rally con guiño de humor a la carrera automovilística. La ruta original recorría la Rúa do Franco y la Rúa da Raíña, empezando en la cafetería O París y terminando en el bar Dakar, tomando una cunca de vino Ribeiro en cada parada — con pruebas de por medio, como cantar una canción o contar un chiste. Hoy sigue siendo una tradición muy viva entre locales y visitantes, en versión bastante más tranquila.",
    gl: "O «París-Dakar» naceu a finais dos anos 80 entre estudantes universitarios de Santiago, coma un rally con guiño de humor á carreira automobilística. A ruta orixinal percorría a Rúa do Franco e a Rúa da Raíña, comezando na cafetería O París e rematando no bar Dakar, tomando unha cunca de viño Ribeiro en cada parada — con probas polo medio, coma cantar unha canción ou contar un chiste. Hoxe segue sendo unha tradición moi viva entre locais e visitantes, nunha versión bastante máis tranquila.",
    en: "The 'Paris-Dakar' was born in the late 1980s among Santiago university students, a playful nod to the car rally of the same name. The original route ran along Rúa do Franco and Rúa da Raíña, starting at the O París café and ending at the Dakar bar, with a cunca (traditional bowl) of Ribeiro wine at every stop — often with a little challenge along the way, like singing a song or telling a joke. It's still a lively tradition among locals and visitors today, in a much more relaxed version."
  },
  parisdakar_moderation: {
    es: "Ve a tu ritmo: no hace falta terminar la ruta ni beber en todas las paradas para pasarlo bien. Alterna con agua, y si alguien prefiere no beber alcohol, la mayoría de estos bares tienen alternativa sin alcohol — el objetivo es la tradición y el ambiente, no la cantidad.",
    gl: "Vai ao teu ritmo: non fai falta rematar a ruta nin beber en todas as paradas para pasalo ben. Alterna con auga, e se alguén prefire non beber alcohol, a maioría destes bares teñen alternativa sen alcohol — o obxectivo é a tradición e o ambiente, non a cantidade.",
    en: "Go at your own pace: you don't need to finish the whole route or drink at every stop to have a good time. Alternate with water, and if someone would rather skip the alcohol, most of these bars have a non-alcoholic option — the point is the tradition and the atmosphere, not the quantity."
  },
  parisdakar_progress: { es: "sellos conseguidos", gl: "selos conseguidos", en: "stamps collected" },
  parisdakar_mark_visited: { es: "Marcar como visitado", gl: "Marcar como visitado", en: "Mark as visited" },
  parisdakar_visited: { es: "Visitado", gl: "Visitado", en: "Visited" },
  parisdakar_start: { es: "Salida", gl: "Saída", en: "Start" },
  parisdakar_finish: { es: "Meta", gl: "Meta", en: "Finish" },
  parisdakar_optional_title: { es: "Paradas opcionales", gl: "Paradas opcionais", en: "Optional stops" },
  parisdakar_optional_sub: {
    es: "Si os apetece alargar la ruta o hacer una parada más tranquila para comer algo, estos sitios no forman parte del recorrido clásico de la Rúa do Franco/Raíña pero merecen la pena igualmente. No cuentan para el pasaporte de sellos.",
    gl: "Se vos apetece alongar a ruta ou facer unha parada máis tranquila para comer algo, estes lugares non forman parte do percorrido clásico da Rúa do Franco/Raíña pero merecen a pena igualmente. Non contan para o pasaporte de selos.",
    en: "If you fancy extending the route or taking a calmer sit-down stop for food, these places aren't part of the classic Rúa do Franco/Raíña route but are still worth it. They don't count toward the stamp passport."
  },
  parisdakar_complete_title: { es: "¡Ruta completada!", gl: "¡Ruta completada!", en: "Route complete!" },
  parisdakar_complete_text: {
    es: "Habéis llegado al Dakar. Enhorabuena, ya formáis parte de la tradición compostelana.",
    gl: "Chegastes ao Dakar. Parabéns, xa formades parte da tradición compostelá.",
    en: "You've made it to the Dakar. Congratulations — you're now part of Compostela tradition."
  },

  page_datos_title: { es: "Datos de interés", gl: "Datos de interese", en: "Practical info" },
  page_datos_sub: {
    es: "Algunos teléfonos y datos prácticos que pueden venir bien durante vuestra estancia en Santiago.",
    gl: "Algúns teléfonos e datos prácticos que poden vir ben durante a vosa estadía en Santiago.",
    en: "A few phone numbers and practical details that might come in handy during your stay in Santiago."
  },
};

function getLang() {
  const stored = localStorage.getItem("guia_lang");
  if (stored) return stored;
  return detectDeviceLang();
}

/* Si el visitante no ha elegido idioma nunca (primera visita), usamos el
   idioma del dispositivo: galego si está en galego, español si está en
   español, inglés en cualquier otro caso. */
function detectDeviceLang() {
  const raw = (navigator.language || (navigator.languages && navigator.languages[0]) || "en").toLowerCase();
  if (raw.startsWith("gl")) return "gl";
  if (raw.startsWith("es")) return "es";
  return "en";
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
