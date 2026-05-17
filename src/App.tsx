import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main font-inter selection:bg-primary/30 relative">
      <Navbar />
      
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
