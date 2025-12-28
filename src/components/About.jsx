import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function About({titulo, descripcion}) {

    const [mostrarTimeline, setMostrarTimeline] = useState(false);

    // Datos de experiencia y educación
    const timeline = [
        {
            id: 1,
            tipo: "experiencia", // "experiencia" o "educacion"
            titulo: "Desarrollador Full Stack",
            organizacion: "Practica Universitaria - Ucompensar",
            periodo: "Mayo-2025 - Noviembre-2025",
            descripcion: "Desarrollo de un menu digital para un establecimiento de comida, utilizando tecnologías como React, Node.js y PostgreSQL."
        },
        {
            id: 2,
            tipo: "educacion",
            titulo: "Ingeniería de Software",
            organizacion: "Fundacion Universitaria Compensar",
            periodo: "2023 - Presente",
            descripcion: "Estudiante de Ingeniería de Sistemas, actualmente en el 6º semestre."
        },
        {
            id: 3,
            tipo: "experiencia",
            titulo: "Desarrollador Junior",
            organizacion: "Intellsys",
            periodo: "2023 - 2024",
            descripcion: "Pasantía en desarrollo de aplicaciones web y parte investigativa para empresa de minas Canadiense, enfocada en la renderizacion de archivos de nubes de puntos en la web."
        },
        {
            id: 4,
            tipo: "educacion",
            titulo: "Oracle Next Education - Curso de Java y Spring Boot",
            organizacion: "Alura - Oracle",
            periodo: "2023",
            descripcion: "Formación intensiva en desarrollo backend con Java y Spring Boot."
        },
        {
            id: 5,
            tipo: "experiencia",
            titulo: "Practicante de Desarrollo de Software",
            organizacion: "Sena Centro de Servicios Financieros",
            periodo: "2022 - 2023 (6 meses)",
            descripcion: "Participacion en la creacion y desarrollo de aplicativos internos para la institucion. Haciendo parte del equipo de investigacion de Inteligencia Artificial para la traduccion del lenguaje de señas con el uso de tecnologias como Python y TensorFlow."
        },
        {
            id: 6,
            tipo: "educacion",
            titulo: "Tecnico en Programación en Programación de Software.",
            organizacion: "SENA",
            periodo: "2022 - 2023",
            descripcion: "Formación técnica en fundamentos de programación y desarrollo de software."
        }
    ];

    return (
        <section id="sobre-mi" className="py-16 bg-transparent">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2 
                    className="text-4xl font-bold text-center text-white mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    >
                    {titulo}
                </motion.h2>

                <motion.p 
                    className="text-lg text-gray-300 text-center mb-8"
                    initial={{ opacity: 0, y:20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    >
                    {descripcion}
                </motion.p>

                <div className="text-center">
                    <motion.button
                        onClick={() => setMostrarTimeline(!mostrarTimeline)}
                        className="relative px-8 py-3 rounded-lg font-medium text-white bg-transparent border-2 border-blue-500/50 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/40 active:shadow-lg active:shadow-blue-500/45 active:border-blue-400 shadow-md shadow-blue-500/20 overflow-hidden group"
                        style={{
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">{mostrarTimeline ? 'Ocultar' : 'Ver'} Mi Recorrido</span>
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 group-active:bg-blue-500/20" style={{
                            transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}></div>
                    </motion.button>
                </div>

                <AnimatePresence initial={false}>
                {mostrarTimeline && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.25, ease: "easeInOut" }
                        }}
                    >
                        <div className="mt-8 relative">
                            {/* Línea vertical de la timeline */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

                            {/* Items de la timeline */}
                            <div className="space-y-8">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="relative pl-20"
                                    >
                                        {/* Icono del item */}
                                        <div className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg ${
                                            item.tipo === 'experiencia'
                                                ? 'bg-linear-to-br from-blue-500 to-blue-600 border-2 border-blue-400/50'
                                                : 'bg-linear-to-br from-purple-500 to-purple-600 border-2 border-purple-400/50'
                                        }`}>
                                            {item.tipo === 'experiencia' ? '💼' : '🎓'}
                                        </div>

                                        {/* Contenido del item */}
                                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                                                <h3 className="text-xl font-bold text-white">{item.titulo}</h3>
                                                <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 inline-block w-fit ${
                                                    item.tipo === 'experiencia'
                                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                                                        : 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
                                                }`}>
                                                    {item.periodo}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 font-medium mb-2">{item.organizacion}</p>
                                            <p className="text-gray-300 text-sm leading-relaxed">{item.descripcion}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default About;