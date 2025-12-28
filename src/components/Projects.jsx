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
                    tecnologias: ['Node.js', 'Express', 'React', 'PostgreSQL (Supabase)', 'Vercel' ],
                    imageURL: 'https://iaujxobgqsklhlvwpldm.supabase.co/storage/v1/object/public/images/Captura%20de%20pantalla%20Dic%2028%202025.webp',
                    urlProject: 'https://huerta-frontend.vercel.app/bebidas'
                },
                {
                    id: 2,
                    titulo: 'Portafolio Profesional',
                    descripcion: 'Espacio personal diseñado para exhibir trayectoria y habilidades técnicas, con un enfoque en diseño limpio y experiencia de usuario.',
                    tecnologias: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel' ],
                    imageURL: 'https://iaujxobgqsklhlvwpldm.supabase.co/storage/v1/object/public/images/Captura%20de%20pantalla%20Dec%2028%202025.webp',
                    urlProject: 'https://portafolio-ruby-six.vercel.app/'
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {proyectos.map((proyecto) => (
                        <Card
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        tecnologias={proyecto.tecnologias}
                        imagen={proyecto.imageURL}
                        urlProject={proyecto.urlProject}
                        />
                    ))}
                </div>
                )}
            </div>
        </section>
    )
}

export default Projects;