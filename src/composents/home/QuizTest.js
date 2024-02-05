import React from 'react';
import QCMComponent from './RandomQuiz';

const ExamenQCM = () => {
    const questions = [
        {
          text: 'Quel est le prix d\'achat d\'un produit si le prix de revient est de 50 € et les frais sont de 5 € ?',
          correctAnswer: '45 €',
          explanation: 'Le prix d\'achat est obtenu en soustrayant les frais du prix de revient : 50 € - 5 € = 45 €.',
          options: ['40 €', '42 €', '45 €', '48 €'],
        },
        {
          text: 'Quelle est la formule pour calculer le bénéfice ?',
          correctAnswer: 'Prix de vente - Prix de revient',
          explanation: 'Le bénéfice est obtenu en soustrayant le prix de revient du prix de vente.',
          options: ['Prix de vente + Bénéfice', 'Prix de vente - Prix de revient', 'Prix de revient - Frais', 'Prix de revient - Prix de vente'],
        },
        {
          text: 'Quelle est la formule pour calculer le prix de revient ?',
          correctAnswer: 'Prix d\'achat + Frais',
          explanation: 'Le prix de revient est obtenu en ajoutant le prix d\'achat aux frais.',
          options: ['Prix d\'achat - Frais', 'Prix d\'achat + Frais', 'Prix de vente - Bénéfice', 'Prix de vente - Prix d\'achat'],
        }
  
        // Ajoutez d'autre question ici
    ];
    return (
        <div>
          <QCMComponent questions={questions} />
        </div>
      );
    };
    
    export default ExamenQCM;