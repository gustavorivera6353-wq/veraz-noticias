// T-02: componente del listado de noticias (terminado)
// Recibe las noticias por props y avisa cuando el lector elige una.
export default function NewsList({ noticias, onSeleccionar }) {
  return (
    <ul className="lista">
      {noticias.map((n) => (
        <li key={n.id} className="noticia">
          <h3>{n.titulo}</h3>
          <p className="datos">
            {n.autor} · {n.fecha}
          </p>
          <p>{n.contenido.slice(0, 90)}...</p>
          <button type="button" onClick={() => onSeleccionar(n)}>
            Leer noticia
          </button>
        </li>
      ))}
    </ul>
  );
}
