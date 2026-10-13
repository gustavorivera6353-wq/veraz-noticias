// T-03: vista individual de una noticia (terminada)
// Muestra el contenido completo de la noticia elegida, un mensaje cuando no hay
// ninguna seleccionada y un botón para regresar al listado.
export default function NewsDetail({ noticia, onCerrar }) {
  if (!noticia) {
    return (
      <p className="vacio">
        Elige una noticia del listado para leerla completa.
      </p>
    );
  }

  const fecha = new Date(`${noticia.fecha}T00:00:00`).toLocaleDateString(
    "es-MX",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="detalle" aria-live="polite">
      <h3>{noticia.titulo}</h3>
      <p className="datos">
        {noticia.autor} · {fecha}
      </p>
      <p>{noticia.contenido}</p>
      <button type="button" className="secundario" onClick={onCerrar}>
        Volver al listado
      </button>
    </article>
  );
}
