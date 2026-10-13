// T-03: vista individual de una noticia (en proceso, 50 %)
// Ya muestra los datos de la noticia elegida.
// TODO: mensaje cuando no hay noticia seleccionada y ajustar estilos.
export default function NewsDetail({ noticia }) {
  if (!noticia) {
    return <p>Elige una noticia del listado para leerla completa.</p>;
  }

  return (
    <article className="detalle">
      <h3>{noticia.titulo}</h3>
      <p className="datos">
        {noticia.autor} · {noticia.fecha}
      </p>
      <p>{noticia.contenido}</p>
    </article>
  );
}
