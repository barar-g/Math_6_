import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap2 = () => {
const questions = [
    {
      text: 'Convertir 2 kilogrammes en grammes.',
      correctAnswer: '2000 grammes',
      explanation: 'Pour convertir des kilogrammes en grammes, multipliez par 1000. Donc, 2 kg = 2000 g.',
      options: ['200 grammes', '2000 grammes', '20000 grammes', '200000 grammes']
    },
    {
      text: 'Convertir 5 kilogrammes en grammes.',
      correctAnswer: '5000 grammes',
      explanation: 'Pour convertir des kilogrammes en grammes, multipliez par 1000. Donc, 5 kg = 5000 g.',
      options: ['500 grammes', '5000 grammes', '50000 grammes', '500000 grammes']
    },
    {
      text: 'Convertir 3 hectogrammes en grammes.',
      correctAnswer: '300 grammes',
      explanation: 'Pour convertir des hectogrammes en grammes, multipliez par 100. Donc, 3 hg = 300 g.',
      options: ['30 grammes', '300 grammes', '3000 grammes', '30000 grammes']
    },
    {
      text: 'Convertir 7 hectogrammes en grammes.',
      correctAnswer: '700 grammes',
      explanation: 'Pour convertir des hectogrammes en grammes, multipliez par 100. Donc, 7 hg = 700 g.',
      options: ['70 grammes', '700 grammes', '7000 grammes', '70000 grammes']
    },
    {
      text: 'Convertir 50 décigrammes en grammes.',
      correctAnswer: '5 grammes',
      explanation: 'Pour convertir des décigrammes en grammes, divisez par 10. Donc, 50 dg = 5 g.',
      options: ['0.5 grammes', '5 grammes', '50 grammes', '500 grammes']
    },
    {
      text: 'Convertir 400 décigrammes en grammes.',
      correctAnswer: '40 grammes',
      explanation: 'Pour convertir des décigrammes en grammes, divisez par 10. Donc, 400 dg = 40 g.',
      options: ['4 grammes', '40 grammes', '400 grammes', '4000 grammes']
    },
    {
      text: 'Convertir 800 centigrammes en grammes.',
      correctAnswer: '8 grammes',
      explanation: 'Pour convertir des centigrammes en grammes, divisez par 100. Donc, 800 cg = 8 g.',
      options: ['0.8 grammes', '8 grammes', '80 grammes', '800 grammes']
    },
    {
      text: 'Convertir 2500 milligrammes en grammes.',
      correctAnswer: '2.5 grammes',
      explanation: 'Pour convertir des milligrammes en grammes, divisez par 1000. Donc, 2500 mg = 2.5 g.',
      options: ['0.25 grammes', '2.5 grammes', '25 grammes', '250 grammes']
    },
    {
      text: 'Convertir 9 kilogrammes en grammes.',
      correctAnswer: '9000 grammes',
      explanation: 'Pour convertir des kilogrammes en grammes, multipliez par 1000. Donc, 9 kg = 9000 g.',
      options: ['900 grammes', '9000 grammes', '90000 grammes', '900000 grammes']
    },
    {
      text: 'Convertir 6 hectogrammes en grammes.',
      correctAnswer: '600 grammes',
      explanation: 'Pour convertir des hectogrammes en grammes, multipliez par 100. Donc, 6 hg = 600 g.',
      options: ['60 grammes', '600 grammes', '6000 grammes', '60000 grammes']
    }
  ]
  ;


return (
    <div>
        <h3> Mesures : Les Mesures de Masses </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap2;