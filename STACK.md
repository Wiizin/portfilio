# Portfolio Tech Stack & Overview

This document provides a detailed breakdown of the technology stack, project structure, dependencies, and architecture for this modern developer portfolio.

---

## 🛠️ Tech Stack Overview

### **Core Framework & Runtime**
- **[Next.js 16](https://nextjs.org/)** (App Router): React framework for server-side rendering (SSR), static site generation (SSG), optimized asset delivery, and route management.
- **[React 19](https://react.dev/)**: Component-based UI library powering interactive user interfaces.
- **[TypeScript 5](https://www.typescriptlang.org/)**: Type-safe JavaScript providing interface definitions, type checks, and developer productivity.

### **Styling & Design System**
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for ultra-fast, responsive, and customizable styling.
- **[PostCSS](https://postcss.org/)** (`@tailwindcss/postcss`): CSS pre-processor for processing modern CSS syntax and Tailwind directives.
- **[Geist Font](https://vercel.com/font)** (`next/font/google`): Clean, modern typography automatically optimized via Next.js Font Optimization.

### **Animations & Interactivity**
- **[Framer Motion 12](https://www.framer.com/motion/)**: Production-ready animation library for React, driving page transitions, scroll animations, micro-interactions, and visual feedback.

### **Development & Tooling**
- **[ESLint 9](https://eslint.org/)** (`eslint-config-next`): Linter for enforcing consistent code style and preventing common React / Next.js errors.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.

---

## 📁 Project Architecture & Directory Structure

```text
my-portfolio/
├── app/                  # Next.js App Router (pages & layouts)
│   ├── globals.css       # Global styles & Tailwind CSS imports
│   ├── layout.tsx        # Root layout wrapper (Fonts, Metadata)
│   └── page.tsx          # Home page composed of component sections
├── components/           # Reusable React UI components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Introductory hero section
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Portfolio projects showcase
│   ├── Services.tsx      # Provided services & capabilities
│   ├── Testimonials.tsx  # Client reviews & testimonials
│   ├── Contact.tsx       # Contact form & social channels
│   ├── Footer.tsx        # Footer links & copyright
│   └── MouseEffect.tsx   # Interactive custom mouse cursor / particle effect
├── public/               # Static assets (images, icons, favicon)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js framework configuration
├── postcss.config.mjs    # PostCSS build configuration
├── package.json          # Dependencies, scripts, and package metadata
├── tsconfig.json         # TypeScript configuration
└── STACK.md              # Tech stack and project details documentation
```

---

## 📦 Key Dependencies

| Package | Version | Description |
| :--- | :--- | :--- |
| `next` | `^16.2.2` | React Framework for the Web |
| `react` | `^19.2.4` | UI Rendering Library |
| `react-dom` | `^19.2.4` | DOM bindings for React |
| `framer-motion` | `^12.38.0` | Motion engine for smooth UI animations |
| `tailwindcss` | `^4.0.0` | Modern CSS framework |
| `typescript` | `^5.0.0` | Typed superset of JavaScript |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or higher recommended)
- `npm`, `yarn`, `pnpm`, or `bun`

### Installation & Local Development

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev`: Starts the Next.js development server with hot-reloading.
- `npm run build`: Compiles and optimizes the app for production deployment.
- `npm run start`: Runs the built production server locally.
- `npm run lint`: Runs ESLint checks across the codebase.
