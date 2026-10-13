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

    // 2. Cookie Banner Logic (Professional compliance behaviour)
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

    // 3. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Very basic toggle for demonstration
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    }

    // 5. Keyboard accessibility for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', (e) => {
            // For touch devices or keyboard users
            if (window.innerWidth <= 768 || e.pointerType === '') {
                e.preventDefault();
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !isExpanded);
                menu.style.opacity = isExpanded ? '0' : '1';
                menu.style.visibility = isExpanded ? 'hidden' : 'visible';
                menu.style.transform = isExpanded ? 'translateY(10px)' : 'translateY(0)';
            }
        });
    });
});
