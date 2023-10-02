import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from "styled-components";

const ResetButton = styled.button`
border-radius: 5px;
background-color: #45a05c;
margin: 15px 0;
color: white;
border: none;
font-family: "Roboto", sans-serif;
font-size: 16px;

&:hover {
  background-color: #0056b3;
}
`;

function C3A3() {
  const [numRolls, setNumRolls] = useState(0);
  const [rollLength, setRollLength] = useState(0);
  const [unusedCable, setUnusedCable] = useState(0);
  const [userAnswer, setUserAnswer] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  // Fonction pour générer de nouvelles valeurs aléatoires
  const generateNewValues = () => {
    setNumRolls(Math.floor(Math.random() * 6) + 1);
    setRollLength(Math.floor(Math.random() * 201) + 100);
    setUnusedCable(Math.floor(Math.random() * 101));
    setUserAnswer(0); // Réinitialiser la réponse de l'utilisateur
    setIsCorrect(null); // Réinitialiser l'état de la réponse
  }

  // Générer des valeurs aléatoires lors du chargement du composant
  useEffect(generateNewValues, []);

  const checkAnswer = () => {
    const totalCable = numRolls * rollLength;
    const usedCable = totalCable - unusedCable;
    const lineLength = usedCable / 2;

    setIsCorrect(Math.abs(lineLength - userAnswer) < 0.01); // tolérance pour les erreurs d'arrondi
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      bgcolor="background.default"
      padding={2}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            C3A3 Activité
          </Typography>
          <Typography variant="body1">
            Les employés du téléphone doivent installer une ligne à deux fils. Ils disposent de {numRolls} rouleaux de {rollLength} mètres chacun. Les deux fils posés, il leur reste {unusedCable} mètres de fil non utilisé. Quelle est la longueur de la ligne téléphonique installée ?
          </Typography>
          <TextField
            type="number"
            label="Votre réponse"
            variant="outlined"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            fullWidth
            sx={{ marginTop: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={checkAnswer}
              sx={{ borderRadius: '50%', minWidth: '56px' }}
            >
              OK
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={generateNewValues}
              sx={{ borderRadius: '50%', minWidth: '56px' }}
            >
              Reset
            </Button>
          </Box>
          {isCorrect !== null && (
            <Typography variant="body1" color={isCorrect ? 'success.main' : 'error.main'} sx={{ marginTop: 2 }}>
              {isCorrect ? 'Votre réponse est correcte!' : 'Votre réponse est incorrecte.'}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default C3A3;


