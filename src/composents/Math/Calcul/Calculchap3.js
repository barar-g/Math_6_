import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap3 = () => {
const questions = [
    {
      text: 'Quelle est le résultat de l\'addition 2/5 + 7/5?',
      correctAnswer: '9/5',
      explanation: 'Les fractions ont le même dénominateur, donc on ajoute simplement les numérateurs. 2/5 + 7/5 = (2+7)/5 = 9/5.',
      options: ['9/10', '9/5', '14/5', '14/10']
    },
    {
      text: 'Quelle est le résultat de la soustraction 12/7 - 9/7?',
      correctAnswer: '3/7',
      explanation: 'Les fractions ont le même dénominateur, donc on soustrait simplement les numérateurs. 12/7 - 9/7 = (12-9)/7 = 3/7.',
      options: ['3/14', '3/7', '21/7', '21/14']
    },
    {
      text: 'Quelle est le résultat de l\'addition 2/3 + 5/4?',
      correctAnswer: '23/12',
      explanation: 'Pour ajouter des fractions avec des dénominateurs différents, vous devez d\'abord trouver un dénominateur commun. Ici, c\'est 12. Ensuite, vous convertissez chaque fraction en une fraction équivalente avec ce dénominateur, puis vous ajoutez les numérateurs. 2/3 + 5/4 = 8/12 + 15/12 = 23/12.',
      options: ['7/7', '23/12', '10/7', '15/7']
    },
    
        {
          text: 'Quel est le résultat de la multiplication 2/5 * 3/4?',
          correctAnswer: '6/20',
          explanation: 'Pour multiplier des fractions, multipliez simplement les numérateurs entre eux et les dénominateurs entre eux. 2/5 * 3/4 = (2*3)/(5*4) = 6/20, qui peut être simplifié à 3/10.',
          options: ['5/20', '6/20', '7/20', '8/20']
        },
        {
          text: 'Quel est le résultat de la division 3/4 ÷ 2/3?',
          correctAnswer: '9/8',
          explanation: 'Pour diviser des fractions, multipliez la première fraction par l\'inverse de la seconde. 3/4 ÷ 2/3 = 3/4 * 3/2 = (3*3)/(4*2) = 9/8.',
          options: ['6/7', '9/8', '12/8', '15/8']
        },
        {
          text: 'Quel est le résultat de la multiplication 1/2 * 3/4?',
          correctAnswer: '3/8',
          explanation: 'Pour multiplier des fractions, multipliez simplement les numérateurs entre eux et les dénominateurs entre eux. 1/2 * 3/4 = (1*3)/(2*4) = 3/8.',
          options: ['1/8', '2/8', '3/8', '4/8']
        },
        {
          text: 'Quel est le résultat de la division 5/6 ÷ 3/4?',
          correctAnswer: '20/18',
          explanation: 'Pour diviser des fractions, multipliez la première fraction par l\'inverse de la seconde. 5/6 ÷ 3/4 = 5/6 * 4/3 = (5*4)/(6*3) = 20/18, qui peut être simplifié à 10/9.',
          options: ['18/20', '20/18', '22/18', '24/18']
        },
        {
          text: 'Quel est le résultat de la multiplication 2/3 * 4/5?',
          correctAnswer: '8/15',
          explanation: 'Pour multiplier des fractions, multipliez simplement les numérateurs entre eux et les dénominateurs entre eux. 2/3 * 4/5 = (2*4)/(3*5) = 8/15.',
          options: ['6/15', '8/15', '10/15', '12/15']
        },
        {
          text: 'Quel est le résultat de la division 7/8 ÷ 2/3?',
          correctAnswer: '21/16',
          explanation: 'Pour diviser des fractions, multipliez la première fraction par l\'inverse de la seconde. 7/8 ÷ 2/3 = 7/8 * 3/2 = (7*3)/(8*2) = 21/16.',
          options: ['19/16', '21/16', '23/16', '25/16']
        },
        {
          text: 'Quel est le résultat de la multiplication 1/3 * 2/4?',
          correctAnswer: '2/12',
          explanation: 'Pour multiplier des fractions, multipliez simplement les numérateurs entre eux et les dénominateurs entre eux. 1/3 * 2/4 = (1*2)/(3*4) = 2/12, qui peut être simplifié à 1/6.',
          options: ['1/12', '2/12', '3/12', '4/12']
        },
        {
          text: 'Quel est le résultat de la division 3/4 ÷ 1/2?',
          correctAnswer: '6/4',
          explanation: 'Pour diviser des fractions, multipliez la première fraction par l\'inverse de la seconde. 3/4 ÷ 1/2 = 3/4 * 2/1 = (3*2)/(4*1) = 6/4, qui peut être simplifié à 1.5.',
          options: ['4/6', '5/6', '6/4', '7/4']
        },
        {
          text: 'Quel est le résultat de la multiplication 4/5 * 3/4?',
          correctAnswer: '12/20',
          explanation: 'Pour multiplier des fractions, multipliez simplement les numérateurs entre eux et les dénominateurs entre eux. 4/5 * 3/4 = (4*3)/(5*4) = 12/20, qui peut être simplifié à 3/5.',
          options: ['10/20', '12/20', '14/20', '16/20']
        },
        {
          text: 'Quel est le résultat de la division 5/6 ÷ 2/3?',
          correctAnswer: '15/12',
          explanation: 'Pour diviser des fractions, multipliez la première fraction par l\'inverse de la seconde. 5/6 ÷ 2/3 = 5/6 * 3/2 = (5*3)/(6*2) = 15/12, qui peut être simplifié à 1.25.',
          options: ['12/15', '13/15', '14/15', '15/12']
        }
    ]
      
  
  ;


return (
    <div>
        <h3> Calcul : Les fractions
  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap3;