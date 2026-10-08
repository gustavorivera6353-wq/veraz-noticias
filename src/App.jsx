import Header from "./components/Header.jsx";
import NewsList from "./components/NewsList.jsx";
import NewsForm from "./components/NewsForm.jsx";

// Sprint 1 - HU-01 (consulta de noticias) y HU-02 (publicación de noticias)
// Avance al día 3: estructura y listado en proceso, formulario con campos básicos.
export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <section>
          <h2>Últimas noticias</h2>
          <NewsList />
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
