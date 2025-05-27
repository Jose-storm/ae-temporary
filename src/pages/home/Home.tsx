import NosotrosGrid from "./components/NosotrosGrid";
import ServiciosGrid from "./components/ServiciosGrid";

export default function Home(){
  return (
    <>
      <section
        className="relative relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-6 lg:px-8 h-dvh bg-[url('/fondo_one.jpg')]"
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
    </>
  );
}
