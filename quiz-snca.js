// quiz-snca.js - Questions Examen Demo (examen théorique Luxembourg)
// Source: examen-theorique-demo
// Total: 112 questions FR uniques

window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(
  {
    id: 9,
    question: 'Quel comportement adoptez-vous dans cette situation?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je n\'ai plus le droit de changer de voie de circulation.', correct: false, media_id: 1 },
      { text: 'En observant attentivement la circulation derrière moi, je change de voie et je passe sur la voie de gauche.', correct: true },
      { text: 'Je klaxonne et continue sur ma voie.', correct: false },
    ]
  },
  {
    id: 14,
    question: 'En quittant l\'autoroute y a-t-il risque de sous-estimer sa vitesse?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 2 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 20,
    question: 'Dans cette situation dépassez-vous les cyclistes?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 3 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 25,
    question: 'À quoi devez-vous faire attention si vous voulez contourner un autobus qui s\'est arrêté à un arrêt d\'autobus?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je klaxonne et je contourne sans ralentir.', correct: false },
      { text: 'Je passe aussi près que possible à côté de l\'autobus, pour ne pas quitter ma voie de circulation.', correct: false },
      { text: 'Je ralentis et je contourne l\'autobus en respectant une distance latérale suffisante.', correct: true },
    ]
  },
  {
    id: 26,
    question: 'À quoi devez-vous faire attention si vous voulez contourner un autobus qui s\'est arrêté à un arrêt d\'autobus?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je klaxonne et je contourne sans ralentir.', correct: false },
      { text: 'Je me tiens prêt à freiner, car des piétons pourraient surgir devant l\'autobus pour traverser la route.', correct: true },
      { text: 'Je passe aussi près que possible à côté de l\'autobus, pour ne pas quitter ma voie de circulation.', correct: false },
    ]
  },
  {
    id: 27,
    question: 'Le conducteur d\'un véhicule automoteur doit avoir à bord de son véhicule au moins une veste de sécurité:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 47,
    question: 'Lors du passage sur des rails de train humides:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'J\'accélère.', correct: false },
      { text: 'J\'évite de freiner.', correct: true },
      { text: 'Je peux sans aucun risque adopter une position inclinée.', correct: false },
    ]
  },
  {
    id: 57,
    question: 'Le passager doit être âgé au moins de:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: '8 ans.', correct: false },
      { text: '12 ans.', correct: true },
      { text: '10 ans.', correct: false },
    ]
  },
  {
    id: 59,
    question: 'Dans les virages, vous évitez de passer sur des couvercles de canalisation:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 69,
    question: 'Les vêtements de protection:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Permettent une sensible augmentation de la vitesse.', correct: false },
      { text: 'Doivent être de couleur noire.', correct: false },
      { text: 'Peuvent amoindrir les blessures en cas de chute.', correct: true },
    ]
  },
  {
    id: 73,
    question: 'Ce signal signifie:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Commencement d\'une montée à forte inclinaison.', correct: false, media_id: 22 },
      { text: 'La distance de freinage pourrait devenir plus longue.', correct: true },
      { text: 'Je ne dois utiliser que le frein arrière.', correct: false },
    ]
  },
  {
    id: 76,
    question: 'En cas de bouchon, le motocycliste a le droit de circuler sur la bande d\'arrêt d\'urgence de cette route:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 25 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 77,
    question: 'Vous conduisez un motocycle. Avez-vous le droit de dépasser un tracteur à cet endroit?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 26 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 80,
    question: 'Avez-vous le droit d\'utiliser ce parking avec votre motocycle?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 29 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 96,
    question: 'La vitesse maximale pour cyclomoteurs est limitée à 45 km/h:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 133,
    question: 'Le chargement:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Peut toujours dépasser l\'avant du véhicule de plus de 1 m.', correct: false },
      { text: 'Peut traîner sur la voie publique.', correct: false },
      { text: 'Ne doit pas entraver le champ de visibilité du conducteur.', correct: true },
    ]
  },
  {
    id: 150,
    question: 'Est-ce que vous avez le droit de faire tourner le moteur sans nécessité technique?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 184,
    question: 'Je circule en premier:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 85 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 193,
    question: 'Quel est l\'ordre de passage?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'B - A - C', correct: false, media_id: 94 },
      { text: 'A - C - B', correct: false },
      { text: 'C - A - B', correct: true },
    ]
  },
  {
    id: 194,
    question: 'Je laisse passer la cycliste (B):',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 95 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 200,
    question: 'Faut-il augmenter la distance de sécurité en cas de pluie?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 201,
    question: 'Faut-il contrôler régulièrement la pression d\'air dans les pneus?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 203,
    question: 'Vous avez l\'intention de faire demi-tour sur la voie publique:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je n\'ai pas besoin de céder la priorité aux autres usagers.', correct: false },
      { text: 'Il est toujours défendu de faire demi-tour sur la voie publique.', correct: false },
      { text: 'Je dois signaler mon intention clairement et à temps.', correct: true },
    ]
  },
  {
    id: 207,
    question: 'Le conducteur qui est dépassé:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Doit serrer à droite autant que possible.', correct: true },
      { text: 'Doit freiner.', correct: false },
      { text: 'Doit accélérer.', correct: false },
    ]
  },
  {
    id: 210,
    question: 'Lors d\'un freinage à fond, le système ABS permet de raccourcir la distance de réaction:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 212,
    question: 'De quelle façon pouvez-vous réduire la consommation de carburant de votre véhicule?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'En faisant chauffer le moteur avant de partir.', correct: false },
      { text: 'En faisant maintenir la pression d\'air prescrite dans les pneus.', correct: true },
      { text: 'En changeant souvent la marque de carburant.', correct: false },
    ]
  },
  {
    id: 223,
    question: 'Ce signal vous autorise à vous arrêter:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 105 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 226,
    question: 'Quel signal vous donne la priorité?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Alternative A', correct: true, media_id: 110 },
      { text: 'Alternative B', correct: false, media_id: 111 },
      { text: 'Alternative C', correct: false, media_id: 112 },
    ]
  },
  {
    id: 232,
    question: 'Quel est votre comportement en présence de ce signal?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'S\'il n\'y a pas de ligne d\'arrêt, je continue sans m\'arrêter.', correct: false, media_id: 120 },
      { text: 'S\'il n\'y a pas de ligne d\'arrêt, je dois m\'arrêter à l\'endroit où la visibilité est suffisante.', correct: true },
      { text: 'Je dois céder la priorité à tous les autres usagers.', correct: false },
    ]
  },
  {
    id: 248,
    question: 'Avez-vous le droit d\'accéder à votre terrain?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 136 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 252,
    question: 'Que signifie ce signal?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Accès interdit aux piétons.', correct: false, media_id: 140 },
      { text: 'Passage pour piétons et cyclistes.', correct: true },
      { text: 'Accès interdit aux cyclistes.', correct: false },
    ]
  },
  {
    id: 347,
    question: 'Est-ce que ce cyclomoteur est bien placé pour virer à gauche?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 175 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 367,
    question: 'Avant de dépasser vous devez être certain que votre véhicule peut accélérer suffisamment:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 450,
    question: 'Vous conduisez un motocycle:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je n\'ai pas le droit d\'accéder à cette rue.', correct: false, media_id: 269 },
      { text: 'Je m\'attends à des enfants qui jouent sur la chaussée.', correct: true },
    ]
  },
  {
    id: 504,
    question: 'Pour accéder à l\'autoroute:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'J\'ai la priorité.', correct: false },
      { text: 'Je n\'ai pas la priorité.', correct: true },
    ]
  },
  {
    id: 687,
    question: 'A partir de ce signal:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'les manœuvres brusques sont à éviter.', correct: true, media_id: 271 },
      { text: 'le risque d\'aquaplaning est élevé.', correct: false },
      { text: 'la visibilité est réduite.', correct: false },
    ]
  },
  {
    id: 688,
    question: 'A partir de ce signal:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'le risque de dérapage est plus élevé.', correct: true, media_id: 272 },
      { text: 'le risque d\'aquaplaning est élevé.', correct: false },
      { text: 'la visibilité est réduite.', correct: false },
    ]
  },
  {
    id: 704,
    question: 'Avez-vous le droit de dépasser une voiture?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 288 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 841,
    question: 'Ce signal est:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'un signal de danger.', correct: true, media_id: 433 },
      { text: 'un signal d\'interdiction.', correct: false },
      { text: 'un signal d\'obligation.', correct: false },
    ]
  },
  {
    id: 852,
    question: 'Ce signal vous indique:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'chaussée en mauvais état.', correct: true, media_id: 444 },
      { text: 'projection de gravillons.', correct: false },
      { text: 'approche d\'un tunnel à 2 tubes.', correct: false },
    ]
  },
  {
    id: 866,
    question: 'A partir de ce signal vous risquez d\'être dévié de votre trajectoire:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 458 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 881,
    question: 'Quel signal autorise l\'accès aux riverains?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Le signal A.', correct: false, media_id: 473 },
      { text: 'Le signal B.', correct: true, media_id: 474 },
      { text: 'Les deux signaux.', correct: false },
    ]
  },
  {
    id: 884,
    question: 'En tant que riverain, avez-vous le droit d\'accéder à cette rue?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 477 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 886,
    question: 'Ce signal indique:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'interdiction de tourner à gauche.', correct: true, media_id: 479 },
      { text: 'direction obligatoire à gauche.', correct: false },
      { text: 'virage dangereux à gauche.', correct: false },
    ]
  },
  {
    id: 891,
    question: 'Lequel de ces signaux vous oblige à céder la priorité à la circulation venant de droite?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Le signal A.', correct: true, media_id: 484 },
      { text: 'Le signal B.', correct: false, media_id: 485 },
    ]
  },
  {
    id: 892,
    question: 'Est-ce que ce signal vous oblige à céder la priorité à la circulation venant de droite?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 486 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 897,
    question: 'Est-ce que ce signal vous indique que vous devez céder la priorité à la circulation venant de droite et à la circulation venant de gauche?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 491 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 903,
    question: 'Ce signal vous indique que vous circulez sur une route prioritaire:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Non', correct: false, media_id: 497 },
      { text: 'Oui', correct: true },
    ]
  },
  {
    id: 916,
    question: 'A qui devez-vous céder le passage lorsque vous sortez d\'une zone piétonne?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Uniquement à la circulation venant de droite.', correct: false, media_id: 510 },
      { text: 'Uniquement à la circulation venant de gauche et de droite.', correct: false },
      { text: 'A la circulation venant de gauche et de droite et à la circulation venant en sens opposé.', correct: true },
    ]
  },
  {
    id: 927,
    question: 'Ce signal est:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'un signal de danger.', correct: false, media_id: 534 },
      { text: 'un signal d\'interdiction.', correct: false },
      { text: 'un signal d\'obligation.', correct: true },
    ]
  },
  {
    id: 929,
    question: 'Ce signal est:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'un signal de danger.', correct: false, media_id: 536 },
      { text: 'un signal d\'interdiction.', correct: false },
      { text: 'un signal d\'obligation.', correct: true },
    ]
  },
  {
    id: 932,
    question: 'Ce signal signifie:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'accès interdit aux piétons.', correct: false, media_id: 539 },
      { text: 'fin de la zone piétonne.', correct: false },
      { text: 'fin du chemin obligatoire pour piétons.', correct: true },
    ]
  },
  {
    id: 936,
    question: 'Avez-vous le droit de circuler sur la voie de droite?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 543 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 940,
    question: 'Avez-vous le droit d\'emprunter la voie de droite?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true, media_id: 549 },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 967,
    question: 'L\'accès à cette route est interdit aux:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'cyclistes.', correct: true, media_id: 581 },
      { text: 'camions.', correct: false },
      { text: 'autobus.', correct: false },
    ]
  },
  {
    id: 971,
    question: 'Ce signal indique:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'vitesse conseillée.', correct: true, media_id: 585 },
      { text: 'vitesse minimale obligatoire.', correct: false },
      { text: 'vitesse maximale autorisée.', correct: false },
    ]
  },
  {
    id: 979,
    question: 'Avez-vous le droit de vous arrêter à cet endroit pour laisser sortir un passager?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 593 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 990,
    question: 'Le dépassement est:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'interdit sur une distance de 200 m.', correct: false, media_id: 604 },
      { text: 'interdit après une distance de 200 m.', correct: true },
      { text: 'autorisé après une distance de 200 m.', correct: false },
    ]
  },
  {
    id: 1000,
    question: 'Lequel de ces signaux signifie « Accès interdit aux cyclistes »?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Signal A.', correct: true, media_id: 616 },
      { text: 'Signal B.', correct: false, media_id: 617 },
      { text: 'Signal C.', correct: false, media_id: 618 },
    ]
  },
  {
    id: 1003,
    question: 'Lequel de ces signaux signifie « Interdiction de tourner à droite »?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Signal A.', correct: false, media_id: 625 },
      { text: 'Signal B.', correct: true, media_id: 626 },
      { text: 'Signal C.', correct: false, media_id: 627 },
    ]
  },
  {
    id: 1004,
    question: 'Lequel de ces signaux signifie « Direction obligatoire à droite »?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Signal A.', correct: false, media_id: 628 },
      { text: 'Signal B.', correct: false, media_id: 629 },
      { text: 'Signal C.', correct: true, media_id: 630 },
    ]
  },
  {
    id: 1007,
    question: 'Lequel de ces signaux vous indique qu\'il n\'y a pas de circulation en sens opposé?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Signal A.', correct: true, media_id: 637 },
      { text: 'Signal B.', correct: false, media_id: 638 },
    ]
  },
  {
    id: 1012,
    question: 'Dans quel cas avez-vous le droit de franchir une ligne continue (de sécurité)?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Pour dépasser un tracteur.', correct: false },
      { text: 'Pour contourner un véhicule immobilisé.', correct: true },
      { text: 'Pour faire demi-tour.', correct: false },
    ]
  },
  {
    id: 1018,
    question: 'Cette ligne interdit l\'arrêt:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false, media_id: 644 },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1034,
    question: 'Pour dépasser ce cycliste:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'je mets le clignotant gauche suffisamment tôt.', correct: true, media_id: 655 },
      { text: 'je ne dois pas dépasser la ligne discontinue.', correct: false },
      { text: 'je maintiens une distance latérale de 1,00 m.', correct: false },
    ]
  },
  {
    id: 1046,
    question: 'Lorsque vous vous approchez d\'un embouteillage, l\'usage des feux de détresse est:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'obligatoire.', correct: true },
      { text: 'interdit.', correct: false },
      { text: 'facultatif.', correct: false },
    ]
  },
  {
    id: 1054,
    question: 'Quelle peut être une conséquence du sous-gonflage des pneus?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Un échauffement excessif des pneus.', correct: true },
      { text: 'Une consommation de carburant réduite.', correct: false },
      { text: 'Une usure régulière.', correct: false },
    ]
  },
  {
    id: 1080,
    question: 'Après le passage d\'un train vous avez le droit de franchir le passage à niveau:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'dès l\'ouverture complète des barrières.', correct: false },
      { text: 'dès que les feux rouges sont éteints.', correct: true },
    ]
  },
  {
    id: 1124,
    question: 'Avez-vous le droit de faire demi-tour sur autoroute?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1125,
    question: 'Avez-vous le droit de faire marche arrière sur autoroute?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1127,
    question: 'Si votre véhicule est équipé du système ABS, vous n\'avez pas besoin de respecter la distance de sécurité de 2 secondes par rapport au véhicule qui vous précède:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1180,
    question: 'A partir de ce signal par temps sec, vous avez le droit de rouler à:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: '20 km/h.', correct: false, media_id: 700 },
      { text: '50 km/h.', correct: true },
    ]
  },
  {
    id: 1186,
    question: 'Si vous dépassez un cycliste, devez-vous respecter une distance latérale de 1,5 m au minimum?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1196,
    question: 'Le feu rouge clignotant au passage à niveau signifie:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'je dois m\'arrêter immédiatement.', correct: true },
      { text: 'j\'ai le droit de passer avant la fermeture complète des barrières.', correct: false },
    ]
  },
  {
    id: 1205,
    question: 'Avez-vous le droit de dépasser un véhicule en présence d\'une ligne continue (de sécurité)?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Uniquement s\'il s\'agit d\'un véhicule lent.', correct: false, media_id: 711 },
      { text: 'Uniquement si je ne franchis pas la ligne continue.', correct: true },
      { text: 'Uniquement en cas de bonne visibilité.', correct: false },
    ]
  },
  {
    id: 1252,
    question: 'Ce signal signifie:',
    question_media_id: 713,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'stationnement interdit du 1<sup>er</sup> au 15 du mois.', correct: true },
      { text: 'stationnement autorisé du 1<sup>er</sup> au 15 du mois.', correct: false },
      { text: 'stationnement interdit sur une distance de 1 à 15&nbspm.', correct: false },
    ]
  },
  {
    id: 1278,
    question: 'Ce signal indique la fin:',
    question_media_id: 724,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'D\'une limitation de vitesse.', correct: true },
      { text: 'D\'une vitesse minimale obligatoire.', correct: false },
      { text: 'D\'une interdiction de stationnement.', correct: false },
    ]
  },
  {
    id: 1290,
    question: 'Que signifie ce signal?',
    question_media_id: 734,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Virage à gauche.', correct: false },
      { text: 'Direction obligatoire à gauche.', correct: false },
      { text: 'Interdiction de tourner à gauche.', correct: true },
    ]
  },
  {
    id: 1291,
    question: 'Que signifie ce signal?',
    question_media_id: 735,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'J\'ai la priorité par rapport à la circulation venant en sens inverse.', correct: false },
      { text: 'Je dois céder la priorité à la circulation venant en sens inverse.', correct: true },
      { text: 'Aucune circulation ne vient en sens inverse.', correct: false },
    ]
  },
  {
    id: 1296,
    question: 'En voyant ce signal:',
    question_media_id: 737,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je circule sur une route prioritaire.', correct: false },
      { text: 'Je cède la priorité à gauche et à droite.', correct: true },
      { text: 'Je dois toujours m\'arrêter.', correct: false },
    ]
  },
  {
    id: 1297,
    question: 'Avez-vous le droit de contourner ce véhicule en panne?',
    question_media_id: 738,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1299,
    question: 'Que signifie ce signal?',
    question_media_id: 741,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Priorité par rapport à la circulation venant en sens inverse.', correct: true },
      { text: 'Priorité à la circulation venant en sens inverse.', correct: false },
      { text: 'Attention, circulation dans les deux sens.', correct: false },
    ]
  },
  {
    id: 1300,
    question: 'Lors du passage sur des rails humides:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Il n\'y a pas de risque de dérapage.', correct: false },
      { text: 'Évitez une position inclinée.', correct: true },
    ]
  },
  {
    id: 1306,
    question: 'Quel est l\'ordre de passage?',
    question_media_id: 745,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'C-B-A', correct: false },
      { text: 'B-A-C', correct: false },
      { text: 'Il n\'y a de solution que si un conducteur renonce à son "droit de priorité".', correct: true },
    ]
  },
  {
    id: 1333,
    question: 'Quelle est la largeur maximale autorisée d\'un motocycle léger y compris son chargement?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: '1,00 m.', correct: false },
      { text: '1,50 m.', correct: false },
      { text: '2,00 m.', correct: true },
    ]
  },
  {
    id: 1335,
    question: 'Quelle est la limitation de vitesse pour un motocycle léger dans une zone de rencontre?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: '20 km/h.', correct: true },
      { text: '30 km/h.', correct: false },
      { text: '50 km/h.', correct: false },
    ]
  },
  {
    id: 1339,
    question: 'Pour prendre un virage à gauche en toute sécurité, le conducteur d\'un motocycle léger doit-il s\'approcher au maximum de la ligne médiane?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1340,
    question: 'Le transport d\'un passager sur votre motocycle léger a-t-il une influence sur l\'accélération?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1341,
    question: 'Le transport d\'un passager sur votre motocycle léger a-t-il une influence sur la distance de freinage?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1342,
    question: 'Quelle est la limitation de vitesse pour un motocycle léger sur autoroute en cas de pluie ou d\'autres précipitations?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: '90 km/h.', correct: false },
      { text: '110 km/h.', correct: true },
      { text: '130 km/h.', correct: false },
    ]
  },
  {
    id: 1369,
    question: 'Avez-vous le droit de stationner dans une zone résidentielle s\'il n\'y a pas d\'endroits spécialement signalés?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Uniquement en tant que riverain.', correct: false },
      { text: 'Uniquement en tant que fournisseur.', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1370,
    question: 'Avez-vous le droit de stationner dans une zone de rencontre s\'il n\'y a pas d\'endroits spécialement signalés?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Uniquement en tant que riverain.', correct: false },
      { text: 'Uniquement en tant que fournisseur.', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1374,
    question: 'Lorsqu\'il pleut, vous augmentez la distance de sécurité par rapport au véhicule qui précède:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1401,
    question: 'Ce signal vous indique:',
    question_media_id: 761,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'chemin obligatoire pour piétons.', correct: false },
      { text: 'accès interdit aux piétons.', correct: true },
      { text: 'passage pour piétons.', correct: false },
    ]
  },
  {
    id: 1434,
    question: 'Ce signal est:',
    question_media_id: 789,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'un signal de danger.', correct: true },
      { text: 'un signal d\'interdiction.', correct: false },
      { text: 'un signal d\'obligation.', correct: false },
    ]
  },
  {
    id: 1439,
    question: 'Ce signal vous annonce:',
    question_media_id: 794,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'chaussée rétrécie des deux côtés.', correct: true },
      { text: 'priorité par rapport à la circulation venant en sens opposé.', correct: false },
      { text: 'approche d\'un dos d\'âne.', correct: false },
    ]
  },
  {
    id: 1440,
    question: 'Ce signal vous annonce:',
    question_media_id: 796,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'approche d\'un dos d\'âne.', correct: true },
      { text: 'approche d\'un cassis.', correct: false },
      { text: 'chute de pierres.', correct: false },
    ]
  },
  {
    id: 1442,
    question: 'Ce signal vous indique:',
    question_media_id: 798,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'approche d\'un cassis.', correct: true },
      { text: 'approche d\'un dos d\'âne.', correct: false },
      { text: 'débouché sur un quai ou une berge.', correct: false },
    ]
  },
  {
    id: 1446,
    question: 'Ce signal vous annonce:',
    question_media_id: 802,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'chute de pierres.', correct: true },
      { text: 'visibilité réduite.', correct: false },
      { text: 'montée à forte inclinaison.', correct: false },
    ]
  },
  {
    id: 1447,
    question: 'Ce signal vous annonce:',
    question_media_id: 803,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'chemin obligatoire pour piétons.', correct: false },
      { text: 'approche d\'un passage pour piétons.', correct: true },
      { text: 'passage interdit pour piétons.', correct: false },
    ]
  },
  {
    id: 1451,
    question: 'Ce signal vous annonce:',
    question_media_id: 807,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'projection de gravillons.', correct: false },
      { text: 'visibilité réduite.', correct: true },
      { text: 'chute de pierres.', correct: false },
    ]
  },
  {
    id: 1462,
    question: 'A qui devez-vous céder le passage en présence de ce signal?',
    question_media_id: 818,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Uniquement à la circulation venant de droite.', correct: true },
      { text: 'Uniquement à la circulation venant de gauche et de droite.', correct: false },
      { text: 'A la circulation venant de gauche et de droite et à la circulation venant en sens opposé.', correct: false },
    ]
  },
  {
    id: 1471,
    question: 'Dans une rue marquée par ce signal, il vous interdit de:',
    question_media_id: 829,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'dépasser un autre véhicule.', correct: false },
      { text: 'stationner.', correct: false },
      { text: 'faire demi-tour.', correct: true },
    ]
  },
  {
    id: 1479,
    question: 'En présence de ces signaux, le temps de stationnement est limité par:',
    question_media_id: 839,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'disque de stationnement.', correct: false },
      { text: 'parcmètre à minuterie.', correct: true },
      { text: 'parcmètre à distribution de tickets.', correct: false },
    ]
  },
  {
    id: 1482,
    question: 'En présence de ces signaux, le temps de parcage est limité par:',
    question_media_id: 842,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'disque de stationnement.', correct: false },
      { text: 'parcmètre à minuterie.', correct: true },
      { text: 'parcmètre à distribution de tickets.', correct: false },
    ]
  },
  {
    id: 1483,
    question: 'En présence de ces signaux, le temps de parcage est limité par:',
    question_media_id: 843,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'disque de stationnement.', correct: false },
      { text: 'parcmètre à minuterie.', correct: false },
      { text: 'parcmètre à distribution de tickets.', correct: true },
    ]
  },
  {
    id: 1491,
    question: 'Comment procédez-vous pour contourner un obstacle?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Je quitte ma trajectoire suffisamment tôt pour mieux voir.', correct: true },
      { text: 'Je quitte ma trajectoire au dernier moment pour mieux être vu.', correct: false },
      { text: 'Je n\'ai pas le droit de franchir une ligne continue.', correct: false },
    ]
  },
  {
    id: 1496,
    question: 'Est-il obligatoire de respecter la distance de sécurité minimale de 2 secondes en dehors des localités?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: true },
      { text: 'Non', correct: false },
    ]
  },
  {
    id: 1506,
    question: 'Avez-vous le droit de stationner dans une zone piétonne?',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Oui', correct: false },
      { text: 'Non', correct: true },
    ]
  },
  {
    id: 1516,
    question: 'Ce signal signifie:',
    question_media_id: 849,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'arrêt obligatoire.', correct: false },
      { text: 'interdiction d\'utiliser cette voie.', correct: true },
    ]
  },
  {
    id: 1520,
    question: 'Que signifie ce signal?',
    question_media_id: 852,
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Voie lente.', correct: true },
      { text: 'Voie de détresse.', correct: false },
      { text: 'Voie de décélération.', correct: false },
    ]
  },
  {
    id: 1563,
    question: 'Pour pouvoir atteindre un parking vous devez traverser le trottoir. Vous devriez aborder le bord du trottoir:',
    type: 'single',
    topic: 'Examen Demo',
    answers: [
      { text: 'Sous un angle aigu (petit angle).', correct: false },
      { text: 'Sous un angle droit, si possible.', correct: true },
      { text: 'À vitesse élevée.', correct: false },
    ]
  }
); // ===== FIN – SNCA Demo =====