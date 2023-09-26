import QCM from './QCM';



function QCMC1(){

    const questionsArray = [
        {
            question: 'Quelle est la valeur de la chiffre 7 dans le nombre 7,492,319,000?',
            answers: ['7 millions', '7 milliards', '7 mille', '7 centaines'],
            correctAnswer: '7 milliards',
            explanation: 'Dans le nombre 7,492,319,000, le chiffre 7 représente 7 milliards.',
            userAnswer: null
          },
          {
            question: 'Quelle est la valeur de la chiffre 4 dans le nombre 7,492,319,000?',
            answers: ['4 millions', '4 milliards', '4 mille', '4 centaines de millions'],
            correctAnswer: '4 centaines de millions',
            explanation: 'Dans le nombre 7,492,319,000, le chiffre 4 représente 4 centaines de millions.',
            userAnswer: null
          },
          {
            question: 'Combien de zéros y a-t-il dans un milliard?',
            answers: ['6', '7', '8', '9'],
            correctAnswer: '9',
            explanation: 'Il y a 9 zéros dans un milliard.',
            userAnswer: null
          },
          {
            question: 'Quel est le chiffre des dizaines de millions dans le nombre 7,492,319,000?',
            answers: ['7', '4', '9', '3'],
            correctAnswer: '9',
            explanation: 'Dans le nombre 7,492,319,000, le chiffre des dizaines de millions est 9.',
            userAnswer: null
          },
          {
            question: 'Si on ajoute 1 à 999,999,999, quel sera le résultat?',
            answers: ['1 milliard', '10 millions', '100 millions', '999,999,999'],
            correctAnswer: '1 milliard',
            explanation: '999,999,999 + 1 = 1,000,000,000, qui est 1 milliard.',
            userAnswer: null
          }
        ];

    return(
        <div> <QCM questionsArray = {questionsArray}/></div>
    )
}

export default QCMC1;