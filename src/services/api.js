// Central place to talk to your future backend.
// Point BASE_URL at your API (Node/Express, Django, Firebase Functions, etc.)
// and every form in this app (Order, BookTable, Contact) will start
// persisting to a real database instead of just logging to console.

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.message || `Request failed: ${res.status}`)
  }
  return res.json()
}

export const api = {
  // GET /menu -> MENU_ITEMS shape (see src/data/menuData.js)
  getMenu: () => request('/menu'),

  // POST /orders  body: { items: [{id, qty}], customer: {name, phone}, total }
  placeOrder: (payload) =>
    request('/orders', { method: 'POST', body: JSON.stringify(payload) }),

  // POST /reservations  body: { name, phone, email, date, time, guests, notes }
  bookTable: (payload) =>
    request('/reservations', { method: 'POST', body: JSON.stringify(payload) }),

  // POST /contact  body: { name, email, message }
  sendMessage: (payload) =>
    request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
}

// --- Mock mode -------------------------------------------------------
// Until a real backend exists, every call above will fail (no server on
// localhost:4000). The forms in this app already catch that and fall back
// to a simulated success so the UI is fully demoable out of the box.
export const isMockMode = true
