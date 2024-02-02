import React from 'react';
import { useNavigate } from 'react-router-dom';
import languagelearning from '../../home/Icones/language-learning.png' ; // Assurez-vous d'avoir le bon chemin
import '../../home/Major.css'; // Importer les styles

function LesPhrases() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={languagelearning} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title=" La phrase déclarative  " navigateTo="/PhraseDeclarative" />
        <CardButton title="La phrase impérative " navigateTo="/PhraseImperative" />
        <CardButton title="  La phrase exclamative" navigateTo="/Exclamative" />
        <CardButton title=" La phrase interrogative" navigateTo="/Interrogative" />
        <CardButton title=" Exercices" navigateTo="/TypePhExercices" />
        
      
      </div>
    </div>
  );
}

export default LesPhrases;
