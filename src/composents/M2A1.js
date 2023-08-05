import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import useSound from 'use-sound';
import correctSound from './correct.mp3';
import incorrectSound from './incorrect.mp3';
import Banane from './Banan.png';
import Pomme from './Pomme.png';
import Orange from './Orange.png';
import Pasteque from './Pasteque.png';

const objects = [
    { name: 'Banane', mass: 170, image: Banane },
    { name: 'Pomme', mass: 150, image: Pomme },
    { name: 'Orange', mass: 130, image: Orange },
    { name: 'Pasteque', mass: 1245, image: Pasteque },
    // ajoutez plus d'objets ici si nécessaire
];

function M2A1() {
    const [objectPair, setObjectPair] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [answer, setAnswer] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showCongratulations, setShowCongratulations] = useState(false);
    const [play] = useSound(correctSound);
    const [play1] = useSound(incorrectSound);

    const generateObjectPair = () => {
        const newObjectPair = [...objects].sort(() => 0.5 - Math.random()).slice(0, 2);
        const newQuantities = newObjectPair.map(() => Math.floor(Math.random() * 5) + 1); // Générer des quantités aléatoires entre 1 et 5
        setObjectPair(newObjectPair);
        setQuantities(newQuantities);
        setShowMessage(false);
        setShowCongratulations(false);
        setAnswer('');
    };

    const totalMass = () => {
        return objectPair.reduce((sum, obj, index) => sum + obj.mass * quantities[index], 0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowMessage(true);
        if (parseInt(answer) === totalMass()) {
            setShowCongratulations(true);
            play();
        } else {
            setShowCongratulations(false);
            play1();
        }
    };

    useEffect(() => {
        generateObjectPair();
    }, []);

    return (
        <Box m={2}>
            {objectPair.length === 2 ? (
                <>
                    <Grid container spacing={2} justifyContent="center">
                        {objectPair.map((object, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index} align="center">
                                <img 
                                    src={object.image} 
                                    alt={object.name} 
                                    style={{ width: '60%', maxHeight: '130px' }} 
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Si vous prenez {quantities[0]}  {objectPair[0].name}(s)  chacune mesure {objectPair[0].mass} et {quantities[1]} {objectPair[1].name}s chacune mesure {objectPair[1].mass},sanchant que le panier mesure 80 gramme s'il est vide, quelle est la masse totale en gramme (g) de votre panier ? 
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Réponse"
                            type="number"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            fullWidth
                            sx={{ mt: 2 }}
                        />
                        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                            Répondre
                        </Button>
                    </form>
                    {showMessage && (
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {showCongratulations ? 'Félicitations! Vous avez donné la bonne réponse!' : 'Réponse incorrecte. Essayez encore!'}
                        </Typography>
                    )}
                    <Button variant="contained" color="primary" onClick={generateObjectPair} fullWidth sx={{ mt: 2 }}>
                        Générer une nouvelle paire d'objets
                    </Button>
                </>
            ) : (
                <Typography variant="body1">
                    Chargement...
                </Typography>
            )}
        </Box>
    );
}

export default M2A1;
