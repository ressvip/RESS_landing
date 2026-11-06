/**
 * RESS Web Application - Global Site Configuration
 * 
 * Update any variable in this file, and changes will automatically reflect
 * across all web pages and components dynamically.
 */

const SITE_CONFIG = {
    // Brand & Website Information
    brand: {
        name: "RESS",
        tagline: "Your safety. Your ride. Your city.",
        description: "RESS is your all-in-one platform for secure ride hailing, on-demand logistics, food delivery, emergency security, and connecting you to trusted everyday services.",
        companyLegalName: "VIP SafeGuard Drive Ltd.",
        registrationNote: "Registered with the Corporate Affairs Commission, Nigeria.",
        websiteUrl: "https://www.ressvip.com/",
        logoUrl: "assets/images/Logo.svg",
        footerLogoUrl: "assets/images/Footer-20logo.svg"
    },

    // SEO, Open Graph & Social Graph Defaults
    seo: {
        defaultImage: "assets/images/03.png",
        imageWidth: "1200",
        imageHeight: "630",
        imageType: "image/png",
        keywords: "RESS, Ride Hailing, Logistics, Food Delivery, Services, Artisan Booking, Africa Transport, Secure Rides",
        fbAppId: "YOUR_FB_APP_ID_HERE",
        appleAppId: "YOUR_APPLE_STORE_ID",
        androidPackage: "com.ress.app"
    },

    // Contact Information
    contact: {
        phone: "+234 707 716 0028",
        phoneRaw: "+2347077160028", // Used for direct tel: links
        whatsapp: "+2347077160028",
        emails: {
            general: "info@ressvip.com",
            support: "support@ressvip.com",
            careers: "careers@ressvip.com",
        },
        address: "Lagos, Nigeria"
    },

    // Mobile App Download Links
    apps: {
        // Main RESS Client App (Rider / Food / SOS / Services)
        client: {
            name: "RESS Client App",
            appStore: "https://apps.apple.com/ng/app/ress-vip/id6770544009",
            playStore: "https://play.google.com/store/apps/details?id=com.ress.app",
            apkDirectDownload: "#"
        },
        // RESS Driver App
        driver: {
            name: "RESS Driver App",
            appStore: "https://apps.apple.com/ng/app/ress-vip-driver/id6770547732",
            playStore: "https://play.google.com/store/apps/details?id=com.ress.driver_app",
            apkDirectDownload: "#"
        },
        // RESS Service Partner / Artisan App
        services: {
            name: "RESS Partner App",
            appStore: "#",
            playStore: "#",
            apkDirectDownload: "#"
        },
        // RESS Security Responder App
        security: {
            name: "RESS Security Responder App",
            appStore: "https://apps.apple.com/ng/app/ress-vip/id6770544009",
            playStore: "https://play.google.com/store/apps/details?id=com.ress.responder",
            apkDirectDownload: "#"
        },
        // RESS Food Merchant / Restaurant App
        merchant: {
            name: "RESS Merchant App",
            appStore: "https://apps.apple.com/ng/app/ress-vip-restaurant/id6770562444",
            playStore: "https://play.google.com/store/apps/details?id=com.ress.restaurant.app",
            apkDirectDownload: "#"
        }
    },

    // Social Media Links
    socials: {
        facebook: "https://www.facebook.com/ressvip",
        instagram: "https://www.instagram.com/ressvip",
        youtube: "https://www.youtube.com/@ressvip",
        twitter: "https://x.com/ressvip",
    },

    // Key Page Navigation Links
    links: {
        about: "about.html",
        rideOptions: "ride-options.html",
        pricing: "pricing.html",
        safety: "safety.html",
        eat: "eat.html",
        security: "ress-security.html",
        services: "ress-services.html",
        drive: "drive.html",
        business: "business.html",
        cities: "cities.html",
        about: "about.html",
        blog: "blog.html",
        contact: "contact.html",
        help: "help.html",
        getApp: "get-app.html",
        terms: "legal-terms.html",
        privacy: "legal-privacy.html",
        cookies: "legal-cookies.html",
        driverAgreement: "legal-driver-agreement.html",
        communityGuidelines: "legal-community-guidelines.html",
        insurance: "legal-insurance.html",
        legalSecurity: "legal-security.html"
    }
};

