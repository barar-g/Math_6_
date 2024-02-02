// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import ConjonctionList from'./DataConjonction.json'
import ExerciceConj from './ConjExercices';



function ConjonctionEx() {
  return (
    <ExerciceConj
    vocabularyData={ConjonctionList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default ConjonctionEx;