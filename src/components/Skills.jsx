import Card from "./Card";

function Skills(){
    const habilidades = [
        { 
            id: 1,
            titulo: 'Backend',
            descripcion: 'Desarrollo de APIs RESTful robustas y escalables',
            tecnologias: ['Java', 'Spring Boot', 'Node.js', 'Express']
        },
        {
            id: 2,
            titulo: 'Bases de Datos',
            descripcion: 'Diseño y optimización de bases de datos',
            tecnologias: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
        },
        {
            id: 3,
            titulo: 'Frontend',
            descripcion: 'Creación de interfaces modernas e interactivas',
            tecnologias: ['React', 'JavaScript', 'HTML', 'CSS']
        },
        {
            id: 4,
            titulo: 'DevOps',
            descripcion: 'Despliegue y gestión de aplicaciones',
            tecnologias: ['Git', 'Docker', 'Linux', 'CI/CD']
        }
    ]

    return (
        <section id="habilidades" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Mis habilidades
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {habilidades.map((habilidad) => (
                        <Card
                        key={habilidad.id}
                        titulo={habilidad.titulo}
                        descripcion={habilidad.descripcion}
                        tecnologias={habilidad.tecnologias}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skills;