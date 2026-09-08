import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Procedures from './components/Procedures'
import Philosophy from './components/Philosophy'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-canvas">
      <Header />

      <main>
        <Hero />
        <About />
        <Procedures />
        <Philosophy />
        <Results />
        <Testimonials />
        <Benefits />
        <CTA />
        <InstagramSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
