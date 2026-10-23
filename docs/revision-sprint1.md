# Revisión del incremento del Sprint 1 (T-14) - parcial

Responsables: Scrum Master y Product Owner. Estado: en progreso (50 %). Fecha: 22/10/2026.
Versión revisada: `main` con las ramas de T-12 y T-13 (todavía en Pull Request en borrador) integradas, compilada y probada en Chromium (Playwright). Datos: lote de noticias ficticias (IMP-001, salida B) y almacenamiento temporal en el navegador (IMP-002, opción B).
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

## Pendiente (pasa al Sprint 2)

- Revisión del flujo completo por el Product Owner (resto de T-12, 2 h): recorrido en un celular real y en otros navegadores, y en la página publicada en GitHub Pages.
- Correcciones que detecte esa revisión (resto de T-13, 1 h).
- Terminar T-14 con esa revisión (2 h).
- Cambiar el guardado temporal en el navegador por la base de datos real y los datos reales del periodista (IMP-001 e IMP-002).
