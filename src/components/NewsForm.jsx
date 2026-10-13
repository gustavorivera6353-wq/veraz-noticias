import { useState } from "react";

// T-06: diseño del formulario de publicación (terminado)
// T-07: campos para registrar la noticia (terminado)
// T-08: validaciones básicas (en proceso, 25 %): por ahora solo el título.
// TODO T-08: validar autor, fecha y contenido.
// TODO T-09: registrar la noticia (guardarla).
// TODO T-10: que la noticia publicada aparezca en el listado.
export default function NewsForm() {
  const [datos, setDatos] = useState({
    titulo: "",
    autor: "",
    fecha: "",
    contenido: "",
  });
  const [errores, setErrores] = useState({});

  function cambiar(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  function validar() {
    const nuevos = {};
    if (datos.titulo.trim().length < 5) {
      nuevos.titulo = "El título debe tener al menos 5 caracteres.";
    }
    return nuevos;
  }

  function enviar(e) {
    e.preventDefault();
    const nuevos = validar();
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) return;
    // Por ahora solo se muestra en consola; el registro llega con T-09.
    console.log("Noticia capturada:", datos);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <label>
        Título
        <input name="titulo" value={datos.titulo} onChange={cambiar} />
        {errores.titulo && <span className="error">{errores.titulo}</span>}
      </label>

      <label>
        Autor
        <input name="autor" value={datos.autor} onChange={cambiar} />
      </label>

      <label>
        Fecha
        <input
          type="date"
          name="fecha"
          value={datos.fecha}
          onChange={cambiar}
        />
      </label>

      <label>
        Contenido
        <textarea
          name="contenido"
          rows="5"
          value={datos.contenido}
          onChange={cambiar}
        />
      </label>

      <button type="submit">Publicar</button>
    </form>
  );
}
