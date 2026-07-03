import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="eyebrow">
            Small-batch · Hand-poured · Since 2016
          </span>
          <h1 className="section-heading !text-5xl md:!text-7xl mt-5">
            Roasted slow.
            <br />
            <span className="text-gradient-caramel">Poured right.</span>
          </h1>
          <p className="mt-6 text-cream/70 text-lg max-w-md font-body leading-relaxed">
            Every cup at Lavion café begins two weeks earlier, at the
            roaster. We source direct-trade beans, roast in small drums, and
            pour each cup to order — nothing rushed, nothing automated.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#order" className="btn-primary">
              Order Online
            </a>
            <a href="#book" className="btn-ghost">
              Reserve a Table
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["12+", "Origin Beans"],
              ["9", "Years Roasting"],
              ["4.9", "Guest Rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-caramel-light">
                  {n}
                </div>
                <div className="text-xs text-cream/50 mt-1 font-mono uppercase tracking-wider">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: realistic hero photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center h-[460px] lg:h-[520px]"
        >
          <div className="absolute w-72 h-72 rounded-full bg-caramel/20 blur-3xl" />

          <motion.div
            className="glass-strong relative rounded-[2.5rem] overflow-hidden w-full max-w-md h-full"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
              alt="Latte art being poured into a cup at Lavion café"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="glass absolute -bottom-6 -left-6 rounded-2xl px-6 py-4"
          >
            <p className="font-display text-xl text-caramel-light">
              Ethiopia Yirgacheffe
            </p>
            <p className="text-xs text-cream/50 font-mono uppercase tracking-widest mt-1">
              Today's Pour-Over
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 hover:text-caramel-light transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
