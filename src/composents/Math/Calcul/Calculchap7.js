import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap7 = () => {
const questions = [
    {
      text: 'Si vous placez 5000€ à un taux d\'intérêt annuel de 5%, combien d\'intérêts recevrez-vous après un an?',
      correctAnswer: '250€',
      explanation: 'Pour calculer l\'intérêt, multipliez le capital placé par le taux d\'intérêt annuel. Donc, 5000€ * 5% = 250€.',
      options: ['200€', '250€', '300€', '350€']
    },
    {
      text: 'Si vous placez 4000€ à un taux d\'intérêt annuel de 3% pendant 6 mois, combien d\'intérêts recevrez-vous?',
      correctAnswer: '60€',
      explanation: 'Pour calculer l\'intérêt pour une période inférieure à un an, multipliez le capital placé par le taux d\'intérêt annuel, puis par le nombre de mois, et divisez par 12. Donc, (4000€ * 3% * 6) / 12 = 60€.',
      options: ['50€', '60€', '70€', '80€']
    },
    {
      text: 'Si vous recevez 200€ d\'intérêts sur un placement de 4000€ après un an, quel est le taux d\'intérêt annuel?',
      correctAnswer: '5%',
      explanation: 'Pour calculer le taux d\'intérêt annuel, divisez l\'intérêt par le capital placé et multipliez par 100. Donc, (200€ / 4000€) * 100 = 5%.',
      options: ['4%', '5%', '6%', '7%']
    },
    {
      text: 'Si vous recevez 150€ d\'intérêts sur un placement à un taux d\'intérêt annuel de 3% après un an, quel est le montant du capital placé?',
      correctAnswer: '5000€',
      explanation: 'Pour calculer le capital placé, divisez l\'intérêt par le taux d\'intérêt annuel. Donc, 150€ / 3% = 5000€.',
      options: ['4500€', '5000€', '5500€', '6000€']
    },
    {
      text: 'Si vous placez 6000€ à un taux d\'intérêt annuel de 4%, combien d\'intérêts recevrez-vous après un an?',
      correctAnswer: '240€',
      explanation: 'Pour calculer l\'intérêt, multipliez le capital placé par le taux d\'intérêt annuel. Donc, 6000€ * 4% = 240€.',
      options: ['220€', '240€', '260€', '280€']
    },
    {
      text: 'Si vous placez 5000€ à un taux d\'intérêt annuel de 2% pendant 3 mois, combien d\'intérêts recevrez-vous?',
      correctAnswer: '25€',
      explanation: 'Pour calculer l\'intérêt pour une période inférieure à un an, multipliez le capital placé par le taux d\'intérêt annuel, puis par le nombre de mois, et divisez par 12. Donc, (5000€ * 2% * 3) / 12 = 25€.',
      options: ['15€', '25€', '35€', '45€']
    },
    {
      text: 'Si vous recevez 100€ d\'intérêts sur un placement de 2000€ après un an, quel est le taux d\'intérêt annuel?',
      correctAnswer: '5%',
      explanation: 'Pour calculer le taux d\'intérêt annuel, divisez l\'intérêt par le capital placé et multipliez par 100. Donc, (100€ / 2000€) * 100 = 5%.',
      options: ['4%', '5%', '6%', '7%']
    },
    {
      text: 'Si vous recevez 120€ d\'intérêts sur un placement à un taux d\'intérêt annuel de 4% après un an, quel est le montant du capital placé?',
      correctAnswer: '3000€',
      explanation: 'Pour calculer le capital placé, divisez l\'intérêt par le taux d\'intérêt annuel. Donc, 120€ / 4% = 3000€.',
      options: ['2800€', '3000€', '3200€', '3400€']
    },
    {
      text: 'Si vous placez 7000€ à un taux d\'intérêt annuel de 3%, combien d\'intérêts recevrez-vous après un an?',
      correctAnswer: '210€',
      explanation: 'Pour calculer l\'intérêt, multipliez le capital placé par le taux d\'intérêt annuel. Donc, 7000€ * 3% = 210€.',
      options: ['190€', '210€', '230€', '250€']
    },
    {
      text: 'Si vous placez 4000€ à un taux d\'intérêt annuel de 1.5% pendant 6 mois, combien d\'intérêts recevrez-vous?',
      correctAnswer: '30€',
      explanation: 'Pour calculer l\'intérêt pour une période inférieure à un an, multipliez le capital placé par le taux d\'intérêt annuel, puis par le nombre de mois, et divisez par 12. Donc, (4000€ * 1.5% * 6) / 12 = 30€.',
      options: ['20€', '30€', '40€', '50€']
    }
  ]
  ;


return (
    <div>
        <h3> Calcul : L’intérêt annuel   </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap7;