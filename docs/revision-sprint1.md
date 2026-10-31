# Revisión del incremento del Sprint 1 (T-14) - parcial

Responsables: Scrum Master y Product Owner. Estado: en progreso (75 %). Primera revisión: 22/10/2026. Segunda revisión: 30/10/2026.
Primera revisión (22/10): versión `main` con las ramas de T-12 y T-13 (todavía en Pull Request en borrador) integradas, compilada y probada en Chromium (Playwright). Datos: lote de noticias ficticias (IMP-001, salida B) y almacenamiento temporal en el navegador (IMP-002, opción B).
Sprint Goal: que un periodista publique una noticia (HU-02) y que un lector la consulte (HU-01).

## Lo revisado hoy

| Qué se revisa | Resultado | Evidencia |
|---|---|---|
| HU-01: el lector entra, ve el listado con título, autor, fecha y extracto, abre una noticia y la lee completa | Cumple | CP-01 a CP-14 en `docs/casos-de-prueba-consulta.md` |
| HU-02: el periodista llena el formulario con sus validaciones, publica y recibe una confirmación | Cumple | CP-P01 a CP-P05 en `docs/casos-de-prueba-publicacion.md` |
| Flujo completo: la noticia publicada aparece en el listado sin recargar, queda abierta para leerla y se conserva al recargar | Cumple | CP-P06 a CP-P08, CP-P12 |
| Datos guardados dañados: la página carga y avisa cuántas noticias se omitieron | Cumple tras la corrección de T-13 | CP-P11 (falló el 21/10 y pasó al repetirlo) |
| Uso con teclado: al abrir una noticia el foco pasa al detalle y se puede volver al listado | Cumple | Recorrido con Tab y Enter, 22/10 |
| Pantalla de 375 px sin desplazamiento horizontal | Cumple | CP-11 |

Resultado: el Sprint Goal se cumple en lo esencial.

## Segunda revisión (30/10/2026): `main` con T-12, T-13 y T-15 integradas

Versión revisada: `main` en el commit de la fusión del Pull Request #7, compilada y probada en Chromium (Playwright). Se repitieron los casos de prueba de consulta y publicación con el código final del Sprint 1 y los datos de fuentes de T-15.

| Qué se revisa | Resultado | Evidencia |
|---|---|---|
| HU-01: listado, detalle, volver, listado vacío, 375 px y teclado | Cumple | CP-01 a CP-12 |
| HU-01 con noticias publicadas: orden y consulta | Cumple | CP-13 y CP-14 |
| HU-02: formulario, validaciones, publicación, recarga y error de almacenamiento | Cumple | CP-P01 a CP-P10 |
| Datos guardados dañados y publicación con datos dañados | Cumple | CP-P11, CP-P13, CP-P14 y CP-P15 |
| Noticia publicada a la vista en 375 px y foco al detalle con teclado | Cumple | CP-P12 y recorrido con Tab y Enter |
| Datos de fuentes de T-15 | Cumple | CP-F01 a CP-F12 (`node scripts/verificar-fuentes.mjs`) |
| Página publicada en GitHub Pages | Pendiente | Falta que el Product Owner abra el sitio, publique una noticia de prueba y recargue la página |

Nota sobre CP-07: la ejecución automática falló porque su orden esperado no tenía en cuenta el desempate de T-10 (con la misma fecha va primero la noticia agregada después); el listado de la aplicación es correcto. Se corrigió el orden esperado de la prueba y CP-07 pasó.

## Pendiente

- Verificación en la página publicada (1 h): hacerla con el sitio ya desplegado desde `main`, y cerrar T-14 y su Pull Request.
- Cambiar el guardado temporal en el navegador por la base de datos real y los datos reales del periodista (IMP-001 e IMP-002).
