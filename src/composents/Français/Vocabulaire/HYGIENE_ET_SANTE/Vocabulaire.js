// Importer React et les hooks nécessaires
import React from 'react';
import VocabularyTrainer from './Testvocabulaire'; // Chemin vers votre composant VocabularyTrainer

// Importer les sons
import useSound from 'use-sound';
import correctSound from '../../sounds/correct.mp3';
import incorrectSound from '../../sounds/incorrect.mp3';

// Importer les données du quiz
import vocabularyList from './Vocabulaire.png/Famille.png/Famillz.json';

// Importer les images
import chambreImg from '../Vocabulaire/Vocabulaire.png/Famille.png/chambre.jpg';
import cousinImg from '../Vocabulaire/Vocabulaire.png/Famille.png/cousin.jpg';
import familleImg from '../Vocabulaire/Vocabulaire.png/Famille.png/famille.jpg';
import grandMereImg from '../Vocabulaire/Vocabulaire.png/Famille.png/grand-mère.jpg';
import grandPereImg from '../Vocabulaire/Vocabulaire.png/Famille.png/grand-père.jpg';
import nappeImg from '../Vocabulaire/Vocabulaire.png/Famille.png/nappe.jpg';
import parentsImg from '../Vocabulaire/Vocabulaire.png/Famille.png/parents.jpg';
import reunionFamilialeImg from '../Vocabulaire/Vocabulaire.png/Famille.png/Réunionfamiliale.jpg';
import soeursImg from '../Vocabulaire/Vocabulaire.png/Famille.png/soeurs.jpg';
import theImg from '../Vocabulaire/Vocabulaire.png/Famille.png/thé.jpg';

// Créez un objet pour passer toutes les images
const images = {
  chambre: chambreImg,
  cousin: cousinImg,
  famille: familleImg,
  "grand-mère": grandMereImg,
  "grand-père": grandPereImg,
  nappe: nappeImg,
  parents: parentsImg,
  Réunionfamiliale: reunionFamilialeImg,
  soeurs: soeursImg,
  thé: theImg
};

function Suj() {
  return (
    <VocabularyTrainer
      vocabularyData={vocabularyList}
      images={images}
      correctSound={correctSound}
      incorrectSound={incorrectSound}
    />
  );
}

export default Suj;
