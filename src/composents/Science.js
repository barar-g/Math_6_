import React from 'react';
import { useNavigate } from 'react-router-dom';
import flaskIcon from '../composents/home/Icones/flask-potion.png'; // Utiliser l'icône flask
import '../composents/home/Major.css'; // Importer les styles

function Accueil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={flaskIcon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title="Equilibre Alimantaire" navigateTo="/EquilibrAlimantaire" />
        <CardButton title="Equilibre Energitique" navigateTo="/EquilibrEnergitique" />
        <CardButton title="Desertification" navigateTo="/Desertfication" />
        <CardButton title="Pollution" navigateTo="/Pollution" />
        <CardButton title="L'eau et la Santé" navigateTo="/EauEtSante" />
        <CardButton title="La Vaccination" navigateTo="/Vaccination" />
        <CardButton title="Sida" navigateTo="/Sida" />
      </div>
    </div>
  );
}

export default Accueil;