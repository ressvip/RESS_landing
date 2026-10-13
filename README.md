# RESS VIP Web Application

> **Your safety. Your ride. Your city.**  
> Official web platform for RESS (VIP SafeGuard Drive Ltd.) — an all-in-one platform for secure ride hailing, on-demand logistics, food delivery, emergency security, and everyday artisan services.

---

## 📁 Codebase Directory Structure

```text
Ress/
├── assets/                          # Static web assets
│   ├── css/
│   │   └── styles.css               # Global brand styles, design tokens & responsive UI
│   ├── js/
│   │   ├── config.js                # Global configuration & dynamic DOM hydration engine
│   │   └── main.js                  # Global client behaviors (navbar blur, cookies, etc.)
│   ├── images/                      # Optimized image assets, logos, and app mockups
│   ├── fonts/                       # Web fonts (OTF, TTF, WOFF, WOFF2, EOT)
│   └── icons/                       # SVG icon library and graphic markers
├── scripts/                         # Build and automation tools
│   ├── generate.js                  # Static page generator for all subpages
│   └── download_assets.js           # Remote asset synchronizer
├── docs/                            # Documentation, architecture specs, and branding notes
├── index.html                       # High-converting main landing page
├── [pages].html                     # Generated subpages (about, drive, eat, legal, etc.)
├── package.json                     # NPM project metadata and commands
├── .gitignore                       # Git exclusion rules
└── README.md                        # Documentation and architecture guide
```

---

## 🚀 Quick Start

### 1. Previewing Locally
To run a local live-reload preview server:

```bash
# Using npm script (serves on http://localhost:3000)
npm run dev
```

Or open `index.html` directly in any modern web browser.

### 2. Regenerating Static Pages
All secondary pages (Ride, Eat, Security, Business, Legal, etc.) are built systematically from `scripts/generate.js`.

```bash
npm run build
```

This ensures identical navigation, footer links, cookie compliance, and meta tags across all 24 web pages.

### 3. Downloading Remote Assets
To synchronize remote brand assets from the CDN:

```bash
npm run assets:download
```

---

## ⚙️ Configuration & Customization

All brand information, contact details, download links, and social links are centrally managed in:

📂 `assets/js/config.js`

### Variables Available:
- **Brand Information**: Site name, legal company title, tagline, logo paths.
- **Contact Details**: Phone numbers, WhatsApp, customer support emails.
- **App Download URLs**: App Store, Google Play, direct APK download links for Client, Driver, Partner, and Security apps.
- **Social Media**: Links for Facebook, Instagram, YouTube, Twitter/X, and LinkedIn.

### Dynamic Hydration:
Elements with `data-config` or `data-config-href` attributes are automatically hydrated on page load:
```html
<!-- Automatically populates support email -->
<span data-config="contact.emails.support"></span>

<!-- Automatically binds phone call link -->
<a data-config-href="contact.phone">Call Us</a>
```

---

## 🎨 Design System

Defined in `assets/css/styles.css`:
- **Primary Brand Color**: `#22BDB3` (Tropical Teal)
- **Dark Neutral Background**: `#3A3735` / `#000000`
- **Surface & Cards**: `#FFFFFF` / `#FAFAFA`
- **Typography**: Open Sans (`'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif`)
- **Effects**: Backdrop blurs (`backdrop-filter: blur(12px)`), floating layered cards, and custom responsive breakpoints.

---

## 📄 License & Credits

&copy; 2026 **VIP SafeGuard Drive Ltd.** All rights reserved.  
Registered with the Corporate Affairs Commission, Nigeria.
