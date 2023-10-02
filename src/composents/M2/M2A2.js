import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { Howl } from 'howler';
import Leau from '../Images/Leau.png'; // Remplacez par le chemin correct
import Milk from '../Images/Milk.png'; // Remplacez par le chemin correct
import gasoil from '../Images/gasoil.png'; // Remplacez par le chemin correct
import Oil from '../Images/Oil.png'; // Remplacez par le chemin correct
import correctSoundFile from '../sounds/correct.mp3'; // Remplacez par le chemin correct
import incorrectSoundFile from '../sounds/incorrect.mp3'; // Remplacez par le chemin correct
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styled from 'styled-components';
const objects = [
    { name: 'L\'eau', massPerLiter: 1000, image: Leau },
    { name: 'Le lait', massPerLiter: 1030, image: Milk },
    { name: 'Le gasoil', massPerLiter: 830, image: gasoil }, 
    { name: 'Le pétrole', massPerLiter: 900, image: Oil },
];

const StyledText = styled.div`
box-sizing: border-box;
width: 100%; 
height: 80%; 
background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};

transition: background-color 0.4s, transform 0.3s;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
font-family: 'Comic Sans MS', sans-serif;
&:hover {
    transform: scale(1.05);
}
`;


function M2A1() {
    const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const correctSound = new Howl({
        src: [correctSoundFile]
    });

    const incorrectSound = new Howl({
        src: [incorrectSoundFile]
    });

    useEffect(() => {
        setVolume(Math.floor(Math.random() * 10) + 1);
    }, [currentObjectIndex]);

    const convertToGrams = (input) => {
        const units = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
        const conversionRates = [0.001, 0.01, 0.1, 1, 10, 100, 1000];
        let total = 0;

        input.split(' ').forEach(part => {
            const value = parseFloat(part);
            const unit = part.match(/[a-z]+/)[0];

            if (units.includes(unit)) {
                total += value * conversionRates[units.indexOf(unit)];
            }
        });

        return total;
    };

    const checkAnswer = () => {
        const correctAnswer = volume * objects[currentObjectIndex].massPerLiter;
        const convertedAnswer = convertToGrams(userAnswer);
        setIsCorrect(Math.abs(convertedAnswer - correctAnswer) < 10);
        if (Math.abs(convertedAnswer - correctAnswer) < 10) {
            correctSound.play();
        } else {
            incorrectSound.play();
        }
    };

    const nextObject = () => {
        if (currentObjectIndex < objects.length - 1) {
            setCurrentObjectIndex(currentObjectIndex + 1);
            setIsCorrect(null);
            setUserAnswer('');
        }
    };

    const resetActivity = () => {
        setCurrentObjectIndex(0);
        setIsCorrect(null);
        setUserAnswer('');
    };

    return (
        <Box m={2}>
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                <img 
                    src={objects[currentObjectIndex].image} 
                    alt={objects[currentObjectIndex].name} 
                    style={{ width: '50%', maxHeight: '150px', objectFit: 'contain' }} 
                />
               
                <Typography variant="body1" sx={{ mt: 2 }}>
                <StyledText>
                    Si tu as {volume} litre(s) de {objects[currentObjectIndex].name}, combien cela pèserait-il en grammes ?
                    </StyledText>
                </Typography>
                
                <TextField 
                    variant="outlined" 
                    label="Ta réponse (ex: 1kg 200g)" 
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)} 
                    fullWidth
                    sx={{ mt: 2 }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', marginTop : '16px' }}>
            <Button variant="contained" color="primary" onClick={checkAnswer}>
                <CheckCircleIcon />
            </Button>
            <Button variant="contained" color="primary" onClick={nextObject}>
                <NavigateNextIcon />
            </Button>
            <Button variant="contained" color="primary" onClick={resetActivity}>
                <ReplyIcon />
            </Button>
        </div>
                {isCorrect !== null && (
                    <React.Fragment>
                        <Typography variant="body1" sx={{ mt: 2, color: isCorrect ? 'green' : 'red' }}>
                            {isCorrect ? 'Correct!' : 'Incorrect. Essaye encore.'}
                        </Typography>
                    </React.Fragment>
                )}
            </Grid>
        </Box>
    );
}

export default M2A1;
