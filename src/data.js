// Contenido extraído del CV de Julián David Delgado Acevedo.
//
// IMÁGENES DE PROYECTOS:
// Cada proyecto apunta a un archivo en /public/projects/<image>.webp
// (ver public/projects/README.md para la tabla de nombres exactos).
// Recomendado: ancho ~1200 px, formato .webp, < 150 KB.
// Mientras falte una imagen, la tarjeta muestra un placeholder automáticamente.

export const profile = {
  name: "Julián David Delgado Acevedo",
  role: "Frontend Developer",
  tagline: "React · React Native",
  location: "Bogotá, Colombia",
  phone: "320 371 2824",
  email: "juliandelgadoacevedo@gmail.com",
  years: 8,
  summary:
    "Frontend Developer con más de 8 años construyendo productos web y aplicaciones híbridas de alta calidad. Especializado en React y React Native, transformo diseños en interfaces usables, accesibles y con alto rendimiento. He trabajado con clientes del sector público y privado en Colombia y el exterior, con foco en código limpio, escalable y centrado en la experiencia de usuario.",
};

export const stats = [
  { value: "8+", label: "Años de experiencia" },
  { value: "9", label: "Proyectos en producción" },
  { value: "6+", label: "Contratos sucesivos en el IDT" },
];

export const experience = [
  {
    role: "Líder del Equipo de Desarrollo",
    company: "Oblicua",
    period: "2022 - 2026",
    place: "Bogotá, Colombia",
    bullets: [
      "Dirigí y capacité al equipo de desarrollo (hasta 4 personas), coordinando la planeación y la entrega de los proyectos.",
      "Me encargué de los proyectos de principio a fin, para clientes de turismo, cultura y educación.",
      "Acompañé el ciclo completo de cada proyecto, desde la implementación hasta el despliegue y el mantenimiento.",
    ],
  },
  {
    role: "Desarrollador Frontend",
    company: "Instituto Distrital de Turismo de Bogotá (IDT)",
    period: "2022 - 2026",
    place: "Bogotá, Colombia",
    bullets: [
      "Administré, desarrollé y mantuve la página web institucional y la intranet del IDT, garantizando disponibilidad y actualizaciones continuas.",
      "Implementé funcionalidades y mejoras de UI con tecnologías web modernas, elevando la experiencia de usuarios internos y externos.",
      "Ejecuté campañas digitales junto a la Subdirección de Mercadeo, con resultados consistentes en más de 6 contratos sucesivos.",
    ],
  },
  {
    role: "Desarrollador Web / React Native",
    company: "Bilingual Child Care Training",
    period: "Oct 2020 - Ago 2022",
    place: "Woodhaven, NY, USA (Remoto)",
    bullets: [
      "Desarrollé aplicaciones híbridas con React Native para iOS y Android, mejorando la accesibilidad del contenido educativo.",
      "Construí e integré interfaces web para la plataforma de formación bilingüe.",
      "Trabajé en un equipo remoto internacional bajo metodología ágil, cumpliendo deadlines ajustados.",
    ],
  },
  {
    role: "Desarrollador Frontend",
    company: "Oreka Consultores",
    period: "2018 - 2020",
    place: "Bogotá, Colombia",
    bullets: [
      "Diseñé y desarrollé productos web y aplicaciones frontend para reducir el riesgo en la toma de decisiones empresariales.",
      "Ejecuté proyectos para clientes como Hotel Avenida Jiménez, Editorial King Kolor, Grupo T&S (Perú), Harker & Lloreda y Háptica.",
      "Realicé producción audiovisual de los procesos de consultoría, complementando los entregables digitales.",
    ],
  },
];

