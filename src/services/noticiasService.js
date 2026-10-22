// T-04 (terminado): punto único de acceso a los datos de noticias.
// Hoy lee el lote propio de noticias ficticias (salida B de IMP-001) y se
// reemplazará por los datos reales del periodista cuando lleguen.
// Las vistas no importan el JSON directamente: solo llaman a este servicio.
import noticiasPrueba from "../data/noticias.json";

export function obtenerNoticias() {
  // T-10 (terminado): incluye las noticias publicadas desde el formulario.
  // Más recientes primero, como se espera en la página principal (HU-01).
  // Si dos noticias tienen la misma fecha, va primero la que se agregó después.
  return [...noticiasPrueba, ...obtenerNoticiasGuardadas()].sort(
    (a, b) => b.fecha.localeCompare(a.fecha) || b.id - a.id
  );
}

export function obtenerNoticiaPorId(id) {
  return obtenerNoticias().find((n) => n.id === id) ?? null;
}

// T-09 (terminado): registro de la noticia. Decisión de IMP-002 (opción B):
// guardado temporal en el navegador (localStorage), reemplazable después por la
// base de datos sin cambiar las vistas, porque todo pasa por este servicio.
const CLAVE = "veraz-noticias-publicadas";

// T-13 (en proceso, 67 %): error de calidad detectado en T-11 (CP-P11). Si los datos
// guardados en el navegador estaban dañados o incompletos, la página quedaba en blanco.
// Ahora se descartan las noticias que no son válidas y se cuenta cuántas fueron,
// para avisarlo en pantalla. Los datos del navegador no se borran al leerlos.
let descartadas = 0;

function esNoticiaValida(n) {
  return (
    n !== null &&
    typeof n === "object" &&
    ["titulo", "autor", "contenido"].every(
      (k) => typeof n[k] === "string" && n[k].trim() !== ""
    ) &&
    typeof n.fecha === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(n.fecha) &&
    Number.isFinite(n.id)
  );
}

function leerGuardadas() {
  descartadas = 0;
  let datos;
  try {
    datos = JSON.parse(localStorage.getItem(CLAVE)) ?? [];
  } catch {
    descartadas = 1; // el contenido guardado no se puede leer
    return [];
  }
  if (!Array.isArray(datos)) {
    descartadas = 1;
    return [];
  }
  const validas = datos.filter(esNoticiaValida);
  descartadas = datos.length - validas.length;
  return validas;
}

// Cuántas noticias guardadas se omitieron en la última lectura.
export function obtenerDescartadas() {
  return descartadas;
}

export function guardarNoticia(datos) {
  // Al publicar se conservan solo las noticias válidas (las dañadas ya se habían omitido).
  const guardadas = leerGuardadas();
  const id = Date.now(); // id único suficiente para el almacenamiento temporal
  const noticia = {
    id,
    titulo: datos.titulo.trim(),
    autor: datos.autor.trim(),
    fecha: datos.fecha,
    contenido: datos.contenido.trim(),
  };
  try {
    localStorage.setItem(CLAVE, JSON.stringify([...guardadas, noticia]));
  } catch {
    // Almacenamiento lleno o bloqueado por el navegador (por ejemplo, modo privado).
    throw new Error("No se pudo guardar la noticia en este navegador.");
  }
  return noticia;
}

export function obtenerNoticiasGuardadas() {
  return leerGuardadas();
}

// Las pruebas del flujo de publicación se hacen en T-11.
// T-10 (terminado): el listado se actualiza al publicar (lo hace App al recibir onPublicada del formulario).
