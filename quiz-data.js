// quiz-data.js — Bloc 1/4 (Q1→Q25)
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(
  /* ===== SECTION A — ANGLES MORTS CAMION/BUS (Q1-12) ===== */
  {
    question: "À côté d'un camion à une intersection, vous êtes:",
    answers: [
      { text: "Visible au conducteur, pas de danger", correct: false },
      { text: "INVISIBLE = zone critique d'accident", correct: true },
      { text: "Partiellement visible via rétroviseurs", correct: false },
      { text: "Protégé car vous avancez parallèlement", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Ne pas confondre 'visible partiellement' avec 'visible'. Rétros limités !",
    explication: "Angles morts importants : côtés, avant immédiat, arrière proche."
  },
  {
    question: "Quelles zones sont INVISIBLES pour conducteur camion ? (Cochez tous)",
    answers: [
      { text: "Directement sous pare-brise avant", correct: true },
      { text: "Sur côtés au-delà rétroviseurs", correct: true },
      { text: "Directement derrière véhicule", correct: true },
      { text: "2m derrière pare-chocs", correct: true },
      { text: "Tout l'espace avant véhicule > 3m", correct: false }
    ],
    type: "multi",
    topic: "Angles morts camion",
    piege: "Le dernier 'tout l'espace' est faux. À 3m+ vous êtes visible.",
    explication: "Avant immédiat, côtés au-delà des rétros, arrière proche = zones mortes."
  },
  {
    question: "À une intersection, risque 'couper' un camion = ?",
    answers: [
      { text: "Très faible, il freine", correct: false },
      { text: "ÉNORME = MORTEL", correct: true },
      { text: "Moyen, dépend sa vitesse", correct: false },
      { text: "Nul, obligation céder chemin", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Ne pas minimiser le danger. Camion = distance de freinage énorme.",
    explication: "Long véhicule + virage = trajectoire courbe imprévisible."
  },
  {
    question: "Rétroviseurs camion couvrent:",
    answers: [
      { text: "Toute zone latérale jusqu'à 50 m", correct: false },
      { text: "Uniquement zone immédiate proche", correct: true },
      { text: "Derrière sans limite", correct: false },
      { text: "Tout devant le véhicule", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Piège classique: croire que les rétros couvrent large. Faux !",
    explication: "Couverture limitée même avec rétros multiples."
  },
  {
    question: "Voiture collée pare-chocs arrière camion = visible ?",
    answers: [
      { text: "Oui, toujours", correct: false },
      { text: "NON, JAMAIS = MORTEL", correct: true },
      { text: "Partiellement si miroirs réglés", correct: false },
      { text: "Seulement la nuit", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Confondre 'partiellement visible' avec 'invisible'. Ici = INVISIBLE.",
    explication: "Arrière immédiat = angle mort typique majorité camions."
  },
  {
    question: "Bus urbain + voiture sur côté = danger ?",
    answers: [
      { text: "Non, bus tourne lentement", correct: false },
      { text: "OUI, angles morts similaires camion", correct: true },
      { text: "Moyen, dépend longueur bus", correct: false },
      { text: "Seulement si passagers dedans", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Bus = logique identique camion pour angles morts.",
    explication: "Bus long = zone morte côtés importante, surtout en virage."
  },
  {
    question: "Distance sécurisée derrière camion = minimum ?",
    answers: [
      { text: "10 mètres", correct: false },
      { text: "25 mètres", correct: false },
      { text: "50 mètres minimum", correct: true },
      { text: "100 mètres (autoroute)", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Confondre distances selon vitesse. À 90 km/h = min 50 m.",
    explication: "Distance = fonction vitesse + freinage long véhicule."
  },
  {
    question: "Dépasser camion sur route 80 km/h = actions (cochez)",
    answers: [
      { text: "Signaler bien avant (100m+ minimum)", correct: true },
      { text: "Vérifier invisible totalement côté droit", correct: true },
      { text: "Dépasser rapidement (max 30s)", correct: true },
      { text: "Rester collé pare-chocs avant dépassement", correct: false }
    ],
    type: "multi",
    topic: "Angles morts camion",
    piege: "Ne pas rester collé = DANGER (freinage/changement de voie du camion).",
    explication: "Signalisation longue + vérification + rapidité = sécurité."
  },
  {
    question: "Camion tournant à droite + votre voiture côté droit = risque ?",
    answers: [
      { text: "Non, vous pouvez passer", correct: false },
      { text: "OUI ÉNORME, arrêtez-vous", correct: true },
      { text: "Moyen, allez lentement", correct: false },
      { text: "Dépend si feu vert", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Virage à droite = trajectoire balaye votre espace. Bloquer passage.",
    explication: "Zone morte côté droit = voiture potentiellement écrasée."
  },
  {
    question: "Rétroviseur latéral camion MANQUANT = danger ?",
    answers: [
      { text: "Non, autre miroir compense", correct: false },
      { text: "Oui, dépanner obligatoire avant route", correct: true },
      { text: "Moyen, seulement si nuit", correct: false },
      { text: "Ne s'applique pas Luxembourg", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Camion SANS rétro = danger extrême. Dépannage obligatoire.",
    explication: "Rétro manquant = zone morte accrue = responsabilité conducteur."
  },
  {
    question: "Vous roulez à 50 km/h derrière camion en agglomération = distance ?",
    answers: [
      { text: "20 mètres minimum", correct: true },
      { text: "10 mètres", correct: false },
      { text: "30 mètres (trop prudent)", correct: false },
      { text: "Pas de distance légale en ville", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Confusion distances selon vitesse. 50 km/h = ~20–25 m.",
    explication: "Règle 1s ≈ 14 m @ 50 km/h ; ajouter marge de sécurité."
  },
  {
    question: "Camion stationnement gênant + vous derrière = action ?",
    answers: [
      { text: "Contourner lentement par côté", correct: false },
      { text: "Arrêter et signaler (klaxon)", correct: true },
      { text: "Passer derrière si route dégagée", correct: false },
      { text: "Ignorer et rouler normal", correct: false }
    ],
    type: "single",
    topic: "Angles morts camion",
    piege: "Le camion peut redémarrer sans voir. Danger !",
    explication: "Signaler + attendre visibilité = seule sécurité."
  },

  /* ===== SECTION B — FEMME ENCEINTE & ENFANTS (Q13-30) ===== */
  {
    question: "Femme enceinte DOIT porter la ceinture ?",
    answers: [
      { text: "Non, jamais, trop risqué", correct: false },
      { text: "OUI, OBLIGATOIRE sauf dérogation médicale", correct: true },
      { text: "Oui, mais uniquement sous-abdominale", correct: false },
      { text: "Oui, seulement côté passager", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Erreur commune : croire la ceinture risquée. FAUX !",
    explication: "Port obligatoire sauf certificat médical délivré par autorité."
  },
  {
    question: "Femme enceinte peut détacher la ceinture si (cochez tous) :",
    answers: [
      { text: "Manœuvres (recul, stationnement)", correct: true },
      { text: "Trajets < 10 km seulement", correct: false },
      { text: "Certificat médical dérogation", correct: true },
      { text: "Livraison porte-à-porte", correct: true },
      { text: "Sur autoroute < 110 km/h", correct: false }
    ],
    type: "multi",
    topic: "Ceintures & Enfants",
    piege: "Manœuvre OK ; 'distance courte' NON.",
    explication: "Exceptions limitées : manœuvre, dérogation médicale, activité spécifique."
  },
  {
    question: "Enfant 2 ans : où assis ?",
    answers: [
      { text: "Avant ceinture adulte", correct: false },
      { text: "Avant rehausseur", correct: false },
      { text: "ARRIÈRE OBLIGATOIRE siège spécialisé", correct: true },
      { text: "Arrière ceinture standard", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Piège examen : rehausseur avant OK ? FAUX.",
    explication: "Système de retenue adapté requis, à l’arrière."
  },
  {
    question: "Airbag actif + bébé maxi-cosi à l’avant = ?",
    answers: [
      { text: "Autorisé avec restriction taille", correct: false },
      { text: "INTERDIT = MORTEL", correct: true },
      { text: "Acceptable avec ceinture", correct: false },
      { text: "Recommandé selon position", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Airbag + bébé = INTERDIT FORMEL.",
    explication: "Projection violente du siège dos à la route."
  },
  {
    question: "Enfant < 150 cm peut ceinture normale si :",
    answers: [
      { text: "Âge > 10 ans", correct: false },
      { text: "Poids > 36 kg", correct: true },
      { text: "Consentement parent", correct: false },
      { text: "Permis B obtenu", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Critère = POIDS (36 kg), pas l’âge.",
    explication: "Seuil masse avant ceinture standard."
  },
  {
    question: "Enfant 3–18 ans OU < 150 cm à l’avant :",
    answers: [
      { text: "Ceinture adulte acceptable", correct: false },
      { text: "DISPOSITIF de retenue spécialisé OBLIGATOIRE", correct: true },
      { text: "Ceinture + rehausseur facultatif", correct: false },
      { text: "Aucun, enfants jamais avant", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Ceinture simple insuffisante < 150 cm.",
    explication: "Dispositif adapté requis légalement."
  },
  {
    question: "Maxi-cosi AVANT autorisé si :",
    answers: [
      { text: "Airbag passager ACTIF OK", correct: false },
      { text: "Airbag ABSENT OU DÉSACTIVÉ OK", correct: true },
      { text: "Jamais avant, toujours arrière", correct: false },
      { text: "OK si > 6 mois", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Airbag ACTIF = interdit catégorique.",
    explication: "OK uniquement si airbag passager neutralisé/absent."
  },
  {
    question: "Enfant 8 ans, 125 cm, 25 kg = disposition légale ?",
    answers: [
      { text: "Ceinture normale avant OK", correct: false },
      { text: "Rehausseur obligatoire arrière", correct: true },
      { text: "Maxi-cosi (trop petit)", correct: false },
      { text: "Aucun équipement (assez grand)", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "125 cm < 150 cm et 25 kg < 36 kg ⇒ dispositif requis.",
    explication: "Taille/poids insuffisants pour ceinture adulte."
  },
  {
    question: "Siège enfant orienté ARRIÈRE = protège ?",
    answers: [
      { text: "Non, moins sûr", correct: false },
      { text: "OUI, nettement (≈50% mieux)", correct: true },
      { text: "Identique", correct: false },
      { text: "Seulement nourrisson", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Orientation arrière = priorité sécurité.",
    explication: "Protège cou/colonne en choc frontal."
  },
  {
    question: "3 enfants < 150 cm + 1 adulte = disposition ?",
    answers: [
      { text: "Tous avant avec ceintures", correct: false },
      { text: "Max 1 avant + 2 arrière avec dispositifs", correct: true },
      { text: "Tous arrière, aucun avant", correct: false },
      { text: "2 avant, 1 arrière (flexible)", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Places avant limitées ; priorité arrière pour enfants.",
    explication: "Airbag avant = risque supplémentaire."
  },
  {
    question: "Enfant assis sur genoux adulte = légal ?",
    answers: [
      { text: "Oui, temporaire trajets courts", correct: false },
      { text: "NON, FORMELLEMENT INTERDIT", correct: true },
      { text: "Oui, si ceinture adulte bouclée", correct: false },
      { text: "Oui, sauf autoroute", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "‘Trajet court’ n’est jamais une exception.",
    explication: "Toujours un dispositif conforme."
  },
  {
    question: "Rehausseur sans dossier = protège cou enfant ?",
    answers: [
      { text: "Oui, suffisant", correct: false },
      { text: "NON, dossier recommandé/obligatoire selon âge/taille", correct: true },
      { text: "Partiellement, dépend âge", correct: false },
      { text: "Ne s'applique pas Luxembourg", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Dossier = protection tête/cou en choc latéral.",
    explication: "Sans dossier, protection réduite."
  },
  {
    question: "Enfant sanglé dans siège enfant mais ceinture non bouclée = ?",
    answers: [
      { text: "Acceptable, le siège suffit", correct: false },
      { text: "INTERDIT, ceinture OBLIGATOIRE bouclée", correct: true },
      { text: "Dépend durée du trajet", correct: false },
      { text: "OK stationnement seulement", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Siège sans ceinture = sécurité nulle.",
    explication: "Ceinture + ancrages = indispensables."
  },
  {
    question: "Enfant dans véhicule sans climatisation, chaleur 35°C = ?",
    answers: [
      { text: "Acceptable court trajet", correct: false },
      { text: "Problématique, même trajet court DANGER", correct: true },
      { text: "OK avec vitre baissée", correct: false },
      { text: "Légal, responsabilité parent", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Coup de chaleur en < 15 min.",
    explication: "Déshydratation rapide, risque vital."
  },
  {
    question: "Âge minimum conducteur autonome (permis B) ?",
    answers: [
      { text: "16 ans", correct: false },
      { text: "17 ans", correct: false },
      { text: "18 ans (permis B)", correct: true },
      { text: "15 ans (conduite accompagnée)", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Ne pas confondre avec conduite accompagnée.",
    explication: "Autonome = 18 ans (permis B)."
  },
  {
    question: "Enfant < 3 ans + trajet 50 km = disposition obligatoire ?",
    answers: [
      { text: "Siège enfant spécialisé (même court trajet)", correct: true },
      { text: "Rehausseur acceptable", correct: false },
      { text: "Ceinture adulte OK distance longue", correct: false },
      { text: "Pas d’équipement si aller-retour", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Distance ne change pas l’obligation.",
    explication: "Siège spécialisé obligatoire < 3 ans."
  },
  {
    question: "Bébé 6 mois maxi-cosi orienté AVANT = autorisé ?",
    answers: [
      { text: "Oui, orientation flexible", correct: false },
      { text: "NON, ARRIÈRE OBLIGATOIRE jusqu'à ~12–15 mois", correct: true },
      { text: "Oui, si airbag désactivé", correct: false },
      { text: "Dépend marque du siège", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Orientation avant pour nourrisson = interdit.",
    explication: "Cou trop fragile ; dos à la route requis."
  },
  {
    question: "Enfant assis côté passager = quel airbag désactiver ?",
    answers: [
      { text: "Gauche (conducteur)", correct: false },
      { text: "Droite (passager avant)", correct: true },
      { text: "Les deux, plus sûr", correct: false },
      { text: "Ni l’un ni l’autre, place arrière", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Airbag passager = danger direct enfant avant.",
    explication: "Neutraliser airbag passager si enfant à l’avant."
  },

  /* ===== FIN BLOC 1/4 ===== */
  
  
  /* ===== BLOC 2/4 (Q26→Q50) ===== */
  {
    question: "Norme siège auto obligatoire au Luxembourg ?",
    answers: [
      { text: "Aucune norme spécifique", correct: false },
      { text: "R44 ou R129 (i-Size) acceptés", correct: true },
      { text: "Uniquement R129 depuis 2024", correct: false },
      { text: "Norme allemande TÜV uniquement", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "R44 reste utilisable, seule la vente de nouveaux R44 est interdite.",
    explication: "R44 et R129 (i-Size avec Isofix) tous deux acceptés."
  },
  {
    question: "Au Luxembourg, enfant avant le véhicule = à partir de quel âge/taille ?",
    answers: [
      { text: "10 ans et 140 cm", correct: false },
      { text: "11 ans et 150 cm", correct: true },
      { text: "12 ans peu importe la taille", correct: false },
      { text: "Aucune restriction d’âge", correct: false }
    ],
    type: "single",
    topic: "Ceintures & Enfants",
    piege: "Spécificité Luxembourg : 11 ans ET 150 cm (double condition).",
    explication: "Un enfant ne peut être installé à l’avant qu’à partir de 11 ans et 1,50 m."
  },

  /* ===== SECTION C — ÉCLAIRAGE (Q31–Q43) ===== */
  {
    question: "Feux OBLIGATOIRES à l'avant la nuit :",
    answers: [
      { text: "Croisement + Route", correct: false },
      { text: "Position + Clignotants", correct: false },
      { text: "Croisement + Position", correct: true },
      { text: "Route seuls suffisants", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Ne pas oublier les feux de position.",
    explication: "Croisement + position requis de nuit."
  },
  {
    question: "Vous croisez un véhicule la nuit. Action immédiate :",
    answers: [
      { text: "Maintenir les feux de route", correct: false },
      { text: "Passer en feux de croisement IMMÉDIATEMENT", correct: true },
      { text: "Éteindre tous les feux", correct: false },
      { text: "Clignoter", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Retarder = éblouissement.",
    explication: "Sécurité mutuelle."
  },
  {
    question: "Feux de route actifs = quand autorisés ?",
    answers: [
      { text: "Nuit uniquement", correct: false },
      { text: "Nuit + tunnel + mauvaise visibilité", correct: false },
      { text: "Nuit sur route SANS éclairage public", correct: true },
      { text: "Tous trajets nuit > 50 km/h", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Tunnel = croisement.",
    explication: "Sans gêner les autres usagers."
  },
  {
    question: "Tunnel de jour + feux de route = légal ?",
    answers: [
      { text: "Oui, maximum luminosité", correct: false },
      { text: "NON, passer CROISEMENT obligatoire", correct: true },
      { text: "Dépend longueur tunnel", correct: false },
      { text: "OK si vitesse < 80 km/h", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Tunnel = croisement même de jour.",
    explication: "Éviter l’éblouissement."
  },
  {
    question: "Brouillard (visibilité < 100 m) = feux ?",
    answers: [
      { text: "Croisement + Antibrouillard arrière", correct: false },
      { text: "Route + Antibrouillard avant", correct: false },
      { text: "Croisement + Antibrouillard avant + arrière", correct: true },
      { text: "Uniquement antibrouillard avant", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Tous feux utiles, sans éblouir.",
    explication: "Visibilité sécurisée."
  },
  {
    question: "Pluie battante (visibilité réduite) = feux obligatoires ?",
    answers: [
      { text: "Non, essuie-glaces suffisent", correct: false },
      { text: "OUI, croisement + position minimum", correct: true },
      { text: "Seulement feux position", correct: false },
      { text: "Seulement si route sans éclairage", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Essuie-glaces ≠ feux.",
    explication: "Se rendre visible."
  },
  {
    question: "Panne sur autoroute + nuit : éclairage ?",
    answers: [
      { text: "Feux position suffisent", correct: false },
      { text: "Feux position + Feux de détresse (obligatoires)", correct: true },
      { text: "Juste triangle 150 m avant", correct: false },
      { text: "Attendre jour, rester dedans", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Warning + position = signaler panne.",
    explication: "Sécurité maximale."
  },
  {
    question: "Feux de détresse = utilisés quand ?",
    answers: [
      { text: "Uniquement panne", correct: false },
      { text: "Panne + accident + embouteillage soudain", correct: true },
      { text: "Jamais au Luxembourg", correct: false },
      { text: "Seulement pour alerter danger", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Plusieurs cas légitimes.",
    explication: "Signaler un danger immédiat."
  },
  {
    question: "Antibrouillard avant + feux de route simultanés = légal ?",
    answers: [
      { text: "Oui, plus de luminosité", correct: false },
      { text: "NON, INTERDIT simultanément", correct: true },
      { text: "Oui, sauf si brouillard < 100 m", correct: false },
      { text: "Dépend vitesse véhicule", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Éblouissement.",
    explication: "Antibrouillard remplace route en brouillard."
  },
  {
    question: "Aube/Crépuscule (pas nuit complète) = feux ?",
    answers: [
      { text: "Non, lumière naturelle OK", correct: false },
      { text: "OUI, position + croisement recommandés", correct: true },
      { text: "Seulement si autoroute", correct: false },
      { text: "Pas de règle spécifique", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Visibilité ambiguë.",
    explication: "Prudence accrue."
  },
  {
    question: "Clignotant défaillant (côté gauche) = action ?",
    answers: [
      { text: "Rouler normal, signaler au bras", correct: false },
      { text: "Dépannage OBLIGATOIRE avant route", correct: true },
      { text: "OK si autre côté fonctionne", correct: false },
      { text: "Réparation possible plus tard", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Équipement obligatoire.",
    explication: "Signalisation manquante = danger."
  },
  {
    question: "Feu arrière cassé (non visible) = légal ?",
    answers: [
      { text: "Oui, déplacer de jour", correct: false },
      { text: "NON, INTERDIT tant que non réparé", correct: true },
      { text: "Acceptable si antibrouillard arrière OK", correct: false },
      { text: "OK en stationnement gênant seulement", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Visibilité arrière indispensable.",
    explication: "Prévenir les collisions par l’arrière."
  },
  {
    question: "Phares éblouissants (réglage trop haut) = responsabilité ?",
    answers: [
      { text: "Non, c’est autrui", correct: false },
      { text: "OUI, réglage obligatoire, responsabilité légale", correct: true },
      { text: "Dépend type véhicule", correct: false },
      { text: "Seulement la nuit", correct: false }
    ],
    type: "single",
    topic: "Éclairage",
    piege: "Réglage = entretien obligatoire.",
    explication: "Éviter d’éblouir les autres usagers."
  },

  /* ===== SECTION D — ACCIDENT & SECOURS (Q44–Q60) ===== */
  {
    question: "Accident avec blessés — À FAIRE (cochez)",
    answers: [
      { text: "Sécuriser la zone", correct: true },
      { text: "Donner à boire au blessé", correct: false },
      { text: "Assister le blessé (couvrir, rassurer)", correct: true },
      { text: "Retirer le casque du motocycliste", correct: false },
      { text: "S'assurer de la respiration correcte", correct: true },
      { text: "Appeler 112 ou 113", correct: true }
    ],
    type: "multi",
    topic: "Accident & Secours",
    piege: "Ne jamais retirer le casque (sauf exception vitale).",
    explication: "Protéger, Alerter, Secourir."
  },
  {
    question: "Blessé perte de connaissance = action ?",
    answers: [
      { text: "Position latérale de sécurité (PLS)", correct: true },
      { text: "Position sur le dos", correct: false },
      { text: "Donner de l’eau", correct: false },
      { text: "Laisser seul et appeler 112", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "PLS = priorité.",
    explication: "Assure la respiration, évite l’étouffement."
  },
  {
    question: "Saignement abondant = premier soin ?",
    answers: [
      { text: "Garrot 2 cm au-dessus", correct: false },
      { text: "Compression directe + élévation", correct: true },
      { text: "Laver la plaie à grande eau", correct: false },
      { text: "Alcool/désinfectant de suite", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Garrot = dernier recours.",
    explication: "Compression directe efficace le plus souvent."
  },
  {
    question: "Perte de mémoire après choc = trauma ?",
    answers: [
      { text: "Non, léger (observation)", correct: false },
      { text: "Potentiellement grave (commotion)", correct: true },
      { text: "Dépend de l’âge", correct: false },
      { text: "Seulement si amnésie complète", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Signe de traumatisme crânien.",
    explication: "Appeler l’urgence."
  },
  {
    question: "Respiration absente/faible = RCP ?",
    answers: [
      { text: "Attendre les secours", correct: false },
      { text: "OUI, massage cardiaque + insufflations", correct: true },
      { text: "Seulement si adulte", correct: false },
      { text: "Dépend présence DAE", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "RCP immédiate = vitale.",
    explication: "4 minutes = seuil critique."
  },
  {
    question: "Fracture suspecte = immobilisation ?",
    answers: [
      { text: "Non, bouger aide la circulation", correct: false },
      { text: "OUI, immobiliser membre/blessure", correct: true },
      { text: "Seulement si plaie ouverte", correct: false },
      { text: "Masser la zone", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Mouvement = aggravation.",
    explication: "Immobiliser avant transport."
  },
  {
    question: "Choc lombaire (dos) = bouger blessé ?",
    answers: [
      { text: "Oui, asseoir prudemment", correct: false },
      { text: "NON, immobiliser la colonne", correct: true },
      { text: "Dépend douleur", correct: false },
      { text: "Masser le dos", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Risque de paralysie.",
    explication: "Immobilisation stricte."
  },
  {
    question: "Inconscient + vomissements = risque principal ?",
    answers: [
      { text: "Déshydratation", correct: false },
      { text: "ÉTOUFFEMENT (asphyxie)", correct: true },
      { text: "Infection gastrique", correct: false },
      { text: "Choc thermique", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "PLS pour dégager les voies.",
    explication: "Éviter l’obstruction."
  },
  {
    question: "Électrocution (contact fil) = toucher le blessé ?",
    answers: [
      { text: "Oui, retirer le contact", correct: false },
      { text: "NON, couper la source d’abord", correct: true },
      { text: "Avec isolant (bois) OK", correct: false },
      { text: "Appeler l’urgence, ne pas toucher", correct: true }
    ],
    type: "multi",
    topic: "Accident & Secours",
    piege: "Sécurité sauveteur d’abord.",
    explication: "Couper l’alimentation électrique."
  },
  {
    question: "Accident de nuit = visibilité sauveteur ?",
    answers: [
      { text: "Allumer phares + détresse", correct: true },
      { text: "Lampe/gilet fluorescent", correct: true },
      { text: "Attendre le jour", correct: false },
      { text: "Pas de signalisation", correct: false }
    ],
    type: "multi",
    topic: "Accident & Secours",
    piege: "Sauveteur invisible = nouveau choc.",
    explication: "Se signaler d’abord."
  },
  {
    question: "Accident autoroute + blessés = quitter la zone d'impact ?",
    answers: [
      { text: "OUI immédiatement (danger secondaire)", correct: true },
      { text: "Non, rester sur place", correct: false },
      { text: "Dépend trafic", correct: false },
      { text: "Attendre police", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Risque d’empilement.",
    explication: "Se mettre en sécurité."
  },
  {
    question: "Appel 112/113 = infos à communiquer ?",
    answers: [
      { text: "Localisation précise (route, km)", correct: true },
      { text: "Nombre de blessés + gravité", correct: true },
      { text: "Type d’accident + véhicules", correct: true },
      { text: "Vos sentiments/avis", correct: false }
    ],
    type: "multi",
    topic: "Accident & Secours",
    piege: "Info factuelle, pas d’opinion.",
    explication: "Permet un dispatch adapté."
  },
  {
    question: "Accident en tunnel = première action ?",
    answers: [
      { text: "Alerter avec triangle AVANT l’entrée", correct: true },
      { text: "Quitter voiture immédiatement", correct: false },
      { text: "Attendre secours dedans", correct: false },
      { text: "Continuer à rouler lentement", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Confinement = prudence maximale.",
    explication: "Signalisation externe."
  },
  {
    question: "Neige/verglas = rester dans le véhicule ?",
    answers: [
      { text: "Warning + sortir", correct: false },
      { text: "Rester dedans moteur allumé, aéré", correct: true },
      { text: "Rester dedans moteur éteint", correct: false },
      { text: "Attendre le jour", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Hypothermie/CO : aération nécessaire.",
    explication: "Chauffage + aération raisonnables."
  },
  {
    question: "Portes bloquées (passagers prisonniers) = action ?",
    answers: [
      { text: "Forcer par la fenêtre", correct: false },
      { text: "Rester dedans, attendre pompiers", correct: true },
      { text: "Tenter d’ouvrir avec force", correct: false },
      { text: "Détresse + fenêtre signal", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Extraction par professionnels.",
    explication: "Éviter aggravation blessures."
  },
  {
    question: "Animal blessé (chien/chat) = secours ?",
    answers: [
      { text: "Repousser l’animal", correct: false },
      { text: "Approcher doucement, prudence morsure", correct: true },
      { text: "Laisser fuir", correct: false },
      { text: "Assommer pour le calmer", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Animal apeuré = potentiellement agressif.",
    explication: "Sécuriser la scène."
  },
  {
    question: "Documents tiers après accident = conservation ?",
    answers: [
      { text: "Photocopier uniquement", correct: false },
      { text: "Rendre l’original, garder une copie", correct: true },
      { text: "Garder l’original pour preuve", correct: false },
      { text: "Renvoyer par courrier après", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "Respect de la propriété du document.",
    explication: "Copie suffit pour preuve."
  },

  /* ===== FIN BLOC 2/4 ===== */
  
  
  /* ===== BLOC 3/4 (Q51→Q75) ===== */
  {
    question: "Numéros d’urgence au Luxembourg ?",
    answers: [
      { text: "112 uniquement", correct: false },
      { text: "112 (urgences européen) + 113 (police)", correct: true },
      { text: "15 (SAMU) + 18 (pompiers)", correct: false },
      { text: "911 (international)", correct: false }
    ],
    type: "single",
    topic: "Accident & Secours",
    piege: "15/18 = France ! Au Luxembourg : 112 + 113.",
    explication: "112 = urgences/ambulance/pompiers, 113 = police grand-ducale."
  },

  /* ===== SECTION E — ÉQUIPEMENTS & CT (Q61–Q80) ===== */
  {
    question: "Contrôle technique voiture < 4 ans = obligatoire ?",
    answers: [
      { text: "Non, exemption complète", correct: false },
      { text: "OUI, premier CT à 4 ans", correct: true },
      { text: "Seulement si > 100 000 km", correct: false },
      { text: "Tous les 2 ans dès l’achat", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "À 4 ans, CT obligatoire.",
    explication: "Compte à partir de la 1re mise en circulation."
  },
  {
    question: "Périodicité CT au Luxembourg (voiture particulière) ?",
    answers: [
      { text: "1er CT à 4 ans, puis tous les 2 ans", correct: false },
      { text: "1er CT à 4 ans, 2e à 6 ans, puis annuel", correct: true },
      { text: "Tous les 3 ans après le 1er CT", correct: false },
      { text: "Tous les 4 ans systématiquement", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Rythme 4-6-annuel (pas simplement tous les 2 ans). Piège SNCA classique !",
    explication: "1er CT à 4 ans, 2e CT à 6 ans, puis CHAQUE ANNÉE ensuite."
  },
  {
    question: "CT échoué (voiture 10 ans) = action ?",
    answers: [
      { text: "Rouler normal, réessayer dans 1 mois", correct: false },
      { text: "RÉPARATION + contre-visite", correct: true },
      { text: "Dépanneur, pas urgent", correct: false },
      { text: "Attendre prochain CT dans 2 ans", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Contre-visite après réparation.",
    explication: "Obligation de remise en conformité."
  },
  {
    question: "Pneus usés (profondeur < 1,6 mm) = légal ?",
    answers: [
      { text: "Légal minimum 1,6 mm", correct: false },
      { text: "INTERDIT, amende + immobilisation", correct: true },
      { text: "Tolérance 1,2 mm", correct: false },
      { text: "Acceptable trajets courts", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "1,6 mm = seuil minimum légal.",
    explication: "En dessous : danger extrême."
  },
  {
    question: "Pneus mélangés (été à l’avant / hiver à l’arrière) = légal ?",
    answers: [
      { text: "Oui, si profondeur OK", correct: false },
      { text: "NON, pneus équivalents par essieu obligatoires", correct: true },
      { text: "Acceptable si même diamètre", correct: false },
      { text: "Dépend du type de route", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Même type par essieu.",
    explication: "Stabilité et adhérence."
  },
  {
    question: "Plaquettes de freins usées (alerte sonore) = rouler ?",
    answers: [
      { text: "Oui, léger bruit", correct: false },
      { text: "NON, dépannage/réparation obligatoires", correct: true },
      { text: "Trajets courts OK", correct: false },
      { text: "Attendre prochain CT", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Freinage = critique.",
    explication: "Arrêt immédiat recommandé."
  },
  {
    question: "Rétroviseur latéral cassé (gauche) = légal ?",
    answers: [
      { text: "Oui, circuler prudemment", correct: false },
      { text: "NON, réparer avant route", correct: true },
      { text: "OK si l’autre côté fonctionne", correct: false },
      { text: "OK vitre baissée", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Angle mort accru.",
    explication: "Équipement obligatoire."
  },
  {
    question: "Essuie-glaces avant défaillants = action ?",
    answers: [
      { text: "Rouler lentement", correct: false },
      { text: "RÉPARATION avant pluie/neige", correct: true },
      { text: "Nettoyer à la main", correct: false },
      { text: "Attendre beau temps", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Visibilité critique sous pluie.",
    explication: "Sécurité minimale."
  },
  {
    question: "Amortisseurs très usés (rebond) = danger ?",
    answers: [
      { text: "Non, confort seulement", correct: false },
      { text: "OUI, + distance de freinage / instabilité", correct: true },
      { text: "Dépend de la route", correct: false },
      { text: "Seulement autoroute", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Adhérence dégradée.",
    explication: "Freinage compromis."
  },
  {
    question: "Batterie faible (démarrage difficile) = action ?",
    answers: [
      { text: "Rouler pour recharger", correct: false },
      { text: "Dépannage avant trajets longs", correct: true },
      { text: "Attendre soleil", correct: false },
      { text: "Klaxon faible normal en hiver", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Éclairage/réglages à risque.",
    explication: "Remplacement si nécessaire."
  },
  {
    question: "Fumée moteur (surchauffe) = continuer ?",
    answers: [
      { text: "Oui, moteur se stabilise", correct: false },
      { text: "NON, ARRÊT immédiat + dépannage", correct: true },
      { text: "Rouler lentement", correct: false },
      { text: "Ajouter huile", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Rupture possible.",
    explication: "Protéger le moteur."
  },
  {
    question: "Fuite liquide sous véhicule = sérieux ?",
    answers: [
      { text: "Non, normal", correct: false },
      { text: "OUI (huile/freins/refroidissement)", correct: true },
      { text: "Dépend de la couleur", correct: false },
      { text: "Attendre prochain CT", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Peut être vital (freins).",
    explication: "Diagnostic rapide requis."
  },
  {
    question: "Direction très lourde = problème ?",
    answers: [
      { text: "Non, effort naturel", correct: false },
      { text: "OUI, assistance direction défaillante", correct: true },
      { text: "Dépend force conducteur", correct: false },
      { text: "Normal avec usure", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Risque de perte de contrôle.",
    explication: "Réparation nécessaire."
  },
  {
    question: "Pare-chocs cassé (pend) = légal route ?",
    answers: [
      { text: "Oui, cosmétique seulement", correct: false },
      { text: "NON, danger de projection", correct: true },
      { text: "OK si attaché sommairement", correct: false },
      { text: "Acceptable trajets courts", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Peut gêner feux/réglages.",
    explication: "Fixation obligatoire."
  },
  {
    question: "Vitre teintée illégale (opaque 50%) = contrôle ?",
    answers: [
      { text: "Non, visbilité = responsabilité", correct: false },
      { text: "OUI, amende + retrait teinte", correct: true },
      { text: "OK la nuit", correct: false },
      { text: "Dépend marque vitre", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Transmission lumineuse minimale exigée.",
    explication: "Sécurité et contrôle police."
  },
  {
    question: "Sièges déchirés/usés = légal rouler ?",
    answers: [
      { text: "Oui, tant que structure OK", correct: true },
      { text: "Non, dépannage obligatoire", correct: false },
      { text: "Dépend kilométrage", correct: false },
      { text: "Pas légal", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Esthétique ≠ sécurité.",
    explication: "Structure/prétensionneurs importent."
  },
  {
    question: "Chaînes neige obligatoires quand ?",
    answers: [
      { text: "Jamais Luxembourg", correct: false },
      { text: "Si neige/verglas + panneau d’obligation", correct: true },
      { text: "Autoroute > 1000 m", correct: false },
      { text: "Toujours nov.–mars", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Se référer à la signalisation.",
    explication: "Pneus hiver prioritaires."
  },
  {
    question: "Bouchon de réservoir mal serré = importance ?",
    answers: [
      { text: "Non, fuite mineure", correct: false },
      { text: "OUI, vapeurs/inflammation possibles", correct: true },
      { text: "Important seulement autoroute", correct: false },
      { text: "Dépend âge du véhicule", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Sécurité incendie.",
    explication: "Bien refermer après plein."
  },
  {
    question: "Toit ouvrant cassé (ne ferme pas) = dépannage ?",
    answers: [
      { text: "Non, cosmétique", correct: false },
      { text: "OUI si pluie/risque infiltration", correct: true },
      { text: "OK trajets secs", correct: false },
      { text: "Attendre prochain CT", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Eau = dégâts électriques.",
    explication: "Sécuriser l’habitacle."
  },
  {
    question: "Verrouillage portes défaillant = légal ?",
    answers: [
      { text: "Oui, si une seule porte", correct: false },
      { text: "NON, sécurité enfants/passagers", correct: true },
      { text: "OK parking gardé", correct: false },
      { text: "OK si conducteur le sait", correct: false }
    ],
    type: "single",
    topic: "Équipements",
    piege: "Ouverture accidentelle possible.",
    explication: "Réparation nécessaire."
  },

  /* ===== FIN BLOC 3/4 ===== */
  
  
  
  /* ===== BLOC 4/4 (Q76→Q100) ===== */

  /* ===== SECTION F — PERMIS & DOCUMENTS (Q81–Q100) ===== */
  {
    question: "Permis catégorie B = véhicules ?",
    answers: [
      { text: "< 3500 kg PTAC + max 9 places", correct: true },
      { text: "Tous véhicules < 5000 kg", correct: false },
      { text: "Camionnettes seulement", correct: false },
      { text: "Motos + voitures indifférent", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "9 places MAX + 3,5 t.",
    explication: "Au-delà, catégories supérieures."
  },
  {
    question: "Permis probatoire (2 ans) = limites au Luxembourg ?",
    answers: [
      { text: "Aucune restriction", correct: false },
      { text: "Alcool max 0,2 g/l + stage obligatoire Colmar-Berg", correct: true },
      { text: "-10 km/h partout + alcool 0,0 g/l", correct: false },
      { text: "Restriction autoroute uniquement", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Au LU pas de réduction de vitesse, mais alcool 0,2 g/l (quasi zéro) + stage CFC obligatoire.",
    explication: "Permis probatoire 2 ans, alcool 0,2 g/l, formation Colmar-Berg obligatoire."
  },
  {
    question: "Renouvellement permis = périodicité standard ?",
    answers: [
      { text: "5 ans", correct: false },
      { text: "10 ans", correct: true },
      { text: "15 ans", correct: false },
      { text: "À vie", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Sauf > 70 ans.",
    explication: "Cas particuliers à l’âge avancé."
  },
  {
    question: "Permis > 70 ans = durée de validité ?",
    answers: [
      { text: "10 ans (normal)", correct: false },
      { text: "5 ans (puis 2 ans après 80 ans)", correct: true },
      { text: "3 ans + visite", correct: false },
      { text: "À vie", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "> 70 ans = 5 ans, > 80 ans = 2 ans. Double palier.",
    explication: "Vérifications de santé de plus en plus fréquentes."
  },
  {
    question: "Carnet d’entretien obligatoire = durée de conservation ?",
    answers: [
      { text: "1 an", correct: false },
      { text: "2 ans minimum", correct: true },
      { text: "5 ans", correct: false },
      { text: "À vie", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Piège examen : ‘1 an’ faux.",
    explication: "Traçabilité des maintenances."
  },
  {
    question: "Conduite accompagnée = âge minimum ?",
    answers: [
      { text: "15 ans", correct: false },
      { text: "16 ans", correct: false },
      { text: "17 ans", correct: true },
      { text: "18 ans", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "17 ans au Luxembourg (pas 15 comme en France). Ne pas confondre !",
    explication: "Conduite accompagnée dès 17 ans, permis autonome dès 18 ans."
  },
  {
    question: "Accompagnateur apprentissage = conditions (cochez)",
    answers: [
      { text: "Permis B depuis 6 ans minimum", correct: true },
      { text: "Pas de condamnation routière", correct: true },
      { text: "Lien de parenté obligatoire", correct: false },
      { text: "Avoir assisté à 2 leçons pratiques du candidat", correct: true },
      { text: "Âge maximum 70 ans", correct: false }
    ],
    type: "multi",
    topic: "Permis & Documents",
    piege: "6 ans de permis B (pas 3). Parenté non requise. Doit assister à 2 leçons.",
    explication: "Conditions strictes : 6 ans permis B + casier vierge + 2 leçons pratiques."
  },
  {
    question: "Conduite accompagnée — restrictions horaires/territoire ?",
    answers: [
      { text: "Jamais (mêmes horaires que autonome)", correct: false },
      { text: "23h–6h INTERDIT + hors Luxembourg INTERDIT", correct: true },
      { text: "20h–8h seulement", correct: false },
      { text: "Autoroute seulement", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Deux restrictions principales.",
    explication: "Sécurité apprentissage."
  },
  {
    question: "Documents obligatoires (cochez) :",
    answers: [
      { text: "Permis de conduire", correct: true },
      { text: "Assurance valide + certificat", correct: true },
      { text: "Contrôle technique valide", correct: true },
      { text: "Immatriculation (plaque/certificat)", correct: true },
      { text: "Reçu carburant", correct: false }
    ],
    type: "multi",
    topic: "Permis & Documents",
    piege: "Reçu carburant = non requis.",
    explication: "Documents légaux de circulation."
  },
  {
    question: "Oublier son permis à domicile = conséquence ?",
    answers: [
      { text: "Amende 50 € + OK rouler", correct: false },
      { text: "INTERDIT de rouler + amende significative", correct: true },
      { text: "Seulement si route secondaire", correct: false },
      { text: "OK si < 5 km", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Le permis doit être présenté.",
    explication: "Contrôle routier possible à tout moment."
  },
  {
    question: "Assurance responsabilité civile = couvre ?",
    answers: [
      { text: "Dégâts matériels tiers seulement", correct: false },
      { text: "Responsabilité pénale du conducteur", correct: false },
      { text: "Dégâts matériels + corporels TIERS", correct: true },
      { text: "Entièrement votre véhicule", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Couvre TIERS, pas votre véhicule.",
    explication: "Assurance obligatoire."
  },
  {
    question: "Plaque immatriculation obscurcie/effacée = légal ?",
    answers: [
      { text: "Oui, tant que visible de près", correct: false },
      { text: "NON, lecture police obligatoire", correct: true },
      { text: "OK si enregistrée douane", correct: false },
      { text: "OK si papiers complets", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Lisibilité obligatoire.",
    explication: "Identification du véhicule."
  },
  {
    question: "Achat occasion sans acte de vente = légal ?",
    answers: [
      { text: "Oui, rouler tant que possible", correct: false },
      { text: "NON, transfert d’immatriculation obligatoire", correct: true },
      { text: "Facture orale vendeur suffit", correct: false },
      { text: "Dépend du prix", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Transfert sous délai.",
    explication: "Propriété légale à jour."
  },
  {
    question: "Vignette autoroute = obligatoire au Luxembourg ?",
    answers: [
      { text: "Oui, annuelle", correct: false },
      { text: "NON, pas de vignette au Luxembourg", correct: true },
      { text: "Seulement Belgique frontalière", correct: false },
      { text: "Dépend longueur trajet", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Ne pas confondre pays voisins.",
    explication: "Réseau sans vignette."
  },
  {
    question: "Perte du permis = procédure ?",
    answers: [
      { text: "Remplacement automatique (5 jours)", correct: false },
      { text: "Déclaration police + demande d’un nouveau", correct: true },
      { text: "Repasse d’examen", correct: false },
      { text: "Interdiction route temporaire", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Procédure administrative.",
    explication: "Déclaration + duplicata."
  },
  {
    question: "Changement d’adresse = mise à jour permis ?",
    answers: [
      { text: "Non, pas obligatoire", correct: false },
      { text: "OUI, mise à jour rapide exigée", correct: true },
      { text: "Seulement si étranger", correct: false },
      { text: "À l’occasion du renouvellement", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Adresse = identité légale.",
    explication: "Doit correspondre aux documents."
  },
  {
    question: "Suspension de permis = durée possible ?",
    answers: [
      { text: "Maximum 1 mois", correct: false },
      { text: "Jusqu’à 1 an (selon gravité)", correct: true },
      { text: "Minimum 3 mois, maximum 6", correct: false },
      { text: "À vie (annulation)", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Suspension ≠ annulation.",
    explication: "Sanction temporaire."
  },
  {
    question: "Délit de fuite (sans infos) = pénalité ?",
    answers: [
      { text: "Amende 500 € seulement", correct: false },
      { text: "Prison jusqu’à 1 an + Amende jusqu’à 5000 € + 4 points", correct: true },
      { text: "Suspension 6 mois", correct: false },
      { text: "Amende 1000 € + 2 points", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Sanction lourde.",
    explication: "Atteinte grave aux obligations."
  },
  {
    question: "Points de permis Luxembourg = récupération ?",
    answers: [
      { text: "À vie, jamais récupérés", correct: false },
      { text: "3 ans sans infraction = récupération totale", correct: true },
      { text: "Rétablis automatiquement chaque année", correct: false },
      { text: "Pas de système de points", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "3 ans (pas 2). Ou stage volontaire = +3 points (1x tous les 3 ans).",
    explication: "3 ans sans infraction = récupération totale des 12 points."
  },
  {
    question: "Stage sécurité routière = obligatoire quand ?",
    answers: [
      { text: "Jamais au Luxembourg", correct: false },
      { text: "Après infractions graves (alcool, > 40 km/h…)", correct: true },
      { text: "Avant chaque renouvellement", correct: false },
      { text: "Après tout accident responsable", correct: false }
    ],
    type: "single",
    topic: "Permis & Documents",
    piege: "Mesure éducative post-infraction.",
    explication: "Réduction de la récidive."
  }

); // ===== FIN — Cours 4 : Transport Passagers & Équipements =====