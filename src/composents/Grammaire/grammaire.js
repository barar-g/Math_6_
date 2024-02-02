import React from 'react';
import { useNavigate } from 'react-router-dom';
import languagelearning from '../home/Icones/language-learning.png' ; // Assurez-vous d'avoir le bon chemin
import '../home/Major.css'; // Importer les styles

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
  const handleClick2 = () => {
      
    navigate('/RangeExample');
};
  return (
    <div className="app-container">
      <div className="card-grid">
      
        <CardButton title=" Sujet" navigateTo="/Sujet" />
        <CardButton title=" les types des phrases" navigateTo="/TypesDesPhrases" />
        <CardButton title=" Complément d'objet " navigateTo="/Complement" />
       
        <CardButton title=" Adjectif" navigateTo="/Adjectif" />
        
        <CardButton title=" Adverbe" navigateTo="/Adverbe" />
        <CardButton title=" Conjonction" navigateTo="/Conjonction" />
        <CardButton title=" Préposition " navigateTo="/Préposition" />
        <CardButton title=" Article  " navigateTo="/Article" />
        
        <button className="boutonVert" onClick={handleClick2}>bootstrap</button>
      
      </div>
    </div>
  );
}

export default Acceuil;
