const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');
const LAYOUTS_DIR = path.join(SRC_DIR, 'layouts');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

// Load SITE_CONFIG from assets/js/config.js
let SITE_CONFIG = {};
try {
    const configModule = require(path.join(ROOT_DIR, 'assets', 'js', 'config.js'));
    SITE_CONFIG = configModule.SITE_CONFIG || {};
} catch (err) {
    console.warn('Warning: Could not load SITE_CONFIG from assets/js/config.js', err.message);
}

// Helper: resolve nested property "brand.companyLegalName" in SITE_CONFIG
function getConfigValue(obj, keyPath) {
    const parts = keyPath.split('.');
    let curr = obj;
    for (const p of parts) {
        if (curr && typeof curr === 'object' && p in curr) {
            curr = curr[p];
        } else {
            return '';
        }
    }
    return curr != null ? String(curr) : '';
}

// Helper: replace {{config.path.to.prop}} in template strings
function interpolateConfig(template) {
    return template.replace(/\{\{config\.([a-zA-Z0-9_.]+)\}\}/g, (_, keyPath) => {
        return getConfigValue(SITE_CONFIG, keyPath);
    });
}

// Helper: load all component files in src/components/
function loadComponents() {
    const components = {};
    if (!fs.existsSync(COMPONENTS_DIR)) return components;

    const files = fs.readdirSync(COMPONENTS_DIR);
    for (const file of files) {
        if (file.endsWith('.html')) {
            const name = file.replace(/\.html$/, '');
            let content = fs.readFileSync(path.join(COMPONENTS_DIR, file), 'utf8');
            content = interpolateConfig(content);
            components[name] = content;
        }
    }
    return components;
}

// Helper: parse simple YAML frontmatter (--- ... ---)
function parseFrontmatter(fileContent) {
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
    const match = fileContent.match(frontmatterRegex);

    const data = {
        title: 'RESS - Safe Rides, Food, Security and Services',
        description: 'RESS is your all-in-one platform for secure ride hailing, logistics, food delivery, emergency security, and trusted everyday services.',
        showCta: true,
        scripts: '',
        headExtra: ''
    };

    if (!match) {
        return { data, content: fileContent };
    }

    const rawYaml = match[1];
    const bodyContent = fileContent.slice(match[0].length);

    // Simple line-by-line YAML parser supporting strings, booleans, and multi-line literal blocks (|)
    const lines = rawYaml.split(/\r?\n/);
    let currentKey = null;
    let isBlockLiteral = false;
    let blockLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (isBlockLiteral) {
            // Indented line belongs to current block
            if (/^\s{2,}/.test(line) || line.trim() === '') {
                blockLines.push(line);
                continue;
            } else {
                // End of block
                data[currentKey] = blockLines.join('\n');
                isBlockLiteral = false;
                blockLines = [];
            }
        }

        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
            const key = line.slice(0, colonIdx).trim();
            const val = line.slice(colonIdx + 1).trim();

            if (val === '|') {
                currentKey = key;
                isBlockLiteral = true;
                blockLines = [];
            } else if (val === 'true') {
                data[key] = true;
            } else if (val === 'false') {
                data[key] = false;
            } else {
                data[key] = val.replace(/^["']|["']$/g, '');
            }
        }
    }

    if (isBlockLiteral && currentKey) {
        data[currentKey] = blockLines.join('\n');
    }

    return { data, content: bodyContent };
}

// Recursively find all .html page files in a directory
function getPageFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            getPageFiles(fullPath, fileList);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

// Main build function
function build() {
    const startTime = Date.now();
    console.log('[Build] Starting RESS static site generation...');

    // 1. Load components & layout
    const components = loadComponents();
    const layoutPath = path.join(LAYOUTS_DIR, 'base.html');
    if (!fs.existsSync(layoutPath)) {
        throw new Error(`Master layout missing at: ${layoutPath}`);
    }
    const baseLayout = fs.readFileSync(layoutPath, 'utf8');

    // 2. Discover all pages
    const pageFiles = getPageFiles(PAGES_DIR);
    console.log(`[Build] Found ${pageFiles.length} page(s) in src/pages`);

    // 3. Prepare dist directory and copy static assets
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }
    const distAssets = path.join(DIST_DIR, 'assets');
    if (fs.existsSync(ASSETS_DIR)) {
        fs.cpSync(ASSETS_DIR, distAssets, { recursive: true });
    }

    let builtCount = 0;

    for (const pageFilePath of pageFiles) {
        const rawContent = fs.readFileSync(pageFilePath, 'utf8');
        const { data: pageMeta, content: rawBody } = parseFrontmatter(rawContent);

        // Replace partials inside the body first
        let pageBody = rawBody.replace(/\{\{>\s*([a-zA-Z0-9_-]+)\s*\}\}/g, (_, componentName) => {
            return components[componentName] || `<!-- Missing component: ${componentName} -->`;
        });

        // Assemble with base layout
        let html = baseLayout;

        // Replace partials inside layout
        html = html.replace(/\{\{>\s*([a-zA-Z0-9_-]+)\s*\}\}/g, (_, componentName) => {
            return components[componentName] || `<!-- Missing component: ${componentName} -->`;
        });

        // Handle {{#if showCta}} ... {{/if}}
        const ifCtaRegex = /\{\{#if showCta\}\}([\s\S]*?)\{\{\/if\}\}/g;
        if (pageMeta.showCta) {
            html = html.replace(ifCtaRegex, '$1');
        } else {
            html = html.replace(ifCtaRegex, '');
        }

        // Replace placeholders
        html = html.replace(/\{\{title\}\}/g, pageMeta.title || '')
                   .replace(/\{\{description\}\}/g, pageMeta.description || '')
                   .replace(/\{\{content\}\}/g, pageBody)
                   .replace(/\{\{scripts\}\}/g, pageMeta.scripts || '')
                   .replace(/\{\{headExtra\}\}/g, pageMeta.headExtra || '');

        // Output destination (dist/ directory)
        const filename = path.basename(pageFilePath);
        const outputPath = path.join(DIST_DIR, filename);

        fs.writeFileSync(outputPath, html, 'utf8');
        builtCount++;
        console.log(`  ✓ Built dist/${filename}`);
    }

    const duration = Date.now() - startTime;
    console.log(`[Build] Completed ${builtCount} pages in ${duration}ms.\n`);
}

// Execute build
build();

// Handle watch flag
if (process.argv.includes('--watch')) {
    console.log('[Watch] Watching src/ and assets/ for changes...');

    let debounceTimer = null;
    const triggerRebuild = (eventType, filename) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            console.log(`[Watch] Change detected (${filename || eventType}). Rebuilding...`);
            try {
                build();
            } catch (err) {
                console.error('[Watch] Build error:', err);
            }
        }, 150);
    };

    if (fs.existsSync(SRC_DIR)) {
        fs.watch(SRC_DIR, { recursive: true }, triggerRebuild);
    }
}
