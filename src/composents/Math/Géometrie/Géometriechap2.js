import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap2 = () => {
const questions = [
    {
      text: 'Si la longueur d\'un rectangle est de 6 cm et la largeur est de 4 cm, quelle est son aire?',
      correctAnswer: '24 cm²',
      explanation: 'L\'aire d\'un rectangle est calculée en multipliant la longueur par la largeur. Donc, 6 cm * 4 cm = 24 cm².',
      options: ['10 cm²', '16 cm²', '24 cm²', '28 cm²']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 7 cm et la largeur est de 3 cm, quel est son périmètre?',
      correctAnswer: '20 cm',
      explanation: 'Le périmètre d\'un rectangle est calculé en multipliant par 2 la somme de la longueur et de la largeur. Donc, 2 * (7 cm + 3 cm) = 20 cm.',
      options: ['10 cm', '15 cm', '20 cm', '25 cm']
    },
    {
      text: 'Si l\'aire d\'un rectangle est de 24 cm² et que la largeur est de 3 cm, quelle est la longueur?',
      correctAnswer: '8 cm',
      explanation: 'La longueur d\'un rectangle est calculée en divisant l\'aire par la largeur. Donc, 24 cm² / 3 cm = 8 cm.',
      options: ['5 cm', '6 cm', '7 cm', '8 cm']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 8 cm et la largeur est de 5 cm, quelle est son aire?',
      correctAnswer: '40 cm²',
      explanation: 'L\'aire d\'un rectangle est calculée en multipliant la longueur par la largeur. Donc, 8 cm * 5 cm = 40 cm².',
      options: ['20 cm²', '30 cm²', '40 cm²', '50 cm²']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 9 cm et la largeur est de 2 cm, quel est son périmètre?',
      correctAnswer: '22 cm',
      explanation: 'Le périmètre d\'un rectangle est calculé en multipliant par 2 la somme de la longueur et de la largeur. Donc, 2 * (9 cm + 2 cm) = 22 cm.',
      options: ['11 cm', '16 cm', '22 cm', '28 cm']
    },
    {
      text: 'Si l\'aire d\'un rectangle est de 35 cm² et que la largeur est de 5 cm, quelle est la longueur?',
      correctAnswer: '7 cm',
      explanation: 'La longueur d\'un rectangle est calculée en divisant l\'aire par la largeur. Donc, 35 cm² / 5 cm = 7 cm.',
      options: ['4 cm', '5 cm', '6 cm', '7 cm']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 10 cm et la largeur est de 6 cm, quelle est son aire?',
      correctAnswer: '60 cm²',
      explanation: 'L\'aire d\'un rectangle est calculée en multipliant la longueur par la largeur. Donc, 10 cm * 6 cm = 60 cm².',
      options: ['36 cm²', '48 cm²', '60 cm²', '72 cm²']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 3 cm et la largeur est de 2 cm, quel est son périmètre?',
      correctAnswer: '10 cm',
      explanation: 'Le périmètre d\'un rectangle est calculé en multipliant par 2 la somme de la longueur et de la largeur. Donc, 2 * (3 cm + 2 cm) = 10 cm.',
      options: ['5 cm', '7 cm', '9 cm', '10 cm']
    },
    {
      text: 'Si l\'aire d\'un rectangle est de 18 cm² et que la largeur est de 3 cm, quelle est la longueur?',
      correctAnswer: '6 cm',
      explanation: 'La longueur d\'un rectangle est calculée en divisant l\'aire par la largeur. Donc, 18 cm² / 3 cm = 6 cm.',
      options: ['3 cm', '4 cm', '5 cm', '6 cm']
    },
    {
      text: 'Si la longueur d\'un rectangle est de 5 cm et la largeur est de 4 cm, quelle est son aire?',
      correctAnswer: '20 cm²',
      explanation: 'L\'aire d\'un rectangle est calculée en multipliant la longueur par la largeur. Donc, 5 cm * 4 cm = 20 cm².',
      options: ['9 cm²', '15 cm²', '20 cm²', '25 cm²']
    }
  ]
  
;


return (
    <div>
        <h3> Géometrie : LE RECTANGLE  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap2;