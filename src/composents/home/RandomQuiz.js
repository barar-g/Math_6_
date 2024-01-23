import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Button, LinearProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { StyledText1, FormulaText } from '../Styles/MajorStyles';
import './Major.css'; // Adjust path as needed

const QCMComponent = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userResponses, setUserResponses] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [score, setScore] = useState(0);
  const [isRotated, setIsRotated] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [QuestionsAnswered, setQuestionsAnswered] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(true);
  const successColor = '#28a745'; // Green color for correct answers
  const failureColor = '#dc3545'; // Red color for incorrect answers

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = (currentQuestionIndex / questions.length) * 100;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === currentQuestion.correctAnswer);
    setQuestionsAnswered(true);
    setIsRotated(true);

    setTimeout(() => {
      setShowFeedback(true);
      checkAnswer(option); // Call checkAnswer here
    }, 1200);
  };

  const checkAnswer = (option) => {
    const isAnswerCorrect = option === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserResponses((prevResponses) => [
      ...prevResponses,
      {
        question: currentQuestion.text,
        options: currentQuestion.options,
        selectedOption: option,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isAnswerCorrect,
        explanation: currentQuestion.explanation
      },
    ]);

    if (!isLastQuestion) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption('');
        setShowFeedback(false);
        setQuestionsAnswered(false);
        setIsRotated(false);
      }, 10000000); // Adjust delay as needed
    } else {
      setTimeout(() => {
        setAllQuestionsAnswered(true);
        calculateFinalScore();
      }, 1500);
    }
  };

  const calculateFinalScore = () => {
    setFinalScore(((score / questions.length)*10));
  };

  const goToNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption('');
      setIsCorrect(null);
      setShowFeedback(false);
      setQuestionsAnswered(false);
      setIsRotated(false);
    } else {
      setAllQuestionsAnswered(true);
      calculateFinalScore();
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setUserResponses([]);
    setIsCorrect(null);
    setAllQuestionsAnswered(false);
    setFinalScore(null);
    setScore(0);
    setIsRotated(false);
    
  };

  return (
   
    <div className="app-container">
       {!allQuestionsAnswered && currentQuestion && (
      <div style={{ display: 'flex', alignItems: 'center', width: "100%" }}>
        <IconButton variant="outlined" color="primary" onClick={handleClick}>
          <CloseIcon />
        </IconButton>
        <LinearProgress variant="determinate" value={progress+10} style={{ flexGrow: 1 }} />
        <span style={{ marginLeft: '20px' }}>
          {currentQuestionIndex + 1}/{questions.length}
        </span>
      </div>
    )}

      <br />

      {!allQuestionsAnswered && currentQuestion && (
        <Card className={`question-card ${isRotated ? 'card-rotated' : ''}`}>
          <CardContent>
            {(!isRotated || !showFeedback) ? (
              <>
                <FormulaText>{currentQuestion.text}</FormulaText>
                <div>
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOption === option ? 'contained' : 'outlined'}
                      onClick={() => handleOptionSelect(option)}
                      fullWidth
                      className="option-button"
                    >
                      <StyledText1>{option}</StyledText1>
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <FormulaText style={{ color: isCorrect ? successColor : failureColor }}>
                  {isCorrect ? 'Bonne réponse!' : 'Mauvaise réponse!'}
                </FormulaText>
                <FormulaText>Explication: {currentQuestion.explanation}</FormulaText>
              

              </div>
            )}
          </CardContent>
        </Card>
      )}

{allQuestionsAnswered && (
  <div>
    <FormulaText variant="h5" component="h2" style={{ textAlign: 'center', marginBottom: '20px' }}>
      Résultats du Quiz 
    </FormulaText>
    <FormulaText variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>
      Your Score: {finalScore.toFixed(2)}/{questions.length}
    </FormulaText>
    {userResponses.map((response, index) => (
      <Card key={index} className="question-card" style={{ marginBottom: '10px', padding: '10px' }}>
        <CardContent>
          <FormulaText style={{ marginBottom: '15px' }}>{index + 1}. {response.question}</FormulaText>
          <div style={{ marginBottom: '20px' }}>
            {response.options.map((option, idx) => (
              <Button 
                key={idx}
                variant="outlined"
                style={{ 
                  display: 'flex', // Use flex to align items
                  justifyContent: 'space-between', // Space between option text and icon
                  marginBottom: '10px',
                  width: '100%',
                  border: '1px solid #ccc',
                  boxShadow: 'none',
                  color: '#555',
                  pointerEvents: 'none',
                  textTransform: 'none',
                }}
                disabled
              >
                <FormulaText>{option}</FormulaText>
                {option === response.correctAnswer && (
                  <span style={{ color: 'green', fontSize: '2em' }}>✓</span> // Checkmark for correct answer
                )}
                {option === response.selectedOption && option !== response.correctAnswer && (
                  <span style={{ color: 'red', fontSize: '2em' }}>✕</span> // Crossmark for incorrect answer
                )}
              </Button>
            ))}
          </div>
          {response.isCorrect ? (
            <FormulaText style={{ color: successColor }}>
              Tu a choise la bonne réponse!
            </FormulaText>
          ) : (
            <FormulaText style={{ color: failureColor }}>
             Tu a choisie un mal réponse! 
            </FormulaText>
          )}
          <FormulaText> {response.explanation} </FormulaText>
        </CardContent>
      </Card>
    ))}
   
    <Button variant="contained" color="primary" onClick={handleReset} style={{ marginTop: '10px', display: 'block' }}>
      Restart Quiz
    </Button>
  </div>
)}




{!allQuestionsAnswered && currentQuestion && (
      <div className="footer-buttons">
        <button color="secondary">
          Mini-cours
        </button>
        <IconButton aria-label="next question" onClick={goToNextQuestion} disabled={!QuestionsAnswered || isLastQuestion || allQuestionsAnswered}>
          <ArrowForward />
        </IconButton>
      </div>
)}
    </div>
  );
};

export default QCMComponent;
