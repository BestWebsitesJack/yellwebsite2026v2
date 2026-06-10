# Young Entrepreneur Landscaping — Website

## Stack
- **Vite + React** — fast build, optimized output
- **React Router** — client-side routing
- **react-helmet-async** — per-page SEO meta + JSON-LD schema
- **Elfsight** — Google Reviews widget (ID embedded)
- **Web3Forms** — contact form (add your access key)

---

## Setup

```bash
npm install
npm run dev       # local dev at localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build locally
```

---

## Before Going Live — Checklist

### 1. Web3Forms Access Key
In `src/components/ContactSection.jsx`, replace:
```
value="YOUR_WEB3FORMS_ACCESS_KEY"
```
With your actual key from https://web3forms.com (free).

Also update the redirect URL:
```
value="https://yelandscaping.com/contact?sent=1"
```

### 2. Elfsight Before/After Slider
In `src/pages/Home.jsx`, find the commented block:
```jsx
{/* TODO: Add Elfsight Before/After Slider widget here */}
```
Uncomment it and replace `BEFORE_AFTER_ID` with the actual Elfsight app ID.

### 3. Domain / Canonical URLs
All canonical URLs are set to `https://yelandscaping.com/...`
Update if the domain changes before launch.

---

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to Cloudflare Pages → Create application → Connect to Git
3. Select repo, set build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Hit Deploy — Cloudflare auto-deploys on every push to main.

The `public/_redirects` file handles SPA routing so React Router works on direct URLs.

---

## Site Structure

| Route | Page |
|---|---|
| `/` | Homepage |
| `/design-build` | Design Build service page |
| `/hardscape-masonry` | Hardscape & Masonry |
| `/lawn-landscape` | Lawn & Landscape |
| `/carpentry-lighting` | Carpentry & Lighting |
| `/water-management` | Water Management |
| `/landscape-maintenance` | Landscape Maintenance |
| `/showcase` | Portfolio / Showcase |
| `/about` | About Us |
| `/faq` | FAQ (with JSON-LD schema) |
| `/contact` | Contact + Quote Form |
| `/commercial` | Commercial Services |
| `/hyde-park` | Location page — Hyde Park |
| `/mariemont` | Location page — Mariemont |
| `/northern-kentucky` | Location page — Northern Kentucky |

---

## Key Files

- `src/data/site.js` — all photos, services, projects, contact info, area lists
- `src/components/ContactSection.jsx` — Web3Forms form (update access key)
- `src/pages/Home.jsx` — Elfsight Google Reviews + Before/After placeholder
- `src/index.css` — full design system (colors, typography, buttons)

---

## Photos
All photos served from Squarespace CDN. If migrating photos to a new host, update `CDN` and `PHOTOS` in `src/data/site.js`.

---

Built by BestWebsites · yelandscaping.com
