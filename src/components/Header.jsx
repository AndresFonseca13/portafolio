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
                    className="md:hidden bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2"
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
            {/* Menú móvil (animado) */}
            <div className="md:hidden">
                <AnimatePresence>
                    {menuAbierto && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <ul className="flex flex-col gap-4 mt-4 py-4">
                        {menuItems.map((item, index) => (
                            <motion.li 
                            key={index}
                            onClick={() => handleClick(item)}
                            className="hover:text-blue-400 cursor-pointer transition text-center py-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            {item}
                            </motion.li>
                        ))}
                        </ul>
                    </motion.nav>
                    )}
                </AnimatePresence>
            </div>
            </div>
        </header>
    )
}

export default Header;