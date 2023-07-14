import React from 'react';
import QCMComponent from '../../QCMComponent';

const Calculchap8 = () => {
const questions = [
    {
      text: 'Si vous conduisez à une vitesse moyenne de 60 km/h pendant 2 heures, quelle distance avez-vous parcourue?',
      correctAnswer: '120 km',
      explanation: 'Pour calculer la distance parcourue, multipliez la vitesse moyenne par le temps. Donc, 60 km/h * 2h = 120 km.',
      options: ['100 km', '120 km', '140 km', '160 km']
    },
    {
      text: 'Si vous conduisez à une vitesse moyenne de 80 km/h pendant 1.5 heures, quelle distance avez-vous parcourue?',
      correctAnswer: '120 km',
      explanation: 'Pour calculer la distance parcourue, multipliez la vitesse moyenne par le temps. Donc, 80 km/h * 1.5h = 120 km.',
      options: ['100 km', '120 km', '140 km', '160 km']
    },
    {
      text: 'Si vous parcourez 150 km à une vitesse moyenne de 50 km/h, combien de temps avez-vous passé en déplacement?',
      correctAnswer: '3 heures',
      explanation: 'Pour calculer le temps, divisez la distance par la vitesse moyenne. Donc, 150 km / 50 km/h = 3h.',
      options: ['2 heures', '3 heures', '4 heures', '5 heures']
    },
    {
      text: 'Si vous parcourez 180 km à une vitesse moyenne de 60 km/h, combien de temps avez-vous passé en déplacement?',
      correctAnswer: '3 heures',
      explanation: 'Pour calculer le temps, divisez la distance par la vitesse moyenne. Donc, 180 km / 60 km/h = 3h.',
      options: ['2 heures', '3 heures', '4 heures', '5 heures']
    },
    {
      text: 'Si vous conduisez à une vitesse moyenne de 100 km/h pendant 2.5 heures, quelle distance avez-vous parcourue?',
      correctAnswer: '250 km',
      explanation: 'Pour calculer la distance parcourue, multipliez la vitesse moyenne par le temps. Donc, 100 km/h * 2.5h = 250 km.',
      options: ['200 km', '250 km', '300 km', '350 km']
    },
    {
      text: 'Si vous parcourez 300 km à une vitesse moyenne de 75 km/h, combien de temps avez-vous passé en déplacement?',
      correctAnswer: '4 heures',
      explanation: 'Pour calculer le temps, divisez la distance par la vitesse moyenne. Donc, 300 km / 75 km/h = 4h.',
      options: ['3 heures', '4 heures', '5 heures', '6 heures']
    },
    {
      text: 'Si vous conduisez à une vitesse moyenne de 90 km/h pendant 3.5 heures, quelle distance avez-vous parcourue?',
      correctAnswer: '315 km',
      explanation: 'Pour calculer la distance parcourue, multipliez la vitesse moyenne par le temps. Donc, 90 km/h * 3.5h = 315 km.',
      options: ['280 km', '315 km', '350 km', '385 km']
    },
    {
      text: 'Si vous parcourez 250 km à une vitesse moyenne de 50 km/h, combien de temps avez-vous passé en déplacement?',
      correctAnswer: '5 heures',
      explanation: 'Pour calculer le temps, divisez la distance par la vitesse moyenne. Donc, 250 km / 50 km/h = 5h.',
      options: ['4 heures', '5 heures', '6 heures', '7 heures']
    },
    {
      text: 'Si vous conduisez à une vitesse moyenne de 110 km/h pendant 2 heures, quelle distance avez-vous parcourue?',
      correctAnswer: '220 km',
      explanation: 'Pour calculer la distance parcourue, multipliez la vitesse moyenne par le temps. Donc, 110 km/h * 2h = 220 km.',
      options: ['200 km', '220 km', '240 km', '260 km']
    },
    {
      text: 'Si vous parcourez 400 km à une vitesse moyenne de 80 km/h, combien de temps avez-vous passé en déplacement?',
      correctAnswer: '5 heures',
      explanation: 'Pour calculer le temps, divisez la distance par la vitesse moyenne. Donc, 400 km / 80 km/h = 5h.',
      options: ['4 heures', '5 heures', '6 heures', '7 heures']
    }
  ]
  ;


return (
    <div>
        <h3> Calcul : Prix de vente – Bénéfice ou Perte  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default Calculchap8;