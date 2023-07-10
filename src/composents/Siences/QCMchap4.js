import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap4 = () => {
const questions = [
    {
        text: "Qu'est-ce que la pollution ?",
        correctAnswer: "La dégradation du milieu naturel par des produits et déchets toxiques.",
        explanation: "La pollution se réfère à l'introduction de contaminants dans l'environnement naturel qui causent des changements indésirables. Elle peut être de différentes formes, comme la pollution de l'air, de l'eau, du sol, lumineuse, sonore, thermique, plastique et radioactive.",
        options: [
            "La présence d'animaux sauvages dans les zones urbaines.",
            "La contamination de l'eau potable.",
            "Le développement de nouvelles espèces végétales.",
            "La dégradation du milieu naturel par des produits et déchets toxiques."
        ]
    },
    {
        text: "Qu'est-ce qu'une décharge sauvage ?",
        correctAnswer: "L'entassement des ordures et des déchets à l'air libre.",
        explanation: "Une décharge sauvage est un lieu où les déchets sont déposés illégalement sans autorisation, souvent dans des endroits naturels. C'est une forme grave de pollution qui peut avoir des conséquences désastreuses pour l'environnement et la santé publique.",
        options: [
            "Un site protégé de la faune et de la flore.",
            "Un endroit où les déchets sont triés et recyclés.",
            "Un espace réservé à la culture de légumes.",
            "L'entassement des ordures et des déchets à l'air libre."
        ]
    },
    {
        text: "Quelles sont les causes de la pollution ?",
        correctAnswer: "Ordures et déchets, fumées des voitures et des usines, cadavres des animaux, eaux usées, vents et poussières.",
        explanation: "La pollution est causée par divers facteurs. Les déchets solides non décomposables, les émissions de gaz de véhicules et d'usines, les déchets animaux, les eaux usées non traitées et la poussière sont quelques-uns des principaux contributeurs à la pollution.",
        options: [
            "Les catastrophes naturelles et les séismes.",
            "Les émissions de gaz naturels.",
            "La surconsommation d'énergie.",
            "Ordures et déchets, fumées des voitures et des usines, cadavres des animaux, eaux usées, vents et poussières."
        ]
    },
    {
        text: "Quelles sont les conséquences de la pollution ?",
        correctAnswer: "Dégradation et destruction du paysage, mauvaises odeurs, propagation d'insectes et de maladies.",
        explanation: "La pollution a des impacts significatifs sur l'environnement et la santé humaine. Elle peut entraîner la dégradation des habitats naturels, la perte de la biodiversité, l'émission d'odeurs désagréables, l'augmentation de la population d'insectes vecteurs de maladies et l'augmentation des maladies respiratoires et d'autres problèmes de santé chez les humains.",
        options: [
            "Augmentation de la biodiversité, amélioration de la qualité de l'air.",
            "Réduction de l'utilisation des ressources naturelles.",
            "Diminution des émissions de gaz à effet de serre.",
            "Dégradation et destruction du paysage, mauvaises odeurs, propagation d'insectes et de maladies."
        ]
    },
    {
        text: "Comment se débarrasser des ordures ?",
        correctAnswer: "Les enterrer, les brûler, les trier et les recycler.",
        explanation: "La gestion des déchets peut impliquer différentes méthodes. L'enfouissement est l'une des méthodes les plus courantes, où les déchets sont enfouis dans des sites d'enfouissement. La combustion, ou incinération, est une autre méthode où les déchets sont brûlés à haute température. Le tri et le recyclage impliquent de séparer les déchets selon leur type et de les utiliser pour créer de nouveaux produits.",
        options: [
            "Les stocker dans des décharges sauvages.",
            "Les déverser dans les cours d'eau.",
            "Les jeter dans la mer.",
            "Les enterrer, les brûler, les trier et les recycler."
        ]
    },
    {
        text: "Quelles sont les solutions de lutte contre la pollution ?",
        correctAnswer: "Brûler ou enterrer les ordures, interdire les décharges sauvages, interdire les voitures trop fumantes, installer les usines loin de la ville.",
        explanation: "Il existe de nombreuses solutions pour lutter contre la pollution. Cela peut inclure la gestion appropriée des déchets par l'incinération, l'enfouissement ou le recyclage, l'interdiction de la décharge sauvage, l'interdiction des véhicules polluants, et l'installation d'usines dans des zones éloignées des centres de population pour réduire l'exposition aux polluants.",
        options: [
            "Augmenter la production de déchets.",
            "Promouvoir l'utilisation de combustibles fossiles.",
            "Encourager la surconsommation.",
            "Brûler ou enterrer les ordures, interdire les décharges sauvages, interdire les voitures trop fumantes, installer les usines loin de la ville."
        ]
    },

{
        text: "Quelles sont les maladies provoquées par les décharges sauvages ?",
        correctAnswer: "Le tétanos et la gale.",
        explanation: "Les décharges sauvages peuvent être des sources de maladies si elles ne sont pas correctement gérées. Le tétanos peut être contracté à travers une blessure par un objet contaminé. La gale est une maladie de peau contagieuse qui peut se propager dans les conditions insalubres.",
        options: [
            "La grippe et le rhume.",
            "Les maladies cardiovasculaires.",
            "Le paludisme et la dengue.",
            "Le tétanos et la gale."
        ]
    },
    {
        text: "Quelles sont les maladies liées à la pollution atmosphérique ?",
        correctAnswer: "L'asthme, la toux, la bronchite, les maladies des yeux.",
        explanation: "La pollution atmosphérique peut causer ou aggraver plusieurs problèmes de santé. L'asthme, la toux et la bronchite sont des conditions respiratoires qui peuvent être exacerbées par la pollution atmosphérique. Les particules et les produits chimiques présents dans l'air pollué peuvent également provoquer des irritations et des maladies des yeux.",
        options: [
            "La fièvre et la diarrhée.",
            "Les allergies alimentaires.",
            "Les maladies du cœur.",
            "L'asthme, la toux, la bronchite, les maladies des yeux."
        ]
    },


    // Ajoutez les autres questions de la même manière
    
];


return (
    <div>
        <h3> CHAPITRE 4 : LA POLLUTION  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap4;