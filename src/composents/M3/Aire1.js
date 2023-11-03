import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';

const StyledText = styled.p`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;  // Increased font size for emphasis
    font-family: 'Comic Sans MS', sans-serif;
`;

const StyledSVG = styled.svg`
    line {
        stroke: #3498db;      
        stroke-width: 4;     // Made the line slightly thicker
    }
    text {
        font-weight: bold;    
        fill: #e74c3c;       
        font-size: 1.5em;    // Increased font size for the text
        text-shadow: 2px 2px #ecf0f1;  
    }
`;

const StyledButton = styled(Button)`
    padding: 4px 6px;   // Reduced padding
    margin: 0 2px;      // Reduced margin for less spacing
    font-size: 0.2em;   // Reduced font size for a compact look
    marginLeft :  2px
    marginRight : 2px
`;



    function AngleSorting() {
        const [order, setOrder] = useState([]);
        const [anglesData, setAnglesData] = useState(generateAngles());
        const [message, setMessage] = useState('');
    
        function generateAngles() {
            const angles = [];
            while (angles.length < 5) {
              const newAngle = 20 + Math.floor(Math.random() * 140);
              let isFarEnough = true;
              for (const angle of angles) {
                if (Math.abs(angle.angle - newAngle) < 20) {
                  isFarEnough = false;
                  break;
                }
              }
              if (isFarEnough) {
                angles.push({ id: String.fromCharCode(65 + angles.length), angle: newAngle });
              }
            }
            return angles;
          }
    

    const handleAngleSelection = (angleType) => {
        if (!order.includes(angleType)) {
            setOrder([...order, angleType]);
        }
    };

    const handleReset = () => {
        setAnglesData(generateAngles());
        setOrder([]);
        setMessage('');
    };

    const checkAnswer = () => {
        const sortedAngles = [...anglesData].sort((a, b) => a.angle - b.angle);
        for (let i = 0; i < sortedAngles.length; i++) {
            if (sortedAngles[i].id !== order[i]) {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = () => {
        if (checkAnswer()) {
            setMessage("Bravo! Votre réponse est correcte."); 
        } else {
            setMessage("Désolé! Veuillez réessayer."); 
        }
    };

    return (
        <Card variant="outlined" style={{ padding: '20px', margin: '20px auto', maxWidth: '100%' }}>
            <StyledText>Les angles sont ici nommés par leur sommet. Classe-les selon un ordre croissant.</StyledText>
            <CardContent>
                <StyledSVG width="100%" viewBox="0 0 500 250">
                    {anglesData.map((angleData, index) => {
                        const x = 50 + (index % 3) * 160;
                        const y = index < 3 ? 50 : 150;
                        const endX = x + 70 * Math.cos(Math.PI * angleData.angle / 180);
                        const endY = y - 70 * Math.sin(Math.PI * angleData.angle / 180);
                        return (
                            <React.Fragment key={index}>
                                <line x1={x} y1={y} x2={x + 70} y2={y} />
                                <line x1={x} y1={y} x2={endX} y2={y - (endY - y)} />
                                <text x={x} y={y} dx="-20" dy="5">{angleData.id}</text>
                            </React.Fragment>
                        );
                    })}
                </StyledSVG>
                <StyledText>Sélectionne les angles dans l'ordre croissant:</StyledText>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '2px' }}>
                    {anglesData.map(angleData => (
                        <StyledButton key={angleData.id} variant="contained" color="primary" onClick={() => handleAngleSelection(angleData.id)}>
                            {angleData.id}
                        </StyledButton>
                    ))}
                </div>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
                <StyledButton variant="contained" onClick={handleSubmit}>
                    <CheckCircleIcon />
                </StyledButton>
                <StyledButton variant="contained" onClick={handleReset}>
                    <ReplyIcon />
                </StyledButton>
            </div>
            <CardContent>
                <StyledText>Ordre choisi:</StyledText>
                <Typography align="center">
                    {order.map((angle, index) => (
                        <span key={index}>{angle} {(index !== order.length - 1) && "->"}</span>
                    ))}
                </Typography>
                <Typography align="center" color="error">{message}</Typography>
            </CardContent>
        </Card>
    );
}

export default AngleSorting;