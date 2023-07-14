import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap4 = () => {
const questions = [
    {
      text: 'Convertir 2 kilomètres carrés en mètres carrés.',
      correctAnswer: '2 000 000 mètres carrés',
      explanation: 'Pour convertir des kilomètres carrés en mètres carrés, multipliez par 1 000 000. Donc, 2 km² = 2 000 000 m².',
      options: ['2000 mètres carrés', '20000 mètres carrés', '200000 mètres carrés', '2 000 000 mètres carrés']
    },
    {
      text: 'Convertir 5 kilomètres carrés en mètres carrés.',
      correctAnswer: '5 000 000 mètres carrés',
      explanation: 'Pour convertir des kilomètres carrés en mètres carrés, multipliez par 1 000 000. Donc, 5 km² = 5 000 000 m².',
      options: ['5000 mètres carrés', '50000 mètres carrés', '500000 mètres carrés', '5 000 000 mètres carrés']
    },
    {
      text: 'Convertir 3 hectomètres carrés en mètres carrés.',
      correctAnswer: '30000 mètres carrés',
      explanation: 'Pour convertir des hectomètres carrés en mètres carrés, multipliez par 10000. Donc, 3 hm² = 30000 m².',
      options: ['300 mètres carrés', '3000 mètres carrés', '30000 mètres carrés', '300000 mètres carrés']
    },
    {
      text: 'Convertir 7 décimètres carrés en mètres carrés.',
      correctAnswer: '0.07 mètres carrés',
      explanation: 'Pour convertir des décimètres carrés en mètres carrés, divisez par 100. Donc, 7 dm² = 0.07 m².',
      options: ['0.007 mètres carrés', '0.07 mètres carrés', '0.7 mètres carrés', '7 mètres carrés']
    },
    {
      text: 'Convertir 50 centimètres carrés en mètres carrés.',
      correctAnswer: '0.005 mètres carrés',
      explanation: 'Pour convertir des centimètres carrés en mètres carrés, divisez par 10 000. Donc, 50 cm² = 0.005 m².',
      options: ['0.0005 mètres carrés', '0.005 mètres carrés', '0.05 mètres carrés', '0.5 mètres carrés']
    },
    {
      text: 'Convertir 800 millimètres carrés en centimètres carrés.',
      correctAnswer: '8 centimètres carrés',
      explanation: 'Pour convertir des millimètres carrés en centimètres carrés, divisez par 100. Donc, 800 mm² = 8 cm².',
      options: ['0.8 centimètres carrés', '8 centimètres carrés', '80 centimètres carrés', '800 centimètres carrés']
    },
    {
      text: 'Convertir 2 hectomètres carrés en mètres carrés.',
      correctAnswer: '20000 mètres carrés',
      explanation: 'Pour convertir des hectomètres carrés en mètres carrés, multipliez par 10000. Donc, 2 hm² = 20000 m².',
      options: ['200 mètres carrés', '2000 mètres carrés', '20000 mètres carrés', '200000 mètres carrés']
    },
    {
      text: 'Convertir 2500 millimètres carrés en centimètres carrés.',
      correctAnswer: '25 centimètres carrés',
      explanation: 'Pour convertir des millimètres carrés en centimètres carrés, divisez par 100. Donc, 2500 mm² = 25 cm².',
      options: ['2.5 centimètres carrés', '25 centimètres carrés', '250 centimètres carrés', '2500 centimètres carrés']
    },
    {
      text: 'Convertir 9 kilomètres carrés en mètres carrés.',
      correctAnswer: '9 000 000 mètres carrés',
      explanation: 'Pour convertir des kilomètres carrés en mètres carrés, multipliez par 1 000 000. Donc, 9 km² = 9 000 000 m².',
      options: ['9000 mètres carrés', '90000 mètres carrés', '900000 mètres carrés', '9 000 000 mètres carrés']
    },
    {
      text: 'Convertir 6 décamètres carrés en mètres carrés.',
      correctAnswer: '600 mètres carrés',
      explanation: 'Pour convertir des décamètres carrés en mètres carrés, multipliez par 100. Donc, 6 dam² = 600 m².',
      options: ['6 mètres carrés', '60 mètres carrés', '600 mètres carrés', '6000 mètres carrés']
    }
  ]
  
;


return (
    <div>
        <h3> Mesures : Les Mesures d'aires  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap4;