# Veraz Noticias

Plataforma web de noticias locales verificadas y con contexto (Proyecto II, Universidad de Guadalajara).

## Estado del Sprint 1 (al 19/10/2026, día 11 de 15)

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
| T-05 | Pruebas del flujo de consulta | En progreso (75 %), casos ejecutados en `docs/` | Rama `feature/T-05-pruebas-consulta`, PR abierto (borrador) |
| T-10 | Integrar la publicación con el listado | En progreso (75 %), el listado ya se actualiza al publicar; falta cerrar con las pruebas de T-11 | Rama `feature/T-10-integracion-listado`, PR abierto (borrador) |
| T-11 | Pruebas del flujo de publicación | En progreso (25 %), CP-P01 a CP-P06 ejecutados en `docs/` | Rama `feature/T-11-pruebas-publicacion`, PR abierto (borrador) |

Pendiente: T-12 a T-14. T-13 se reduce al error de calidad detectado en las pruebas; el resto de correcciones pasa al Sprint 2 (ver IMP-003 en el documento del Product Backlog y Sprint 1).

Regla del equipo: una tarea pasa a "En progreso" cuando tiene su rama con commits, y a "Completado" cuando su rama se fusiona a `main`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente http://localhost:5173).

## Flujo de trabajo

Cada tarea tiene su rama `feature/T-XX-...` y se integra a `main` mediante Pull Request.
