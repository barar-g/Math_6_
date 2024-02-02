import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './composents/Accueil';
import Math from './composents/Math';
import Français from './composents/Français';
import QuizTest from './composents/home/QuizTest';
import Vocabulaire from './composents/Français/Vocabulaire/Vocabulaire';
import Acueilvocabulaire from './composents/Français/Vocabulaire/Acueilvocabulaire';
import Vocabulaireecoleville from'./composents/Français/Vocabulaire/Vocabulaire.png/EcoleVille.png/Vocabulaireecoleville';
import C1 from './composents/C1/C1';
import C2 from './composents/C2/C2';
import C3 from './composents/C3/C3';
import C4 from './composents/C4/C4';
import C5 from './composents/C5/C5';
import G2 from './composents/G2/G2';
import C5A3 from './composents/C6/C5A3';
import C5A4 from './composents/C6/C5A4';
import Kangaroo from './composents/C6/Kangaroo';
import C5A5 from './composents/C6/C5A5';
import C6 from './composents/C6/C6';
import C7 from './composents/C7/C7';
import M2A1 from './composents/M2/M2A1';
import M2A2 from './composents/M2/M2A2';
import M2A3 from './composents/M2/M2A3';
import M2 from './composents/M2/M2';
import G3 from './composents/G3/G3';
import G1A2 from './composents/G1/G1A2';
import G1 from './composents/G1/G1';
import P2A1A from './composents/C09/P2A1A';
import P2A1C from './composents/C10/P2A1C';
import P2A1B from './composents/C12/P2A1B';
import P3A3 from './composents/C11/P3A3';
import P3A4 from './composents/C13/P3A4';
import P3A6 from './composents/G4/P3A6';
import P3A7 from './composents/G5/P3A7';
import P3A8 from './composents/M4/P3A8';
import Aire2 from './composents/M3/Aire2';
import P3A5 from'./composents/C14_C15_C16/P3A5';
import Chap13 from'./composents/C16/Chap13';
import Fraction2 from './composents/M5/Fraction2';
import Periode1 from './composents/Periode1';
import Periode2 from './composents/Periode2';
import Islamique from './composents/Islamique';
import Science from './composents/Science';
import Histoire from './composents/Histoire';
import Hist1 from './composents/Histoire/Chapitre1/hist1';
import Islamique1 from './composents/Islam/Chapitre1/Islamique1';
import Islamique2 from './composents/Islam/Chapitre2/Islamique2';
import Islamique3 from './composents/Islam/Chapitre3/Islamique3';
import Islamique4 from './composents/Islam/Chapitre4/Islamique4';
import Hist2 from './composents/Histoire/Chapitre2/hist2';
import Hist3 from './composents/Histoire/Chapitre3/hist3';
import Hist4 from './composents/Histoire/Chapitre4/hist4';
import Hist5 from './composents/Histoire/Chapitre5/hist5';
import Hist6 from './composents/Histoire/Chapitre6/hist6';
import Hist7 from './composents/Histoire/Chapitre7/hist7';
import Hist8 from './composents/Histoire/Chapitre8/hist8';
import Hist9 from './composents/Histoire/Chapitre9/hist9';
import Hist10 from './composents/Histoire/Chapitre10/hist10';
import Hist11 from './composents/Histoire/Chapitre11/hist11';
import Hist12 from './composents/Histoire/Chapitre12/hist12';
import Hist13 from './composents/Histoire/Chapitre13/hist13';
import Hist14 from './composents/Histoire/Chapitre14/hist14';
import Hist15 from './composents/Histoire/Chapitre15/hist15';
import Hist16 from './composents/Histoire/Chapitre16/hist16';
import Hist17 from './composents/Histoire/Chapitre17/hist17';
import Hist18 from './composents/Histoire/Chapitre18/hist18';
import EquilibrAlimantaire from './composents/Science/Chapitre1/EquilibreAlimantaire';
import EquilibrEnergitique from './composents/Science/Chapitre2/EquilibreEnergitique';
import Desertification from './composents/Science/Chapitre3/Desertification';
import Pollution from './composents/Science/Chapitre4/Pollution';  
import EauEtSante from './composents/Science/Chapitre5/EauEtSante';
import Vaccination from './composents/Science/Chapitre6/Vaccination';
import Sida from './composents/Science/Chapitre7/Sida';
import Periode3 from './composents/periode3';
import Etre from './composents/Conjugaison/etre/etre';
import Grammaire from './composents/Grammaire/grammaire';
import Sujet from './composents/Grammaire/Sujet/Sujet';
import TypesDesPhrases from './composents/Grammaire/Types des phrases/lesphrases'
import PhraseDeclarative from './composents/Grammaire/Types des phrases/Prase Declarative/PhraseDeclarative'
import PhraseImperative from './composents/Grammaire/Types des phrases/phrase impérative/phraseImperative'
import Exclamative from './composents/Grammaire/Types des phrases/phrase exclamative/exclamative'
import Interrogative from './composents/Grammaire/Types des phrases/La phrase interrogative/interrogative'
import Verbe from './composents/Grammaire/le verbe/verbe'
import Complement from './composents/Grammaire/Complement/Complement'
import COD from './composents/Grammaire/Complement/COD'
import COI from './composents/Grammaire/Complement/COI/COID'
import CC from './composents/Grammaire/Complement/Circonstanciel/CC'
import Adjectif from './composents/Grammaire/adjectif/adjectif'
import Adverbe from './composents/Grammaire/Adverbe/Adverbe'
import Conjonction from './composents/Grammaire/Conjonction/Conjonction'
import Subordination from './composents/Grammaire/Conjonction/Conj Subordination/Subordination'

