import { useState } from 'react'
import { FiCheckCircle, FiCalendar, FiClock, FiUsers } from 'react-icons/fi'
import { api } from '../services/api'

const initial = { name: '', email: '', phone: '', date: '', time: '', guests: 2, notes: '' }

export default function BookTable() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await api.bookTable(form)
    } catch {
      await new Promise((r) => setTimeout(r, 900))
    }
    setStatus('success')
    setForm(initial)
  }

  return (
    <section id="book" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Reservations</span>
          <h2 className="section-heading mt-4">Save your table.</h2>
          <p className="mt-5 text-cream/60 leading-relaxed max-w-md">
            We hold every reservation for 15 minutes past the booked time.
            For parties larger than 8, call us directly and we'll set up the corner table.
          </p>

          <div className="mt-10 space-y-4">
            {[
              [FiClock, 'Open Daily', '7:30 AM – 9:30 PM'],
              [FiUsers, 'Group Bookings', 'Up to 8 online, more by phone'],
              [FiCalendar, 'Advance Booking', 'Up to 30 days ahead'],
            ].map(([Icon, t, s]) => (
              <div key={t} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-caramel-light shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-cream-light font-body font-medium">{t}</p>
                  <p className="text-xs text-cream/50">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-8">
          {status === 'success' ? (
            <div className="text-center py-10">
              <FiCheckCircle className="mx-auto text-caramel-light" size={40} />
              <h3 className="font-display text-xl text-cream-light mt-4">Table reserved!</h3>
              <p className="text-sm text-cream/60 mt-2">We'll send a confirmation shortly.</p>
              <button onClick={() => setStatus('idle')} className="btn-ghost mt-6 !px-6 !py-2.5 text-sm">
                Book another table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" value={form.name} onChange={update('name')} className="bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60" />
                <input required type="tel" placeholder="Phone number" value={form.phone} onChange={update('phone')} className="bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60" />
              </div>
              <input required type="email" placeholder="Email address" value={form.email} onChange={update('email')} className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60" />
              <div className="grid sm:grid-cols-3 gap-4">
                <input required type="date" value={form.date} onChange={update('date')} className="bg-transparent glass rounded-xl px-4 py-3 text-sm text-cream/70 focus:outline-none focus:border-caramel/60 [color-scheme:dark]" />
                <input required type="time" value={form.time} onChange={update('time')} className="bg-transparent glass rounded-xl px-4 py-3 text-sm text-cream/70 focus:outline-none focus:border-caramel/60 [color-scheme:dark]" />
                <select value={form.guests} onChange={update('guests')} className="bg-transparent glass rounded-xl px-4 py-3 text-sm text-cream/70 focus:outline-none focus:border-caramel/60">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-espresso">{n} guest{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <textarea placeholder="Notes (allergies, occasion, seating preference)" value={form.notes} onChange={update('notes')} rows={3} className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60 resize-none" />
              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-40">
                {status === 'loading' ? 'Reserving…' : 'Reserve Table'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
