import React from 'react';
import { useNavigate } from 'react-router-dom';
import historyIcon from '../composents/home/Icones/history-book.png'; // Assurez-vous d'avoir le bon chemin
import '../composents/home/Major.css'; // Importer les styles

function Accueil() {
  const navigate = useNavigate();

  const CardButton = ({ title, navigateTo }) => (
    <div className="card full-card" onClick={() => navigate(navigateTo)}>
      <img src={historyIcon} alt={title} className="card-icon" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <div className="card-grid">
        <CardButton title="1الملف" navigateTo="/Hist1" />
        <CardButton title="2الملف" navigateTo="/Hist2" />
        <CardButton title="3الملف" navigateTo="/Hist3" />
        <CardButton title="4الملف" navigateTo="/Hist4" />
        <CardButton title="5الملف" navigateTo="/Hist5" />
        <CardButton title="6الملف" navigateTo="/Hist6" />
        <CardButton title="7الملف" navigateTo="/Hist7" />
        <CardButton title="8الملف" navigateTo="/Hist8" />
        <CardButton title="9الملف" navigateTo="/Hist9" />
        <CardButton title="10الملف" navigateTo="/Hist10" />
        <CardButton title="11الملف" navigateTo="/Hist11" />
        <CardButton title="12الملف" navigateTo="/Hist12" />
        <CardButton title="13الملف" navigateTo="/Hist13" />
        <CardButton title="14الملف" navigateTo="/Hist14" />
        <CardButton title="15الملف" navigateTo="/Hist15" />
        <CardButton title="16الملف" navigateTo="/Hist16" />
        <CardButton title="17الملف" navigateTo="/Hist17" />
        <CardButton title="18الملف" navigateTo="/Hist18" />
      </div>
    </div>
  );
}

export default Accueil;
