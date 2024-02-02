import React from 'react';
import { useNavigate } from 'react-router-dom';
import prayingIcon from '../composents/home/Icones/praying.png'; // Assurez-vous d'avoir le bon chemin
import '../composents/home/Major.css'; // Importer les styles

function Accueil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={prayingIcon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title="السيرة النبوية" navigateTo="/Islamique1" />
        <CardButton title="الاخلاق" navigateTo="/Islamique2" />
        <CardButton title="العقيدة" navigateTo="/Islamique3" />
        <CardButton title="العبادات" navigateTo="/Islamique4" />
      </div>
    </div>
  );
}

export default Accueil;
