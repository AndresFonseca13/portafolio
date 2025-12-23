import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WaveDivider from './components/WaveDivider';

function App() {
  const menuItems = ['Inicio', 'Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'];

  const misHabilidades = [
    'Java',
    'Spring Boot',
    'MySQL',
    'Git',
    'React',
    "Node.js"
  ]

  return (
    <div className="App min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] text-gray-100">
      <Header
      logo="AF Portfolio"
      menuItems={menuItems}/>

      <Hero
      nombre="Andres Fonseca"
      titulo="Desarrollador Backend"
      descripcion="Apasionado por la tecnología y el desarrollo de software, con experiencia en la creación de aplicaciones robustas y escalables."
      />

      <WaveDivider bgColor="#f9fafb" />

      <Projects />

      <WaveDivider flip={true} bgColor="#f9fafb" />

      <About
      titulo="Sobre mí"
      descripcion="Soy un desarrollador enfocado en backend con experiencia en Java y Spring Boot."
      habilidades={misHabilidades}
      />

      <Skills/>

      <WaveDivider bgColor="#f9fafb" />

      <Contact/>

      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
