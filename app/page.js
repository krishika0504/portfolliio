import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SceneCanvas from '../components/SceneCanvas';
import ScrollAnimator from '../components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <main className="site-shell min-h-screen bg-site text-zinc-950">
        <SceneCanvas />
        <div className="site-noise" aria-hidden="true" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
