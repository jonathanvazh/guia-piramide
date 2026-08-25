# El Principio de la Pirámide — guía de trabajo

Guía práctica para estructurar argumentos ante audiencias senior: conclusión primero, SCQA, MECE, y ocho casos aplicados al trabajo diario de un área analítica (calidad de datos que produce otro, decisiones en organizaciones centralizadas, business cases, conversaciones difíciles, traspasos, explicación de temas técnicos).

Está pensada para leerse por cuenta propia y para trabajarse en equipo. La sección 26 trae una agenda de taller de 90 minutos.

**Sitio publicado:** https://USUARIO.github.io/REPO/

## Contenido del repositorio

| Archivo | Qué es |
|---|---|
| `index.html` | El sitio completo: todo el texto de la guía con navegación por secciones. Sin dependencias ni compilación. |
| `assets/styles.css` | Los estilos del sitio. |
| `assets/app.js` | El menú de contenido en móvil y el resaltado de la sección que estás leyendo. |
| `guia.md` | El texto completo en Markdown. Útil para leer en GitHub, editar y ver diferencias entre versiones. |
| `Guia-Principio-Piramide.pdf` | Versión imprimible. |
| `Guia-Principio-Piramide.docx` | Versión editable en Word. |
| `Taller-Principio-Piramide.pptx` | Deck de 17 láminas para facilitar el taller de 90 minutos de la sección 26. Incluye notas del orador en cada lámina. |

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo y sube todos estos archivos a la raíz.
2. En el repositorio, entra a **Settings → Pages**.
3. En *Source*, elige **Deploy from a branch**; en *Branch*, elige `main` y la carpeta `/ (root)`. Guarda.
4. Espera un par de minutos. El sitio queda en `https://USUARIO.github.io/REPO/`.
5. Actualiza el enlace de arriba en este README.

El archivo `.nojekyll` está incluido para que GitHub publique los archivos tal cual, sin procesarlos.

## Cómo editar

Para cambios de texto, edita `index.html` directamente: no hay plantillas ni proceso de compilación, el texto está en el HTML. Si cambias algo, actualiza también `guia.md` para que las dos versiones no se separen.

Para cambios de aspecto, edita `assets/styles.css`. Los colores están declarados como variables al inicio del archivo.

Los archivos PDF y Word son copias derivadas; si el texto cambia de forma importante, conviene regenerarlos o retirarlos del repositorio en lugar de dejar versiones desalineadas.

## Sobre las fuentes

El método es de Barbara Minto, expuesto originalmente en *The Pyramid Principle: Logic in Writing and Thinking*. Esta guía **no reproduce el libro**: la organización, la redacción y todos los ejemplos son originales, y varias secciones (los casos aplicados de la Parte II, el taller de la Parte III) no forman parte del material original. Si el método te resulta útil, el libro sigue siendo la fuente primaria.

Los ejemplos usan cifras y situaciones ilustrativas. No contienen información de ninguna institución.

## Licencia

Texto bajo [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es): puedes copiarlo, adaptarlo y usarlo, incluso comercialmente, siempre que des atribución. Ver `LICENSE`.