export const projects = [
  {
    title: "Visit Bogotá",
    domain: "visitbogota.co",
    url: "https://visitbogota.co/es",
    category: "Turismo",
    blurb:
      "Portal oficial de turismo de Bogotá: guía de experiencias, agenda cultural y contenidos de ciudad para visitantes y locales.",
    tags: ["React", "Turismo", "Sector público"],
    image: "visit-bogota",
    featured: true,
  },
  {
    title: "Acuarela",
    domain: "acuarela.app",
    url: "https://acuarela.app/",
    category: "Producto",
    blurb:
      "Aplicación web con una interfaz cuidada y fluida, enfocada en una experiencia de usuario limpia y moderna.",
    tags: ["React", "App", "UI"],
    image: "acuarela",
    featured: true,
  },
  {
    title: "LosPetitFellas",
    domain: "lospetitfellas.com.co",
    url: "https://lospetitfellas.com.co/",
    category: "Música",
    blurb:
      "Sitio del proyecto musical LosPetitFellas: identidad, música, videos y agenda de conciertos en un espacio inmersivo.",
    tags: ["Web", "Música", "Cultura"],
    image: "los-petit-fellas",
    featured: true,
  },
  {
    title: "Bilingual Child Care Training",
    domain: "bilingualchildcaretraining.com",
    url: "http://bilingualchildcaretraining.com/",
    category: "Educación",
    blurb:
      "Plataforma de formación bilingüe en cuidado infantil, con contenidos educativos accesibles en web y móvil.",
    tags: ["React Native", "Web", "Educación"],
    image: "bilingual-child-care",
    featured: false,
  },
  {
    title: "Harker & Lloreda",
    domain: "harkerlloreda.com",
    url: "https://harkerlloreda.com/es",
    category: "Corporativo",
    blurb:
      "Sitio corporativo de firma especializada, con comunicación de servicios, marca y presencia digital.",
    tags: ["Frontend", "Corporativo"],
    image: "harker-lloreda",
    featured: false,
  },
  {
    title: "Cinescuela",
    domain: "cinescuela.org",
    url: "https://www.cinescuela.org/",
    category: "Educación",
    blurb:
      "Escuela de cine: oferta formativa, contenidos audiovisuales y comunidad en torno a la creación cinematográfica.",
    tags: ["Web", "Educación", "Cultura"],
    image: "cinescuela",
    featured: false,
  },
  {
    title: "Barrio Letras",
    domain: "quartierdeslettres.org",
    url: "https://quartierdeslettres.org/",
    category: "Cultura",
    blurb:
      "Buscador del universo de fondos literarios del mundo: encuentra autores y obras en una interfaz editorial, cálida y multilingüe.",
    tags: ["Web", "Cultura", "Buscador"],
    image: "quartier-des-lettres",
    featured: false,
  },
  {
    title: "Visita Tenjo",
    domain: "visitatenjo.com",
    url: "https://visitatenjo.com/",
    category: "Turismo",
    blurb:
      "Portal turístico del municipio de Tenjo: experiencias, rutas y agenda local para promover el destino.",
    tags: ["Web", "Turismo"],
    image: "visita-tenjo",
    featured: false,
  },
  {
    title: "Festival de Música Sacra",
    domain: "festivalmusicasacra.com",
    url: "https://festivalmusicasacra.com/",
    category: "Eventos",
    blurb:
      "Sitio del festival de música sacra: programación, artistas y agenda de eventos con una identidad cuidada.",
    tags: ["Web", "Cultura", "Eventos"],
    image: "festival-musica-sacra",
    featured: false,
  },
];

export const skillGroups = [
  {
    label: "Lenguajes",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS / Sass"],
  },
  {
    label: "Frameworks",
    items: ["React", "React Native", "Next.js"],
  },
  {
    label: "Estado",
    items: ["Redux", "Context API", "Zustand"],
  },
  {
    label: "Estilos",
    items: ["Tailwind CSS", "Styled Components", "Bootstrap", "Material UI"],
  },
  {
    label: "Herramientas",
    items: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm / yarn"],
  },
  {
    label: "Metodologías",
    items: ["Agile / Scrum", "Responsive", "Mobile-first", "Accesibilidad (WCAG)"],
  },
];

export const education = [
  { title: "Tecnólogo en Producción Multimedia", place: "SENA", year: "2017" },
  { title: "Bachiller Académico", place: "", year: "2012" },
];
