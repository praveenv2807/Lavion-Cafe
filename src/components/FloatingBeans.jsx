import { motion } from 'framer-motion'

const BEANS = [
  { top: '8%', left: '5%', size: 28, delay: 0, dur: 7 },
  { top: '22%', left: '92%', size: 20, delay: 1.2, dur: 8 },
  { top: '48%', left: '3%', size: 34, delay: 0.6, dur: 9 },
  { top: '65%', left: '88%', size: 24, delay: 2, dur: 6.5 },
  { top: '80%', left: '10%', size: 18, delay: 1.6, dur: 7.5 },
  { top: '35%', left: '50%', size: 16, delay: 2.4, dur: 10 },
  { top: '90%', left: '60%', size: 22, delay: 0.9, dur: 8.5 },
]

function Bean({ size }) {
  return (
    <svg width={size} height={size * 1.35} viewBox="0 0 100 135" fill="none">
      <path
        d="M50 5C25 5 5 35 5 70c0 40 22 60 45 60s45-20 45-60C95 35 75 5 50 5Z"
        fill="url(#beanGrad)"
      />
      <path
        d="M50 15C50 15 35 45 50 70C65 95 50 125 50 125"
        stroke="#1B120D"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="beanGrad" x1="0" y1="0" x2="100" y2="135" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C08552" />
          <stop offset="1" stopColor="#5A3A2E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function FloatingBeans() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.35]">
      {BEANS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: b.top, left: b.left }}
          animate={{ y: [0, -22, 0], rotate: [0, 15, -10, 0] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Bean size={b.size} />
        </motion.div>
      ))}
    </div>
  )
}
