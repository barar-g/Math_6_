import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap7 = () => {
const questions = [
    {
        text: "Qu'est-ce que le SIDA ?",
        correctAnswer: "Le SIDA est le Syndrome d'Immunodéficience Acquise, une maladie causée par le VIH qui affaiblit le système immunitaire.",
        explanation: "Le SIDA (Syndrome d'Immunodéficience Acquise) est une maladie causée par le virus VIH (Virus de l'immunodéficience humaine). Le VIH attaque et affaiblit le système immunitaire, rendant les personnes atteintes du virus plus vulnérables aux infections et aux maladies.",
        options: [
            "Le SIDA est une infection bactérienne transmise par les moustiques.",
            "Le SIDA est une maladie génétique qui se transmet de génération en génération.",
            "Le SIDA est une condition causée par une carence en vitamines et minéraux.",
            "Le SIDA est le Syndrome d'Immunodéficience Acquise, une maladie causée par le VIH qui affaiblit le système immunitaire."
        ]
    },
    {
        text: "Quelle est la signification de l'acronyme VIH ?",
        correctAnswer: "VIH signifie Virus de l'Immunodéficience Humaine.",
        explanation: "VIH est l'acronyme de Virus de l'Immunodéficience Humaine. Le VIH est le virus responsable du SIDA. Il attaque les cellules du système immunitaire, en particulier les lymphocytes T CD4, affaiblissant ainsi la capacité du corps à se défendre contre les infections.",
        options: [
            "VIH signifie Vaccin Immunisant contre le Herpès.",
            "VIH signifie Virus Infectieux Hautement contagieux.",
            "VIH signifie Vitesse d'Infection Humaine.",
            "VIH signifie Virus de l'Immunodéficience Humaine."
        ]
    },
    {
        text: "Comment savoir si une personne est infectée par le VIH ?",
        correctAnswer: "Il faut passer un test de dépistage du VIH.",
        explanation: "Pour savoir si une personne est infectée par le VIH, il est nécessaire de passer un test de dépistage spécifique du VIH. Ce test détecte la présence d'anticorps ou d'antigènes du VIH dans le sang ou les fluides corporels. Il est important de se faire dépister, car de nombreuses personnes infectées par le VIH ne présentent pas de symptômes immédiats.",
        options: [
            "En observant les symptômes physiques visibles sur le corps.",
            "En se basant sur les antécédents médicaux de la personne.",
            "En effectuant une analyse sanguine standard.",
            "Il faut passer un test de dépistage du VIH."
        ]
    },
    {
        text: "Qu'est-ce qu'un séropositif ?",
        correctAnswer: "Un séropositif est une personne porteuse du virus VIH sans présenter de symptômes du SIDA.",
        explanation: "Un séropositif est une personne porteuse du virus VIH (Virus de l'Immunodéficience Humaine) mais qui ne présente pas encore de symptômes du SIDA (Syndrome d'Immunodéficience Acquise). Cependant, un séropositif peut toujours transmettre le VIH à d'autres personnes, même s'il ne présente pas de symptômes.",
        options: [
            "Un séropositif est une personne atteinte de SIDA.",
            "Un séropositif est une personne immunisée contre le VIH.",
            "Un séropositif est une personne qui a guéri du VIH.",
            "Un séropositif est une personne porteuse du virus VIH sans présenter de symptômes du SIDA."
        ]
    },
    {
        text: "Comment se transmet le VIH ?",
        correctAnswer: "Le VIH se transmet par les rapports sexuels non protégés, la transfusion sanguine, les objets coupants infectés et de la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement.",
        explanation: "Le VIH peut se transmettre de différentes manières, notamment par les rapports sexuels non protégés (vaginal, anal ou oral), par la transfusion sanguine avec du sang contaminé, par l'utilisation d'objets coupants infectés tels que des seringues contaminées et par la transmission de la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement.",
        options: [
            "Le VIH se transmet par la consommation d'aliments contaminés.",
            "Le VIH se transmet par les piqûres de moustiques.",
            "Le VIH se transmet par contact physique direct avec une personne infectée.",
            "Le VIH se transmet par les rapports sexuels non protégés, la transfusion sanguine, les objets coupants infectés et de la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement."
        ]
    },
    
    // Ajoutez les autres questions de la même manière
    
];


return (
    <div>
        <h3> CHAPITRE 7 : LE SIDA  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap7;