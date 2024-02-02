import React from 'react';
import { useNavigate } from 'react-router-dom';
import languagelearning from '../composents/home/Icones/language-learning.png'; // Assurez-vous d'avoir le bon chemin
import '../composents/home/Major.css'; // Importer les styles

function Acceuil() {
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
        <CardButton title=" être" navigateTo="/Etre" />
       <CardButton title="avoir" navigateTo="/Etre" />
        <CardButton title="faire" navigateTo="/Etre" />
        <CardButton title="aler" navigateTo="/Etre" />
        <CardButton title="pouvoir" navigateTo="/Etre" />
        <CardButton title="vouloir" navigateTo="/Etre" />
        <CardButton title="Dire" navigateTo="/Etre" />
        <CardButton title="Manger" navigateTo="/Etre" />
        <CardButton title="chanter" navigateTo="/Etre" />
        <CardButton title="Parler" navigateTo="/Etre" />
        <CardButton title="Savoir" navigateTo="/Etre" />
        <CardButton title="Pousser" navigateTo="/Etre" /> 
      </div>
    </div>
  );
}

export default Acceuil;
