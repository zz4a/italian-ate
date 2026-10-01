# 🍕 Italian Ate — Commercial Grade Italian Restaurant E-Commerce

A modern, highly aesthetic, premium, responsive Italian culinary e-commerce application built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Material Design 3**, and **Framer Motion**.

---

## ✨ Key Features & Italian Ate Brand Highlights

- **Material Design 3 System & Italian Culinary Branding:**
  - **Light Mode:** Warm cream (`#FAF6F0`), soft ivory, terracotta, tomato red, olive green, warm beige & gold accents.
  - **Dark Mode:** Deep charcoal (`#121312`), dark espresso, muted burgundy, deep olive, and warm cream text.
  - **Anti-Flicker Script:** Immediate theme detection via inline head script avoiding SSR/Client hydration flashes.
- **Editorial Italian Food Magazine Hero Section:** Asymmetrical composition with high-resolution Italian cuisine photography, M3 extra-large rounded corners, floating ingredient tags, rating badges, and "Made Fresh Daily" badges.
- **Complete Menu Catalog (15+ Items):**
  - Includes compulsory items: **Classic Butter Croissant** (Bakery), **Spaghetti Aglio e Olio** (Pasta), **Pizza Margherita** (Pizza), and **Italian Four-Cheese Mac** (Pasta/Comfort Food).
  - Plus: Lasagna Rustica, Fettuccine Alfredo, Penne Arrabbiata, Truffle Mushroom Risotto, Chicken Parmigiana, Bruschetta Pomodoro, Tiramisu Classico, Panna Cotta, Garlic Parmesan Bread, Lemon Basil Pasta, Italian Soda, etc.
- **Interactive "Build Your Italian Meal":** Custom meal builder (Main + Side + Drink + Dessert) with real-time price calculation and one-click add to cart.
- **Food Detail Modal (M3 Dialog):** Full ingredients list, prep time, spicy level, calories, quantity controls, and review metrics.
- **Floating Cart & Side Drawer:** Bottom-left fixed floating cart button with scale/bounce micro-interactions, badge counter, and slide-in drawer with LocalStorage persistence.
- **Production-Grade Checkout & Payment Gateway Simulation:**
  - Order types: **Delivery** or **Pickup** with time selection.
  - E-Wallets: DANA, ShopeePay, GoPay, QRIS (with dynamic simulated QR code modal & banner disclaimer).
  - Virtual Accounts: BCA, BNI, BRI, Mandiri VA (with dynamic fake VA generator e.g. `8888 2026 1001 XXXXXX`).
  - Unique Order Code Generator: Generates dynamic codes e.g. `IATE-20261001-X7K92P` with one-click copy button.
  - Simulated payment processing state transitions (Pending -> Processing -> Success / Failed).
- **Store Location & Google Maps Integration:** Physical trattoria address, opening hours, directions, and Google Maps embed with aesthetic fallback placeholder.
- **Customer Testimonials & Instagram Masonry Feed:** 8+ realistic customer reviews, menu tags, local/remote image fallback support.

---

## 🛠️ Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js 18+** and **npm** or **yarn** installed.

### 2. Installation
Unzip the downloaded project folder and run:

```bash
cd italian-ate
npm install
```

### 3. Environment Variables Setup
Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
italian-ate/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── catalog/            # Catalog Page
│   │   ├── menu/[slug]/        # Individual Food Detail Page
│   │   ├── checkout/           # Checkout & Payment Page
│   │   ├── order-success/      # Order Confirmation Page
│   │   ├── layout.tsx          # Root Layout with M3 Tokens & Anti-Flicker Script
│   │   ├── page.tsx            # Main Homepage
│   │   └── globals.css         # Custom Tailwind & MD3 Design Variables
│   ├── components/
│   │   ├── cart/               # Floating Cart & Cart Side Drawer
│   │   ├── checkout/           # Checkout Form & Simulated Payment Modal
│   │   ├── shop/               # Hero, ProductCard, FoodDetailModal, BuildMeal, etc.
│   │   └── ui/                 # Navbar, Footer, Toast, SafeImage
│   ├── context/                # Theme, Cart, and Toast Context Providers
│   ├── data/                   # Menu dataset, Testimonials, Categories, Gallery
│   ├── lib/                    # Payment Generators, Order Service, Utils
│   └── types/                  # TypeScript Interfaces (Product, Order, Customer, etc.)
├── .env.local.example          # Environment variables template
├── tailwind.config.js          # Tailwind Configuration with Italian MD3 Palette
└── package.json                # Project Dependencies
```

---

## 💳 Payment Simulation Architecture Note

All payment routines (`lib/paymentService.ts`, `lib/generateFakeVA.ts`, `lib/generateFakeQRIS.ts`, `lib/generateOrderCode.ts`) are **SIMULATION ONLY**. To switch to a live payment gateway (such as Midtrans, Xendit, Stripe, or PayPal), replace the dummy routines with real API client SDK implementations.
