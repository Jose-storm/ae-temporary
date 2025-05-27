import React from "react";

type Servicio = {
    id: number;
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
};

const servicios: Servicio[] = [
    {
        id: 1,
        titulo: "Consultoría Estratégica",
        descripcion: "Análisis y desarrollo de estrategias para mejorar tu negocio.",
        icono: (
        <svg
            className="w-10 h-10 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 114 0v6m-4 0h4"></path>
        </svg>
        ),
    },
    {
        id: 2,
        titulo: "Asesoría Financiera",
        descripcion: "Optimiza tus finanzas para un crecimiento sostenible.",
        icono: (
        <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m6-6h4M2 12h4"></path>
        </svg>
        ),
    },
    {
        id: 3,
        titulo: "Marketing Digital",
        descripcion: "Impulsa tu presencia online y alcanza a más clientes.",
        icono: (
        <svg
            className="w-10 h-10 text-pink-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M7 16h10"></path>
        </svg>
        ),
    },
    {
        id: 4,
        titulo: "Asesoría Tributaria",
        descripcion: "Asegurate de cumplir con la ley y optimizar tu carga impositiva.",
        icono: (
        <svg
            className="w-10 h-10 text-pink-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M7 16h10"></path>
        </svg>
        ),
    },
];

const ServiciosGrid: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center font-fam-ge">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicios.map(({ id, titulo, descripcion, icono }) => (
            <div
                key={id}
                className="hover:text-[#103778] border-blue-400 hover:bg-[#103778] transition delay-50 duration-300 border-1 rounded-lg hover:text-white transition hover:duration-200 shadow-md p-6 hover:shadow-lg"
            >
                <div className="mb-4">{icono}</div>
                <h3 className="text-xl font-semibold mb-2 font-fam-ge">{titulo}</h3>
                <p className="text-gray-600">{descripcion}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default ServiciosGrid;
