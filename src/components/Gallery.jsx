import { motion } from 'framer-motion'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=800&auto=format&fit=crop', tall: false },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop', tall: true },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop', tall: false },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">Inside the House</span>
          <h2 className="section-heading mt-4">A room worth lingering in.</h2>
        </div>

        <div className="mt-14 columns-2 md:columns-3 gap-5 space-y-5">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`break-inside-avoid rounded-2xl overflow-hidden glass ${img.tall ? 'h-[420px]' : 'h-[260px]'}`}
            >
              <img src={img.src} alt="Lavion café  interior" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
