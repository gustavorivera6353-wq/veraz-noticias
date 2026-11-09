import { useEffect, useRef } from "react";
import { normalizarFuentes } from "../services/fuentes.js";

// T-03: vista individual de una noticia (terminada)
// Muestra el contenido completo de la noticia elegida, un mensaje cuando no hay
// ninguna seleccionada y un botón para regresar al listado.
// T-12 (en proceso, 67 %): al abrir una noticia (al elegirla o al publicarla) el foco del
// teclado pasa al detalle, para que quien usa teclado o lector de pantalla no tenga que
// buscarlo.
// T-18 (HU-04): si la noticia tiene fuentes, se muestran al final como una lista de enlaces
// que se abren en otra pestaña. Solo se muestran las fuentes válidas.
// T-19 (HU-04): cuando la noticia no tiene fuentes (o todas las guardadas están dañadas) se
// muestra el mensaje "Esta noticia no tiene fuentes registradas." en lugar de la lista.
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

  const fuentes = normalizarFuentes(noticia.fuentes);

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
      {fuentes.length === 0 ? (
        <p className="sin-fuentes">Esta noticia no tiene fuentes registradas.</p>
      ) : (
        <section className="fuentes-noticia" aria-label="Fuentes de la noticia">
          <h4>Fuentes</h4>
          <ul>
            {fuentes.map((f, i) => (
              <li key={i}>
                <a href={f.url} target="_blank" rel="noopener noreferrer">
                  {f.nombre}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
      <button type="button" className="secundario" onClick={onCerrar}>
        Volver al listado
      </button>
    </article>
  );
}
