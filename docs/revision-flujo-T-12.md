# Revisión del flujo completo de publicación y consulta (T-12)

Responsable: Product Owner. Fecha: 27/10/2026. Estado: terminada (100 %).
Versión revisada: rama `feature/T-12-flujo-completo` compilada (`npm run build` y `npm run preview`). Datos: lote de noticias ficticias (IMP-001, salida B) y almacenamiento temporal en el navegador (IMP-002, opción B).

## Resultado de la revisión

| Qué se revisa | Resultado | Evidencia |
|---|---|---|
| El periodista llena el formulario, publica y recibe la confirmación; las validaciones bloquean los datos incorrectos | Cumple | CP-P01 a CP-P05 y CP-P09 |
| La noticia publicada aparece al inicio del listado sin recargar y queda abierta para leerla | Cumple | CP-P06, CP-P08 y CP-13 |
| Después de recargar la página la noticia publicada se conserva | Cumple | CP-P07 |
| Con teclado: al abrir o publicar una noticia el foco pasa al detalle; Tab lleva a "Volver al listado" | Cumple | Recorrido con Tab y Enter, 27/10 |
| Pantalla de 375 px: el detalle de la noticia publicada se ve sin desplazamiento horizontal | Cumple | CP-11 |
| Recorrido completo en un celular y en otro navegador (Firefox) | Cumple | Revisión manual del Product Owner |
| Datos guardados dañados (CP-P11) | No cumple solo con esta rama: el listado queda vacío | Se corrige en T-13 (Pull Request en borrador); se vuelve a revisar al integrarla |

## Conclusión

El flujo de publicación y consulta funciona de punta a punta, así que T-12 se da por terminada y su Pull Request se fusiona a `main`. El único hallazgo (datos guardados dañados) ya tiene su corrección en T-13, que sigue en borrador porque falta revisarla con T-12 integrada.

Nota: la revisión se hizo sobre la compilación local. La verificación en la página publicada (GitHub Pages, que se despliega desde `main`) queda para T-14.

Corrección del 28/10/2026: la nota original decía que todavía no había página publicada, pero el sitio se despliega desde el 10/10. También se corrigió qué casos de prueba respaldan cada fila de la tabla.
