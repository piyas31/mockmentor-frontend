import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Pricing />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
