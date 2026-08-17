# HACKEX’26 — National Level Hackathon Event Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm Workspaces](https://img.shields.io/badge/pnpm-Workspaces-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

A premium, modern, and fully responsive event website built for **HACKEX’26**, the national-level hackathon organized by **Excel Engineering College**.

---

## 🚀 Features

- ⚡ **High-Impact Visual System**: Built with modern dark mode aesthetic, dynamic glow effects, circuitry motifs, glassmorphism cards, and fluid animations.
- 📌 **Comprehensive Event Information**:
  - **Hero & Countdown**: Engaging introduction with real-time event timer.
  - **Themes & Domains**: AI/ML, Blockchain, Smart Healthcare, Cyber Security, IoT & Automation, Open Innovation.
  - **Prizes & Pool**: Highlighting grand prize pools, category winners, and participant perks.
  - **Interactive Timeline**: Step-by-step event schedule from registration to finale.
  - **Judging Criteria & Rules**: Transparent evaluation metrics and participant guidelines.
  - **Coordinators & FAQs**: Contact channels and quick answers for attendees.
- 📋 **5-Step Team Registration Flow**:
  - Step 1: Team & Project Details
  - Step 2: Leader & Member Details
  - Step 3: Domain & Track Selection
  - Step 4: Submission & Summary Review
  - Step 5: Generated Registration Pass / Confirmation Copy
  - Features `localStorage` state retention to prevent progress loss.
- 🔌 **Google Apps Script Integration Ready**: Seamlessly sends registration entries directly to a Google Sheet endpoint via standard POST adapter.

---

## 🛠️ Tech Stack

### **Frontend App (`artifacts/hackex26`)**
- **Framework**: React 19 + TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 + Custom Utility CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **UI Components**: Radix UI primitives & custom UI components

### **Workspace & Backend (`artifacts/api-server`, `lib/*`)**
- **Package Manager**: pnpm Workspaces
- **API Server**: Express 5
- **Database / ORM**: PostgreSQL + Drizzle ORM
- **Validation**: Zod schema validation

---

## 📁 Repository Structure

```text
Event-Website-Builder-1/
├── artifacts/
│   ├── hackex26/               # Main frontend single-page hackathon website
│   │   ├── src/
│   │   │   ├── components/     # UI components and registration flow forms
│   │   │   ├── App.tsx         # Main page layout & event content sections
│   │   │   ├── index.css       # Visual system, themes, and animations
│   │   │   └── main.tsx        # Application entry point
│   │   ├── vite.config.ts      # Vite configuration
│   │   └── package.json
│   └── api-server/             # Express API server scaffold
├── lib/
│   ├── api-client-react/       # API hooks
│   ├── api-spec/               # OpenAPI spec & Orval codegen
│   ├── api-zod/                # Zod schemas generated from OpenAPI
│   └── db/                     # Drizzle ORM schema & DB connection
├── pnpm-workspace.yaml         # pnpm workspace configurations
├── package.json                # Root package configuration
└── README.md                   # Documentation
```

---

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed on your environment:
- **Node.js**: v20 or higher
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

## 🏃 Running the Application

### Launch Frontend Web App

To start the Vite development server for the HACKEX’26 website:

```bash
pnpm --filter @workspace/hackex26 run dev
```

The application will be running live at:
👉 **[http://localhost:5000](http://localhost:5000)**

### Type Checking & Building

- **Run full TypeScript typecheck across workspace**:
  ```bash
  pnpm run typecheck
  ```

- **Build production assets**:
  ```bash
  pnpm run build
  ```

---

## ⚙️ Environment Variables

Optionally set environment variables in your environment or `.env` file:

| Variable | Description | Default |
|---|---|---|
| `PORT` | Local port for Vite server | `5000` |
| `BASE_PATH` | Base path URL routing | `/` |
| `VITE_GOOGLE_APPS_SCRIPT_URL` | Google Apps Script Web App URL for receiving registrations in Google Sheets | *Optional* |

---

## 🏫 Organized By

**Excel Engineering College**  
*National Level Hackathon — HACKEX’26*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
