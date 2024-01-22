import React, { useState } from 'react';
import { Card, CardContent,  Button } from '@mui/material';
import './Major.css'; 
import { StyledText1 ,FormulaText} from '../Styles/MajorStyles';
import RefreshIcon from '@mui/icons-material/Refresh';




const QCMComponent = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userResponses, setUserResponses] = useState([]);
  const successColor = '#28a745'; // Green color for correct answers
const failureColor = '#dc3545'; // Red color for incorrect answers
  const [isCorrect, setIsCorrect] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);
// Other state declarations...
const [showAnswers, setShowAnswers] = useState(false); // Add this line
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;



  

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
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption('');
      setIsCorrect(null);
      setShowAnswers(false);
    } else {
      setCurrentQuestionIndex(0);
      setSelectedOption('');
      setUserResponses([]);
    }
  };

  

  

 

 

 

  return (
    <div className="app-container">
     
   

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
                  {isCorrect ? 'احسنت !!' : 'اجابة غلط'}
                </FormulaText>
                <FormulaText>  :الشرح </FormulaText>
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

      

    </div>
  );
};

export default QCMComponent;


