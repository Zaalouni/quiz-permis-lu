#!/usr/bin/env node

/**
 * Script to add Google Tag Manager to all HTML pages
 * Updates CSP and adds GTM code to each page
 */

const fs = require('fs');
const path = require('path');

const GTM_CODE = `  <!-- Google Tag Manager — chargé uniquement après consentement cookies -->
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  function trackEvent(eventName, params) { gtag('event', eventName, params); }

  function loadGTM() {
    if (window._gtmLoaded) return;
    window._gtmLoaded = true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PBWRMC8N');
    gtag('js', new Date());
    gtag('config', 'GTM-PBWRMC8N');
  }

  // Charger GTM seulement si consentement déjà donné
  if (localStorage.getItem('cookieConsent') === 'accepted') loadGTM();
  </script>

`;

const NEW_CSP = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; font-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; worker-src 'self'";

const PRECONNECT_LINKS = `  <link rel="preconnect" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
`;

const baseDir = path.join(__dirname, '..');
const htmlFiles = fs.readdirSync(baseDir)
  .filter(file => file.endsWith('.html') && file !== 'gtm-snippet.html')
  .map(file => path.join(baseDir, file));

console.log(`Found ${htmlFiles.length} HTML files to update`);

let updated = 0;
let skipped = 0;

htmlFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if GTM already present
  if (content.includes('Google Tag Manager') || content.includes('GTM-PBWRMC8N')) {
    console.log(`✓ Skipped ${fileName} (GTM already present)`);
    skipped++;
    return;
  }

  // Update CSP
  const oldCspPattern = /(<meta http-equiv="Content-Security-Policy" content=")([^"]+)(")/;
  if (oldCspPattern.test(content)) {
    content = content.replace(oldCspPattern, (match, prefix, csp, suffix) => {
      // Skip if already updated
      if (csp.includes('googletagmanager')) {
        return match;
      }
      return prefix + NEW_CSP + suffix;
    });
  }

  // Add preconnect links if not present
  if (!content.includes('preconnect')) {
    const headInsertPoint = content.indexOf('</head>');
    if (headInsertPoint !== -1) {
      content = content.slice(0, headInsertPoint) + PRECONNECT_LINKS + content.slice(headInsertPoint);
    }
  }

  // Add GTM code after charset
  const charsetPattern = /(<meta charset="utf-8" ?\/>)/;
  if (charsetPattern.test(content)) {
    content = content.replace(charsetPattern, (match) => {
      return match + '\n' + GTM_CODE;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${fileName}`);
  updated++;
});

console.log(`\n✅ Process complete: ${updated} files updated, ${skipped} files skipped`);
