// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../sounds/correct.mp3';
import incorrectSound from '../../sounds/incorrect.mp3';
import VocabularyTrainerBah from './Exercices';
import vocabularyList from'./DataSujet.json'



function Suj() {
  return (
    <VocabularyTrainerBah
    vocabularyData={vocabularyList}
      //images={images}
      correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default Suj;

