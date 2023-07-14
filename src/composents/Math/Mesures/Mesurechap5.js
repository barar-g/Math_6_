import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap5 = () => {
const questions = [
    {
      text: 'Convertir 2 hectares en ares.',
      correctAnswer: '200 ares',
      explanation: 'Pour convertir des hectares en ares, multipliez par 100. Donc, 2 ha = 200 a.',
      options: ['20 ares', '200 ares', '2000 ares', '20000 ares']
    },
    {
      text: 'Convertir 5 hectares en ares.',
      correctAnswer: '500 ares',
      explanation: 'Pour convertir des hectares en ares, multipliez par 100. Donc, 5 ha = 500 a.',
      options: ['50 ares', '500 ares', '5000 ares', '50000 ares']
    },
    {
      text: 'Convertir 3 ares en mètres carrés.',
      correctAnswer: '300 mètres carrés',
      explanation: 'Pour convertir des ares en mètres carrés, multipliez par 100. Donc, 3 a = 300 m².',
      options: ['30 mètres carrés', '300 mètres carrés', '3000 mètres carrés', '30000 mètres carrés']
    },
    {
      text: 'Convertir 7 ares en mètres carrés.',
      correctAnswer: '700 mètres carrés',
      explanation: 'Pour convertir des ares en mètres carrés, multipliez par 100. Donc, 7 a = 700 m².',
      options: ['70 mètres carrés', '700 mètres carrés', '7000 mètres carrés', '70000 mètres carrés']
    },
    {
      text: 'Convertir 50 centiares en mètres carrés.',
      correctAnswer: '50 mètres carrés',
      explanation: '1 centiare est équivalent à 1 mètre carré. Donc, 50 ca = 50 m².',
      options: ['5 mètres carrés', '50 mètres carrés', '500 mètres carrés', '5000 mètres carrés']
    },
    {
      text: 'Convertir 800 centimètres cubes en mètres cubes.',
      correctAnswer: '0.0008 mètres cubes',
      explanation: 'Pour convertir des centimètres cubes en mètres cubes, divisez par 1 000 000. Donc, 800 cm³ = 0.0008 m³.',
      options: ['0.00008 mètres cubes', '0.0008 mètres cubes', '0.008 mètres cubes', '0.08 mètres cubes']
    },
    {
      text: 'Convertir 2 mètres cubes en décimètres cubes.',
      correctAnswer: '2000 décimètres cubes',
      explanation: 'Pour convertir des mètres cubes en décimètres cubes, multipliez par 1000. Donc, 2 m³ = 2000 dm³.',
      options: ['200 décimètres cubes', '2000 décimètres cubes', '20000 décimètres cubes', '200000 décimètres cubes']
    },
    {
      text: 'Convertir 2500 millimètres cubes en centimètres cubes.',
      correctAnswer: '2.5 centimètres cubes',
      explanation: 'Pour convertir des millimètres cubes en centimètres cubes, divisez par 1000. Donc, 2500 mm³ = 2.5 cm³.',
      options: ['0.25 centimètres cubes', '2.5 centimètres cubes', '25 centimètres cubes', '250 centimètres cubes']
    },
    {
      text: 'Convertir 9 hectomètres cubes en mètres cubes.',
      correctAnswer: '900000 mètres cubes',
      explanation: 'Pour convertir des hectomètres cubes en mètres cubes, multipliez par 1 000 000. Donc, 9 hm³ = 900000 m³.',
      options: ['9000 mètres cubes', '90000 mètres cubes', '900000 mètres cubes', '9000000 mètres cubes']
    },
    {
      text: 'Convertir 6 décamètres cubes en mètres cubes.',
      correctAnswer: '6000 mètres cubes',
      explanation: 'Pour convertir des décamètres cubes en mètres cubes, multipliez par 1000. Donc, 6 dam³ = 6000 m³.',
      options: ['600 mètres cubes', '6000 mètres cubes', '60000 mètres cubes', '600000 mètres cubes']
    }
  ]
  
;


return (
    <div>
        <h3> Mesures : Les  Mesures agraires  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap5;