# claude.md — Architecture & Référence rapide pour IA

> Fichier de référence pour IA. Objectif : éviter de lire tout le repo.
> Dernière mise à jour : 2026-02-19

---

## Vue d'ensemble

**Quiz Permis Luxembourg** — PWA (Progressive Web App) pour préparer l'examen théorique du code de la route au Luxembourg.

- **1775 questions** au total (marketed "+1200")
- **Hébergement** : GitHub Pages
- **Backend** : Cloudflare Workers + KV storage (leaderboard, validation licences)
- **Technologies** : HTML5 / CSS3 / Vanilla JavaScript (sans framework)
- **Offline** : Service Worker (`sw.js`)

---

## Structure des fichiers

```
quiz-permis-lu/
├── index.html              # App principale (quiz engine complet, ~1400 lignes)
├── cours.html              # Guide de cours complet (référence textuelle)
├── style.css               # Styles (responsive, PWA)
├── sw.js                   # Service Worker (cache offline)
├── manifest.json           # PWA manifest
├── quiz-free.js            # 50 questions gratuites — GÉNÉRÉ par tools/build.js
│
├── quiz-cours1.js          # Cours 1 : Chargement & Dimensions
├── quiz-cours2.js          # Cours 2 : Panneaux & Signalisation, Alcool
├── quiz-cours3.js          # Cours 3 : Distances & Freinage
├── quiz-data.js            # Cours 4 : Angles morts, Ceintures, Éclairage, Secours, Équipements, Permis
├── quiz-cours5.js          # Cours 5 : Permis, Catégories & Équipements
├── quiz-cours6.js          # Cours 6 : Sources officielles & Legilux (129 questions)
├── quiz-cours7.js          # Cours 7 : SNCA 350 questions
├── quiz-cours8.js          # Cours 8 : Source complète 536 questions
├── quiz-snca.js            # Examen démo SNCA (107 questions)
├── quiz-snca2.js           # Examen démo SNCA complément (444 questions)
│
├── tools/
│   └── build.js            # Script de build (génère quiz-free.js + Cloudflare Worker)
│
├── images/                 # Icônes et images de référence
│
├── 404.html                # Page 404
├── 536.html                # Page référence 536 questions
├── conseils.html           # Conseils pour l'examen
├── signalisation.html      # Référence signalisation
├── distances-freinage.html # Distances de freinage
├── alcool-permis.html      # Alcool & sanctions
└── ... (autres pages info)
```

---

## Format des questions (JSON)

Chaque question est un objet JS dans `window.QUIZ_QUESTIONS` :

```javascript
{
  question: "Texte de la question",
  answers: [
    { text: "Option A", correct: false },
    { text: "Option B", correct: true },
    { text: "Option C", correct: false }
  ],
  type: "single",          // "single" (1 bonne réponse) ou "multi" (≥2)
  topic: "Nom du topic",   // CRITIQUE : utilisé pour filtrer dans le dropdown
  piege: "Erreur commune", // Optionnel : description du piège
  explication: "Explication détaillée de la bonne réponse"
}
```

**Important** : `topic` est la valeur de filtre exacte. Le dropdown dans `index.html` filtre avec `q.topic === cat`.

---

## Distribution des questions par source

| Fichier | Questions | Topics principaux |
|---------|-----------|-------------------|
| quiz-cours1.js | ~34 | Chargement & Dimensions |
| quiz-cours2.js | ~34 | Panneaux & Signalisation, Alcool & Sanctions |
| quiz-cours3.js | ~19 | Distances & Freinage |
| quiz-data.js | ~116 | Angles morts camion, Ceintures & Enfants, Éclairage, Accident & Secours, Équipements, Permis & Documents |
| quiz-cours5.js | ~20 | Permis & Catégories |
| quiz-cours6.js | 129 | Limitations de vitesse, Permis à points, Alcool et stupéfiants, Couloir de secours, Système tirette... |
| quiz-cours7.js | 350 | Ceinture et enfants, Pneus hiver, Autoroutes, Distances et freinage, Signalisation... |
| quiz-cours8.js | 536 | (topic: "Cours 3" — source complète brute) |
| quiz-snca.js | 107 | Examen Demo |
| quiz-snca2.js | ~444 | Examen Demo |
| **TOTAL** | **1775** | |

---

## Dropdown de filtrage (index.html ~ligne 203)

Topics disponibles dans `<select id="categoryFilter">` et leur valeur exacte :

