# KAVTORS — Official Technology Brand Website

[![Framework](https://img.shields.io/badge/Framework-React%2019%20%2B%20TypeScript-blue.svg)](https://react.dev/)
[![Build Tool](https://img.shields.io/badge/Build%20Tool-Vite-646CFF.svg)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-38BDF8.svg)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black.svg)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Proprietary%20%2F%20KAVTORS-071A3B.svg)]()

> **Building Modern Digital Experiences**  
> Official web portal and product showcase for **KAVTORS**, engineering intelligent mobile applications, practical AI utilities, and human-centric software solutions.

---

## 🌟 Brand Overview

**KAVTORS** is an official Android developer brand (Google Play Console Account ID: `7594727160353104737`) dedicated to building high-performance native digital experiences.

### The Four Pillars
1. **Innovation**: Next-generation UI paradigms with 100% Jetpack Compose and Material 3 design systems.
2. **Practical AI**: High-utility machine intelligence—contextual summaries, scam protection, and natural-language plot search—without superficial chatbot gimmicks.
3. **Modern Solutions**: Native Kotlin performance combined with low-latency edge cloud backends (Cloudflare Workers & Firebase).
4. **People First**: Zero intrusive ad networks, privacy-first anonymous reporting, and transparent open-source repositories.

---

## 📱 Certified Product Ecosystem

The website showcases KAVTORS' three core Android products, presenting factual telemetry, technical architecture, and verified repository assets:

### 1. K Chat (`com.kunal.kchat`)
* **Status**: **Production** (Live on Google Play)
* **Tagline**: *Make Messaging Smarter — Real-Time Communication × Context Intelligence × Modern Android*
* **Verified Play Store URL**: [https://play.google.com/store/apps/details?id=com.kunal.kchat](https://play.google.com/store/apps/details?id=com.kunal.kchat)
* **Verified GitHub**: [https://github.com/programmer-kunal/KChat](https://github.com/programmer-kunal/KChat)
* **Highlights**: Real-time 1:1 and group messaging, ZEGOCLOUD HD voice/video calling, Firebase AI Logic + Gemini smart reply, thread summarization, semantic context search, Scam Guard phishing heuristic shield, and floating system-wide accessibility overlay extension.

### 2. WeatherSnap (`com.kunal.weathersnap`)
* **Status**: **Closed Testing** (Coming Soon to Google Play)
* **Tagline**: *Snap The Weather — Live Crowd Weather Reporting & Precision Atmospheric Data*
* **Verified GitHub**: [https://github.com/programmer-kunal/WeatherSnap](https://github.com/programmer-kunal/WeatherSnap)
* **Highlights**: Real-time meteorological data via Open-Meteo, CameraX ground-truth photo capture, crowdsourced weather reports with temperature/condition stamps, hyperlocal community feeds, condition filtering, and frictionless anonymous Supabase authentication.

### 3. S Finder (`com.kunal.sfinder`)
* **Status**: **Closed Testing** (Coming Soon to Google Play)
* **Tagline**: *Discover What To Watch — Intelligent Entertainment Discovery Powered by Hybrid Full-Text & Gemini AI*
* **Brand Signature**: *From KAVTORS*
* **Verified GitHub**: [https://github.com/programmer-kunal/S-Finder](https://github.com/programmer-kunal/S-Finder)
* **Highlights**: Natural-language plot and story recall ("plane crash survivors on an island"), cinematic trope discovery, mood and vibe search, bilingual colloquial Hindi/Hinglish query normalization, SQLite FTS5/BM25 indexing with Gemini 3.1 Flash-Lite, TVmaze metadata enrichment, and "Midnight Cinema" dark obsidian & champagne gold theming.

---

## 🛠️ Technology Stack

* **Frontend**: React 19, TypeScript
* **Build System**: Vite 6+
* **Styling**: Tailwind CSS, PostCSS, Autoprefixer
* **Routing**: React Router v7 (`react-router-dom`) with client-side SPA routing
* **Icons**: Lucide Icons (optimized with explicit tree-shaking) + Custom SVG brand marks
* **Design System**: KAVTORS Deep Navy (`#071A3B`), Royal Blue (`#0755E8`), Electric Blue (`#008BFF`), Cyan (`#16D9F2`), Light Ice Blue (`#F0F6FF`), and Dark Navy (`#101E3B`).
* **Deployment Target**: Vercel (`vercel.json` SPA rewrite rules configured)

---

## 📂 Project Structure

```
KAVTORS-Website/
├── public/
│   ├── assets/
│   │   ├── apps/
│   │   │   ├── kchat/         # Screenshots, app logo, and architecture diagrams
│   │   │   ├── weathersnap/   # Forecast screen, photo capture, and community feed
│   │   │   └── sfinder/       # Discovery, filters, and multilingual search screens
│   │   └── brand/
│   │       ├── KAVTORS_Banner.png          # High-resolution brand hero banner
│   │       ├── KAVTORS_Logo.png            # Official brand folded-K icon
│   │       └── PlayConsole_Reference.png   # Verified Play Console telemetry
│   ├── favicon.png            # High-resolution KAVTORS favicon
│   ├── robots.txt             # SEO crawler instructions
│   └── sitemap.xml            # Full XML sitemap
├── src/
│   ├── components/
│   │   ├── AppCard.tsx        # Dynamic product card with configurable CTA
│   │   ├── DynamicIcon.tsx    # Tree-shaken icon mapper
│   │   ├── Footer.tsx         # Brand footer with pillars, links & dev account
│   │   ├── Icons.tsx          # Standalone SVG vector icons
│   │   ├── Navbar.tsx         # Transparent-to-glass responsive navigation
│   │   ├── ScrollToTop.tsx    # Smooth window scroll on route navigation
│   │   └── StatusBadge.tsx    # Configurable status pill (Production/Testing/Coming Soon)
│   ├── data/
│   │   └── apps.ts            # Centralized, scalable application metadata
│   ├── pages/
│   │   ├── AboutPage.tsx      # Mission, vision, core pillars & developer credentials
│   │   ├── AppDetailPage.tsx  # Detailed product specifications, workflows & gallery
│   │   ├── AppsPage.tsx       # Comprehensive ecosystem showcase with status filters
│   │   ├── ContactPage.tsx    # Validated contact form with mailto fallback
│   │   └── HomePage.tsx       # Flagship hero, philosophy, featured apps & CTA
│   ├── App.tsx                # Route architecture
│   ├── index.css              # Tailwind utilities, glassmorphism & gradients
│   └── main.tsx               # React DOM entry point
├── index.html                 # Open Graph, Twitter cards, meta tags & typography
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Custom KAVTORS theme tokens & shadows
├── tsconfig.json              # TypeScript project reference
├── vercel.json                # Single-Page-Application URL rewrites
└── vite.config.ts             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher (v20+ recommended)
* **npm**: v9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/programmer-kunal/KAVTORS-Website.git

# Enter the project directory
cd KAVTORS-Website

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
The development server will launch at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Generates a minified, tree-shaken, production-optimized build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   Ensure all changes are committed and pushed to a repository named `KAVTORS-Website` under your GitHub account.

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New** → **Project**.
   - Select the `KAVTORS-Website` repository.

3. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click **Deploy**. Vercel will build the project and issue a live URL (e.g. `https://kavtors.vercel.app`).
   - The included `vercel.json` ensures direct deep-links (like `/apps/kchat` or `/about`) resolve smoothly without 404 errors.

---

## 🛡️ License

Copyright © 2024–2026 KAVTORS. All rights reserved.  
Building Modern Digital Experiences.
