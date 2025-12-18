import { motion } from 'motion/react'

function Hero({nombre, titulo, descripcion}) {
    return (
        <section id="inicio" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <motion.h1 
                    className="text-5xl md:text-6xl font-bold mb-4"
                    initial= {{ opacity: 0, y: -50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut"}}
                    >
                        {nombre}
                    </motion.h1>
                <motion.h2 
                    className="text-2xl md:text-3xl mb-6 text-blue-100"
                    initial= {{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut"}}
                    >
                        {titulo}
                    </motion.h2>
                <motion.p 
                    className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
                    initial = {{ opacity: 0, y: -20 }}
                    animate = {{  opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut"}}
                    >
                        {descripcion}
                    </motion.p>
            </div>
        </section>
    )
}

export default Hero;