import { useState } from "react";
import Header from "./components/Header.jsx";
import NewsList from "./components/NewsList.jsx";
import NewsDetail from "./components/NewsDetail.jsx";
import NewsForm from "./components/NewsForm.jsx";

import noticias from "./data/noticias.json";

// T-04 (terminado): los datos llegan por el servicio de noticias.
import { obtenerNoticias } from "./services/noticiasService.js"; 

// Sprint 1 - HU-01 (consulta de noticias) y HU-02 (publicación de noticias)
// Avance acumulado: consulta (HU-01) con datos de prueba; publicación (HU-02) en proceso.
export default function App() {
  const [seleccionada, setSeleccionada] = useState(null);
  // T-10 (en proceso, 44 %): el listado vive en el estado para poder refrescarse.
  const [noticias, setNoticias] = useState(obtenerNoticias);
  // TODO T-10: que NewsForm llame a onPublicada() después de guardar la noticia.
  const refrescar = () => setNoticias(obtenerNoticias());

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
          <NewsForm onPublicada={refrescar} />
        </section>
      </main>
      <footer className="pie">Veraz Noticias · Proyecto II · Sprint 1</footer>
    </div>
  );
}
