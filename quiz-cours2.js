// quiz-cours2.js — Cours 2 : Signalisation routière & Alcool
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(

  // ===== PANNEAUX - FORMES & COULEURS (Q1-12) =====
  {
    question: "Panneau triangulaire rouge = ?",
    answers: [
      { text: "Interdiction", correct: false },
      { text: "DANGER (avertissement)", correct: true },
      { text: "Obligation", correct: false },
      { text: "Indication", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Triangle = danger. Cercle rouge = interdiction.",
    explication: "Forme triangulaire pointe en haut = signal de danger."
  },
  {
    question: "Panneau cercle rouge (fond blanc) = ?",
    answers: [
      { text: "Danger", correct: false },
      { text: "Interdiction/Restriction", correct: true },
      { text: "Obligation", correct: false },
      { text: "Information", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Cercle ROUGE = interdiction. Cercle BLEU = obligation.",
    explication: "Symbole noir sur fond blanc, bordure rouge."
  },
  {
    question: "Panneau cercle bleu = ?",
    answers: [
      { text: "Interdiction", correct: false },
      { text: "Danger", correct: false },
      { text: "OBLIGATION (ordre à suivre)", correct: true },
      { text: "Information facultative", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Bleu = obligation. Rouge = interdiction.",
    explication: "Direction obligatoire, piste cyclable obligatoire, etc."
  },
  {
    question: "Panneaux rectangles/carrés bleus = ?",
    answers: [
      { text: "Interdiction", correct: false },
      { text: "Information ou service", correct: true },
      { text: "Danger", correct: false },
      { text: "Obligation", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Rectangle bleu = information (hôpital, parking, services).",
    explication: "Panneaux informatifs et directionnels."
  },
  {
    question: "Séries panneaux Luxembourg : combien de séries principales ?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "8 (A à H)", correct: true },
      { text: "10", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "A=Danger, B=Priorité, C=Interdiction, D=Obligation, E=Indication, F=Services, G=Direction, H=Zone.",
    explication: "8 séries de A à H."
  },
  {
    question: "Série A = ?",
    answers: [
      { text: "Obligation", correct: false },
      { text: "Interdiction", correct: false },
      { text: "DANGER", correct: true },
      { text: "Indication", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "A = Danger (triangles rouges). Astuce : A comme Attention.",
    explication: "Panneaux A.1 à A.29."
  },
  {
    question: "Série B = ?",
    answers: [
      { text: "Danger", correct: false },
      { text: "PRIORITÉ", correct: true },
      { text: "Interdiction", correct: false },
      { text: "Direction", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "B = Priorité (cédez le passage, STOP, etc.).",
    explication: "B.1 = cédez, B.2 = STOP."
  },
  {
    question: "Série C = ?",
    answers: [
      { text: "Obligation", correct: false },
      { text: "INTERDICTION", correct: true },
      { text: "Danger", correct: false },
      { text: "Services", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "C = Interdiction (cercles rouges).",
    explication: "Sens interdit, stationnement interdit, limitation vitesse."
  },
  {
    question: "Panneau danger en localité : distance de placement ?",
    answers: [
      { text: "25 m", correct: false },
      { text: "50 m (≈5 secondes à 50 km/h)", correct: true },
      { text: "100 m", correct: false },
      { text: "150 m", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "50 m en localité, 150 m hors localité. Règle des 5 secondes.",
    explication: "Le panneau doit être visible 5 secondes avant le danger."
  },
  {
    question: "Panneau danger hors localité : distance de placement ?",
    answers: [
      { text: "50 m", correct: false },
      { text: "100 m", correct: false },
      { text: "150 m (≈5 secondes à 90 km/h)", correct: true },
      { text: "200 m", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "150 m hors localité = 5 secondes à 90 km/h.",
    explication: "Vitesse plus élevée = distance plus grande."
  },
  {
    question: "Triangle pointe en bas = ?",
    answers: [
      { text: "Danger", correct: false },
      { text: "Cédez le passage", correct: true },
      { text: "STOP", correct: false },
      { text: "Route prioritaire", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Pointe en HAUT = danger. Pointe en BAS = cédez le passage.",
    explication: "Panneau B.1."
  },
  {
    question: "Forme du panneau STOP ?",
    answers: [
      { text: "Cercle rouge", correct: false },
      { text: "Triangle inversé", correct: false },
      { text: "Octogone rouge", correct: true },
      { text: "Carré rouge", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Seul panneau à 8 côtés. Reconnaissable même de dos.",
    explication: "Panneau B.2 — arrêt obligatoire."
  },

  // ===== MARQUAGE AU SOL (Q13-18) =====
  {
    question: "Ligne continue blanche = ?",
    answers: [
      { text: "Franchissable si prudent", correct: false },
      { text: "NON franchissable", correct: true },
      { text: "Facultative", correct: false },
      { text: "Seulement de nuit", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Continue = INTERDIT de franchir.",
    explication: "Signalisation horizontale obligatoire."
  },
  {
    question: "Ligne discontinue blanche = ?",
    answers: [
      { text: "Non franchissable", correct: false },
      { text: "Franchissable si conditions sûres", correct: true },
      { text: "Interdite", correct: false },
      { text: "Réservée bus", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Discontinue = franchissable. Continue = interdit.",
    explication: "Dépassement possible si visibilité suffisante."
  },
  {
    question: "Ligne double (continue + discontinue) : franchir de quel côté ?",
    answers: [
      { text: "Du côté continu", correct: false },
      { text: "Du côté discontinu uniquement", correct: true },
      { text: "Jamais", correct: false },
      { text: "Des deux côtés", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Franchissement autorisé UNIQUEMENT du côté discontinu.",
    explication: "Règle de la double ligne."
  },
  {
    question: "Zig-zag jaune au sol = ?",
    answers: [
      { text: "Danger", correct: false },
      { text: "Stationnement ET arrêt interdit", correct: true },
      { text: "Ralentir", correct: false },
      { text: "Zone piétonne", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Jaune = interdit. Blanc = fin de restriction.",
    explication: "Zone d'interdiction absolue."
  },
  {
    question: "Bande jaune continue (bordure) = ?",
    answers: [
      { text: "Stationnement interdit seulement", correct: false },
      { text: "Arrêt ET stationnement interdit", correct: true },
      { text: "Zone payante", correct: false },
      { text: "Réservé taxis", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Continue jaune = interdit. Discontinue jaune = stationnement interdit mais arrêt possible.",
    explication: "Bande continue plus restrictive que discontinue."
  },

  // ===== VOIE BUS & SPÉCIFICITÉS (Q19-23) =====
  {
    question: "Véhicules autorisés sur voie bus ? (cochez)",
    answers: [
      { text: "Taxis", correct: true },
      { text: "Ambulances", correct: true },
      { text: "Voitures médecins en service", correct: true },
      { text: "Auto-école formation professionnelle", correct: true },
      { text: "Voitures particulières pressées", correct: false }
    ],
    type: "multi",
    topic: "Panneaux & Signalisation",
    piege: "5 types : taxis, ambulances, médecins, auto-école pro, fourgons blindés.",
    explication: "Exceptions limitées, bien les connaître."
  },
  {
    question: "Stationnement interdit à moins de ... mètres d'un passage piétons ?",
    answers: [
      { text: "3 m", correct: false },
      { text: "5 m AVANT ET APRÈS", correct: true },
      { text: "10 m", correct: false },
      { text: "5 m seulement avant", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "AVANT ET APRÈS. Pas seulement avant.",
    explication: "5 m de chaque côté du passage piétons."
  },
  {
    question: "Voie lente : utilisation ?",
    answers: [
      { text: "Optionnelle, recommandée", correct: false },
      { text: "OBLIGATOIRE pour véhicules lents", correct: true },
      { text: "Réservée aux poids lourds", correct: false },
      { text: "Interdite aux voitures", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "OBLIGATOIRE, pas optionnel.",
    explication: "Tout véhicule lent doit utiliser la voie lente."
  },
  {
    question: "Zone stationnement fond JAUNE = ?",
    answers: [
      { text: "Stationnement autorisé", correct: false },
      { text: "Stationnement INTERDIT", correct: true },
      { text: "Fin de zone", correct: false },
      { text: "Stationnement payant", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Jaune = interdit. Blanc = fin de zone. Ne pas inverser.",
    explication: "Convention couleur zones."
  },
  {
    question: "Feu ORANGE (carrefour) = action ?",
    answers: [
      { text: "Accélérer pour passer", correct: false },
      { text: "Freiner si possible, attention changement rouge", correct: true },
      { text: "Ignorer et continuer", correct: false },
      { text: "Klaxonner", correct: false }
    ],
    type: "single",
    topic: "Panneaux & Signalisation",
    piege: "Orange = transition vers rouge. Freiner si possible.",
    explication: "Prudence obligatoire."
  },

  // ===== ALCOOL - TAUX & SANCTIONS (Q24-35) =====
  {
    question: "Taux légal d'alcoolémie au Luxembourg ?",
    answers: [
      { text: "0,2 ‰", correct: false },
      { text: "0,5 ‰ (0,5 g/l)", correct: true },
      { text: "0,8 ‰", correct: false },
      { text: "0 ‰ (tolérance zéro)", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "0,5 ‰ pour conducteurs expérimentés. 0,2 ‰ pour novices.",
    explication: "Taux général = 0,5 ‰."
  },
  {
    question: "Taux réduit 0,2 ‰ : qui est concerné ? (cochez)",
    answers: [
      { text: "Candidats au permis", correct: true },
      { text: "Conducteurs en période probatoire (2 ans)", correct: true },
      { text: "Accompagnateurs conduite accompagnée", correct: true },
      { text: "Conducteurs professionnels (bus/autocar)", correct: true },
      { text: "Tous les conducteurs de plus de 60 ans", correct: false }
    ],
    type: "multi",
    topic: "Alcool & Sanctions",
    piege: "4 catégories : candidats, novices, accompagnateurs, professionnels.",
    explication: "0,2 ‰ = quasi tolérance zéro (1 verre suffit à dépasser)."
  },
  {
    question: "Conversion éthylotest ↔ sang ?",
    answers: [
      { text: "0,25 mg/l air = 0,5 ‰ sang", correct: true },
      { text: "0,5 mg/l air = 0,5 ‰ sang", correct: false },
      { text: "1 mg/l air = 0,5 ‰ sang", correct: false },
      { text: "0,1 mg/l air = 0,5 ‰ sang", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "Facteur ×2 : air × 2 = sang.",
    explication: "0,25 mg/l air expiré = 0,5 g/l sang."
  },
  {
    question: "Sanction 0,5-0,8 ‰ ?",
    answers: [
      { text: "Avertissement", correct: false },
      { text: "145 € + 2 points", correct: true },
      { text: "500 € + 4 points", correct: false },
      { text: "Prison", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "Contravention grave. Pas un simple avertissement.",
    explication: "Premier palier de sanction alcool."
  },
  {
    question: "Sanction 0,8-1,2 ‰ ?",
    answers: [
      { text: "145 € + 2 points", correct: false },
      { text: "25-500 € + 4 points", correct: true },
      { text: "Prison obligatoire", correct: false },
      { text: "Amende seulement", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "4 points retirés. Contravention grave.",
    explication: "Palier intermédiaire."
  },
  {
    question: "Sanction ≥ 1,2 ‰ ?",
    answers: [
      { text: "Amende 500 € seulement", correct: false },
      { text: "500-10000 € + prison 8j-3ans + 6 points + retrait immédiat", correct: true },
      { text: "2 points + avertissement", correct: false },
      { text: "Stage obligatoire seulement", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "DÉLIT. Retrait immédiat du permis + prison possible.",
    explication: "Sanction maximale alcool."
  },
  {
    question: "Refus de test d'alcoolémie = sanction ?",
    answers: [
      { text: "Aucune (droit de refuser)", correct: false },
      { text: "Même sanction que ≥ 1,2 ‰ (retrait + 6 points)", correct: true },
      { text: "Amende 49 €", correct: false },
      { text: "Avertissement verbal", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "Refus = pire sanction. JAMAIS refuser.",
    explication: "Assimilé à l'ivresse maximale."
  },
  {
    question: "Champ visuel sans alcool ?",
    answers: [
      { text: "90°", correct: false },
      { text: "130°", correct: false },
      { text: "170°", correct: true },
      { text: "200°", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "170° → 30° sous alcool. Réduction de 82%.",
    explication: "Vision périphérique quasi supprimée."
  },
  {
    question: "Champ visuel avec alcool ?",
    answers: [
      { text: "120°", correct: false },
      { text: "90°", correct: false },
      { text: "30°", correct: true },
      { text: "60°", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "170° → 30°. Vision tunnel.",
    explication: "Incapacité de détecter les dangers latéraux."
  },
  {
    question: "Distance d'arrêt à 0 ‰ (sobre) ?",
    answers: [
      { text: "20 m", correct: false },
      { text: "27 m", correct: true },
      { text: "33 m", correct: false },
      { text: "40 m", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "27 m sobre, 33 m à 0,5 ‰. Différence = +6 m (+22%).",
    explication: "Distance réaction + distance freinage."
  },
  {
    question: "Distance d'arrêt supplémentaire à 0,5 ‰ ?",
    answers: [
      { text: "+3 m", correct: false },
      { text: "+6 m (+22%)", correct: true },
      { text: "+10 m", correct: false },
      { text: "+15 m", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "+6 mètres à 0,5 ‰. Pas 'juste un peu plus'.",
    explication: "33 m au lieu de 27 m. Peut faire la différence entre vie et mort."
  },
  {
    question: "Risque accident à 0,7 ‰ multiplié par ?",
    answers: [
      { text: "×2", correct: false },
      { text: "×5", correct: false },
      { text: "×10", correct: true },
      { text: "×20", correct: false }
    ],
    type: "single",
    topic: "Alcool & Sanctions",
    piege: "0,7 ‰ = ×10. 1,2 ‰ = ×35. 2 ‰ = ×80.",
    explication: "Progression exponentielle du risque."
  }

); // ===== FIN — Cours 2 : Signalisation & Alcool =====