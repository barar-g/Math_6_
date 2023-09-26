import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import LineDisplay from './LineDisplay';

const LinePairs = [
    { type: 'Parallel', answer: 'Parallèle' },
    { type: 'Perpendicular', answer: 'Perpendiculaire' },
    { type: 'None', answer: 'Aucun des deux' },
    { type: 'Parallel', answer: 'Parallèle' },
    { type: 'Perpendicular', answer: 'Perpendiculaire' },
    { type: 'None', answer: 'Aucun des deux' },
    { type: 'Parallel', answer: 'Parallèle' },
    { type: 'Perpendicular', answer: 'Perpendiculaire' },
    { type: 'None', answer: 'Aucun des deux' },
    { type: 'None', answer: 'Aucun des deux' },
];

function G1Activity() {
    const [currentPairIndex, setCurrentPairIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const checkAnswer = () => {
        setIsCorrect(userAnswer.toLowerCase() === LinePairs[currentPairIndex].answer.toLowerCase());
    };

    const nextPair = () => {
        if (currentPairIndex < LinePairs.length - 1) {
            setCurrentPairIndex(currentPairIndex + 1);
            setIsCorrect(null);
            setUserAnswer('');
        }
    };

    const resetActivity = () => {
        setCurrentPairIndex(0);
        setIsCorrect(null);
        setUserAnswer('');
    };

    return (
        <Box m={2}>
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 500 }}>
                    <CardContent>
                        <LineDisplay type={LinePairs[currentPairIndex].type} />
                    </CardContent>
                </Card>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Sont-elles parallèles, perpendiculaires ou aucun des deux ?
                </Typography>
                <TextField 
                    variant="outlined" 
                    label="Votre réponse" 
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)} 
                    fullWidth
                    sx={{ mt: 2 }}
                />
                <Button variant="contained" color="primary" onClick={checkAnswer} fullWidth sx={{ mt: 2 }}>
                    Vérifier la réponse
                </Button>
                {isCorrect !== null && (
                    <Typography variant="body1" sx={{ mt: 2, color: isCorrect ? 'green' : 'red' }}>
                        {isCorrect ? 'Correct!' : 'Incorrect. Essayez encore.'}
                    </Typography>
                )}
                <Button variant="contained" color="primary" onClick={nextPair} fullWidth sx={{ mt: 2 }}>
                    Prochain pair
                </Button>
                <Button variant="contained" color="secondary" onClick={resetActivity} fullWidth sx={{ mt: 2 }}>
                    Réinitialiser l'activité
                </Button>
            </Grid>
        </Box>
    );
}

export default G1Activity;




