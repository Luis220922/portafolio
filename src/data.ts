
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  /** Etiqueta corta de estado, ej. "En producción". Se omite si no aplica. */
  status?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  objectPosition?: string;
  tags: string[];
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Agente de IA con MCP, RAG y Evaluación",
    description: "Agente conversacional que no solo responde preguntas: ejecuta acciones reales sobre el negocio. Implementé un servidor MCP (Model Context Protocol) nativo que expone cuatro herramientas sobre PostgreSQL, un pipeline RAG con búsqueda semántica en ChromaDB, y un harness de evaluación propio que mide recuperación, selección de herramientas y correctitud end-to-end. Cada interacción queda registrada con tokens, costo y latencia. 61 tests corriendo en CI.",
    tags: ["Python", "MCP", "RAG", "Gemini", "FastAPI", "Docker"],
    category: "IA",
    status: "En desarrollo",
    github: "https://github.com/Charlie-art-b/agente-mcp-core",
  },
  {
    id: 2,
    title: "SINPE Bridge — Conciliación de Pagos",
    description: "Sistema en producción que valida y concilia pagos de SINPE Móvil contra las órdenes de un punto de venta. Desarrollado en equipo sobre tres repositorios: una API en FastAPI desplegada en Fly.io con Supabase y proxy en Cloudflare, una app Android en Kotlin y Jetpack Compose que captura los SMS con firma HMAC SHA-256 y cola offline, y un sistema POS en Laravel.",
    tags: ["FastAPI", "Kotlin", "Laravel", "Supabase", "Fly.io", "Docker"],
    category: "Full Stack",
    status: "En producción",
    github: "https://github.com/ImJonathan365/sinpe-bridge-api",
  },
  {
    id: 3,
    title: "Brittany Salón",
    description: "Plataforma de gestión para salón de belleza desarrollada en equipo con metodología Scrum. Como programador Full Stack, implementé APIs REST en .NET para la administración de citas, clientes e inventario, y desarrollé el frontend moderno e interactivo con Next.js.",
    tags: ["Next.js", ".NET", "REST API", "Scrum"],
    category: "Full Stack",
    github: "https://github.com/Luis220922/Britanny-s-Salon",
  },
  {
    id: 4,
    title: "Orienta-UCR — Career Guidance System",
    description: "Desarrollado en grupo, donde asumí el rol de programador Full Stack (responsable tanto del Frontend como del Backend). Implementé un backend seguro en Spring Boot (Java) con JWT y JPA/Hibernate, y un frontend responsivo en React bajo el patrón de Atomic Design y Bootstrap.",
    tags: ["Spring Boot", "React", "JWT", "JPA"],
    category: "Full Stack",
    github: "https://github.com/Charlie-art-b/Orienta-UCR",
  },
  {
    id: 5,
    title: "Event-Driven Distributed System",
    description: "Desarrollado en grupo, es un sistema distribuido guiado por eventos para el procesamiento asíncrono y robusto de facturas. Cuenta con microservicios en .NET, Python (Email) y Node.js (Discord), orquestación en Hangfire, streaming con Apache Kafka, base de datos SQL Server y analíticas visualizadas en Power BI.",
    tags: ["Microservicios", "Apache Kafka", ".NET", "Hangfire"],
    category: "Backend",
    github: "https://github.com/Charlie-art-b/Event-Driven-Distributed-System",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Bootstrap 5", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Herramientas" },
  { name: "GitHub", category: "Herramientas" },
  { name: "VS Code", category: "Herramientas" },
  { name: "Docker", category: "Herramientas" },
  { name: "Apache Kafka", category: "Herramientas" },
  { name: "Jenkins", category: "Herramientas" },
  { name: "Playwright", category: "Herramientas" },
  { name: "Postman", category: "Herramientas" },
];

