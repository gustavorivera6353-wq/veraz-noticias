# Revisión del incremento del Sprint 2 (T-21)

Responsables: Scrum Master y Product Owner. Estado: en progreso (67 %, 2 h de 3 h). Revisión técnica: 11/11/2026.
Versión revisada: `main` con T-12 a T-19 integradas más la rama de T-20, compilada y probada en Chromium (Playwright). Datos: las 10 noticias de ejemplo, con el navegador limpio al inicio de cada prueba.
Meta del Sprint 2: que el lector pueda consultar las fuentes de cada noticia y el periodista registrarlas al publicar, y cerrar lo pendiente del incremento del Sprint 1.

## Criterios de aceptación de HU-04

| Criterio | Resultado | Evidencia |
|---|---|---|
| El periodista puede registrar las fuentes de una noticia al publicarla | Cumple | CP-FO01 a CP-FO12 (`docs/casos-de-prueba-fuentes.md`), CP-GU01 a CP-GU08 y CP-FL01 a CP-FL06 |
| El lector puede identificar las fuentes asociadas a una noticia | Cumple | CP-FD01, CP-FL01 y CP-FL08: la lectura muestra el bloque "Fuentes" |
| Las fuentes se muestran junto con la información correspondiente | Cumple | CP-FD01: la lista de fuentes aparece al final de la noticia, después del contenido |
| El lector puede consultar la información de cada fuente (nombre y enlace) | Cumple | CP-FD01 y CP-FD02: cada fuente muestra su nombre como enlace que se abre en otra pestaña |

Casos de borde cubiertos: noticias sin fuentes (mensaje), fuentes dañadas en los datos guardados, enlaces inválidos, máximo de cinco fuentes, pantalla de 375 px y uso con teclado.

## Lo revisado hoy

| Qué se revisa | Resultado | Evidencia |
|---|---|---|
| Flujo completo de fuentes: publicar con fuentes y consultarlas | Cumple | CP-FL01 a CP-FL11 repetidos el 11/11: 11 de 11 |
| Modelo de datos de las fuentes | Cumple | `node scripts/verificar-fuentes.mjs`: 12 de 12 |
| HU-01: listado, tarjetas, lectura completa, foco al detalle y volver | Cumple | Revisión de regresión, comprobaciones R01 a R04 |
| HU-02: validaciones, confirmación, publicada en el listado y conservada al recargar | Cumple | Revisión de regresión, comprobaciones R05 a R08 |
| Datos guardados dañados y 375 px | Cumple | Revisión de regresión, comprobaciones R09 y R10 |
| Errores en la consola del navegador | Sin errores | Ninguno durante las pruebas |

Nota sobre la regresión: las series completas de HU-01 y HU-02 (CP-01 a CP-14 y CP-P01 a CP-P15) se ejecutaron por última vez el 30/10/2026. Desde entonces cambiaron el formulario, el servicio y la lectura (T-15 a T-19), por lo que hoy se repitió una selección de 10 comprobaciones de HU-01 y HU-02 sobre el código actual y todas pasaron. Si se quiere volver a correr las series completas, se puede hacer en el Sprint 3.

## Resultado de las tareas del Sprint 2

| Tarea | Estado | Evidencia |
|---|---|---|
| T-12, T-13 y T-14 (pendientes del Sprint 1) | Completadas | `docs/revision-flujo-T-12.md`, `docs/revision-sprint1.md` |
| T-15 a T-19 (fuentes: modelo, formulario, guardado, lectura y mensaje sin fuentes) | Completadas | Pull Requests #7, #9, #10, #11 y #12 |
| T-20 (pruebas del flujo) | Completada | `docs/casos-de-prueba-flujo-fuentes.md` |
| T-21 (esta revisión) | En progreso | Falta comprobar la página publicada |

## Pendiente para cerrar T-21

1. El Product Owner abre https://gustavorivera6353-wq.github.io/veraz-noticias/ con la versión de `main` ya desplegada, publica una noticia de prueba con una fuente y comprueba que se ve en la lectura.
2. Con eso se cierra T-21 (la hora que falta) y HU-04 pasa a Completada en el Product Backlog.
3. Los remanentes que queden se registran en la Sprint Review del 13/11/2026.

## Defectos encontrados

Ninguno en esta revisión.
