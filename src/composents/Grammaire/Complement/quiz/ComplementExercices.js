// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import ConplementList from'./DataComplement.json'

import ExerciceComp from './CompExercices';



function ComplementEx() {
  return (
    <ExerciceComp
    vocabularyData={ConplementList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default ComplementEx;