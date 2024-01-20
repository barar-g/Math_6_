import React from 'react';
import { useNavigate } from 'react-router-dom';
import calculatorIcon from '../composents/home/Icones/calculator-simple.png'; // Assurez-vous d'avoir le bon chemin
import '../composents/home/Major.css'; // Importer les styles

function Acceuil() {
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
        <CardButton title="Division des nombres entiers" navigateTo="/P2A1A" />
        <CardButton title="les multiples et les diviseurs" navigateTo="/P2A1B" />
        <CardButton title="Caractères de divisibilité" navigateTo="/P3A3" />
        <CardButton title="Les Fractions" navigateTo="/P3A4" />
        <CardButton title="Fractions équivalents" navigateTo="/Chap13" />
        <CardButton title="Comparaison des fraction" navigateTo="/P3A5" />
        <CardButton title="Construction des triangles" navigateTo="/P3A6" />
        <CardButton title="Droites remerquable" navigateTo="/P3A7" />
        <CardButton title="Perimetres et Aires" navigateTo="/P3A8" />
        <CardButton title="Calcue des prix" navigateTo="/P2A1C" />
        <CardButton title="Mesures des angles" navigateTo="/Aire2" />
        <CardButton title="Mesures des aires" navigateTo="/Fraction2" />
      </div>
    </div>
  );
}

export default Acceuil;
