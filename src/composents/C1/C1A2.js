import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress, Grid, Card, CardContent, Fab } from '@mui/material';
import { styled } from '@mui/system';
import writtenNumber from 'written-number';
import ReplayIcon from '@mui/icons-material/Replay';

const StyledBox = styled(Box)({
});

const NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor:  '#E1F5FE',
  border:  '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));

const ranges = [
  [0, 9],       // plage pour progress=0
  [10, 99],    // plage pour progress=1
  [100, 999],  // plage pour progress=2
  [1000, 9999],// plage pour progress=3
  [10000, 99999]// plage pour progress=4
];


const StyledCard = styled(Card)({
  maxWidth: '100%',
  margin: '0 auto',
});

const VibrantFab = styled(Fab)(({ $isSelected }) => ({
  margin: '10px',
  backgroundColor: $isSelected ? 'blue' : '#007BFF',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#0056b3',
  },
}));

const StyledButton = styled(Button)({
  margin: '10px',
  backgroundColor: '#007BFF',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#0056b3',
  },
  borderRadius: '15px',
});

const C1A2 = () => {
  const [progress, setProgress] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [, setOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);

  const handleNumberClick = (number) => {
    setIsValid(true);
    setUserInput(userInput + number);
    setSelectedNumber(number);
  };

  const handleValidate = () => {
    const validation = writtenNumber(parseInt(userInput), {lang: 'fr'}) === writtenNumber(randomNumber, {lang: 'fr'});
    setIsValid(validation);
    if (!validation) {
      setUserInput('');
    } else {
      setScore(score + 4); // Increase score by 4 for correct answer
      setShowNextButton(true);
    }
  };

  const handleNextQuestion = () => {
    if (progress < 4) {
      setProgress(progress + 1);
      getRandomNumber(progress + 1);
    } else {
      setOpen(true);
    }
    setShowNextButton(false);
    setUserInput("");
    setSelectedNumber(null);
  };

  const getRandomNumber = (progress) => {
    const min = ranges[progress][0], max = ranges[progress][1];
    setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
  };

  const handleReset = () => {
    setProgress(0);
    setRandomNumber(0);
    setUserInput("");
    setIsValid(true);
    setShowNextButton(false);
    setOpen(false);
    setSelectedNumber(null);
    setScore(0);
    getRandomNumber(0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledBox>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <NumberDisplay>
                <Typography>Ecrire ce nombre en chiffres : {writtenNumber(randomNumber, {lang: 'fr'})}</Typography>
              </NumberDisplay>
              <NumberDisplay>
                <Typography> {userInput}</Typography>
              </NumberDisplay>
              
              <br />
              
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
    <Grid container spacing={-8}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <Grid item xs={4} key={number}>
                <VibrantFab onClick={() => handleNumberClick(number)} $isSelected={selectedNumber === number}>
                    {number}
                </VibrantFab>
            </Grid>
        ))}
        <Grid item xs={4}>
            <VibrantFab onClick={() => handleNumberClick(9)}>9</VibrantFab>
        </Grid>
        <Grid item xs={4}>
            <VibrantFab onClick={handleReset}><ReplayIcon /></VibrantFab>
        </Grid>
        <Grid item xs={4}>
            <VibrantFab variant="contained" onClick={handleValidate}>Ok</VibrantFab>
        </Grid>
    </Grid>
</Box>

              {!isValid && <Typography color="error">La réponse est incorrecte. Essayer encore!</Typography>}
              {isValid && showNextButton && <Typography color="primary">Bravo, c'est correct !</Typography>}

              {showNextButton && <StyledButton variant="contained" onClick={handleNextQuestion}>Suivant</StyledButton>}
             
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default C1A2;
