# Veraz Noticias

Plataforma web de noticias locales verificadas y con contexto (Proyecto II, Universidad de Guadalajara).

## Estado del Sprint 1 (al 12/10/2026, día 6 de 15)

| Tarea | Descripción | Estado | Evidencia en GitHub |
|---|---|---|---|
| T-01 | Estructura básica de la página de noticias | Completado | Commit inicial del repositorio |
| T-02 | Componente del listado de noticias | Completado | Commit inicial del repositorio |
| T-06 | Diseño del formulario de publicación | Completado | Commit inicial del repositorio |
| T-07 | Campos para registrar la noticia | Completado | Commit inicial del repositorio |
| T-03 | Vista individual de una noticia | Completado (12/10) | Rama `feature/T-03-vista-individual`, PR fusionado a `main` |
| T-08 | Validaciones básicas del formulario | Completado (12/10) | Rama `feature/T-08-validaciones`, PR fusionado a `main` |
| T-04 | Integrar datos de prueba con las vistas | En progreso (50 %), con lote propio de noticias ficticias (IMP-001 mitigado) | Rama `feature/T-04-integracion-datos`, PR abierto (borrador) |

Pendiente: T-05, T-09 a T-14. T-09 está en espera de la decisión sobre IMP-002 (dónde se guardan las noticias publicadas).

Regla del equipo: una tarea pasa a "En progreso" cuando tiene su rama con commits, y a "Completado" cuando su rama se fusiona a `main`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Después abre la dirección que muestre la terminal (normalmente http://localhost:5173).

## Flujo de trabajo

Cada tarea tiene su rama `feature/T-XX-...` y se integra a `main` mediante Pull Request.
