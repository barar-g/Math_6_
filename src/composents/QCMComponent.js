import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button, Typography, LinearProgress } from '@mui/material';

const QCMComponent = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [userResponses, setUserResponses] = useState([]);
  const [, setIsCorrect] = useState(null);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [finalScore, setFinalScore] = useState(null);
  const [, setShowFinalScore] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [, setElapsedTime] = useState(0);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [questionElapsedTime, setQuestionElapsedTime] = useState(0); // Nouvelle variable

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = (currentQuestionIndex / questions.length) * 100;

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (startTime && !allQuestionsAnswered) {
      const timer = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
        setElapsedTime(elapsedTimeInSeconds);
        setTotalElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        setQuestionElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [startTime, allQuestionsAnswered]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    checkAnswer();
  };

  const checkAnswer = () => {
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(isCorrect);
    setUserResponses((prevResponses) => [
      ...prevResponses,
      {
        question: currentQuestion.text,
        selectedOption,
        isCorrect,
        explanation: currentQuestion.explanation,
        elapsedTime: formatElapsedTime(questionElapsedTime), // Utilise questionElapsedTime
      },
    ]);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setSelectedOption('');
    setIsCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setQuestionElapsedTime(0); // Réinitialise le temps écoulé pour la nouvelle question
    } else {
      setAllQuestionsAnswered(true);
      calculateFinalScore();
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setShowAnswers(false);
    setSelectedOption('');
    setUserResponses([]);
    setIsCorrect(null);
    setAllQuestionsAnswered(false);
    setFinalScore(null);
    setShowFinalScore(false);
    setScore(0);
    setStartTime(Date.now());
    setElapsedTime(0);
    setTotalElapsedTime(0);
    setQuestionElapsedTime(0); // Réinitialise le temps écoulé pour la première question
  };

  const calculateFinalScore = () => {
    const finalScore = (score / questions.length) * 20;
    setFinalScore(finalScore);
    setShowFinalScore(true);
  };

  const formatElapsedTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div>
      {startTime && !allQuestionsAnswered && (
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          Temps écoulé : {formatElapsedTime(totalElapsedTime)}
        </Typography>
      )}

      <LinearProgress variant="determinate" value={progress} />
      <br />

      {allQuestionsAnswered && (
        <div>
          <Card
            sx={{
              maxWidth: 500,
              margin: '20px auto',
              backgroundColor: '',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Score final
              </Typography>
              <Typography variant="body1">Vous avez obtenu : {finalScore.toFixed(2)}/20</Typography>
              <Typography variant="body2">Temps total écoulé : {formatElapsedTime(totalElapsedTime)}</Typography>
            </CardContent>
          </Card>

          {userResponses.map((response, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 500,
                margin: '20px auto',
                backgroundColor: response.isCorrect ? 'lightblue' : 'mistyrose',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Question {index + 1}
                </Typography>
                <Typography variant="body1">{response.question}</Typography>
                <Typography variant="body2">
                  {response.isCorrect
                    ? 'Votre réponse est correcte.'
                    : `Votre réponse est incorrecte. La réponse correcte est : ${currentQuestion.correctAnswer}`}
                </Typography>
                <Typography variant="body2">{response.explanation}</Typography>
                <Typography variant="body2">Temps écoulé : {response.elapsedTime}</Typography> 
              </CardContent>
            </Card>
          ))}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleReset}>
              Réinitialiser
            </Button>
          </div>
        </div>
      )}

      {!allQuestionsAnswered && currentQuestion && (
        <Card
          sx={{
            maxWidth: 700,
            margin: '20px auto',
            transform: showAnswers ? 'rotateY(360deg)' : 'none',
            transition: 'transform 0s',
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Question {currentQuestionIndex + 1}
            </Typography>
            <Typography variant="body1">{currentQuestion.text}</Typography>
            {!showAnswers && (
              <div>
                {currentQuestion.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      id={`option-${optionIndex}`}
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor={`option-${optionIndex}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardActions>
            {!showAnswers && (
              <Button variant="contained" onClick={handleShowAnswers}>
                Valider le choix
              </Button>
            )}
            {showAnswers && (
              <Button variant="contained" onClick={handleNextQuestion}>
                {isLastQuestion ? 'voir la correction' : 'Question suivante'}
              </Button>
            )}
          </CardActions>
        </Card>
      )}
      <br />
    </div>
  );
};

export default QCMComponent;