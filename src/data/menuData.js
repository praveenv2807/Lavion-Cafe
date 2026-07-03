// Static seed data. Later, replace this with:
//   const items = await api.get('/menu')
// See src/services/api.js for the fetch layer that's already wired up.

export const CATEGORIES = ['Signature', 'Espresso', 'Pour Over', 'Cold Brew', 'Pastries']

export const MENU_ITEMS = [
  // ---- Signature ----
  {
    id: 'sig-01',
    category: 'Signature',
    name: 'Maple Oat Cortado',
    desc: 'Double ristretto, steamed oat milk, house maple.',
    price: 260,
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'sig-02',
    category: 'Signature',
    name: 'Cardamom Rose Latte',
    desc: 'Espresso, steamed milk, cardamom-rose syrup, dried petals.',
    price: 270,
    img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'sig-03',
    category: 'Signature',
    name: 'Honey Cinnamon Cappuccino',
    desc: 'Double shot, microfoam, wild honey, Ceylon cinnamon dust.',
    price: 250,
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'sig-04',
    category: 'Signature',
    name: 'Salted Caramel Mocha',
    desc: 'Espresso, dark chocolate, house caramel, sea salt.',
    price: 280,
    img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=700&auto=format&fit=crop',
  },

  // ---- Espresso ----
  {
    id: 'esp-01',
    category: 'Espresso',
    name: 'Classic Espresso',
    desc: 'Our house blend — cocoa, dried fig, soft acidity.',
    price: 150,
    img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'esp-02',
    category: 'Espresso',
    name: 'Oak Flat White',
    desc: 'Double shot, microfoam, served in a warmed glass.',
    price: 220,
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'esp-03',
    category: 'Espresso',
    name: 'Cappuccino',
    desc: 'Equal parts espresso, steamed milk and airy foam.',
    price: 210,
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'esp-04',
    category: 'Espresso',
    name: 'Classic Latte',
    desc: 'Silky steamed milk over a double shot, light foam cap.',
    price: 230,
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'esp-05',
    category: 'Espresso',
    name: 'Piccolo',
    desc: 'Ristretto shot in steamed milk, served in a 90ml glass.',
    price: 180,
    img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=700&auto=format&fit=crop',
  },

  // ---- Pour Over ----
  {
    id: 'pour-01',
    category: 'Pour Over',
    name: 'Ethiopia Yirgacheffe',
    desc: 'Jasmine, bergamot, light body. Brewed on V60.',
    price: 280,
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pour-02',
    category: 'Pour Over',
    name: 'Colombia Huila',
    desc: 'Red apple, brown sugar, silky finish. Brewed on Kalita.',
    price: 270,
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pour-03',
    category: 'Pour Over',
    name: 'Sumatra Mandheling',
    desc: 'Earthy, full body, dark chocolate. Brewed on Chemex.',
    price: 290,
    img: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pour-04',
    category: 'Pour Over',
    name: 'Kenya AA',
    desc: 'Blackcurrant, tomato-like acidity, syrupy body.',
    price: 300,
    img: 'https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=700&auto=format&fit=crop',
  },

  // ---- Cold Brew ----
  {
    id: 'cold-01',
    category: 'Cold Brew',
    name: 'Cardamom Cold Brew',
    desc: '18-hour steep, cardamom pod infusion, orange peel.',
    price: 240,
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'cold-02',
    category: 'Cold Brew',
    name: 'Iced Oat Latte',
    desc: 'Double espresso over ice, cold oat milk.',
    price: 250,
    img: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'cold-03',
    category: 'Cold Brew',
    name: 'Nitro Cold Brew',
    desc: 'Nitrogen-infused, cascading foam, naturally sweet.',
    price: 260,
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'cold-04',
    category: 'Cold Brew',
    name: 'Vietnamese Iced Coffee',
    desc: 'Robusta drip, condensed milk, over crushed ice.',
    price: 230,
    img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=700&auto=format&fit=crop',
  },

  // ---- Pastries ----
  {
    id: 'pas-01',
    category: 'Pastries',
    name: 'Brown Butter Croissant',
    desc: 'Laminated 48 hours, baked in-house every morning.',
    price: 140,
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pas-02',
    category: 'Pastries',
    name: 'Espresso Basque Cheesecake',
    desc: 'Burnt-top cheesecake folded with espresso reduction.',
    price: 190,
    img: 'https://images.unsplash.com/photo-1567171466295-4afa63d45416?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pas-03',
    category: 'Pastries',
    name: 'Almond Croissant',
    desc: 'Double-baked, almond cream, toasted flaked almonds.',
    price: 160,
    img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pas-04',
    category: 'Pastries',
    name: 'Cinnamon Roll',
    desc: 'Slow-proofed dough, brown sugar swirl, cream cheese glaze.',
    price: 150,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 'pas-05',
    category: 'Pastries',
    name: 'Banana Walnut Loaf',
    desc: 'Moist banana bread, toasted walnuts, baked daily.',
    price: 130,
    img: 'https://images.unsplash.com/photo-1606101273945-e9cd1b3956e0?q=80&w=700&auto=format&fit=crop',
  },
]
