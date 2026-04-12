import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import KidsSection from './sections/KidsSection';
import AdolescentsSection from './sections/AdolescentsSection';
import AdultsSection from './sections/AdultsSection';
import BusinessSection from './sections/BusinessSection';
import WhyChooseUs from './sections/WhyChooseUs';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <KidsSection />
        <AdolescentsSection />
        <AdultsSection />
        <BusinessSection />
        <WhyChooseUs />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
