# KAVTORS — Official Technology Brand Website

[![Framework](https://img.shields.io/badge/Framework-React%2019%20%2B%20TypeScript-blue.svg)](https://react.dev/)
[![Build Tool](https://img.shields.io/badge/Build%20Tool-Vite%206-646CFF.svg)](https://vitejs.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%203.4-38BDF8.svg)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black.svg)](https://vercel.com/)
[![GitHub](https://img.shields.io/badge/Repository-programmer--kunal%2FKAVTORS-181717.svg)](https://github.com/programmer-kunal/KAVTORS)
[![Developer Account](https://img.shields.io/badge/Google%20Play-7594727160353104737-34A853.svg)](https://play.google.com/store/apps/developer?id=KAVTORS)

> **"Building Modern Digital Experiences"**  
> Official web portal, architectural reference, and digital product showcase for **KAVTORS** — engineering high-performance Android ecosystems, practical artificial intelligence utilities, and human-first mobile software.

---

## 📑 Table of Contents

1. [Executive Summary & Brand Philosophy](#1-executive-summary--brand-philosophy)
2. [Design System & Visual Language](#2-design-system--visual-language)
3. [The Three Application Ecosystems](#3-the-three-application-ecosystems)
   - [App 1: K Chat (Production)](#app-1-k-chat-make-messaging-smarter)
   - [App 2: WeatherSnap (Closed Testing)](#app-2-weathersnap-snap-the-weather)
   - [App 3: S Finder (Closed Testing)](#app-3-s-finder-discover-whattowatch)
4. [Centralized Data Architecture](#4-centralized-data-architecture)
5. [Frontend Technology Stack & Optimizations](#5-frontend-technology-stack--optimizations)
6. [Complete Project File Structure](#6-complete-project-file-structure)
7. [Pages & Component Architecture](#7-pages--component-architecture)
8. [Asset Management & Public Directory](#8-asset-management--public-directory)
9. [SEO, Performance & Accessibility](#9-seo-performance--accessibility)
10. [Local Development, Build & Testing](#10-local-development-build--testing)
11. [GitHub & Vercel Deployment Guide](#11-github--vercel-deployment-guide)
12. [Current State & Strategic Roadmap](#12-current-state--strategic-roadmap)
13. [Prompt Engineering & Gemini Context Guide](#13-prompt-engineering--gemini-context-guide)

---

## 1. Executive Summary & Brand Philosophy

**KAVTORS** is an official Android developer brand (Google Play Console Account ID: `7594727160353104737`) led by Kunal (`@programmer-kunal`). KAVTORS builds purposeful digital products combining native speed, resilient system design, and practical AI.

### Brand Manifesto
* **Name**: KAVTORS
* **Official Tagline**: *Building Modern Digital Experiences*
* **Core Tenet**: We build software that respects user attention. We eliminate dark UX patterns, intrusive advertising networks, artificial subscription gates, and gimmicky AI wrappers.

### The Four Pillars
| Pillar | Definition & Philosophy | Implementation in Code |
| :--- | :--- | :--- |
| **💡 Innovation** | Redefining mobile interactions with fluid, expressive UI standards. | 100% native Jetpack Compose & Material 3 design systems across all client apps. |
| **🧠 Practical AI** | High-utility intelligence embedded directly into workflows, not standalone chat toys. | Contextual summaries, semantic plot matching, scam heuristic protection, and Hinglish query parsing. |
| **⚡ Modern Solutions** | Architecting for extreme speed, low latency, and deterministic resilience. | Serverless edge architectures (Cloudflare Workers, D1 SQLite FTS5) paired with native Kotlin Coroutines/Flow. |
| **👥 People First** | Protecting user privacy, autonomy, and security as foundational requirements. | Frictionless anonymous UUID reporting in WeatherSnap; on-device scam warnings & Room local caching in K Chat. |

---

## 2. Design System & Visual Language

The visual direction draws directly from the official **KAVTORS Brand Banner** (majestic blue mountains, reflective lake waters, celestial glowing orbital arcs) and the **Folded Geometric K Logo**.

### Color Palette

| Token Name | Hex Code | Visual Role |
| :--- | :--- | :--- |
| `Primary / Navy` | `#071A3B` | Deep brand anchor, hero backgrounds, primary action buttons, high-contrast headings. |
| `Dark Navy` | `#040F24` | Ultra-deep backdrop, footer backgrounds, dark specification matrices. |
| `Deep Blue` | `#0A2558` | Intermediate gradient stop, container backdrops, elevated dark cards. |
| `Secondary / Royal` | `#0755E8` | High-impact interactive elements, active navigation pills, primary links, brand accents. |
| `Accent / Electric Blue` | `#008BFF` | Gradient highlights, animated glowing borders, button hover states. |
| `Highlight / Cyan` | `#16D9F2` | Luminous focus badges, pulsing telemetry dots, secondary brand gradient accents. |
| `Background / Clean White` | `#FFFFFF` | Primary canvas, card backgrounds, maximum legibility. |
| `Secondary / Light Blue` | `#F0F6FF` | Soft tinted card backgrounds, badge containers, subtle alternating sections. |
| `Text Navy` | `#101E3B` | Primary body typography with optimal WCAG contrast. |
| `Slate / Muted` | `#5B6B87` | Descriptive prose, metadata timestamps, secondary labels. |

### Aesthetic Guidelines
* **Glassmorphism**: Soft backdrop blur (`blur-md` to `blur-2xl`) combined with delicate borders (`border-white/10` or `border-brand-royal/10`).
* **Subtle Ambient Lighting**: Layered radial blur gradients simulating the mountain/lake twilight horizon.
* **Prohibited Aesthetics**: No purple-heavy gradients, no distracting neon strobes, no generic corporate stock styling, and no excessive ungrounded animations.

---

## 3. The Three Application Ecosystems

The KAVTORS website is engineered around three verified Android applications. All facts, features, architectures, and assets originate directly from their upstream repositories and Play Console verification.

```
                    ┌───────────────────────────────┐
                    │            KAVTORS            │
                    │   Digital Product Ecosystem   │
                    └───────────────┬───────────────┘
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
┌────────┴────────┐        ┌────────┴────────┐        ┌────────┴────────┐
│     K CHAT      │        │  WEATHER SNAP   │        │    S FINDER     │
│  Production     │        │ Closed Testing  │        │ Closed Testing  │
│  Messaging + AI │        │ Crowd Weather   │        │ Smart Discovery │
└─────────────────┘        └─────────────────┘        └─────────────────┘
```

---

### App 1: K Chat: Make Messaging Smarter

* **Package Name**: `com.kunal.kchat`
* **Release Channel**: **Production** (Live and verified on Google Play)
* **Play Store URL**: [https://play.google.com/store/apps/details?id=com.kunal.kchat](https://play.google.com/store/apps/details?id=com.kunal.kchat)
* **GitHub Repository**: [https://github.com/programmer-kunal/KChat](https://github.com/programmer-kunal/KChat)
* **Tagline**: *Real-Time Communication × Context Intelligence × Modern Android*
* **Core Philosophy**: "Don't just deliver the conversation. Understand the conversation."

#### Verified Capabilities & Features
1. **Real-Time Communication**: 1:1 and group conversations, live typing indicators, delivery and read receipts, online/last seen presence indicators.
2. **High-Definition Calling**: ZEGOCLOUD SDK integration providing low-latency 1:1 voice and video calling with dedicated incoming/outgoing/active state UI.
3. **Smart Reply Pills**: Analyzes recent conversation history via Firebase AI Logic + Gemini to generate 3 contextually tailored reply pills.
4. **Automated Thread Summary**: Condenses long missed message threads into clean, bulleted summaries.
5. **Semantic Context Search**: Natural-language message history search without requiring exact substring matching.
6. **Scam Guard Heuristic Shield**: Evaluates incoming texts for phishing patterns, impersonation, emergency wire requests, and hazardous links, displaying prominent warning banners.
7. **K Chat System-Wide Extension**: Floating Android accessibility overlay bringing Smart Reply, Thread Summary, Context Search, and Scam Guard into any third-party messaging app.
8. **Security & Storage**: End-to-end encrypted message flow, Room database local caching, Supabase storage bucket for attachments up to 50MB.

#### Technical Specifications
* **Languages**: Kotlin, TypeScript
* **UI**: 100% Jetpack Compose with Material 3 theming
* **Architecture**: Clean Architecture, MVVM, Kotlin Coroutines & Flow, Room DB
* **Backend Services**: Firebase Auth, Firebase Realtime Database, Firebase Cloud Messaging (FCM), Supabase Storage
* **AI Pipelines**: Firebase AI Logic, Google Gemini models
* **SDKs**: ZEGOCLOUD Voice/Video Calling SDK, Android Accessibility Services

---

### App 2: WeatherSnap: Snap The Weather

* **Package Name**: `com.kunal.weathersnap`
* **Release Channel**: **Closed Testing** (No fake download links displayed)
* **GitHub Repository**: [https://github.com/programmer-kunal/WeatherSnap](https://github.com/programmer-kunal/WeatherSnap)
* **Tagline**: *Live Crowd Weather Reporting & Precision Meteorological Data*
* **Core Philosophy**: Bridges the gap between numerical satellite forecasts and authentic ground-truth conditions observed by real people.

#### Verified Capabilities & Features
1. **Precision Atmospheric Dashboard**: Real-time meteorological telemetry from Open-Meteo REST API (temperature, feels-like, humidity, wind velocity, barometric pressure, UV index, precipitation).
2. **Ground Truth Photo Capture**: CameraX integration allowing users to snap authentic sky and weather photos.
3. **Crowdsourced Weather Reports**: Publish reports stamped with live temperature, weather conditions, photo, and location coordinates.
4. **Hyperlocal Community Feed**: Chronological feed of nearby weather reports with timestamps and visual confirmation.
5. **Condition Filtering**: Instant filtering by weather phenomenon (Clear, Rain, Storm, Snow, Fog, Clouds).
6. **Anonymous Supabase Identity**: Zero-friction anonymous UUID authentication enabling immediate community contribution without cumbersome signup forms.
7. **Offline Cache & Management**: Save reports locally in Room Database; full authority to inspect or delete personal contributions.

#### Technical Specifications
* **Language**: Kotlin
* **UI**: Jetpack Compose, Material 3
* **Architecture**: MVVM, Kotlin Coroutines, StateFlow, Room DB
* **Backend Services**: Supabase PostgreSQL Database, Supabase Storage Bucket
* **Integrations**: Open-Meteo API, Android CameraX, Google Play Services `FusedLocationProviderClient`

---

### App 3: S Finder: Discover WhatToWatch

* **Package Name**: `com.kunal.sfinder`
* **Release Channel**: **Closed Testing** (No fake download links displayed)
* **Brand Signature**: *"From KAVTORS"*
* **GitHub Repository**: [https://github.com/programmer-kunal/S-Finder](https://github.com/programmer-kunal/S-Finder)
* **Tagline**: *Intelligent Entertainment Discovery Powered by Hybrid Full-Text & Gemini AI*
* **Core Philosophy**: Eliminates the frustration of forgotten movie and TV titles by enabling natural-language, story-based, and mood-driven discovery.

#### Verified Capabilities & Features
1. **Natural-Language Story Recall**: Search using vague recollections, scene fragments, or plotlines (e.g., *"plane crash survivors on a mysterious island with supernatural secrets"*).
2. **Cinematic Trope & Relationship Search**: Explores archetypes like *"enemies to lovers"*, *"time loop reliving the past"*, *"heist where the plan goes wrong"*, or *"detective with amnesia"*.
3. **Mood & Vibe Search**: Match emotional preferences (e.g., *"wholesome heartwarming family comedy"* or *"dark psychological thriller with unexpected twists"*).
4. **Multilingual & Hinglish Query Normalization**: Handles colloquial Hindi and Hinglish phrasing seamlessly (e.g., *"mujhe ek romantic movie chahiye jisme unexpected twist ho"*).
5. **Typo-Tolerant Engine**: Dual-layer recovery combining SQLite FTS5 BM25 scoring with Google Gemini query analysis.
6. **Transparent Match Explanations**: Every result card displays a concise AI reasoning note explaining *why* the title matches the query.
7. **Unified Catalog & Granular Filtering**: Filter across feature films and episodic series by format, genre, release era, and country of origin with state-preserving pagination.
8. **Midnight Cinema Visual Identity**: Dark interface crafted with obsidian (`#0B0B0D`), champagne gold (`#D4AF65`), and velvet burgundy (`#78303C`).

#### Technical Specifications
* **Languages**: Kotlin 2.2.10, TypeScript
* **Android Target**: compileSdk 36, targetSdk 36, minSdk 26
* **UI Framework**: Jetpack Compose (BOM `2026.02.01`), Material 3
* **Backend Runtime**: Cloudflare Workers (Edge serverless, TypeScript)
* **Edge Database**: Cloudflare D1 (Distributed serverless SQLite with FTS5 virtual tables)
* **AI Intelligence**: Google Gemini API (`gemini-3.1-flash-lite`) for intent understanding and semantic re-ranking
* **Metadata Enrichment**: TVmaze REST API for verified posters and broadcast schedules
* **Test Suite**: 227 automated tests across 38 suites

---

## 4. Centralized Data Architecture

All application data is decoupled from the UI inside [`src/data/apps.ts`](file:///d:/KAVTORS/src/data/apps.ts). This ensures that adding a 4th application or changing a release status requires **zero modifications to page components**.

### Core Types & Interface Schema
```typescript
export type ReleaseStatus = 'Production' | 'Closed Testing' | 'Coming Soon';

export interface AppFeature {
  title: string;
  description: string;
  iconName: string; // Mapped dynamically in DynamicIcon.tsx
}

export interface AppScreenshot {
  url: string;
  caption: string;
  category?: 'core' | 'ai' | 'features';
}

export interface AppData {
  id: string;                      // e.g. 'kchat', 'weathersnap', 'sfinder'
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  packageName: string;
  releaseStatus: ReleaseStatus;
  statusBadge: string;
  playStoreUrl: string | null;     // null for non-production apps
  githubUrl: string;
  accentColor: string;
  gradient: string;
  highlights: string[];
  features: AppFeature[];
  screenshots: AppScreenshot[];
  techStack: {
    language: string[];
    ui: string[];
    architecture: string[];
    cloudBackend: string[];
    aiServices?: string[];
    integrations?: string[];
  };
  metrics?: { label: string; value: string }[];
  howItWorks: { step: string; title: string; description: string }[];
}
```

### Dynamic CTA Rule Engine
* If `releaseStatus === 'Production'` and `playStoreUrl != null`:
  * Renders green Google Play Store CTA button with verified deep link.
* If `releaseStatus === 'Closed Testing'`:
  * Renders amber "Closed Testing • Coming Soon" status pill. Never renders a fake or broken download link.
* If `releaseStatus === 'Coming Soon'`:
  * Renders blue "In Active Development" status pill.

---

## 5. Frontend Technology Stack & Optimizations

* **React 19 + TypeScript**: Strict mode with `verbatimModuleSyntax` compliance.
* **Vite 6**: Fast ESM development server and Rollup production builder.
* **Tailwind CSS 3.4**: Configured with custom KAVTORS brand tokens and extended shadows.
* **React Router v7**: Declarative client-side routing with clean URL parameters.
* **Bundle Optimization**: Explicit tree-shaking in [`src/components/DynamicIcon.tsx`](file:///d:/KAVTORS/src/components/DynamicIcon.tsx) reduced the production JavaScript bundle from **1,187 kB to 360 kB (106 kB gzipped)**.
* **Zero External CSS Bloat**: Standardized on utility-first Tailwind classes.

---

## 6. Complete Project File Structure

```
d:\KAVTORS\
├── public/
│   ├── assets/
│   │   ├── apps/
│   │   │   ├── kchat/                   # 24 verified screenshots & icons
│   │   │   │   ├── KChatLogo.png
│   │   │   │   ├── DirectChatHomeScreen.jpg
│   │   │   │   ├── ChattingScreen.jpg
│   │   │   │   ├── SmartReplyUI.jpg
│   │   │   │   ├── ThreadSummaryUI.jpg
│   │   │   │   ├── ScamGuardUI.jpg
│   │   │   │   ├── ContextSearchUI.jpg
│   │   │   │   ├── GroupChatHomeScreen.jpg
│   │   │   │   └── KChatExtensionUI.jpg
│   │   │   ├── weathersnap/             # 7 verified screenshots & icons
│   │   │   │   ├── icon.jpg
│   │   │   │   ├── splash.jpg
│   │   │   │   ├── home.jpg
│   │   │   │   ├── create.jpg
│   │   │   │   ├── allreports.jpg
│   │   │   │   ├── reports.jpg
│   │   │   │   └── myreports.jpg
│   │   │   └── sfinder/                 # 7 verified screenshots & icons
│   │   │       ├── icon.jpg
│   │   │       ├── splash.jpeg
│   │   │       ├── home.jpeg
│   │   │       ├── multilingual.jpeg
│   │   │       ├── results.jpeg
│   │   │       ├── filters.jpeg
│   │   │       └── filter-results.jpeg
│   │   └── brand/
│   │       ├── KAVTORS_Banner.png        # Primary brand visual reference
│   │       ├── KAVTORS_Logo.png          # Official brand folded-K icon
│   │       └── PlayConsole_Reference.png # Play Console screenshot reference
│   ├── favicon.png                      # High-res favicon
│   ├── robots.txt                       # Search engine crawler instructions
│   └── sitemap.xml                      # Canonical URL index
├── src/
│   ├── components/
│   │   ├── AppCard.tsx                  # Modular product card with status logic
│   │   ├── DynamicIcon.tsx              # Tree-shaken icon resolver
│   │   ├── Footer.tsx                   # Global brand footer with pillars & legal
│   │   ├── Icons.tsx                    # Hand-crafted SVG vectors (GitHub, etc.)
│   │   ├── Navbar.tsx                   # Transparent-to-glass responsive header
│   │   ├── ScrollToTop.tsx              # Router listener ensuring top scroll
│   │   └── StatusBadge.tsx              # Standardized release status component
│   ├── data/
│   │   └── apps.ts                      # Single source of truth for ecosystem data
│   ├── pages/
│   │   ├── AboutPage.tsx                # Brand story, mission, vision & values
│   │   ├── AppDetailPage.tsx            # Deep specifications, gallery & lightbox
│   │   ├── AppsPage.tsx                 # Full catalog with dynamic filter tabs
│   │   ├── ContactPage.tsx              # Form with validation & mailto fallback
│   │   └── HomePage.tsx                 # Hero, 4 pillars, architecture & lifecycle
│   ├── App.tsx                          # Route definitions and layout shell
│   ├── index.css                        # Tailwind directives & glass utilities
│   └── main.tsx                         # DOM entry point
├── .gitignore                           # Excludes node_modules, dist, .env, scripts
├── index.html                           # SEO metadata, Open Graph & typography
├── package.json                         # Project dependencies and build scripts
├── postcss.config.js                    # PostCSS processor setup
├── tailwind.config.js                   # Custom brand colors & shadow tokens
├── tsconfig.json                        # TypeScript root project reference
├── vercel.json                          # SPA rewrite rules for direct URL routing
└── vite.config.ts                       # Vite compiler plugins
```

---

## 7. Pages & Component Architecture

### Route Map
* **`/` (HomePage)**: Flagship landing page featuring atmospheric hero banner, 4 pillars, featured cards, architecture overview, production lifecycle, and CTA.
* **`/apps` (AppsPage)**: Ecosystem showcase featuring status filter buttons (`All Applications`, `Production`, `Closed Testing`) and full technical summaries.
* **`/apps/:appId` (AppDetailPage)**: Individual deep-dive page with breadcrumbs, telemetry, 6 feature cards, workflow pipeline, interactive lightbox screenshot gallery, and 3-column technical specifications.
* **`/about` (AboutPage)**: Brand mission, vision, four pillars in depth, people-first philosophy, and Play Console developer credentials.
* **`/contact` (ContactPage)**: Form with client-side validation, error handling, staged dispatch state, `mailto:` mail client generator, and closed testing tester opt-in.
* **`*`**: Wildcard catch-all safely redirecting to `/`.

---

## 8. Asset Management & Public Directory

All assets are located in [`public/assets/`](file:///d:/KAVTORS/public/assets/):
* Aspect ratios and resolutions from the upstream repositories are preserved without distortion.
* Original brand assets ([`KAVTORS_Banner.png`](file:///d:/KAVTORS/public/assets/brand/KAVTORS_Banner.png) and [`KAVTORS_Logo.png`](file:///d:/KAVTORS/public/assets/brand/KAVTORS_Logo.png)) serve as the visual core of the brand.
* All image tags utilize lazy loading (`loading="lazy"`) and descriptive alt attributes for accessibility.

---

## 9. SEO, Performance & Accessibility

* **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, and `<footer>` landmarks.
* **Social Sharing**: Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter Card tags configured in `index.html`.
* **Typography**: Self-hosted/preconnect Google Fonts (*Plus Jakarta Sans* and *Outfit*).
* **Search Engine Crawling**: Verified `robots.txt` and `sitemap.xml` pointing to canonical paths.
* **WCAG Compliance**: High contrast ratios on text elements (Navy `#101E3B` on light backgrounds; clean White on `#071A3B` / `#040F24`).

---

## 10. Local Development, Build & Testing

### Installation
```bash
# Navigate to project directory
cd d:\KAVTORS

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
# Launches local Vite dev server at http://localhost:5173/
```

### Production Build & Preview
```bash
# Type check and generate production bundle
npm run build

# Preview production build locally
npm run preview
# Serves dist/ at http://localhost:4173/
```

---

## 11. GitHub & Vercel Deployment Guide

### Remote Repository
* **GitHub URL**: [https://github.com/programmer-kunal/KAVTORS](https://github.com/programmer-kunal/KAVTORS)
* **Default Branch**: `main`
* **Clean Working Tree**: Verified with zero uncommitted changes.

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Select the `programmer-kunal/KAVTORS` repository.
4. Settings are automatically recognized:
   * **Framework Preset**: `Vite`
   * **Root Directory**: `./`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Click **Deploy**.
6. The included [`vercel.json`](file:///d:/KAVTORS/vercel.json) handles SPA rewrites so direct navigation to `/apps/kchat` or `/about` will resolve without 404 errors.

---

## 12. Current State & Strategic Roadmap

### Current Production State
* [x] Official responsive brand website built and verified.
* [x] Authentic assets extracted and integrated from KChat, WeatherSnap, and S-Finder repositories.
* [x] Verified Google Play production link active for K Chat.
* [x] Closed testing status tags accurately displayed for WeatherSnap and S Finder.
* [x] Pushed to official GitHub repository (`programmer-kunal/KAVTORS`).

### Near-Term Plans
* **WeatherSnap Launch**:
  * Transition from Closed Testing track to Open Testing / Production on Google Play.
  * Update `playStoreUrl` in `src/data/apps.ts` to reveal the Google Play download button.
* **S Finder Launch**:
  * Transition from Closed Testing track to Production on Google Play.
  * Add verified Play Store URL to `src/data/apps.ts`.
* **Contact Backend**:
  * Connect contact form to a serverless email service (e.g., Resend, Formspree, or EmailJS) by adding an API route or endpoint handler.
* **Live Ecosystem Telemetry**:
  * Connect to Google Play Developer API to display real-time live download and rating counters.

---

## 13. Prompt Engineering & Gemini Context Guide

> **Notice for Gemini & AI Agents**:  
> When generating prompts, tasks, or feature updates for Antigravity or any development agent using this README, use the following structured templates and constraints.

### Master Context Snippet (Copy-Paste into Gemini Prompts)
```markdown
You are working on the official KAVTORS website repository (d:\KAVTORS).
KAVTORS is an official Android technology brand (Play Console ID: 7594727160353104737).
Brand Colors: Deep Navy (#071A3B), Royal Blue (#0755E8), Electric Blue (#008BFF), Cyan (#16D9F2).
Three Apps:
1. K Chat (com.kunal.kchat) - Production (Play Store URL active)
2. WeatherSnap (com.kunal.weathersnap) - Closed Testing (NO fake download links)
3. S Finder (com.kunal.sfinder) - Closed Testing, "From KAVTORS" (NO fake download links)
Architecture: React 19 + TypeScript + Vite + Tailwind CSS + React Router v7.
Central Data: src/data/apps.ts controls all application metadata.
Do not distort brand identity. Never commit secrets or build artifacts.
```

### Rules to Enforce in All Future Prompts
1. **Never Invent Features**: Only extract verified features from the source code or READMEs of KChat, WeatherSnap, and S-Finder.
2. **Strict Download Link Policy**: Never display a Google Play button for an app that does not have an active, verified production listing (`playStoreUrl`).
3. **Data Isolation**: Never hardcode app descriptions or features inside page components. Always update `src/data/apps.ts`.
4. **Bundle Discipline**: When adding icons, import them explicitly in `src/components/DynamicIcon.tsx` or `src/components/Icons.tsx` to maintain the ~106 kB gzipped bundle footprint.
5. **SPA Routing Integrity**: Any new route must be registered in `src/App.tsx` and covered by `vercel.json` rewrites.

---

*Copyright © 2024–2026 KAVTORS. All rights reserved. Building Modern Digital Experiences.*
