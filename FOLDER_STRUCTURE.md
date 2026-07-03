# Folder Structure

```
coffee-shop/
│
├── index.html                  # HTML shell + Google Fonts (Fraunces, Sora, JetBrains Mono)
├── package.json                # Dependencies: react, framer-motion, react-icons, tailwind
├── vite.config.js              # Vite dev/build config
├── tailwind.config.js          # Brown/caramel palette, fonts, custom keyframe animations
├── postcss.config.js
├── .gitignore
├── README.md
│
├── public/                     # Static assets (favicon, og-image, etc.)
│
└── src/
    ├── main.jsx                 # React root render
    ├── App.jsx                  # Composes every section in page order
    ├── index.css                # Tailwind directives + glassmorphism utility classes
    │
    ├── components/
    │   ├── Navbar.jsx            # Sticky glass navbar, smooth-scroll links, mobile menu
    │   ├── FloatingBeans.jsx      # Ambient animated beans -> the "live/movable theme" layer
    │   ├── ScrollProgress.jsx    # Top progress bar tied to scroll position
    │   ├── Hero.jsx               # HOME — headline + animated pour-over/steam signature visual
    │   ├── About.jsx              # ABOUT — story + value props
    │   ├── Menu.jsx                # MENU — category tabs + item cards (from menuData.js)
    │   ├── HowItsMade.jsx        # PROCESS — 4-step animated "how coffee is made" flow
    │   ├── Gallery.jsx            # GALLERY — masonry photo grid
    │   ├── Testimonials.jsx       # REVIEWS — auto-rotating testimonial carousel
    │   ├── Order.jsx               # ORDER — cart builder + checkout form (-> api.placeOrder)
    │   ├── BookTable.jsx         # BOOK A TABLE — reservation form (-> api.bookTable)
    │   ├── Contact.jsx            # CONTACT — message form + location details
    │   └── Footer.jsx
    │
    ├── data/
    │   └── menuData.js           # Seed menu items — swap for a DB fetch later
    │
    └── services/
        └── api.js                # Single fetch layer for orders/reservations/contact/menu
```

## Page flow (single-page scroll)

```
Navbar (fixed, glass)
   │
   ▼
[ #home ]      Hero — headline, CTA, animated pour-over cup
   │
   ▼
[ #about ]     About — story, values
   │
   ▼
[ #menu ]      Menu — filterable categories, add-to-order
   │
   ▼
[ #process ]   How It's Made — harvest → roast → grind → pour
   │
   ▼
[ #gallery ]   Gallery — masonry shots of the space
   │
   ▼
[ #reviews ]   Testimonials — rotating guest quotes
   │
   ▼
[ #order ]     Order Online — cart + checkout → services/api.js
   │
   ▼
[ #book ]      Book a Table — reservation form → services/api.js
   │
   ▼
[ #contact ]   Contact — message form, location
   │
   ▼
Footer
```

## Data flow (once a backend is connected)

```
Menu.jsx  ──reads──▶  data/menuData.js  (swap for api.getMenu() later)

Order.jsx ──submits──▶ services/api.js ──POST /orders──▶ your backend ──▶ database
BookTable.jsx ──submits──▶ services/api.js ──POST /reservations──▶ your backend ──▶ database
Contact.jsx ──submits──▶ services/api.js ──POST /contact──▶ your backend ──▶ database
```

Until `VITE_API_URL` points at a real server, every submit call fails silently
and falls back to a simulated success — so the whole site is demoable today,
and becomes "real" the moment you plug in a backend.
