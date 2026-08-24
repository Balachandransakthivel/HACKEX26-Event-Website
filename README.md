# HACKEX’26 — National Level Hackathon Event Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm Workspaces](https://img.shields.io/badge/pnpm-Workspaces-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

A premium, modern, and fully responsive event website built for **HACKEX’26**, the national-level hackathon organized by **Excel Engineering College** (Techno Debuggers Club).

---

## 🚀 Key Features

- ⚡ **High-Impact Dark Visual System**: Built with modern dark mode aesthetic (`#060b13`), glassmorphism cards, glowing circuitry motifs, and smooth interactive animations.
- 📱 **100% Mobile Responsive Layout**: Padded mobile menu navigation drawer with dark glass overlay, fluid hero typography, and adaptive grid layouts across all mobile screen widths (320px–768px).
- 📌 **Event Overview & Sections**:
  - **Hero & Live Countdown**: Dynamic countdown timer counting down to the live event on 25 September 2026.
  - **About & Official Poster**: Highlights event vision, venue, poster preview modal, and college credentials.
  - **Themes & Tracks**: Healthcare, EduTech, FinTech, Industrial 5.0, and Open Innovation.
  - **2-Round Process & Schedule**:
    - **Round 1**: Online PPT Selection (**100% Free Entry**).
    - **Round 2**: 36-Hour On-Campus Hackathon at Excel Engineering College (₹1,500 per team collected only after selection).
  - **Prizes & Perks**: Trophy, certificates, cash prizes, food/accommodation, and networking.
  - **Rules & Evaluation Criteria**: Transparent scoring parameters and participant guidelines.
  - **FAQs & Student Coordinators**: Quick answers and direct coordinator contact channels.
- 📋 **Direct Google Registration Integration**: Linked directly to official Google Form for seamless team registration and PPT uploads.

---

## 🛠️ Tech Stack

### **Frontend App (`artifacts/hackex26`)**
- **Framework**: React 19 + TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 + Custom Modern CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **UI Primitives**: Radix UI

### **Monorepo Workspace (`artifacts/api-server`, `artifacts/mockup-sandbox`)**
- **Package Manager**: pnpm Workspaces
- **API Server**: Express 5 + Pino Logging
- **Database / ORM**: Drizzle ORM + PostgreSQL ready

---

## 📁 Repository Structure

```text
Event-Website-Builder-1/
├── artifacts/
│   ├── hackex26/               # Main frontend hackathon website
│   │   ├── src/
│   │   │   ├── components/     # UI components and event section components
│   │   │   │   ├── sections/   # Hero, About, Themes, Process, Prizes, Rules, Registration, Header, Footer
│   │   │   │   └── ui/         # WelcomeSplash, Reveal, SectionHeading, Tooltip, Toast
│   │   │   ├── constants.ts    # Centralized data, themes, nav items, and Google Form URL
│   │   │   ├── index.css       # Visual design system, dark mode tokens, and media queries
│   │   │   └── App.tsx         # Main page router and layout shell
│   │   ├── vite.config.ts      # Vite configuration
│   │   └── package.json
│   ├── api-server/             # Backend API server scaffold
│   └── mockup-sandbox/         # UI sandbox environment
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── package.json                # Root workspace configuration
└── README.md                   # Documentation
```

---

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed on your environment:
- **Node.js**: `v20.x` or higher
- **pnpm**: `v10.x` (Install via `npm i -g pnpm`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Balachandransakthivel/HACKEX26-Event-Website.git
   cd HACKEX26-Event-Website
   ```

2. **Install workspace dependencies**:
   ```bash
   pnpm install
   ```

---

## 🏃 Running locally

### Development Mode

Start the local development server for the HACKEX’26 website:

```bash
pnpm --filter @workspace/hackex26 run dev
```

The application will be running live at:  
👉 **`http://localhost:5000`**

### Type Checking & Building

- **Run full TypeScript typecheck across all workspace packages**:
  ```bash
  pnpm run typecheck
  ```

- **Build production assets**:
  ```bash
  pnpm run build
  ```

---

## 🌐 Deploying to Production

The compiled static assets will be output to `artifacts/hackex26/dist/public/`.

- **Vercel**:
  - Root Directory: `artifacts/hackex26`
  - Build Command: `pnpm run build`
  - Output Directory: `dist/public`

- **Netlify / Static Hosting**:
  - Publish folder: `artifacts/hackex26/dist/public`

---

## 🏫 Organized By

**Excel Engineering College / Techno Debuggers Club**  
*National Level Hackathon — HACKEX’26*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
