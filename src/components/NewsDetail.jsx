import { useEffect, useRef } from "react";

// T-03: vista individual de una noticia (terminada)
// Muestra el contenido completo de la noticia elegida, un mensaje cuando no hay
// ninguna seleccionada y un botón para regresar al listado.
// T-12 (en proceso, 67 %): al abrir una noticia (al elegirla o al publicarla) el foco del
// teclado pasa al detalle, para que quien usa teclado o lector de pantalla no tenga que
// buscarlo.
export default function NewsDetail({ noticia, onCerrar }) {
  const detalleRef = useRef(null);
  useEffect(() => {
    detalleRef.current?.focus({ preventScroll: true });
  }, [noticia?.id]);

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
    <article
      className="detalle"
      aria-live="polite"
      tabIndex={-1}
      ref={detalleRef}
    >
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
