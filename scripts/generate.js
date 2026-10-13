const fs = require('fs');
const path = require('path');
const { SITE_CONFIG } = require('../assets/js/config.js');

const BASE_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="{{title}}">
    <meta name="description" content="{{description}}">
    <meta name="keywords" content="RESS, Ride Hailing, Logistics, Food Delivery, Services, Artisan Booking, Africa Transport, Secure Rides">
    <meta name="author" content="RESS">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    
    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.ress.com/">
    <meta property="og:site_name" content="RESS">
    <meta property="og:title" content="{{title}}">
    <meta property="og:description" content="{{description}}">
    <meta property="og:image" content="https://www.ress.com/assets/images/03.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/png">
    <meta property="fb:app_id" content="YOUR_FB_APP_ID_HERE">
    
    <!-- App Links for Messenger / Social sharing -->
    <meta property="al:ios:app_name" content="RESS">
    <meta property="al:ios:app_store_id" content="YOUR_APPLE_STORE_ID">
    <meta property="al:android:app_name" content="RESS">
    <meta property="al:android:package" content="com.ress.app">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://www.ress.com/">
    <meta name="twitter:title" content="{{title}}">
    <meta name="twitter:description" content="{{description}}">
    <meta name="twitter:image" content="https://www.ress.com/assets/images/03.png">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bar -->
    <header class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <img src="assets/images/Logo.svg" alt="RESS Logo" width="100" height="40">
            </a>
            
            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation menu">
                <span class="hamburger"></span>
            </button>

            <nav class="nav-links" id="nav-links">
                <a href="ride-options.html">Ride</a>
                <a href="eat.html">Eat</a>
                <a href="ress-security.html">Security</a>
                <a href="ress-services.html">Services</a>
                <div class="dropdown">
                    <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></button>
                    <div class="dropdown-menu mega-menu">
                        <div class="mega-menu-grid">
                            <a href="how-it-works.html" class="dropdown-item">
                                <div class="dropdown-icon"><img src="assets/images/Path-20Icon.svg" alt="Icon"></div>
                                <div class="dropdown-text">
                                    <span class="dropdown-title">How It Works</span>
                                    <span class="dropdown-desc">The basics of riding with us</span>
                                </div>
                            </a>
                            <a href="ride-options.html" class="dropdown-item">
                                <div class="dropdown-icon"><img src="assets/images/Group-2042.svg" alt="Icon"></div>
                                <div class="dropdown-text">
                                    <span class="dropdown-title">Ride Options</span>
                                    <span class="dropdown-desc">Explore our vehicle fleet</span>
                                </div>
                            </a>
                            <a href="pricing.html" class="dropdown-item">
                                <div class="dropdown-icon"><img src="assets/images/chart-area-line.svg" alt="Icon"></div>
                                <div class="dropdown-text">
                                    <span class="dropdown-title">Pricing</span>
                                    <span class="dropdown-desc">Upfront fares, no surprises</span>
                                </div>
                            </a>
                            <a href="safety.html" class="dropdown-item">
                                <div class="dropdown-icon"><img src="assets/images/Shild-20Icon.svg" alt="Icon"></div>
                                <div class="dropdown-text">
                                    <span class="dropdown-title">Safety Standard</span>
                                    <span class="dropdown-desc">Our commitment to protection</span>
                                </div>
                            </a>
                        </div>
                        <div class="mega-menu-footer">
                            <a href="get-app.html" class="text-teal" style="font-weight: 600; font-size: 0.9rem;">Download the app to get started &rarr;</a>
                        </div>
                    </div>
                </div>
                <a href="business.html">Business</a>
                <a href="get-app.html" class="btn btn-primary nav-cta">Get the App</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        {{content}}
        
        <!-- Ultra Premium Bottom CTA -->
        <section class="global-cta-section" style="background: linear-gradient(135deg, var(--darker-bg) 0%, #1a3a38 100%); padding: 6rem 0 0 0; margin-top: 4rem; overflow: hidden; position: relative;">
            <div class="container" style="display: flex; align-items: center; justify-content: space-between; gap: 4rem; flex-wrap: wrap;">
                <div class="cta-text" style="flex: 1; padding-bottom: 6rem; color: #fff; min-width: 300px;">
                    <h2 style="font-size: 3rem; margin-bottom: 1rem; color: #fff; font-weight: 700;">Ready to go?</h2>
                    <p style="font-size: 1.25rem; color: rgba(255,255,255,0.8); max-width: 500px; margin-bottom: 2.5rem; line-height: 1.6;">Download the RESS app now and experience the safest, most reliable way to move, eat, and get things done in your city.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="get-app.html" style="transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            <img src="assets/images/Apple-20store.svg" alt="Download on the App Store" style="height: 56px;">
                        </a>
                        <a href="get-app.html" style="transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            <img src="assets/images/play-20store.svg" alt="Get it on Google Play" style="height: 56px;">
                        </a>
                    </div>
                </div>
                <div class="cta-image" style="flex: 1; text-align: center; position: relative; min-width: 300px;">
                    <div style="position: absolute; top: 20%; right: 20%; width: 300px; height: 300px; background: var(--primary-color); filter: blur(100px); opacity: 0.3; border-radius: 50%; z-index: 1;"></div>
                    <img src="assets/images/App-Mobile-Screen-Mockup.png" alt="RESS App" style="max-height: 450px; object-fit: contain; margin-bottom: -50px; transform: rotate(8deg); position: relative; z-index: 2;">
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-top">
                <div class="footer-brand">
                    <img src="assets/images/Footer-20logo.svg" alt="RESS Logo" class="footer-logo">
                    <p>RESS is a safety-first app for rides, food delivery, emergency help and trusted services, built to help you move through life with confidence.</p>
                    <div class="store-buttons small">
                        <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                        <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                    </div>
                    <div class="social-icons" style="margin-top: 1rem; display: flex; gap: 1rem; align-items: center;">
                        <a href="${SITE_CONFIG.socials.facebook}" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><img src="assets/images/brand-facebook.svg" alt="Facebook" width="24" height="24"></a>
                        <a href="${SITE_CONFIG.socials.instagram}" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><img src="assets/images/brand-instagram.svg" alt="Instagram" width="24" height="24"></a>
                        <a href="${SITE_CONFIG.socials.youtube}" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><img src="assets/images/brand-youtube.svg" alt="YouTube" width="24" height="24"></a>
                    </div>
                    <p class="phone-contact">Phone: <a href="tel:${SITE_CONFIG.contact.phoneRaw}" style="color: inherit; text-decoration: none;">${SITE_CONFIG.contact.phone}</a></p>
                </div>
                
                <div class="link-col">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="ride-options.html">RESS Ride</a></li>
                        <li><a href="eat.html">RESS Eat</a></li>
                        <li><a href="ress-security.html">RESS Security</a></li>
                        <li><a href="ress-services.html">RESS Services</a></li>
                    </ul>
                </div>
                <div class="link-col">
                    <h4>Riders</h4>
                    <ul>
                        <li><a href="how-it-works.html">How It Works</a></li>
                        <li><a href="ride-options.html">Ride Options</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="safety.html">Safety</a></li>
                        <li><a href="cities.html">Cities</a></li>
                    </ul>
                </div>
                <div class="link-col">
                    <h4>Drive and Partner</h4>
                    <ul>
                        <li><a href="drive.html">Drive with Us</a></li>
                        <li><a href="business.html">Business</a></li>
                        <li><a href="get-app.html">Get the App</a></li>
                    </ul>
                </div>
                <div class="link-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">About</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="link-col">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="help.html">Help Center</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="contact.html?topic=safety">Report a safety concern</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="legal-links">
                    <a href="legal-terms.html">Terms of Service</a>
                    <a href="legal-privacy.html">Privacy Policy</a>
                    <a href="legal-cookies.html">Cookies</a>
                    <a href="legal-driver-agreement.html">Driver Agreement</a>
                    <a href="legal-community-guidelines.html">Community Guidelines</a>
                    <a href="legal-insurance.html">Insurance</a>
                    <a href="legal-security.html">Security</a>
                </div>
                <p class="copyright">
                    &copy; <span id="current-year"></span> ${SITE_CONFIG.brand.companyLegalName} All rights reserved. ${SITE_CONFIG.brand.registrationNote}
                </p>
            </div>
        </div>
    </footer>

    <!-- Cookie Consent Banner -->
    <div class="cookie-banner" id="cookie-banner">
        <div class="container" style="display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
                <h4 style="color: var(--text-primary); margin-bottom: 0.25rem; font-size: 1.1rem; font-weight: 600;">We value your privacy</h4>
                <p style="margin: 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">We use cookies to improve your experience on our site, analyze site traffic, and serve tailored content. By continuing to use RESS, you consent to our use of cookies. <a href="legal-cookies.html" style="color: var(--brand-teal); text-decoration: underline;">Learn more</a>.</p>
            </div>
            <div class="cookie-actions" style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <button class="btn" id="reject-cookies" style="padding: 0.6rem 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); background: transparent; color: var(--text-primary); font-weight: 600;">Decline</button>
                <button class="btn btn-primary" id="accept-cookies" style="padding: 0.6rem 1.5rem; border-radius: 8px;">Accept All</button>
            </div>
        </div>
    </div>

    <script src="assets/js/config.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>`;

