import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import { StyledText, circleStyle } from '../Styles/MajorStyles';
import { ButtonBase } from '@mui/material';

function disableScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

const AngleActivity = () => {
  const [angle, setAngle] = useState(8);
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    e.preventDefault();
    disableScrolling();
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();

    if (isDragging) {
      // Mesurer la distance parcourue par le toucher
      const touchX = e.touches[0].clientX;
      const distance = touchX - startX;
      const maxAngle = 180;
      
      // Calculer l'angle en fonction de la distance (ajuster la formule selon vos besoins)
      const newAngle = Math.min(Math.max(0, (distance / window.innerWidth) * maxAngle), maxAngle);

      setAngle(newAngle);
    }
  };

  const handleTouchEnd = () => {
    enableScrolling();
    setIsDragging(false);

    let typeAngle = "";
    if (angle <= 80) {
      typeAngle = "aigu";
    } else if (angle >= 85 && angle <= 95) {
      typeAngle = "droit";
    } else if (angle >= 100) {
      typeAngle = "obtus";
    }
    setMessage(`Vous avez formé un angle ${typeAngle}.`);
  };

  const resetAngle = () => {
    setAngle(8);
    setMessage("");
  };

  const segmentStyle = {
    position: 'absolute',
    bottom: '50%', 
    left: '50%',
    width: '4px',
    height: '40%', // Ajuster la hauteur du segment selon vos préférences
    marginLeft: '-2px', // Ajuster la marge pour centrer le segment
    borderRadius: '2px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    transformOrigin: 'bottom',
    transition: '0.2s',
    backgroundColor: '#2193b0'
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="contained" style={{ margin: '10px' }} onClick={disableScrolling}>Commencer</Button>
      <Button variant="contained" style={{ margin: '10px' }} onClick={enableScrolling}>Terminer</Button>
      <StyledText>Formez un angle et découvrez s'il est aigu, droit ou obtus!</StyledText>
      <div style={{ position: 'relative', width: '100%', height: '500px', margin: '0 auto' }}>
        <div style={{ ...segmentStyle }}></div>
        <animated.div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            ...segmentStyle,
            transform: `rotate(${angle}deg)`,
            cursor: 'ew-resize'
          }}
        >
          <div style={circleStyle}></div>
        </animated.div>
      </div>
      <StyledText>{message}</StyledText>
      <Button
        startIcon={<ReplyIcon style={{ fontSize: '24px' }} />}
        variant="contained"
        color="primary"
        onClick={resetAngle}
        style={{ marginTop: '1rem', minWidth: '120px' }}
      >
        Réinitialiser
      </Button>
    </div>
  );
}

export default AngleActivity;
