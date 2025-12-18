import { useState } from "react";
import { motion } from "motion/react";

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

        // Resetear el formulario despues de 3 segundos
        setTimeout(() => {
            setFormData({ nombre: "", email: "", mensaje: "" });
            setEnviado(false);
        }, 3000);
    } 

    return (
        <section id="contacto" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.h2
                    className="text-4xl font-bold text-center text-white mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{duration: 0.6 }}
                >
                    Contacto
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {enviado ? (
                            <motion.div
                            className="bg-green-500 text-white p-6 rounded-lg text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate= {{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                                <p>Gracias por contactarme. Te responderé pronto.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
                                <div className="mb-6">
                                    <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                                        Nombre
                                    </label>
                                    <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Tu nombre"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                    </label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="tu@email.com"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">
                                    Mensaje
                                    </label>
                                    <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                    />
                                </div>
                                <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        )}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;