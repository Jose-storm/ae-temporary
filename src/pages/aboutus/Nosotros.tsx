import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Asegúrate de tener lucide-react instalado
import EquipoN from "./EquipoN";

const Nosotros: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
    };

return (
    <>
      {/* Sección 1: Introducción */}
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto font-fam-ge">
            <h1 className="text-4xl font-bold text-white mb-4 bg-[#103778] py-2">Sobre Nosotros</h1>
            <p className="text-lg text-gray-700">
                Somos una empresa comprometida con el desarrollo empresarial, brindando soluciones personalizadas que impulsan el crecimiento sostenible de nuestros clientes. Nuestra trayectoria se basa en la confianza, la innovación y el compromiso.
            </p>
            </div>
        </section>

        {/* Sección 2: Misión y Visión con Acordeón */}
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-6 font-fam-ge">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Nuestra Esencia</h2>

            {/* Misión */}
            <div className="border shadow-sm overflow-hidden transition-all">
                <button
                onClick={() => toggleAccordion("mision")}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-white bg-[#103778] hover:bg-blue-400 transition"
                >
                <span>Misión</span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion === "mision" ? "rotate-180" : ""
                    }`}
                />
                </button>
                <div
                    className={`px-6 text-gray-700 bg-white transition-all duration-300 overflow-hidden ${
                        openAccordion === "mision" ? "max-h-40 py-4" : "max-h-0"
                    }`}
                    >
                    Brindar asesoría estratégica y soluciones innovadoras que permitan a las empresas alcanzar sus objetivos, con un enfoque en el desarrollo sostenible y la transformación digital.
                </div>
            </div>

            {/* Visión */}
                <div className="border shadow-sm overflow-hidden transition-all">
                    <button
                    onClick={() => toggleAccordion("vision")}
                    className="w-full flex justify-between items-center px-6 py-4 font-semibold text-white bg-[#103778] hover:bg-blue-400 transition"
                    >
                    <span>Visión</span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                        openAccordion === "vision" ? "rotate-180" : ""
                        }`}
                    />
                    </button>
                    <div
                    className={`px-6 text-gray-700 bg-white transition-all duration-300 overflow-hidden ${
                        openAccordion === "vision" ? "max-h-40 py-4" : "max-h-0"
                    }`}
                    >
                    Ser reconocidos como líderes en consultoría empresarial por nuestra excelencia, innovación y compromiso con el crecimiento de nuestros clientes y la mejora continua.
                    </div>
                </div>
            </div>
        </section>
        <EquipoN></EquipoN>
    </>
);
};

export default Nosotros;
