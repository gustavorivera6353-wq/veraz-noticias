import { useState } from "react";
import Header from "./components/Header.jsx";
import NewsList from "./components/NewsList.jsx";
import NewsDetail from "./components/NewsDetail.jsx";
import NewsForm from "./components/NewsForm.jsx";
import noticias from "./data/noticias.json";

// Sprint 1 - HU-01 (consulta de noticias) y HU-02 (publicación de noticias)
// Avance al día 5: listado terminado, vista individual y validaciones en proceso.
// TODO T-04: usar los mismos datos en el formulario y en las pruebas.
export default function App() {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <section>
          <h2>Últimas noticias</h2>
          <NewsList noticias={noticias} onSeleccionar={setSeleccionada} />
        </section>
        <section>
          <h2>Noticia seleccionada</h2>
          <NewsDetail noticia={seleccionada} />
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
