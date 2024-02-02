import React from 'react';
import rocketIcon from './Icons/rocket-lunch.png';
import statsIcon from './Icons/stats.png';
import timeIcon from './Icons/time-twenty-four.png';
import quiz from './Icons/quiz.png';
import flask from './Icons/flask-potion.png';
import history from './Icons/history-book.png';
import praying from './Icons/praying.png';
import calculator from './Icons/calculator-simple.png';
import './Major.css';

const Card = ({ title, content, icon, full }) => (
  <div className={`card ${full ? 'full-card' : ''}`}>
    {icon && <img src={icon} alt={title} className="card-icon" />}
    <div className="card-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);

const EducationAppCards = () => {
  return (
    <div className="app-container">
      <div className="card-grid">
        <Card title="temps passé" content="savoir le temp passé sur chaque matiers" icon={timeIcon} />
        <Card title="Resultas" content="Resultas des quiz par matier" icon={statsIcon} />
        <Card title="Quiz du Jour" content="Test aleatoir sur tes matiers!" icon={quiz} />
        <Card title="Major+" content="Travailer sur tes point faible!" icon={rocketIcon} />
      </div>
      <div className="full-width-container">
        <Card title="Science" content="" icon={flask} full />
        <Card title="Math" content="" icon={calculator} full />
        <Card title="التاريخ" content="" icon={history} full />
        <Card title="التربية الاسلامية " content="" icon={praying} full />
      </div>
    </div>
  );
};

export default EducationAppCards;
