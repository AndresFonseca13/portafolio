import { motion } from "motion/react";

function Skills(){
    // Estructura de datos organizada por categorías
    const categoriasHabilidades = [
        {
            id: 1,
            nombre: "Mi Fuerte",
            icono: "💪",
            color: "from-blue-400/70 to-blue-500/70",
            colorPill: "from-blue-700/60 to-blue-600/20",
            habilidades: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Git']
        },
        {
            id: 2,
            nombre: "En Crecimiento",
            icono: "🌱",
            color: "from-emerald-400/70 to-emerald-500/70",
            colorPill: "from-emerald-700/60 to-emerald-600/20",
            habilidades: ['React', 'Node.js', 'MongoDB', 'Docker', 'Docker']
        },
        {
            id: 3,
            nombre: "Herramientas & Modernidad",
            icono: "🛠️",
            color: "from-violet-400/70 to-violet-500/70",
            colorPill: "from-violet-500/20 to-violet-600/20",
            habilidades: ['VS Code', 'IntelliJ IDEA', 'Postman', 'GitHub', 'Vercel', 'AI Assisted Coding']
        },
        {
            id: 4,
            nombre: "Idiomas",
            icono: "🌍",
            color: "from-amber-400/70 to-amber-500/70",
            colorPill: "from-amber-500/70 to-amber-600/60",
            habilidades: ['Español (Nativo)', 'Inglés (B1)']
        },
        {
            id: 5,
            nombre: "Soft Skills",
            icono: "🤝",
            color: "from-rose-400/70 to-rose-500/70",
            colorPill: "from-rose-500/70 to-rose-600/50",
            habilidades: ['Trabajo en equipo', 'Resolución de problemas', 'Comunicación efectiva', 'Adaptabilidad', 'Aprendizaje continuo']
        }
    ];

    return (
        <section id="habilidades" className="py-16 bg-transparent">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center text-white mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Mis Habilidades
                </motion.h2>

                <div className="space-y-8">
                    {categoriasHabilidades.map((categoria, index) => (
                        <motion.div
                            key={categoria.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Encabezado de categoría */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{categoria.icono}</span>
                                <h3 className={`text-2xl font-bold bg-linear-to-r ${categoria.color} bg-clip-text text-transparent`}>
                                    {categoria.nombre}
                                </h3>
                            </div>

                            {/* Pills de habilidades */}
                            <div className="flex flex-wrap gap-3">
                                {categoria.habilidades.map((habilidad, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`px-4 py-2 rounded-full bg-linear-to-r ${categoria.colorPill} text-white/90 font-medium text-sm shadow-lg hover:shadow-xl cursor-default transition-all border border-white/5 backdrop-blur-sm`}
                                    >
                                        {habilidad}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
