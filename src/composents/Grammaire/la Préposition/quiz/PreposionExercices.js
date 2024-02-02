// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import vocabularyList from'./DataPreposition.json'
import ExercicePréposition from './Exercices';



function PrepEx() {
  return (
    <ExercicePréposition
    vocabularyData={vocabularyList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default PrepEx;