import  { motion } from 'motion/react'

function Card({ titulo, descripcion, tecnologias, imagen, darkMode = false}){
    return (
        <motion.div
            className={`rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 ${
                darkMode
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40'
                    : 'bg-white border border-gray-200'
            }`}
            initial={{ opacity:0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px"}}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10}}
            >
            {imagen && (
                <img
                    src={imagen}
                    alt={titulo}
                />
            )}
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {titulo}
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {descripcion}
            </p>

            {tecnologias && tecnologias.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tecnologias.map((tech, index) => (
                        <motion.span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                darkMode
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                                    : 'bg-blue-100 text-blue-800'
                            }`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true}}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default Card;