import React from 'react';
import QCMComponent from './RandomQuiz';

const ExamenQCM = () => {
    const questions = [
        {
          text: "استخرج المبتدأ في الجملة الآتية (أركان الإسلام خمسة)",
          correctAnswer: ' أركان',
          explanation: '( الصحة نعمة عظيمة)',
          options: [' أركان', 'الإسلام', 'خمسة '],
        },
        {
          text: "استخرج الخبر في الجملة الآتية ( الصحة نعمة عظيمة)",
          correctAnswer: 'نعمة',
          explanation: '( الصحة نعمة عظيمة)',
          options: ['الصحة', 'نعمة', 'عظيمة'],
        },
        {
          text: "استخرج المبتدأ في الجملة الآتية (العلم نور عظيم)",
          correctAnswer: 'العلم',
          explanation: '( الصحة نعمة عظيمة)',
          options: ['عظيم', 'نور', 'العلم'],
        },
        // Ajoutez d'autre question ici
    ];
    return (
        <div>
          <QCMComponent questions={questions} />
        </div>
      );
    };
    
    export default ExamenQCM;