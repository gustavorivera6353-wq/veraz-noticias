// T-15: modelo de las fuentes de información de una noticia (HU-04).
// Una fuente es un objeto { nombre, url }. El nombre es obligatorio (hasta
// 80 caracteres) y el enlace debe ser una dirección http o https.
// Una noticia guarda hasta 5 fuentes en su campo "fuentes"; el campo es
// opcional, así que las noticias anteriores siguen siendo válidas.
export const MAX_FUENTES = 5;
export const MAX_NOMBRE_FUENTE = 80;

export function esFuenteValida(fuente) {
  if (!fuente || typeof fuente !== "object") return false;
  const nombre = typeof fuente.nombre === "string" ? fuente.nombre.trim() : "";
  if (nombre.length === 0 || nombre.length > MAX_NOMBRE_FUENTE) return false;
  if (typeof fuente.url !== "string") return false;
  try {
    const { protocol } = new URL(fuente.url.trim());
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

// Devuelve solo las fuentes válidas (con los espacios sobrantes quitados) y
// nunca más de MAX_FUENTES. Si el valor no es una lista, devuelve [].
export function normalizarFuentes(fuentes) {
  if (!Array.isArray(fuentes)) return [];
  return fuentes
    .filter(esFuenteValida)
    .slice(0, MAX_FUENTES)
    .map((f) => ({ nombre: f.nombre.trim(), url: f.url.trim() }));
}
