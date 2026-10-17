import { useState } from "react";
import { guardarNoticia } from "../services/noticiasService.js";

// T-06: diseño del formulario de publicación (terminado)
// T-07: campos para registrar la noticia (terminado)
// T-08: validaciones básicas del formulario (terminado): título, autor, fecha y contenido.
// T-09 (terminado): al validar, la noticia se guarda con el servicio de noticias
// y se muestra una confirmación o el error de almacenamiento.
// TODO T-10: que la noticia publicada aparezca en el listado.
function hoy() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

export default function NewsForm() {
  const [datos, setDatos] = useState({
    titulo: "",
    autor: "",
    fecha: "",
    contenido: "",
  });
  const [errores, setErrores] = useState({});
  const [resultado, setResultado] = useState(null); // { tipo: "ok" | "error", texto }

  function cambiar(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    setResultado(null); // el mensaje de la publicación anterior ya no aplica
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
    return nuevos;
  }

  function enviar(e) {
    e.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;
    try {
      guardarNoticia(datos);
      setDatos({ titulo: "", autor: "", fecha: "", contenido: "" });
      setResultado({ tipo: "ok", texto: "La noticia se guardó correctamente." });
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
