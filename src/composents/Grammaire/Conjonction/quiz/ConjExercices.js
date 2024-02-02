

import React, { useState } from 'react';
import useSound from 'use-sound';
import { ProgressBarContainer, FormulaTextF, ProgressBarFiller } from '../../../Styles/MajorStyles';
import '../../grammaire.css';

const ExerciceConj = ({ vocabularyData,  correctSound, incorrectSound }) => {
console.log(vocabularyData)
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);

  const currentQuestion = vocabularyData[currentQuestionIndex];

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setAnswerChecked(false);
  };


console.log(vocabularyData)



  const checkAnswer = () => {
    setAnswerChecked(true);
    const isAnswerCorrect = selectedChoice === currentQuestion.answer;
    setIsCorrect(isAnswerCorrect);
    isAnswerCorrect ? playCorrect() : playIncorrect();
  };

  const retryQuestion = () => {
    setSelectedChoice(null);
    setAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleContinue = () => {
    if (isCorrect) {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < vocabularyData.length) {
        setCurrentQuestionIndex(nextIndex);
        setCorrectAnswersCount(prevCount => prevCount + 1);
        setProgress((correctAnswersCount / vocabularyData.length) * 100);
      } else {
        alert('Fin du quiz!');
        setCurrentQuestionIndex(0);
        setCorrectAnswersCount(0);
        setProgress(0);
      }
    }
    retryQuestion();
  };

  

  return (
    <div className="vocabulary-trainer">
      <ProgressBarContainer>
        <ProgressBarFiller width={progress}/>
      </ProgressBarContainer>
      <FormulaTextF styles={{ fontSize: '1em' }}>Complétez les phrases avec la conjonction appropriée</FormulaTextF>
      <div className="word-teacher-container">
        <div >
          <FormulaTextF><h4>{currentQuestion.question} </h4> </FormulaTextF>
        </div>
      </div>
      <div className="choices">
        {currentQuestion.options.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceSelect(choice)}
            className={`choice-button ${answerChecked && (choice === currentQuestion.answer ? 'correct' : 'incorrect')}`}
          >
            {answerChecked && isCorrect && currentQuestion.answer === choice }
            <span className="choice-text"><FormulaTextF>{choice}</FormulaTextF></span>
          </button>
        ))}
      </div>
      {!answerChecked ? (
        <button
          className="validate-button"
          onClick={checkAnswer}
          disabled={selectedChoice === null}
        >
          <FormulaTextF>Valider</FormulaTextF>
        </button>
      ) : (
        <div className="feedback">
          <FormulaTextF>{isCorrect ? 'Super!' : 'Essaie encore!'}</FormulaTextF>
          <button className="continue-button" onClick={handleContinue}>
            <FormulaTextF>{isCorrect ? 'Continuer' : 'Réessayer'}</FormulaTextF>
          </button>
        </div>
      )}
    </div>
  );
};

export default ExerciceConj;