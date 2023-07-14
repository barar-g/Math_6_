import React from 'react';
import QCMComponent from '../../QCMComponent';

const Mesurechap6 = () => {
const questions = [
    {
      text: 'Sur une ligne fermée contenant 5 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '5 intervalles',
      explanation: 'Sur une ligne fermée, le nombre d’intervalles est égal au nombre d’objets. Donc, il y a 5 intervalles.',
      options: ['4 intervalles', '5 intervalles', '6 intervalles', '7 intervalles']
    },
    {
      text: 'Sur une ligne ouverte avec un objet à chaque bout contenant 7 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '6 intervalles',
      explanation: 'Sur une ligne ouverte avec un objet à chaque bout, le nombre d’intervalles est égal au nombre d’objets moins un. Donc, il y a 6 intervalles.',
      options: ['5 intervalles', '6 intervalles', '7 intervalles', '8 intervalles']
    },
    {
      text: 'Sur une ligne ouverte sans objets aux 2 bouts contenant 4 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '5 intervalles',
      explanation: 'Sur une ligne ouverte sans objets aux 2 bouts, le nombre d’intervalles est égal au nombre d’objets plus un. Donc, il y a 5 intervalles.',
      options: ['3 intervalles', '4 intervalles', '5 intervalles', '6 intervalles']
    },
    {
      text: 'Sur une ligne ouverte avec un objet à un seul bout contenant 6 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '6 intervalles',
      explanation: 'Sur une ligne ouverte avec un objet à un seul bout, le nombre d’intervalles est égal au nombre d’objets. Donc, il y a 6 intervalles.',
      options: ['5 intervalles', '6 intervalles', '7 intervalles', '8 intervalles']
    },
    {
      text: 'Sur une ligne fermée contenant 10 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '10 intervalles',
      explanation: 'Sur une ligne fermée, le nombre d’intervalles est égal au nombre d’objets. Donc, il y a 10 intervalles.',
      options: ['9 intervalles', '10 intervalles', '11 intervalles', '12 intervalles']
    },
    {
      text: 'Sur une ligne ouverte avec un objet à chaque bout contenant 9 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '8 intervalles',
      explanation: 'Sur une ligne ouverte avec un objet à chaque bout, le nombre d’intervalles est égal au nombre d’objets moins un. Donc, il y a 8 intervalles.',
      options: ['7 intervalles', '8 intervalles', '9 intervalles', '10 intervalles']
    },
    {
      text: 'Sur une ligne ouverte sans objets aux 2 bouts contenant 7 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '8 intervalles',
      explanation: 'Sur une ligne ouverte sans objets aux 2 bouts, le nombre d’intervalles est égal au nombre d’objets plus un. Donc, il y a 8 intervalles.',
      options: ['6 intervalles', '7 intervalles', '8 intervalles', '9 intervalles']
    },
    {
      text: 'Sur une ligne ouverte avec un objet à un seul bout contenant 5 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '5 intervalles',
      explanation: 'Sur une ligne ouverte avec un objet à un seul bout, le nombre d’intervalles est égal au nombre d’objets. Donc, il y a 5 intervalles.',
      options: ['4 intervalles', '5 intervalles', '6 intervalles', '7 intervalles']
    },
    {
      text: 'Sur une ligne fermée contenant 8 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '8 intervalles',
      explanation: 'Sur une ligne fermée, le nombre d’intervalles est égal au nombre d’objets. Donc, il y a 8 intervalles.',
      options: ['7 intervalles', '8 intervalles', '9 intervalles', '10 intervalles']
    },
    {
      text: 'Sur une ligne ouverte avec un objet à chaque bout contenant 6 objets, combien y a-t-il d\'intervalles ?',
      correctAnswer: '5 intervalles',
      explanation: 'Sur une ligne ouverte avec un objet à chaque bout, le nombre d’intervalles est égal au nombre d’objets moins un. Donc, il y a 5 intervalles.',
      options: ['4 intervalles', '5 intervalles', '6 intervalles', '7 intervalles']
    }
  ]
  
;


return (
    <div>
        <h3> Mesures : Les intervalles   </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Mesurechap6;