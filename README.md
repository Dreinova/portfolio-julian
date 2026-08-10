# Portfolio · Julián David Delgado Acevedo

Landing page de portafolio (Frontend Developer · React · React Native) construida a partir del CV.

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`)
- **Motion** (`motion/react`) para animaciones y scroll-reveal
- **Phosphor Icons**
- Fuentes **Geist** / **Geist Mono** auto-hospedadas (`@fontsource-variable`)

Tema oscuro fijo, acento esmeralda, diseño responsive mobile-first y respeto de `prefers-reduced-motion`.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  data.js                # todo el contenido (perfil, experiencia, proyectos, skills)
  index.css              # Tailwind + tema (colores, fuentes)
  App.jsx                # composición de secciones
  components/
    Nav, Hero, Stats, Experience, Projects, Skills, Contact, Footer, Reveal
```

## Personalización

- **Contenido:** edita `src/data.js`. Todo (textos, proyectos, tags) sale de ahí.
- **Imágenes:** los proyectos usan placeholders de `picsum.photos` (campo `seed`).
  Reemplázalos por capturas reales colocándolas en `public/` y apuntando el `src`
  de las imágenes en `Hero.jsx` / `Projects.jsx`.
- **Color de acento:** variable `--color-accent` en `src/index.css`.

## Deploy

El build es estático (`/dist`). Se puede publicar gratis en:

- **Vercel** / **Netlify:** conecta el repo, build `npm run build`, output `dist`.
- **GitHub Pages:** sube el contenido de `dist` (ajusta `base` en `vite.config.js`
  si el repo no está en la raíz del dominio).
