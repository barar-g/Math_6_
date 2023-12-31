import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import './Major.css'; // Make sure this path is correct for your project structure
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledText1 ,FormulaText} from '../Styles/MajorStyles';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';



const QCMComponent = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userResponses, setUserResponses] = useState([]);
  const successColor = '#28a745'; // Green color for correct answers
const failureColor = '#dc3545'; // Red color for incorrect answers
  const [isCorrect, setIsCorrect] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isRotated, setIsRotated] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);
// Other state declarations...
const [showAnswers, setShowAnswers] = useState(false); // Add this line

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = (currentQuestionIndex / questions.length) * 100;

  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === currentQuestion.correctAnswer);
    
    // Start the rotation
    setIsRotated(true);

    // Set a timeout to display feedback after rotation
    setTimeout(() => {
      setShowFeedback(true);
    }, 500); // Adjust based on rotation duration
  };

  const handleRestartCard = () => {
    setIsRotated(false);
    setShowFeedback(false);
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
        selectedOption: option,
        isCorrect: isAnswerCorrect
      },
    ]);


    // Move to the next question after a slight delay
    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
       
        setSelectedOption('');
        setShowAnswers(false);
      } else {
        setAllQuestionsAnswered(true);
        setShowFinalScore(true);
        calculateFinalScore();
      }
    }, 500);
  };

  const calculateFinalScore = () => {
    setFinalScore((score / questions.length) * 100);
  };

  const goToNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption('');
      setIsCorrect(null);
      setShowAnswers(false);
    } else {
      setAllQuestionsAnswered(true);
      setShowFinalScore(true);
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
    setShowFinalScore(false);
    setScore(0);
    
  };

 

  return (
    <div className="app-container">
     
      <div style={{ display: 'flex', alignItems: 'center',width:"100%" }}>
      <span style={{ marginRight: '20px' }}>
      <IconButton variant="outlined" color="primary" onClick={""}>
    <CloseIcon />
  </IconButton>
  </span>
  <LinearProgress variant="determinate" value={progress} style={{ flexGrow: 1 }} />
  <span style={{ marginLeft: '20px' }}>
    {currentQuestionIndex + 1}/10
  </span>
</div>

      <br />

      {!allQuestionsAnswered && currentQuestion && (
        <Card className={`question-card ${isRotated ? 'card-rotated' : ''}`}>
          <CardContent>
            {(!isRotated || !showFeedback) ? (
              <>
                {/* Question and Options */}
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
                {/* Feedback and Explanation */}
                <FormulaText variant="body2" style={{ color: isCorrect ? successColor : failureColor }}>
                  {isCorrect ? 'Bonne réponse!' : 'Mauvaise réponse!'}
                </FormulaText>
                <FormulaText>  Explication: </FormulaText>
                 <FormulaText>{currentQuestion.explanation} {/* Assuming each question has an 'explanation' field */}
                </FormulaText>
                <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <RefreshIcon variant="contained" color="primary" onClick={handleRestartCard} >
                    
                  </RefreshIcon>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {allQuestionsAnswered && showFinalScore && (
        <Card className="result-card">
          <CardContent>
            <FormulaText variant="h5" component="h2">
              Résultats du quiz
            </FormulaText>
            <FormulaText variant="h6">
              Votre score : {finalScore.toFixed(2)}
            </FormulaText>
            <Button variant="contained" color="primary" onClick={handleReset}>
              Recommencer
            </Button>
          </CardContent>
        </Card>
      )}
<div className="footer-buttons">
<button  color="secondary">
        Mini-cours
      </button>
     
      <IconButton aria-label="next question" onClick={goToNextQuestion} disabled={isLastQuestion || allQuestionsAnswered}>
          <ArrowForward />
        </IconButton>
    </div>

    </div>
  );
};

export default QCMComponent;


//  <Typography variant="body1" style={{ textAlign: 'center' }}>
// Temps écoulé : {formatElapsedTime(totalElapsedTime)}
//</Typography>