// T-02: componente del listado de noticias (en proceso, 50 %)
// TODO T-04: reemplazar este arreglo por el lote de datos de prueba cuando
//            se resuelva IMP-001 (datos del periodista colaborador).
// TODO T-03: vista individual de una noticia (aún no iniciada).
const noticiasTemporales = [
  {
    id: 1,
    titulo: "Noticia de prueba 1",
    autor: "Autor de prueba",
    fecha: "2026-10-05",
    contenido: "Texto de ejemplo para revisar cómo se ve el listado.",
  },
  {
    id: 2,
    titulo: "Noticia de prueba 2",
    autor: "Autor de prueba",
    fecha: "2026-10-06",
    contenido: "Segundo texto de ejemplo para el listado de noticias.",
  },
  {
    id: 3,
    titulo: "Noticia de prueba 3",
    autor: "Autor de prueba",
    fecha: "2026-10-07",
    contenido: "Tercer texto de ejemplo para el listado de noticias.",
  },
];

export default function NewsList() {
  return (
    <ul className="lista">
      {noticiasTemporales.map((n) => (
        <li key={n.id} className="noticia">
          <h3>{n.titulo}</h3>
          <p className="datos">
            {n.autor} · {n.fecha}
          </p>
          <p>{n.contenido}</p>
        </li>
      ))}
    </ul>
  );
}
