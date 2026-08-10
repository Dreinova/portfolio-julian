// Contenido extraído del CV de Julián David Delgado Acevedo.
// Las imágenes de los proyectos son placeholders (picsum.photos). Reemplázalas
// por capturas reales cuando las tengas.

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
  { value: "3", label: "Países atendidos (CO · US · PE)" },
  { value: "6+", label: "Contratos sucesivos en el IDT" },
  { value: "10+", label: "Clientes públicos y privados" },
];

export const experience = [
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
    title: "Portal e Intranet del IDT",
    client: "Instituto Distrital de Turismo · Bogotá",
    year: "2022-2026",
    blurb:
      "Sitio institucional e intranet mantenidos y evolucionados de forma continua, con mejoras de UI y soporte a campañas digitales de ciudad.",
    tags: ["React", "Web", "Intranet", "Sector público"],
    seed: "idt-bogota-turismo",
    featured: true,
  },
  {
    title: "App educativa bilingüe",
    client: "Bilingual Child Care Training · NY",
    year: "2020-2022",
    blurb:
      "Aplicación híbrida iOS y Android para formación bilingüe, con foco en accesibilidad del contenido y despliegue en ambas tiendas.",
    tags: ["React Native", "iOS", "Android"],
    seed: "bilingual-childcare-app",
    featured: true,
  },
  {
    title: "Hotel Avenida Jiménez",
    client: "Oreka Consultores",
    year: "2018-2020",
    blurb:
      "Producto web para el sector hotelero, orientado a presencia digital y experiencia de reserva.",
    tags: ["Frontend", "Web"],
    seed: "hotel-avenida-jimenez",
    featured: false,
  },
  {
    title: "Editorial King Kolor",
    client: "Oreka Consultores",
    year: "2018-2020",
    blurb:
      "Interfaz web para una editorial, con catálogo visual y despliegue de contenidos.",
    tags: ["Frontend", "Web"],
    seed: "editorial-king-kolor",
    featured: false,
  },
  {
    title: "Grupo T&S",
    client: "Oreka Consultores · Perú",
    year: "2018-2020",
    blurb:
      "Aplicación frontend para un cliente internacional, enfocada en soportar decisiones empresariales.",
    tags: ["Frontend", "Internacional"],
    seed: "grupo-tys-peru",
    featured: false,
  },
  {
    title: "Harker & Lloreda",
    client: "Oreka Consultores",
    year: "2018-2020",
    blurb:
      "Desarrollo de interfaces web para consultoría, con entregables digitales y de producción audiovisual.",
    tags: ["Frontend", "Multimedia"],
    seed: "harker-lloreda",
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
