import { motion } from 'motion/react'

function Card({ titulo, descripcion, tecnologias, imagen, urlProject, darkMode = false}){
    const handleClick = () => {
        if (urlProject) {
            window.open(urlProject, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            className={`rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                darkMode
                    ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40'
                    : 'bg-white border border-gray-200'
            } ${urlProject ? 'cursor-pointer' : ''}`}
            initial={{ opacity:0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px"}}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10}}
            >
            {imagen && (
                <div className="relative w-full h-48 overflow-hidden bg-gray-100 group">
                    <motion.img
                        src={imagen}
                        alt={titulo}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    {urlProject && (
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                            <span className="text-white font-semibold text-base px-6 py-2 border-2 border-white/80 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all">
                                Ver Proyecto →
                            </span>
                        </div>
                    )}
                </div>
            )}
            <div className="p-6">
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
            </div>
        </motion.div>
    )
}

export default Card;