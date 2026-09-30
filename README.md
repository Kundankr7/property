# One Stop Property Solutions

**Premium Next.js Real Estate Platform** — Built for Sachin Bhoir, Kamothe, Navi Mumbai.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Maps | Leaflet.js / OpenStreetMap |
| Fonts | DM Serif Display + DM Sans |
| Icons | Lucide React |

---

## Project Structure

```
one-stop-property/
├── app/
│   ├── globals.css         # Global styles, Tailwind, Leaflet overrides
│   ├── layout.js           # Root layout (Navbar, Footer, WhatsApp, Mobile bar)
│   ├── page.js             # Home page
│   ├── not-found.js        # 404 page
│   ├── properties/
│   │   ├── page.js         # Properties listing with live filters + map view
│   │   └── [id]/
│   │       └── page.js     # Property detail page (gallery, map, enquiry)
│   ├── services/
│   │   └── page.js         # All 6 services with process timeline
│   ├── about/
│   │   └── page.js         # Owner profile, timeline, values, testimonials
│   └── contact/
│       └── page.js         # Contact form, map, FAQ
├── components/
│   ├── Navbar.js            # Sticky blurred navbar, mobile menu
│   ├── Footer.js            # Full footer with links
│   ├── PropertyCard.js      # Reusable property card
│   ├── PropertyCardSkeleton.js
│   ├── SearchBar.js         # Smart search with tabs, autocomplete
│   ├── MapView.js           # Leaflet map (office + property markers)
│   ├── WhatsAppButton.js    # Floating WhatsApp CTA
│   └── StickyMobileBar.js   # Mobile bottom bar (Call/WA/Enquire)
├── data/
│   ├── properties.js        # 6 property listings (scalable to CMS/DB)
│   ├── testimonials.js      # 4 client testimonials
│   └── services.js          # 6 service types
└── public/
    └── logo.png             # Brand logo
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Key Features

### 🏠 Property Listings
- 6 seeded listings (scalable to any CMS or database)
- Live client-side filtering: category, type, location, price, furnishing
- Grid view + interactive map view toggle
- Sort by: newest, price, area

### 🗺️ Leaflet Map
- Custom branded markers for office and properties
- Click marker → property popup with direct link
- "Get Directions" button → detects user location → opens Google Maps route

### 📱 Lead Capture
- Sticky mobile bottom bar: Call / WhatsApp / Enquire
- Quick enquiry modal with form validation + success animation
- Per-property contact panel with dedicated enquiry form
- Pre-filled WhatsApp messages

### 💬 WhatsApp Integration
- Floating button with ping animation
- Pre-filled message: "Hi, I'm interested in a property listed on your website..."
- Property-specific WhatsApp messages on detail pages

### 🎨 Design System
- Brand colors: Orange (#E05A1A) + Navy (#0F172A)
- DM Serif Display for headings, DM Sans for UI
- Smooth Framer Motion animations throughout
- Skeleton loaders, empty states, hover interactions
- Fully responsive (mobile-first)

---

## Customisation

### Add Properties
Edit `data/properties.js`. Each property supports:
- Full image gallery
- Amenities list
- Map coordinates (lat/lng)
- RERA number
- Tags: `verified`, `new`, `ready`

### Update Business Info
- Phone: Search `9870178204` → replace with new number
- Address: Search `Sector 5, Kamothe` → update across files
- Logo: Replace `public/logo.png`

### Connect to CMS/Database
Replace imports from `@/data/*.js` with API calls (e.g. Sanity, Contentful, Supabase).

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Other platforms
```bash
npm run build
npm start
```

---

## Business Info

| Field | Value |
|---|---|
| Business | One Stop Property Solutions |
| Owner | Sachin Bhoir |
| Phone | +91 98701 78204 |
| Location | Kamothe, Navi Mumbai |
| Est. | 2014 |
| RERA | A51900019872 |
