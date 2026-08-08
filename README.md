# Portafolio — Luis Rivera López

Sitio personal donde reúno mis proyectos, mi trayectoria y las conferencias a las
que he asistido. Una sola página, en español, sin dependencias de UI.

**En línea:** https://luisrivera.vercel.app

## Stack

| Capa | Herramienta |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Estilos | CSS puro con variables (sin framework) |
| Iconos | lucide-react |
| Formulario | Formspree |
| Hosting | Vercel |

## Correrlo local

```bash
npm install
npm run dev      # http://localhost:5173
```

Otros comandos:

```bash
npm run build    # verificación de tipos + build de producción en dist/
npm run preview  # sirve dist/ para revisar el build
npm run lint     # ESLint
```

## Cómo está organizado

```
src/
├── components/     # Una sección de la página por archivo
│   └── icons.tsx   # SVG de marcas (GitHub, LinkedIn)
├── hooks/
│   └── useReveal.ts  # Aparición al entrar en pantalla (IntersectionObserver)
├── data.ts         # Todo el contenido: proyectos, skills, eventos, trayectoria
└── index.css       # Sistema visual completo
public/             # CV, fotos de eventos, favicon
```

**El contenido vive en [`src/data.ts`](src/data.ts).** Para agregar un proyecto,
una habilidad o un evento no hace falta tocar ningún componente: se añade la
entrada al arreglo correspondiente y la sección se actualiza sola.

## Decisiones de diseño

- **Tinta sobre papel.** Paleta de dos colores más un acento de arcilla, tipografía
  serif para los titulares (Instrument Serif) y sans para el texto (Inter).
- **Reglas, no tarjetas.** La estructura se apoya en líneas de 1px y en una rejilla
  de 12 columnas, en vez de sombras y bordes redondeados.
- **Tema claro y oscuro.** Se resuelve en un script en línea dentro de `index.html`
  antes del primer pintado, para que no haya destello al cargar. Respeta la
  preferencia del sistema salvo que el visitante elija otra cosa.
- **Movimiento discreto y opcional.** Las secciones aparecen al entrar en pantalla,
  y todo se desactiva con `prefers-reduced-motion`.

## Despliegue

Vercel detecta Vite automáticamente; [`vercel.json`](vercel.json) sólo fija el
comando de build y el cacheo de assets. Cada push a `main` publica.

> Si cambiás el dominio, actualizá las URLs de `og:url` y `canonical` en
> [`index.html`](index.html) — son las que arman la vista previa al compartir el
> enlace.
