// T-15: comprobación del modelo de fuentes. Se ejecuta con:  node scripts/verificar-fuentes.mjs
import { readFileSync } from "node:fs";
import { esFuenteValida, normalizarFuentes, MAX_FUENTES, MAX_NOMBRE_FUENTE } from "../src/services/fuentes.js";

const noticias = JSON.parse(
  readFileSync(new URL("../src/data/noticias.json", import.meta.url), "utf-8")
);
const buena = { nombre: "Fuente de ejemplo", url: "https://ejemplo.com/nota" };
const casos = [
  ["CP-F01", "Fuente con nombre y enlace https", () => esFuenteValida(buena)],
  ["CP-F02", "Fuente con enlace http", () => esFuenteValida({ ...buena, url: "http://ejemplo.com" })],
  ["CP-F03", "Nombre vacío o solo espacios no es válido", () => !esFuenteValida({ ...buena, nombre: "   " })],
  ["CP-F04", "Nombre de más de 80 caracteres no es válido", () => !esFuenteValida({ ...buena, nombre: "x".repeat(MAX_NOMBRE_FUENTE + 1) })],
  ["CP-F05", "Enlace sin protocolo no es válido", () => !esFuenteValida({ ...buena, url: "ejemplo.com" })],
  ["CP-F06", "Enlace javascript: no es válido", () => !esFuenteValida({ ...buena, url: "javascript:alert(1)" })],
  ["CP-F07", "Valores que no son fuentes (null, texto, sin enlace)", () => !esFuenteValida(null) && !esFuenteValida("texto") && !esFuenteValida({ nombre: "A" })],
  ["CP-F08", "Una lista se limpia: quita espacios y descarta las inválidas", () => {
    const r = normalizarFuentes([{ nombre: " A ", url: " https://x.com " }, { nombre: "", url: "https://y.com" }]);
    return r.length === 1 && r[0].nombre === "A" && r[0].url === "https://x.com";
  }],
  ["CP-F09", "Nunca se devuelven más de 5 fuentes", () =>
    normalizarFuentes(Array.from({ length: 8 }, (_, i) => ({ nombre: `F${i}`, url: `https://x.com/${i}` }))).length === MAX_FUENTES],
  ["CP-F10", "Si no es una lista, el resultado es una lista vacía", () =>
    normalizarFuentes(undefined).length === 0 && normalizarFuentes("x").length === 0 && normalizarFuentes({}).length === 0],
  ["CP-F11", "Las noticias de ejemplo: todas sus fuentes son válidas", () =>
    noticias.every((n) => n.fuentes === undefined || (n.fuentes.length <= MAX_FUENTES && n.fuentes.every(esFuenteValida)))],
  ["CP-F12", "Hay noticias con fuentes y noticias sin fuentes", () =>
    noticias.some((n) => n.fuentes) && noticias.some((n) => !n.fuentes)],
];
let fallos = 0;
for (const [id, nombre, prueba] of casos) {
  const ok = prueba();
  if (!ok) fallos++;
  console.log(`${ok ? "PASÓ " : "FALLÓ"} ${id} ${nombre}`);
}
console.log(`\n${casos.length - fallos} de ${casos.length} casos pasaron.`);
process.exit(fallos ? 1 : 0);
