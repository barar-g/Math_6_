import React, { useState } from 'react';
import vocabularyList from './Famille.json'; // Assurez-vous que le chemin vers vos données JSON est correct
import './Vocabulaire.css'; // Mettez à jour le chemin si nécessaire
import useSound from "use-sound";
import correctSound from '../../sounds/correct.mp3';
import incorrectSound from '../../sounds/incorrect.mp3';
import { ProgressBarContainer, FormulaTextF, ProgressBarFiller } from '../../Styles/MajorStyles';

const VocabularyTrainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null); // Initialisation à null
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Suivre le nombre de bonnes réponses
  const [progress, setProgress] = useState(0);

  const currentQuestion = vocabularyList[currentQuestionIndex];

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setAnswerChecked(false);
  };

  const checkAnswer = () => {
    setAnswerChecked(true);
    const isAnswerCorrect = selectedChoice === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      play(); // Jouer le son de bonne réponse
    } else {
      play1(); // Jouer le son de mauvaise réponse
    }
  };

  const retryQuestion = () => {
    setSelectedChoice(null);
    setAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleContinue = () => {
    if (isCorrect) {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < vocabularyList.length) {
        setCurrentQuestionIndex(nextIndex);
        setCorrectAnswersCount(prevCount => prevCount + 1); // Incrémenter si la réponse est correcte
        setProgress((correctAnswersCount / vocabularyList.length) * 100);
      } else {
        alert('Fin du quiz!');
        setCurrentQuestionIndex(0);
        setCorrectAnswersCount(0); // Réinitialiser le compteur de bonnes réponses
        setProgress(0);
      }
    }
    retryQuestion();
  };

  return (
    <div className="vocabulary-trainer">
      <ProgressBarContainer>
        <ProgressBarFiller width={progress} />
      </ProgressBarContainer>
      <FormulaTextF styles={{fontSize:'1em'}}><h4>Choisis la bonne traduction</h4></FormulaTextF>
      <div className="word-teacher-container">
        <div className="word-card"><FormulaTextF>{currentQuestion.word} ? </FormulaTextF></div>
      </div>
      <div className="choices">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceSelect(choice)}
            className={`choice-button ${answerChecked ? (choice === currentQuestion.correctAnswer ? 'correct' : 'incorrect') : ''}`}
          >
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

export default VocabularyTrainer;
