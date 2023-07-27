import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress, Grid, Card, CardContent, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import writtenNumber from 'written-number';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  gap: 2,
  backgroundColor: '#f2f2f2',
  color: '#333',
});

const StyledCard = styled(Card)({
  maxWidth: '90%',
  margin: '0 auto',
});

const StyledFab = styled(Fab)(({ $isSelected }) => ({
  margin: '10px',
  backgroundColor: $isSelected ? 'blue' : '#7ec0ee',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#6caedd',
  },
}));

const StyledButton = styled(Button)({
  margin: '10px',
  backgroundColor: '#7ec0ee',
  color: 'white',
  '&:hover, &:focus-visible': {
    backgroundColor: '#6caedd',
  },
  borderRadius: '15px',
});

const ranges = [[0, 9], [10, 99], [100, 999], [1000, 999999], [1000000, 999999999]];

const C1A2 = () => {
  const [progress, setProgress] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [open, setOpen] = useState(false);
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
      <LinearProgress variant="determinate" value={(progress / 5) * 100} />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Typography>Ecrire ce nombre en chiffres : {writtenNumber(randomNumber, {lang: 'fr'})}</Typography>
              <br/>
              <Typography>Votre réponse: {userInput}</Typography>
              <br/>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <StyledFab key={number} onClick={() => handleNumberClick(number)} $isSelected={selectedNumber === number}>{number}</StyledFab>
              ))}
              <StyledFab onClick={handleReset}>Reset</StyledFab>
              <br/>
              <StyledFab variant="contained" color="success" onClick={handleValidate}>Ok</StyledFab>
              {!isValid && <Typography color="error">La réponse est incorrecte. Essayer encore!</Typography>}
              {showNextButton && <StyledButton variant="contained" color="primary" onClick={handleNextQuestion}>Suivant</StyledButton>}
              {progress === 4 && <StyledButton variant="contained" color="secondary" onClick={handleReset}>Commencer de nouveau</StyledButton>}
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Félicitations!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bravo, vous avez réussi toutes les questions ! Vous avez fait preuve d'un excellent niveau en écrivant les nombres.
          </DialogContentText>
          {score >= 10 && (
            <>
              <DialogContentText>Votre score est {score}, ce qui signifie que vous avez réussi ! 🎉</DialogContentText>
              <EmojiEventsIcon style={{ fontSize: 50, color: '#FFD700' }} />
            </>
          )}
          {score < 10 && (
            <DialogContentText>Votre score est {score}, ce qui signifie que vous devez encore pratiquer. Continuez à travailler !</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
};

export default C1A2;
