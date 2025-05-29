import ArticleSection from "./components/BlogSection";
import NosotrosGrid from "./components/NosotrosGrid";
import PreguntasFre from "./components/PreguntasFre";
import ServiciosGrid from "./components/ServiciosGrid";
/* Test */
// import BlogCard from "@/components/blog-card/Blogcard";
// import { articles } from "@/services/articles";

export default function Home(){
  return (
    <>
      <section
        className="relative relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 h-dvh bg-[url('/img/fondo_one.jpg')]"
      >
        {/* Capa oscura para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
        

        {/* Contenido */}
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold sm:text-5xl font-fam-ge">
            Impulsa tu empresa al siguiente nivel
          </h1>
          <p className="mt-6 text-lg font-fam-ge">
            Asesoría empresarial estratégica para ayudarte a tomar decisiones inteligentes, 
            optimizar procesos y lograr un crecimiento sostenible. Más de 10 años acompañando 
            a emprendedores y empresas en su camino al éxito.
          </p>
          <div className="mt-8">
            <a
              href="/Contacto"
              className="inline-block rounded-full bg-[#791137] px-8 py-3 text-white text-lg font-fam-ge font-semibold shadow hover:bg-blue-700 transition"
            >
              Agenda tu consulta gratuita
            </a>
          </div>
        </div>
      </section>
      <ServiciosGrid></ServiciosGrid>
      <NosotrosGrid></NosotrosGrid>
      {/* Sección de artículo prueba 01 */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16 font-fam-ge">
        <h2 className="text-3xl font-bold  mb-10">Conoce más tu empresa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </section> */}
      <ArticleSection></ArticleSection>
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Últimos Artículos</h2>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide">
            {articles.map((article) => (
              <div key={article.id} className="min-w-[300px] max-w-sm flex-shrink-0">
                <BlogCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <PreguntasFre></PreguntasFre>
    </>
  );
}
