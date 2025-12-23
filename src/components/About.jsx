import { useState } from "react";
import { motion } from "motion/react";

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
                        className="bg-blue-600 text-white px-6  py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {mostrarHabilidades ? 'Ocultar' : 'Ver'} Habilidades
                    </motion.button>
                </div>

                {mostrarHabilidades && (
                    <motion.div
                        className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-white/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        >
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            { habilidades.map((habilidad, index) => (
                                <motion.li
                                    key={index}
                                    className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-center font-medium border border-blue-400/30"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05}}
                                >
                                    {habilidad}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default About;