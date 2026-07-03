import { FiCoffee, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 mt-10 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#home" className="flex items-center gap-2 font-display text-xl text-cream-light">
          <FiCoffee className="text-caramel" />
          Lavion <span className="text-caramel">café</span>
        </a>

        <p className="text-xs text-cream/40 font-mono uppercase tracking-widest text-center">
          © {new Date().getFullYear()} Lavion café — Roasted slow, poured right.
        </p>

        <div className="flex gap-3">
          {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/60 hover:text-caramel-light hover:border-caramel/50 transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
