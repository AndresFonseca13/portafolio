import { useState, useEffect } from "react";
import Card from "./Card";

function Projects() {
    const [proyectos, setProyectos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        //Simular llamado a API
        console.log('Cargando Proyectos...')

        setTimeout(() => {
            const proyectosSimulados = [
                {
                    id: 1, 
                    titulo: 'Menu Digital',
                    descripcion: 'Plataforma de gestión integral para restaurantes que digitaliza la experiencia del cliente y gestiona lo que el cliente ve.',
                    tecnologias: ['Node.js', 'Express', 'React', 'PostgreSQL (Supabase)', 'Vercel' ]
                },
                {
                    id: 2,
                    titulo: 'Portafolio Profesional',
                    descripcion: 'Espacio personal diseñado para exhibir trayectoria y habilidades técnicas, con un enfoque en diseño limpio y experiencia de usuario.',
                    tecnologias: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel' ]
                }
            ]

            setProyectos(proyectosSimulados)
            setCargando(false)
            console.log('Proyectos cargados!')
        }, 2000)
    }, []) //Array Vacio se ejecuta solo una vez

    return (
        <section id="proyectos" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    Mis Proyectos
                </h2>

                {cargando ? (
                    <div className="text-center">
                    <p className="text-xl text-gray-700">Cargando Proyectos...</p>
                    </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proyectos.map((proyecto) => (
                        <Card
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        tecnologias={proyecto.tecnologias}
                        />
                    ))}
                </div>
                )}
            </div>
        </section>
    )
}

export default Projects;