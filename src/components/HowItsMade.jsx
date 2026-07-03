import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEPS = [
  {
    n: '01',
    title: 'Harvest & Sort',
    text: 'Ripe cherries are hand-picked at origin, then floated and sorted to remove defects before drying.',
    art: 'harvest',
  },
  {
    n: '02',
    title: 'Roast in Small Batches',
    text: 'Green beans hit our 12kg drum roaster, tracked by temperature curve to bring out each lot\'s character.',
    art: 'roast',
  },
  {
    n: '03',
    title: 'Rest & Grind to Order',
    text: 'Roasted beans rest 5–10 days to de-gas, then are ground fresh — seconds before your cup is brewed.',
    art: 'grind',
  },
  {
    n: '04',
    title: 'Brew & Pour',
    text: 'Dialled-in ratios, filtered water at 94°C, and a hand pour timed on the second — for you.',
    art: 'pour',
  },
]

function StepArt({ kind }) {
  const common = 'w-full h-full'
  if (kind === 'harvest') {
    return (
      <svg viewBox="0 0 200 200" className={common}>
        <circle cx="100" cy="100" r="70" fill="none" stroke="#C08552" strokeOpacity="0.25" strokeWidth="2" />
        {[...Array(7)].map((_, i) => {
          const a = (i / 7) * Math.PI * 2
          const x = 100 + Math.cos(a) * 45
          const y = 100 + Math.sin(a) * 45
          return <ellipse key={i} cx={x} cy={y} rx="12" ry="9" fill="#B87333" opacity="0.85" />
        })}
        <circle cx="100" cy="100" r="10" fill="#F5E6D3" />
      </svg>
    )
  }
  if (kind === 'roast') {
    return (
      <svg viewBox="0 0 200 200" className={common}>
        <rect x="55" y="70" width="90" height="70" rx="14" fill="none" stroke="#C08552" strokeWidth="3" />
        <circle cx="100" cy="105" r="26" fill="#5A3A2E" />
        <path d="M75 60 Q85 40 75 25" stroke="#C08552" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M100 60 Q110 35 100 15" stroke="#C08552" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M125 60 Q135 40 125 25" stroke="#C08552" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    )
  }
  if (kind === 'grind') {
    return (
      <svg viewBox="0 0 200 200" className={common}>
        <rect x="80" y="50" width="40" height="30" rx="6" fill="#C08552" />
        <polygon points="70,80 130,80 118,130 82,130" fill="#5A3A2E" />
        <rect x="82" y="130" width="36" height="24" rx="4" fill="#3E2723" />
        {[...Array(5)].map((_, i) => (
          <circle key={i} cx={90 + i * 8} cy="165" r="2.5" fill="#F5E6D3" opacity="0.8" />
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 200" className={common}>
      <rect x="82" y="40" width="36" height="10" rx="3" fill="#F5E6D3" opacity="0.8" />
      <polygon points="78,50 122,50 105,90 95,90" fill="#F5E6D3" opacity="0.35" />
      <rect x="75" y="110" width="50" height="55" rx="4" fill="none" stroke="#F5E6D3" strokeOpacity="0.5" strokeWidth="3" />
      <rect x="79" y="140" width="42" height="21" rx="2" fill="#5A3A2E" />
      <rect x="122" y="120" width="14" height="18" rx="7" fill="none" stroke="#F5E6D3" strokeOpacity="0.5" strokeWidth="3" />
    </svg>
  )
}

export default function HowItsMade() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">From Farm to Cup</span>
          <h2 className="section-heading mt-4">How your coffee gets made.</h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-strong rounded-[2.5rem] aspect-square max-w-md mx-auto flex items-center justify-center p-14 relative overflow-hidden">
            <div className="absolute w-56 h-56 bg-caramel/15 rounded-full blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48"
              >
                <StepArt kind={STEPS[active].art} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-3">
            {STEPS.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl p-5 transition-all duration-400 ${
                  active === i ? 'glass-strong' : 'glass hover:border-caramel/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-sm shrink-0 transition-colors ${
                      active === i ? 'text-caramel-light' : 'text-cream/40'
                    }`}
                  >
                    {s.n}
                  </span>
                  <h3 className={`font-display text-xl ${active === i ? 'text-cream-light' : 'text-cream/60'}`}>
                    {s.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-cream/60 mt-3 pl-9 leading-relaxed overflow-hidden"
                    >
                      {s.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
