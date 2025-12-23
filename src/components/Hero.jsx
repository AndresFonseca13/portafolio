import { motion } from 'motion/react'

function Hero({descripcion}) {
    return (
        <section id="inicio" className="bg-transparent text-white py-20 md:py-32 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Columna de texto */}
                    <div className="text-left">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                            initial= {{ opacity: 0, y: -50 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut"}}
                            >
                                Welcome.
                            </motion.h1>
                        <motion.div
                            className="space-y-4"
                            initial= {{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut"}}
                            >
                                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                    {descripcion}
                                </p>
                            </motion.div>
                    </div>

                    {/* Columna de imagen */}
                    <motion.div
                        className="flex justify-center md:justify-end relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                        <img
                            src="/laptop.png"
                            alt="Laptop con código"
                            className="w-full max-w-md md:max-w-lg drop-shadow-2xl relative z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;