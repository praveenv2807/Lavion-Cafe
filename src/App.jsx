import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import HowItsMade from './components/HowItsMade'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Order from './components/Order'
import BookTable from './components/BookTable'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBeans from './components/FloatingBeans'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="noise-overlay" />
      <FloatingBeans />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <HowItsMade />
        <Gallery />
        <Testimonials />
        <Order />
        <BookTable />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
