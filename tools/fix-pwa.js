#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Configuration PWA à ajouter
const PWA_TAGS = `
  <!-- PWA -->
  <link rel="manifest" href="manifest.json">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Quiz Permis LU">
  <meta name="application-name" content="Quiz Permis LU">`;

const rootDir = path.join(__dirname, '..');

// Lister tous les fichiers HTML
const htmlFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.html'))
  .filter(f => f !== 'index.html'); // index.html est déjà correct

console.log(`📝 ${htmlFiles.length} fichiers HTML à traiter\n`);

let fixed = 0;
let errors = 0;

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);

  try {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Vérifier si le manifest est déjà présent
    if (content.includes('rel="manifest"')) {
      // Vérifier si les meta tags Apple sont présents
      if (!content.includes('apple-mobile-web-app-capable')) {
        // Ajouter seulement les meta tags Apple après le manifest
        const appleMetaTags = `
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Quiz Permis LU">
  <meta name="application-name" content="Quiz Permis LU">`;

        content = content.replace(
          /(<link rel="manifest" href="manifest\.json">)/,
          `$1${appleMetaTags}`
        );

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ ${file} - Meta tags Apple ajoutés`);
        fixed++;
      } else {
        console.log(`⏭️  ${file} - Déjà complet`);
      }
    } else {
      // Ajouter tous les tags PWA après theme-color
      content = content.replace(
        /(<meta name="theme-color" content="#1e3a8a">)/,
        `$1${PWA_TAGS}`
      );

      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ ${file} - Configuration PWA ajoutée`);
      fixed++;
    }

  } catch (err) {
    console.error(`❌ ${file} - Erreur: ${err.message}`);
    errors++;
  }
});

console.log(`\n📊 Résumé:`);
console.log(`   ✅ ${fixed} fichiers corrigés`);
console.log(`   ❌ ${errors} erreurs`);
console.log(`   📁 Total traité: ${htmlFiles.length}`);
