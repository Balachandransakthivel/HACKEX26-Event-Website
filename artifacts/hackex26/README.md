# HACKEX’26 — Single Page Application

This directory contains the main single-page web application for **HACKEX’26** (National Level Hackathon at Excel Engineering College).

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript 5.9
- **Build System**: Vite 7
- **Styling**: Tailwind CSS v4 + Custom Dark Mode Visual System
- **Icons**: Lucide React + React Icons
- **UI Components**: Custom components + Radix UI primitives

## 🚀 Scripts

- `pnpm run dev`: Start local development server on port 5000 (`http://localhost:5000`)
- `pnpm run typecheck`: Run TypeScript type checker
- `pnpm run build`: Build production assets to `dist/public`

## 📁 Directory Structure
```text
src/
├── components/
│   ├── sections/   # Event sections (Hero, About, Themes, Process, Prizes, Rules, FAQ, Registration, Header, Footer)
│   └── ui/         # Reusable UI primitives and intro splash modal
├── constants.ts    # Centralized data & Google Registration Form URL
├── index.css       # Visual system, theme tokens & mobile media queries
└── App.tsx         # Main entry component
```
