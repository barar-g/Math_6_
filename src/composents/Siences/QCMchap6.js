import React from 'react';
import QCMComponent from '../QCMComponent';

const QCMchap6 = () => {
const questions = [
    {
        text: "Quelle est la différence entre un vaccin et un sérum ?",
        correctAnswer: "Le vaccin est un moyen préventif, le sérum est un moyen curatif.",
        explanation: "La différence entre un vaccin et un sérum réside dans leur utilisation et leur fonction. Le vaccin est administré avant l'infection pour prévenir la maladie en stimulant le système immunitaire à produire des anticorps. En revanche, le sérum est utilisé après l'infection pour traiter la maladie en fournissant des anticorps préformés pour combattre l'agent pathogène.",
        options: [
            "Le vaccin est administré par injection, le sérum est administré par voie orale.",
            "Le vaccin est utilisé pour traiter les maladies virales, le sérum est utilisé pour traiter les maladies bactériennes.",
            "Le vaccin est un moyen préventif, le sérum est un moyen curatif.",
            "Le vaccin est administré à la naissance, le sérum est administré à l'âge adulte."
        ]
    },
    {
        text: "Qu'est-ce qu'un carnet de vaccination ?",
        correctAnswer: "C'est une carte sur laquelle on note toutes les vaccinations et leurs dates. Il montre que chacun a été vacciné et à jour dans ses vaccins.",
        explanation: "Le carnet de vaccination est un document important où sont consignées toutes les vaccinations reçues par une personne, ainsi que les dates auxquelles elles ont été administrées. Il sert de preuve que la personne a été vaccinée et est à jour dans ses vaccins, ce qui est essentiel pour la prévention des maladies infectieuses.",
        options: [
            "C'est un registre tenu par les médecins pour suivre les stocks de vaccins.",
            "C'est une brochure d'information sur les différents vaccins disponibles.",
            "C'est un dispositif médical utilisé pour administrer les vaccins.",
            "C'est une carte d'identité spéciale pour les personnes vaccinées."
        ]
    },
    {
        text: "Quels sont les vaccins obligatoires en Mauritanie ou quelles sont les maladies liées à la vaccination ?",
        correctAnswer: "La rougeole, la diphtérie, la coqueluche, la tuberculose, le tétanos et la poliomyélite.",
        explanation: "En Mauritanie, les vaccins obligatoires comprennent ceux contre la rougeole, la diphtérie, la coqueluche, la tuberculose, le tétanos et la poliomyélite. Ces maladies sont considérées comme prioritaires pour la prévention et la protection de la population.",
        options: [
            "La grippe, la varicelle, la rubéole, l'hépatite B.",
            "Le paludisme, la bilharziose, la fièvre jaune, la dengue.",
            "La rougeole, la diphtérie, la coqueluche, la tuberculose, le tétanos et la poliomyélite.",
            "Le VIH, la syphilis, la gonorrhée, la chlamydia."
        ]
    },
    {
        text: "Comment est administré un vaccin ?",
        correctAnswer: "Par injection (piqûre) ou ingestion (voie orale).",
        explanation: "Un vaccin peut être administré de différentes manières. La méthode la plus courante est l'administration par injection, où le vaccin est injecté dans le muscle ou sous la peau à l'aide d'une aiguille. Certains vaccins peuvent également être administrés par voie orale, où ils sont ingérés sous forme de comprimés ou de gouttes.",
        options: [
            "Par inhalation de vapeurs du vaccin.",
            "Par application topique sur la peau.",
            "Par irradiation aux rayons ultraviolets.",
            "Par injection (piqûre) ou ingestion (voie orale)."
        ]
    },
    {
        text: "Cite trois maladies que l'on peut prévenir par un vaccin ?",
        correctAnswer: "La rougeole, la poliomyélite, la tuberculose.",
        explanation: "Plusieurs maladies peuvent être prévenues par la vaccination. Parmi celles-ci, on peut citer la rougeole, la poliomyélite et la tuberculose. Ces vaccins sont essentiels pour réduire la propagation de ces maladies et protéger la population.",
        options: [
            "Le paludisme, la bilharziose, la fièvre jaune.",
            "Le VIH, la syphilis, la gonorrhée.",
            "La grippe, la varicelle, la rubéole.",
            "La rougeole, la poliomyélite, la tuberculose."
        ]
    },
    {
        text: "Cite deux maladies que l'on peut guérir par un sérum ?",
        correctAnswer: "Le paludisme et la bilharziose.",
        explanation: "Le sérum est utilisé comme traitement curatif pour certaines maladies. Parmi les maladies que l'on peut guérir par un sérum, on peut citer le paludisme et la bilharziose. Ces sérum peuvent contenir des anticorps spécifiques qui aident à combattre les agents pathogènes responsables de ces maladies.",
        options: [
            "La rougeole, la diphtérie, la coqueluche.",
            "La tuberculose, le tétanos, la poliomyélite.",
            "La grippe, la varicelle, la rubéole.",
            "Le paludisme, la bilharziose."
        ]
    },
    {
        text: "Qu'est-ce que l'immunité collective (ou immunité de groupe) ?",
        correctAnswer: "C'est lorsque la majorité d'une population est immunisée contre une maladie, ce qui limite sa propagation.",
        explanation: "L'immunité collective se produit lorsque la majorité d'une population est immunisée contre une maladie donnée. Cela réduit le risque de transmission de la maladie, car il y a moins de personnes susceptibles de la contracter et de la propager. L'immunité collective est souvent atteinte grâce à la vaccination de la population.",
        options: [
            "C'est la capacité d'un individu à se protéger contre les maladies sans vaccin.",
            "C'est la protection offerte par les anticorps présents dans le lait maternel.",
            "C'est le processus par lequel le corps développe une réponse immunitaire après une infection.",
            "C'est lorsque la majorité d'une population est immunisée contre une maladie, ce qui limite sa propagation."
        ]
    },
    {
        text: "Qu'est-ce qu'un vaccin vivant atténué ?",
        correctAnswer: "Un vaccin contenant des agents pathogènes affaiblis qui ne provoquent pas la maladie mais stimulent la réponse immunitaire.",
        explanation: "Un vaccin vivant atténué est un type de vaccin qui contient des agents pathogènes affaiblis (généralement des virus) qui ont été modifiés pour ne pas causer la maladie chez les personnes vaccinées. Ces agents pathogènes affaiblis stimulent tout de même une réponse immunitaire dans le corps, permettant à l'organisme de reconnaître et de se défendre contre l'agent pathogène réel en cas d'exposition ultérieure.",
        options: [
            "Un vaccin fabriqué à partir de toxines produites par des bactéries.",
            "Un vaccin qui contient uniquement des protéines virales.",
            "Un vaccin administré par voie orale au lieu d'une injection.",
            "Un vaccin contenant des agents pathogènes affaiblis qui ne provoquent pas la maladie mais stimulent la réponse immunitaire."
        ]
    },
    {
        text: "Qu'est-ce qu'un rappel vaccinal ?",
        correctAnswer: "Une dose supplémentaire de vaccin administrée après la vaccination initiale pour renforcer l'immunité à long terme.",
        explanation: "Un rappel vaccinal est une dose supplémentaire de vaccin administrée après la vaccination initiale. Il vise à renforcer l'immunité à long terme contre une maladie spécifique. Les rappels vaccinaux sont importants car ils aident à maintenir des niveaux élevés d'anticorps dans l'organisme, assurant une protection continue contre la maladie.",
        options: [
            "Un vaccin administré à un âge avancé pour rattraper les vaccinations manquées.",
            "Un vaccin administré à des personnes exposées à une maladie contagieuse.",
            "Une dose plus élevée de vaccin administrée pour une protection immédiate.",
            "Une dose supplémentaire de vaccin administrée après la vaccination initiale pour renforcer l'immunité à long terme."
        ]
    }
    
    
    // Ajoutez les autres questions de la même manière
    
];


return (
    <div>
        <h3> CHAPITRE 6 : LA VACCINATION  </h3>
        <QCMComponent questions={questions} />
    </div>
);
}

export default QCMchap6;