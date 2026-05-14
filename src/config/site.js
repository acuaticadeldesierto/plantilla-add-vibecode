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
  tagline: "Escuela de natación para familias y alto rendimiento.",
  description:
    "En Chihuahua, Chihuahua. Clases para niños y papás, entrenamiento de alto rendimiento, masters y triatlón, y renta de carriles para equipos.",

  // ─────────────────────────────────────────────
  // SECCION HERO (primera pantalla)
  // ─────────────────────────────────────────────
  hero: {
    badge: "Chihuahua, Chihuahua",
    title: "Vive el cambio de",
    titleHighlight: "la natación en México",
    subtitle:
      "Un lugar cercano y motivador para aprender a nadar, entrenar en serio y disfrutar la alberca en familia. Programas para niños, papás, masters, triatlón, escuelas y empresas.",
    ctaPrimary: "Quiero información",
    ctaSecondary: "Ver programas",
    ctaPrimaryUrl: "#contacto",
    ctaSecondaryUrl: "#programas",
    backgroundImage:
      "/hero-swimmer.jpg",
    stats: [
      { value: "Chihuahua · El Reliz", label: "Sede" },
      { value: "15", label: "campeones nacionales formados" },
      { value: "7", label: "niveles de progresión por gorra" },
      { value: "3+", label: "edades: niños, jóvenes, adultos" },
    ],
  },

  // ─────────────────────────────────────────────
  // PROGRAMAS (seccion nueva)
  // ─────────────────────────────────────────────
  programs: {
    heading: "Programas para cada tipo de nadador",
    subheading:
      "Desde los primeros brazadas hasta entrenamiento de alto rendimiento. Tú eliges el camino.",
    items: [
      {
        title: "Familias",
        description:
          "Clases para niños y papás: técnica, seguridad en el agua y gusto por nadar.",
        highlights: ["Niños y papás", "Grupos por nivel", "Ambiente cercano"],
      },
      {
        title: "Alto rendimiento",
        description:
          "Entrenamiento para atletas que buscan resultados: disciplina, seguimiento y metas claras.",
        highlights: ["Plan de trabajo", "Enfoque competitivo", "Resultados medibles"],
      },
      {
        title: "Masters y triatlón",
        description:
          "Sesiones para mejorar resistencia y técnica, ideal si entrenas para competir o para sentirte más fuerte.",
        highlights: ["Técnica + condición", "Ritmo y constancia", "Comunidad"],
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
      "Un espacio con luz, energía y orden: para aprender, entrenar y avanzar con confianza.",
    items: [
      {
        icon: "lightning",
        title: "Energía y motivación",
        description:
          "Un ambiente que empuja hacia adelante: niños felices aprendiendo y atletas dando su mejor esfuerzo.",
      },
      {
        icon: "mobile",
        title: "Programas por nivel",
        description:
          "Cada quien a su ritmo. Grupos y sesiones pensadas para que avances sin frustrarte.",
      },
      {
        icon: "settings",
        title: "Entrenamiento con intención",
        description:
          "Técnica clara, metas realistas y seguimiento. Menos improvisación, más progreso.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LOGROS Y RESULTADOS (seccion nueva)
  // ─────────────────────────────────────────────
  achievements: {
    heading: "Logros y resultados",
    subheading:
      "Trabajo constante, equipo unido y resultados que se notan en el agua.",
    stats: [],
    items: [
      {
        title: "Podios y clasificaciones",
        description:
          "Participación constante en competencias, con resultados que reflejan disciplina y técnica.",
      },
      {
        title: "Mejoras medibles",
        description:
          "Seguimiento de tiempos y técnica para que el progreso sea claro, no solo una sensación.",
      },
      {
        title: "Cultura de equipo",
        description:
          "Ambiente exigente pero humano: el objetivo es crecer, no solo aguantar.",
      },
    ],
    note:
      "Estos ejemplos son editables. Aquí puedes poner tus logros reales (competencias, medallas, clasificaciones, marcas).",
  },

  // ─────────────────────────────────────────────
  // GALERIA (seccion nueva)
  // ─────────────────────────────────────────────
  gallery: {
    heading: "Galería",
    subheading:
      "Instalaciones y ambiente: espacio abierto, luz y mucha vida en el agua.",
    items: [
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
        src: "https://images.unsplash.com/photo-1766038844091-5c1888e4a50f?auto=format&fit=crop&w=1600&q=80",
        alt: "Acceso e instalaciones del club",
      },
      {
        src: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?auto=format&fit=crop&w=1600&q=80",
        alt: "Nadadores en plataformas de salida",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // HORARIOS (seccion nueva)
  // ─────────────────────────────────────────────
  schedule: {
    heading: "Horarios",
    subheading:
      "Horarios claros y fáciles de leer. Si quieres, te ayudamos a encontrar el mejor para tu familia o tu entrenamiento.",
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
    heading: "Planes",
    subheading:
      "Opciones claras. Si necesitas algo a la medida (escuelas, empresas o equipos), lo armamos contigo.",
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
  // EVENTOS (seccion nueva)
  // ─────────────────────────────────────────────
  events: {
    heading: "Eventos",
    subheading:
      "Actividades y competencias próximas. Si quieres participar, te guiamos paso a paso.",
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
    heading: "Preguntas frecuentes",
    subheading: "Resolvemos las dudas más comunes, sin rodeos.",
    items: [
      {
        question: "¿Desde qué edad pueden entrar los niños?",
        answer:
          "Depende del nivel y del objetivo. Escríbenos y te decimos el mejor punto de entrada para tu hijo o hija.",
      },
      {
        question: "¿También hay clases para adultos?",
        answer:
          "Sí. Tenemos opciones para adultos que quieren aprender, mejorar técnica o entrenar como masters/triatlón.",
      },
      {
        question: "¿Puedo probar antes de inscribirme?",
        answer:
          "Claro. Podemos agendar una evaluación de nivel para recomendarte el grupo correcto.",
      },
      {
        question: "¿Qué necesito llevar?",
        answer:
          "Traje de baño, goggles y gorra. Si eres principiante, también podemos sugerirte el equipo ideal.",
      },
      {
        question: "¿Dónde están ubicados?",
        answer:
          "En Chihuahua, Chihuahua. Envíanos mensaje y te compartimos ubicación exacta y cómo llegar.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // SECCION DE CONTACTO
  // ─────────────────────────────────────────────
  contact: {
    heading: "Contacto",
    subheading:
      "Cuéntanos qué estás buscando y te recomendamos el programa ideal.",
    schedulingUrl: "",
    schedulingCta: "Agendar una llamada",
    form: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "Tu teléfono (opcional)",
      phoneRequired: false,
      messagePlaceholder: "Escribe tu mensaje (edad, objetivo y horarios que te funcionan)...",
      submitButton: "Enviar",
      sendingButton: "Enviando...",
      successMessage:
        "Listo. Recibimos tu mensaje y te respondemos pronto.",
      errorMessage:
        "Hubo un problema al enviar. Inténtalo de nuevo.",
    },
    email: "hola@add.com",
    phone: "",
    address: "Chihuahua, Chihuahua, México",
  },

  // ─────────────────────────────────────────────
  // NAVEGACION
  // ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Programas", href: "#programas" },
      { label: "Lo que ofrecemos", href: "#features" },
      { label: "Logros", href: "#logros" },
      { label: "Galería", href: "#galeria" },
      { label: "Horarios", href: "#horarios" },
      { label: "Planes", href: "#precios" },
      { label: "Eventos", href: "#eventos" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: { label: "Agenda clase de prueba", href: "#contacto" },
  },

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    tagline: "Natación con energía, técnica y confianza.",
    links: [
      { label: "Programas", href: "#programas" },
      { label: "Horarios", href: "#horarios" },
      { label: "Planes", href: "#precios" },
      { label: "Contacto", href: "#contacto" },
    ],
    copyright: "Todos los derechos reservados.",
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
  // COLORES PRINCIPALES (referencia)
  // ─────────────────────────────────────────────
  colors: {
    primary: "slate-900",
    secondary: "slate-600",
    accent: "amber-500",
    background: "white / slate-50",
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
      "Escuela de natación para familias y alto rendimiento en Chihuahua. Programas para niños, papás, masters, triatlón, escuelas y empresas.",
  },
};
