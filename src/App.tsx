import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import StickyNav from '@/components/StickyNav';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/sections/Hero';
import Stats from '@/sections/Stats';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Header />
      <StickyNav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
