/* ==========================================================================
   Iconos SVG reutilizables para categorías
   Cada función devuelve un <svg> como string, listo para insertar en HTML.
   Úsalos así en JS: ICONS.triskele()
   ========================================================================== */

const ICONS = {
  // Celta / Folk — trísquel estilizado
  triskele: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M12 12c0-3-2.3-5.3-5.3-5.3" transform="rotate(0 12 12)"/>
      <path d="M12 12c0-3-2.3-5.3-5.3-5.3" transform="rotate(120 12 12)"/>
      <path d="M12 12c0-3-2.3-5.3-5.3-5.3" transform="rotate(240 12 12)"/>
      <circle cx="6.7" cy="6.7" r="1.1" fill="currentColor" stroke="none" transform="rotate(0 12 12)"/>
      <circle cx="6.7" cy="6.7" r="1.1" fill="currentColor" stroke="none" transform="rotate(120 12 12)"/>
      <circle cx="6.7" cy="6.7" r="1.1" fill="currentColor" stroke="none" transform="rotate(240 12 12)"/>
    </svg>`,

  // Moderna — nota musical
  musicNote: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l10-2v13"/>
      <circle cx="7" cy="18" r="2.2"/>
      <circle cx="17" cy="16" r="2.2"/>
    </svg>`,

  // Tranquila — luna
  moon: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z"/>
    </svg>`,

  // Tapa con la bebida — tenedor y cuchillo
  fork: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 3v7a2 2 0 004 0V3"/>
      <path d="M8 10v11"/>
      <path d="M18 3c-1.6 0-3 1.6-3 4.5S16.4 12 18 12v9"/>
    </svg>`,

  // Gay friendly — arcoíris
  rainbow: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round">
      <path d="M3 18a9 9 0 0118 0" stroke="#c9524a" stroke-width="1.8"/>
      <path d="M5.3 18a6.7 6.7 0 0113.4 0" stroke="#dba23c" stroke-width="1.8"/>
      <path d="M7.6 18a4.4 4.4 0 018.8 0" stroke="#7f9d5a" stroke-width="1.8"/>
      <path d="M9.9 18a2.1 2.1 0 014.2 0" stroke="#4d7a9e" stroke-width="1.8"/>
    </svg>`,

  // Marisco — pez
  fish: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2.5 12c4-4.6 12-4.6 16 0-4 4.6-12 4.6-16 0z"/>
      <circle cx="15.2" cy="11" r=".6" fill="currentColor" stroke="none"/>
      <path d="M18.5 12l3-2.6v5.2l-3-2.6z"/>
    </svg>`,

  // Tradicional / cocido — olla
  pot: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 11h15l-1.1 7.2a2 2 0 01-2 1.8H7.6a2 2 0 01-2-1.8L4.5 11z"/>
      <path d="M2.5 11h19M9 11V8a3 3 0 016 0v3"/>
    </svg>`,

  // Tapas — plato
  plate: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <circle cx="12" cy="12" r="8.2"/>
      <circle cx="12" cy="12" r="3.2"/>
    </svg>`,

  // Cafetería / postre — taza
  cup: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z"/>
      <path d="M17 9.5h1.3a2.3 2.3 0 010 4.6H17"/>
      <path d="M6 5.5c0-1 .8-1 .8-2M10 5.5c0-1 .8-1 .8-2"/>
    </svg>`,

  // Fiestas del Apóstol — fuegos artificiales / estrella festiva
  fireworks: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <path d="M12 3v4M6.5 6.5l2 2M17.5 6.5l-2 2M4 14l3.2-.6M20 14l-3.2-.6"/>
      <path d="M12 10v4M9.5 12.3l1.5 1.7 1.5-1.7"/>
      <path d="M6 20c1.7-1.3 3.7-1.3 6 0s4.3 1.3 6 0"/>
    </svg>`,

  // Atardecer no Gaiás — puesta de sol
  sunset: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <path d="M12 3v5M6.5 8l2 2M17.5 8l-2 2M2.5 15h19"/>
      <path d="M6 15a6 6 0 0112 0"/>
      <path d="M4 18.5h16M6 21h12"/>
    </svg>`,

  // Dónde comer — cubiertos (nav)
  cutlery: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 3v7a2 2 0 004 0V3M8 10v11"/>
      <path d="M18 3c-1.6 0-3 1.6-3 4.5S16.4 12 18 12v9"/>
    </svg>`,

  // Ubicación / Google Maps
  // Datos de interés — taxi, autobús, teléfono de emergencias
  taxi: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 11l1.2-4.2A2 2 0 018.1 5.3h7.8a2 2 0 011.9 1.5L19 11"/>
      <rect x="3" y="11" width="18" height="6.5" rx="1.5"/>
      <circle cx="7.5" cy="17.5" r="1.3"/>
      <circle cx="16.5" cy="17.5" r="1.3"/>
      <path d="M9 8h2M13 8h2"/>
    </svg>`,

  bus: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="12.5" rx="2"/>
      <path d="M4 11h16M8 4v12.5M16 4v12.5"/>
      <circle cx="7.5" cy="19" r="1.3"/>
      <circle cx="16.5" cy="19" r="1.3"/>
    </svg>`,

  phoneEmergency: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 4h3.2l1.3 4.3-2 1.6a11 11 0 006.6 6.6l1.6-2 4.3 1.3V19a2 2 0 01-2.2 2A16 16 0 015 6.2 2 2 0 015 4z"/>
    </svg>`,

  // Irlandés — trébol
  shamrock: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 8c0-2.2-1.8-4-4-4S4 5.8 4 8s1.8 4 4 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4z"/>
      <path d="M12 12v9"/>
    </svg>`,

  // Música en directo — micrófono
  mic: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3"/>
      <path d="M5 10a7 7 0 0014 0"/>
      <path d="M12 17v4M9 21h6"/>
    </svg>`,

  // Alta cocina — estrella
  star: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
      <path d="M12 3l2.5 5.5 6 .7-4.4 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.4-4.1 6-.7z"/>
    </svg>`,

  // Vegano / vegetariano — hoja
  leaf: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/>
      <path d="M5 19c2-4 5-7 9-9"/>
    </svg>`,

  // Terraza / jardín — sombrilla
  terrace: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a8 8 0 018 8H4a8 8 0 018-8z"/>
      <path d="M12 3v2M12 11v10M9.5 21h5"/>
    </svg>`,

  // Reconocimiento Michelin — roseta
  michelin: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5.5"/>
      <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6"/>
    </svg>`,

  // Instagram
  instagram: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/>
    </svg>`,

  // Anillo — para la calificación de interés en "Tengo coche"
  ring: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8">
      <circle cx="12" cy="12" r="7.5"/>
    </svg>`,

  // Pasaporte del París-Dakar — cunca de viño
  wineCup: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 4h14l-1.3 8.5a5.7 5.7 0 01-11.4 0L5 4z"/>
      <path d="M12 17v4M8.5 21h7"/>
    </svg>`,

  pin: () => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"/>
      <circle cx="12" cy="10" r="2.4"/>
    </svg>`,
};
