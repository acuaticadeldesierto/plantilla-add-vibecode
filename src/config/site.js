/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * =================================
 * Aqui vive TODO el contenido del sitio (textos y datos).
 * Los componentes lo leen desde este objeto.
 */

export const siteConfig = {
  // ─────────────────────────────────────────────
  // INFORMACION DEL NEGOCIO
  // ─────────────────────────────────────────────
  name: "ADD",
  tagline: "Escuela de Natación premium en Chihuahua.",
  description:
    "Dirigida por NTP, entrenador olímpico Tokyo 2020. Programas para niños, jóvenes, adultos, masters y triatlón. Sede en El Reliz, Chihuahua.",

  // ─────────────────────────────────────────────
  // SECCION HERO (primera pantalla)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Chihuahua · El Reliz",
    title: "Nadar bien",
    titleHighlight: "no es un deporte. Es una disciplina.",
    subtitle:
      "Una escuela de natación dirigida por un entrenador olímpico, con un sistema de progresión claro para niños, jóvenes y adultos. Desde la primera brazada hasta el podio nacional.",
    ctaPrimary: "Agenda clase de prueba",
    ctaSecondary: "Conoce al entrenador",
    ctaPrimaryUrl: "#contacto",
    ctaSecondaryUrl: "#logros",
    backgroundImage: "/hero-swimmer.jpg",
    stats: [
      { value: "Tokyo", label: "2020 · entrenador olímpico" },
      { value: "15", label: "campeones nacionales formados" },
      { value: "7", label: "niveles de progresión por gorra" },
      { value: "3+", label: "edades: niños, jóvenes, adultos" },
    ],
  },

  // ─────────────────────────────────────────────
  // PROGRAMAS
  // ─────────────────────────────────────────────
  programs: {
    heading: "Programas para cada tipo de nadador",
    subheading:
      "Desde las primeras brazadas hasta entrenamiento de alto rendimiento. Tú eliges el camino.",
    items: [
      {
        title: "Familias",
        description:
          "Clases para niños y papás: técnica, seguridad en el agua y gusto por nadar.",
        highlights: ["Grupos por nivel, no por edad", "Coach ratio 1:6", "Evaluación trimestral por gorra"],
      },
      {
        title: "Alto rendimiento",
        description:
          "Entrenamiento para atletas que buscan resultados: disciplina, seguimiento y metas claras.",
        highlights: ["Análisis de video", "Acompañamiento a competencias", "Plan dual: escuela + alberca"],
      },
      {
        title: "Masters y triatlón",
        description:
          "Sesiones para mejorar resistencia y técnica, ideal si entrenas para competir o para sentirte más fuerte.",
        highlights: ["Horarios early-bird y noche", "Grupos pequeños y discretos", "Plan de mejora postural"],
      },
      {
        title: "Escuelas",
        description:
          "Programas para que alumnos aprendan natación como parte de su formación y bienestar.",
        highlights: ["Grupos escolares", "Seguridad acuática", "Logística simple"],
      },
      {
        title: "Empresas",
        description:
          "Natación como beneficio: bienestar, salud y una actividad que sí se disfruta.",
        highlights: ["Bienestar", "Horarios flexibles", "Planes a la medida"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // BENEFICIOS / FEATURES (lo que ofrecen)
  // ─────────────────────────────────────────────
  features: {
    heading: "Lo que hace diferente a ADD",
    subheading:
      "Estándares olímpicos, accesibles para cualquier persona que quiera empezar.",
    items: [
      {
        icon: "lightning",
        title: "Coach olímpico",
        description:
          "Entrenamiento dirigido por NTP, parte de la delegación mexicana en Tokyo 2020. Su sistema es lo que vas a aprender.",
      },
      {
        icon: "mobile",
        title: "Sistema de 7 niveles",
        description:
          "Cada gorra marca dónde estás y qué sigue. Transparencia para padres, disciplina para atletas, motivación para todos.",
      },
      {
        icon: "settings",
        title: "Coach ratio 1:6",
        description:
          "Grupos pequeños con seguimiento individual y evaluación trimestral. Avanzas al ritmo correcto, no al apresurado.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LOGROS Y RESULTADOS (estilo Differentiator)
  // ─────────────────────────────────────────────
  achievements: {
    heading: "No aprendes con cualquiera.",
    subheading: "Aprendes con NTP.",
    intro:
      "Entrenador olímpico mexicano, parte de la delegación nacional en Tokyo 2020. Formador de 15 campeones nacionales en categorías infantil, juvenil y abierta. Su sistema es lo que vas a aprender.",
    coachImage: "/coach-portrait.jpg",
    coachName: "NTP",
    coachRole: "Head Coach · Fundador",
    items: [
      {
        number: "2020",
        title: "Tokyo · juegos olímpicos",
        description: "Delegación mexicana de natación",
        accent: false,
      },
      {
        number: "15",
        title: "Campeones nacionales formados",
        description: "Categorías infantil, juvenil y abierta",
        accent: true,
      },
      {
        number: "20+",
        title: "Años de carrera competitiva",
        description: "Como atleta y como coach",
        accent: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // GALERIA
  // ─────────────────────────────────────────────
  gallery: {
    heading: "Las instalaciones.",
    subheading: "Diseñadas para entrenamiento serio, con la comodidad que tu familia espera.",
    items: [
      {
        src: "/facility.jpg",
        alt: "Vista aérea de las instalaciones ADD al atardecer en Chihuahua",
      },
      {
        src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80",
        alt: "Nadador en alberca durante entrenamiento",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
        alt: "Alberca olímpica con carriles",
      },
      {
        src: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1600&q=80",
        alt: "Atleta nadador entrenando",
      },
      {
        src: "https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=1600&q=80",
        alt: "Clavado en alberca",
      },
      {
        src: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?auto=format&fit=crop&w=1600&q=80",
        alt: "Nadadores en plataformas de salida",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SISTEMA DE GORRAS (7 niveles de progresión)
  // ─────────────────────────────────────────────
  caps: {
    enabled: false, // ponlo en true cuando quieras mostrar esta sección
    heading: "Las gorras son tu mapa.",
    subheading: "Cada nivel se gana, no se compra.",
    intro:
      "Una gorra de color marca exactamente dónde estás y qué sigue. Es transparencia para los padres, disciplina para los atletas, y motivación para todos.",
    items: [
      {
        id: "blanca",
        name: "Blanca",
        level: "Iniciación",
        color: "hsl(0 0% 96%)",
        ring: "hsl(220 13% 80%)",
        description: "Primer contacto con el agua. Flotación, respiración y confianza.",
        requirements: "Sin requisitos previos.",
      },
      {
        id: "amarilla",
        name: "Amarilla",
        level: "Adaptación",
        color: "hsl(48 96% 60%)",
        ring: "hsl(45 90% 45%)",
        description: "Desplazamientos básicos y técnica de patada.",
        requirements: "Flotación autónoma 10 segundos.",
      },
      {
        id: "verde",
        name: "Verde",
        level: "Técnica I",
        color: "hsl(142 60% 42%)",
        ring: "hsl(142 65% 30%)",
        description: "Crol y dorso con coordinación brazo-respiración.",
        requirements: "25m crol con apoyo.",
      },
      {
        id: "azul",
        name: "Azul",
        level: "Técnica II",
        color: "hsl(220 70% 35%)",
        ring: "hsl(220 75% 22%)",
        description: "Pecho y mariposa. Resistencia aeróbica básica.",
        requirements: "100m continuos.",
      },
      {
        id: "roja",
        name: "Roja",
        level: "Perfeccionamiento",
        color: "hsl(0 72% 48%)",
        ring: "hsl(0 75% 35%)",
        description: "Cuatro estilos. Salidas, vueltas y entrada al pre-equipo.",
        requirements: "200m combinado.",
      },
      {
        id: "negra",
        name: "Negra",
        level: "Pre-competitivo",
        color: "hsl(222 47% 11%)",
        ring: "hsl(222 47% 5%)",
        description: "Volumen, ritmo y estrategia de competencia.",
        requirements: "Tiempos mínimos por prueba.",
      },
      {
        id: "dragon",
        name: "Dragón de Fuego",
        level: "Élite",
        color: "hsl(21 94% 53%)",
        ring: "hsl(43 80% 47%)",
        description: "Atletas de alto rendimiento. Camino a campeonatos nacionales.",
        requirements: "Por invitación del head coach.",
        isElite: true,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // HORARIOS
  // ─────────────────────────────────────────────
  schedule: {
    heading: "Horarios.",
    subheading: "Encuentra el mejor para tu familia o tu entrenamiento.",
    groups: [
      {
        name: "Familias",
        rows: [
          { days: "Lunes a viernes", time: "6:00 am – 10:00 am", note: "" },
          { days: "Lunes a viernes", time: "6:00 pm – 8:00 pm", note: "" },
        ],
      },
      {
        name: "Equipo y pre equipo",
        rows: [
          { days: "Lunes a viernes", time: "3:00 pm – 6:00 pm", note: "" },
          { days: "Sábado", time: "9:00 am – 1:00 pm", note: "" },
        ],
      },
      {
        name: "Escuelas y empresas",
        rows: [
          { days: "Lunes a viernes", time: "10:00 am – 3:00 pm", note: "" },
          { days: "Lunes a viernes", time: "6:00 pm – 8:00 pm", note: "" },
        ],
      },
      {
        name: "Masters y triatlón",
        rows: [
          { days: "Lunes a viernes", time: "6:00 am – 3:00 pm", note: "" },
          { days: "Sábado", time: "9:00 am – 1:00 pm", note: "" },
        ],
      },
    ],
    note:
      "Horarios sujetos a cambios por temporada. Escríbenos y te confirmamos el horario ideal.",
  },

  // ─────────────────────────────────────────────
  // PRECIOS (planes)
  // ─────────────────────────────────────────────
  pricing: {
    heading: "Transparente.",
    subheading: "Sin letras chiquitas.",
    plans: [
      {
        name: "Clases para familias",
        price: "$1,499",
        period: " / mes",
        description: "Para niños y papás por nivel (IVA 16% incluido)",
        features: ["Grupos por nivel", "Enfoque en técnica y seguridad", "Ambiente cercano"],
        cta: "Pagar con PayPal",
        paypalAmount: 1499,
        highlighted: false,
      },
      {
        name: "Entrenamiento (Masters / Triatlón)",
        price: "$1,999",
        period: " / mes",
        description: "Para mejorar condición y técnica",
        features: ["Sesiones estructuradas", "Comunidad", "Progreso constante"],
        cta: "Pagar con PayPal",
        paypalAmount: 1999,
        highlighted: true,
      },
      {
        name: "Renta de carriles",
        price: "$20,000",
        period: " / carril",
        description: "Para equipos, escuelas o grupos",
        features: ["Horarios a convenir", "Espacio para entrenar", "Logística simple"],
        cta: "Cotizar",
        highlighted: false,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // EVENTOS
  // ─────────────────────────────────────────────
  events: {
    heading: "Eventos.",
    subheading: "Actividades y competencias próximas. Si quieres participar, te guiamos paso a paso.",
    items: [
      {
        date: "Próximamente",
        title: "Evaluación de niveles",
        description:
          "Una sesión para ubicar tu nivel y recomendarte el programa ideal.",
        cta: "Preguntar fechas",
        href: "#contacto",
      },
      {
        date: "Próximamente",
        title: "Clínica de técnica",
        description:
          "Tips prácticos para mejorar brazada, patada y respiración.",
        cta: "Quiero apartar lugar",
        href: "#contacto",
      },
      {
        date: "Temporada",
        title: "Competencias y fogueos",
        description:
          "Participación y preparación del equipo con objetivos claros.",
        cta: "Saber más",
        href: "#contacto",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // PREGUNTAS FRECUENTES (FAQ)
  // ─────────────────────────────────────────────
  faq: {
    heading: "Preguntas frecuentes.",
    subheading: "Resolvemos las dudas más comunes, sin rodeos.",
    items: [
      {
        question: "¿Desde qué edad pueden entrar los niños?",
        answer:
          "Desde los 3 años. El nivel y la frecuencia las definimos en la evaluación inicial.",
      },
      {
        question: "¿También hay clases para adultos?",
        answer:
          "Sí. Tenemos opciones para adultos que quieren aprender desde cero, mejorar técnica o entrenar como masters/triatlón.",
      },
      {
        question: "¿Puedo probar antes de inscribirme?",
        answer:
          "Claro. Agendamos una clase de prueba y una evaluación de nivel para recomendarte el grupo correcto.",
      },
      {
        question: "¿Qué necesito llevar?",
        answer:
          "Traje de baño, goggles y gorra. Si eres principiante, también podemos sugerirte el equipo ideal.",
      },
      {
        question: "¿Dónde están ubicados?",
        answer:
          "En Fraccionamiento El Reliz, Chihuahua, México. Envíanos mensaje y te compartimos ubicación exacta y cómo llegar.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Una clase de prueba",
    subheading: "vale más que mil promesas.",
    schedulingUrl: "",
    schedulingCta: "Agendar una llamada",
    form: {
      namePlaceholder: "Ej. María González",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "614 123 4567",
      phoneRequired: false,
      messagePlaceholder: "Aprender desde cero, competencia, ejercicio…",
      submitButton: "Agenda mi clase de prueba",
      sendingButton: "Enviando…",
      successMessage:
        "Listo. Recibimos tu mensaje y te respondemos pronto.",
      errorMessage:
        "Hubo un problema al enviar. Inténtalo de nuevo.",
    },
    email: "hola@add.com",
    phone: "",
    address: "El Reliz · Chihuahua, México",
    hours: "Lunes a sábado · 6:00 — 21:00",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Programas", href: "#programas" },
      { label: "Método", href: "#features" },
      { label: "Entrenador", href: "#logros" },
      { label: "Instalaciones", href: "#galeria" },
      { label: "Horarios", href: "#horarios" },
      { label: "Planes", href: "#precios" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: { label: "Agenda clase de prueba", href: "#contacto" },
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline:
      "Escuela de Natación premium en Chihuahua. Dirigida por NTP, entrenador olímpico Tokyo 2020.",
    address: {
      line: "Fraccionamiento El Reliz",
      city: "Chihuahua, Chih.",
      country: "México",
    },
    social: {
      instagram: "https://instagram.com/add.natacion",
      facebook: "https://facebook.com/add.natacion",
    },
    links: [
      { label: "Programas", href: "#programas" },
      { label: "Entrenador", href: "#logros" },
      { label: "Horarios", href: "#horarios" },
      { label: "Planes", href: "#precios" },
      { label: "Contacto", href: "#contacto" },
    ],
    copyright: "Todos los derechos reservados.",
    madeWith: "Hecho con disciplina en Chihuahua.",
  },

  // ─────────────────────────────────────────────
  // EMAIL (notificaciones automaticas al recibir un contacto)
  // ─────────────────────────────────────────────
  email: {
    subject: "Recibimos tu mensaje",
    teamSignature: "ADD",
    from: "onboarding@resend.dev",
  },

  // ─────────────────────────────────────────────
  // COLORES PRINCIPALES (referencia documental)
  // ─────────────────────────────────────────────
  colors: {
    primary: "deep-navy (#0A1F44)",
    accent: "orange (#F97316)",
    gold: "gold (#D4A017)",
    surface: "white / surface-light / surface-darker",
  },

  // ─────────────────────────────────────────────
  // BOTON DE PAGO (PayPal)
  // ─────────────────────────────────────────────
  payment: {
    enabled: true,
    paypalMeUsername: "hectormj82",
    defaultAmount: 1499,
    currency: "MXN",
    buttonText: "Pagar con PayPal",
  },

  // ─────────────────────────────────────────────
  // METADATOS SEO
  // ─────────────────────────────────────────────
  metadata: {
    title: "ADD Natación | Chihuahua",
    description:
      "Escuela de natación premium en Chihuahua dirigida por NTP, entrenador olímpico Tokyo 2020. Programas para niños, jóvenes, adultos, masters y triatlón.",
  },
};
