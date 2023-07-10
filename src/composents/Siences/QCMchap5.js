import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap5 = () => {
const questions = [
    {
        text: "Qu'est-ce qu'une eau potable ?",
        correctAnswer: "Une eau propre qui ne contient pas de microbes et que l'on peut boire sans danger.",
        explanation: "Une eau potable est une eau propre et exempte de micro-organismes pathogènes tels que les bactéries, les virus et les parasites. Elle peut être consommée sans risque pour la santé.",
        options: [
            "Une eau salée provenant de la mer.",
            "Une eau colorée provenant des rivières.",
            "Une eau chaude utilisée pour le bain.",
            "Une eau propre qui ne contient pas de microbes et que l'on peut boire sans danger."
        ]
    },
    {
        text: "Qu'est-ce qu'une eau insalubre ?",
        correctAnswer: "Une eau sale qui contient des microbes et qui est dangereuse pour la santé.",
        explanation: "Une eau insalubre est une eau contaminée par des micro-organismes pathogènes, des substances chimiques ou des déchets. Sa consommation peut entraîner des maladies et des problèmes de santé.",
        options: [
            "Une eau embouteillée vendue dans les supermarchés.",
            "Une eau filtrée provenant des puits.",
            "Une eau bouillie utilisée pour la cuisine.",
            "Une eau sale qui contient des microbes et qui est dangereuse pour la santé."
        ]
    },
    {
        text: "Comment rendre une eau insalubre potable ?",
        correctAnswer: "La chauffer à 100°, la filtrer, la javelliser.",
        explanation: "Pour rendre une eau insalubre potable, il est nécessaire de suivre plusieurs étapes. Tout d'abord, il faut la chauffer à 100 degrés Celsius pour tuer les micro-organismes. Ensuite, il faut la filtrer pour éliminer les particules solides. Enfin, il est recommandé d'ajouter une petite quantité d'eau de Javel pour désinfecter l'eau.",
        options: [
            "La laisser reposer au soleil pendant quelques heures.",
            "La mélanger avec des produits chimiques pour la purifier.",
            "La refroidir à une température très basse.",
            "La chauffer à 100°, la filtrer, la javelliser."
        ]
    },
    {
        text: "Quelles sont les maladies liées à l'eau insalubre ?",
        correctAnswer: "Le choléra, la diarrhée, la dysenterie, le ver de guinée, la bilharziose, les parasites intestinaux.",
        explanation: "L'eau insalubre peut être responsable de plusieurs maladies d'origine hydrique. Parmi les maladies couramment associées à une eau insalubre, on trouve le choléra, la diarrhée, la dysenterie, l'infection par le ver de Guinée, la bilharziose et divers parasites intestinaux.",
        options: [
            "La grippe, le rhume, les allergies.",
            "L'asthme, la bronchite, les maladies respiratoires.",
            "Le paludisme, la dengue, le chikungunya.",
            "Le choléra, la diarrhée, la dysenterie, le ver de guinée, la bilharziose, les parasites intestinaux."
        ]
    },
    {
        text: "Comment se transmettent ces maladies ?",
        correctAnswer: "En buvant de l'eau sale ou en se lavant dans une mare.",
        explanation: "Ces maladies sont principalement transmises par l'ingestion d'eau contaminée. Lorsque l'eau contient des micro-organismes pathogènes, ils peuvent pénétrer dans le corps par la consommation de cette eau contaminée. De plus, certaines maladies peuvent également se propager par contact direct avec des milieux aquatiques contaminés, comme se laver dans une mare.",
        options: [
            "Par contact avec une personne infectée.",
            "Par la consommation d'aliments contaminés.",
            "Par inhalation de l'air pollué.",
            "En buvant de l'eau sale ou en se lavant dans une mare."
        ]
    },
    {
        text: "Comment l'eau est polluée ?",
        correctAnswer: "Par les selles, les urines, les parasites.",
        explanation: "L'eau peut être polluée de différentes manières. Les principales sources de pollution de l'eau sont les matières fécales (selles et urines) humaines et animales, qui peuvent contenir des micro-organismes pathogènes. De plus, certains parasites peuvent également contaminer l'eau et la rendre dangereuse pour la santé.",
        options: [
            "Par les déchets industriels.",
            "Par les produits chimiques utilisés en agriculture.",
            "Par les rayonnements solaires.",
            "Par les selles, les urines, les parasites."
        ]
    },
    {
        text: "Qu'est-ce que le paludisme ?",
        correctAnswer: "Une maladie causée par la piqûre d'un moustique, l'anophèle femelle.",
        explanation: "Le paludisme, également appelé malaria, est une maladie parasitaire grave causée par la piqûre d'un moustique femelle du genre Anophèle. Les parasites du paludisme se multiplient dans le foie puis infectent les globules rouges, provoquant des symptômes tels que de fortes fièvres, des frissons et une grande fatigue.",
        options: [
            "Une maladie causée par la consommation d'eau contaminée.",
            "Une maladie causée par des bactéries présentes dans l'air.",
            "Une maladie causée par des parasites présents dans les aliments.",
            "Une maladie causée par la piqûre d'un moustique, l'anophèle femelle."
        ]
    },

    {
        text: "Quelles sont les maladies liées à la pollution de l'air ?",
        correctAnswer: "L'asthme, la bronchite, les maladies respiratoires.",
        explanation: "La pollution de l'air peut causer ou aggraver plusieurs maladies respiratoires, notamment l'asthme, la bronchite et d'autres affections pulmonaires. Les particules fines et les polluants chimiques présents dans l'air peuvent irriter les voies respiratoires et entraîner des problèmes respiratoires chez les personnes sensibles.",
        options: [
            "La grippe, le rhume, les allergies.",
            "L'asthme, la bronchite, les maladies respiratoires.",
            "Le paludisme, la dengue, le chikungunya.",
            "Le choléra, la diarrhée, la dysenterie, le ver de guinée, la bilharziose, les parasites intestinaux."
        ]
    },
    {
        text: "Quelles sont les principales sources de pollution de l'air ?",
        correctAnswer: "Les émissions des véhicules, les activités industrielles, la combustion des combustibles fossiles.",
        explanation: "Les principales sources de pollution de l'air sont les émissions provenant des véhicules, les activités industrielles et la combustion des combustibles fossiles tels que le charbon, le pétrole et le gaz naturel. Ces activités libèrent des polluants atmosphériques tels que les oxydes d'azote, les particules fines et les composés organiques volatils, qui contribuent à la pollution de l'air.",
        options: [
            "Les déchets industriels, les pesticides, les déversements de pétrole.",
            "Les radiations solaires, les éruptions volcaniques, les séismes.",
            "Les déchets municipaux, les déchets chimiques, les explosions nucléaires.",
            "Les émissions des véhicules, les activités industrielles, la combustion des combustibles fossiles."
        ]
    },
    {
        text: "Quels sont les effets de la pollution de l'eau sur l'écosystème aquatique ?",
        correctAnswer: "La diminution de la biodiversité, la contamination des poissons et autres organismes aquatiques.",
        explanation: "La pollution de l'eau a de graves conséquences sur l'écosystème aquatique. Elle peut entraîner la diminution de la biodiversité en perturbant l'équilibre des écosystèmes. De plus, les produits chimiques et les déchets présents dans l'eau contaminent les poissons et autres organismes aquatiques, ce qui peut avoir un impact sur leur santé et leur reproduction.",
        options: [
            "L'augmentation de la biodiversité, la prolifération d'espèces invasives.",
            "La purification de l'eau, l'amélioration de la qualité des habitats.",
            "La diminution des précipitations, la modification du cycle de l'eau.",
            "La diminution de la biodiversité, la contamination des poissons et autres organismes aquatiques."
        ]
    },
    {
        text: "Quelles sont les mesures pour prévenir la pollution de l'environnement ?",
        correctAnswer: "Réduire les émissions de gaz à effet de serre, favoriser le recyclage des déchets, promouvoir les énergies renouvelables.",
        explanation: "Pour prévenir la pollution de l'environnement, il est essentiel de prendre des mesures visant à réduire les émissions de gaz à effet de serre, à favoriser le recyclage des déchets et à promouvoir les énergies renouvelables. Ces actions contribuent à limiter les effets du changement climatique, à réduire la production de déchets et à utiliser des sources d'énergie plus propres et durables.",
        options: [
            "Utiliser davantage de plastique et de produits jetables.",
            "Augmenter l'utilisation des combustibles fossiles.",
            "Déverser les déchets dans les cours d'eau.",
            "Réduire les émissions de gaz à effet de serre, favoriser le recyclage des déchets, promouvoir les énergies renouvelables."
        ]
    },
    
    
    
    
];


return (
    <div>
        <h3> CHAPITRE 5 : L’EAU ET LA SANTE
 </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap5;