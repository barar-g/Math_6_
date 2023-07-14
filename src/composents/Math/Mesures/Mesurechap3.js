import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap3 = () => {
const questions = [
    {
      text: 'Convertir 2 hectolitres en litres.',
      correctAnswer: '200 litres',
      explanation: 'Pour convertir des hectolitres en litres, multipliez par 100. Donc, 2 hl = 200 l.',
      options: ['20 litres', '200 litres', '2000 litres', '20000 litres']
    },
    {
      text: 'Convertir 5 hectolitres en litres.',
      correctAnswer: '500 litres',
      explanation: 'Pour convertir des hectolitres en litres, multipliez par 100. Donc, 5 hl = 500 l.',
      options: ['50 litres', '500 litres', '5000 litres', '50000 litres']
    },
    {
      text: 'Convertir 3 décalitres en litres.',
      correctAnswer: '30 litres',
      explanation: 'Pour convertir des décalitres en litres, multipliez par 10. Donc, 3 dal = 30 l.',
      options: ['3 litres', '30 litres', '300 litres', '3000 litres']
    },
    {
      text: 'Convertir 7 décalitres en litres.',
      correctAnswer: '70 litres',
      explanation: 'Pour convertir des décalitres en litres, multipliez par 10. Donc, 7 dal = 70 l.',
      options: ['7 litres', '70 litres', '700 litres', '7000 litres']
    },
    {
      text: 'Convertir 50 décilitres en litres.',
      correctAnswer: '5 litres',
      explanation: 'Pour convertir des décilitres en litres, divisez par 10. Donc, 50 dl = 5 l.',
      options: ['0.5 litres', '5 litres', '50 litres', '500 litres']
    },
    {
      text: 'Convertir 400 décilitres en litres.',
      correctAnswer: '40 litres',
      explanation: 'Pour convertir des décilitres en litres, divisez par 10. Donc, 400 dl = 40 l.',
      options: ['4 litres', '40 litres', '400 litres', '4000 litres']
    },
    {
      text: 'Convertir 800 centilitres en litres.',
      correctAnswer: '8 litres',
      explanation: 'Pour convertir des centilitres en litres, divisez par 100. Donc, 800 cl = 8 l.',
      options: ['0.8 litres', '8 litres', '80 litres', '800 litres']
    },
    {
      text: 'Convertir 2500 millilitres en litres.',
      correctAnswer: '2.5 litres',
      explanation: 'Pour convertir des millilitres en litres, divisez par 1000. Donc, 2500 ml = 2.5 l.',
      options: ['0.25 litres', '2.5 litres', '25 litres', '250 litres']
    },
    {
      text: 'Convertir 9 hectolitres en litres.',
      correctAnswer: '900 litres',
      explanation: 'Pour convertir des hectolitres en litres, multipliez par 100. Donc, 9 hl = 900 l.',
      options: ['90 litres', '900 litres', '9000 litres', '90000 litres']
    },
    {
      text: 'Convertir 6 décalitres en litres.',
      correctAnswer: '60 litres',
      explanation: 'Pour convertir des décalitres en litres, multipliez par 10. Donc, 6 dal = 60 l.',
      options: ['6 litres', '60 litres', '600 litres', '6000 litres']
    }
  ]
  
  ;


return (
    <div>
        <h3> Mesures : Les Mesures de Capacité </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap3;