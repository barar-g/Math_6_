import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap3 = () => {
const questions = [
    {
      text: 'Si la base d\'un triangle est de 6 cm et la hauteur est de 4 cm, quelle est son aire?',
      correctAnswer: '12 cm²',
      explanation: 'L\'aire d\'un triangle est calculée en multipliant la base par la hauteur et en divisant par 2. Donc, (6 cm * 4 cm) / 2 = 12 cm².',
      options: ['10 cm²', '12 cm²', '14 cm²', '16 cm²']
    },
    {
      text: 'Si l\'aire d\'un triangle est de 20 cm² et que la hauteur est de 5 cm, quelle est la longueur de la base?',
      correctAnswer: '8 cm',
      explanation: 'La base d\'un triangle est calculée en multipliant l\'aire par 2 et en divisant par la hauteur. Donc, (20 cm² * 2) / 5 cm = 8 cm.',
      options: ['6 cm', '7 cm', '8 cm', '9 cm']
    },
    {
      text: 'Si la base d\'un triangle est de 7 cm et la hauteur est de 3 cm, quelle est son aire?',
      correctAnswer: '10.5 cm²',
      explanation: 'L\'aire d\'un triangle est calculée en multipliant la base par la hauteur et en divisant par 2. Donc, (7 cm * 3 cm) / 2 = 10.5 cm².',
      options: ['9 cm²', '10.5 cm²', '12 cm²', '13.5 cm²']
    },
    {
      text: 'Si l\'aire d\'un triangle est de 30 cm² et que la base est de 6 cm, quelle est la hauteur?',
      correctAnswer: '10 cm',
      explanation: 'La hauteur d\'un triangle est calculée en multipliant l\'aire par 2 et en divisant par la base. Donc, (30 cm² * 2) / 6 cm = 10 cm.',
      options: ['7 cm', '8 cm', '9 cm', '10 cm']
    },
    {
      text: 'Si la base d\'un triangle est de 8 cm et la hauteur est de 5 cm, quelle est son aire?',
      correctAnswer: '20 cm²',
      explanation: 'L\'aire d\'un triangle est calculée en multipliant la base par la hauteur et en divisant par 2. Donc, (8 cm * 5 cm) / 2 = 20 cm².',
      options: ['15 cm²', '20 cm²', '25 cm²', '30 cm²']
    },
    {
      text: 'Si l\'aire d\'un triangle est de 42 cm² et que la hauteur est de 7 cm, quelle est la longueur de la base?',
      correctAnswer: '12 cm',
      explanation: 'La base d\'un triangle est calculée en multipliant l\'aire par 2 et en divisant par la hauteur. Donc, (42 cm² * 2) / 7 cm = 12 cm.',
      options: ['10 cm', '11 cm', '12 cm', '13 cm']
    },
    {
      text: 'Si la base d\'un triangle est de 10 cm et la hauteur est de 6 cm, quelle est son aire?',
      correctAnswer: '30 cm²',
      explanation: 'L\'aire d\'un triangle est calculée en multipliant la base par la hauteur et en divisant par 2. Donc, (10 cm * 6 cm) / 2 = 30 cm².',
      options: ['24 cm²', '28 cm²', '30 cm²', '34 cm²']
    },
    {
      text: 'Si l\'aire d\'un triangle est de 48 cm² et que la base est de 8 cm, quelle est la hauteur?',
      correctAnswer: '12 cm',
      explanation: 'La hauteur d\'un triangle est calculée en multipliant l\'aire par 2 et en divisant par la base. Donc, (48 cm² * 2) / 8 cm = 12 cm.',
      options: ['9 cm', '10 cm', '11 cm', '12 cm']
    },
    {
      text: 'Si la base d\'un triangle est de 9 cm et la hauteur est de 4 cm, quelle est son aire?',
      correctAnswer: '18 cm²',
      explanation: 'L\'aire d\'un triangle est calculée en multipliant la base par la hauteur et en divisant par 2. Donc, (9 cm * 4 cm) / 2 = 18 cm².',
      options: ['13 cm²', '16 cm²', '18 cm²', '20 cm²']
    },
    {
      text: 'Si l\'aire d\'un triangle est de 60 cm² et que la hauteur est de 10 cm, quelle est la longueur de la base?',
      correctAnswer: '12 cm',
      explanation: 'La base d\'un triangle est calculée en multipliant l\'aire par 2 et en divisant par la hauteur. Donc, (60 cm² * 2) / 10 cm = 12 cm.',
      options: ['10 cm', '11 cm', '12 cm', '13 cm']
    },
    
        {
          text: 'Quel type de triangle a un angle droit?',
          correctAnswer: 'Triangle rectangle',
          explanation: 'Un triangle rectangle est un triangle qui a un angle droit.',
          options: ['Triangle isocèle', 'Triangle rectangle', 'Triangle équilatéral', 'Triangle quelconque']
        },
        {
          text: 'Quel type de triangle a deux côtés égaux?',
          correctAnswer: 'Triangle isocèle',
          explanation: 'Un triangle isocèle est un triangle qui a deux côtés égaux.',
          options: ['Triangle isocèle', 'Triangle rectangle', 'Triangle équilatéral', 'Triangle quelconque']
        },
        {
          text: 'Quel type de triangle a ses trois côtés égaux?',
          correctAnswer: 'Triangle équilatéral',
          explanation: 'Un triangle équilatéral est un triangle qui a ses trois côtés égaux.',
          options: ['Triangle isocèle', 'Triangle rectangle', 'Triangle équilatéral', 'Triangle quelconque']
        },
        {
          text: 'Quel type de triangle n’a pas de propriétés particulières?',
          correctAnswer: 'Triangle quelconque',
          explanation: 'Un triangle quelconque est un triangle qui n’a pas de propriétés particulières.',
          options: ['Triangle isocèle', 'Triangle rectangle', 'Triangle équilatéral', 'Triangle quelconque']
        },
        {
          text: 'Quelle est la perpendiculaire abaissée du sommet au côté opposé d\'un triangle?',
          correctAnswer: 'Hauteur',
          explanation: 'La hauteur d\'un triangle est la perpendiculaire abaissée du sommet au côté opposé.',
          options: ['Côté', 'Base', 'Hauteur', 'Hypoténuse']
        },
        {
          text: 'Un triangle a combien de côtés?',
          correctAnswer: '3',
          explanation: 'Un triangle a trois côtés.',
          options: ['2', '3', '4', '5']
        },
        {
          text: 'Un triangle a combien d\'angles?',
          correctAnswer: '3',
          explanation: 'Un triangle a trois angles.',
          options: ['2', '3', '4', '5']
        },
        {
          text: 'Un triangle a combien de sommets?',
          correctAnswer: '3',
          explanation: 'Un triangle a trois sommets.',
          options: ['2', '3', '4', '5']
        },
        {
          text: 'Dans un triangle rectangle, quel est le côté opposé à l\'angle droit?',
          correctAnswer: 'Hypoténuse',
          explanation: 'Dans un triangle rectangle, l\'hypoténuse est le côté opposé à l\'angle droit.',
          options: ['Base', 'Hauteur', 'Hypoténuse', 'Aucun des trois']
        },
        {
          text: 'Dans un triangle isocèle, quels sont les angles qui sont égaux?',
          correctAnswer: 'Les angles à la base',
          explanation: 'Dans un triangle isocèle, les angles à la base sont égaux.',
          options: ['Les angles à la base', 'L\'angle au sommet et un angle à la base', 'Tous les angles', 'Aucun des angles']
        }
      
      
  ]
  
  
;


return (
    <div>
        <h3> Géometrie : LE RTIANGLE</h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap3;