```
Cours 1 — Chargement
  → "Chargement & Dimensions"

Cours 2 — Signalisation
  → "Panneaux & Signalisation"
  → "Alcool & Sanctions"

Cours 3 — Distances
  → "Distances & Freinage"

Cours 4 — Transport Passagers
  → "Angles morts camion"
  → "Ceintures & Enfants"
  → "Éclairage"
  → "Accident & Secours"
  → "Équipements"
  → "Permis & Documents"

Cours 5 — Administratif
  → "Permis & Catégories"

Cours 6 — Sources officielles
  → "Limitations de vitesse"
  → "Permis à points"
  → "Alcool et stupéfiants"
  → "Couloir de secours"
  → "Système tirette"
  → "Téléphone au volant"
  → "Pneus d'hiver"
  → "Priorités et intersections"

Cours 7 — SNCA 350 questions
  → "Ceinture et enfants"
  → "Pneus hiver"
  → "Autoroutes"
  → "Distances et freinage"
  → "Signalisation"
  → "Accidents et secours"
  → "Piétons et vulnérables"
  → "Stationnement"

Examen Demo
  → "Examen Demo"
```

---

## Système de licences

- **Gratuit** : 50 questions depuis `quiz-free.js` (auto-généré)
- **Premium** : toutes les questions via **Cloudflare Worker API**
  - Validation de code → retourne les questions premium en JSON
  - Codes générés par `tools/build.js` (SHA-256), stockés dans `tools/license-codes.txt` (jamais committé)
- **Code master** : code permanent en dur dans le Worker

Logique de chargement dans `index.html` :
1. `quiz-free.js` chargé au démarrage (50 questions dans `window.QUIZ_QUESTIONS`)
2. Si licence valide → API Cloudflare retourne les questions premium → ajoutées à `window.QUIZ_QUESTIONS`
3. Filtre par `topic` appliqué sur `window.QUIZ_QUESTIONS`

---

## Build system (`tools/build.js`)

```
node tools/build.js
```

Lit tous les `quiz-*.js` → :
1. Génère `quiz-free.js` (50 questions diversifiées, proportionnelles par topic)
2. Génère `tools/cloudflare-worker.js` (déployer sur Cloudflare Workers)
3. Génère `tools/license-codes.txt` (codes de licence, privé)

**Fichiers lus par le build** :
quiz-cours1, quiz-cours2, quiz-cours3, quiz-data, quiz-cours5, quiz-cours6, quiz-cours7, quiz-snca, quiz-snca2, quiz-cours8

---

## Pages d'information (HTML statiques)

Format commun : HTML compatible PWA avec footer identique (12 liens vers les autres pages).

| Page | Contenu |
|------|---------|
| cours.html | Cours complet textuel (vitesses, alcool, permis, signalisation...) |
| signalisation.html | Référence des panneaux |
| distances-freinage.html | Tableau des distances de freinage |
| alcool-permis.html | Taux légaux, sanctions, permis à points |
| conseils.html | Conseils pratiques pour l'examen SNCA |
| 536.html | Référence des 536 questions source complète |
| stationnement.html | Règles de stationnement |
| pietons-cyclistes.html | Règles pour piétons et cyclistes |
| regles-specifiques.html | Règles spécifiques Luxembourg |

---

## Modes de quiz (index.html)

1. **Quiz standard** : N questions filtrées par topic, correction à la fin, 20 min
2. **Examen Blanc** : 54 questions, 30 min, seuil 49/54 (90%) — conditions réelles SNCA
3. **Mode révision** : filtre par catégorie faible

---

## Leaderboard & Stats

- **Scores locaux** : `localStorage` (hors ligne)
- **Leaderboard global** : Cloudflare KV store (top 5 affiché)
- **Stats** : nombre de quiz, moyenne, meilleur score, catégories faibles

---

## Points d'attention pour les modifications

1. **Ajouter des questions** → créer/modifier un fichier `quiz-coursX.js`, puis relancer `node tools/build.js`
2. **Ajouter un topic au dropdown** → éditer `index.html` ligne ~203-229, valeur = chaîne exacte du champ `topic` dans les questions
3. **Ne jamais committer** `tools/license-codes.txt` ni `tools/cloudflare-worker.js`
4. **quiz-free.js est auto-généré** — ne pas éditer manuellement
5. **Service Worker** (`sw.js`) : après modifications majeures, incrémenter la version du cache pour forcer le rechargement
6. **PWA manifest** : `manifest.json` définit icônes, couleurs, start_url

---

## Commandes utiles

```bash
# Générer quiz-free.js et le worker Cloudflare
node tools/build.js

# Lancer un serveur local pour tester
npx serve . -p 8080
# ou
python3 -m http.server 8080
```
