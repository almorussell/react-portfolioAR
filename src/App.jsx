import './App.css'
import NavBar from './components/NavBar'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Typewriter from './components/Typewriter'
import SocialLinks from './components/SocialLinks'

function App() {

  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Typewriter />
        <SocialLinks />
        <Footer />
      </>
  );
}

export default App
