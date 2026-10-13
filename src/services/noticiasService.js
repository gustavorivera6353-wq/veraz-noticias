// T-04 (en proceso, 50 %): punto único de acceso a los datos de noticias.
// Hoy lee el lote propio de noticias ficticias (salida B de IMP-001) y se
// reemplazará por los datos reales del periodista cuando lleguen.
// Las vistas ya no importan el JSON directamente: solo llaman a este servicio.
import noticiasPrueba from "../data/noticias.json";

export function obtenerNoticias() {
  // Más recientes primero, como se espera en la página principal (HU-01).
  return [...noticiasPrueba].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

// TODO T-04: usar este mismo servicio en el formulario y en las pruebas (T-05).
