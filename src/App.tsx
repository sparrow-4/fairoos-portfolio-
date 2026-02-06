import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import './styles/globals.css';

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
