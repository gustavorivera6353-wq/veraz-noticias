# Casos de prueba: fuentes en la vista individual de la noticia (HU-04) - T-18 y T-19

Responsable de QA: Product Owner. Última actualización: 09/11/2026.
Versión probada: rama compilada de cada tarea. Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de la prueba, el 09/11/2026.
Los casos del formulario están en `docs/casos-de-prueba-fuentes.md` (CP-FO01 a CP-FO12) y los del guardado en `docs/casos-de-prueba-guardado-fuentes.md` (CP-GU01 a CP-GU08).

## T-18: mostrar las fuentes al leer la noticia

| ID | Caso | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-FD01 | Mostrar las fuentes | Abrir una noticia que tiene dos fuentes | Aparece el título "Fuentes" y una lista con el nombre de cada fuente, en el mismo orden, con su enlace | Pasó |
| CP-FD02 | Abrir en otra pestaña | Revisar los enlaces de las fuentes | Cada enlace se abre en una pestaña nueva con `rel="noopener noreferrer"` | Pasó |
| CP-FD03 | Noticia publicada con fuente | Publicar una noticia con una fuente desde el formulario | Al abrirla se ve su fuente en la lista | Pasó |
| CP-FD04 | Recargar la página | Recargar y abrir la noticia publicada | La fuente sigue apareciendo | Pasó |
| CP-FD05 | Pantalla de 375 px | Abrir una noticia con 5 fuentes de nombre y enlace largos en una pantalla de 375 px | Se ven las 5 fuentes y no hay desplazamiento horizontal | Pasó |
| CP-FD06 | Teclado | Pasar el foco con el teclado a un enlace de fuente | El enlace recibe el foco | Pasó |

Resumen de T-18: 6 casos ejecutados, todos pasaron.

## T-19: mensaje cuando no hay fuentes y fuentes dañadas

| ID | Caso | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-FD07 | Noticia sin fuentes | Abrir una noticia que no tiene el campo `fuentes` | Aparece el mensaje "Esta noticia no tiene fuentes registradas." y no se muestra la lista | Pasó |
| CP-FD08 | Fuentes dañadas entre válidas | Abrir una noticia guardada con una fuente válida, otra sin enlace, otra con un enlace `javascript:` y valores que no son fuentes | Solo se muestra la fuente válida y ningún enlace peligroso | Pasó |
| CP-FD09 | Todas las fuentes dañadas | Abrir una noticia guardada cuyas fuentes están todas dañadas | Aparece el mensaje de que no tiene fuentes registradas | Pasó |
| CP-FD10 | Campo que no es una lista | Abrir una noticia guardada con `fuentes` que no es una lista | La página no se rompe y aparece el mensaje de que no tiene fuentes registradas | Pasó |
| CP-FD11 | Mensaje en 375 px | Abrir una noticia sin fuentes en una pantalla de 375 px | El mensaje se ve completo y no hay desplazamiento horizontal | Pasó |

Resumen de T-19: 5 casos ejecutados, todos pasaron. Además se repitieron los casos de T-16, T-17 y T-18, la revisión del Sprint 1 y la verificación del modelo de fuentes (12 de 12); todos siguen pasando.
