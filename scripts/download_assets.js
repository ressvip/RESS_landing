const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://ressvip.com/img/Ress/';
const assetsDir = path.join(__dirname, '..', 'assets', 'images');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
}

const files = [
    'Logo.svg',
    'Footer logo.svg',
    'Apple store.svg',
    'play store.svg',
    'Apple store Black.png',
    'play store black.png',
    'App-Mobile-Screen-Mockup.png',
    'App-Mobile-Screen-Mockup2 download.png',
    'Group 42.svg',
    'Group 43.svg',
    'Group 12687.svg',
    'Subtraction 5.svg',
    'Path Icon.svg',
    'Shild Icon.svg',
    'Setings Icon.svg',
    'address-book.svg',
    'chart-area-line.svg',
    'lock-bolt.svg',
    '01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '08.png', '09.png', '10.png', '11.png'
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        
        // Handle spaces in URL correctly
        const encodedUrl = url.split('/').map(part => encodeURIComponent(part)).join('/');
        const finalUrl = encodedUrl.replace('https%3A//', 'https://');

        https.get(finalUrl, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err.message));
        });
    });
};

async function downloadAll() {
    console.log(`Starting download of ${files.length} assets...`);
    for (const file of files) {
        const url = baseUrl + file;
        
        // Map names for our project
        let localName = file;
        if (file === 'Logo.svg') localName = 'logo.svg';
        if (file === 'Footer logo.svg') localName = 'logo-white.svg';
        if (file === 'Apple store.svg') localName = 'app-store-badge.svg';
        if (file === 'play store.svg') localName = 'google-play-badge.svg';
        if (file === 'App-Mobile-Screen-Mockup.png') localName = 'app-mockup-hero.png';
        
        const dest = path.join(assetsDir, localName);
        
        try {
            await download(url, dest);
            console.log(`✅ Downloaded ${localName}`);
        } catch (e) {
            console.error(`❌ Failed to download ${file}: ${e}`);
        }
    }
    console.log('Finished downloading assets!');
}

downloadAll();
