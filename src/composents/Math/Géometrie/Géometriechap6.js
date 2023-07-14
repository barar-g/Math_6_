import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap6 = () => {
const questions = [
    {
      text: 'Comment calcule-t-on le diamètre d\'un cercle à partir du rayon?',
      correctAnswer: 'Rayon x 2',
      explanation: 'Le diamètre d\'un cercle est le double du rayon.',
      options: ['Rayon x 2', 'Rayon / 2', 'Rayon + 2', 'Rayon - 2']
    },
    {
      text: 'Comment calcule-t-on le périmètre d\'un cercle?',
      correctAnswer: 'Diamètre x π',
      explanation: 'Le périmètre d\'un cercle est calculé en multipliant le diamètre par pi (π).',
      options: ['Diamètre x π', 'Rayon x π', 'Diamètre / π', 'Rayon / π']
    },
    {
      text: 'Comment calcule-t-on la surface d\'un cercle?',
      correctAnswer: 'Rayon x rayon x π',
      explanation: 'La surface d\'un cercle est calculée en multipliant le carré du rayon par pi (π).',
      options: ['Rayon x rayon x π', 'Diamètre x diamètre x π', 'Rayon x π', 'Diamètre x π']
    },
    {
      text: 'Comment calcule-t-on le volume d\'un pavé droit?',
      correctAnswer: 'Longueur x largeur x hauteur',
      explanation: 'Le volume d\'un pavé droit est calculé en multipliant la longueur, la largeur et la hauteur.',
      options: ['Longueur x largeur x hauteur', 'Longueur x largeur', 'Longueur x hauteur', 'Largeur x hauteur']
    },
    {
      text: 'Comment calcule-t-on le volume d\'un cube?',
      correctAnswer: 'a x a x a ou a³',
      explanation: 'Le volume d\'un cube est calculé en multipliant la longueur du côté par elle-même trois fois (ou en élevant la longueur du côté à la puissance 3).',
      options: ['a x a x a ou a³', 'a x a', 'a x 2', 'a x 3']
    },
    {
      text: 'Le diamètre d\'un cercle passe-t-il par le centre du cercle?',
      correctAnswer: 'Vrai',
      explanation: 'Le diamètre d\'un cercle est une ligne qui passe par le centre du cercle et relie deux points sur la circonférence du cercle.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Un pavé droit a combien de faces?',
      correctAnswer: '6',
      explanation: 'Un pavé droit a six faces.',
      options: ['4', '5', '6', '8']
    },
    {
      text: 'Un cube a-t-il les mêmes dimensions pour la longueur, la largeur et la hauteur?',
      correctAnswer: 'Vrai',
      explanation: 'Un cube a des dimensions égales pour la longueur, la largeur et la hauteur.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Quelle est la relation entre le rayon et le diamètre d\'un cercle?',
      correctAnswer: 'Le diamètre est le double du rayon',
      explanation: 'Dans un cercle, le diamètre est toujours le double du rayon.',
      options: ['Le diamètre est le double du rayon', 'Le rayon est le double du diamètre', 'Le diamètre est la moitié du rayon', 'Il n\'y a pas de relation spécifique']
    },
    {
      text: 'Les faces d\'un cube sont toutes carrées.',
      correctAnswer: 'Vrai',
      explanation: 'Dans un cube, toutes les faces sont carrées.',
      options: ['Vrai', 'Faux']
    }
  ]
  
  
;


return (
    <div>
        <h3>Géometrie : LE CERCLE </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap6;