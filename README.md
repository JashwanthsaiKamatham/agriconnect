# 🌾 AgriConnect — Digital Agriculture Platform

**Grow Smarter. Sell Better. Connect Directly.**

AgriConnect is a production-style full-stack web platform for Indian farmers. It brings live-style
market prices, weather intelligence, AI crop-disease scanning, a direct produce marketplace,
equipment rental, expert consultations, logistics and government schemes into one clean,
mobile-first experience in **English, తెలుగు (Telugu), ಕನ್ನಡ (Kannada) and हिन्दी (Hindi)**.

> ⚠️ **Sample-data disclaimer** — Every number in this build (mandi prices, weather, statistics,
> listings, schemes, experts, shipments, testimonials) is **realistic demo data**, clearly badged
> in the UI. No live APIs are connected yet — the service layer (`lib/services`) marks each
> integration point.

---

## ✨ Features

| Area | What works today |
| --- | --- |
| 🏠 Landing page | Hero, stats, feature & role cards, how-it-works, benefits, testimonials, CTA, footer with language switcher |
| 🔐 Auth | Login, sign-up with role selection, forgot-password, client-side validation, loading states, **one-click demo login** |
| 🌱 Farmer onboarding | 4-step wizard (profile → location → land → crops) with progress bar and back navigation |
| 📊 Farmer dashboard | Welcome header, profile summary, KPI cards, quick actions, revenue chart, weather, market prices, crop-health donut, tasks, activity feed, harvest timeline |
| 🌾 Crop management | Full CRUD, search, stage filter, harvest-date sorting, photo upload, stage progress, validation, empty/loading states |
| 📈 Market prices | 8 crops, state/district filters, min/max/avg cards, sparklines, 7/30-day history chart, nearby markets |
| ⛅ Weather | Current conditions, 7-day forecast, sunrise/sunset, rain/wind alerts, farming advisories, map placeholder |
| 🔬 Disease detection | Drag-and-drop upload, preview, crop selector, simulated AI analysis with confidence, severity, symptoms, actions, prevention, expert CTA and mandatory disclaimer |
| 🛒 Marketplace | Search + crop/location/price/quantity filters, save listings, contact-seller modal, full "Add produce listing" form with image upload |
| 🚜 Equipment rental | Category chips, date-range filters, booking modal with day-rate estimate, "My bookings" panel |
| 🎓 Experts | Expert cards with rating/fee/slots, booking modal (crop, problem, date, time, mode, photo), consultation history |
| 🏛️ Government schemes | Searchable scheme cards, 4 filters, benefits, documents, deadlines, bookmarks, official-portal disclaimer |
| 🚚 Logistics | Provider cards, quote request form with validation, 5-stage shipment tracking timeline |
| 📉 Farm analytics | Revenue, expenses, profit (composed chart), yield, water, fertilizer, health trend, market-price trend, period & crop filters, report-download demo |
| 👤 Profile & settings | Profile & farm forms, language, notification & privacy toggles, password change, logout, delete-account option |

**Farmer role is fully interactive.** Buyer / expert / supplier / logistics / admin roles are
represented in sign-up and landing cards as expandable v2 features.

---

## 🛠 Tech stack

- **Next.js 14 (App Router) + TypeScript** — strict mode
- **Tailwind CSS** — custom agriculture design system (forest green / leaf / earth / beige / sun / charcoal)
- **Recharts** — responsive, accessible charts
- **lucide-react** — icon set
- **ESLint (next/core-web-vitals)** — clean: 0 warnings
- **App Router API routes** — demo auth + crops endpoints show the full-stack pattern
- **Zero secrets** — `.env.example` contains placeholder names only

---

## 🚀 Getting started

```bash
# 1. install
npm install

# 2. run
npm run dev
# → http://localhost:3000

# 3. try it fast
Use the “Try the demo farmer account” button on the login page.
```

Other scripts:

```bash
npm run build        # production build (also the type check)
npm run type-check   # tsc --noEmit
npm run start        # serve the production build
```

---

## 📁 Project structure

```
agriconnect/
├── app/
│   ├── (auth)/               # login · signup · forgot-password (split-screen layout)
│   ├── (app)/                # authenticated shell: sidebar + topbar + bottom nav
│   │   ├── dashboard/        # farmer dashboard (flagship)
│   │   ├── crops/            # crop management (CRUD)
│   │   ├── market/           # live market prices
│   │   ├── weather/          # weather intelligence
│   │   ├── disease/          # AI disease detection
│   │   ├── marketplace/      # direct produce marketplace
│   │   ├── equipment/        # equipment rental
│   │   ├── experts/          # expert consultation
│   │   ├── schemes/          # government schemes
│   │   ├── logistics/        # transport + shipment tracking
│   │   ├── analytics/        # farm analytics
│   │   └── profile/          # profile & settings
│   ├── onboarding/           # 4-step farmer onboarding wizard
│   ├── api/                  # auth/login · auth/signup · crops (demo endpoints)
│   ├── page.tsx              # landing page
│   └── globals.css           # Tailwind layers + design utilities
├── components/
│   ├── ui/                   # Button, Card, Badge, Modal, Form fields, Toaster, …
│   ├── layout/               # AppShell, Sidebar, Topbar, MobileNav, language selector
│   ├── landing/              # hero, sections, testimonials, footer
│   ├── charts/               # Recharts wrappers (area, bar, line, donut, sparkline)
│   ├── forms/                # CropFormModal, ListingFormModal
│   └── dashboard/            # demo-data banner
├── lib/
│   ├── types.ts              # all domain models (mirror of the DB schema)
│   ├── i18n/translations.ts  # en / te / kn / hi dictionaries + fallback t()
│   ├── context/AppContext.tsx# language, mock auth, crops, listings, bookings, toasts
│   ├── services/             # SWAPPABLE service layer (crop/market/weather/disease)
│   ├── data/                 # realistic seed data for every feature
│   └── utils.ts / hooks.ts   # formatters, stage helpers, page-title hook
├── database/schema.sql       # database-ready PostgreSQL schema (10+ tables)
├── public/images/            # generated agricultural photography & SVG placeholders
└── .env.example              # placeholder env-var names only — no secrets
```

