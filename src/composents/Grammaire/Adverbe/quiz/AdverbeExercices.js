// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import AdverbeList from'./DataAdverbet.json'
import ExerciceAdv from './AdvrExercices';





function AdverbeExercice() {
  return (
    <ExerciceAdv
    vocabularyData={AdverbeList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default AdverbeExercice;