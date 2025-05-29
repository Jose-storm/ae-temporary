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
        titulo: "Asesoría Laboral",
        descripcion: "Análisis y desarrollo de estrategias para mejorar tu negocio.",
        icono: "🧑‍💻"
    },
    {
        id: 2,
        titulo: "Asesoría Financiera",
        descripcion: "Optimiza tus finanzas para un crecimiento sostenible.",
        icono: "🧑‍🏫"
    },
    {
        id: 3,
        titulo: "Contabilidad",
        descripcion: "Gestiona de manera eficiente el área de contabilidad para tu sostenibilidad a largo plazo",
        icono: "🧑‍🔬"
    },
    {
        id: 4,
        titulo: "Asesoría Tributaria",
        descripcion: "Asegurate de cumplir con la ley y optimizar tu carga impositiva.",
        icono: "🧑‍💼"
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
                <div className="mb-4 text-5xl">{icono}</div>
                <h3 className="text-xl font-semibold mb-2 font-fam-ge">{titulo}</h3>
                <p className="">{descripcion}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default ServiciosGrid;