---

## 🌐 Languages & i18n

English is the default. The translation structure lives in `lib/i18n/translations.ts`:
navigation, common actions, auth and dashboard labels are fully translated for
**English, తెలుగు, ಕನ್ನಡ and हिन्दी**; any missing key falls back to English automatically, so new
copy can be translated incrementally. Switch languages from the footer, the top bar, sign-up,
onboarding or Profile → Language.

---

## 🔌 Backend readiness

| Future integration | Where to plug in |
| --- | --- |
| User authentication | `app/api/auth/*` + `AppContext.login/demoLogin` (NextAuth or custom JWT) |
| Database | `database/schema.sql` → Supabase/Neon Postgres; models already mirror `lib/types.ts` |
| Live market prices | `lib/services → marketService.prices()` (Agmarknet / data.gov.in) |
| Weather API | `lib/services → weatherService.current()` (IMD / OpenWeatherMap) |
| Maps | Weather page map placeholder → MapmyIndia / Google Maps |
| AI disease detection | `lib/services → diseaseService.analyze()` |
| SMS / WhatsApp | notification toggles already exist; wire a provider key |
| Payments | marketplace & equipment flows ready for a gateway |

Copy `.env.example` → `.env.local` and fill values. **Never commit `.env.local`.**

---

## 🔐 Environment variables

Copy `.env.example` → `.env.local` for local development. **Nothing is required to run the demo.**

| Variable | Used by | Secret? |
| --- | --- | --- |
| `DATABASE_URL` | Future DB (Prisma/Drizzle) | Yes |
| `NEXTAUTH_URL`, `NEXTAUTH_SECRET` | Future auth | Yes |
| `WEATHER_API_KEY` | `lib/services → weatherService` | Yes |
| `MARKET_PRICE_API_KEY` | `lib/services → marketService` | Yes |
| `NEXT_PUBLIC_MAPS_API_KEY` | Map placeholder on Weather page | Public (scoped key) |
| `AI_DISEASE_API_KEY` | `lib/services → diseaseService` | Yes |
| `SMS_API_KEY`, `WHATSAPP_API_KEY` | Notification providers | Yes |
| `PAYMENT_GATEWAY_KEY` | Future checkout | Yes |

Safety rules (already followed in this repo):
- Only `NEXT_PUBLIC_*` variables reach the browser — **never** put a secret in one.
- `.env.local` is git-ignored; `.env.example` contains placeholder names only.
- On Vercel, set values under Project → Settings → Environment Variables.

## ☁️ Deploy to Vercel

**Dashboard (recommended)**
1. Push the repo to GitHub:
   ```bash
   git init && git add . && git commit -m "AgriConnect v1"
   git remote add origin https://github.com/<you>/agriconnect.git
   git push -u origin main
   ```
2. On [vercel.com/new](https://vercel.com/new), import the repo — Next.js is auto-detected.
3. (Optional) Add environment variables from the table above. The demo deploys with none.
4. Click **Deploy**. Build command `next build`, output auto-detected, Node 20 (see `.nvmrc`/`engines`).

**CLI alternative**
```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

No database or third-party keys are needed for the sample-data build — every integration point
is documented in `lib/services` and `database/schema.sql`.

---

## 🧪 Quality checks (verified)

- `npx tsc --noEmit` → **0 errors**
- `npm run build` → compiles with **0 type errors**, 24/24 routes generated
- `npx next lint` → **0 warnings, 0 errors** (ESLint `next/core-web-vitals`)
- Every internal link/`<Link href>` verified against the route table — no dead links
- Every referenced image verified to exist in `public/` — no broken images
- All form fields validate client-side with inline error messages
- Loading, empty, error and success states on every data screen
- Hydration-safe date/greeting rendering (no console warnings)
- Accessible: focus rings, `aria-*` on nav/modals/toggles, Escape closes all dialogs, skip-to-content link

## 📱 Mobile experience

- **Compact bottom navigation** (Dashboard · Crops · Market · Marketplace + "More" sheet with all 12 destinations), safe-area aware
- Working hamburger menu in the app (slide-in drawer with scroll-lock + Escape) and on the landing page
- Charts keep a readable minimum width on phones and **scroll horizontally** (`ChartFrame`)
- **Responsive mandi table**: full price comparison table on desktop, touch-friendly cards on mobile
- Filters stack into full-width controls; modals become bottom sheets; all targets ≥ 40 px

---

## 📄 License

MIT — built as a product demonstration. Verify all government-scheme details on official portals.
