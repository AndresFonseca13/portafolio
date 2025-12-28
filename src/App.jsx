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
      nombre="Andres"
      titulo="Backend Developer"
      descripcion="Técnico en programación y estudiante de desarrollo de software. Transformo necesidades complejas en soluciones eficientes y escalables. Apasionado por la lógica detrás de los datos, las APIs y el código limpio."
      />

      <WaveDivider bgColor="#f9fafb" />

      <Projects />

      <WaveDivider flip={true} bgColor="#f9fafb" />

      <About
      titulo="Sobre mí"
      descripcion="Desarrollador Backend especializado en el ecosistema Java y Spring Boot. Actualmente curso el 6º semestre de Ingeniería de Software, complementando mi formación académica con certificaciones como Oracle Next Education y aprendizaje autodidacta constante. Me caracterizo por mi disciplina técnica, curiosidad por la arquitectura de software y capacidad para investigar y resolver problemas complejos."
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
