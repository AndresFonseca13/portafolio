import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Header({ logo, menuItems }) {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    }

    //Mapeo de items a IDs de secciones
    const menuLinks = {
        'Inicio': '#inicio',
        'Sobre mí': '#sobre-mi',
        'Proyectos': '#proyectos',
        'Habilidades': '#habilidades',
        'Contacto': '#contacto'
    }

    const handleClick = (item) => {
        const link = menuLinks[item]
        if(link){
            document.querySelector(link)?.scrollIntoView({
                behavior: 'smooth'
            })
            // Cerrar el menu despues de un pequeño delay
            setTimeout(() => {
                setMenuAbierto(false);
            }, 300);
        }
    }
    return (
        <header className="bg-[#0a0e27]/95 backdrop-blur-sm text-white shadow-2xl sticky top-0 z-50 border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{ logo }</h1>
                {/* Boton hamburguesa mejorado */}
                <button
                    onClick={ toggleMenu }
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all z-[1000] relative"
                    aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            className="w-full h-0.5 bg-white rounded-full"
                            animate={menuAbierto ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white rounded-full"
                            animate={menuAbierto ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-full h-0.5 bg-white rounded-full"
                            animate={menuAbierto ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </button>
                {/* Menu desktop (siempre visible) */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {menuItems.map((item, index) => (
                            <motion.li
                            key={index}
                            onClick={() => handleClick(item)}
                            className="hover:text-blue-400 cursor-pointer transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale:0.95 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                </div>
            </div>
            {/* Menú móvil (animado) */}
            <AnimatePresence>
                {menuAbierto && (
                    <>
                    {/* Backdrop oscuro */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-[998]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenuAbierto(false)}
                    />

                    {/* Panel del menú */}
                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 200
                         }}
                        className="fixed top-0 right-0 bottom-0 w-72 bg-[#0a0e27] md:hidden z-[999] shadow-2xl border-l border-blue-500/50"
                        style={{
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                        }}
                    >
                        {/* Header del menú */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center flex-shrink-0">
                            <h2 className="text-xl font-bold text-white">Menú</h2>
                            <button
                                onClick={() => setMenuAbierto(false)}
                                className="p-2 rounded-lg hover:bg-white/10 transition-all"
                                aria-label="Cerrar menú"
                            >
                            </button>
                        </div>

                        {/* Items del menú */}
                        <div className="flex-1 p-4 flex flex-col justify-start gap-4 bg-[#0a0e27] border-l-2 border-blue-500/50">
                        {menuItems.map((item, index) => (
                            <motion.div
                            key={`menu-${index}`}
                            onClick={() => handleClick(item)}
                            className="hover:bg-white/10 cursor-pointer transition-all px-4 py-3 rounded-lg text-white text-lg font-medium"
                            whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            whileTap={{ scale: 0.98 }}
                            >
                            {item}
                            </motion.div>
                        ))}
                        </div>
                    </motion.nav>
                </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header;