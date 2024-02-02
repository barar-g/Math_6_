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
        },
        {
          text: 'Quelle est la formule pour calculer la perte ?',
          correctAnswer: 'Prix de revient - Prix de vente',
          explanation: 'La perte est obtenue en soustrayant le prix de vente du prix de revient.',
          options: ['Prix de vente - Prix de revient', 'Prix de revient - Prix de vente', 'Prix de revient + Bénéfice', 'Prix de vente + Bénéfice'],
        },
        {
          text: 'Quelle est la formule pour calculer le prix de vente ?',
          correctAnswer: 'Prix de revient + Bénéfice',
          explanation: 'Le prix de vente est obtenu en ajoutant le bénéfice au prix de revient.',
          options: ['Prix de revient - Bénéfice', 'Prix de revient + Bénéfice', 'Prix d\'achat + Frais', 'Prix d\'achat - Frais'],
        },
        {
          text: 'Quelle est la formule pour calculer le pourcentage de bénéfice ?',
          correctAnswer: '(Bénéfice / Prix de revient) * 100',
          explanation: 'Le pourcentage de bénéfice est obtenu en divisant le bénéfice par le prix de revient, puis en multipliant le résultat par 100.',
          options: ['(Bénéfice / Prix de revient) * 100', '(Bénéfice / Prix de vente) * 100', '(Prix de revient / Bénéfice) * 100', '(Prix de vente / Bénéfice) * 100'],
        },
        {
          text: 'Quelle est la formule pour calculer le pourcentage de perte ?',
          correctAnswer: '(Perte / Prix de revient) * 100',
          explanation: 'Le pourcentage de perte est obtenu en divisant la perte par le prix de revient, puis en multipliant le résultat par 100.',
          options: ['(Perte / Prix de revient) * 100', '(Perte / Prix de vente) * 100', '(Prix de revient / Perte) * 100', '(Prix de vente / Perte) * 100'],
        },
        {
          text: 'Quelle est la formule pour calculer le prix d\'achat si le prix de vente est connu ?',
          correctAnswer: 'Prix de vente - Bénéfice',
          explanation: 'Le prix d\'achat est obtenu en soustrayant le bénéfice du prix de vente.',
          options: ['Prix de vente + Bénéfice', 'Prix de vente - Bénéfice', 'Prix de vente / Bénéfice', 'Prix de vente * Bénéfice'],
        },
        {
          text: 'Quelle est la formule pour calculer le pourcentage de marge bénéficiaire ?',
          correctAnswer: '(Bénéfice / Prix de vente) * 100',
          explanation: 'Le pourcentage de marge bénéficiaire est obtenu en divisant le bénéfice par le prix de vente, puis en multipliant le résultat par 100.',
          options: ['(Bénéfice / Prix de vente) * 100', '(Bénéfice / Prix de revient) * 100', '(Prix de vente / Bénéfice) * 100', '(Prix de revient / Bénéfice) * 100'],
        },
        {
          text: 'Quelle est la formule pour calculer le pourcentage de marge brute ?',
          correctAnswer: '((Prix de vente - Coût) / Prix de vente) * 100',
          explanation: 'Le pourcentage de marge brute est obtenu en soustrayant le coût du prix de vente, puis en divisant le résultat par le prix de vente, et enfin en multipliant le tout par 100.',
          options: ['((Prix de vente - Coût) / Prix de vente) * 100', '((Prix de vente - Coût) / Coût) * 100', '((Coût - Prix de vente) / Coût) * 100', '((Coût - Prix de vente) / Prix de vente) * 100'],
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