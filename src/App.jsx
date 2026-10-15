import { useState } from "react";
import Header from "./components/Header.jsx";
import NewsList from "./components/NewsList.jsx";
import NewsDetail from "./components/NewsDetail.jsx";
import NewsForm from "./components/NewsForm.jsx";
// T-04 (terminado): los datos llegan por el servicio de noticias.
import { obtenerNoticias } from "./services/noticiasService.js";

// Sprint 1 - HU-01 (consulta de noticias) y HU-02 (publicación de noticias)
// Avance al día 7: consulta (HU-01) con datos de prueba; publicación (HU-02) en proceso.
export default function App() {
  const [seleccionada, setSeleccionada] = useState(null);
  const noticias = obtenerNoticias();

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
