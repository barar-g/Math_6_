import React from 'react';
import { useNavigate } from 'react-router-dom';
import languagelearning from '../../home/Icones/language-learning.png' ; // Assurez-vous d'avoir le bon chemin
import '../../home/Major.css'; // Importer les styles
import '../grammaire.css'
function Conjonctions() {
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
        <CardButton title=" Conjonctions de coordination " navigateTo="/Coordination" />
        <CardButton title=" Conjonctions de subordination" navigateTo="/Subordination" />
        <CardButton  className="boutonVert" title=" Ecercices" navigateTo="/ConjonctionEx" />
        
      
      </div>
    </div>
  );
}

export default Conjonctions;
