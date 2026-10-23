# Veraz Noticias

Plataforma web de noticias locales verificadas y con contexto (Proyecto II, Universidad de Guadalajara).

## Estado del Sprint 1 (al 22/10/2026, día 14 de 15)

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
| T-11 | Pruebas del flujo de publicación | Completado, CP-P01 a CP-P12 ejecutados en `docs/`; el fallo de CP-P11 se corrigió en T-13 | Rama `feature/T-11-pruebas-publicacion`, PR #1 fusionado a `main` |
| T-12 | Integrar el flujo completo de publicación y consulta | En progreso (67 %), al abrir una noticia el foco pasa al detalle; falta la revisión del flujo completo | Rama `feature/T-12-flujo-completo`, PR en borrador |
| T-13 | Corregir errores encontrados durante las pruebas | En progreso (67 %), la página ya no queda en blanco con datos guardados dañados | Rama `feature/T-13-correcciones`, PR en borrador |
| T-14 | Revisión final del incremento del Sprint | En progreso (50 %), revisión parcial en `docs/revision-sprint1.md` | Rama `feature/T-14-revision-final`, PR |

Pendiente al cierre del Sprint: el resto de T-12 (2 h), de T-13 (1 h) y de T-14 (2 h) pasa al Sprint 2 (ver el documento del Product Backlog y Sprint 1).

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente http://localhost:5173).

## Flujo de trabajo

Hasta el 20/10/2026 el avance se integró directo a `main`, con un commit por tarea cuyo mensaje empieza con el ID de la tarea (por ejemplo, `T-10: ...`). Desde el 21/10/2026 cada tarea tiene su rama `feature/T-XX-...`: mientras está "En progreso" su Pull Request está en borrador y cuando queda "Completada" se fusiona a `main`, que actualiza la página publicada.
