// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply global dynamic site configuration if available
    if (typeof applySiteConfig === 'function') {
        applySiteConfig();
    }

    // 2. Update copyright year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Navbar scroll blur & top backdrop blur effect
    const navbar = document.querySelector('.navbar');
    let blurBackdrop = document.querySelector('.navbar-blur-backdrop');
    if (!blurBackdrop) {
        blurBackdrop = document.createElement('div');
        blurBackdrop.className = 'navbar-blur-backdrop';
        document.body.prepend(blurBackdrop);
    }

    const onScroll = () => {
        const isScrolled = window.scrollY > 15;
        if (navbar) {
            navbar.classList.toggle('scrolled', isScrolled);
        }
        if (blurBackdrop) {
            blurBackdrop.classList.toggle('active', isScrolled);
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 4. Cookie Banner Logic (Professional compliance behaviour)
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    const consentStatus = localStorage.getItem('ress_cookie_consent');

    // Only show if the user has NOT previously given or declined consent
    if (cookieBanner && !consentStatus) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1200);
    }

    const hideBanner = (choice) => {
        localStorage.setItem('ress_cookie_consent', choice);
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
        if (choice === 'accepted') {
            console.log('Ress Cookies accepted - Analytics initialized');
        }
    };

    if (acceptBtn) acceptBtn.addEventListener('click', () => hideBanner('accepted'));
    if (rejectBtn) rejectBtn.addEventListener('click', () => hideBanner('declined'));

    // 5. Mobile Navigation Menu Toggle (Clean class-based approach)
    const mobileToggle = document.getElementById('mobile-menu-toggle');

    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navbar.classList.toggle('menu-open');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when clicking anywhere outside navbar
        document.addEventListener('click', (e) => {
            if (navbar.classList.contains('menu-open') && !navbar.contains(e.target)) {
                navbar.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on link click (except dropdown-toggle)
        navbar.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navbar.classList.contains('menu-open')) {
                navbar.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.focus();
            }
        });
    }

    // 6. Mobile & Keyboard Accessibility for Dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = dropdown.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(isOpen));
            }
        });
    });
});
