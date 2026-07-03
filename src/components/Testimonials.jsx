import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const REVIEWS = [
  { name: 'Ananya R.', role: 'Regular since 2019', text: 'The Yirgacheffe pour-over is the reason I stopped drinking coffee anywhere else. Consistent, every single time.', rating: 5 },
  { name: 'Karthik S.', role: 'Food blogger', text: 'Best flat white in the city, hands down. The space is calm enough to actually work in too.', rating: 5 },
  { name: 'Meera J.', role: 'First-time visitor', text: 'Booked a table for a birthday breakfast — the staff remembered our order the second time we came back.', rating: 5 },
]

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [])

  const next = () => setI((p) => (p + 1) % REVIEWS.length)
  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)

  return (
    <section id="reviews" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow">Guest Notes</span>
        <h2 className="section-heading mt-4">Words from the counter.</h2>

        <div className="relative mt-14 glass-strong rounded-[2rem] p-10 md:p-14 min-h-[260px] flex items-center">
          <button onClick={prev} className="absolute left-3 md:-left-6 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:border-caramel/50 transition-colors" aria-label="Previous review">
            <FiChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex justify-center gap-1 text-caramel-light mb-5">
                {[...Array(REVIEWS[i].rating)].map((_, s) => <FiStar key={s} fill="currentColor" />)}
              </div>
              <p className="font-display text-xl md:text-2xl text-cream-light leading-relaxed">
                "{REVIEWS[i].text}"
              </p>
              <p className="mt-6 text-caramel-light font-body font-medium">{REVIEWS[i].name}</p>
              <p className="text-xs text-cream/50 font-mono uppercase tracking-wider mt-1">{REVIEWS[i].role}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={next} className="absolute right-3 md:-right-6 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:border-caramel/50 transition-colors" aria-label="Next review">
            <FiChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              className={`h-1.5 rounded-full transition-all duration-300 ${d === i ? 'w-8 bg-caramel' : 'w-1.5 bg-cream/20'}`}
              aria-label={`Go to review ${d + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
