import { motion } from 'motion/react'
import { useState } from 'react'

function Hero({descripcion}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
    }

    return (
        <section
            id="inicio"
            className="bg-transparent text-white py-20 md:py-32 min-h-screen flex items-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Spotlight effect que sigue al mouse - cubre todo el Hero */}
            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.35) 0%, transparent 70%)`,
                        mixBlendMode: 'screen',
                        transition: 'background 0.1s ease-out'
                    }}
                />
            )}

            <div className="container mx-auto px-4 relative z-20">
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
                        {/* Glow effect de fondo - pulsa constantemente */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                className="w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>

                        {/* Laptop con animación de flotación */}
                        <motion.img
                            src="/laptop.png"
                            alt="Laptop con código"
                            className="w-full max-w-md md:max-w-lg drop-shadow-2xl relative z-10"
                            animate={{
                                y: [0, -15, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                transform: 'translateZ(0)',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;