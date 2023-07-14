import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap4 = () => {
const questions = [
    {
      text: 'Quel type de quadrilatère a tous les côtés de la même longueur?',
      correctAnswer: 'Losange',
      explanation: 'Un losange est un quadrilatère dont les quatre côtés ont la même longueur.',
      options: ['Rectangle', 'Carré', 'Trapèze', 'Losange']
    },
    {
      text: 'Comment sont les diagonales d\'un losange?',
      correctAnswer: 'Elles sont perpendiculaires',
      explanation: 'Dans un losange, les diagonales sont perpendiculaires.',
      options: ['Elles sont parallèles', 'Elles sont perpendiculaires', 'Elles sont obliques', 'Elles sont congruentes']
    },
    {
      text: 'Comment calcule-t-on l\'aire d\'un losange?',
      correctAnswer: 'Grande Diagonale x petite diagonale / 2',
      explanation: 'L\'aire d\'un losange est calculée en multipliant la grande diagonale par la petite diagonale et en divisant par 2.',
      options: ['Côté x Côté', 'Base x Hauteur', 'Grande Diagonale x petite diagonale / 2', 'Côté x Diagonale']
    },
    {
      text: 'Comment calcule-t-on la grande diagonale d\'un losange si on connaît l\'aire et la petite diagonale?',
      correctAnswer: 'Aire x 2 / petite diagonale',
      explanation: 'La grande diagonale d\'un losange est calculée en multipliant l\'aire par 2 et en divisant par la petite diagonale.',
      options: ['Aire x 2 / petite diagonale', 'Aire / petite diagonale', 'Aire x petite diagonale / 2', 'Aire + petite diagonale']
    },
    {
      text: 'Comment calcule-t-on la petite diagonale d\'un losange si on connaît l\'aire et la grande diagonale?',
      correctAnswer: 'Aire x 2 / Grande Diagonale',
      explanation: 'La petite diagonale d\'un losange est calculée en multipliant l\'aire par 2 et en divisant par la grande diagonale.',
      options: ['Aire x 2 / Grande Diagonale', 'Aire / Grande Diagonale', 'Aire x Grande Diagonale / 2', 'Aire + Grande Diagonale']
    },
    {
      text: 'Un losange a combien de côtés?',
      correctAnswer: '4',
      explanation: 'Un losange, comme tous les quadrilatères, a quatre côtés.',
      options: ['2', '3', '4', '5']
    },
    {
      text: 'Un losange a combien de diagonales?',
      correctAnswer: '2',
      explanation: 'Un losange, comme tous les quadrilatères, a deux diagonales.',
      options: ['1', '2', '3', '4']
    },
    {
      text: 'Tous les losanges sont des carrés.',
      correctAnswer: 'Faux',
      explanation: 'Même si tous les carrés sont des losanges (car les quatre côtés sont de la même longueur), tous les losanges ne sont pas des carrés car ils n\'ont pas nécessairement des angles droits.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Les diagonales d\'un losange sont toujours de la même longueur.',
      correctAnswer: 'Faux',
      explanation: 'Dans un losange, les diagonales ne sont pas nécessairement de la même longueur. Cette propriété est vraie pour le carré, qui est un type particulier de losange.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Les angles opposés d\'un losange sont égaux.',
      correctAnswer: 'Vrai',
      explanation: 'Dans un losange, les angles opposés sont égaux.',
      options: ['Vrai', 'Faux']
    }
  ]
  
  
  
;


return (
    <div>
        <h3> Géometrie : LE LOSANGE  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap4;