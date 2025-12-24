import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    })

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario Enviado', formData);
        setEnviado(true);

        // Resetear el formulario despues de 4 segundos
        setTimeout(() => {
            setFormData({ nombre: "", email: "", mensaje: "" });
            setEnviado(false);
        }, 4000);
    } 

    return (
        <section id="contacto" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Contacto
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        {enviado ? (
                            <motion.div
                                key="success"
                                className="overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                                    opacity: { duration: 0.25 }
                                }}
                            >
                                <div className="bg-linear-to-br from-green-500 to-emerald-600 text-white p-8 rounded-lg text-center shadow-2xl border border-green-400/30">
                                    <motion.div
                                        className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: 0.2
                                        }}
                                    >
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </motion.div>

                                    <motion.h3
                                        className="text-3xl font-bold mb-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        ¡Mensaje Enviado!
                                    </motion.h3>
                                    <motion.p
                                        className="text-lg text-white/90"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Gracias por contactarme. Te responderé pronto.
                                    </motion.p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                className="overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                                    opacity: { duration: 0.25 }
                                }}
                            >
                                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                                    <div className="mb-6">
                                        <label htmlFor="nombre" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-gray-50 text-gray-900 placeholder-gray-400"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="mensaje" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none bg-gray-50 text-gray-900 placeholder-gray-400"
                                            placeholder="Escribe tu mensaje aquí..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="relative w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            transform: 'translateZ(0)',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden'
                                        }}
                                    >
                                        <span className="relative z-10">Enviar Mensaje</span>
                                        <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-400/30 transition-all duration-300"></div>
                                    </motion.button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;