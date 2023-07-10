import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap2 = () => {
const questions = [
    {
        text: "Qu'appelle-t-on équilibre énergétique ?",
        correctAnswer: "C'est l'énergie apportée par les aliments quotidiens égale à l'énergie dépensée pendant la journée.",
        explanation: "",
        options: [
            "C'est l'énergie apportée par les aliments quotidiens égale à l'énergie dépensée pendant la journée.",
            "C'est l'énergie apportée par les aliments quotidiens supérieure à l'énergie dépensée pendant la journée.",
            "C'est l'énergie apportée par les aliments quotidiens inférieure à l'énergie dépensée pendant la journée.",
            "C'est l'énergie apportée par les aliments quotidiens égale à l'énergie stockée dans le corps."
        ]
    },
    {
        text: "Pourquoi le petit déjeuner est-il important ?",
        correctAnswer: "Parce que c'est le premier repas de la journée qui aide à bien commencer le travail.",
        explanation: "",
        options: [
            "Parce que c'est le premier repas de la journée qui aide à bien commencer le travail.",
            "Parce que c'est le repas le plus copieux de la journée.",
            "Parce que c'est le repas où il est recommandé de consommer le plus de sucre.",
            "Parce que c'est le repas où il est recommandé de consommer le moins de calories."
        ]
    },
    {
        text: "Qu'est-ce que la ration alimentaire ?",
        correctAnswer: "La quantité de nourriture dont le corps a besoin chaque jour. Elle varie avec l'âge, le sexe et le travail fourni.",
        explanation: "",
        options: [
            "La quantité de nourriture consommée lors d'un repas.",
            "La quantité de nourriture dont le corps a besoin chaque jour. Elle varie avec l'âge, le sexe et le travail fourni.",
            "La quantité de nourriture consommée pendant une semaine.",
            "La quantité de nourriture recommandée pour perdre du poids."
        ]
    },
    {
        text: "Cite les maladies liées à l'alimentation.",
        correctAnswer: "Le marasme est une maladie due à une sous-alimentation, le kwashiorkor est une maladie due à une malnutrition.",
        explanation: "",
        options: [
            "Le marasme est une maladie due à une sous-alimentation, le kwashiorkor est une maladie due à une malnutrition, le diabète c'est lorsqu'on mange trop de sucre.",
            "Le marasme est une maladie due à une suralimentation, le kwashiorkor est une maladie due à une malnutrition, le diabète c'est lorsqu'on mange trop de sucre.",
            "Le marasme est une maladie due à une sous-alimentation, le kwashiorkor est une maladie due à une suralimentation, le diabète c'est lorsqu'on mange trop de graisses.",
            "Le marasme est une maladie due à une sous-alimentation, le kwashiorkor est une maladie due à une malnutrition, le diabète c'est lorsqu'on mange trop de glucides."
        ]
    },
    {
        text: "Qu'est-ce que la sous-alimentation ?",
        correctAnswer: "Un apport énergétique insuffisant.",
        explanation: "",
        options: [
            "Un apport énergétique insuffisant.",
            "Un apport énergétique excessif.",
            "Un régime alimentaire équilibré.",
            "Une alimentation riche en vitamines et minéraux."
        ]
    },
    {
        text: "Pourquoi doit-on faire attention à une consommation riche en glucides et en lipides ?",
        correctAnswer: "Une alimentation riche en glucides ou en lipides peut entraîner l'obésité et provoquer des maladies cardiovasculaires.",
        explanation: "",
        options: [
            "Une alimentation riche en glucides ou en lipides peut entraîner l'obésité et provoquer des maladies cardiovasculaires.",
            "Une alimentation riche en glucides ou en lipides est essentielle pour maintenir un poids santé.",
            "Une alimentation riche en glucides ou en lipides favorise la perte de poids.",
            "Une alimentation riche en glucides ou en lipides n'a aucun effet sur la santé."
        ]
    },
  
    
    {
        text: "Quels sont les effets de l'équilibre énergétique positif ?",
        correctAnswer: "Un gain de poids.",
        explanation: "",
        options: [
            "Une perte de poids.",
            "Une augmentation de l'énergie.",
            "Un maintien du poids corporel.",
            "Un gain de poids."
        ]
    },
    {
        text: "Comment la ration alimentaire varie-t-elle ?",
        correctAnswer: "En fonction de l'âge, du sexe et du travail fourni.",
        explanation: "",
        options: [
            "En fonction de la taille du corps.",
            "En fonction de l'activité physique.",
            "En fonction de l'âge, du sexe et du travail fourni.",
            "Toutes les réponses ci-dessus."
        ]
    },
    {
        text: "Quelle est la maladie liée à une sous-alimentation sévère chez les enfants ?",
        correctAnswer: "Le marasme.",
        explanation: "",
        options: [
            "Le marasme.",
            "Le diabète.",
            "L'obésité.",
            "Le kwashiorkor."
        ]
    },
    {
        text: "Quel est le risque d'une alimentation riche en lipides ?",
        correctAnswer: "Les maladies cardiovasculaires.",
        explanation: "",
        options: [
            "Le diabète.",
            "L'obésité.",
            "Les maladies cardiovasculaires.",
            "Les carences nutritionnelles."
        ]
    },
    // Ajoutez les autres questions de la même manière
    
];


return (
    <div>
        <h3> CHAPITRE 2 : L’EQUILIBRE ENERGETIQUE </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap2;