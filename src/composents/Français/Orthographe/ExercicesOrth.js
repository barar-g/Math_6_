import React, { useState } from 'react';
import './QuizApp.css';
import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';


const QuizApp = ({ quizzes }) => {

const [showSections, setShowSections] = useState([true]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null); // Ajout de l'état de la sélection
  const [showReport, setShowReport] = useState(false);

  const handleAnswerSelect = (selectedOptionIndex) => {
    setUserSelection(selectedOptionIndex);
  
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuizIndex * quizzes[currentQuizIndex].questions.length + currentQuestionIndex] = selectedOptionIndex;
      return newAnswers;
    });
  
    if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
  
      if (currentQuizIndex < quizzes.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
      } else {
        setShowReport(true);
      }
    }
  };
  

  const handleNextButtonClick = () => {
    // Seulement passer à la question ou au quiz suivant si l'utilisateur a fait une sélection
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
    }
  };

  const renderProgressBar = () => {
    const progressPercentage = ((currentQuizIndex + 0) / quizzes.length) * 100;

    return (
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };


  
  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div>
       
        
        {renderProgressBar()}
        <h2>{currentQuiz.text}</h2>
        <div>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <button 
                  onClick={() => setUserSelection(optionIndex)}
                  className={`option-button ${userSelection === optionIndex ? 'selected' : ''}`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <button  className='option-button-suivant' onClick={handleNextButtonClick} disabled={userSelection === null}>
          Suivant
        </button>
        


      </div>
    );
  };

  

  const renderReport2 = () => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
      const quizIndex = Math.floor(index / quizzes[currentQuizIndex].questions.length);
      const questionIndex = index % quizzes[currentQuizIndex].questions.length;
  
      const currentQuiz = quizzes[quizIndex];
      if (currentQuiz && currentQuiz.questions) {
        return count + (answer === currentQuiz.questions[questionIndex].correctAnswer ? 1 : 0);
      }
      return count;
    }, 0);
  
    const score = (correctAnswersCount / totalQuestions) * 100;
  
    return (
      <div>
        <h2>Rapport du Quiz</h2>
        <p>Score: {score}%</p>
        <ul>
          {quizzes.map((quiz, quizIndex) => (
            quiz.questions.map((question, questionIndex) => {
              const userAnswer = userAnswers[quizIndex * quiz.questions.length + questionIndex];
              const correctAnswerIndex = question.correctAnswer;
              const isCorrect = userAnswer === correctAnswerIndex;
  
              return (
                <li key={`${quizIndex}-${questionIndex}`}>
                  Texte {quizIndex + 1}: Question {questionIndex + 1} - Réponse: {question.options[userAnswer]} - {isCorrect ? 'Correcte' : 'Incorrecte'}
                </li>
              );
            })
          ))}
        </ul>
      </div>
    );
  };
  
    

  return (
 

        <div >
           <Container>
            <div>
                <Title> Orthographes</Title>
               

            </div>

            {showSections[0] && (
                <><SectionContainer> 
                     <Card>
                     <BodyText>
          {showReport ? renderReport2() : renderQuiz()}

          
          </BodyText>
          <BodyText>
         <strong>N.B</strong> Les exercices sont extraits à partir des examens des années précédentes.
                        </BodyText>
                    </Card>
                    </SectionContainer>
                    </>
            )}
           </Container>


        </div>
     
  );
};

export default QuizApp;
