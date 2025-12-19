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
        <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{ logo }</h1>
                {/* Boton hamburguesa mejorado */}
                <button 
                    onClick={ toggleMenu }
                    className="md:hidden bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2 z-50 relative"
                >
                    <span>{menuAbierto ? 'Cerrar' : 'Menu'}</span>
                    <motion.div
                        animate={{ rotate: menuAbierto ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        >
                            {menuAbierto ? 'x' : '='}
                    </motion.div>  
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
                    <motion.div
                        className="fixed inset-0 right-64 bg-black bg-opacity-50 md:hidden z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setMenuAbierto(false)}
                        style={{ transform: 'translateZ(0)' }}
                    />

                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ 
                            type: 'spring',
                            damping: 25,
                            stiffness: 200
                         }}
                        className="fixed top-18 right-0 bottom-0 w-64 bg-gray-800 md:hidden z-50 shadow-2xl border-l-4 border-blue-600"
                        style={{
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                        }}
                    >
                        <ul className="flex flex-col gap-2 p-6">
                        {menuItems.map((item, index) => (
                            <motion.li 
                            key={index}
                            onClick={() => handleClick(item)}
                            className="hover:bg-gray-700 cursor-pointer transition px-4 py-3 rounded-lg text-white"
                            whileTap={{ scale: 0.95 }}
                            >
                            {item}
                            </motion.li>
                        ))}
                        </ul>
                    </motion.nav>
                </>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header;