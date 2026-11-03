# Casos de prueba: campo de fuentes del formulario de publicación (HU-04) - T-16

Responsable de QA: Product Owner. Estado: terminado (100 %). Última actualización: 02/11/2026.
Versión probada: rama `feature/T-16-formulario-fuentes` compilada. Los casos del modelo de datos (CP-F01 a CP-F12) están en `docs/modelo-fuentes.md` y se ejecutan con `node scripts/verificar-fuentes.mjs`.
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de la prueba, el 02/11/2026.

| ID | Caso | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-FO01 | Sin fuentes al abrir | Abrir la página | El formulario no muestra filas de fuentes y sí el botón "Agregar fuente" | Pasó |
| CP-FO02 | Agregar una fuente | Pulsar "Agregar fuente" | Aparece una fila con nombre y enlace y el foco pasa al nombre | Pasó |
| CP-FO03 | Máximo de fuentes | Agregar 5 fuentes | El botón "Agregar fuente" se desactiva y aparece "Ya agregaste las 5 fuentes permitidas." | Pasó |
| CP-FO04 | Quitar una fuente | Pulsar "Quitar" en una fila | La lista queda con una fila menos y el foco pasa a la siguiente fila (o a "Agregar fuente" si era la última) | Pasó |
| CP-FO05 | Nombre sin enlace | Escribir solo el nombre y pulsar "Publicar" | Aparece "El enlace debe empezar con http:// o https://." y la noticia no se publica | Pasó |
| CP-FO06 | Enlace sin nombre | Escribir solo el enlace y pulsar "Publicar" | Aparece "Escribe el nombre de la fuente." y la noticia no se publica | Pasó |
| CP-FO07 | Enlace con otro protocolo | Escribir un enlace que empieza con ftp:// y pulsar "Publicar" | Aparece el error del enlace y la noticia no se publica | Pasó |
| CP-FO08 | Nombre demasiado largo | Escribir un nombre de 81 caracteres y pulsar "Publicar" | Aparece el error de los 80 caracteres y la noticia no se publica | Pasó |
| CP-FO09 | Fila vacía | Agregar una fuente, dejarla vacía y pulsar "Publicar" | La fila se ignora y la noticia se publica | Pasó |
| CP-FO10 | Publicar con fuentes válidas | Agregar dos fuentes completas con datos válidos y pulsar "Publicar" | La noticia se publica y el formulario queda limpio, sin filas de fuentes | Pasó |
| CP-FO11 | Teclado | Con Tab llegar a "Agregar fuente" y pulsar Enter | Se agrega una fila, el foco pasa a su nombre y el formulario no se envía | Pasó |
| CP-FO12 | Pantalla pequeña | Abrir la página con 375 px y agregar 5 fuentes | No hay desplazamiento horizontal | Pasó |

Resumen: 12 casos ejecutados, todos pasaron. Hasta T-17 las fuentes se capturan y validan, pero todavía no se guardan con la noticia.
