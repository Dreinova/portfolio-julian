# Capturas de proyectos

Suelta aquí las capturas de pantalla con **estos nombres exactos** (todo en minúsculas, extensión `.jpg`).
La landing las toma automáticamente. Si falta alguna, la tarjeta muestra un placeholder.

| Proyecto                     | Archivo                        | Sitio                              |
| ---------------------------- | ------------------------------ | ---------------------------------- |
| Visit Bogotá                 | `visit-bogota.jpg`             | https://visitbogota.co/es          |
| Acuarela                     | `acuarela.jpg`                 | https://acuarela.app/              |
| LosPetitFellas               | `los-petit-fellas.jpg`         | https://lospetitfellas.com.co/     |
| Bilingual Child Care Training| `bilingual-child-care.jpg`     | http://bilingualchildcaretraining.com/ |
| Harker & Lloreda             | `harker-lloreda.jpg`           | https://harkerlloreda.com/es       |
| Cinescuela                   | `cinescuela.jpg`               | https://www.cinescuela.org/        |
| Quartier des Lettres         | `quartier-des-lettres.jpg`     | https://quartierdeslettres.org/    |
| Visita Tenjo                 | `visita-tenjo.jpg`             | https://visitatenjo.com/           |
| Festival de Música Sacra     | `festival-musica-sacra.jpg`    | https://festivalmusicasacra.com/   |

## Recomendaciones

- **Proporción:** 16:10 (por ejemplo **1200 × 750 px**). Se recortan desde arriba (`object-top`).
- **Formato:** `.jpg`, calidad ~80%, idealmente **< 300 KB** cada una para que el sitio cargue rápido.
- Captura la parte superior de cada web (hero) para que se reconozca el proyecto.

## ¿Cómo capturar rápido?

- Extensión de navegador tipo "Full Page Screen Capture" o la captura nativa del navegador.
- O servicios como https://www.screenshotmachine.com / https://shot.screenshotapi.net
- Recorta/exporta a 1200×750 y guarda con el nombre de la tabla.

Después:

```bash
git add public/projects && git commit -m "Añade capturas de proyectos" && git push
```

El sitio se reconstruye solo (GitHub Actions) y en ~1 min se ven las imágenes.
