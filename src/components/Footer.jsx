function Footer() {
    const anhoActual = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">
                    &copy; {anhoActual} Andrés Fonseca. Todos los derechos reservados.
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/AndresFonseca13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors">
                            GitHub
                    </a>
                    <a
                        href="www.linkedin.com/in/andres-fonseca-ochoa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors">
                            LinkedIn
                    </a>
                    <a
                    href="andresitofonseca13@gmail.com"
                    className="hover:text-blue-400 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;