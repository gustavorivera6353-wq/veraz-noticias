# Veraz Noticias

Plataforma web de noticias locales verificadas y con contexto (Proyecto II, Universidad de Guadalajara).

## Estado del Sprint 1 (al 20/10/2026, día 12 de 15)

| Tarea | Descripción | Estado | Evidencia en GitHub |
|---|---|---|---|
| T-01 | Estructura básica de la página de noticias | Completado | Commit inicial del repositorio |
| T-02 | Componente del listado de noticias | Completado | Commit inicial del repositorio |
| T-06 | Diseño del formulario de publicación | Completado | Commit inicial del repositorio |
| T-07 | Campos para registrar la noticia | Completado | Commit inicial del repositorio |
| T-03 | Vista individual de una noticia | Completado (12/10) | Rama `feature/T-03-vista-individual`, PR fusionado a `main` |
| T-08 | Validaciones básicas del formulario | Completado (12/10) | Rama `feature/T-08-validaciones`, PR fusionado a `main` |
| T-04 | Integrar datos de prueba con las vistas | Completado (13/10), con lote propio de noticias ficticias (IMP-001 mitigado) | Rama `feature/T-04-integracion-datos`, PR fusionado a `main` |
| T-09 | Registro de la noticia | Completado (16/10), guardado temporal en localStorage (IMP-002, opción B) | Rama `feature/T-09-registro-noticia`, PR fusionado a `main` |
| T-05 | Pruebas del flujo de consulta | Completado (20/10), CP-01 a CP-14 sin fallas, en `docs/` | Rama `feature/T-05-pruebas-consulta`, PR fusionado a `main` |
| T-10 | Integrar la publicación con el listado | Completado (20/10): el listado se actualiza al publicar | Rama `feature/T-10-integracion-listado`, PR fusionado a `main` |
| T-11 | Pruebas del flujo de publicación | En progreso (75 %), CP-P01 a CP-P10 ejecutados en `docs/`; falta la ejecución final con T-12 | Rama `feature/T-11-pruebas-publicacion`, PR abierto (borrador) |
| T-12 | Integrar el flujo completo de publicación y consulta | En progreso (13 %), la noticia publicada queda abierta para leerla | Rama `feature/T-12-flujo-completo`, PR abierto (borrador) |

Pendiente: T-13 y T-14. T-13 se reduce al error de calidad detectado en las pruebas; el resto de correcciones pasa al Sprint 2 (ver IMP-003 en el documento del Product Backlog y Sprint 1).

Regla del equipo: una tarea pasa a "En progreso" cuando tiene su rama con commits, y a "Completado" cuando su rama se fusiona a `main`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente http://localhost:5173).

## Flujo de trabajo

Cada tarea tiene su rama `feature/T-XX-...` y se integra a `main` mediante Pull Request.
