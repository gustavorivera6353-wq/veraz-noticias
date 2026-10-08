import { useState } from "react";

// T-06: diseño del formulario de publicación (terminado)
// T-07: campos para registrar la noticia (en proceso, 50 %)
// TODO T-08: validaciones básicas del formulario.
// TODO T-09: registrar la noticia (guardarla).
// TODO T-10: que la noticia publicada aparezca en el listado.
export default function NewsForm() {
  const [datos, setDatos] = useState({
    titulo: "",
    autor: "",
    fecha: "",
    contenido: "",
  });

  function cambiar(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  function enviar(e) {
    e.preventDefault();
    // Por ahora solo se muestra en consola; el registro llega con T-09.
    console.log("Noticia capturada:", datos);
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <label>
        Título
        <input name="titulo" value={datos.titulo} onChange={cambiar} />
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
