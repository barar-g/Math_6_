// src/components/VocabularyTrainer.js
import React, { useState } from 'react';
import vocabularyData from './Vocabulaire.json'; // Make sure the path to your JSON data is correct
import './Vocabulaire.css'; // Update the path if necessary
import Fratecher from '../Images/Fratecher.png'
const VocabularyTrainer = () => {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setAnswerChecked(false);
  };

  const checkAnswer = () => {
    setAnswerChecked(true);
    setIsCorrect(selectedChoice === vocabularyData.correctAnswer);
  };

  const handleContinue = () => {
    // Reset the state for the next question
    setSelectedChoice('');
    setAnswerChecked(false);
    setIsCorrect(false);
    // TODO: Load the next question from the JSON data
  };

  return (
    <div className="vocabulary-trainer">     
     <h2>Choisis la bonne traduction</h2>
     <div className="word-teacher-container">
  <img src={Fratecher} alt="Teacher" className="teacher-image" />
  <div className="word-card">{vocabularyData.word}</div>
</div>

      <div className="choices">
        {vocabularyData.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceSelect(choice)}
            className={`choice-button ${answerChecked ? (choice === vocabularyData.correctAnswer ? 'correct' : 'incorrect') : ''}`}
            disabled={answerChecked}
          >
            {choice}
          </button>
        ))}
      </div>
      {!answerChecked ? (
        <button className="validate-button" onClick={checkAnswer}>
          Valider
        </button>
      ) : (
        <div className="feedback">
          <p>{isCorrect ? 'Super!' : 'Essaie encore!'}</p>
          <button className="continue-button" onClick={handleContinue}>
            CONTINUER
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabularyTrainer;
