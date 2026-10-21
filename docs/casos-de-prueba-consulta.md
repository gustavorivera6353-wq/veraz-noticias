# Casos de prueba: flujo de consulta de noticias (HU-01) - T-05

Responsable de QA: Product Owner. Estado: terminado (100 %). Última actualización: 20/10/2026.
Datos: lote de noticias ficticias de `src/data/noticias.json` (IMP-001, salida B).
Versión probada: rama `feature/T-04-integracion-datos` (commit "T-04: crear servicio de noticias...").
Ejecución: Chromium (Playwright) sobre la compilación de la aplicación (CP-01 a CP-09 el 14/10/2026; CP-10 a CP-12 el 16/10/2026; CP-13 y CP-14 el 20/10/2026). Sin errores en consola.

| ID | Criterio de aceptación | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-01 | El lector puede acceder a la página principal | Abrir la dirección de `npm run dev` | Se muestra el encabezado "Veraz Noticias" | Pasó |
| CP-02 | El lector puede visualizar un listado de noticias | Revisar la sección "Últimas noticias" | Aparecen las 10 noticias, la más reciente primero | Pasó |
| CP-03 | Cada noticia muestra información básica | Revisar cada tarjeta del listado | Se ven título, autor, fecha y un extracto | Pasó |
| CP-04 | El lector puede seleccionar una noticia | Pulsar "Leer noticia" en una tarjeta | La tarjeta se resalta y aparece en "Noticia seleccionada" | Pasó |
| CP-05 | El lector puede consultar el contenido completo | Revisar la noticia seleccionada | Se muestra el contenido completo | Pasó |
| CP-06 | Regresar al listado | Pulsar "Volver al listado" | Vuelve el mensaje "Elige una noticia del listado..." | Pasó |
| CP-07 | Cambiar de noticia | Seleccionar una noticia y luego otra | Solo queda resaltada y visible la última elegida | Pasó |
| CP-08 | Uso con teclado | Enfocar "Leer noticia" y pulsar Enter | La noticia se abre igual que con el ratón | Pasó |
| CP-09 | Fecha legible | Abrir una noticia | La fecha aparece con el mes escrito (por ejemplo, "octubre") | Pasó |
| CP-10 | Listado vacío | Quitar todas las noticias de los datos | Aparece "Aún no hay noticias publicadas." | Pasó |
| CP-11 | Pantalla pequeña | Abrir la página con un ancho de 375 px | No hay desplazamiento horizontal | Pasó |
| CP-12 | Orden de teclado | Pulsar Tab al abrir la página | El primer foco llega a un botón "Leer noticia" | Pasó |
| CP-13 | Orden con noticias publicadas | Publicar una noticia con fecha intermedia y revisar el listado | Las 11 noticias quedan ordenadas de la más reciente a la más antigua | Pasó |
| CP-14 | Consultar una noticia publicada | Leer la noticia publicada y pulsar "Volver al listado" | Se muestra su contenido completo y al volver aparece el mensaje "Elige una noticia del listado..." | Pasó |

Las pruebas del flujo de publicación están en `docs/casos-de-prueba-publicacion.md` (T-11).
