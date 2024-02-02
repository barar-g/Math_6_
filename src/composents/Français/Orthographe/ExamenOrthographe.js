// Importer React et les hooks nécessaires
import React from 'react';


import ExerciceList from'./Examen.json'


import QuizApp from './ExercicesOrth';

import   '../../Styles/MajorStyles';


function ExamenOrthographe() {
  return (
    <QuizApp
    quizzes={ExerciceList}
    
    />
  );
}


export default ExamenOrthographe;