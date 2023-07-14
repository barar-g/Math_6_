import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap1 = () => {
const questions = [
  {
    text: 'Convertir 2 kilomètres en mètres.',
    correctAnswer: '2000 mètres',
    explanation: 'Pour convertir des kilomètres en mètres, multipliez par 1000. Donc, 2 km = 2000 m.',
    options: ['200 mètres', '2000 mètres', '20000 mètres', '200000 mètres']
  },
  {
    text: 'Convertir 5 kilomètres en mètres.',
    correctAnswer: '5000 mètres',
    explanation: 'Pour convertir des kilomètres en mètres, multipliez par 1000. Donc, 5 km = 5000 m.',
    options: ['500 mètres', '5000 mètres', '50000 mètres', '500000 mètres']
  },
  {
    text: 'Convertir 3 hectomètres en mètres.',
    correctAnswer: '300 mètres',
    explanation: 'Pour convertir des hectomètres en mètres, multipliez par 100. Donc, 3 hm = 300 m.',
    options: ['30 mètres', '300 mètres', '3000 mètres', '30000 mètres']
  },
  {
    text: 'Convertir 7 hectomètres en mètres.',
    correctAnswer: '700 mètres',
    explanation: 'Pour convertir des hectomètres en mètres, multipliez par 100. Donc, 7 hm = 700 m.',
    options: ['70 mètres', '700 mètres', '7000 mètres', '70000 mètres']
  },
  {
    text: 'Convertir 50 décimètres en mètres.',
    correctAnswer: '5 mètres',
    explanation: 'Pour convertir des décimètres en mètres, divisez par 10. Donc, 50 dm = 5 m.',
    options: ['0.5 mètres', '5 mètres', '50 mètres', '500 mètres']
  },
  {
    text: 'Convertir 400 décimètres en mètres.',
    correctAnswer: '40 mètres',
    explanation: 'Pour convertir des décimètres en mètres, divisez par 10. Donc, 400 dm = 40 m.',
    options: ['4 mètres', '40 mètres', '400 mètres', '4000 mètres']
  },
  {
    text: 'Convertir 800 centimètres en mètres.',
    correctAnswer: '8 mètres',
    explanation: 'Pour convertir des centimètres en mètres, divisez par 100. Donc, 800 cm = 8 m.',
    options: ['0.8 mètres', '8 mètres', '80 mètres', '800 mètres']
  },
  {
    text: 'Convertir 2500 millimètres en mètres.',
    correctAnswer: '2.5 mètres',
    explanation: 'Pour convertir des millimètres en mètres, divisez par 1000. Donc, 2500 mm = 2.5 m.',
    options: ['0.25 mètres', '2.5 mètres', '25 mètres', '250 mètres']
  },
  {
    text: 'Convertir 9 kilomètres en mètres.',
    correctAnswer: '9000 mètres',
    explanation: 'Pour convertir des kilomètres en mètres, multipliez par 1000. Donc, 9 km = 9000 m.',
    options: ['900 mètres', '9000 mètres', '90000 mètres', '900000 mètres']
  },
  {
    text: 'Convertir 6 hectomètres en mètres.',
    correctAnswer: '600 mètres',
    explanation: 'Pour convertir des hectomètres en mètres, multipliez par 100. Donc, 6 hm = 600 m.',
    options: ['60 mètres', '600 mètres', '6000 mètres', '60000 mètres']
  }
]
;


return (
    <div>
        <h3> Mesures : Les Mesures de Longueur  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap1;