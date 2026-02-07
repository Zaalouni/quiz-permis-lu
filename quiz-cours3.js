// quiz-cours3.js — Cours 3 : Distances, Freinage & Compléments
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(

  // ===== DISTANCES FREINAGE (Q1-8) =====
  {
    question: "Distance d'arrêt = ?",
    answers: [
      { text: "Distance freinage uniquement", correct: false },
      { text: "Distance réaction + distance freinage", correct: true },
      { text: "Distance parcourue en 2 secondes", correct: false },
      { text: "Longueur du véhicule × vitesse", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Distance d'arrêt = réaction + freinage. Deux composantes.",
    explication: "La réaction est le temps avant que le pied touche la pédale."
  },
  {
    question: "Temps de réaction moyen d'un conducteur sobre ?",
    answers: [
      { text: "0,5 seconde", correct: false },
      { text: "1 seconde", correct: true },
      { text: "2 secondes", correct: false },
      { text: "3 secondes", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "1 seconde sobre. Augmente sous alcool/fatigue.",
    explication: "Temps moyen de réaction humain."
  },
  {
    question: "À 50 km/h, distance parcourue en 1 seconde (réaction) ?",
    answers: [
      { text: "10 m", correct: false },
      { text: "≈14 m", correct: true },
      { text: "20 m", correct: false },
      { text: "25 m", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Formule rapide : vitesse ÷ 3,6 = m/s. 50 ÷ 3,6 ≈ 14 m.",
    explication: "Distance parcourue AVANT même de freiner."
  },
  {
    question: "Distance sécurité verglas/neige ?",
    answers: [
      { text: "2 secondes (identique)", correct: false },
      { text: "3 secondes", correct: false },
      { text: "5 à 10 secondes", correct: true },
      { text: "15 secondes", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Normal=2s, pluie=3s, verglas/neige=5-10s.",
    explication: "Adhérence quasi nulle sur verglas."
  },
  {
    question: "Freinage d'urgence ABS = action conducteur ?",
    answers: [
      { text: "Pomper la pédale", correct: false },
      { text: "Appuyer FORT et maintenir sans relâcher", correct: true },
      { text: "Freiner doucement", correct: false },
      { text: "Tourner le volant en même temps", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "ABS = maintenir la pression. Ne PAS pomper.",
    explication: "L'ABS gère le blocage des roues automatiquement."
  },
  {
    question: "Pluie forte sur autoroute 130 km/h = vitesse max ?",
    answers: [
      { text: "130 km/h (pas de changement)", correct: false },
      { text: "110 km/h", correct: true },
      { text: "90 km/h", correct: false },
      { text: "80 km/h", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Pluie = 110 km/h max sur autoroute au Luxembourg.",
    explication: "Réduction de 20 km/h par mauvais temps."
  },
  {
    question: "Vitesses maximales au Luxembourg ? (cochez les correctes)",
    answers: [
      { text: "Agglomération : 50 km/h", correct: true },
      { text: "Hors agglomération : 90 km/h", correct: true },
      { text: "Autoroute : 130 km/h", correct: true },
      { text: "Autoroute pluie : 110 km/h", correct: true },
      { text: "Zone 30 : 40 km/h", correct: false }
    ],
    type: "multi",
    topic: "Distances & Freinage",
    piege: "Zone 30 = 30 km/h (pas 40). Autoroute pluie = 110.",
    explication: "50 / 90 / 130 (110 pluie). Chiffres clés."
  },
  {
    question: "Aquaplaning : que faire ?",
    answers: [
      { text: "Freiner fort", correct: false },
      { text: "Relâcher l'accélérateur doucement, ne pas freiner", correct: true },
      { text: "Accélérer pour traverser", correct: false },
      { text: "Tourner le volant", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Surtout ne PAS freiner ni tourner brusquement.",
    explication: "Pneus glissent sur l'eau. Attendre le rétablissement."
  },

  // ===== EFFETS ALCOOL PROGRESSIFS (Q9-13) =====
  {
    question: "Effets alcool entre 0,2 et 0,5 ‰ ?",
    answers: [
      { text: "Aucun effet", correct: false },
      { text: "Vision perturbée, estimation distances faussée", correct: true },
      { text: "Coordination totalement perdue", correct: false },
      { text: "Perte de conscience", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Dès 0,2 ‰ = effets réels même si 'sobre' en apparence.",
    explication: "Première phase : vision et estimation altérées."
  },
  {
    question: "Effets alcool entre 0,5 et 0,8 ‰ ?",
    answers: [
      { text: "Vision seulement", correct: false },
      { text: "Temps réaction allongé + difficulté panneaux/piétons", correct: true },
      { text: "Aucun effet notable", correct: false },
      { text: "Perte totale de coordination", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Temps de réaction rallongé = distance d'arrêt accrue.",
    explication: "Phase intermédiaire dangereuse."
  },
  {
    question: "Effets alcool > 0,8 ‰ ?",
    answers: [
      { text: "Léger trouble de vision", correct: false },
      { text: "Coordination et synchronisation TOTALEMENT perdues", correct: true },
      { text: "Réflexes plus rapides", correct: false },
      { text: "Effet seulement psychologique", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Perte TOTALE de coordination. Danger extrême.",
    explication: "Phase critique : conduite impossible."
  },
  {
    question: "Risque accident à 2 ‰ multiplié par ?",
    answers: [
      { text: "×10", correct: false },
      { text: "×35", correct: false },
      { text: "×80", correct: true },
      { text: "×100", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "0,7=×10, 1,2=×35, 2=×80. Progression exponentielle.",
    explication: "À 2 ‰ accident quasi certain."
  },
  {
    question: "Peut-on être sanctionné sous 0,5 ‰ ?",
    answers: [
      { text: "Non, en dessous du seuil légal", correct: false },
      { text: "OUI, si signes d'alcoolémie visibles", correct: true },
      { text: "Seulement pour candidats", correct: false },
      { text: "Non, jamais", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Signes visibles d'alcool = sanctionnable même sous 0,5 ‰.",
    explication: "Le comportement prime sur le chiffre."
  },

  // ===== COMPLÉMENTS CONDUITE (Q14-20) =====
  {
    question: "Téléphone portable au volant = sanction Luxembourg ?",
    answers: [
      { text: "Avertissement", correct: false },
      { text: "250 € + 4 points", correct: true },
      { text: "49 €", correct: false },
      { text: "Pas de sanction si mains libres", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "250 € + 4 points. Sanction LOURDE depuis réforme 2023.",
    explication: "Mains libres autorisé, tenir en main = interdit."
  },
  {
    question: "Ceinture non portée = sanction ?",
    answers: [
      { text: "Avertissement verbal", correct: false },
      { text: "145 € + 2 points", correct: true },
      { text: "49 € + 1 point", correct: false },
      { text: "250 € + 4 points", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "145 € + 2 points (loi 21/09/2023). L'ancien 49 € + 1 pt est obsolète.",
    explication: "Source : securite-routiere.lu. Avant ET arrière. Conducteur responsable pour passagers mineurs."
  },
  {
    question: "Moteur en marche véhicule stationné = légal ?",
    answers: [
      { text: "Oui, tant que < 5 minutes", correct: false },
      { text: "NON, interdit de laisser tourner inutilement", correct: true },
      { text: "Oui, si froid dehors", correct: false },
      { text: "Pas de réglementation", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Interdit au Luxembourg. Pollution + bruit.",
    explication: "Spécificité luxembourgeoise à connaître."
  },
  {
    question: "Remontée de files en moto ou voiture = légal au Luxembourg ?",
    answers: [
      { text: "Oui, moto autorisée", correct: false },
      { text: "NON, INTERDIT moto ET voiture", correct: true },
      { text: "Oui, si bouchon > 10 min", correct: false },
      { text: "Oui, sauf autoroute", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "INTERDIT au Luxembourg (contrairement à certains pays).",
    explication: "Même les motos ne peuvent pas remonter les files."
  },
  {
    question: "Capital initial permis à points Luxembourg ?",
    answers: [
      { text: "6 points", correct: false },
      { text: "12 points", correct: true },
      { text: "20 points", correct: false },
      { text: "24 points", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "12 points au Luxembourg (pas 6 comme en France pour novices).",
    explication: "Capital initial de 12 points pour tous."
  },
  {
    question: "Perte de tous les points = conséquence ?",
    answers: [
      { text: "Stage obligatoire + récupération", correct: false },
      { text: "Suspension du permis 1 an", correct: true },
      { text: "Annulation définitive", correct: false },
      { text: "Amende seulement", correct: false }
    ],
    type: "single",
    topic: "Distances & Freinage",
    piege: "Suspension 1 an. Pas annulation définitive.",
    explication: "Stage de rééducation possible au CFC Colmar-Berg."
  }

); // ===== FIN — Cours 3 : Distances & Compléments =====