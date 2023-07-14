import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap1 = () => {
const questions = [
    {
      text: 'Si le côté d\'un carré est de 4 cm, quelle est son aire?',
      correctAnswer: '16 cm²',
      explanation: 'L\'aire d\'un carré est calculée en multipliant le côté par lui-même. Donc, 4 cm * 4 cm = 16 cm².',
      options: ['8 cm²', '12 cm²', '16 cm²', '20 cm²']
    },
    {
      text: 'Si le côté d\'un carré est de 5 cm, quel est son périmètre?',
      correctAnswer: '20 cm',
      explanation: 'Le périmètre d\'un carré est calculé en multipliant le côté par 4. Donc, 5 cm * 4 = 20 cm.',
      options: ['15 cm', '20 cm', '25 cm', '30 cm']
    },
    {
      text: 'Si le périmètre d\'un carré est de 24 cm, quelle est la longueur de son côté?',
      correctAnswer: '6 cm',
      explanation: 'La longueur du côté d\'un carré est calculée en divisant le périmètre par 4. Donc, 24 cm / 4 = 6 cm.',
      options: ['4 cm', '5 cm', '6 cm', '7 cm']
    },
    {
      text: 'Si le côté d\'un carré est de 7 cm, quelle est son aire?',
      correctAnswer: '49 cm²',
      explanation: 'L\'aire d\'un carré est calculée en multipliant le côté par lui-même. Donc, 7 cm * 7 cm = 49 cm².',
      options: ['21 cm²', '35 cm²', '49 cm²', '63 cm²']
    },
    {
      text: 'Si le côté d\'un carré est de 8 cm, quel est son périmètre?',
      correctAnswer: '32 cm',
      explanation: 'Le périmètre d\'un carré est calculé en multipliant le côté par 4. Donc, 8 cm * 4 = 32 cm.',
      options: ['24 cm', '28 cm', '32 cm', '36 cm']
    },
    {
      text: 'Si le périmètre d\'un carré est de 36 cm, quelle est la longueur de son côté?',
      correctAnswer: '9 cm',
      explanation: 'La longueur du côté d\'un carré est calculée en divisant le périmètre par 4. Donc, 36 cm / 4 = 9 cm.',
      options: ['6 cm', '7 cm', '8 cm', '9 cm']
    },
    {
      text: 'Si le côté d\'un carré est de 10 cm, quelle est son aire?',
      correctAnswer: '100 cm²',
      explanation: 'L\'aire d\'un carré est calculée en multipliant le côté par lui-même. Donc, 10 cm * 10 cm = 100 cm².',
      options: ['40 cm²', '70 cm²', '100 cm²', '130 cm²']
    },
    {
      text: 'Si le côté d\'un carré est de 3 cm, quel est son périmètre?',
      correctAnswer: '12 cm',
      explanation: 'Le périmètre d\'un carré est calculé en multipliant le côté par 4. Donc, 3 cm * 4 = 12 cm.',
      options: ['9 cm', '12 cm', '15 cm', '18 cm']
    },
    {
      text: 'Si le périmètre d\'un carré est de 16 cm, quelle est la longueur de son côté?',
      correctAnswer: '4 cm',
      explanation: 'La longueur du côté d\'un carré est calculée en divisant le périmètre par 4. Donc, 16 cm / 4 = 4 cm.',
      options: ['2 cm', '3 cm', '4 cm', '5 cm']
    },
    {
      text: 'Si le côté d\'un carré est de 6 cm, quelle est son aire?',
      correctAnswer: '36 cm²',
      explanation: 'L\'aire d\'un carré est calculée en multipliant le côté par lui-même. Donc, 6 cm * 6 cm = 36 cm².',
      options: ['18 cm²', '24 cm²', '30 cm²', '36 cm²']
    }
  ]
  
;


return (
    <div>
        <h3> Géometrie : LE CARRE  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap1;