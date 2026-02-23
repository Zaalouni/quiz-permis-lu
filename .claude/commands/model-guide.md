# Guide de sélection du modèle

## Règle générale : commencer par haiku, monter si nécessaire

```bash
/model haiku    # exploration, lecture de fichiers, questions simples
/model sonnet   # défaut production, modifications de code
/model opus     # raisonnement complexe, architecture, débogage difficile
```

## Quand utiliser chaque modèle

| Modèle | Coût relatif | Cas d'usage |
|--------|-------------|-------------|
| Haiku  | 1x (référence) | Lire des fichiers, chercher du code, questions courtes, reformatage |
| Sonnet | ~5x | Écrire/modifier du code, explications, tâches standard |
| Opus   | ~15x | Refactoring complexe, architecture, bugs difficiles à trouver |

## Exemples par tâche

- "Lis quiz-cours7.js et liste les topics" → `/model haiku`
- "Ajoute 5 questions au cours 3" → `/model sonnet`
- "Pourquoi le leaderboard Cloudflare échoue silencieusement ?" → `/model opus`
- "Formate ce JSON" → `/model haiku`
- "Refactorise le quiz engine dans index.html" → `/model sonnet` ou `/model opus`
