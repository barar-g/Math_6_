import React from 'react';
import { useNavigate } from 'react-router-dom';
import languagelearning from '../../home/Icones/language-learning.png' ; // Assurez-vous d'avoir le bon chemin
import '../../home/Major.css'; // Importer les styles

function Article1() {


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
        <CardButton title=" Article définis" navigateTo="/Définis" />
        <CardButton title=" Article indéfinis" navigateTo="/Indéfinis" />
        <CardButton title=" Article partitifs " navigateTo="/Partitif" />
        <CardButton title=" Exercices" navigateTo="/ArticleEx" />
        
        
      
      </div>
    </div>
  );
}

export default Article1;