/** Ordenado del más reciente al más antiguo, igual que la trayectoria. */
export const events: Event[] = [
  {
    id: 4,
    title: "XIV Simposio de Informática Empresarial — Ponencia",
    location: "UCR Sede Guanacaste",
    date: "Agosto 2026",
    description:
      "Presenté SINPE Bridge junto a mi equipo en el XIV Simposio de Informática Empresarial. La ponencia recorrió el problema del fraude con comprobantes de SINPE Móvil, la arquitectura completa del sistema —de la captura del SMS en Android hasta el motor de conciliación— y las decisiones de seguridad de punta a punta: firma HMAC SHA-256, protección anti-replay y anonimización del dispositivo.",
    image: "/simposio_ucr_guanacaste_2026.jpg",
    objectPosition: "center 45%",
    tags: ["Ponencia", "SINPE Bridge", "Arquitectura", "Seguridad"],
  },
  {
    id: 3,
    title: "GDG Pura Vida — Build with AI 2026",
    location: "Heredia, Costa Rica (UNA)",
    date: "Mayo 2026",
    description:
      "Participé en el primer evento de 'Build with AI Pura Vida' celebrado en el campus de la Universidad Nacional. Fue una jornada intensiva explorando el ecosistema de Inteligencia Artificial de Google, aprendiendo de expertos sobre aplicaciones prácticas reales y conectando con entusiastas del área en sesiones interactivas.",
    image: "/build_with_ai_2025.jpg",
    objectPosition: "center 66%",
    tags: ["Google AI", "Machine Learning", "GDG", "Talleres"],
  },
  {
    id: 2,
    title: "GDG Pura Vida DevFest 2025",
    location: "Costa Rica",
    date: "Noviembre 2025",
    description:
      "Asistí al DevFest Pura Vida, la conferencia anual más importante de la comunidad de desarrolladores en Costa Rica. Fue un espacio excelente para actualizar conocimientos en tecnologías de Google, desarrollo web moderno y conectar con profesionales clave de la industria local.",
    image: "/devfest_puravida_2025.jpg",
    objectPosition: "center 18%",
    tags: ["DevFest", "Google", "Comunidad", "Networking"],
  },
  {
    id: 1,
    title: "CLEI 2025 — Conferencia Latinoamericana de Informática",
    location: "Valparaíso, Chile",
    date: "Octubre 2025",
    description:
      "Participé en la 51.ª edición del Congreso Latinoamericano de Computación (CLEI), uno de los eventos académicos más importantes de Latinoamérica en ciencias de la computación. Durante el encuentro, asistí a un curso intensivo de redes neuronales, ponencias y sesiones de networking con investigadores y profesionales de la región.",
    image: "/clei_valparaiso_2025.jpg",
    objectPosition: "center 40%",
    tags: ["Conferencia", "Redes Neuronales", "Investigación", "Networking"],
  },
];

/** Ordenado del presente hacia atrás. */
export const timeline: TimelineItem[] = [
  {
    id: 0,
    year: "2026",
    title: "XIV Simposio de Informática Empresarial",
    subtitle: "Ponencia · UCR Sede Guanacaste",
    description: "Presentación del sistema anti-fraude para pagos SINPE Móvil, desarrollado en equipo.",
  },
  {
    id: 1,
    year: "2026",
    title: "Build with AI — GDG Pura Vida",
    subtitle: "Taller y conferencia de IA",
    description: "Participación en el primer encuentro sobre Inteligencia Artificial aplicada en la Universidad Nacional (UNA).",
  },
  {
    id: 2,
    year: "2025",
    title: "GDG Pura Vida DevFest",
    subtitle: "Conferencia tecnológica",
    description: "Participación en la conferencia anual de desarrolladores sobre tecnologías de Google y desarrollo web.",
  },
  {
    id: 3,
    year: "2025",
    title: "CLEI 2025 — Valparaíso",
    subtitle: "Congreso internacional",
    description: "Asistencia al Congreso Latinoamericano de Computación en Chile y curso intensivo de redes neuronales.",
  },
  {
    id: 4,
    year: "2024",
    title: "Desarrollo de proyectos web",
    subtitle: "Frontend y backend",
    description: "Construcción de aplicaciones modernas con React, TypeScript y Node.js.",
  },
  {
    id: 5,
    year: "2023",
    title: "Inicio en programación",
    subtitle: "Universidad de Costa Rica",
    description: "Comienzo del aprendizaje formal en ciencias de la computación.",
  },
];
