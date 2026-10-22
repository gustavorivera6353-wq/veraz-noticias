# Veraz Noticias

Plataforma web de noticias locales verificadas y con contexto (Proyecto II, Universidad de Guadalajara).

## Estado del Sprint 1 (al 21/10/2026, día 13 de 15)

| Tarea | Descripción | Estado | Evidencia en GitHub |
|---|---|---|---|
| T-01 | Estructura básica de la página de noticias | Completado | Commit inicial en `main` (12/10) |
| T-02 | Componente del listado de noticias | Completado | Commit inicial en `main` (12/10) |
| T-06 | Diseño del formulario de publicación | Completado | Commit inicial en `main` (12/10) |
| T-07 | Campos para registrar la noticia | Completado | Commit inicial en `main` (12/10) |
| T-03 | Vista individual de una noticia | Completado | Commits en `main` (12/10) |
| T-08 | Validaciones básicas del formulario | Completado | Commits en `main` (12/10) |
| T-04 | Integrar datos de prueba con las vistas | Completado, con lote propio de noticias ficticias (IMP-001 mitigado) | Commits en `main` (12/10 y 14/10) |
| T-09 | Registro de la noticia | Completado, guardado temporal en localStorage (IMP-002, opción B) | Commits en `main` (14/10, 16/10 y 17/10) |
| T-05 | Pruebas del flujo de consulta | Completado, CP-01 a CP-14 sin fallas, en `docs/` | Commits en `main` (14/10 a 20/10) |
| T-10 | Integrar la publicación con el listado | Completado, el listado se actualiza al publicar | Commits en `main` (16/10 a 20/10) |
| T-11 | Pruebas del flujo de publicación | Completado, CP-P01 a CP-P12 ejecutados en `docs/`; el fallo de CP-P11 se corrigió en T-13 | Rama `feature/T-11-pruebas-publicacion`, PR |
| T-12 | Integrar el flujo completo de publicación y consulta | En progreso (27 %), la noticia publicada queda abierta y a la vista | Rama `feature/T-12-flujo-completo`, PR en borrador |
| T-13 | Corregir errores encontrados durante las pruebas | En progreso (67 %), la página ya no queda en blanco con datos guardados dañados | Rama `feature/T-13-correcciones`, PR en borrador |

Pendiente: T-14. T-13 se reduce al error de calidad detectado en las pruebas; el resto de correcciones pasa al Sprint 2 (ver IMP-003 en el documento del Product Backlog y Sprint 1).

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente http://localhost:5173).

## Flujo de trabajo

Hasta el 20/10/2026 el avance se integró directo a `main`, con un commit por tarea cuyo mensaje empieza con el ID de la tarea (por ejemplo, `T-10: ...`). Desde el 21/10/2026 cada tarea tiene su rama `feature/T-XX-...`: mientras está "En progreso" su Pull Request está en borrador y cuando queda "Completada" se fusiona a `main`, que actualiza la página publicada.
