# Lavion cafe
http://lavion-cafe.netlify.app


Premium, glassmorphic React coffee-shop site: espresso/caramel palette, animated
"live" ambient background, and a working order + reservation flow ready to be
wired to a real backend.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Connect to a database later

All forms already call a single service layer: `src/services/api.js`.
Right now there's no server, so every call fails and silently falls back to a
simulated success (see the `catch` blocks in `Order.jsx`, `BookTable.jsx`,
`Contact.jsx`) — the UI is fully demoable with zero backend.

To go live:

1. Stand up any backend (Node/Express, Django REST, Firebase, Supabase...).
2. Implement these routes to match `src/services/api.js`:
   - `GET  /menu`
   - `POST /orders`
   - `POST /reservations`
   - `POST /contact`
3. Create a `.env` file in the project root:
   ```
   VITE_API_URL=https://your-api.com/api
   ```
4. Swap `src/data/menuData.js` for a `useEffect` that calls `api.getMenu()`.

## Folder structure

See `FOLDER_STRUCTURE.md` for the annotated tree.