import Coordination from './composents/Grammaire/Conjonction/Coordination/Coordination'
import Préposition from './composents/Grammaire/la Préposition/Préposition'
import Article from './composents/Grammaire/Article/Article'
import Article1 from './composents/Grammaire/Article/Article1'
import Définis from './composents/Grammaire/Article/Définis'
import Indéfinis from './composents/Grammaire/Article/Indéfinis'
import Partitif from './composents/Grammaire/Article/partitif'


import VocabularyTrainerBah from './composents/Grammaire/Sujet/Exercices'
import ExSuj from './composents/Grammaire/Sujet/ExerciceSujet'
import PrepEx from './composents/Grammaire/la Préposition/quiz/PreposionExercices'

import ExercicePréposition from './composents/Grammaire/la Préposition/quiz/Exercices'
import ConjonctionEx from './composents/Grammaire/Conjonction/quiz/ConjonctionExercices'

import ComplementEx from './composents/Grammaire/Complement/quiz/ComplementExercices'
import ArticleEx from './composents/Grammaire/Article/quiz/ArticleExercices'
import AdverbeExercice from './composents/Grammaire/Adverbe/quiz/AdverbeExercices'
import AdjectiveExercice from './composents/Grammaire/adjectif/quiz/AdjectiveExercices'
import TypePhExercices from './composents/Grammaire/Types des phrases/quiz/TypePhExercices'
//Orthographe  
import Orthographe from './composents/Français/Orthographe/Orthographe'
import ExamenQCM from './composents/home/QuizTest'

