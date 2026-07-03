import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCoffee } from 'react-icons/fi'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#order' },
  { label: 'Book a Table', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass rounded-full flex items-center justify-between px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-xl font-semibold text-cream-light"
          >
            <FiCoffee className="text-caramel" size={22} />
            Lavion <span className="text-caramel">café</span> 
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body text-cream/80 hover:text-caramel-light transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-caramel group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <a
            href="#order"
            className="hidden lg:inline-flex btn-primary !px-6 !py-2.5 text-sm"
          >
            Order Now
          </a>

          <button
            className="lg:hidden text-cream-light"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden max-w-7xl mx-auto px-6 mt-3 overflow-hidden"
          >
            <div className="glass-strong rounded-3xl p-6 flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream-light font-body text-lg border-b border-cream/10 pb-3 last:border-none"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
