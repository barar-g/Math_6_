import React from 'react';
import QCMComponent from '../../QCMComponent';

const Géometriechap5 = () => {
const questions = [
    {
      text: 'Quelle est la caractéristique principale des côtés opposés d\'un parallélogramme?',
      correctAnswer: 'Ils sont égaux et parallèles',
      explanation: 'Dans un parallélogramme, les côtés opposés sont égaux et parallèles.',
      options: ['Ils sont égaux', 'Ils sont parallèles', 'Ils sont perpendiculaires', 'Ils sont égaux et parallèles']
    },
    {
      text: 'Comment calcule-t-on l\'aire d\'un parallélogramme?',
      correctAnswer: 'Base x hauteur',
      explanation: 'L\'aire d\'un parallélogramme est calculée en multipliant la base par la hauteur.',
      options: ['Base x hauteur', 'Côté x côté', 'Base x Base', 'Côté + hauteur']
    },
    {
      text: 'Comment calcule-t-on la hauteur d\'un parallélogramme si on connaît l\'aire et la base?',
      correctAnswer: 'Aire / base',
      explanation: 'La hauteur d\'un parallélogramme est calculée en divisant l\'aire par la base.',
      options: ['Aire x base', 'Aire / base', 'Aire + base', 'Aire - base']
    },
    {
      text: 'Quel quadrilatère a deux côtés opposés parallèles?',
      correctAnswer: 'Trapèze',
      explanation: 'Un trapèze est un quadrilatère qui a deux côtés opposés parallèles.',
      options: ['Rectangle', 'Carré', 'Trapèze', 'Losange']
    },
    {
      text: 'Comment calcule-t-on l\'aire d\'un trapèze?',
      correctAnswer: '(grande base + petite base) x hauteur / 2',
      explanation: 'L\'aire d\'un trapèze est calculée en ajoutant la grande base et la petite base, en multipliant par la hauteur, et en divisant par 2.',
      options: ['grande base x petite base', '(grande base + petite base) x hauteur / 2', 'grande base x hauteur', 'petite base x hauteur']
    },
    {
      text: 'Comment calcule-t-on la hauteur d\'un trapèze si on connaît l\'aire et la somme des bases?',
      correctAnswer: '2 x Aire / (somme des bases)',
      explanation: 'La hauteur d\'un trapèze est calculée en multipliant l\'aire par 2 et en divisant par la somme des bases.',
      options: ['2 x Aire / (somme des bases)', 'Aire / (somme des bases)', '(somme des bases) / Aire', 'Aire x (somme des bases)']
    },
    {
      text: 'Les diagonales d\'un parallélogramme sont toujours égales.',
      correctAnswer: 'Vrai',
      explanation: 'Dans un parallélogramme, les diagonales sont égales.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Les côtés opposés d\'un trapèze sont toujours égaux.',
      correctAnswer: 'Faux',
      explanation: 'Dans un trapèze, les côtés opposés ne sont pas nécessairement égaux.',
      options: ['Vrai', 'Faux']
    },
    {
      text: 'Un parallélogramme a combien de côtés parallèles?',
      correctAnswer: '4',
      explanation: 'Un parallélogramme a quatre côtés parallèles.',
      options: ['2', '3', '4', '5']
    },
    {
      text: 'Un trapèze a combien de côtés parallèles?',
      correctAnswer: '2',
      explanation: 'Un trapèze a deux côtés parallèles.',
      options: ['1', '2', '3', '4']
    }
  ]
  
  
;


return (
    <div>
        <h3> Géometrie : LE PARALLELOGRAMME  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Géometriechap5;