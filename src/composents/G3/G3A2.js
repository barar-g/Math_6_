import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Slider from '@mui/material/Slider';
import { Card, StyledText } from '../Styles/MajorStyles';

const AngleActivity = () => {
  const [angle, setAngle] = useState(8);
  const [message, setMessage] = useState("glisser le slider pour ouvrir l'angle");
  const [messageColor, setMessageColor] = useState("#000");


  const getTextPosition = (radius, angle) => {
    // Calculer la position à mi-chemin de l'arc pour l'angle donné
    const halfAngle = angle / 2;
    // Calculer la distance où le texte doit être placé
    // Plus l'angle est grand, plus la distance peut être petite
    const distance = angle < 90 ? radius + 40 : radius + 20;
    
    // Utiliser polarToCartesian pour trouver le point le long du bord de l'arc
    const position = polarToCartesian(100, 100, distance, halfAngle);
    
    // Retourner cette position
    return position;
  }; 
  
  
  
  const handleSliderChange = (event, newValue) => {
    setAngle(newValue);
  };
  const verifyAngle = () => {
    let typeAngle = "";
    let description = "";
    let color = "#000"; // couleur par défaut

    if (angle <= 80) {
      typeAngle = "aigu";
      description = "Un angle aigu mesure moins de 90 degrés.";
      color = "#4CAF50"; // Vert pour l'angle aigu
    } else if (angle >= 85 && angle <= 95) {
      typeAngle = "droit";
      description = "Un angle droit mesure exactement 90 degrés.";
      color = "#2196F3"; // Jaune pour l'angle droit
    } else if (angle >= 100) {
      typeAngle = "obtus";
      description = "Un angle obtus mesure plus de 90 degrés mais moins de 180 degrés.";
      color = "#F44336"; // Rouge pour l'angle obtus
    }

    setMessage(`Vous avez formé un angle ${typeAngle}. ${description}`);
    setMessageColor(color);
};

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", x, y,
      "Z"
    ].join(" ");
    return d;
  };

  const radius = 60; 




  const resetAngle = () => {
    setAngle(8);
    setMessage("glisser le slider pour ouvrir l'angle");
  };

  const segmentStyle = {
    position: 'absolute',
    bottom: '50%', 
    left: '50%',
    width: '6px',
    height: '70%',
    marginLeft: '-2px',
    borderRadius: '2px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    transformOrigin: 'bottom',
    transition: 'none',
    backgroundColor: '#2193b0'
  };
  

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <StyledText>Formez un angle et découvrez s'il est aigu, droit ou obtus!</StyledText>
      </Card>
    <br></br>
      <div style={{ position: 'relative', width: '200px', height: '200px', margin: '40px auto' }}>
  <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: '0', left: '0' }}>
    <path d={describeArc(100, 100, radius, 0, angle)} fill="red" />
    {angle > 0 && ( // On ne montre le texte que si l'angle est supérieur à 0
      <text x={getTextPosition(radius, angle).x} y={getTextPosition(radius, angle).y} fill="white" dy=".3em" textAnchor="middle">
        {angle}°
      </text>
    )}
  </svg>
  <div style={{ ...segmentStyle, top: '50%', transform: 'translate(-50%, -100%)' }}></div>
  <div
    style={{
      ...segmentStyle,
      top: '50%',
      transform: `translate(-50%, -100%) rotate(${angle}deg)`
    }}
  >
  </div>
</div>
<br></br>
      <Card>
      <StyledText style={{color: messageColor}}>{message}</StyledText>
      </Card>

      <div style={{ width: '80%', marginTop: '20px' }}>
      <StyledText>Angle actuel: {angle}°</StyledText> {/* Ligne ajoutée pour afficher l'angle actuel */}
        <Slider
          value={angle}
          min={0}
          max={180}
          onChange={handleSliderChange}
        />
      </div>
      <br></br>

      
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem' }}>
  <Button
    variant="contained"
    color="primary"
    onClick={verifyAngle}
    style={{ minWidth: '120px', marginLeft: '25px' }}  // Réduction de la marge à gauche à 25px
  >
    Vérifier
  </Button>
  <Button
    startIcon={<ReplyIcon style={{ fontSize: '24px' }} />}
    variant="contained"
    color="primary"
    onClick={resetAngle}
    style={{ minWidth: '120px', marginRight: '25px' }}  // Ajout de marginRight avec la valeur de 25px
  >
  
  </Button>
</div>
      
    </div>
  );
}

export default AngleActivity;
