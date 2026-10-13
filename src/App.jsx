import { useState } from "react";
import Header from "./components/Header.jsx";
import NewsList from "./components/NewsList.jsx";
import NewsDetail from "./components/NewsDetail.jsx";
import NewsForm from "./components/NewsForm.jsx";
// T-04 (en proceso, 25 %): lote propio de noticias ficticias (salida B de IMP-001).
// Se reemplazará por los datos reales del periodista cuando lleguen.
import noticias from "./data/noticias.json";

// Sprint 1 - HU-01 (consulta de noticias) y HU-02 (publicación de noticias)
// Avance al día 6: listado y vista individual terminados; validaciones en proceso.
// TODO T-04: usar los mismos datos en el formulario y en las pruebas.
export default function App() {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <section>
          <h2>Últimas noticias</h2>
          <NewsList
            noticias={noticias}
            seleccionadaId={seleccionada?.id}
            onSeleccionar={setSeleccionada}
          />
        </section>
        <section>
          <h2>Noticia seleccionada</h2>
          <NewsDetail
            noticia={seleccionada}
            onCerrar={() => setSeleccionada(null)}
          />
        </section>
        <section>
          <h2>Publicar una noticia</h2>
          <NewsForm />
        </section>
      </main>
      <footer className="pie">Veraz Noticias · Proyecto II · Sprint 1</footer>
    </div>
  );
}
