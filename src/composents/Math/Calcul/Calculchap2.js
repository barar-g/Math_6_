import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap2 = () => {
const questions = [
    {
      text: 'Quelle est la représentation développée du nombre décimal 724,902?',
      correctAnswer: '700 + 20 + 4 + 9/10 + 0/100 + 2/1000',
      explanation: 'La représentation développée du nombre décimal 724,902 est 700 + 20 + 4 + 9/10 + 0/100 + 2/1000.',
      options: ['700 + 20 + 4 + 0.9 + 0.02 + 0.002', '700 + 20 + 4 + 9/10 + 0/100 + 2/1000', '724 + 9/10 + 2/100 + 0/1000', '724 + 0.9 + 0.02 + 0.002']
    },
    {
      text: 'Quelle est la partie entière du nombre 724,902?',
      correctAnswer: '724',
      explanation: 'La partie entière du nombre 724,902 est 724.',
      options: ['724', '902', '9', '2']
    },
    {
      text: 'Quelle est la partie décimale du nombre 724,902?',
      correctAnswer: '902',
      explanation: 'La partie décimale du nombre 724,902 est 902.',
      options: ['724', '902', '9', '2']
    },
    {
      text: 'Quel est le nombre de millièmes dans le nombre 724,902?',
      correctAnswer: '724902',
      explanation: 'Le nombre 724,902 contient 724902 millièmes.',
      options: ['724', '902', '724902', '902724']
    },
    {
      text: 'Quelle est la valeur de la chiffre 2 dans le nombre 724,902?',
      correctAnswer: '2 millièmes',
      explanation: 'Dans le nombre 724,902, le chiffre 2 représente 2 millièmes.',
      options: ['2 unités', '2 dizaines', '2 dixièmes', '2 millièmes']
    },
    {
      text: 'Quelle est la valeur de la chiffre 0 dans le nombre 724,902?',
      correctAnswer: '0 centième',
      explanation: 'Dans le nombre 724,902, le chiffre 0 représente 0 centième.',
      options: ['0 unité', '0 dizaine', '0 dixième', '0 centième']
    },
    {
      text: 'Quelle est la valeur de la chiffre 4 dans le nombre 724,902?',
      correctAnswer: '4 unités',
      explanation: 'Dans le nombre 724,902, le chiffre 4 représente 4 unités.',
      options: ['4 dizaines', '4 unités', '4 dixièmes', '4 centièmes']
    },
    {
      text: 'Quelle est la valeur de la chiffre 7 dans le nombre 724,902?',
      correctAnswer: '7 centaines',
      explanation: 'Dans le nombre 724,902, le chiffre 7 représente 7 centaines.',
      options: ['7 dizaines', '7 unités', '7 dixièmes', '7 centaines']
    },
    {
      text: 'Quelle est la valeur de la chiffre 9 dans le nombre 724,902?',
      correctAnswer: '9 dixièmes',
      explanation: 'Dans le nombre 724,902, le chiffre 9 représente 9 dixièmes.',
      options: ['9 dizaines', '9 unités', '9 dixièmes', '9 centaines']
    },
    {
      text: 'Quel est le nombre de dixièmes dans le nombre 724,902?',
      correctAnswer: '9',
      explanation: 'Le nombre 724,902 contient 9 dixièmes.',
      options: ['7', '2', '4', '9']
    }
  ]
  ;


return (
    <div>
        <h3> Calcul : Les nombres décimaux  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap2;