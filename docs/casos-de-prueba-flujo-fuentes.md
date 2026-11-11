# Casos de prueba del flujo completo de fuentes (HU-04) - T-20

Responsable de QA: Product Owner. Estado: terminado (100 %). Última actualización: 10/11/2026.
Alcance: el flujo completo de punta a punta, es decir, publicar una noticia con fuentes desde el formulario y consultarla después en el listado y en la lectura. Los casos por componente están en `docs/casos-de-prueba-fuentes.md` (formulario, CP-FO), `docs/casos-de-prueba-guardado-fuentes.md` (guardado, CP-GU) y `docs/casos-de-prueba-fuentes-detalle.md` (lectura, CP-FD).
Versión probada: rama `feature/T-20-pruebas-flujo-fuentes` compilada, que incluye T-16 a T-19.
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de cada prueba, el 10/11/2026.

| ID | Caso | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-FL01 | Publicar con dos fuentes | Llenar el formulario, agregar dos fuentes completas y publicar | Aparece "La noticia se guardó correctamente." y la lectura muestra la noticia con sus dos fuentes, en orden y con su enlace | Pasó |
| CP-FL02 | Cinco fuentes | Agregar cinco fuentes y publicar | El botón "Agregar fuente" se deshabilita al llegar a cinco y la lectura muestra las cinco | Pasó |
| CP-FL03 | Sin fuentes | Publicar una noticia sin fuentes | La lectura muestra "Esta noticia no tiene fuentes registradas." y no muestra la lista | Pasó |
| CP-FL04 | Fuente sin enlace | Agregar una fuente solo con nombre y publicar | Aparece el error del enlace y la noticia no se guarda | Pasó |
| CP-FL05 | Enlace inválido | Escribir un enlace con `javascript:` y otro sin `http://` ni `https://` | Ambos se rechazan con el error del enlace y no se guarda nada | Pasó |
| CP-FL06 | Corregir y publicar | Después de un error, escribir un enlace válido y publicar | La noticia se guarda y la lectura muestra la fuente corregida | Pasó |
| CP-FL07 | Recargar la página | Publicar con fuentes, recargar y abrir la noticia | Las fuentes siguen apareciendo | Pasó |
| CP-FL08 | Noticias de ejemplo | Abrir las 10 noticias de ejemplo | Las 6 que tienen fuentes las muestran tal como están en los datos, y las 4 que no tienen muestran el mensaje | Pasó |
| CP-FL09 | Quitar una fuente | Agregar tres fuentes, quitar la segunda y publicar | Solo se guardan y se muestran la primera y la tercera | Pasó |
| CP-FL10 | Orden del listado | Publicar varias noticias y volver al listado | La última publicada aparece primero y las noticias de ejemplo siguen intactas | Pasó |
| CP-FL11 | Pantalla de 375 px | Repetir el flujo con una fuente de nombre y enlace largos en 375 px | El flujo funciona y no hay desplazamiento horizontal | Pasó |

Resumen: 11 casos ejecutados, todos pasaron, sin errores en la consola del navegador. Además se repitió la verificación del modelo de fuentes (12 de 12) y los casos de T-16 a T-19.
Observación: no se encontraron defectos en este flujo.
