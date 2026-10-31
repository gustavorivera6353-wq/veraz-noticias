import { useState } from "react";
import { guardarNoticia } from "../services/noticiasService.js";
import {
  esFuenteValida,
  normalizarFuentes,
  MAX_FUENTES,
  MAX_NOMBRE_FUENTE,
} from "../services/fuentes.js";

// T-06: diseño del formulario de publicación (terminado)
// T-07: campos para registrar la noticia (terminado)
// T-08: validaciones básicas del formulario (terminado): título, autor, fecha y contenido.
// T-09 (terminado): al validar, la noticia se guarda con el servicio de noticias
// y se muestra una confirmación o el error de almacenamiento.
// T-10 (terminado): al guardar, avisa a App con onPublicada para que el listado se actualice.
// T-16 (en proceso, HU-04): campo opcional de fuentes (hasta 5, con nombre y enlace). Las filas
// vacías se ignoran; si una fila tiene datos, se valida. La noticia se guarda con sus fuentes en T-17.
function hoy() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

export default function NewsForm({ onPublicada }) {
  const [datos, setDatos] = useState({
    titulo: "",
    autor: "",
    fecha: "",
    contenido: "",
  });
  const [fuentes, setFuentes] = useState([]); // [{ nombre, url }]
  const [errores, setErrores] = useState({});
  const [resultado, setResultado] = useState(null); // { tipo: "ok" | "error", texto }

  function cambiar(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    setResultado(null); // el mensaje de la publicación anterior ya no aplica
  }

  function cambiarFuente(i, campo, valor) {
    setFuentes(fuentes.map((f, j) => (j === i ? { ...f, [campo]: valor } : f)));
    setResultado(null);
  }

  function agregarFuente() {
    if (fuentes.length < MAX_FUENTES) {
      setFuentes([...fuentes, { nombre: "", url: "" }]);
      setResultado(null);
    }
  }

  function quitarFuente(i) {
    setFuentes(fuentes.filter((_, j) => j !== i));
    setResultado(null);
  }

  // Errores de cada fila de fuentes; una fila totalmente vacía no es un error.
  function validarFuentes() {
    const porFila = {};
    fuentes.forEach((f, i) => {
      const nombre = f.nombre.trim();
      const url = f.url.trim();
      if (nombre === "" && url === "") return;
      const e = {};
      if (nombre === "") {
        e.nombre = "Escribe el nombre de la fuente.";
      } else if (nombre.length > MAX_NOMBRE_FUENTE) {
        e.nombre = `El nombre de la fuente no puede pasar de ${MAX_NOMBRE_FUENTE} caracteres.`;
      }
      if (!esFuenteValida({ nombre: "x", url })) {
        e.url = "El enlace debe empezar con http:// o https://.";
      }
      if (Object.keys(e).length > 0) porFila[i] = e;
    });
    return porFila;
  }

  function validar() {
    const nuevos = {};
    if (datos.titulo.trim().length < 5) {
      nuevos.titulo = "El título debe tener al menos 5 caracteres.";
    }
    if (datos.autor.trim().length < 3) {
      nuevos.autor = "Escribe el nombre del autor (mínimo 3 caracteres).";
    }
    if (!datos.fecha) {
      nuevos.fecha = "Selecciona la fecha de la noticia.";
    } else if (datos.fecha > hoy()) {
      nuevos.fecha = "La fecha no puede ser posterior a hoy.";
    }
    if (datos.contenido.trim().length < 30) {
      nuevos.contenido = "El contenido debe tener al menos 30 caracteres.";
    }
    const deFuentes = validarFuentes();
    if (Object.keys(deFuentes).length > 0) nuevos.fuentes = deFuentes;
    return nuevos;
  }

  function enviar(e) {
    e.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;
    try {
      const noticia = guardarNoticia({ ...datos, fuentes: normalizarFuentes(fuentes) });
      setDatos({ titulo: "", autor: "", fecha: "", contenido: "" });
      setFuentes([]);
      setResultado({ tipo: "ok", texto: "La noticia se guardó correctamente." });
      onPublicada?.(noticia);
    } catch (err) {
      setResultado({ tipo: "error", texto: err.message });
    }
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <label>
        Título
        <input
          name="titulo"
          value={datos.titulo}
          onChange={cambiar}
          aria-invalid={Boolean(errores.titulo)}
        />
        {errores.titulo && <span className="error">{errores.titulo}</span>}
      </label>

      <label>
        Autor
        <input
          name="autor"
          value={datos.autor}
          onChange={cambiar}
          aria-invalid={Boolean(errores.autor)}
        />
        {errores.autor && <span className="error">{errores.autor}</span>}
      </label>

      <label>
        Fecha
        <input
          type="date"
          name="fecha"
          value={datos.fecha}
          onChange={cambiar}
          aria-invalid={Boolean(errores.fecha)}
        />
        {errores.fecha && <span className="error">{errores.fecha}</span>}
      </label>

      <label>
        Contenido
        <textarea
          name="contenido"
          rows="5"
          value={datos.contenido}
          onChange={cambiar}
          aria-invalid={Boolean(errores.contenido)}
        />
        {errores.contenido && (
          <span className="error">{errores.contenido}</span>
        )}
      </label>

      <fieldset className="fuentes">
        <legend>Fuentes de información (opcional, hasta {MAX_FUENTES})</legend>
        {fuentes.map((f, i) => (
          <div className="fuente" key={i}>
            <label>
              Nombre de la fuente {i + 1}
              <input
                name={`fuente-nombre-${i}`}
                value={f.nombre}
                onChange={(e) => cambiarFuente(i, "nombre", e.target.value)}
                aria-invalid={Boolean(errores.fuentes?.[i]?.nombre)}
              />
              {errores.fuentes?.[i]?.nombre && (
                <span className="error">{errores.fuentes[i].nombre}</span>
              )}
            </label>
            <label>
              Enlace de la fuente {i + 1}
              <input
                name={`fuente-url-${i}`}
                inputMode="url"
                placeholder="https://"
                value={f.url}
                onChange={(e) => cambiarFuente(i, "url", e.target.value)}
                aria-invalid={Boolean(errores.fuentes?.[i]?.url)}
              />
              {errores.fuentes?.[i]?.url && (
                <span className="error">{errores.fuentes[i].url}</span>
              )}
            </label>
            <button
              type="button"
              className="secundario"
              onClick={() => quitarFuente(i)}
              aria-label={`Quitar la fuente ${i + 1}`}
            >
              Quitar
            </button>
          </div>
        ))}
        <button
          type="button"
          className="secundario"
          onClick={agregarFuente}
          disabled={fuentes.length >= MAX_FUENTES}
        >
          Agregar fuente
        </button>
        {fuentes.length >= MAX_FUENTES && (
          <span className="ayuda">Ya agregaste las {MAX_FUENTES} fuentes permitidas.</span>
        )}
      </fieldset>

      <button type="submit">Publicar</button>
      {resultado && (
        <p
          role={resultado.tipo === "ok" ? "status" : "alert"}
          className={resultado.tipo === "ok" ? "exito" : "error"}
        >
          {resultado.texto}
        </p>
      )}
    </form>
  );
}
