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
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
  
`;
const StyledSVG = styled.svg`
    line {
        stroke: #3498db;      // Couleur bleue pour les lignes
        stroke-width: 3;     // Épaissir les lignes
    }
    text {
        font-weight: bold;    // Rendre le texte plus gras
        fill: #e74c3c;       // Couleur rouge pour le texte
        text-shadow: 2px 2px #ecf0f1;  // Ombre portée pour le texte
    }
`;


function AngleSorting() {
    const [order, setOrder] = useState([]);
    const [anglesData, setAnglesData] = useState(generateAngles());
    const [message, setMessage] = useState(''); // Ajout d'un nouvel état pour le message

    function generateAngles() {
        return Array(6).fill().map((_, index) => ({
            id: String.fromCharCode(65 + index),
            angle: 20 + Math.floor(Math.random() * 140)  // Produit un angle entre 20 et 160 degrés
        }));
    }

    const handleAngleSelection = (angleType) => {
        if (!order.includes(angleType)) {
            setOrder([...order, angleType]);
        }
    };
    

    const handleReset = () => {
        setAnglesData(generateAngles());
        setOrder([]);
        setMessage('');  // Reset le message lors de la réinitialisation
    };

    const checkAnswer = () => {
        const sortedAngles = [...anglesData].sort((a, b) => a.angle - b.angle);
        for (let i = 0; i < sortedAngles.length; i++) {
            if (sortedAngles[i].id !== order[i]) {
                return false; // Les réponses ne correspondent pas
            }
        }
        return true; // Les réponses correspondent
    };

    const handleSubmit = () => {
        if (checkAnswer()) {
            setMessage("Bravo! Votre réponse est correcte."); 
        } else {
            setMessage("Désolé! Veuillez réessayer."); 
        }
    };

    const length = 70;

    return (
        <Card variant="outlined" style={{ padding: '20px', margin: '20px auto', maxWidth: '600px' }}>
            <StyledText>Les angles sont ici nommés par leur sommet. Classe-les selon un ordre croissant.</StyledText>

            <CardContent>
                <StyledSVG width="100%" viewBox="0 0 500 250">
                    {anglesData.map((angleData, index) => {
                        const x = 50 + (index % 3) * 160;
                        const y = index < 3 ? 50 : 150;
                        const endX = x + length * Math.cos(Math.PI * angleData.angle / 180);
                        const endY = y - length * Math.sin(Math.PI * angleData.angle / 180);
                        return (
                            <React.Fragment key={index}>
                                <line x1={x} y1={y} x2={x + length} y2={y} />
                                <line x1={x} y1={y} x2={endX} y2={y - (endY - y)} />
                                <text x={x} y={y} dx="-20" dy="5">{angleData.id}</text>
                            </React.Fragment>
                        );
                    })}
                </StyledSVG>

                <StyledText>Sélectionne les angles dans l'ordre croissant:</StyledText>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                    {anglesData.map(angleData => (
                        <Button key={angleData.id} variant="contained" color="primary" onClick={() => handleAngleSelection(angleData.id)}>
                            {angleData.id}
                        </Button>
                    ))}
                </div>
            </CardContent>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
            <Button variant="contained"  onClick={handleSubmit}>
    <CheckCircleIcon />
</Button>
<Button variant="outlined" onClick={handleReset}>
    <ReplyIcon />
</Button>
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
























