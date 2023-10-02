import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ReplayIcon from '@material-ui/icons/Replay';
import TextField from '@material-ui/core/TextField';  // Ajout de TextField
import Aire1 from './Aire1'
import QCMAire from './QCMAire';
import teacherImage from '../Images/Prof1.png';
import Formule from './Formule';
import { Button } from '@mui/material';

const StyledSVG = styled.svg`
    position: relative;
    z-index: 1;
`;

const RapporteurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    opacity: 0.7;
`;




function Rapporteur() {
    return (
        <svg width="300" height="150" viewBox="0 0 400 200">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#dfe4ea", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#ced6e0", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#gradient)" stroke="black" strokeWidth="2" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="black" strokeWidth="2" />
            {Array.from({ length: 180 }).map((_, i) => (
                <line
                    key={i}
                    x1="200"
                    y1={i % 10 === 0 ? "195" : "200"}
                    x2="200"
                    y2={i % 10 === 0 ? "30" : "40"}
                    stroke={i % 10 === 0 ? "#2f3542" : "#747d8c"}
                    strokeWidth={i % 10 === 0 ? "2" : "1"}
                    transform={`rotate(${i}, 200, 200)`}
                />
            ))}
            {Array.from({ length: 19 }).map((_, i) => (
                <text
                    key={i}
                    x="200"
                    y="25"
                    fill="#2f3542"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    transform={`rotate(${i * 10}, 200, 200)`}
                >
                    {i * 10}
                </text>
            ))}
        </svg>
    );
}

function AngleMeasurement() {
    const [angleData, setAngleData] = useState({ angle: 20 + Math.floor(Math.random() * 140) });
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (Math.abs(angleData.angle - parseInt(userInput)) <= 5) {
            setMessage('Bravo! Vous êtes très proche.');
        } else {
            setMessage(`Désolé! L'angle correct est: ${angleData.angle}°`);
        }
    };

    const handleReset = () => {
        setAngleData({ angle: 20 + Math.floor(Math.random() * 140) });
        setUserInput('');
        setMessage('');
    };

    const [section, setSection] = useState(0);
    const nextSection = () => {
      setSection(prevSection => prevSection + 1);
    };
    const [showSections, setShowSections] = useState([true, true, true]);

    return ( <div> <div> <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} /> {showSections[0] && (<Aire1></Aire1>)}
   
    <br></br>
    
   
     {section >= 1 && (<div>  <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} /> <Formule></Formule> 
        <Card style={{ maxWidth: 500, maxHeight : 700  , margin: '10px auto' }}>
            <CardContent>
                <div style={{ position: 'relative', width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StyledSVG width="500" height="500" viewBox="0 0 500 500">
                        <line 
                            x1="200" 
                            y1="250" 
                            x2="200" 
                            y2="150" 
                            stroke="black" 
                            strokeWidth="3"
                        />
                        <line 
                            x1="200" 
                            y1="250" 
                            x2={200 + 100 * Math.cos(Math.PI / 2 - angleData.angle * Math.PI / 180)} 
                            y2={250 - 100 * Math.sin(Math.PI / 2 - angleData.angle * Math.PI / 180)} 
                            stroke="blue" 
                            strokeWidth="3"
                        />
                    </StyledSVG>
                    
                    <Draggable>
                        <RapporteurDiv>
                            <Rapporteur />
                        </RapporteurDiv>
                    </Draggable>
                </div>
                
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <TextField
                        label="Entrez votre mesure"
                        type="number"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: '10px' }}
                    />
                    <IconButton color="primary" onClick={handleSubmit}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={handleReset}>
                        <ReplayIcon />
                    </IconButton>
                    <div style={{ marginTop: '10px', fontSize: '18px' }}>{message}</div>
                </div>
            </CardContent>
        </Card>
        </div>)}
        {section >= 2 && (<QCMAire></QCMAire>)}

        {section < 2 && (  // Notez que j'ai utilisé '< 3' car vous avez 4 sections (0, 1, 2, 3)
                <Button variant="contained" color="primary" onClick={nextSection} sx={{ mt: 2, alignSelf: 'center' }}>
                    Continuer
                </Button>
            )}
        </div>  </div>
    );
}

export default AngleMeasurement;



