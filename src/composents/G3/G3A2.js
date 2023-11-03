import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Slider from '@mui/material/Slider';
import { Card, StyledText, circleStyle } from '../Styles/MajorStyles';

const AngleActivity = () => {
  const [angle, setAngle] = useState(8);
  const [message, setMessage] = useState("glisser le slider pour ouvrir l'angle");
  const [messageColor, setMessageColor] = useState("#000");

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



  const resetAngle = () => {
    setAngle(8);
    setMessage("glisser le slider pour ouvrir l'angle");
  };

  const segmentStyle = {
    position: 'absolute',
    bottom: '50%', 
    left: '50%',
    width: '4px',
    height: '35%',
    marginLeft: '-2px',
    borderRadius: '2px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    transformOrigin: 'bottom',
    transition: '0.2s',
    backgroundColor: '#2193b0'
  };
  

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Card>
        <StyledText>Formez un angle et découvrez s'il est aigu, droit ou obtus!</StyledText>
      </Card>
      <div style={{ position: 'relative', width: '100%', height: '400px', margin: '0 auto' }}>
        <div style={{ ...segmentStyle }}></div>
        <div
          style={{
            ...segmentStyle,
            transform: `rotate(${angle}deg)`
          }}
        >
          <div ></div>
        </div>
      </div>
      <Card>
      <StyledText style={{color: messageColor}}>{message}</StyledText>
      </Card>

      <div style={{ width: '80%', marginTop: '20px' }}>
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
