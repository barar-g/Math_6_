import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap1 = () => {
const questions = [
    {
        text: "Qu'est-ce que l'équilibre alimentaire ?",
        correctAnswer: "Une bonne répartition des glucides, des lipides et des protéines dans les repas quotidiens.",
        explanation: "L'équilibre alimentaire se réfère à la consommation appropriée et proportionnelle de différents nutriments - glucides, lipides et protéines, pour maintenir une santé optimale et prévenir les maladies.",
        options: [
            "Une bonne répartition des glucides, des lipides et des protéines dans les repas quotidiens.",
            "Une consommation excessive de sucreries.",
            "Un régime strict sans lipides.",
            "Une surconsommation de viandes."
        ]
    },
    {
        text: "Quels sont les principaux composants des aliments ?",
        correctAnswer: "Les glucides, les lipides et les protéines.",
        explanation: "Les glucides, lipides et protéines sont les principaux macronutriments trouvés dans les aliments. Les glucides fournissent l'énergie, les lipides servent à la fois de réserve d'énergie et à d'autres fonctions vitales, tandis que les protéines sont essentielles pour la croissance et la réparation des tissus.",
        options: [
            "Les vitamines, les minéraux et l'eau.",
            "Les glucides, les lipides et les protéines.",
            "Les légumes, les fruits et les céréales.",
            "Les acides gras saturés, les fibres et les antioxydants."
        ]
    },
    {
        text: "Parmi les aliments suivants, lesquels contiennent des glucides, des lipides et des protéines ?",
        correctAnswer: "Riz, beurre, haricots blancs.",
        explanation: "Le riz est une source de glucides, le beurre fournit des lipides, et les haricots blancs sont une bonne source de protéines. Ensemble, ils fournissent tous les principaux macronutriments.",
        options: [
            "Riz, beurre, haricots blancs.",
            "Pain, huile, poulet.",
            "Pommes de terre, crème, œufs.",
            "Céréales, légumineuses, lait."
        ]
    },
    {
        text: "Quelle est l'origine des glucides, des lipides et des protéines ?",
        correctAnswer: "Les glucides sont d'origine végétale, les lipides sont d'origine animale et végétale, les protéines sont d'origine végétale et animale.",
        explanation: "Les glucides sont principalement d'origine végétale et se trouvent dans les fruits, légumes, céréales et légumineuses. Les lipides peuvent être d'origine animale (comme dans la viande et les produits laitiers) et végétale (comme dans les huiles végétales). Les protéines sont présentes à la fois dans les sources animales (viande, produits laitiers) et végétales (légumineuses, certains grains et noix).",
        options: [
            "Les trois sont d'origine végétale.",
            "Les trois sont d'origine animale.",
            "Les glucides sont d'origine animale, les lipides sont d'origine végétale et animale, les protéines sont d'origine végétale.",
            "Les glucides sont d'origine végétale, les lipides sont d'origine animale, les protéines sont d'origine animale."
        ]
    },
    {
        text: "Quels sont les rôles des aliments ?",
        correctAnswer: "Les glucides et les lipides nous donnent de l'énergie, les protéines assurent la croissance chez les enfants.",
        explanation: "Les glucides et les lipides sont des sources majeures d'énergie pour le corps, tandis que les protéines jouent un rôle crucial dans la croissance, la réparation des tissus et le maintien de la santé globale.",
        options: [
            "Les glucides et les lipides assurent la croissance chez les enfants.",
            "Les protéines fournissent de l'énergie.",
            "Les lipides et les protéines assurent la croissance chez les enfants, les glucides fournissent de l'énergie.",
            "Les glucides et les lipides nous donnent de l'énergie."
        ]
    },
    {
        text: "Pourquoi le lait est considéré comme un aliment complet ?",
        correctAnswer: "Parce qu'il contient tous les composants indispensables à l'organisme.",
        explanation: "Le lait est considéré comme un aliment complet car il contient une large variété de nutriments essentiels, y compris des glucides, des protéines, des lipides, des vitamines et des minéraux. Ces nutriments sont nécessaires pour une croissance et un développement sains, en particulier chez les enfants.",
        options: [
            "Parce qu'il contient tous les composants indispensables à l'organisme.",
            "Parce qu'il est riche en vitamines B.",
            "Parce qu'il ne contient pas de lipides.",
            "Parce qu'il est une source importante de glucides."
        ]
    },
    {
        text: "Qu'est-ce qu'un repas équilibré ?",
        correctAnswer: "Un repas qui contient des lipides, des glucides et des protéines.",
        explanation: "Un repas équilibré est un repas qui contient tous les macronutriments en bonnes proportions - glucides pour l'énergie, lipides pour l'énergie et des fonctions vitales, et protéines pour la croissance et la réparation des tissus. Un repas équilibré contient également une variété de micronutriments - vitamines et minéraux.",
        options: [
            "Un repas qui contient uniquement des légumes.",
            "Un repas qui contient des lipides, des glucides et des protéines.",
            "Un repas composé uniquement de viande.",
            "Un repas qui ne contient aucun glucide."
        ]
    },
    {
        text: "Que faut-il pour avoir un bon équilibre alimentaire ?",
        correctAnswer: "Manger des repas complets et variés.",
        explanation: "Un bon équilibre alimentaire nécessite de manger des repas variés et complets qui fournissent tous les macronutriments (glucides, lipides et protéines) ainsi que les micronutriments (vitamines, minéraux) nécessaires à une santé optimale. Cela signifie manger une variété d'aliments de tous les groupes alimentaires en proportions appropriées.",
        options: [
            "Manger des repas complets et variés.",
            "Limiter la consommation d'eau.",
            "Éviter les fruits et légumes.",
            "Se priver de lipides."
        ]
    },
    {
        text: "Qu'appelle-t-on malnutrition ?",
        correctAnswer: "Une mauvaise répartition des glucides, des lipides et des protéines dans les repas quotidiens.",
        explanation: "La malnutrition désigne une condition dans laquelle une personne ne reçoit pas assez de nutriments appropriés pour maintenir une bonne santé. Cela peut résulter d'un manque d'ingestion ou d'absorption de nutriments, ou d'un déséquilibre de nutriments dans l'alimentation.",
        options: [
            "Une mauvaise répartition des glucides, des lipides et des protéines dans les repas quotidiens.",
            "Une alimentation équilibrée et saine.",
            "Une consommation excessive de fruits et légumes.",
            "Une consommation excessive de glucides."
        ]
    },
    {
        text: "Quel est le rôle des protéines dans l'organisme ?",
        correctAnswer: "Assurer la croissance chez les enfants.",
        explanation: "Les protéines jouent un rôle crucial dans l'organisme, en particulier dans la croissance et le développement des enfants. Elles sont essentielles à la construction et à la réparation des tissus corporels, à la production d'enzymes et d'hormones, et à la fonction immunitaire.",
        options: [
            "Assurer la croissance chez les enfants.",
            "Fournir de l'énergie.",
            "Réguler la pression artérielle.",
            "Améliorer la vision."
        ]
    },
    {
        text: "Quels sont les aliments riches en glucides ?",
        correctAnswer: "Le riz, les pommes de terre et les pâtes.",
        explanation: "Le riz, les pommes de terre et les pâtes sont tous des aliments riches en glucides. Les glucides sont la principale source d'énergie du corps, fournissant du carburant pour les fonctions physiques et mentales.",
        options: [
            "Le riz, les pommes de terre et les pâtes.",
            "Les viandes et les poissons.",
            "Les huiles et les beurres.",
            "Les légumes verts."
        ]
    },
    {
        text: "Quelles sont les sources de lipides sains ?",
        correctAnswer: "Les avocats et les noix.",
        explanation: "Les avocats et les noix sont d'excellentes sources de lipides sains. Ils contiennent des acides gras mono-insaturés et polyinsaturés, qui peuvent aider à réduire les niveaux de mauvais cholestérol (LDL) et augmenter les niveaux de bon cholestérol (HDL).",
        options: [
            "Les avocats et les noix.",
            "Les sodas et les boissons sucrées.",
            "Les bonbons et les gâteaux.",
            "Les légumes verts."
        ]
    },


    // Ajoutez les autres questions de la même manière
    
];


return (
    <div>
        <h3> CHAPITRE 1 : L’EQUILIBRE ALIMENTAIRE  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap1;