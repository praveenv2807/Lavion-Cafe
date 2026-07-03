import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMinus, FiPlus, FiCheckCircle } from 'react-icons/fi'
import { MENU_ITEMS } from '../data/menuData'
import { api } from '../services/api'

export default function Order() {
  const [cart, setCart] = useState({}) // { id: qty }
  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const setQty = (id, delta) =>
    setCart((c) => {
      const next = Math.max(0, (c[id] || 0) + delta)
      const copy = { ...c }
      if (next === 0) delete copy[id]
      else copy[id] = next
      return copy
    })

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ ...MENU_ITEMS.find((m) => m.id === id), qty }))
        .filter(Boolean),
    [cart]
  )

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cartItems.length === 0 || !form.name || !form.phone) return
    setStatus('loading')
    try {
      await api.placeOrder({ items: cartItems.map(({ id, qty }) => ({ id, qty })), customer: form, total })
      setStatus('success')
    } catch {
      // No backend connected yet — simulate success so the flow is demoable.
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
    }
    setCart({})
  }

  if (status === 'success') {
    return (
      <section id="order" className="relative py-28 px-6">
        <div className="max-w-lg mx-auto text-center glass-strong rounded-[2rem] p-14">
          <FiCheckCircle className="mx-auto text-caramel-light" size={44} />
          <h3 className="font-display text-2xl text-cream-light mt-5">Order received, {form.name.split(' ')[0]}!</h3>
          <p className="text-cream/60 mt-3 text-sm">
            We're pulling your shots now. This is a demo confirmation — connect the <code className="text-caramel-light">/orders</code> endpoint in <code className="text-caramel-light">src/services/api.js</code> to make it real.
          </p>
          <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '' }) }} className="btn-primary mt-8">
            Place another order
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="order" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <span className="eyebrow">Order Online</span>
          <h2 className="section-heading mt-4">Build your order.</h2>
          <p className="mt-4 text-cream/60">Pick straight from the menu, we'll have it ready for pickup.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-3 max-h-[520px] overflow-y-auto pr-2">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="glass rounded-2xl p-4 flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-cream-light truncate">{item.name}</h4>
                  <p className="text-xs text-cream/50 font-mono mt-1">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button onClick={() => setQty(item.id, -1)} className="glass rounded-full p-2 hover:border-caramel/50" aria-label={`Remove one ${item.name}`}>
                    <FiMinus size={14} />
                  </button>
                  <span className="w-5 text-center font-mono text-sm">{cart[item.id] || 0}</span>
                  <button onClick={() => setQty(item.id, 1)} className="glass rounded-full p-2 hover:border-caramel/50 hover:bg-caramel/20" aria-label={`Add one ${item.name}`}>
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-6 sticky top-28 flex flex-col">
              <h3 className="font-display text-xl text-cream-light">Your cart</h3>

              <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                <AnimatePresence>
                  {cartItems.length === 0 && (
                    <p className="text-sm text-cream/40 italic">Nothing yet — tap + on an item.</p>
                  )}
                  {cartItems.map((i) => (
                    <motion.div
                      key={i.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-between text-sm text-cream/70"
                    >
                      <span>{i.qty} × {i.name}</span>
                      <span className="font-mono">₹{i.price * i.qty}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-cream/10">
                <span className="text-cream/60 text-sm">Total</span>
                <span className="font-display text-2xl text-caramel-light">₹{total}</span>
              </div>

              <div className="mt-5 space-y-3">
                <input
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60"
                />
                <input
                  required
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full bg-transparent glass rounded-xl px-4 py-3 text-sm placeholder:text-cream/30 focus:outline-none focus:border-caramel/60"
                />
              </div>

              <button
                type="submit"
                disabled={cartItems.length === 0 || status === 'loading'}
                className="btn-primary mt-6 w-full disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Placing order…' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
