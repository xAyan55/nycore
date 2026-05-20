# Nyxore.Cloud — Landing Page & Plans Dashboard

A premium, modern SaaS landing page and interactive plans configurator for Nyxore.Cloud, specializing in KVM VPS Hosting and Game Servers.

---

## ⚡ Tech Stack

*   **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Bundler**: [Vite 8](https://vite.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Key Features

1.  **Sleek Glassmorphic Brand Aesthetics**: Premium dark theme with deep purple, vibrant purple, and soft pink glow highlights.
2.  **Standalone Navbar Sub-pages**: Fully integrated pages for `/vps-hosting`, `/minecraft-hosting`, `/features`, `/pricing`, `/why-us`, and `/faq`.
3.  **KVM VPS Tier Switcher**: Seamlessly toggle between **Budget VPS** and **Premium VPS** pricing tiers.
4.  **Custom Plan Calculator**: Real-time slider adjustments for CPU cores, RAM, and SSD storage, auto-computing prices dynamically.
5.  **8 Minecraft Plan Tiers**: Updated slot allocations, speeds, memory, and custom game features.
6.  **Discord referral links**: All "Deploy Server" CTAs point directly to your Discord community board.

---

## 💻 Local Development

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Run Dev Server
Start the local hot-reloading development server:
```bash
npm run dev
```

### 3. Build for Production
Generate the optimized static distribution bundle in `/dist`:
```bash
npm run build
```

---

## 🌐 Deploying to Any Custom Domain

Since this application is a Single Page Application (SPA) utilizing `react-router-dom` client-side navigation, web servers must redirect all page requests to `index.html` to avoid 404 errors on browser reload.

We have included configurations for the major hosting networks out-of-the-box.

### A. Vercel (Supported)
We included a [`vercel.json`](file:///c:/Users/User/Desktop/nycore/vercel.json) file at the root. Just link your GitHub repository to Vercel and it will host it on any custom domain instantly.

### B. Netlify & Cloudflare Pages (Supported)
We included a [`_redirects`](file:///c:/Users/User/Desktop/nycore/public/_redirects) file inside the `public/` directory, which copies to the build bundle automatically. All subfolder routes will be cleanly handled.

### C. Nginx VPS Hosting
When deploying the `/dist` directory to Nginx, add the following line inside your `server { location / {} }` configuration block to handle routes:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/nycore/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### D. Apache Web Server
Create a `.htaccess` file inside your web root (`/dist`) with the following rules:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
