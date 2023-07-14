import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap5 = () => {
const questions = [
    {
      text: 'Si Moussa peut peindre une surface de 2m² avec 7kg de peinture, combien de kg de peinture lui faut-il pour peindre 10m² de surface?',
      correctAnswer: '35 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 10m², nous devons multiplier la quantité de peinture utilisée pour peindre 2m² par 5 (car 10/2 = 5). Donc, 7kg * 5 = 35kg.',
      options: ['15 kg', '25 kg', '35 kg', '45 kg']
    },
    {
      text: 'Si Karim peut peindre une surface de 3m² avec 9kg de peinture, combien de kg de peinture lui faut-il pour peindre 15m² de surface?',
      correctAnswer: '45 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 15m², nous devons multiplier la quantité de peinture utilisée pour peindre 3m² par 5 (car 15/3 = 5). Donc, 9kg * 5 = 45kg.',
      options: ['25 kg', '35 kg', '45 kg', '55 kg']
    },
    {
      text: 'Si Amine peut peindre une surface de 5m² avec 15kg de peinture, combien de kg de peinture lui faut-il pour peindre 20m² de surface?',
      correctAnswer: '60 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 20m², nous devons multiplier la quantité de peinture utilisée pour peindre 5m² par 4 (car 20/5 = 4). Donc, 15kg * 4 = 60kg.',
      options: ['40 kg', '50 kg', '60 kg', '70 kg']
    },
    {
      text: 'Si Fatima peut peindre une surface de 4m² avec 12kg de peinture, combien de kg de peinture lui faut-il pour peindre 16m² de surface?',
      correctAnswer: '48 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 16m², nous devons multiplier la quantité de peinture utilisée pour peindre 4m² par 4 (car 16/4 = 4). Donc, 12kg * 4 = 48kg.',
      options: ['28 kg', '38 kg', '48 kg', '58 kg']
    },
    {
      text: 'Si Zineb peut peindre une surface de 3m² avec 6kg de peinture, combien de kg de peinture lui faut-il pour peindre 12m² de surface?',
      correctAnswer: '24 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 12m², nous devons multiplier la quantité de peinture utilisée pour peindre 3m² par 4 (car 12/3 = 4). Donc, 6kg * 4 = 24kg.',
      options: ['14 kg', '24 kg', '34 kg', '44 kg']
    },
    {
      text: 'Si Samir peut peindre une surface de 6m² avec 18kg de peinture, combien de kg de peinture lui faut-il pour peindre 18m² de surface?',
      correctAnswer: '54 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 18m², nous devons multiplier la quantité de peinture utilisée pour peindre 6m² par 3 (car 18/6 = 3). Donc, 18kg * 3 = 54kg.',
      options: ['44 kg', '54 kg', '64 kg', '74 kg']
    },
    {
      text: 'Si Nadia peut peindre une surface de 5m² avec 10kg de peinture, combien de kg de peinture lui faut-il pour peindre 25m² de surface?',
      correctAnswer: '50 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 25m², nous devons multiplier la quantité de peinture utilisée pour peindre 5m² par 5 (car 25/5 = 5). Donc, 10kg * 5 = 50kg.',
      options: ['40 kg', '50 kg', '60 kg', '70 kg']
    },
    {
      text: 'Si Karima peut peindre une surface de 8m² avec 24kg de peinture, combien de kg de peinture lui faut-il pour peindre 24m² de surface?',
      correctAnswer: '72 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 24m², nous devons multiplier la quantité de peinture utilisée pour peindre 8m² par 3 (car 24/8 = 3). Donc, 24kg * 3 = 72kg.',
      options: ['62 kg', '72 kg', '82 kg', '92 kg']
    },
    {
      text: 'Si Hicham peut peindre une surface de 7m² avec 21kg de peinture, combien de kg de peinture lui faut-il pour peindre 28m² de surface?',
      correctAnswer: '84 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 28m², nous devons multiplier la quantité de peinture utilisée pour peindre 7m² par 4 (car 28/7 = 4). Donc, 21kg * 4 = 84kg.',
      options: ['74 kg', '84 kg', '94 kg', '104 kg']
    },
    {
      text: 'Si Ilham peut peindre une surface de 9m² avec 27kg de peinture, combien de kg de peinture lui faut-il pour peindre 18m² de surface?',
      correctAnswer: '54 kg',
      explanation: 'Pour trouver la quantité de peinture nécessaire pour peindre une surface de 18m², nous devons multiplier la quantité de peinture utilisée pour peindre 9m² par 2 (car 18/9 = 2). Donc, 27kg * 2 = 54kg.',
      options: ['44 kg', '54 kg', '64 kg', '74 kg']
    }
  ]
  ;


return (
    <div>
        <h3> Calcul :  La proportionnalité </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap5;