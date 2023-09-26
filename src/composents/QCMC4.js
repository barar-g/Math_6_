import QCM from './QCM';



function QCMC4(){

    const questionsArray = [
        {
            question: 'Quel est le résultat de 12 + 15 ?',
            answers: ['25', '26', '27', '28'],
            correctAnswer: '27',
            explanation: 'Si tu ajoutes 12 et 15, tu obtiens 27.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 23 - 17 ?',
            answers: ['5', '6', '7', '8'],
            correctAnswer: '6',
            explanation: 'Si tu retranches 17 de 23, il reste 6.',
            userAnswer: null
        },
        {
            question: 'Si tu as 29 billes et que tu en donnes 14 à ton ami, combien de billes te restent-ils ?',
            answers: ['13', '14', '15', '16'],
            correctAnswer: '15',
            explanation: 'Si tu as 29 billes et que tu en donnes 14, il te reste 15 billes.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 13 + 16 ?',
            answers: ['28', '29', '30', '31'],
            correctAnswer: '29',
            explanation: 'Si tu ajoutes 13 et 16, tu obtiens 29.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 35 - 19 ?',
            answers: ['15', '16', '17', '18'],
            correctAnswer: '16',
            explanation: 'Si tu retranches 19 de 35, il reste 16.',
            userAnswer: null
        }
    ];

    return(
        <div> <QCM questionsArray = {questionsArray}/></div>
    )
}

export default QCMC4;