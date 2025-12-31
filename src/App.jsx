import Navbar from './components/Navbar'
import InteractiveBackground from './components/InteractiveBackground'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <InteractiveBackground />
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
        </>
    )
}

export default App
