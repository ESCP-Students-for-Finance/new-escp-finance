
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Import site data
import { articles, researchProjects } from '../src/data/siteData.js';

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML = path.resolve(DIST_DIR, 'index.html');

// Prefer explicit SITE_URL, otherwise use Vercel-provided URL, fallback to local
const rawSiteUrl = process.env.VITE_SITE_URL
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173');

// Trim whitespace/newlines and drop trailing slashes
const SITE_URL = rawSiteUrl.trim().replace(/\/+$/, '');

async function prerender() {
    console.log('Starting prerender...');

    if (!fs.existsSync(INDEX_HTML)) {
        console.error('Error: dist/index.html not found. Run "npm run build" first.');
        process.exit(1);
    }

    const template = fs.readFileSync(INDEX_HTML, 'utf-8');

    // Helper function to render a set of items
    const renderItems = (items, basePath) => {
        for (const item of items) {
            const slug = item.slug;
            const itemDir = path.join(DIST_DIR, basePath, slug);

            if (!fs.existsSync(itemDir)) {
                fs.mkdirSync(itemDir, { recursive: true });
            }

            // Replace meta tags in valid HTML
            const ogTags = `
      <title>${item.title} | ESCP Finance Society</title>
      <meta name="description" content="${item.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="${SITE_URL}/${basePath}/${slug}" />
      <meta property="og:title" content="${item.title.replace(/"/g, '&quot;')}" />
      <meta property="og:description" content="${item.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="og:image" content="${SITE_URL}${item.image}" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="${SITE_URL}/${basePath}/${slug}" />
      <meta property="twitter:title" content="${item.title.replace(/"/g, '&quot;')}" />
      <meta property="twitter:description" content="${item.excerpt.replace(/"/g, '&quot;')}" />
      <meta property="twitter:image" content="${SITE_URL}${item.image}" />
    `;

            // Inject into <head>
            // We look for the closing </head> tag and prepend our tags
            let htmlWithMeta = template.replace('</head>', `${ogTags}</head>`);

            // Fix relative paths for assets since we are 2 levels deep
            htmlWithMeta = htmlWithMeta.replace(/src="\.\//g, 'src="../../');
            htmlWithMeta = htmlWithMeta.replace(/href="\.\//g, 'href="../../');

            const finalPath = path.join(itemDir, 'index.html');
            fs.writeFileSync(finalPath, htmlWithMeta);

            console.log(`Prerendered: ${basePath}/${slug}/index.html`);
        }
    };

    // Render Articles
    console.log('Rendering Articles...');
    renderItems(articles, 'articles');

    // Render Research Projects
    console.log('Rendering Research Projects...');
    renderItems(researchProjects, 'research');

    console.log('Prerender complete.');
}

prerender();
