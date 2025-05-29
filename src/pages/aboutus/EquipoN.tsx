import React from "react";

/* Interface-objeto */
type Equipo ={
    id: number,
    nombreCompleto: string,
    imagen: string,
    profesion: string
}

const equipos_carrera: Equipo[] =[
    {
        id: 1,
        nombreCompleto: "Alan García",
        imagen: "/src/assets/img/fin_two.jpg",
        profesion: "Administración de Empresas"
    },
    {
        id: 2,
        nombreCompleto: "Alan García",
        imagen: "/src/assets/img/fin_two.jpg",
        profesion: "Administración de Empresas"
    },
    {
        id: 3,
        nombreCompleto: "Alan García",
        imagen: "/src/assets/img/fin_two.jpg",
        profesion: "Administración de Empresas"
    },
]

const EquipoN: React.FC = () =>{
    return(
        <>
            <section className="max-w-5xl mx-auto bg-blue">
                <div className="font-fam-ge px-15 mb-15">
                    <h2 className="text-center text-bolder text-3xl">Equipo de Trabajo</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {equipos_carrera.map(({ id, nombreCompleto, imagen, profesion }) => (
                        <div
                            key={id}
                            className="hover:text-[#103778] border-blue-400 hover:bg-[#103778] transition delay-50 duration-300 border-1 hover:text-white transition hover:duration-200 shadow-md p-6 hover:shadow-lg"
                        >
                            <img src={imagen} alt={nombreCompleto} className="w-full h-48 object-cover" />
                            <h3 className="text-xl font-semibold mb-2 font-fam-ge">{nombreCompleto}</h3>
                            <p className="">{profesion}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )

}

export default EquipoN
