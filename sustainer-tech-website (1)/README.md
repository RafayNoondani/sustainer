# Sustainer Tech - Small Business Operations Automation Agency

Modern, high-conversion multi-page agency website built for **Sustainer Tech** with React, Tailwind CSS, TypeScript, and Vite.

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn / pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 4. Build for Production
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory, ready to deploy to any web host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any VPS/cPanel hosting).

---

## 📁 Project Structure

```text
├── index.html                   # HTML entry point with SEO & font optimization
├── package.json                 # Project dependencies & scripts
├── vite.config.ts               # Vite & Tailwind configuration
├── tsconfig.json                # TypeScript compiler configuration
├── public/                      # Static assets (favicons, SVGs, downloadable zip)
└── src/
    ├── App.tsx                  # Main router & page state controller
    ├── main.tsx                 # React entry point
    ├── index.css                # Tailwind base and custom theme styling
    ├── components/
    │   ├── Header.tsx           # 3-Zone top navigation with WhatsApp direct link
    │   ├── Footer.tsx           # Corporate agency footer & compliance badges
    │   ├── SustainerLogo.tsx    # Crisp SVG shield emblem & wordmark
    │   ├── WhatsAppIcon.tsx     # Authentic WhatsApp vector icon
    │   ├── WhatsAppFloatingWidget.tsx # Live bottom-right chat drawer
    │   ├── WorkflowSimulator.tsx# Interactive pipeline simulator demo
    │   ├── RoiCalculator.tsx    # Interactive ROI & payroll savings calculator
    │   ├── BookingModal.tsx     # 20-min operational review booking modal
    │   └── HeadMetadata.tsx     # Dynamic SEO, OpenGraph & Schema.org sync
    ├── pages/
    │   ├── HomePage.tsx         # Overview, Hero, Bento grid & Case study preview
    │   ├── SolutionsPage.tsx    # Detailed 5 core automation pipelines
    │   ├── CaseStudiesPage.tsx  # In-depth case studies with ROI metrics
    │   ├── PricingPage.tsx      # Transparent $2,000 setup + $250/mo plan
    │   ├── AboutPage.tsx        # Agency story & 4-stage sprint methodology
    │   └── ContactPage.tsx      # Interactive inquiry desk & WhatsApp link
    ├── data/
    │   └── agencyData.ts        # Central agency config, case studies & pricing
    └── assets/
        └── images/              # High-res generated case study & hero photography
```

---

## 📞 Agency Contact Details

- **Official Email**: `contact@sustainertech.eu`
- **WhatsApp Desk**: `+3197010267490` (`+31 970 1026 7490`)
- **Direct WhatsApp Link**: `https://wa.me/3197010267490`
- **Headquarters**: Amsterdam, Netherlands (European Union)
- **Pricing**: $2,000 one-time setup sprint + $250/month ongoing cloud maintenance
