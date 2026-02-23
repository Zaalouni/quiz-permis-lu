# claude.md — Référence rapide projet

> Dernière mise à jour : 2026-02-23

## Modèle par défaut

```bash
/model haiku    # exploration, tâches simples (10x moins cher)
/model sonnet   # production, défaut recommandé
/model opus     # raisonnement complexe uniquement
```

Règle : commencer en **haiku**, passer en **sonnet** si besoin, **opus** rarement.

---

## Aperçu

PWA quiz permis Luxembourg — 1775 questions, hébergé GitHub Pages.
Stack : HTML5 / CSS3 / Vanilla JS (sans framework) + Cloudflare Workers (API licences + KV leaderboard).

---

## Structure clé

| Fichier | Rôle |
|---------|------|
| `index.html` | App complète (~1400 lignes) |
| `style.css` | Styles responsive/PWA |
| `sw.js` | Service Worker offline |
| `quiz-free.js` | 50 questions gratuites — **AUTO-GÉNÉRÉ** |
| `quiz-cours[1-8].js` | Questions par cours (voir tableau ci-dessous) |
| `quiz-snca.js` / `quiz-snca2.js` | Examen démo SNCA |
| `quiz-data.js` | Cours 4 |
| `tools/build.js` | Génère quiz-free.js + Cloudflare Worker |

### Questions par fichier

| Fichier | N | Topics principaux |
|---------|---|-------------------|
| quiz-cours1 | ~34 | Chargement & Dimensions |
| quiz-cours2 | ~34 | Panneaux & Signalisation, Alcool & Sanctions |
| quiz-cours3 | ~19 | Distances & Freinage |
| quiz-data | ~116 | Angles morts camion, Ceintures & Enfants, Éclairage, Accident & Secours, Équipements, Permis & Documents |
| quiz-cours5 | ~20 | Permis & Catégories |
| quiz-cours6 | 129 | Limitations de vitesse, Permis à points, Alcool et stupéfiants, Couloir de secours, Système tirette, Téléphone, Pneus hiver, Priorités |
| quiz-cours7 | 350 | Ceinture et enfants, Pneus hiver, Autoroutes, Distances, Signalisation, Accidents, Piétons, Stationnement |
| quiz-cours8 | 536 | topic: "Cours 3" (source brute) |
| quiz-snca | 107 | Examen Demo |
| quiz-snca2 | ~444 | Examen Demo |

---

## Format question JSON

```javascript
{
  question: "...",
  answers: [{ text: "...", correct: false }, { text: "...", correct: true }],
  type: "single",        // ou "multi"
  topic: "Nom exact",    // valeur du dropdown — CRITIQUE
  piege: "...",          // optionnel
  explication: "..."
}
```

`topic` doit correspondre exactement à la valeur `<option value="...">` dans `index.html` (~ligne 203).

---

## Topics valides (dropdown)

```
Chargement & Dimensions | Panneaux & Signalisation | Alcool & Sanctions
Distances & Freinage | Angles morts camion | Ceintures & Enfants
Éclairage | Accident & Secours | Équipements | Permis & Documents
Permis & Catégories | Limitations de vitesse | Permis à points
Alcool et stupéfiants | Couloir de secours | Système tirette
Téléphone au volant | Pneus d'hiver | Priorités et intersections
Ceinture et enfants | Pneus hiver | Autoroutes | Distances et freinage
Signalisation | Accidents et secours | Piétons et vulnérables
Stationnement | Examen Demo
```

---

## Licences & Build

- **Gratuit** : `quiz-free.js` (50 questions, auto-généré)
- **Premium** : Cloudflare Worker valide le code → retourne questions en JSON → ajoutées à `window.QUIZ_QUESTIONS`
- **Build** : `node tools/build.js` → génère quiz-free.js + Worker + license-codes.txt

Ne jamais committer : `tools/license-codes.txt`, `tools/cloudflare-worker.js`, `quiz-cours[1-3].js`, `quiz-data.js`, `quiz-cours5.js`, `quiz-snca*.js`

---

## Règles de modification

1. **Nouvelle question** → modifier `quiz-coursX.js` + relancer `node tools/build.js`
2. **Nouveau topic** → ajouter `<option>` dans `index.html` ~ligne 203-229
3. **Cache offline** → incrémenter version dans `sw.js` après modif majeure
4. **quiz-free.js** → ne jamais éditer manuellement

---

## Commandes

```bash
node tools/build.js          # régénérer quiz-free.js + worker
python3 -m http.server 8080  # serveur local
```
