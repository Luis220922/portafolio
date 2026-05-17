
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
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
    title: "Portafolio Personal",
    description: "Portafolio profesional moderno construido con React y TypeScript.",
    tags: ["React", "TypeScript", "Vite"],
    category: "Frontend",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Brittany Salón",
    description: "Plataforma de gestión para salón de belleza desarrollada en equipo con metodología Scrum. Como programador Full Stack, implementé APIs REST en .NET para la administración de citas, clientes e inventario, y desarrollé el frontend moderno e interactivo con Next.js.",
    tags: ["Next.js", ".NET", "REST API", "Scrum"],
    category: "Frontend",
    github: "https://github.com/Luis220922/Britanny-s-Salon",
  },
  {
    id: 3,
    title: "Orienta-UCR — Career Guidance System",
    description: "Desarrollado en grupo, donde asumí el rol de programador Full Stack (responsable tanto del Frontend como del Backend). Implementé un backend seguro en Spring Boot (Java) con JWT y JPA/Hibernate, y un frontend responsivo en React bajo el patrón de Atomic Design y Bootstrap.",
    tags: ["Spring Boot", "React", "JWT", "JPA"],
    category: "Backend",
    github: "https://github.com/Charlie-art-b/Orienta-UCR",
  },
  {
    id: 4,
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
  { name: "Python", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Git", category: "Herramientas" },
  { name: "GitHub", category: "Herramientas" },
  { name: "VS Code", category: "Herramientas" },
  { name: "Jenkins", category: "Herramientas" },
  { name: "Playwright", category: "Herramientas" },
  { name: "Postman", category: "Herramientas" },
];

export const events: Event[] = [
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
    id: 3,
    title: "GDG Pura Vida — Build with AI 2025",
    location: "Heredia, Costa Rica (UNA)",
    date: "2025",
    description:
      "Participé en el primer evento de 'Build with AI Pura Vida' celebrado en el campus de la Universidad Nacional. Fue una jornada intensiva explorando el ecosistema de Inteligencia Artificial de Google, aprendiendo de expertos sobre aplicaciones prácticas reales y conectando con entusiastas del área en sesiones interactivas.",
    image: "/build_with_ai_2025.jpg",
    objectPosition: "center 66%",
    tags: ["Google AI", "Machine Learning", "GDG", "Talleres"],
  },
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2025",
    title: "GDG Pura Vida DevFest 2025",
    subtitle: "Conferencia Tecnológica",
    description: "Participación en la conferencia anual de desarrolladores sobre tecnologías de Google y desarrollo web.",
  },
  {
    id: 2,
    year: "2025",
    title: "CLEI 2025 — Valparaíso",
    subtitle: "Participación en congreso internacional",
    description: "Asistencia al Congreso Latinoamericano de Computación en Chile y curso intensivo de Redes Neuronales.",
  },
  {
    id: 3,
    year: "2025",
    title: "Build with AI — GDG Pura Vida",
    subtitle: "Taller & Conferencia de IA",
    description: "Participación en el primer encuentro sobre Inteligencia Artificial aplicada en la Universidad Nacional (UNA).",
  },
  {
    id: 4,
    year: "2024",
    title: "Desarrollo de Proyectos Web",
    subtitle: "Frontend & Backend",
    description: "Construcción de aplicaciones modernas con React, TypeScript y Node.js.",
  },
  {
    id: 5,
    year: "2023",
    title: "Inicio en Programación",
    subtitle: "Universidad",
    description: "Comienzo del aprendizaje formal en ciencias de la computación.",
  },
];
