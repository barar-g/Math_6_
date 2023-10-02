import QCM from '../QCM';



function QCMC6(){

    const questionsArray = [
        {
            question: 'Quel est le résultat de 125 × 12 ?',
            answers: ['1490', '1500', '1510', '1520'],
            correctAnswer: '1500',
            explanation: 'Si tu multiplies 125 par 12, tu obtiens 1500.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 215 × 11 ?',
            answers: ['2,355', '2,365', '2,375', '2,385'],
            correctAnswer: '2,365',
            explanation: 'Si tu multiplies 215 par 11, tu obtiens 2,365.',
            userAnswer: null
        },
        {
            question: 'Si tu achètes 45 jouets et que chaque jouet coûte 32 euros, combien dépenses-tu en tout ?',
            answers: ['1,400', '1,410', '1,420', '1,430'],
            correctAnswer: '1,440',
            explanation: 'Si tu multiplies 45 par 32, tu dépenses 1,440 euros en tout.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 320 × 15 ?',
            answers: ['4,750', '4,800', '4,850', '4,900'],
            correctAnswer: '4,800',
            explanation: 'Si tu multiplies 320 par 15, tu obtiens 4,800.',
            userAnswer: null
        },
        {
            question: 'Quel est le résultat de 210 × 18 ?',
            answers: ['3,670', '3,680', '3,690', '3,700'],
            correctAnswer: '3,780',
            explanation: 'Si tu multiplies 210 par 18, tu obtiens 3,780.',
            userAnswer: null
        }
    ];
    

    return(
        <div> <QCM questionsArray = {questionsArray}/></div>
    )
}

export default QCMC6;