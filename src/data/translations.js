/*
  translations.js — All guest-facing UI strings for Somm.Tips
  
  How it works:
  - Every translatable string lives here in both languages.
  - Components import this file and use the current language key
    (from LanguageContext) to pull the correct string.
  - Data-level translations (wine descriptions, pairings, etc.)
    live in separate .es.json files — this file covers UI only.
  
  Usage in a component:
    import { translations } from "@/data/translations";
    const { language } = useLanguage();
    <h1>{translations[language].wineRecs.title}</h1>
*/

export const translations = {
  en: {
    /* ──────────────────────────────────────
       Header
       ────────────────────────────────────── */
    header: {
      explore: "Explore",
      sommSiteDesc: "Wine education & courses",
      beverageFyiDesc: "Encyclopedic reference",
      backbarFyiDesc: "Spirits & cocktails",
      home: "Home",
      about: "About",
      contentPolicy: "Content Policy",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      contact: "Contact",
    },

    /* ──────────────────────────────────────
       Bottom Nav (mobile)
       ────────────────────────────────────── */
    bottomNav: {
      home: "Home",
      wine: "Wine",
      cocktails: "Cocktails",
      learn: "Learn",
    },

    /* ──────────────────────────────────────
       Desktop Footer
       ────────────────────────────────────── */
    footer: {
      about: "About",
      contentPolicy: "Content Policy",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      contact: "Contact",
    },

    /* ──────────────────────────────────────
       Homepage
       ────────────────────────────────────── */
    home: {
      tagline: "What are you in the mood for today?",
      primaryTitle: "Wine Recommendations",
      primaryDesc: "Find the perfect wine for you right here.",
      classicPairings: "Classic Pairings",
      classicPairingsDesc: "Timeless food & wine combinations",
      orderingWine: "Ordering Wine",
      orderingWineDesc: "Asking the somm for assistance",
      vintages: "Vintages",
      vintagesDesc: "Notable years by region",
      reference: "Reference",
      referenceDesc: "Grapes, regions and key terms",
      cocktails: "Cocktails",
      cocktailsDesc: "Classic & fun libations",
    },

    /* ──────────────────────────────────────
       Wine Recommendations Page
       ────────────────────────────────────── */
    wineRecs: {
      title: "Wine Recommendations",
      subtitle: "Use the filters below to find your next great bottle.",
      white: "White",
      red: "Red",
      lighterBody: "Lighter Body",
      fullerBody: "Fuller Body",
      lessDry: "Less Dry",
      moreDry: "More Dry",
      newWorld: "New World",
      oldWorld: "Old World",
      reset: "Reset",
      noResults: "No wines match your current filters. Try adjusting your selections.",
      ecosystemText: "Learn the fundamentals behind these styles on",
    },

    /* ──────────────────────────────────────
       Classic Pairings Page
       ────────────────────────────────────── */
    pairings: {
      title: "Classic Pairings",
      subtitle: "Timeless food and wine combinations from around the world.",
      all: "All",
      americas: "Americas",
      europe: "Europe",
      asia: "Asia",
      africa: "Africa",
      ecosystemText: "Visit",
      ecosystemTextEnd: "for more knowledge on topics like this.",
    },

    /* ──────────────────────────────────────
       Cocktails Page
       ────────────────────────────────────── */
    cocktails: {
      title: "Cocktails",
      subtitle: "Classic and fun libations, organized by base spirit.",
      all: "All",
      vodka: "Vodka",
      gin: "Gin",
      rum: "Rum",
      tequila: "Tequila",
      whiskey: "Whiskey",
      more: "More",
      ingredients: "Ingredients",
      preparation: "Preparation",
      ecosystemText: "Explore more at",
    },

    /* ──────────────────────────────────────
       Ordering Wine Page
       ────────────────────────────────────── */
    ordering: {
      title: "Ordering Wine",
      subtitle: "Not sure what to order? Find your style and get pointed in the right direction.",
      tryThese: "Try these",
      tip: "Give the somm or salesperson who is guiding you one of the styles from above, and they will lead you to a great selection!",
      ecosystemText: "Learn the fundamentals behind these styles on",
    },

    /* ──────────────────────────────────────
       Vintages Page
       ────────────────────────────────────── */
    vintages: {
      title: "Vintages",
      subtitle: "Notable vintages from the world's most celebrated wine regions.",
      ecosystemText: "Visit",
      ecosystemTextEnd: "for more knowledge on topics like this.",
    },

    /* ──────────────────────────────────────
       Education Page
       ────────────────────────────────────── */
    education: {
      title: "Wine Education",
      subtitle: "Level up your knowledge of grapes, regions, and tasting.",
      all: "All",
      whiteGrapes: "White Grapes",
      redGrapes: "Red Grapes",
      wineRegions: "Wine Regions",
      tastingTerms: "Tasting Terms",
      ecosystemText: "Learn more in-depth on",
    },

    /* ──────────────────────────────────────
       About Page
       ────────────────────────────────────── */
    about: {
      title: "About Somm.Tips",
      subtitle: "Demystifying wine, one recommendation at a time.",
      aboutAppTitle: "About the App",
      aboutAppP1: "Somm Tips transforms the often intimidating world of wine into an accessible, enjoyable experience. Whether you're ordering at a restaurant, shopping for a dinner party, or simply curious about wine, our app provides clear, practical guidance without the pretension.",
      aboutAppP2: "Using simple filters and straightforward language, we help you discover wines that match your taste preferences, learn classic food pairings, and understand what makes certain vintages special — all in the palm of your hand.",
      philosophyTitle: "Our Philosophy",
      philosophyP1: "Wine should be a pleasure, not a puzzle. We believe everyone deserves to feel confident when choosing wine, whether you're a complete beginner or an enthusiastic amateur. Our approach strips away unnecessary jargon while preserving the knowledge that actually matters for your enjoyment.",
      ecosystemTitle: "The Ecosystem",
      ecosystemP1: "Somm.Tips is part of a larger learning ecosystem dedicated to beverage and hospitality education. Whether you're just getting started or looking to deepen your expertise, our partner sites offer comprehensive resources to continue your journey.",
      sommSiteDesc: "Wine education, articles, and courses",
      beverageFyiDesc: "Deep dives into the world of drinks",
      backbarFyiDesc: "Spirits and cocktails",
      createdByTitle: "Created By",
      createdByP1: "Derek Engles brings years of wine expertise and a passion for making wine approachable to everyone. His experience spans from restaurant service to wine education, always with a focus on practical, real-world application.",
      createdByLink: "Learn more at derekengles.com →",
      meta: "Somm.Tips is a product of",
    },
  },

  /* ================================================================
     SPANISH
     ================================================================ */
  es: {
    /* ──────────────────────────────────────
       Header
       ────────────────────────────────────── */
    header: {
      explore: "Explorar",
      sommSiteDesc: "Educación y cursos de vino",
      beverageFyiDesc: "Referencia enciclopédica",
      backbarFyiDesc: "Destilados y cócteles",
      home: "Inicio",
      about: "Acerca de",
      contentPolicy: "Política de Contenido",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
      contact: "Contacto",
    },

    /* ──────────────────────────────────────
       Bottom Nav (mobile)
       ────────────────────────────────────── */
    bottomNav: {
      home: "Inicio",
      wine: "Vino",
      cocktails: "Cócteles",
      learn: "Aprender",
    },

    /* ──────────────────────────────────────
       Desktop Footer
       ────────────────────────────────────── */
    footer: {
      about: "Acerca de",
      contentPolicy: "Política de Contenido",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
      contact: "Contacto",
    },

    /* ──────────────────────────────────────
       Homepage
       ────────────────────────────────────── */
    home: {
      tagline: "¿Qué te apetece hoy?",
      primaryTitle: "Recomendaciones de Vino",
      primaryDesc: "Encuentra el vino perfecto para ti aquí mismo.",
      classicPairings: "Maridajes Clásicos",
      classicPairingsDesc: "Combinaciones atemporales de comida y vino",
      orderingWine: "Pedir Vino",
      orderingWineDesc: "Pide asistencia al sommelier",
      vintages: "Añadas",
      vintagesDesc: "Años notables por región",
      reference: "Referencia",
      referenceDesc: "Uvas, regiones y términos clave",
      cocktails: "Cócteles",
      cocktailsDesc: "Libaciones clásicas y divertidas",
    },

    /* ──────────────────────────────────────
       Wine Recommendations Page
       ────────────────────────────────────── */
    wineRecs: {
      title: "Recomendaciones de Vino",
      subtitle: "Usa los filtros a continuación para encontrar tu próxima gran botella.",
      white: "Blanco",
      red: "Tinto",
      lighterBody: "Cuerpo Ligero",
      fullerBody: "Cuerpo Amplio",
      lessDry: "Menos Seco",
      moreDry: "Más Seco",
      newWorld: "Nuevo Mundo",
      oldWorld: "Viejo Mundo",
      reset: "Restablecer",
      noResults: "Ningún vino coincide con tus filtros actuales. Intenta ajustar tus selecciones.",
      ecosystemText: "Aprende los fundamentos detrás de estos estilos en",
    },

    /* ──────────────────────────────────────
       Classic Pairings Page
       ────────────────────────────────────── */
    pairings: {
      title: "Maridajes Clásicos",
      subtitle: "Combinaciones atemporales de comida y vino de todo el mundo.",
      all: "Todos",
      americas: "Américas",
      europe: "Europa",
      asia: "Asia",
      africa: "África",
      ecosystemText: "Visita",
      ecosystemTextEnd: "para más conocimiento sobre temas como este.",
    },

    /* ──────────────────────────────────────
       Cocktails Page
       ────────────────────────────────────── */
    cocktails: {
      title: "Cócteles",
      subtitle: "Libaciones clásicas y divertidas, organizadas por destilado base.",
      all: "Todos",
      vodka: "Vodka",
      gin: "Ginebra",
      rum: "Ron",
      tequila: "Tequila",
      whiskey: "Whiskey",
      more: "Más",
      ingredients: "Ingredientes",
      preparation: "Preparación",
      ecosystemText: "Explora más en",
    },

    /* ──────────────────────────────────────
       Ordering Wine Page
       ────────────────────────────────────── */
    ordering: {
      title: "Pedir Vino",
      subtitle: "¿No sabes qué pedir? Encuentra tu estilo y recibe orientación.",
      tryThese: "Prueba estos",
      tip: "¡Dale al sommelier o vendedor que te guía uno de los estilos de arriba, y te llevará a una gran selección!",
      ecosystemText: "Aprende los fundamentos detrás de estos estilos en",
    },

    /* ──────────────────────────────────────
       Vintages Page
       ────────────────────────────────────── */
    vintages: {
      title: "Añadas",
      subtitle: "Añadas notables de las regiones vinícolas más célebres del mundo.",
      ecosystemText: "Visita",
      ecosystemTextEnd: "para más conocimiento sobre temas como este.",
    },

    /* ──────────────────────────────────────
       Education Page
       ────────────────────────────────────── */
    education: {
      title: "Educación del Vino",
      subtitle: "Eleva tu conocimiento sobre uvas, regiones y degustación.",
      all: "Todos",
      whiteGrapes: "Uvas Blancas",
      redGrapes: "Uvas Tintas",
      wineRegions: "Regiones Vinícolas",
      tastingTerms: "Términos de Cata",
      ecosystemText: "Aprende más a fondo en",
    },

    /* ──────────────────────────────────────
       About Page
       ────────────────────────────────────── */
    about: {
      title: "Acerca de Somm.Tips",
      subtitle: "Desmitificando el vino, una recomendación a la vez.",
      aboutAppTitle: "Acerca de la App",
      aboutAppP1: "Somm Tips transforma el mundo a menudo intimidante del vino en una experiencia accesible y agradable. Ya sea que estés pidiendo en un restaurante, comprando para una cena, o simplemente tengas curiosidad sobre el vino, nuestra app proporciona orientación clara y práctica sin pretensión.",
      aboutAppP2: "Usando filtros simples y un lenguaje directo, te ayudamos a descubrir vinos que coincidan con tus preferencias de sabor, aprender maridajes clásicos y entender qué hace especiales a ciertas añadas — todo en la palma de tu mano.",
      philosophyTitle: "Nuestra Filosofía",
      philosophyP1: "El vino debería ser un placer, no un rompecabezas. Creemos que todos merecen sentirse seguros al elegir vino, ya seas un principiante o un aficionado entusiasta. Nuestro enfoque elimina la jerga innecesaria mientras preserva el conocimiento que realmente importa para tu disfrute.",
      ecosystemTitle: "El Ecosistema",
      ecosystemP1: "Somm.Tips es parte de un ecosistema de aprendizaje más amplio dedicado a la educación en bebidas y hospitalidad. Ya sea que estés comenzando o buscando profundizar tu experiencia, nuestros sitios asociados ofrecen recursos completos para continuar tu camino.",
      sommSiteDesc: "Educación, artículos y cursos de vino",
      beverageFyiDesc: "Inmersiones profundas en el mundo de las bebidas",
      backbarFyiDesc: "Destilados y cócteles",
      createdByTitle: "Creado Por",
      createdByP1: "Derek Engles aporta años de experiencia en vino y una pasión por hacer el vino accesible para todos. Su experiencia abarca desde el servicio en restaurantes hasta la educación del vino, siempre con un enfoque en la aplicación práctica y real.",
      createdByLink: "Conoce más en derekengles.com →",
      meta: "Somm.Tips es un producto de",
    },
  },
};