const pages = [
    {
        filename: 'how-it-works.html',
        title: 'How RESS Works - Get Started in Minutes',
        description: 'See how to get started with RESS, from downloading the app to arriving safely.',
        content: `
        <section class="hero-layered" style="min-height: 50vh; padding-top: 120px; background: linear-gradient(135deg, var(--bg-color) 0%, #E0F2F1 100%); position: relative; overflow: hidden; display: flex; align-items: center;">
            <div class="container" style="position: relative; z-index: 2; max-width: 800px; text-align: center;">
                <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700; color: var(--text-primary);">How RESS Works</h1>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem;">From the moment you open the app to the moment you arrive, order food, or get help—we've designed every step around your convenience and safety.</p>
            </div>
            <div style="position: absolute; right: -10%; bottom: -20%; width: 500px; height: 500px; background: var(--brand-teal); opacity: 0.1; filter: blur(100px); border-radius: 50%;"></div>
        </section>

        <!-- Steps using offset-row -->
        <section class="container" style="padding: 6rem 0;">
            <!-- Step 1 -->
            <div class="offset-row" style="margin-bottom: 6rem;">
                <div class="offset-text" style="flex: 1;">
                    <div style="width: 50px; height: 50px; background: var(--brand-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">1</div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Create your account</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.6;">Download the RESS app from the App Store or Google Play. Set up your profile with a few quick details and add your preferred payment method securely.</p>
                </div>
                <div class="offset-image" style="flex: 1;">
                    <img src="assets/images/01.png" alt="Download RESS App" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-float);">
                </div>
            </div>

            <!-- Step 2 -->
            <div class="offset-row" style="margin-bottom: 6rem;">
                <div class="offset-image" style="flex: 1;">
                    <img src="assets/images/App-Mobile-Screen-Mockup.png" alt="Choose Service" style="width: 100%; border-radius: var(--radius-lg); max-height: 500px; object-fit: contain;">
                </div>
                <div class="offset-text" style="flex: 1;">
                    <div style="width: 50px; height: 50px; background: var(--brand-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">2</div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Choose your service</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.6;">Whether you need a quick ride, food delivery, a trusted artisan, or emergency security—tap the service you need directly from the home screen.</p>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="offset-row" style="margin-bottom: 6rem;">
                <div class="offset-text" style="flex: 1;">
                    <div style="width: 50px; height: 50px; background: var(--brand-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">3</div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Track in real-time</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.6;">See exactly where your driver, food, or service provider is on the map. We provide full details including their name, photo, and vehicle information so you know exactly who to expect.</p>
                </div>
                <div class="offset-image" style="flex: 1;">
                    <img src="assets/images/08.png" alt="Track in real-time" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-float);">
                </div>
            </div>

            <!-- Step 4 -->
            <div class="offset-row">
                <div class="offset-image" style="flex: 1;">
                    <img src="assets/images/03.png" alt="Pay and Rate" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-float);">
                </div>
                <div class="offset-text" style="flex: 1;">
                    <div style="width: 50px; height: 50px; background: var(--brand-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">4</div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Pay safely and rate</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); line-height: 1.6;">Payment is processed seamlessly through the app. Leave a rating and feedback to help us maintain the highest quality standards across the entire RESS ecosystem.</p>
                </div>
            </div>
        </section>

        <!-- Ecosystem Section -->
        <section class="ecosystem-features" style="background-color: var(--dark-bg); padding: 6rem 0; color: white;">
            <div class="container text-center">
                <h2 style="color: white; margin-bottom: 3rem; font-size: 2.5rem;">One App. Everything you need.</h2>
                <div class="ecosystem-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                        <img src="assets/images/02.png" alt="RESS Ride" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                        <h3 style="color: white; margin-bottom: 0.5rem;">RESS Ride</h3>
                        <p style="color: #bbb; font-size: 0.9rem;">Safe, comfortable rides across your city.</p>
                    </div>
                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                        <img src="assets/images/06.png" alt="RESS Eat" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                        <h3 style="color: white; margin-bottom: 0.5rem;">RESS Eat</h3>
                        <p style="color: #bbb; font-size: 0.9rem;">Your favorite local food, delivered fast.</p>
                    </div>
                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                        <img src="assets/images/05.png" alt="RESS Security" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                        <h3 style="color: white; margin-bottom: 0.5rem;">RESS Security</h3>
                        <p style="color: #bbb; font-size: 0.9rem;">Instant SOS response and guard dispatch.</p>
                    </div>
                    <div class="feature-card" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                        <img src="assets/images/04.png" alt="RESS Services" style="width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                        <h3 style="color: white; margin-bottom: 0.5rem;">RESS Services</h3>
                        <p style="color: #bbb; font-size: 0.9rem;">Book vetted professionals and artisans.</p>
                    </div>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'ride-options.html',
        title: 'Ride Options - RESS Ride',
        description: 'Choose the ride that fits your trip and your budget, with RESS safety features on every journey.',
        content: `
        <section class="hero-layered" style="min-height: 50vh; padding-top: 120px; background: linear-gradient(135deg, var(--bg-color) 0%, #E0F2F1 100%); position: relative; overflow: hidden; display: flex; align-items: center;">
            <div class="container" style="position: relative; z-index: 2; max-width: 800px; text-align: center;">
                <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700; color: var(--text-primary);">The right ride for every journey</h1>
                <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2rem;">From quick trips across town to longer journeys with friends, choose the ride that perfectly fits your needs and your budget. Every ride comes with RESS's industry-leading safety features.</p>
            </div>
            <div style="position: absolute; left: -10%; top: -10%; width: 500px; height: 500px; background: var(--brand-teal); opacity: 0.1; filter: blur(100px); border-radius: 50%;"></div>
        </section>

        <!-- Ride Categories Grid -->
        <section class="container" style="padding: 6rem 0;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                
                <!-- RESS Go -->
                <div style="background: var(--surface-color); padding: 3rem 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-float); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="margin-bottom: 2rem;">
                        <svg width="80" height="40" viewBox="0 0 100 50" fill="none" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;">
                            <path d="M10 35 L10 20 L30 20 L40 10 L80 10 L90 20 L90 35"></path>
                            <circle cx="25" cy="35" r="8"></circle>
                            <circle cx="75" cy="35" r="8"></circle>
                            <path d="M33 35 L67 35"></path>
                            <path d="M40 10 L40 20"></path>
                            <path d="M65 10 L65 20"></path>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">RESS Go</h3>
                    <p style="color: var(--brand-teal); font-weight: 600; margin-bottom: 1.5rem;">Affordable everyday rides</p>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem;">The perfect choice for your daily commute, running errands, or meeting friends. Fast, reliable, and easy on the wallet.</p>
                    <div style="display: flex; justify-content: center; gap: 1rem; color: var(--text-secondary); font-size: 0.9rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                        <span style="display: flex; align-items: center; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 4</span>
                    </div>
                </div>

                <!-- RESS Comfort -->
                <div style="background: var(--surface-color); padding: 3rem 2rem; border-radius: var(--radius-lg); border: 2px solid var(--brand-teal); text-align: center; box-shadow: var(--shadow-float); transition: transform 0.3s; position: relative;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--brand-teal); color: white; padding: 0.25rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Most Popular</div>
                    <div style="margin-bottom: 2rem;">
                        <svg width="90" height="45" viewBox="0 0 100 50" fill="none" stroke="var(--brand-teal)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;">
                            <path d="M5 35 L5 20 L25 18 L40 5 L85 5 L95 20 L95 35"></path>
                            <circle cx="25" cy="35" r="8"></circle>
                            <circle cx="75" cy="35" r="8"></circle>
                            <path d="M33 35 L67 35"></path>
                            <path d="M45 5 L45 18"></path>
                            <path d="M70 5 L70 18"></path>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">RESS Comfort</h3>
                    <p style="color: var(--brand-teal); font-weight: 600; margin-bottom: 1.5rem;">Newer cars with extra legroom</p>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem;">Stretch out and relax. Enjoy top-rated drivers, newer vehicles, and the ability to request your preferred temperature.</p>
                    <div style="display: flex; justify-content: center; gap: 1rem; color: var(--text-secondary); font-size: 0.9rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                        <span style="display: flex; align-items: center; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 4</span>
                    </div>
                </div>

                <!-- RESS XL -->
                <div style="background: var(--surface-color); padding: 3rem 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-float); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="margin-bottom: 2rem;">
                        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" stroke="var(--text-primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;">
                            <path d="M2 35 L2 15 L20 15 L30 5 L90 5 L98 15 L98 35"></path>
                            <circle cx="25" cy="35" r="8"></circle>
                            <circle cx="75" cy="35" r="8"></circle>
                            <path d="M33 35 L67 35"></path>
                            <path d="M35 5 L35 15"></path>
                            <path d="M65 5 L65 15"></path>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">RESS XL</h3>
                    <p style="color: var(--brand-teal); font-weight: 600; margin-bottom: 1.5rem;">Room for up to 6 passengers</p>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem;">Heading out with the whole crew or carrying extra luggage? Get an SUV or minivan with plenty of space for everyone.</p>
                    <div style="display: flex; justify-content: center; gap: 1rem; color: var(--text-secondary); font-size: 0.9rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                        <span style="display: flex; align-items: center; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 6</span>
                    </div>
                </div>

                <!-- RESS Lux -->
                <div style="background: var(--dark-bg); color: white; padding: 3rem 2rem; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-float); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="margin-bottom: 2rem;">
                        <svg width="90" height="45" viewBox="0 0 100 50" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto;">
                            <path d="M5 35 L5 22 L28 20 L45 8 L80 8 L95 22 L95 35"></path>
                            <circle cx="25" cy="35" r="8"></circle>
                            <circle cx="75" cy="35" r="8"></circle>
                            <path d="M33 35 L67 35"></path>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">RESS Lux</h3>
                    <p style="color: var(--brand-teal); font-weight: 600; margin-bottom: 1.5rem;">Premium rides in luxury vehicles</p>
                    <p style="color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 2rem;">Arrive in style with a high-end luxury vehicle driven by a highly-rated professional driver. Perfect for special occasions.</p>
                    <div style="display: flex; justify-content: center; gap: 1rem; color: rgba(255,255,255,0.5); font-size: 0.9rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
                        <span style="display: flex; align-items: center; gap: 0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 4</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Image Break / Safety Guarantee -->
        <section style="background: var(--darker-bg); color: white; padding: 6rem 0;">
            <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
                <div style="flex: 1; min-width: 300px;">
                    <img src="assets/images/07.png" alt="Safety Features" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-float);">
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Every ride is a safe ride</h2>
                    <p style="font-size: 1.15rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 2rem;">No matter which vehicle you choose, your safety is our ultimate priority. The RESS ecosystem includes built-in SOS capabilities, live location sharing, and direct integration with our Security dispatch centers.</p>
                    <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                        <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Rigorous driver background checks</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Share your trip with trusted contacts</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>24/7 instant emergency response</span>
                        </li>
                    </ul>
                    <a href="safety.html" class="btn btn-primary" style="padding: 0.8rem 2rem;">Explore Safety Features</a>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'safety.html',
        title: 'Safety Features - RESS',
        description: 'Verified drivers, background checks, live ride sharing, emergency contacts and safe zones. See how RESS protects you.',
        content: `
        <section style="padding: 160px 0 80px; background: var(--dark-bg); color: white;">
            <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
                <div style="flex: 1; min-width: 300px;">
                    <h1 style="font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700;">Safety comes first. <br>Always.</h1>
                    <p style="font-size: 1.25rem; color: rgba(255,255,255,0.8); margin-bottom: 2.5rem; line-height: 1.6; max-width: 500px;">RESS is designed to protect you before, during, and after every journey. We've built industry-leading security directly into the core of our platform.</p>
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <img src="assets/images/07.png" alt="Safety Features" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
                </div>
            </div>
        </section>

        <section class="container" style="padding: 6rem 0;">
            <!-- Main Featured Safety Banner -->
            <div style="background: var(--surface-color); border-radius: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-float); overflow: hidden; display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 6rem;">
                <div style="flex: 1; padding: 4rem; min-width: 300px;">
                    <span style="background: rgba(34, 189, 179, 0.1); color: var(--brand-teal); padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Before You Ride</span>
                    <h2 style="font-size: 2.5rem; margin: 1rem 0;">Verified drivers and thorough background checks</h2>
                    <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">Every single driver on the RESS platform undergoes rigorous identity verification, vehicle inspection, and comprehensive background checks before they are ever allowed to accept a trip.</p>
                    <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">You will always see your driver's photo, name, rating, and vehicle details (including the license plate) in the app before you even get in the car.</p>
                </div>
                <div style="flex: 1; min-width: 300px; height: 100%; min-height: 400px; background: url('assets/images/10.png') center/cover no-repeat;"></div>
            </div>

            <!-- Features Grid -->
            <div style="display: grid; gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
                
                <!-- Card 1 -->
                <div style="background: var(--surface-color); padding: 3rem; border-radius: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="width: 56px; height: 56px; background: rgba(34, 189, 179, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Real-time ride tracking</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6;">Share your live trip status and exact GPS location with family or friends so they can follow your journey from start to finish.</p>
                </div>

                <!-- Card 2 -->
                <div style="background: var(--surface-color); padding: 3rem; border-radius: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="width: 56px; height: 56px; background: rgba(229, 62, 62, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Emergency SOS Button</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6;">If you ever feel unsafe, a dedicated in-app SOS button instantly alerts your emergency contacts and dispatches RESS Security teams to your live location.</p>
                </div>

                <!-- Card 3 -->
                <div style="background: var(--surface-color); padding: 3rem; border-radius: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="width: 56px; height: 56px; background: rgba(34, 189, 179, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Geofencing & Safe Zones</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6;">Set designated safe areas on your map. Get automatic push notifications if a ride deviates significantly from the expected route or leaves a safe zone.</p>
                </div>

                <!-- Card 4 -->
                <div style="background: var(--surface-color); padding: 3rem; border-radius: 24px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                    <div style="width: 56px; height: 56px; background: rgba(34, 189, 179, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Encrypted & Protected Data</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6;">Your personal information, payment details, and exact home address are heavily encrypted. Calls between you and the driver are anonymized to protect your phone number.</p>
                </div>

            </div>
        </section>

            </div>
        </section>`
    },
    {
        filename: 'eat.html',
        title: 'RESS Eat - Food Delivery from Registered Restaurants',
        description: 'Order from registered restaurants, see the cost and delivery time first and pay securely in the app.',
        content: `
        <section class="hero-layered" style="min-height: 70vh; padding-top: 120px;">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="animate-up" style="font-size: 3.5rem;">Good food, <br><span class="text-teal">delivered safe.</span></h1>
                        <p class="animate-up" style="animation-delay: 0.1s; margin-top: 1rem; color: #CCC;">Order from registered restaurants, see the cost and delivery time upfront, and pay securely in the app.</p>
                        <div class="store-buttons animate-up" style="animation-delay: 0.2s;" style="margin-top: 2rem;">
                            <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                            <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                        </div>
                    </div>
                    <div class="hero-visual animate-up" style="animation-delay: 0.3s;">
                        <img src="assets/images/ress-eat-mockup.png" alt="RESS Eat App" class="hero-phone-bg" style="max-height: 600px; object-fit: contain; filter: drop-shadow(0 25px 50px rgba(0,0,0,0.6));">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container" style="padding: 5rem 0;">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h2>Craving something? We've got it.</h2>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">Your favorite meals delivered from the best registered restaurants in your city.</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <img src="assets/images/Group-2043.svg" alt="Restaurant" class="benefit-icon">
                    <h4>1. Choose a restaurant</h4>
                    <p>Browse registered restaurants near you and explore their menus.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/chart-area-line.svg" alt="Cost" class="benefit-icon">
                    <h4>2. See the cost</h4>
                    <p>Know the total cost and when to expect your meal before you order.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Shild-20Icon.svg" alt="Pay" class="benefit-icon">
                    <h4>3. Pay in the app</h4>
                    <p>Use our integrated, secure payment options.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Path-20Icon.svg" alt="Enjoy" class="benefit-icon">
                    <h4>4. Enjoy your meal</h4>
                    <p>Follow your order live on the map until it arrives at your door.</p>
                </div>
            </div>
        </section>

        <section class="offset-features" style="background: var(--surface-color); padding: 5rem 0;">
            <div class="container">
                <div class="offset-row">
                    <div class="offset-text">
                        <h2>Run a restaurant?</h2>
                        <p>Partner with RESS Eat to reach more customers. We offer transparent pricing, reliable delivery drivers, and powerful tools to help your business grow.</p>
                        <a href="business.html" class="btn btn-primary" style="margin-top: 1rem;">Become a partner</a>
                    </div>
                    <div class="offset-image" style="background: var(--bg-color); border-radius: var(--radius-lg); padding: 2rem; display: flex; justify-content: center; align-items: center;">
                        <img src="assets/images/ress-eat-mockup.png" alt="Restaurant Partner" style="max-height: 400px; border-radius: 12px; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));">
                    </div>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'ress-security.html',
        title: 'RESS Security - Help When You Feel Unsafe',
        description: 'Reach local security agencies and alert your emergency contacts from the RESS app.',
        content: `
        <section class="hero-layered" style="min-height: 70vh; padding-top: 120px;">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="animate-up" style="font-size: 3.5rem;">Help is <br><span class="text-teal">one step away.</span></h1>
                        <p class="animate-up" style="animation-delay: 0.1s; margin-top: 1rem; color: #CCC;">When you feel unsafe, RESS Security connects you with local security agencies and the people who matter most.</p>
                        <div class="store-buttons animate-up" style="animation-delay: 0.2s;" style="margin-top: 2rem;">
                            <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                            <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                        </div>
                    </div>
                    <div class="hero-visual animate-up" style="animation-delay: 0.3s;">
                        <img src="assets/images/ress-security-mockup.png" alt="RESS Security App" class="hero-phone-bg" style="max-height: 620px; width: auto; object-fit: contain; filter: drop-shadow(0 25px 50px rgba(0,0,0,0.6));">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container" style="padding: 2rem 0 4rem;">
            <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 2rem; box-shadow: var(--shadow-sm);">
                <div style="flex: 0 0 auto; background: rgba(229, 62, 62, 0.1); padding: 1.5rem; border-radius: 50%;">
                    <img src="assets/images/Group-2012687.svg" alt="SOS Alert" width="40" height="40">
                </div>
                <div>
                    <h2 style="margin-bottom: 0.5rem; font-size: 1.75rem; display: flex; align-items: center; gap: 1rem;">Instant SOS Alert <span style="font-size: 0.75rem; background: #E53E3E; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Dispatched Immediately</span></h2>
                    <p style="font-size: 1.1rem; color: var(--text-secondary); margin: 0; max-width: 700px;">If you ever feel unsafe, a single tap sends an immediate alert to local security agencies and your designated emergency contacts, dispatching help to your exact live location instantly.</p>
                </div>
            </div>
        </section>

        <section class="container" style="padding: 5rem 0;">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h2>How RESS Security works</h2>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">Your safety is our top priority. We've built robust tools directly into the app to protect you.</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <img src="assets/images/Setings-20Icon.svg" alt="App" class="benefit-icon">
                    <h4>1. Open RESS Security</h4>
                    <p>Find the dedicated security tab immediately upon opening the app.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Group-2012687.svg" alt="Alert" class="benefit-icon">
                    <h4>2. Ask for help</h4>
                    <p>With one tap, reach local security agencies and instantly alert your emergency contacts.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Shild-20Icon.svg" alt="Connect" class="benefit-icon">
                    <h4>3. Stay connected</h4>
                    <p>Keep your trusted people informed with live location sharing until you are safe.</p>
                </div>
            </div>
        </section>`
    }
];

pages.push(
    {
        filename: 'pricing.html',
        title: 'Fares and Fare Estimator - RESS',
        description: 'Know what you will pay before you ride. Get a fare estimate and learn how RESS prices every trip.',
        content: `
        <section style="padding: 160px 0 80px; background: var(--bg-color);">
            <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
                <div style="flex: 1; min-width: 300px;">
                    <h1 style="font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700;">Know what you'll pay <br>before you go.</h1>
                    <p style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem; line-height: 1.6; max-width: 500px;">Clear fares, no guesswork. Get an upfront estimate instantly and learn exactly how RESS prices every single trip.</p>
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <img src="assets/images/03.png" alt="Transparent Pricing" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                </div>
            </div>
        </section>

        <!-- Pricing Estimator and Info Grid -->
        <section class="container" style="padding: 6rem 0;">
            <div style="display: grid; gap: 4rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); align-items: start;">
                
                <!-- Left: How pricing works -->
                <div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Transparent pricing</h2>
                    
                    <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                        <div style="flex-shrink: 0; width: 48px; height: 48px; background: rgba(34, 189, 179, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">How fares are calculated</h3>
                            <p style="color: var(--text-secondary); line-height: 1.6;">Your fare reflects the distance of your trip, expected travel time, your selected ride type, and current road conditions. You'll always see the estimate before you confirm.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                        <div style="flex-shrink: 0; width: 48px; height: 48px; background: rgba(34, 189, 179, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><polyline points="16 6 23 6 23 13"></polyline></svg>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Dynamic demand pricing</h3>
                            <p style="color: var(--text-secondary); line-height: 1.6;">When many people need rides at the same time, fares may rise temporarily to bring more drivers onto the road. You'll be notified if demand pricing is active.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
                        <div style="flex-shrink: 0; width: 48px; height: 48px; background: rgba(34, 189, 179, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Seamless payments</h3>
                            <p style="color: var(--text-secondary); line-height: 1.6;">Pay your way. Securely link your credit card, debit card, or use mobile money within the app for a cashless experience.</p>
                        </div>
                    </div>
                </div>

                <!-- Right: Fare Estimator Card -->
                <div style="background: white; padding: 2.5rem; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Estimate your fare</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Plan your trip and know the cost in advance.</p>
                    
                    <form style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-primary);">Pickup location</label>
                            <input type="text" placeholder="Enter pickup location" style="width: 100%; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; outline: none; background: #fff;">
                        </div>
                        
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-primary);">Destination</label>
                            <input type="text" placeholder="Enter destination" style="width: 100%; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; outline: none; background: #fff;">
                        </div>
                        
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-primary);">Ride type</label>
                            <select style="width: 100%; padding: 1rem; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; outline: none; background: #fff; cursor: pointer;">
                                <option>RESS Go (Everyday)</option>
                                <option>RESS Comfort</option>
                                <option>RESS XL (6 Seats)</option>
                                <option>RESS Lux (Premium)</option>
                            </select>
                        </div>
                        
                        <button type="button" class="btn btn-primary" style="padding: 1rem; font-size: 1.1rem; border-radius: 8px; margin-top: 0.5rem;">Calculate Fare Estimate</button>
                    </form>
                    
                    <div style="margin-top: 1.5rem; text-align: center;">
                        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">This is an estimate. Your final fare is confirmed in the app before you book.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Image Banner -->
        <section style="background: var(--darker-bg); padding: 8rem 0;">
            <div class="container" style="color: white; text-align: center;">
                <h2 style="font-size: 3rem; margin-bottom: 1rem; line-height: 1.2;">No hidden fees. <br><span class="text-teal">Just transparent rides.</span></h2>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.7); max-width: 600px; margin: 0 auto 2.5rem;">Enjoy peace of mind with upfront pricing on every single journey. Open the app to see your precise fare today.</p>
                <a href="get-app.html" class="btn btn-primary" style="padding: 1rem 2.5rem; border-radius: 30px; font-size: 1.1rem;">Get the App</a>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="container" style="padding: 6rem 0;">
            <div style="text-align: center; margin-bottom: 4rem;">
                <h2 style="font-size: 2.5rem;">Frequently Asked Questions</h2>
            </div>
            <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
                <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem;">
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Will the price change after I book?</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">Your upfront fare is confirmed before you book. It only changes if you drastically change your destination, add additional stops, or if the trip takes significantly longer than expected due to unforeseen circumstances.</p>
                </div>
                <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem;">
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">How do promo codes work?</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">If you have a promo code, enter it in the 'Promotions' section of your app profile before requesting a ride. The discount will be automatically applied to your upfront fare estimate.</p>
                </div>
                <div>
                    <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-primary);">Can I pay with cash?</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6; margin: 0;">Yes, depending on your region, you can select 'Cash' as your payment method before booking. However, we highly recommend linking a card for a seamless, contactless experience.</p>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'ress-services.html',
        title: 'RESS Services - Book Artisans & Professionals',
        description: 'Need a mechanic, electrician, plumber, or artisan? Request vetted professionals instantly from the RESS app.',
        content: `
        <section class="hero-layered" style="min-height: 70vh; padding-top: 120px;">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="animate-up" style="font-size: 3.5rem;">Expert help, <br><span class="text-teal">at your doorstep.</span></h1>
                        <p class="animate-up" style="animation-delay: 0.1s; margin-top: 1rem; color: #CCC;">From mechanics to electricians, plumbers to artisans. Book vetted, trusted professionals instantly directly through the RESS app.</p>
                        <div class="store-buttons animate-up" style="animation-delay: 0.2s;" style="margin-top: 2rem;">
                            <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                            <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                        </div>
                    </div>
                    <div class="hero-visual animate-up" style="animation-delay: 0.3s;">
                        <img src="assets/images/ress-services-mockup.png" alt="RESS Services App" class="hero-phone-bg" style="max-height: 620px; width: auto; object-fit: contain; filter: drop-shadow(0 25px 50px rgba(0,0,0,0.6));">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container" style="padding: 5rem 0;">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h2>How RESS Services works</h2>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">Connecting you with vetted artisans and professionals when you need them most.</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <img src="assets/images/Path-20Icon.svg" alt="Location" class="benefit-icon">
                    <h4>1. Describe your need</h4>
                    <p>Tell us what service you need (plumbing, electrical, mechanic, etc.) and share your location.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Group-2042.svg" alt="Match" class="benefit-icon">
                    <h4>2. Get matched</h4>
                    <p>A qualified, background-checked artisan or professional accepts your request immediately.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Shild-20Icon.svg" alt="Go" class="benefit-icon">
                    <h4>3. Job well done</h4>
                    <p>Pay easily in the app and rate your experience so we maintain top quality standards.</p>
                </div>
            </div>
        </section>

        <section class="offset-features" style="background: var(--surface-color); padding: 5rem 0;">
            <div class="container">
                <div class="offset-row">
                    <div class="offset-text">
                        <h2>Are you a professional artisan?</h2>
                        <p>Join the RESS Services network to reach clients who need your skills. Whether you're a mechanic, electrician, plumber, or artisan, expand your business, enjoy transparent payments, and manage your jobs through a single app.</p>
                        <a href="business.html" class="btn btn-primary" style="margin-top: 1rem;">Join as a provider</a>
                    </div>
                    <div class="offset-image" style="background: var(--bg-color); border-radius: var(--radius-lg); padding: 2rem; display: flex; justify-content: center; align-items: center;">
                        <img src="assets/images/App-Mobile-Screen-Mockup.png" alt="Professional Partner" style="max-height: 400px; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    </div>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'drive.html',
        title: 'Drive with RESS - Earn with Confidence',
        description: 'Learn what it takes to drive with RESS and register in the app to get started.',
        content: `
        <section class="hero-layered" style="min-height: 70vh; padding-top: 120px;">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="animate-up" style="font-size: 3.5rem;">Drive with Ress. <br><span class="text-teal">Earn with confidence.</span></h1>
                        <p class="animate-up" style="animation-delay: 0.1s; margin-top: 1rem; color: #CCC;">Join a platform built around safety, with tools that protect you as much as your riders. Register in the app to get started today.</p>
                        <div class="store-buttons animate-up" style="animation-delay: 0.2s;" style="margin-top: 2rem;">
                            <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                            <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                        </div>
                    </div>
                    <div class="hero-visual animate-up" style="animation-delay: 0.3s;">
                        <img src="assets/images/Phone-Instagram-Mockup.png" alt="RESS Driver App" class="hero-phone-bg" style="max-height: 600px; object-fit: contain;">
                    </div>
                </div>
            </div>
        </section>

        <section class="container" style="padding: 2rem 0 4rem;">
            <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 2rem; box-shadow: var(--shadow-sm);">
                <div style="flex: 0 0 auto; background: rgba(34, 189, 179, 0.1); padding: 1.5rem; border-radius: 50%;">
                    <img src="assets/images/chart-area-line.svg" alt="Earnings" width="40" height="40">
                </div>
                <div>
                    <h2 style="margin-bottom: 0.5rem; font-size: 1.75rem; display: flex; align-items: center; gap: 1rem;">Clear Earnings <span style="font-size: 0.75rem; background: var(--brand-teal); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Paid directly in-app</span></h2>
                    <p style="font-size: 1.1rem; color: var(--text-secondary); margin: 0; max-width: 700px;">See exactly what you earn for every trip with full transparency before you accept. Your earnings are secure and paid directly to you through the app.</p>
                </div>
            </div>
        </section>

        <section class="container" style="padding: 5rem 0;">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h2>Why drivers choose RESS</h2>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">Drive on your terms while backed by our robust safety and support systems.</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <img src="assets/images/Setings-20Icon.svg" alt="Terms" class="benefit-icon">
                    <h4>Work on your terms</h4>
                    <p>Choose when and where you drive. You are in complete control of your schedule.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/chart-area-line.svg" alt="Earnings" class="benefit-icon">
                    <h4>Clear earnings</h4>
                    <p>See exactly what you earn for every trip with full transparency before you accept.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Shild-20Icon.svg" alt="Safety" class="benefit-icon">
                    <h4>Safety tools</h4>
                    <p>Emergency contact alerts, live trip sharing, and a verified rider community protect you on the road.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Group-2042.svg" alt="Support" class="benefit-icon">
                    <h4>24/7 Support</h4>
                    <p>Reach the RESS team directly through the app whenever you need assistance.</p>
                </div>
            </div>
        </section>

        <section class="offset-features" style="background: var(--surface-color); padding: 5rem 0;">
            <div class="container">
                <div class="offset-row">
                    <div class="offset-text">
                        <h2>Ready to get started?</h2>
                        <div style="margin-top: 1.5rem;">
                            <h4 style="margin-bottom: 0.5rem; color: var(--brand-teal);">1. What you need</h4>
                            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">A valid driver's licence, vehicle papers and insurance, a government-issued ID, a smartphone, and a clean background check.</p>
                            
                            <h4 style="margin-bottom: 0.5rem; color: var(--brand-teal);">2. Getting on the road</h4>
                            <p style="color: var(--text-secondary);">Download the RESS app, register as a driver, complete your quick verification, and you are ready to go online and start earning.</p>
                        </div>
                        <div class="store-buttons" style="margin-top: 2rem; justify-content: flex-start;">
                            <a href="get-app.html"><img src="assets/images/Apple-20store.svg" alt="App Store"></a>
                            <a href="get-app.html"><img src="assets/images/play-20store.svg" alt="Google Play"></a>
                        </div>
                    </div>
                    <div class="offset-image" style="background: var(--bg-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                        <img src="assets/images/10.png" alt="Fleet Owners" style="max-height: 250px; border-radius: 12px; margin-bottom: 2rem;">
                        <h3>Fleet Owners</h3>
                        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Own more than one vehicle? Talk to us about adding your entire fleet to Ress.</p>
                        <a href="contact.html?topic=fleet" class="btn" style="margin-top: 1rem; border: 1px solid var(--border-color);">Talk to our team</a>
                    </div>
                </div>
            </div>
        </section>`
    },
    {
        filename: 'get-app.html',
        title: 'Download the RESS App',
        description: 'Get RESS for iPhone and Android. Riders, drivers and providers register in the app.',
        content: `
        <section class="page-header" style="padding: 120px 0 40px; background: var(--bg-color); text-align: center;">
            <div class="container">
                <h1 style="font-size: 3rem;">Download RESS</h1>
                <p style="font-size: 1.2rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto;">Choose the app that fits your needs and get started in seconds.</p>
            </div>
        </section>
        
        <section class="container" style="padding: 2rem 0 6rem;">
            
            <!-- Client App -->
            <div class="offset-row" data-app-target="client" style="margin-bottom: 4rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 4rem; box-shadow: var(--shadow-sm);">
                <div class="offset-text" style="flex: 1;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">RESS Client App</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2rem;">Your all-in-one platform for secure Rides, Logistics, Parcels, Food Delivery, Services, and Instant SOS Security. Everything you need to navigate your city safely.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="${SITE_CONFIG.apps.client.appStore}" data-store="apple" target="_blank" rel="noopener noreferrer"><img src="assets/images/Apple-20store-20Black.png" alt="App Store" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                        <a href="${SITE_CONFIG.apps.client.playStore}" data-store="google" target="_blank" rel="noopener noreferrer"><img src="assets/images/play-20store-20black.png" alt="Google Play" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                    </div>
                </div>
                <div class="offset-image" style="flex: 1; text-align: center;">
                    <img src="assets/images/App-Mobile-Screen-Mockup.png" alt="RESS Client App" style="max-height: 350px; object-fit: contain;">
                </div>
            </div>

            <!-- Driver App -->
            <div class="offset-row" data-app-target="driver" style="margin-bottom: 4rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 4rem; box-shadow: var(--shadow-sm);">
                <div class="offset-image" style="flex: 1; text-align: center;">
                    <img src="assets/images/App-Mobile-Screen-Mockup2-20download.png" alt="RESS Driver App" style="max-height: 350px; object-fit: contain;">
                </div>
                <div class="offset-text" style="flex: 1;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">RESS Driver App</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2rem;">Drive on your own terms. See clear earnings before you accept, enjoy transparent payouts, and stay protected on the road with our built-in safety tools.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="${SITE_CONFIG.apps.driver.appStore}" data-store="apple" target="_blank" rel="noopener noreferrer"><img src="assets/images/Apple-20store-20Black.png" alt="App Store" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                        <a href="${SITE_CONFIG.apps.driver.playStore}" data-store="google" target="_blank" rel="noopener noreferrer"><img src="assets/images/play-20store-20black.png" alt="Google Play" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                    </div>
                </div>
            </div>

            <!-- Restaurant App -->
            <div class="offset-row" data-app-target="merchant" style="margin-bottom: 4rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 4rem; box-shadow: var(--shadow-sm);">
                <div class="offset-text" style="flex: 1;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">RESS Restaurant App</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2rem;">Built for restaurants and food vendors. Manage your menus, process incoming orders in real-time, and seamlessly dispatch logistics all from one powerful app.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="${SITE_CONFIG.apps.merchant.appStore}" data-store="apple" target="_blank" rel="noopener noreferrer"><img src="assets/images/Apple-20store-20Black.png" alt="App Store" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                        <a href="${SITE_CONFIG.apps.merchant.playStore}" data-store="google" target="_blank" rel="noopener noreferrer"><img src="assets/images/play-20store-20black.png" alt="Google Play" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                    </div>
                </div>
                <div class="offset-image" style="flex: 1; text-align: center;">
                    <img src="assets/images/ress-eat-mockup.png" alt="RESS Restaurant App" style="max-height: 350px; object-fit: contain; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));">
                </div>
            </div>

            <!-- Services App -->
            <div class="offset-row" data-app-target="services" style="margin-bottom: 4rem; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 4rem; box-shadow: var(--shadow-sm);">
                <div class="offset-image" style="flex: 1; text-align: center;">
                    <img src="assets/images/ress-services-mockup.png" alt="RESS Services App" style="max-height: 380px; object-fit: contain; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));">
                </div>
                <div class="offset-text" style="flex: 1;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">RESS Services App</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2rem;">For professional artisans, mechanics, plumbers, and electricians. Connect with clients instantly, manage your bookings, and grow your service business.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="${SITE_CONFIG.apps.services.appStore}" data-store="apple" target="_blank" rel="noopener noreferrer"><img src="assets/images/Apple-20store-20Black.png" alt="App Store" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                        <a href="${SITE_CONFIG.apps.services.playStore}" data-store="google" target="_blank" rel="noopener noreferrer"><img src="assets/images/play-20store-20black.png" alt="Google Play" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                    </div>
                </div>
            </div>

            <!-- Security App -->
            <div class="offset-row" data-app-target="security" style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; display: flex; align-items: center; gap: 4rem; box-shadow: var(--shadow-sm);">
                <div class="offset-text" style="flex: 1;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">RESS Security App</h2>
                    <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2rem;">For licensed security personnel and private guards. Receive emergency dispatch requests, navigate to distressed users, and provide critical protection when it matters most.</p>
                    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="${SITE_CONFIG.apps.security.appStore}" data-store="apple" target="_blank" rel="noopener noreferrer"><img src="assets/images/Apple-20store-20Black.png" alt="App Store" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                        <a href="${SITE_CONFIG.apps.security.playStore}" data-store="google" target="_blank" rel="noopener noreferrer"><img src="assets/images/play-20store-20black.png" alt="Google Play" style="height: 52px; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'"></a>
                    </div>
                </div>
                <div class="offset-image" style="flex: 1; text-align: center;">
                    <img src="assets/images/ress-security-mockup.png" alt="RESS Security App" style="max-height: 380px; object-fit: contain; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.15));">
                </div>
            </div>

        </section>`
    },
    {
        filename: 'business.html',
        title: 'RESS for Business - Safe Rides for Your Team',
        description: 'Give your staff and guests safe, reliable rides with a RESS business account.',
        content: `
        <section class="hero-layered" style="min-height: 70vh; padding-top: 120px;">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="animate-up" style="font-size: 3.5rem;">Safe, reliable rides <br><span class="text-teal">for your team.</span></h1>
                        <p class="animate-up" style="animation-delay: 0.1s; margin-top: 1rem; color: #CCC;">Give your staff and guests dependable transport with a business account built around safety and transparency.</p>
                        <div class="store-buttons animate-up" style="animation-delay: 0.2s;" style="margin-top: 2rem;">
                            <a href="#business-form" class="btn btn-primary" style="padding: 1rem 2rem;">Talk to our business team</a>
                        </div>
                    </div>
                    <div class="hero-visual animate-up" style="animation-delay: 0.3s;">
                        <img src="assets/images/ress-business-mockup.png" alt="RESS Business" class="hero-phone-bg" style="max-height: 620px; width: auto; object-fit: contain; filter: drop-shadow(0 25px 50px rgba(0,0,0,0.6));">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container" style="padding: 5rem 0;">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h2>Why businesses choose RESS</h2>
                <p style="color: var(--text-secondary); max-width: 600px; margin: 1rem auto 0;">Manage corporate travel with complete oversight and priority support.</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <img src="assets/images/Group-2043.svg" alt="Account" class="benefit-icon">
                    <h4>One account for your team</h4>
                    <p>Manage all employee rides and centralized billing from a single dashboard.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/chart-area-line.svg" alt="Reports" class="benefit-icon">
                    <h4>Clear reports</h4>
                    <p>Keep track of what your team spends with automated, detailed expense reports.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Setings-20Icon.svg" alt="Schedule" class="benefit-icon">
                    <h4>Scheduled rides</h4>
                    <p>Plan transport ahead of important meetings, events, and airport travel.</p>
                </div>
                <div class="benefit-card">
                    <img src="assets/images/Shild-20Icon.svg" alt="Premium" class="benefit-icon">
                    <h4>Priority support & Premium</h4>
                    <p>A dedicated route to our support team and premium vehicles for when first impressions matter.</p>
                </div>
            </div>
        </section>
        
        <section class="offset-features" style="background: var(--surface-color); padding: 5rem 0;">
            <div class="container">
                <div class="offset-row">
                    <div class="offset-text">
                        <h2>Get your team moving</h2>
                        <ol style="list-style: decimal inside; font-size: 1.1rem; line-height: 2; color: var(--text-secondary); margin-top: 1rem;">
                            <li><strong>Tell us about your company.</strong></li>
                            <li><strong>We set up your custom account.</strong></li>
                            <li><strong>Your team rides with confidence.</strong></li>
                        </ol>
                    </div>
                    <div id="business-form" style="background: var(--bg-color); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
                        <h3 style="margin-bottom: 0.5rem;">Tell us about your team</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Share a few details and our business team will contact you.</p>
                        <form style="display: flex; flex-direction: column; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Company name</label>
                                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Contact name</label>
                                <input type="text" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Work email</label>
                                <input type="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Estimated rides per month</label>
                                <select style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <option>1-50</option>
                                    <option>51-200</option>
                                    <option>201-500</option>
                                    <option>500+</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">Send my enquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>`
    }
);

