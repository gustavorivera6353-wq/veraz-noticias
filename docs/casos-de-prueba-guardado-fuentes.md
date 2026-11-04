# Casos de prueba: guardado de las fuentes con la noticia (HU-04) - T-17

Responsable de QA: Product Owner. Estado: terminado (100 %). Última actualización: 03/11/2026.
Versión probada: rama `feature/T-17-guardar-fuentes` compilada. Los casos del modelo de datos (CP-F01 a CP-F12) están en `docs/modelo-fuentes.md` y los del formulario (CP-FO01 a CP-FO12) en `docs/casos-de-prueba-fuentes.md`.
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de la prueba, el 03/11/2026. Los resultados se revisan en el campo `veraz-noticias-publicadas` del almacenamiento del navegador.

| ID | Caso | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-GU01 | Guardar dos fuentes | Publicar una noticia con dos fuentes completas | La noticia guardada tiene sus dos fuentes, con nombre y enlace | Pasó |
| CP-GU02 | Espacios sobrantes | Publicar una fuente con espacios antes y después del nombre y del enlace | Se guardan sin esos espacios | Pasó |
| CP-GU03 | Sin fuentes | Publicar una noticia sin agregar fuentes | La noticia se guarda sin el campo `fuentes` | Pasó |
| CP-GU04 | Fila vacía | Agregar una fila de fuente, dejarla vacía y publicar | La noticia se guarda sin el campo `fuentes` | Pasó |
| CP-GU05 | Máximo de fuentes | Publicar una noticia con 5 fuentes | Se guardan las 5 | Pasó |
| CP-GU06 | Recargar la página | Publicar con fuentes y recargar | Las noticias guardadas, con sus fuentes, se conservan sin cambios | Pasó |
| CP-GU07 | Noticia anterior a HU-04 | Con una noticia guardada sin campo `fuentes`, abrir la página | La noticia aparece en el listado y no se muestra ningún aviso | Pasó |
| CP-GU08 | Publicar junto a una anterior | Publicar una noticia con fuentes cuando ya hay una guardada sin ese campo | La anterior no se modifica y la nueva guarda su fuente | Pasó |

Resumen: 8 casos ejecutados, todos pasaron. Hasta T-17 las fuentes se guardan con la noticia, pero todavía no se muestran al leerla (T-18).
