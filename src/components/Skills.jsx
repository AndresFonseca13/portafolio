import { motion } from "motion/react";

function Skills(){
    // Estructura de datos organizada por categorías
    const categoriasHabilidades = [
        {
            id: 1,
            nombre: "Mi Fuerte",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: "from-blue-400/70 to-blue-500/70",
            colorPill: "from-blue-700/60 to-blue-600/20",
            habilidades: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Git']
        },
        {
            id: 2,
            nombre: "En Crecimiento",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M12 3v4" />
                </svg>
            ),
            color: "from-emerald-400/70 to-emerald-500/70",
            colorPill: "from-emerald-700/60 to-emerald-600/20",
            habilidades: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker']
        },
        {
            id: 3,
            nombre: "Herramientas & Modernidad",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "from-violet-400/70 to-violet-500/70",
            colorPill: "from-violet-500/20 to-violet-600/20",
            habilidades: ['VS Code', 'IntelliJ IDEA', 'Postman', 'GitHub', 'Vercel', 'AI Assisted Coding']
        },
        {
            id: 4,
            nombre: "Idiomas",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            ),
            color: "from-amber-400/70 to-amber-500/70",
            colorPill: "from-amber-500/70 to-amber-600/60",
            habilidades: ['Español (Nativo)', 'Inglés (B1)']
        },
        {
            id: 5,
            nombre: "Soft Skills",
            icono: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
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
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-br ${categoria.color} shadow-lg`}>
                                    {categoria.icono}
                                </div>
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
