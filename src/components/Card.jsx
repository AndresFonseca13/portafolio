import  { motion } from 'motion/react'

function Card({ titulo, descripcion, tecnologias, imagen}){
    return (
        <motion.div 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
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
            <h3 className="text-xl font-bold text-gray-800 mb-3">{titulo}</h3>
            <p className="text-gray-600 mb-4">{descripcion}</p>

            {tecnologias && tecnologias.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tecnologias.map((tech, index) => (
                        <motion.span 
                            key={index} 
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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