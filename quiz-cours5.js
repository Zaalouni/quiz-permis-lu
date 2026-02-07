// quiz-cours5.js — Cours 5 : Permis, Documents & Administratif
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(

  // ===== PERMIS CATÉGORIES (Q1-6) =====
  {
    question: "Permis B + 2 ans = conduire moto 125 cm³ ?",
    answers: [
      { text: "Oui, directement sans formation", correct: false },
      { text: "OUI, si permis B ≥ 2 ans + formation spécifique", correct: true },
      { text: "Non, jamais avec permis B", correct: false },
      { text: "Oui, dès obtention du permis B", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "2 conditions : 2 ans de permis B + formation obligatoire.",
    explication: "Au Luxembourg, permis B ouvre accès 125 cm³ sous conditions."
  },
  {
    question: "Permis AM = conduire quoi ?",
    answers: [
      { text: "Voitures < 3500 kg", correct: false },
      { text: "Cyclomoteurs ≤ 50 cm³ / 45 km/h", correct: true },
      { text: "Motos toutes cylindrées", correct: false },
      { text: "Camionnettes", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "AM = petits 2-roues uniquement. 1 seul passager.",
    explication: "Cyclomoteurs et quadricycles légers."
  },
  {
    question: "Permis AM : combien de passagers maximum ?",
    answers: [
      { text: "Aucun passager", correct: false },
      { text: "1 seul passager", correct: true },
      { text: "2 passagers", correct: false },
      { text: "Selon le véhicule", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "1 SEUL passager en AM. Confusion fréquente.",
    explication: "Limitation stricte cyclomoteurs."
  },
  {
    question: "Permis A (moto) : casque passager = obligation ?",
    answers: [
      { text: "Recommandé seulement", correct: false },
      { text: "Homologué obligatoire, adapté taille", correct: true },
      { text: "N'importe quel casque", correct: false },
      { text: "Pas obligatoire si > 18 ans", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Casque homologué + adapté à la taille. Pas un casque quelconque.",
    explication: "Norme R22 ou équivalent, adapté au passager."
  },
  {
    question: "Âge minimum passager moto ?",
    answers: [
      { text: "Pas de limite", correct: false },
      { text: "12 ans minimum", correct: true },
      { text: "16 ans", correct: false },
      { text: "18 ans", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "12 ans minimum pour monter sur une moto en tant que passager.",
    explication: "Sécurité des jeunes passagers."
  },
  {
    question: "Permis F (tracteur) : transport personnes en remorque tirée ?",
    answers: [
      { text: "Oui, si places disponibles", correct: false },
      { text: "INTERDIT (remorque tirée tracteur)", correct: true },
      { text: "Oui, < 25 km/h", correct: false },
      { text: "Dépend du poids", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Remorque tracteur = JAMAIS de passagers.",
    explication: "Exception : véhicule non-immatriculé ≤ 25 km/h autorisé."
  },

  // ===== IMMATRICULATION & ASSURANCE (Q7-14) =====
  {
    question: "Amende pour défaut de pneus hiver en conditions hivernales au Luxembourg ?",
    answers: [
      { text: "49 €", correct: false },
      { text: "74 €", correct: true },
      { text: "145 €", correct: false },
      { text: "250 €", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "74 € amende forfaitaire. Source : Guichet.lu.",
    explication: "Obligation conditionnelle (pas de dates fixes, selon conditions météo)."
  },
  {
    question: "CT non valide = sanction au Luxembourg ?",
    answers: [
      { text: "Avertissement", correct: false },
      { text: "145 € + 2 points", correct: true },
      { text: "49 €", correct: false },
      { text: "Pas de sanction", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "145 € + 2 points. Source : Police Grand-Ducale (contrôle Differdange fév 2025).",
    explication: "CT doit être à jour, vérifié lors de tout contrôle routier."
  },
  {
    question: "Profondeur minimale sculpture pneu (seuil légal) ?",
    answers: [
      { text: "1,0 mm", correct: false },
      { text: "1,6 mm", correct: true },
      { text: "2,0 mm", correct: false },
      { text: "3,0 mm", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "1,6 mm = minimum légal. En dessous = interdit + amende + immobilisation possible.",
    explication: "Vérification lors du CT et des contrôles routiers."
  },
  {
    question: "Mélanger 2 pneus été + 2 pneus hiver sur le même véhicule = légal au Luxembourg ?",
    answers: [
      { text: "Oui, si avant = hiver", correct: false },
      { text: "NON, interdit (4 pneus du même type obligatoire)", correct: true },
      { text: "Oui, toujours", correct: false },
      { text: "Seulement sur autoroute", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Interdit formellement. 4 pneus identiques par type. Source : ACL.lu.",
    explication: "Adhérence asymétrique = danger grave en freinage."
  },
  {
    question: "Frontalier sans permis luxembourgeois : système de points ?",
    answers: [
      { text: "Aucun point, seulement amende", correct: false },
      { text: "Permis virtuel 12 points attribué automatiquement", correct: true },
      { text: "Points retirés sur permis du pays d'origine", correct: false },
      { text: "6 points seulement", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "12 points virtuels, comme les résidents. Si 0 points = interdiction de conduire au Luxembourg.",
    explication: "Source : Gouvernement du Luxembourg. S'applique à tous les non-résidents."
  },
  {
    question: "Permis étranger UE = valide au Luxembourg ?",
    answers: [
      { text: "Non, échange obligatoire", correct: false },
      { text: "OUI, automatiquement reconnu (échange optionnel)", correct: true },
      { text: "Seulement 6 mois", correct: false },
      { text: "Oui, mais repasser l'examen", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "UE = automatiquement reconnu. Hors UE = transcription sous 12 mois.",
    explication: "Permis européen standard depuis 2013."
  },
  {
    question: "Permis hors UE : délai pour transcrire au Luxembourg ?",
    answers: [
      { text: "Pas de délai", correct: false },
      { text: "12 mois maximum", correct: true },
      { text: "6 mois", correct: false },
      { text: "24 mois", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "12 mois après établissement de résidence. Au-delà = 74 € d'amende.",
    explication: "Obligation administrative à respecter."
  },
  {
    question: "Stage sécurité routière volontaire = combien de points récupérés ?",
    answers: [
      { text: "1 point", correct: false },
      { text: "3 points (1x tous les 3 ans)", correct: true },
      { text: "6 points", correct: false },
      { text: "Tous les points", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "3 points max, 1 fois tous les 3 ans. CFC Colmar-Berg.",
    explication: "Alternative à l'attente de 3 ans sans infraction."
  },

  // ===== ÉQUIPEMENTS OBLIGATOIRES (Q15-20) =====
  {
    question: "Gilet haute visibilité = obligatoire dans le véhicule ?",
    answers: [
      { text: "Non, recommandé", correct: false },
      { text: "OUI, obligatoire à bord", correct: true },
      { text: "Seulement autoroute", correct: false },
      { text: "Seulement la nuit", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Obligatoire à BORD (pas juste quand on sort).",
    explication: "Norme européenne. Amende si absent."
  },
  {
    question: "Triangle de signalisation : distance en localité ?",
    answers: [
      { text: "30 m", correct: true },
      { text: "50 m", correct: false },
      { text: "100 m", correct: false },
      { text: "150 m", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Localité = 30 m. Hors localité = 100 m.",
    explication: "Distances réglementaires."
  },
  {
    question: "Triangle de signalisation : distance hors localité ?",
    answers: [
      { text: "30 m", correct: false },
      { text: "50 m", correct: false },
      { text: "100 m", correct: true },
      { text: "150 m", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "100 m hors localité. 30 m en localité.",
    explication: "Visibilité à vitesse plus élevée."
  },
  {
    question: "Trousse de secours : obligatoire voiture particulière ?",
    answers: [
      { text: "Oui, toujours", correct: false },
      { text: "NON, uniquement poids lourds (> 3,5t)", correct: true },
      { text: "Oui, si > 4 passagers", correct: false },
      { text: "Recommandée mais pas obligatoire", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Trousse de secours = poids lourds uniquement. Piège SNCT.",
    explication: "Pas obligatoire pour voitures particulières au Luxembourg."
  },
  {
    question: "Extincteur : obligatoire voiture particulière ?",
    answers: [
      { text: "Oui, toujours", correct: false },
      { text: "NON, uniquement poids lourds et camionnettes", correct: true },
      { text: "Oui, si diesel", correct: false },
      { text: "Recommandé mais pas obligatoire", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Comme la trousse : poids lourds/camionnettes uniquement.",
    explication: "FAQ SNCT : extincteur pas obligatoire pour particuliers."
  },
  {
    question: "Pneus hiver : obligatoires quand au Luxembourg ?",
    answers: [
      { text: "Du 1er novembre au 31 mars", correct: false },
      { text: "En conditions hivernales (neige, verglas, givre)", correct: true },
      { text: "Jamais obligatoires", correct: false },
      { text: "Toute l'année recommandés", correct: false }
    ],
    type: "single",
    topic: "Permis & Catégories",
    piege: "Pas de dates fixes ! Obligation selon CONDITIONS météo.",
    explication: "Si conditions hivernales = pneus adaptés obligatoires."
  }

); // ===== FIN — Cours 5 : Permis, Documents & Administratif =====