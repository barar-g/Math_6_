// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import AdverbeList from'./DataAdjectif.json'

import ExerciceAdj from './AdjecExercices';





function AdjectiveExercice() {
  return (
    <ExerciceAdj
    vocabularyData={AdverbeList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default AdjectiveExercice;