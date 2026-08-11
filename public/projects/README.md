# Capturas de proyectos

Las capturas viven aquí en formato **`.webp`** (ligero) con **estos nombres exactos**.
La landing las toma automáticamente. Si falta alguna, la tarjeta muestra un placeholder.

| Proyecto                      | Archivo                       | Sitio                                   |
| ----------------------------- | ----------------------------- | --------------------------------------- |
| Visit Bogotá                  | `visit-bogota.webp`           | https://visitbogota.co/es               |
| Acuarela                      | `acuarela.webp`               | https://acuarela.app/                   |
| LosPetitFellas                | `los-petit-fellas.webp`       | https://lospetitfellas.com.co/          |
| Bilingual Child Care Training | `bilingual-child-care.webp`   | http://bilingualchildcaretraining.com/  |
| Harker & Lloreda              | `harker-lloreda.webp`         | https://harkerlloreda.com/es            |
| Cinescuela                    | `cinescuela.webp`             | https://www.cinescuela.org/             |
| Barrio Letras                 | `quartier-des-lettres.webp`   | https://quartierdeslettres.org/         |
| Visita Tenjo                  | `visita-tenjo.webp`           | https://visitatenjo.com/                |
| Festival de Música Sacra      | `festival-musica-sacra.webp`  | https://festivalmusicasacra.com/        |

## Para reemplazar o añadir una captura

1. Deja el PNG/JPG donde quieras y conviértelo a WEBP (mismo nombre de la tabla). Con ffmpeg:

   ```bash
   ffmpeg -y -i entrada.png -vf "scale='min(1200,iw)':-2" -c:v libwebp -quality 82 salida.webp
   ```

2. Guarda el `.webp` en esta carpeta con el nombre exacto de la tabla.
3. Sube los cambios:

   ```bash
   git add public/projects && git commit -m "Actualiza capturas" && git push
   ```

El sitio se reconstruye solo (GitHub Actions) y en ~1 min se ven las imágenes.

> Proporción ideal de la captura: 16:10 (se recorta desde arriba con `object-top`).
