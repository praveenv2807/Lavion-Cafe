import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiCheckCircle } from 'react-icons/fi'
import { api } from '../services/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await api.sendMessage(form)
    } catch {
      await new Promise((r) => setTimeout(r, 700))
    }
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <div className="glass-strong rounded-[2rem] p-10">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-heading !text-3xl md:!text-4xl mt-4">
            Questions? Catering? Just say hi.
          </h2>

          <div className="mt-8 space-y-5">
            {[
              [FiMapPin, "14 Race Course Lane, Coimbatore, TN"],
              [FiPhone, "+91 98765 43210"],
              [FiMail, "hello@lavioncafe.com"],
              [FiInstagram, "@lavion.cafe"],
            ].map(([Icon, t]) => (
              <div key={t} className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-caramel-light shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden h-48 glass flex items-center justify-center text-cream/30 text-xs font-mono uppercase tracking-widest">
            Map embed goes here
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-10 flex flex-col">
          {status === "success" ? (
            <div className="m-auto text-center">
              <FiCheckCircle className="mx-auto text-caramel-light" size={36} />
              <p className="text-cream-light font-display text-lg mt-4">
                Message sent — we'll reply soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-ghost mt-6 !px-6 !py-2 text-sm"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex-1 flex flex-col"
            >
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                className="bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={update("email")}
                className="bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60"
              />
              <textarea
                required
                placeholder="Your message"
                value={form.message}
                onChange={update("message")}
                className="flex-1 min-h-[140px] bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60 resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:opacity-40"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
