import React from 'react';
import { useNavigate } from 'react-router-dom';
import calculatorIcon from '../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../composents/home/Major.css'; // Importer les styles

function Accueil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={calculatorIcon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title="C1" navigateTo="/C1" />
        <CardButton title="C2" navigateTo="/C2" />
        <CardButton title="C3" navigateTo="/C3" />
        <CardButton title="C4" navigateTo="/C4" />
        <CardButton title="C5" navigateTo="/C5A1" />
        <CardButton title="C6" navigateTo="/C6" />
        <CardButton title="C7" navigateTo="/C7" />
        <CardButton title="M2" navigateTo="/M2" />
        <CardButton title="G1" navigateTo="/G1" />
        <CardButton title="G2" navigateTo="/G2" />
        <CardButton title="G3" navigateTo="/G3" />
      </div>
    </div>
  );
}

export default Accueil;
