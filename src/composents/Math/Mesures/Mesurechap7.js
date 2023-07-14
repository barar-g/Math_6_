import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap7 = () => {
const questions = [
    {
      text: 'Si la masse brute d\'un paquet est de 5 kg et que la tare est de 1 kg, quelle est la masse nette?',
      correctAnswer: '4 kg',
      explanation: 'La masse nette est la masse brute moins la tare. Donc, 5 kg - 1 kg = 4 kg.',
      options: ['1 kg', '4 kg', '5 kg', '6 kg']
    },
    {
      text: 'Si la masse nette d\'un paquet est de 3 kg et que la tare est de 2 kg, quelle est la masse brute?',
      correctAnswer: '5 kg',
      explanation: 'La masse brute est la masse nette plus la tare. Donc, 3 kg + 2 kg = 5 kg.',
      options: ['1 kg', '3 kg', '5 kg', '6 kg']
    },
    {
      text: 'Si la masse brute d\'un paquet est de 7 kg et que la masse nette est de 5 kg, quelle est la tare?',
      correctAnswer: '2 kg',
      explanation: 'La tare est la masse brute moins la masse nette. Donc, 7 kg - 5 kg = 2 kg.',
      options: ['2 kg', '3 kg', '5 kg', '7 kg']
    },
    {
      text: 'Si la masse nette d\'un objet est de 8 kg et que la tare est de 1 kg, quelle est la masse brute?',
      correctAnswer: '9 kg',
      explanation: 'La masse brute est la masse nette plus la tare. Donc, 8 kg + 1 kg = 9 kg.',
      options: ['7 kg', '8 kg', '9 kg', '10 kg']
    },
    {
      text: 'Si la masse brute d\'un objet est de 10 kg et que la masse nette est de 6 kg, quelle est la tare?',
      correctAnswer: '4 kg',
      explanation: 'La tare est la masse brute moins la masse nette. Donc, 10 kg - 6 kg = 4 kg.',
      options: ['2 kg', '4 kg', '6 kg', '8 kg']
    },
    {
      text: 'Si la masse brute d\'une bouteille est de 2 kg et que la tare est de 0.5 kg, quelle est la masse nette?',
      correctAnswer: '1.5 kg',
      explanation: 'La masse nette est la masse brute moins la tare. Donc, 2 kg - 0.5 kg = 1.5 kg.',
      options: ['0.5 kg', '1 kg', '1.5 kg', '2 kg']
    },
    {
      text: 'Si la masse nette d\'un sac est de 4 kg et que la tare est de 1 kg, quelle est la masse brute?',
      correctAnswer: '5 kg',
      explanation: 'La masse brute est la masse nette plus la tare. Donc, 4 kg + 1 kg = 5 kg.',
      options: ['3 kg', '4 kg', '5 kg', '6 kg']
    },
    {
      text: 'Si la masse brute d\'une boîte est de 3 kg et que la masse nette est de 2 kg, quelle est la tare?',
      correctAnswer: '1 kg',
      explanation: 'La tare est la masse brute moins la masse nette. Donc, 3 kg - 2 kg = 1 kg.',
      options: ['0 kg', '1 kg', '2 kg', '3 kg']
    },
    {
      text: 'Si la masse nette d\'un objet est de 7 kg et que la tare est de 2 kg, quelle est la masse brute?',
      correctAnswer: '9 kg',
      explanation: 'La masse brute est la masse nette plus la tare. Donc, 7 kg + 2 kg = 9 kg.',
      options: ['5 kg', '7 kg', '9 kg', '11 kg']
    },
    {
      text: 'Si la masse brute d\'un objet est de 6 kg et que la masse nette est de 4 kg, quelle est la tare?',
      correctAnswer: '2 kg',
      explanation: 'La tare est la masse brute moins la masse nette. Donc, 6 kg - 4 kg = 2 kg.',
      options: ['0 kg', '2 kg', '4 kg', '6 kg']
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

export default Mesurechap7;