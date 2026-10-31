# Modelo de las fuentes de información (T-15, HU-04)

Estado: terminado (100 %) el 28/10/2026.

Cada noticia puede tener un campo `fuentes`: una lista de hasta 5 objetos con esta forma.

```json
{ "nombre": "Dirección de Movilidad (fuente ficticia)", "url": "https://ejemplo.com/movilidad/ciclovia" }
```

| Campo | Regla |
|---|---|
| `nombre` | Obligatorio, sin contar espacios sobrantes; hasta 80 caracteres |
| `url` | Obligatorio; debe ser una dirección `http` o `https` (se rechaza, por ejemplo, `javascript:`) |

- El campo `fuentes` es opcional: las noticias sin fuentes (las anteriores y las publicadas antes de HU-04) siguen siendo válidas.
- `src/services/fuentes.js` es el único lugar donde se define la regla (`esFuenteValida`, `normalizarFuentes`, `MAX_FUENTES`, `MAX_NOMBRE_FUENTE`). El formulario (T-16), el servicio (T-17) y la vista (T-18 y T-19) usarán estas funciones en lugar de repetir las reglas.
- Las noticias de ejemplo de `src/data/noticias.json` tienen fuentes ficticias en 6 de las 10; las otras 4 no tienen, para probar el mensaje de "sin fuentes" (T-19).

Comprobación: `node scripts/verificar-fuentes.mjs` (12 casos, CP-F01 a CP-F12). Resultado del 28/10/2026: 12 de 12 pasaron. Las pruebas de publicación y consulta existentes (CP-P01 a CP-P10 y CP-13) se repitieron con los datos nuevos y siguen pasando.
