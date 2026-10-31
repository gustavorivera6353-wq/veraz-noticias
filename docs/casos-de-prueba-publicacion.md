# Casos de prueba: flujo de publicación de noticias (HU-02) - T-11

Responsable de QA: Product Owner. Estado: terminado (100 %). Última actualización: 21/10/2026.
Versión probada: CP-P01 a CP-P10 sobre el flujo de publicación con T-10 integrada; CP-P11 y CP-P12 el 21/10/2026 sobre la versión con T-12 (flujo completo) y, después, con la corrección de T-13; CP-P13 a CP-P15 el 28/10/2026 con T-12 y T-13 integradas.
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de la prueba. CP-P01 a CP-P06 el 19/10/2026, CP-P07 a CP-P10 el 20/10/2026 y CP-P11 y CP-P12 el 21/10/2026 y CP-P13 a CP-P15 el 28/10/2026.

| ID | Criterio de aceptación | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-P01 | El periodista ve el formulario de publicación | Abrir la página y revisar "Publicar una noticia" | Se ven título, autor, fecha, contenido y el botón "Publicar" | Pasó |
| CP-P02 | No se publica con campos vacíos | Pulsar "Publicar" sin escribir nada | Aparecen 4 mensajes de error y el listado no cambia | Pasó |
| CP-P03 | Validación del título | Escribir un título de 3 letras y pulsar "Publicar" | Aparece "El título debe tener al menos 5 caracteres." | Pasó |
| CP-P04 | Validación de la fecha | Escribir una fecha posterior a hoy y pulsar "Publicar" | Aparece "La fecha no puede ser posterior a hoy." | Pasó |
| CP-P05 | Publicación correcta | Llenar los cuatro campos con datos válidos y pulsar "Publicar" | Aparece "La noticia se guardó correctamente." y los campos quedan vacíos | Pasó |
| CP-P06 | La noticia aparece en el listado sin recargar | Revisar "Últimas noticias" después de publicar | Hay una tarjeta más y la nueva noticia está en la lista | Pasó |
| CP-P07 | La noticia se conserva al recargar | Publicar y recargar la página | La noticia publicada sigue en el listado | Pasó |
| CP-P08 | El lector puede leer la noticia publicada | Pulsar "Leer noticia" en la noticia nueva | Se muestra el contenido completo | Pasó |
| CP-P09 | Error de almacenamiento | Bloquear el almacenamiento del navegador y publicar | Aparece "No se pudo guardar la noticia en este navegador." y el listado no cambia | Pasó |
| CP-P10 | Dos noticias con la misma fecha | Publicar dos noticias seguidas con la misma fecha | Las dos aparecen en el listado, la última publicada primero | Pasó |
| CP-P11 | Datos guardados dañados | Guardar en el navegador una noticia incompleta (sin fecha) y recargar la página | La página carga las noticias de prueba y avisa cuántas noticias guardadas se omitieron | Falló el 21/10 (página en blanco, error en consola); corregido en T-13 y Pasó al repetirlo el mismo día |
| CP-P12 | La noticia publicada queda a la vista | En una pantalla de 375 px, publicar una noticia | La noticia aparece abierta en "Noticia seleccionada" y la página baja hasta ella | Pasó |
| CP-P13 | Noticias válidas y dañadas mezcladas | Guardar en el navegador una noticia válida y dos incompletas (sin fecha) y recargar la página | Se ven las 10 noticias de prueba y la válida (11 tarjetas) y un aviso que dice que se omitieron 2 | Pasó |
| CP-P14 | Publicar con noticias dañadas guardadas | Con los datos del caso anterior, publicar una noticia válida | La noticia aparece (12 tarjetas), el aviso de 2 omitidas sigue visible y las noticias dañadas no se borran del navegador | Falló el 28/10 (al publicar se borraban las dañadas y el aviso desaparecía sin decir nada); corregido en T-13 y Pasó al repetirlo |
| CP-P15 | Contenido guardado ilegible | Guardar en el navegador un texto que no es JSON, recargar y publicar una noticia | La página carga con un aviso y la noticia se publica (11 tarjetas) | Pasó |

Resumen: 15 casos ejecutados. Los dos fallos (CP-P11 y CP-P14) se corrigieron en T-13 (ver IMP-003) y se volvieron a probar. Queda pendiente repetir la ejecución completa en T-14.
