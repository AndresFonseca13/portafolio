import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function ScrollToTop() {
	const [mostrar, setMostrar] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setMostrar(true);
			} else {
				setMostrar(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup: remover el listener cuando el componente se desmonte
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{mostrar && (
				<motion.button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 md:p-4 rounded-full text-white bg-transparent border-2 border-blue-500/50 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/50 active:shadow-2xl active:shadow-blue-500/70 active:border-blue-400 shadow-lg shadow-blue-500/40 backdrop-blur-sm transition-all duration-300 z-[9999] group"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 group-active:bg-blue-500/30 rounded-full transition-all duration-300"></div>
					<svg
						className="w-5 h-5 md:w-6 md:h-6 relative z-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default ScrollToTop;
