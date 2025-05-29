import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Pregunta = {
    id: string;
    pregunta: string;
    respuesta: string;
};

const faqs: Pregunta[] = [
    {
        id: "faq1",
        pregunta: "¿Qué tipos de asesoría ofrecen?",
        respuesta:
        "Ofrecemos asesoría estratégica, financiera, legal y tributaria para empresas.",
    },
    {
        id: "faq2",
        pregunta: "¿Cómo puedo agendar una consulta?",
        respuesta:
        "Puedes llenar el formulario en la página de contacto y te responderemos en menos de 24 horas.",
    },
    {
        id: "faq3",
        pregunta: "¿Trabajan con empresas pequeñas?",
        respuesta:
        "Sí, ayudamos desde emprendedores hasta grandes corporaciones.",
    },
];

const PreguntasFre: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
};

return (
    <>
    <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 font-fam-ge text-[#791137]"><i className="fa-solid fa-question rotate-170"></i> Preguntas Frecuentes <i className="fa-solid fa-question rotate-20"></i></h2>
        <div className="space-y-4 font-fam-ge">
            {faqs.map(({ id, pregunta, respuesta }) => (
                <div
                key={id}
                className="border shadow-sm overflow-hidden transition-all"
                >
                <button
                    onClick={() => toggleAccordion(id)}
                    className="text-base w-full flex justify-between items-center px-6 py-3.5 font-semibold text-gray-800 bg-[#fecb64] hover:bg-blue-200 transition"
                    >
                    <span>{pregunta}</span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                            openId === id ? "rotate-180" : ""
                        }`}
                        />
                </button>
                <div
                className={`px-6 text-gray-700 bg-white transition-all duration-300 overflow-hidden ${
                    openId === id ? "max-h-40 py-4" : "max-h-0"
                }`}
                >
                    {respuesta}
                </div>
            </div>
            ))}
        </div>
        {/* <div className="h-100 bg-red-100">
</div> */}
    </section>
    <section className="max-w-7xl mx-auto px-10 py-12 bg-[#791137] mb-20 mt-10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white font-fam-ge shadow-lg">
        <div className="text-center lg:text-left space-y-3">
            <h2 className="text-3xl lg:text-4xl font-bold">¿Tienes más preguntas?</h2>
            <p className="text-xl lg:text-2xl">
                Te responderemos en la menor brevedad posible por nuestro canales de red. ¡Consulta Gratis!
            </p>
        </div>

        <a
            href="/Contacto"
            className="bg-white text-[#791137] font-semibold text-lg rounded-full px-15 py-4 transition hover:bg-gray-100 hover:scale-105 shadow-md"
        >
            Contáctanos
        </a>
    </section>

</>

);
};

export default PreguntasFre;
