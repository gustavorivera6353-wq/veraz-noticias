# Casos de prueba: flujo de publicación de noticias (HU-02) - T-11

Responsable de QA: Product Owner. Estado: en progreso (25 %). Última actualización: 19/10/2026.
Versión probada: rama `feature/T-10-integracion-listado` (el listado se actualiza al publicar).
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación, con el navegador limpio al inicio de la prueba. CP-P01 a CP-P06 se ejecutaron el 19/10/2026, sin errores en consola.

| ID | Criterio de aceptación | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-P01 | El periodista ve el formulario de publicación | Abrir la página y revisar "Publicar una noticia" | Se ven título, autor, fecha, contenido y el botón "Publicar" | Pasó |
| CP-P02 | No se publica con campos vacíos | Pulsar "Publicar" sin escribir nada | Aparecen 4 mensajes de error y el listado no cambia | Pasó |
| CP-P03 | Validación del título | Escribir un título de 3 letras y pulsar "Publicar" | Aparece "El título debe tener al menos 5 caracteres." | Pasó |
| CP-P04 | Validación de la fecha | Escribir una fecha posterior a hoy y pulsar "Publicar" | Aparece "La fecha no puede ser posterior a hoy." | Pasó |
| CP-P05 | Publicación correcta | Llenar los cuatro campos con datos válidos y pulsar "Publicar" | Aparece "La noticia se guardó correctamente." y los campos quedan vacíos | Pasó |
| CP-P06 | La noticia aparece en el listado sin recargar | Revisar "Últimas noticias" después de publicar | Hay una tarjeta más y la nueva noticia está en la lista | Pasó |
| CP-P07 | La noticia se conserva al recargar | Publicar y recargar la página | La noticia publicada sigue en el listado | Por ejecutar |
| CP-P08 | El lector puede leer la noticia publicada | Pulsar "Leer noticia" en la noticia nueva | Se muestra el contenido completo | Por ejecutar |
| CP-P09 | Error de almacenamiento | Bloquear el almacenamiento del navegador y publicar | Aparece "No se pudo guardar la noticia en este navegador." y el listado no cambia | Por ejecutar |
| CP-P10 | Dos noticias con la misma fecha | Publicar dos noticias seguidas con la misma fecha | Las dos aparecen en el listado | Por ejecutar |

Por hacer: ejecutar CP-P07 a CP-P10 y registrar sus resultados; cualquier falla pasa a T-13 (ver IMP-003).
