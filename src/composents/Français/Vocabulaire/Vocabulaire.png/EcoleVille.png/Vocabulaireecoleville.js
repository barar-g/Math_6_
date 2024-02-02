// Importer React et les hooks nécessaires
import React from 'react';
import VocabularyTrainer from '../../Testvocabulaire'; // Chemin vers votre composant VocabularyTrainer

// Importer les sons
import useSound from 'use-sound';
import correctSound from '../../../../sounds/correct.mp3';
import incorrectSound from '../../../../sounds/incorrect.mp3';

// Importer les données du quiz
import vocabularyList from './Ecolleville.json'; // Chemin ajusté pour Ecolleville.json

// Importer les images
import carriereImg from './carrière.jpg';
import cooperationImg from './Coopération.jpg';
import creativiteImg from './Créativité.jpg';
import cuisinierImg from './cuisiner.jpg';
import ecoleImg from './école.jpg';
import educationImg from './Éducation.jpg';
import laverImg from './laver.jpg';
import lireImg from './lire.jpg';
import partageImg from './Partage.jpg';
import penserImg from './penser.jpg';
import salleDeClasseImg from './salledeclasse.jpg';

// Créez un objet pour passer toutes les images
const images = {
  carrière: carriereImg,
  coopération: cooperationImg,
  créativité: creativiteImg,
  cuisinier: cuisinierImg,
  école: ecoleImg,
  éducation: educationImg,
  laver: laverImg,
  lire: lireImg,
  partage: partageImg,
  penser: penserImg,
  "salle de classe": salleDeClasseImg
};

function App() {
  return (
    <VocabularyTrainer
      vocabularyData={vocabularyList}
      images={images}
      correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}

export default App;
