import React from "react";

const Contacto: React.FC = () => {
return (
    <>
        <section className="bg-blue-50 py-10 font-fam-ge">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Estamos aquí para ayudarte</h1>
                <p className="text-lg text-gray-700">
                En nuestra empresa, tu satisfacción es nuestra prioridad. Si tienes alguna pregunta,
                comentario o deseas hablar con uno de nuestros expertos, no dudes en escribirnos.
                </p>
            </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Descripción */}
                <div className="font-fam-ge">
                <h2 className="text-5xl font-bold mb-4 text-blue-700">Hablemos</h2>
                <p className="text-lg text-gray-700 mb-6">
                    ¿Tienes preguntas o deseas una asesoría personalizada? Llena el formulario y uno de nuestros especialistas se pondrá en contacto contigo lo antes posible.
                </p>
                <p className="text-gray-600">
                    Estamos comprometidos en brindarte una atención profesional y rápida. Ya sea que necesites orientación empresarial, resolver dudas o simplemente quieras conocernos más, estamos aquí para ti.
                </p>
                </div>

                {/* Formulario */}
                <form
                className="grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Formulario enviado (simulado)");
                }}
                >
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                    </label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                </div>

                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                    </label>
                    <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                </div>

                <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                    </label>
                    <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    />
                </div>

                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                    </label>
                    <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-full w-full hover:bg-blue-700 transition duration-300"
                    >
                    Enviar mensaje
                    </button>
                </div>
                </form>
            </div>
        </section>

    </>
);
};

export default Contacto;
