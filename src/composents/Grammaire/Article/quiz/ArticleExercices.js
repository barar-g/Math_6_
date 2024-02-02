// Importer React et les hooks nécessaires
import React from 'react';
import correctSound from '../../../sounds/correct.mp3';
import incorrectSound from '../../../sounds/incorrect.mp3';

import ArticleList from'./DataArticlet.json'
import ExerciceArt from './ArtExercices';





function ArticleEx() {
  return (
    <ExerciceArt
    vocabularyData={ArticleList}
    correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}


export default ArticleEx;