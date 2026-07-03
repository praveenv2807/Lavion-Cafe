import { motion } from 'framer-motion'
import { FiSun, FiFeather, FiHeart } from 'react-icons/fi'

const VALUES = [
  { icon: FiSun, title: 'Direct Trade', text: 'We buy straight from growers in Ethiopia, Colombia and Sumatra — fair prices, traceable lots.' },
  { icon: FiFeather, title: 'Light-Touch Roasting', text: 'Small drums, low batches, roasted twice weekly so every bag is never more than 10 days old.' },
  { icon: FiHeart, title: 'Made to Order', text: 'No pre-brewed carafes. Every cup is weighed, timed and poured the moment you order it.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass-strong rounded-[2rem] aspect-[4/5] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
              alt="Barista pouring latte art in warm light"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
          </div>
          <div className="glass absolute -bottom-8 -right-8 rounded-2xl px-6 py-5 hidden md:block">
            <p className="font-display text-2xl text-caramel-light">Est. 2016</p>
            <p className="text-xs text-cream/60 font-mono uppercase tracking-widest mt-1">Coimbatore, IN</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Our Story</span>
          <h2 className="section-heading mt-4">A quiet room built around one ritual.</h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Lavion café started as a single hand-pour bar in a converted print
            shop. Nine years on, the machines have changed but the ritual hasn't —
            we still cup every new lot before it hits the menu, and we still believe
            a great coffee shop is judged by the slowest cup on the counter, not the fastest.
          </p>

          <div className="mt-10 space-y-5">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-caramel/40 transition-colors">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-caramel/15 flex items-center justify-center text-caramel-light">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-cream-light">{title}</h3>
                  <p className="text-sm text-cream/60 mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
