# Casos de prueba: flujo de consulta de noticias (HU-01) - T-05

Responsable de QA: Product Owner. Estado: borrador (25 %). Fecha: 13/10/2026.
Datos: lote de noticias ficticias de `src/data/noticias.json` (IMP-001, salida B).

| ID | Criterio de aceptación | Pasos | Resultado esperado | Resultado |
|---|---|---|---|---|
| CP-01 | El lector puede acceder a la página principal | Abrir la dirección de `npm run dev` | Se muestra el encabezado "Veraz Noticias" | Pendiente |
| CP-02 | El lector puede visualizar un listado de noticias | Revisar la sección "Últimas noticias" | Aparecen las 10 noticias, la más reciente primero | Pendiente |
| CP-03 | Cada noticia muestra información básica | Revisar una tarjeta del listado | Se ven título, autor, fecha y un extracto | Pendiente |
| CP-04 | El lector puede seleccionar una noticia | Pulsar "Leer noticia" en una tarjeta | La tarjeta se resalta y aparece en "Noticia seleccionada" | Pendiente |
| CP-05 | El lector puede consultar el contenido completo | Revisar la noticia seleccionada | Se muestra el contenido completo con fecha legible | Pendiente |
| CP-06 | Regresar al listado | Pulsar "Volver al listado" | Vuelve el mensaje "Elige una noticia del listado..." | Pendiente |

Por redactar: casos de borde (listado vacío, noticias con el mismo día) y la ejecución completa de las pruebas.