import ExamenOrthographe from './composents/Français/Orthographe/ExamenOrthographe'
import Quiz from './composents/Français/Orthographe/ExercicesOrth'
import RangeExample from './composents/Français/Orthographe/boot'
function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
           
          <Route path= "/" element={<Accueil/>} />
          <Route path= "/QuizTest" element={<QuizTest/>} />
          <Route path="/C1" element ={<C1/>}/>
          <Route path="/C2" element ={<C2/>}/>
          <Route path="/C3" element ={<C3/>}/>
          <Route path="/C4" element ={<C4/>}/>
          <Route path="/C5A1" element ={<C5/>}/>
          <Route path="/Math" element ={<Math/>}/>
          <Route path="/C5A3" element ={<C5A3/>}/>
          <Route path="/C5A4" element ={<C5A4/>}/>
          <Route path="/Kangaroo" element ={<Kangaroo/>}/>
          <Route path="/C5A5" element ={<C5A5/>}/>
          <Route path="/C6" element ={<C6/>}/>
          <Route path="/C7" element ={<C7/>}/>
          <Route path="/M2A1" element ={<M2A1/>}/>
          <Route path="/M2A2" element ={<M2A2/>}/>
          <Route path="/M2A3" element ={<M2A3/>}/>
          <Route path="/M2" element ={<M2/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/G2" element ={<G2/>}/>
          <Route path="/G1A2" element ={<G1A2/>}/>
          <Route path="/G3" element ={<G3/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/Periode1" element ={<Periode1/>}/>
          <Route path="/Periode2" element ={<Periode2/>}/>
          <Route path="/Islamique" element ={<Islamique/>}/>
          <Route path="/Science" element ={<Science/>}/>
          <Route path="/Histoire" element ={<Histoire/>}/>
          <Route path="/Hist1" element ={<Hist1/>}/>
          <Route path="/Hist2" element ={<Hist2/>}/>
          <Route path="/Hist3" element ={<Hist3/>}/>
          <Route path="/Hist4" element ={<Hist4/>}/>
          <Route path="/Hist5" element ={<Hist5/>}/>
          <Route path="/Hist6" element ={<Hist6/>}/>
          <Route path="/Hist7" element ={<Hist7/>}/>
          <Route path="/Hist8" element ={<Hist8/>}/>
          <Route path="/Hist9" element ={<Hist9/>}/>
          <Route path="/Hist10" element ={<Hist10/>}/>
          <Route path="/Hist11" element ={<Hist11/>}/>
          <Route path="/Hist12" element ={<Hist12/>}/>
          <Route path="/Hist13" element ={<Hist13/>}/>
          <Route path="/Hist14" element ={<Hist14/>}/>
          <Route path="/Hist15" element ={<Hist15/>}/>
          <Route path="/Hist16" element ={<Hist16/>}/>
          <Route path="/Hist17" element ={<Hist17/>}/>
          <Route path="/Hist18" element ={<Hist18/>}/>
          <Route path="/EquilibrAlimantaire" element ={<EquilibrAlimantaire/>}/>
          <Route path="/EquilibrEnergitique" element ={<EquilibrEnergitique/>}/>
          <Route path="/Desertfication" element ={<Desertification/>}/>
          <Route path="/Pollution" element ={<Pollution/>}/>
          <Route path="/EauEtSante" element ={<EauEtSante/>}/>
          <Route path="/Vaccination" element ={<Vaccination/>}/>
          <Route path="/P2A1A" element ={<P2A1A/>}/>
          <Route path="/P2A1C" element ={<P2A1C/>}/>
          <Route path="/P2A1B" element ={<P2A1B/>}/>
          <Route path="/P3A3" element ={<P3A3/>}/>
          <Route path="/P3A4" element ={<P3A4/>}/>
          <Route path="/P3A5" element ={<P3A5/>}/>
          <Route path="/P3A6" element ={<P3A6/>}/>
          <Route path="/P3A7" element ={<P3A7/>}/>
          <Route path="/P3A8" element ={<P3A8/>}/>
          <Route path="/Chap13" element ={<Chap13/>}/>
          <Route path="/Aire2" element ={<Aire2/>}/>
          <Route path="/Fraction2" element ={<Fraction2/>}/>
          <Route path="/Sida" element ={<Sida/>}/>
          <Route path="/Islamique1" element ={<Islamique1/>}/>
          <Route path="/Islamique2" element ={<Islamique2/>}/>
          <Route path="/Islamique3" element ={<Islamique3/>}/>
          <Route path="/Islamique4" element ={<Islamique4/>}/>  
         {/*________________________Conjugaison____________________*/}
          <Route path="/Français" element ={<Français/>}/>   
          <Route path="/periode3" element ={<Periode3 />}/>
          <Route path="/Etre" element ={<Etre />}/>
        {/*________________________Grammaire____________________*/}
        <Route path="/Grammaire" element ={<Grammaire />}/>
        <Route path="/Sujet" element ={<Sujet />}/>
        <Route path="/TypesDesPhrases" element ={<TypesDesPhrases />}/>
        <Route path="/PhraseDeclarative" element ={<PhraseDeclarative />}/>
        <Route path="/PhraseImperative" element ={<PhraseImperative />}/>
        <Route path="/Exclamative" element ={<Exclamative />}/>
        <Route path="/Interrogative" element ={<Interrogative />}/>
        <Route path="/Verbe" element ={<Verbe />}/>
        <Route path="/Complement" element ={<Complement />}/>
        <Route path="/COD" element ={<COD />}/>
        <Route path="/COI" element ={<COI />}/>
        <Route path="/CC" element ={<CC />}/>
        <Route path="/Conjonction" element ={<Conjonction />}/>
        <Route path="/Subordination" element ={<Subordination />}/>
        <Route path="/Coordination" element ={<Coordination />}/>
        <Route path="/Préposition" element ={<Préposition />}/>
        <Route path="/Article" element ={<Article/>}/>
        <Route path="/Article1" element ={<Article1/>}/>
        <Route path="/Définis" element ={<Définis/>}/>
        <Route path="/Indéfinis" element ={<Indéfinis/>}/>
        <Route path="/Partitif" element ={<Partitif/>}/>
         {/*________________________Exercices Grammaire____________________*/}
      
          <Route path="/VocabularyTrainerBah" element ={<VocabularyTrainerBah/>}/> 
           
           <Route path="/ExSuj" element ={<ExSuj/>}/>
           <Route path="/PrepEx" element ={<PrepEx/>}/>
           <Route path="/ExercicePréposition" element ={<ExercicePréposition/>}/>
           <Route path="/ConjonctionEx" element ={<ConjonctionEx/>}/>
           <Route path="/ComplementEx" element ={<ComplementEx/>}/>
           <Route path= "/ArticleEx" element={<ArticleEx/>} />
           <Route path= "/AdverbeExercice" element={<AdverbeExercice/>} />
           <Route path= "/AdjectiveExercice" element={<AdjectiveExercice/>} />
           <Route path= "/TypePhExercices" element={<TypePhExercices/>} />
 {/*________________________Orthographe____________________*/}
            <Route path= "/Orthographe" element={<Orthographe/>} />   
            <Route path= "/ExamenQCM" element={<ExamenQCM/>} />
            <Route path= "/ExamenOrthographe" element={<ExamenOrthographe/>} />
            <Route path= "/Quiz" element={<Quiz/>} />
        <Route path="/Adjectif" element ={<Adjectif />}/>
        <Route path="/Adverbe" element ={<Adverbe />}/>
          <Route path= "/Vocabulaire" element={<Vocabulaire/>} />
          <Route path= "/Acueilvocabulaire" element={<Acueilvocabulaire/>} />
          <Route path= "/Vocabulaireecoleville" element={<Vocabulaireecoleville/>} />
          <Route path= "/RangeExample" element={<RangeExample/>} />
        </Routes>
      
      </div>
    </Router>
  )
}

export default App;
 