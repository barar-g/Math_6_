// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import TypePhraseList from'./DataTypePhrase.json'

import ExerciceTYPH from './TyPExercices';





function TypePhExercices() {
  return (
    <ExerciceTYPH
    vocabularyData={TypePhraseList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default TypePhExercices;