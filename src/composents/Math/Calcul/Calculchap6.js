import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap6 = () => {
const questions = [
    {
      text: 'Sur 80 élèves candidats à un concours, 75% sont admis. Combien d\'élèves sont admis?',
      correctAnswer: '60 élèves',
      explanation: 'Pour trouver le nombre d\'élèves admis, nous devons multiplier le nombre total d\'élèves par le pourcentage d\'admission. Donc, 80 élèves * 75% = 60 élèves.',
      options: ['50 élèves', '60 élèves', '70 élèves', '80 élèves']
    },
    {
      text: 'Si 80% des 50 questions d\'un examen sont correctes, combien de questions sont correctes?',
      correctAnswer: '40 questions',
      explanation: 'Pour trouver le nombre de questions correctes, nous devons multiplier le nombre total de questions par le pourcentage de correctes. Donc, 50 questions * 80% = 40 questions.',
      options: ['30 questions', '40 questions', '50 questions', '60 questions']
    },
    {
      text: 'Si une robe coûte 100€ et qu\'elle est soldée à 20%, combien coûte la robe après la remise?',
      correctAnswer: '80€',
      explanation: 'Pour trouver le prix de la robe après la remise, nous devons soustraire le pourcentage de remise du prix original. Donc, 100€ - (100€ * 20%) = 80€.',
      options: ['70€', '80€', '90€', '100€']
    },
    {
      text: 'Si une voiture coûte 20000€ et qu\'elle est soldée à 15%, combien coûte la voiture après la remise?',
      correctAnswer: '17000€',
      explanation: 'Pour trouver le prix de la voiture après la remise, nous devons soustraire le pourcentage de remise du prix original. Donc, 20000€ - (20000€ * 15%) = 17000€.',
      options: ['16000€', '17000€', '18000€', '19000€']
    },
    {
      text: 'Si un sac coûte 75€ et qu\'il est soldé à 25%, combien coûte le sac après la remise?',
      correctAnswer: '56.25€',
      explanation: 'Pour trouver le prix du sac après la remise, nous devons soustraire le pourcentage de remise du prix original. Donc, 75€ - (75€ * 25%) = 56.25€.',
      options: ['46.25€', '56.25€', '66.25€', '76.25€']
    },
    {
      text: 'Sur 120 élèves d\'une classe, 60% sont des filles. Combien y a-t-il de filles dans la classe?',
      correctAnswer: '72 filles',
      explanation: 'Pour trouver le nombre de filles, nous devons multiplier le nombre total d\'élèves par le pourcentage de filles. Donc, 120 élèves * 60% = 72 filles.',
      options: ['62 filles', '72 filles', '82 filles', '92 filles']
    },
    {
      text: 'Si un produit coûte 500€ et que son prix augmente de 10%, combien coûte le produit après l\'augmentation?',
      correctAnswer: '550€',
      explanation: 'Pour trouver le prix du produit après l\'augmentation, nous devons ajouter le pourcentage d\'augmentation au prix original. Donc, 500€ + (500€ * 10%) = 550€.',
      options: ['520€', '530€', '540€', '550€']
    },
    {
      text: 'Si une maison coûte 300000€ et que son prix diminue de 5%, combien coûte la maison après la diminution?',
      correctAnswer: '285000€',
      explanation: 'Pour trouver le prix de la maison après la diminution, nous devons soustraire le pourcentage de diminution du prix original. Donc, 300000€ - (300000€ * 5%) = 285000€.',
      options: ['275000€', '285000€', '295000€', '305000€']
    },
    {
      text: 'Sur 150 employés d\'une entreprise, 30% travaillent à temps partiel. Combien d\'employés travaillent à temps partiel?',
      correctAnswer: '45 employés',
      explanation: 'Pour trouver le nombre d\'employés qui travaillent à temps partiel, nous devons multiplier le nombre total d\'employés par le pourcentage de ceux qui travaillent à temps partiel. Donc, 150 employés * 30% = 45 employés.',
      options: ['35 employés', '45 employés', '55 employés', '65 employés']
    },
    {
      text: 'Si une tablette coûte 250€ et qu\'elle est soldée à 20%, combien coûte la tablette après la remise?',
      correctAnswer: '200€',
      explanation: 'Pour trouver le prix de la tablette après la remise, nous devons soustraire le pourcentage de remise du prix original. Donc, 250€ - (250€ * 20%) = 200€.',
      options: ['190€', '200€', '210€', '220€']
    }
  ]
  ;


return (
    <div>
        <h3> Calcul : Les pourcentages
  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap6;