/**
 * Dynamic Hydration Engine
 * Automatically scans the document and injects variables into:
 * 1. Elements with `data-config="<path>"` (updates text content)
 * 2. Elements with `data-config-href="<path>"` (updates href with link/tel/mailto)
 * 3. Pre-existing semantic classes and elements (.phone-contact, store buttons, socials, copyright)
 */
function applySiteConfig(config = SITE_CONFIG) {
    if (typeof document === 'undefined') return;

    // Helper: resolve dotted path like "contact.emails.support" or "apps.client.appStore"
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
    };

    // 1. Text elements with data-config attribute
    document.querySelectorAll('[data-config]').forEach(el => {
        const path = el.getAttribute('data-config');
        const val = getNestedValue(config, path);
        if (val !== undefined) {
            el.textContent = val;
        }
    });

    // 2. Link elements with data-config-href attribute
    document.querySelectorAll('[data-config-href]').forEach(el => {
        const path = el.getAttribute('data-config-href');
        let val = getNestedValue(config, path);
        if (val !== undefined) {
            if (path.includes('phone') && !val.startsWith('tel:')) {
                val = `tel:${config.contact.phoneRaw || val.replace(/\s+/g, '')}`;
            } else if (path.includes('email') && !val.startsWith('mailto:')) {
                val = `mailto:${val}`;
            }
            el.setAttribute('href', val);
        }
    });

    // 3. Dynamic Phone Contact elements (.phone-contact)
    document.querySelectorAll('.phone-contact').forEach(el => {
        el.innerHTML = `Phone: <a href="tel:${config.contact.phoneRaw}" style="color: inherit; text-decoration: none;">${config.contact.phone}</a>`;
    });

    // 4. Social Media links
    const socialMap = {
        'Facebook': config.socials.facebook,
        'Instagram': config.socials.instagram,
        'YouTube': config.socials.youtube,
        'Twitter': config.socials.twitter,
        'LinkedIn': config.socials.linkedin
    };
    Object.entries(socialMap).forEach(([platform, url]) => {
        if (!url) return;
        document.querySelectorAll(`.social-icons a[aria-label="${platform}"]`).forEach(a => {
            a.setAttribute('href', url);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        });
    });

    // 5. Intelligent App Store & Google Play button binding
    // Client App download buttons (in Hero, Global CTA, Footer, and Get App client card)
    const clientAppStoreLinks = document.querySelectorAll(`
        .hero-text .store-buttons a:first-child,
        .global-cta-section .cta-text a:first-child,
        .footer-brand .store-buttons a:first-child,
        [data-app="client"] .store-link-ios,
        [data-app-store="client-ios"]
    `);
    clientAppStoreLinks.forEach(a => {
        if (config.apps.client.appStore) {
            a.setAttribute('href', config.apps.client.appStore);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });

    const clientPlayStoreLinks = document.querySelectorAll(`
        .hero-text .store-buttons a:last-child,
        .global-cta-section .cta-text a:last-child,
        .footer-brand .store-buttons a:last-child,
        [data-app="client"] .store-link-android,
        [data-app-store="client-android"]
    `);
    clientPlayStoreLinks.forEach(a => {
        if (config.apps.client.playStore) {
            a.setAttribute('href', config.apps.client.playStore);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Dedicated cards on get-app.html if present
    document.querySelectorAll('[data-app-target]').forEach(card => {
        const appType = card.getAttribute('data-app-target');
        const appConfig = config.apps[appType];
        if (appConfig) {
            const iosBtn = card.querySelector('a[data-store="apple"]');
            const androidBtn = card.querySelector('a[data-store="google"]');
            if (iosBtn && appConfig.appStore) {
                iosBtn.setAttribute('href', appConfig.appStore);
                iosBtn.setAttribute('target', '_blank');
                iosBtn.setAttribute('rel', 'noopener noreferrer');
            }
            if (androidBtn && appConfig.playStore) {
                androidBtn.setAttribute('href', appConfig.playStore);
                androidBtn.setAttribute('target', '_blank');
                androidBtn.setAttribute('rel', 'noopener noreferrer');
            }
        }
    });

    // 6. Copyright year and company name in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Auto-run when DOM is loaded in browser
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applySiteConfig());
    } else {
        applySiteConfig();
    }
}

// Export for Node.js scripts (like generate.js) and Browser window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SITE_CONFIG, applySiteConfig };
}
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.applySiteConfig = applySiteConfig;
}
