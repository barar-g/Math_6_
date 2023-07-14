import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap4 = () => {
const questions = [
    {
      text: 'Si Sidi et Moussa possèdent ensemble 550 UM et que Sidi a 210 UM de plus que Moussa, combien Moussa a-t-il?',
      correctAnswer: '170 UM',
      explanation: 'Pour déterminer combien a Moussa, nous soustrayons la différence des sommes totales et divisons par 2. 550 UM - 210 UM = 340 UM, 340 UM ÷ 2 = 170 UM.',
      options: ['170 UM', '180 UM', '190 UM', '200 UM']
    },
    {
      text: 'Si un collier et une bague coûtent ensemble 8800 UM et que le collier vaut 3 fois le prix de la bague, combien coûte la bague?',
      correctAnswer: '2200 UM',
      explanation: 'Pour déterminer le prix de la bague, nous divisons le prix total par le nombre total de parts (4 dans ce cas, puisque le collier vaut 3 parts et la bague 1 part). 8800 UM ÷ 4 = 2200 UM.',
      options: ['2100 UM', '2200 UM', '2300 UM', '2400 UM']
    },
    {
      text: 'Si Abdallahi et Moctar se partagent 2500 UM et qu\'Abdallahi reçoit les 2/3 de la part de Moctar, combien Abdallahi reçoit-il?',
      correctAnswer: '1000 UM',
      explanation: 'Pour déterminer la part d\'Abdallahi, nous multiplions le total par la fraction qui représente sa part. 2500 UM * 2/5 = 1000 UM.',
      options: ['900 UM', '1000 UM', '1100 UM', '1200 UM']
    },
    {
      text: 'Si Ali et Karim ont ensemble 400 UM et que Ali a 120 UM de plus que Karim, combien Karim a-t-il?',
      correctAnswer: '140 UM',
      explanation: 'Pour déterminer combien a Karim, nous soustrayons la différence des sommes totales et divisons par 2. 400 UM - 120 UM = 280 UM, 280 UM ÷ 2 = 140 UM.',
      options: ['130 UM', '140 UM', '150 UM', '160 UM']
    },
    {
      text: 'Si une montre et un bracelet coûtent ensemble 9600 UM et que la montre vaut 4 fois le prix du bracelet, combien coûte le bracelet?',
      correctAnswer: '1920 UM',
      explanation: 'Pour déterminer le prix du bracelet, nous divisons le prix total par le nombre total de parts (5 dans ce cas, puisque la montre vaut 4 parts et le bracelet 1 part). 9600 UM ÷ 5 = 1920 UM.',
      options: ['1820 UM', '1920 UM', '2020 UM', '2120 UM']
    },
    {
      text: 'Si Aicha et Fatima se partagent 3000 UM et qu\'Aicha reçoit les 3/4 de la part de Fatima, combien Aicha reçoit-elle?',
      correctAnswer: '1200 UM',
      explanation: 'Pour déterminer la part d\'Aicha, nous multiplions le total par la fraction qui représente sa part. 3000 UM * 3/7 = 1200 UM.',
      options: ['1100 UM', '1200 UM', '1300 UM', '1400 UM']
    },
    {
      text: 'Si Hamid et Sami ont ensemble 600 UM et que Hamid a 150 UM de plus que Sami, combien Sami a-t-il?',
      correctAnswer: '225 UM',
      explanation: 'Pour déterminer combien a Sami, nous soustrayons la différence des sommes totales et divisons par 2. 600 UM - 150 UM = 450 UM, 450 UM ÷ 2 = 225 UM.',
      options: ['215 UM', '225 UM', '235 UM', '245 UM']
    },
    {
      text: 'Si une bague et un collier coûtent ensemble 10800 UM et que la bague vaut 5 fois le prix du collier, combien coûte le collier?',
      correctAnswer: '1800 UM',
      explanation: 'Pour déterminer le prix du collier, nous divisons le prix total par le nombre total de parts (6 dans ce cas, puisque la bague vaut 5 parts et le collier 1 part). 10800 UM ÷ 6 = 1800 UM.',
      options: ['1700 UM', '1800 UM', '1900 UM', '2000 UM']
    },
    {
      text: 'Si Fatima et Zahra se partagent 3500 UM et que Fatima reçoit les 2/5 de la part de Zahra, combien Fatima reçoit-elle?',
      correctAnswer: '1400 UM',
      explanation: 'Pour déterminer la part de Fatima, nous multiplions le total par la fraction qui représente sa part. 3500 UM * 2/7 = 1400 UM.',
      options: ['1300 UM', '1400 UM', '1500 UM', '1600 UM']
    },
    {
      text: 'Si Ahmed et Omar ont ensemble 700 UM et que Ahmed a 200 UM de plus que Omar, combien Omar a-t-il?',
      correctAnswer: '250 UM',
      explanation: 'Pour déterminer combien a Omar, nous soustrayons la différence des sommes totales et divisons par 2. 700 UM - 200 UM = 500 UM, 500 UM ÷ 2 = 250 UM.',
      options: ['240 UM', '250 UM', '260 UM', '270 UM']
    }
  ]
  
      
  
  ;


return (
    <div>
        <h3> Calcul :Partages inégaux </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap4;