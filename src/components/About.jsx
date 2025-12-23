import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function About({titulo, descripcion, habilidades}) {

    const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

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
                        onClick={() => setMostrarHabilidades(!mostrarHabilidades)}
                        className="relative px-8 py-3 rounded-lg font-medium text-white bg-transparent border-2 border-blue-500/50 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/40 active:shadow-lg active:shadow-blue-500/45 active:border-blue-400 shadow-md shadow-blue-500/20 overflow-hidden group"
                        style={{
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">{mostrarHabilidades ? 'Ocultar' : 'Ver'} Habilidades</span>
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 group-active:bg-blue-500/20" style={{
                            transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}></div>
                    </motion.button>
                </div>

                <AnimatePresence mode="wait">
                {mostrarHabilidades && (
                    <motion.div
                        className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        >
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            { habilidades.map((habilidad, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-center font-medium border border-blue-400/30"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: index * 0.05,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{ scale: 1.05}}
                                >
                                    {habilidad}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default About;