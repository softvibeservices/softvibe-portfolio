
---

# 🌊 SoftVibe Services – Modern Software Development Agency

> **Transforming Ideas into Scalable, Production-Ready Digital Solutions**

SoftVibe Services is a modern, high-performance **software development agency website & portfolio platform** built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
It showcases real-world projects, services, and a streamlined client inquiry flow—designed for startups, founders, and growing enterprises.

---

## ✨ Overview

This project serves as:

* 🌐 **Official agency website**
* 💼 **Dynamic portfolio & case studies platform**
* 🚀 **Lead generation & project onboarding system**
* 🎨 **Modern UI/UX reference for SaaS & agency sites**

Built with scalability, performance, and real business use in mind.

---

## 🚀 Features

### 🎨 UI & Experience

* Modern, premium **dark & light themes**
* Fully **responsive** across all devices
* Smooth animations & micro-interactions
* Bento-style & masonry portfolio layouts

### 💼 Portfolio System

* Dynamic portfolio pages using **CSV-driven data**
* SEO-friendly **project detail pages**
* Automatic routing via project `slug`
* Graceful `not-found` handling

### 📩 Lead & Client Flow

* “Start a Project” onboarding page
* Direct Gmail-based inquiry system
* CTA-driven conversion sections
* Clear service & pricing communication

### ⚙️ Developer Experience

* Next.js 14 App Router
* TypeScript-first architecture
* Modular & reusable components
* Clean folder structure
* Tailwind + shadcn/ui components

### 📊 Production Ready

* SEO optimized metadata
* Vercel Analytics integrated
* Performance-focused configuration
* Deployment-ready setup

---

## 🛠️ Tech Stack

| Category      | Technology                  |
| ------------- | --------------------------- |
| Framework     | **Next.js 14 (App Router)** |
| Language      | **TypeScript**              |
| Styling       | **Tailwind CSS**            |
| UI Components | **shadcn/ui + Radix UI**    |
| Animations    | **Framer Motion**           |
| Icons         | **Lucide React**            |
| Analytics     | **Vercel Analytics**        |
| Theming       | **next-themes**             |

---

## 📂 Project Structure

```bash
softvibe-portfolio/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Landing page
│   ├── portfolio/          # Portfolio listing & detail pages
│   └── start/              # Project onboarding flow
│
├── components/
│   ├── landing-page/       # Hero, Services, Projects, CTA, FAQ
│   ├── portfolio/          # Portfolio grids & detail components
│   └── ui/                 # Reusable UI components
│
├── public/
│   └── data/
│       └── portfolio-sample.csv
│
├── utils/
│   └── csv-parser.tsx      # Portfolio data loader
│
├── styles/                 # Global styles
└── types/                  # Global TypeScript definitions
```

---

## 📊 Portfolio Data (CSV Driven)

Projects are managed using a simple CSV file:

```
public/data/portfolio-sample.csv
```

### CSV Columns

| Column              | Description           |
| ------------------- | --------------------- |
| `Slug`              | URL identifier        |
| `Title`             | Project name          |
| `Logo`              | Logo image path       |
| `Main Image`        | Hero image            |
| `Short Description` | Summary               |
| `Project URL`       | Live demo (optional)  |
| `Content`           | Detailed HTML content |
| `Sort Order`        | Date (YYYY-MM-DD)     |

✔️ No database
✔️ Easy updates
✔️ CMS-like workflow

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/softvibeservices/softvibe-portfolio.git
cd softvibe-portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🎨 Customization Guide

### 🔹 Branding

* Update logo in `/public/softvibe-logo.png`
* Change favicon in `/public/softvibe-favicon.png`
* Edit colors in `app/globals.css`

### 🔹 Content

* Hero section → `components/landing-page/hero.tsx`
* Services → `components/landing-page/services.tsx`
* FAQ → `components/landing-page/faq.tsx`
* Portfolio → `portfolio-sample.csv`

### 🔹 SEO

* Global metadata → `app/layout.tsx`
* Portfolio SEO → `app/portfolio/[slug]/page.tsx`

---

## 🚀 Deployment

### ✅ Vercel (Recommended)

1. Push to GitHub
2. Import project into **Vercel**
3. Deploy with default settings

✔️ Automatic builds
✔️ Global CDN
✔️ Analytics included

---

## 💡 Use Cases

* Software Development Agencies
* Freelancers & Consultants
* SaaS Founders
* Startup MVP Showcases
* Portfolio Websites

---

## 📜 License

This project is released under the **MIT License**.
You are free to **use, modify, and deploy** it for personal or commercial projects.

---

## 🤝 Contact & Support

📧 **Email:** [softvibeservices@gmail.com](mailto:softvibeservices@gmail.com)
🐙 **GitHub:** [https://github.com/softvibeservices](https://github.com/softvibeservices)

If you like this project, ⭐ star the repo and feel free to reach out!

---

### 🌟 SoftVibe Services

**Building software that scales with your vision.**

---

