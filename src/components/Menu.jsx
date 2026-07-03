import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { CATEGORIES, MENU_ITEMS } from '../data/menuData'

export default function Menu({ onAdd }) {
  const [active, setActive] = useState('Signature')
  const items = MENU_ITEMS.filter((i) => i.category === active)

  return (
    <section id="menu" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">The Menu</span>
          <h2 className="section-heading mt-4">Crafted cup by cup.</h2>
          <p className="mt-4 text-cream/60">
            Prices in ₹. Every pour-over is brewed fresh per cup — expect a short wait, it's worth it.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-body transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-caramel to-copper text-espresso-dark font-semibold shadow-lg shadow-caramel/20'
                  : 'glass text-cream/70 hover:text-caramel-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-3xl overflow-hidden group hover:border-caramel/40 transition-colors"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg text-cream-light leading-snug">{item.name}</h3>
                    <span className="font-mono text-caramel-light shrink-0">₹{item.price}</span>
                  </div>
                  <p className="text-xs text-cream/50 mt-2 leading-relaxed">{item.desc}</p>
                  <button
                    onClick={() => onAdd?.(item)}
                    className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider py-2.5 rounded-full glass hover:bg-caramel/20 hover:border-caramel/50 transition-colors"
                  >
                    <FiPlus size={14} /> Add to order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