const simplePages = [
    {file: 'cities.html', title: 'Cities We Serve - RESS', desc: 'See where RESS is available and tell us where you would like us to launch next.'},
    {file: 'about.html', title: 'About RESS - Safety Is Where We Begin', desc: 'Learn about RESS, VIP SafeGuard Drive Ltd and our mission to make personal safety part of everyday life.'},
    {file: 'blog.html', title: 'RESS News and Stories', desc: 'Safety tips, product updates and stories from the RESS community.'},
    {file: 'help.html', title: 'Help Center - RESS Support', desc: 'Find answers on accounts, bookings, payments, safety and driver registration.'},
    {file: 'contact.html', title: 'Contact RESS', desc: 'Questions, feedback or a safety concern? Send us a message and we will get back to you.'},
    {file: 'legal-terms.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-privacy.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-cookies.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-driver-agreement.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-community-guidelines.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-insurance.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: 'legal-security.html', title: 'Legal - RESS', desc: 'Read the terms, privacy policy, cookie policy and community guidelines that apply to Ress.'},
    {file: '404.html', title: 'Page Not Found - RESS', desc: 'The page you are looking for could not be found. Return to the RESS home page.'}
];

simplePages.forEach(p => {
    pages.push({
        filename: p.file,
        title: p.title,
        description: p.desc,
        content: `
        <section class="page-header" style="padding: 120px 0 60px; background: var(--bg-color); text-align: center;">
            <div class="container">
                <h1>${p.title.split(' - ')[0]}</h1>
                <p style="font-size: 1.2rem; color: var(--text-secondary);">${p.desc}</p>
            </div>
        </section>
        <section class="container" style="padding: 4rem 0; min-height: 40vh; text-align: center;">
            <div style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 3rem; text-align: left; box-shadow: var(--shadow-sm); max-width: 800px; margin: 0 auto;">
                <p>Full content structure for <strong>${p.title.split(' - ')[0]}</strong> has been set up.</p>
                <p><em>(Refer to sections 6.12 through 6.18 of the specification for detailed internal components of this page)</em></p>
            </div>
        </section>`
    });
});

// Generate files
pages.forEach(page => {
    let html = BASE_TEMPLATE.replace('{{title}}', page.title)
                            .replace('{{description}}', page.description)
                            .replace('{{content}}', page.content);
    fs.writeFileSync(path.join(__dirname, '..', page.filename), html);
    console.log('Generated ' + page.filename);
});

console.log('All pages generated successfully.');
