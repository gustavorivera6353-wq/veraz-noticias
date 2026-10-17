// T-04 (terminado): punto único de acceso a los datos de noticias.
// Hoy lee el lote propio de noticias ficticias (salida B de IMP-001) y se
// reemplazará por los datos reales del periodista cuando lleguen.
// Las vistas no importan el JSON directamente: solo llaman a este servicio.
import noticiasPrueba from "../data/noticias.json";

export function obtenerNoticias() {
  // Más recientes primero, como se espera en la página principal (HU-01).
  return [...noticiasPrueba].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function obtenerNoticiaPorId(id) {
  return obtenerNoticias().find((n) => n.id === id) ?? null;
}

// T-09 (en proceso, 75 %): registro de la noticia. Decisión de IMP-002 (opción B):
// guardado temporal en el navegador (localStorage), reemplazable después por la
// base de datos sin cambiar las vistas, porque todo pasa por este servicio.
const CLAVE = "veraz-noticias-publicadas";

function leerGuardadas() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
  } catch {
    return [];
  }
}

export function guardarNoticia(datos) {
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

// TODO T-09: pruebas del registro (flujo de publicación, T-11).
// TODO T-10: que obtenerNoticias() incluya las guardadas y el listado se actualice.
