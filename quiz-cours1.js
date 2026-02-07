// quiz-cours1.js — Cours 1 : Chargement & Dimensions véhicules
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(

  // ===== MASSE & DIMENSIONS (Q1-15) =====
  {
    question: "Qu'est-ce que la masse à vide (rubrique G) ?",
    answers: [
      { text: "Véhicule sans carburant ni passagers", correct: false },
      { text: "Véhicule sans occupants ni chargement, AVEC carburant plein + outillage", correct: true },
      { text: "Poids total en charge", correct: false },
      { text: "Poids du conducteur seul", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "La masse à vide INCLUT le carburant plein et l'outillage standard.",
    explication: "Rubrique G du certificat d'immatriculation."
  },
  {
    question: "Charge utile = ?",
    answers: [
      { text: "G - F.2", correct: false },
      { text: "F.2 (masse en charge) - G (masse à vide)", correct: true },
      { text: "F.1 × 2", correct: false },
      { text: "Poids total - carburant", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "F.2 - G (pas l'inverse).",
    explication: "Formule officielle : charge utile = F.2 - G."
  },
  {
    question: "Véhicule F.2=2010 kg, G=1605 kg. Charge utile ?",
    answers: [
      { text: "305 kg", correct: false },
      { text: "405 kg", correct: true },
      { text: "505 kg", correct: false },
      { text: "3615 kg", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2010 - 1605 = 405 kg. Calcul simple mais piège fréquent.",
    explication: "Application directe de la formule F.2 - G."
  },
  {
    question: "Hauteur maximale d'une voiture ?",
    answers: [
      { text: "2,50 m", correct: false },
      { text: "3 m", correct: false },
      { text: "4 m", correct: true },
      { text: "4,50 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Moto = 2,50 m, voiture = 4 m. Ne pas confondre.",
    explication: "4 mètres pour tous les véhicules sauf 2-roues."
  },
  {
    question: "Hauteur maximale d'une moto/cyclomoteur ?",
    answers: [
      { text: "2 m", correct: false },
      { text: "2,50 m", correct: true },
      { text: "3 m", correct: false },
      { text: "4 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2,50 m pour 2-roues (pas 4 m comme voitures).",
    explication: "Spécifique aux motos et cyclomoteurs."
  },
  {
    question: "Largeur maximale d'une voiture ?",
    answers: [
      { text: "2 m", correct: false },
      { text: "2,50 m", correct: false },
      { text: "2,55 m", correct: true },
      { text: "2,60 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2,55 m (PAS 2,60 m). Piège SNCA classique !",
    explication: "2,55 m voitures, 2,60 m uniquement conteneurs/caisses mobiles."
  },
  {
    question: "Largeur maximale d'un cyclomoteur ?",
    answers: [
      { text: "0,80 m", correct: false },
      { text: "1 m", correct: true },
      { text: "1,50 m", correct: false },
      { text: "2 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Cyclomoteur = 1 m, moto = 2 m.",
    explication: "Dimension réduite pour cyclomoteurs."
  },
  {
    question: "Largeur maximale véhicules conteneurs/caisses mobiles ?",
    answers: [
      { text: "2,55 m", correct: false },
      { text: "2,60 m", correct: true },
      { text: "3 m", correct: false },
      { text: "2,50 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Seule exception à 2,60 m (voitures = 2,55 m).",
    explication: "Conteneurs et caisses mobiles uniquement."
  },

  // ===== DÉPASSEMENT CHARGEMENT (Q9-20) =====
  {
    question: "Dépassement frontal (devant le véhicule) autorisé ?",
    answers: [
      { text: "50 cm maximum", correct: false },
      { text: "1 m maximum", correct: false },
      { text: "2 m maximum", correct: false },
      { text: "0 m — AUCUN dépassement frontal", correct: true }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "ZÉRO dépassement frontal. Même 10 cm = interdit.",
    explication: "Rien ne peut dépasser devant la face avant du véhicule."
  },
  {
    question: "Dépassement arrière maximum ?",
    answers: [
      { text: "1 m", correct: false },
      { text: "2 m", correct: true },
      { text: "3 m", correct: false },
      { text: "Pas de limite", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2 m max arrière. Pour motos : seulement 1 m.",
    explication: "Signalisation obligatoire si dépassement > 1 m."
  },
  {
    question: "Signalisation obligatoire si dépassement arrière dépasse ?",
    answers: [
      { text: "50 cm", correct: false },
      { text: "1 m", correct: true },
      { text: "1,50 m", correct: false },
      { text: "2 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Dès > 1 m (pas 2 m). Piège fréquent.",
    explication: "Fanion + rétroréfléchissant obligatoires."
  },
  {
    question: "Dépassement latéral maximum (chaque côté) ?",
    answers: [
      { text: "50 cm", correct: false },
      { text: "1 m", correct: true },
      { text: "1,50 m", correct: false },
      { text: "2 m", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "1 m de CHAQUE côté (gauche ET droite).",
    explication: "Dépassement latéral limité pour sécurité."
  },
  {
    question: "Dépassement en hauteur au-dessus du véhicule ?",
    answers: [
      { text: "1 m", correct: false },
      { text: "2 m", correct: true },
      { text: "3 m", correct: false },
      { text: "Pas de limite si < 4 m total", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2 m maximum au-dessus du véhicule.",
    explication: "Hauteur totale ne doit pas dépasser la limite."
  },
  {
    question: "Véhicule > 2 m de hauteur : règle face avant ?",
    answers: [
      { text: "Face avant = hauteur du véhicule", correct: false },
      { text: "Face avant max 2 m", correct: true },
      { text: "Face avant max 3 m", correct: false },
      { text: "Aucune restriction", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Face avant max 2 m MAIS dépassement frontal = toujours 0 m.",
    explication: "Deux règles distinctes : hauteur face avant ≠ dépassement frontal."
  },
  {
    question: "Dépassement arrière moto ?",
    answers: [
      { text: "2 m (comme voitures)", correct: false },
      { text: "1 m maximum", correct: true },
      { text: "50 cm maximum", correct: false },
      { text: "Aucun autorisé", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Moto = 1 m arrière (PAS 2 m comme voitures). Piège SNCA.",
    explication: "Règle spécifique 2-roues plus restrictive."
  },

  // ===== SIGNALISATION CHARGEMENT (Q16-22) =====
  {
    question: "Signalisation chargement JOUR (> 1 m arrière) = quoi ? (cochez)",
    answers: [
      { text: "Fanion rouge 40×40 cm", correct: true },
      { text: "Rétroréfléchissant 40×40 cm", correct: true },
      { text: "Feu rouge", correct: false },
      { text: "Catadioptre", correct: false }
    ],
    type: "multi",
    topic: "Chargement & Dimensions",
    piege: "JOUR = fanion + rétroréfléchissant. PAS de feu.",
    explication: "Fanion seul ne suffit pas (piège classique)."
  },
  {
    question: "Signalisation NUIT arrière chargement = quoi ? (cochez)",
    answers: [
      { text: "Rétroréfléchissant 40×40 cm", correct: true },
      { text: "Feu ROUGE", correct: true },
      { text: "Catadioptre rouge (non triangulaire)", correct: true },
      { text: "Fanion rouge seul", correct: false }
    ],
    type: "multi",
    topic: "Chargement & Dimensions",
    piege: "NUIT = rétroréfléchissant + feu rouge + catadioptre. Pas de fanion.",
    explication: "Signalisation lumineuse obligatoire de nuit."
  },
  {
    question: "Signalisation NUIT avant chargement : couleur feu ?",
    answers: [
      { text: "Rouge", correct: false },
      { text: "BLANC", correct: true },
      { text: "Orange", correct: false },
      { text: "Pas de feu avant", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Avant = BLANC, arrière = ROUGE.",
    explication: "Convention universelle : blanc devant, rouge derrière."
  },

  // ===== CONTRÔLES & FIXATION (Q19-22) =====
  {
    question: "Contrôles obligatoires après chargement ? (cochez)",
    answers: [
      { text: "Pression pneus adaptée", correct: true },
      { text: "Feux fonctionnels", correct: true },
      { text: "Stabilité de la charge", correct: true },
      { text: "Visibilité plaque immatriculation", correct: true },
      { text: "Pesée officielle en station", correct: false }
    ],
    type: "multi",
    topic: "Chargement & Dimensions",
    piege: "4 contrôles : pneus + feux + stabilité + plaque visible.",
    explication: "Vérification rapide mais obligatoire."
  },
  {
    question: "Matières poussiéreuses/volatiles = obligation ?",
    answers: [
      { text: "Aucune obligation spéciale", correct: false },
      { text: "Sous bâche obligatoire", correct: true },
      { text: "Seulement sur autoroute", correct: false },
      { text: "Seulement si > 500 kg", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Bâche obligatoire pour empêcher dispersion.",
    explication: "Sécurité routière + environnement."
  },

  // ===== REMORQUE (Q21-26) =====
  {
    question: "Transport de personnes en remorque = légal ?",
    answers: [
      { text: "Oui, si ceintures présentes", correct: false },
      { text: "JAMAIS autorisé", correct: true },
      { text: "Oui, trajets courts", correct: false },
      { text: "Oui, si remorque fermée", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "JAMAIS autorisé. Amende + retrait permis possible.",
    explication: "Interdit formellement, amende + retrait permis."
  },
  {
    question: "Nombre maximum de remorques tractées ?",
    answers: [
      { text: "2 en tandem", correct: false },
      { text: "1 seule", correct: true },
      { text: "3 si légères", correct: false },
      { text: "Pas de limite", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "1 seule remorque maximum.",
    explication: "Réglementation stricte Luxembourg."
  },
  {
    question: "Remorque ≤ 750 kg : contrôle technique ?",
    answers: [
      { text: "CT obligatoire comme voiture", correct: false },
      { text: "Vignette de conformité suffit", correct: true },
      { text: "Aucun contrôle", correct: false },
      { text: "CT tous les 2 ans", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "≤ 750 kg = vignette conformité (pas de CT). > 750 kg = CT obligatoire.",
    explication: "Petites remorques exemptées de CT au Luxembourg."
  },
  {
    question: "Remorque > 750 kg : premier CT quand ?",
    answers: [
      { text: "Après 4 ans (comme voiture)", correct: false },
      { text: "Dès le 1er passage (1er CT obligatoire)", correct: true },
      { text: "Jamais si < 3500 kg", correct: false },
      { text: "Tous les 5 ans", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Dès le 1er passage ! Pas après 4 ans comme les voitures.",
    explication: "Remorques > 750 kg = CT immédiat puis périodique."
  },

  // ===== AUTOROUTE & COULOIR SECOURS (Q25-30) =====
  {
    question: "Distance de sécurité réglementaire ?",
    answers: [
      { text: "2 mètres", correct: false },
      { text: "2 SECONDES", correct: true },
      { text: "50 mètres fixe", correct: false },
      { text: "1 seconde", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "2 SECONDES (pas 2 mètres). Piège classique examen.",
    explication: "Méthode crocodiles : compter 'crocodile 1, crocodile 2'."
  },
  {
    question: "Distance sécurité par temps humide ?",
    answers: [
      { text: "2 secondes (identique)", correct: false },
      { text: "3 secondes", correct: true },
      { text: "5 secondes", correct: false },
      { text: "10 secondes", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "3 secondes pluie, 5-10 secondes verglas/neige.",
    explication: "Adaptation aux conditions météo."
  },
  {
    question: "Couloir de secours autoroute 2 voies : où se forme-t-il ?",
    answers: [
      { text: "Entre voie 1 et bande d'arrêt", correct: false },
      { text: "Entre voie 1 (gauche) et voie 2 (droite)", correct: true },
      { text: "Sur la bande d'arrêt d'urgence", correct: false },
      { text: "Voie de gauche uniquement", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Voie gauche = à gauche, voie droite = à droite. Couloir AU MILIEU.",
    explication: "Permettre passage véhicules de secours."
  },
  {
    question: "Non-respect du couloir de secours = sanction ?",
    answers: [
      { text: "Avertissement verbal", correct: false },
      { text: "145 € + 2 points", correct: true },
      { text: "49 € seulement", correct: false },
      { text: "Pas de sanction spécifique", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "145 € + 2 points. Sanction sévère.",
    explication: "Obligation légale, pas une recommandation."
  },
  {
    question: "Système 'zipper' (tirette) en embouteillage = principe ?",
    answers: [
      { text: "Changer de voie le plus tôt possible", correct: false },
      { text: "Rester dans sa voie, fusionner en alternance au dernier moment", correct: true },
      { text: "Priorité au plus rapide", correct: false },
      { text: "Doubler par la bande d'arrêt d'urgence", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Zipper = alternance AU POINT de fusion. Non-respect = sanctionné.",
    explication: "Obligatoire au Luxembourg, pas optionnel."
  },

  // ===== ÉCO-CONDUITE & PNEUS (Q30-35) =====
  {
    question: "Changement de vitesse diesel = à combien de tr/min ?",
    answers: [
      { text: "1500 tr/min", correct: false },
      { text: "2000 tr/min", correct: true },
      { text: "2500 tr/min", correct: false },
      { text: "3000 tr/min", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Diesel = 2000, Essence = 2500. Astuce : Diesel = Deux mille.",
    explication: "Éco-conduite : anticiper les montées en régime."
  },
  {
    question: "Changement de vitesse essence = à combien de tr/min ?",
    answers: [
      { text: "2000 tr/min", correct: false },
      { text: "2500 tr/min", correct: true },
      { text: "3000 tr/min", correct: false },
      { text: "3500 tr/min", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "Essence = 2500 (Élevé). Diesel = 2000.",
    explication: "Réduction consommation 15-20%."
  },
  {
    question: "Économies annuelles avec l'éco-conduite ?",
    answers: [
      { text: "50-100 €", correct: false },
      { text: "150-250 €", correct: false },
      { text: "300-600 €", correct: true },
      { text: "1000-1500 €", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "300 à 600 € par an. Chiffre officiel.",
    explication: "Réduction consommation 15-20% + moins d'usure."
  },
  {
    question: "Différence distance freinage pneus A vs pneus G ?",
    answers: [
      { text: "+5 mètres", correct: false },
      { text: "+10 mètres", correct: false },
      { text: "+16 mètres", correct: true },
      { text: "+25 mètres", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "+16 m de freinage avec pneus G. Énorme différence.",
    explication: "Étiquette pneu : A = meilleur, G = pire."
  },
  {
    question: "Économie carburant annuelle entre pneus A et G ?",
    answers: [
      { text: "50 litres", correct: false },
      { text: "100 litres", correct: false },
      { text: "160 litres", correct: true },
      { text: "250 litres", correct: false }
    ],
    type: "single",
    topic: "Chargement & Dimensions",
    piege: "160 litres/an de différence selon étiquette.",
    explication: "Investir dans de bons pneus = économie réelle."
  }

); // ===== FIN — Cours 1 : Chargement & Dimensions =====