# UX Dashboard

An **interactive data visualization dashboard** built with **Next.js** and **TypeScript**.  
Designed to demonstrate **best practices in UX, accessibility, and data storytelling**, 
it includes dynamic charts, filters, searches, and polished UI/UX micro‑interactions.

## 🌐 Live Demo

👉 [View on Vercel](https://ux-dashboard.vercel.app/)

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts (or Apache ECharts)
- **Data Source**: Mock REST API / CSV dataset
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library + Playwright
- **Deployment**: Vercel

---

## 📂 Project Structure

```
ux-dashboard/
├─ app/                       # Next.js App Router pages
│  ├─ page.tsx                # Dashboard entry point
│  ├─ charts/                 # Chart pages or sections
│  ├─ filters/                # Filter components / routes
│  └─ api/data/route.ts       # (optional) API for mock data
├─ components/                # UI components (cards, tables, charts)
├─ data/                      # CSV / JSON mock datasets
├─ lib/                       # Data loaders, utils
├─ public/                    # Static assets
├─ styles/                    # Tailwind global styles
├─ package.json
└─ README.md
```

---

## 🧩 Features

- Responsive dashboard layout
- Dynamic charts (bar, line, pie, stacked)
- Filters (date range, category, search)
- Loading / empty / error states
- Accessible design (keyboard, ARIA, contrast)
- Micro‑interactions with Framer Motion
- Export data to CSV (optional)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js LTS (≥ 20)
- npm (or pnpm/yarn)

### Installation
```bash
git clone https://github.com/tonisilvan/ux-dashboard.git
cd ux-dashboard
npm install
```

### Run locally
```bash
npm run dev
# open http://localhost:3000
```

### Production build
```bash
npm run build
npm start
```

---

## 🧪 Testing

- Unit tests with Vitest
- Component tests with RTL
- End‑to‑end with Playwright

Run all tests:
```bash
npm test
```

---

## 📜 Roadmap

- [ ] Add user preferences (light/dark theme)
- [ ] Add CSV export for all datasets
- [ ] Add drill‑down interactions (click chart → table details)
- [ ] Add internationalization (i18n)
- [ ] Deploy demo to Vercel

---

## 📄 License

MIT © Toni Silván
