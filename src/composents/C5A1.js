import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  buttons: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    minWidth: '40px',
  },
});

function C5A1() {
  const classes = useStyles();
  const [branches, setBranches] = useState([5, 3, 2, 4]);
  const [completeTrays, setCompleteTrays] = useState(4);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [targetNumber, setTargetNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState(["", "", ""]);
  const [areCorrect, setAreCorrect] = useState([null, null, null]);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    let numbers = [];
    for(let i = 0; i < 5; i++){
      numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    setRandomNumbers(numbers);
    setTargetNumber(Math.floor(Math.random() * 100) + 50);
    setUserAnswers(["", "", ""]);
    setAreCorrect([null, null, null]);
    setBranches(branches.map(() => Math.floor(Math.random() * 10) + 1));
    setCompleteTrays(Math.floor(Math.random() * 10) + 1);
  }

  const checkAnswer = (index, correctAnswer) => {
    try {
      setAreCorrect(areCorrect.map((_, i) => i === index ? eval(userAnswers[i]) === correctAnswer : null));
    } catch (error) {
      setAreCorrect(areCorrect.map((_, i) => i === index ? false : null));
    }
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            J'ai {branches[0]} branches portant chacune {branches[1]} branches qui portent chacune elles-mêmes {branches[2]} branches munies chacune de {branches[3]} feuilles. Combien de feuilles ai-je en tout ?
          </Typography>
          <TextField 
            variant="outlined" 
            type="number" 
            value={userAnswers[0]} 
            onChange={e => setUserAnswers([parseInt(e.target.value), ...userAnswers.slice(1)])}
            label="Votre réponse"
          />
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(0, branches[0]*branches[1]*branches[2]*branches[3])}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>R</Button>
          </div>
          {areCorrect[0] !== null && (
            <Typography color={areCorrect[0] ? 'success.main' : 'error.main'}>
              {areCorrect[0] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            Il reste sur le comptoir de la boutique {completeTrays} plateaux d'œufs complets. Combien d'œufs reste-t-il en tout ?
          </Typography>
          <TextField 
            variant="outlined" 
            type="number" 
            value={userAnswers[1]} 
            onChange={e => setUserAnswers([userAnswers[0], parseInt(e.target.value), userAnswers[2]])}
            label="Votre réponse"
          />
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(1, completeTrays*12)}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>R</Button>
          </div>
          {areCorrect[1] !== null && (
            <Typography color={areCorrect[1] ? 'success.main' : 'error.main'}>
              {areCorrect[1] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            Voici cinq nombres : {randomNumbers.join(", ")}. Essayez d'atteindre le nombre cible : {targetNumber}. 
            Vous ne pouvez utiliser chaque nombre qu'une seule fois.
          </Typography>
          <TextField 
            variant="outlined" 
            type="text" 
            value={userAnswers[2]} 
            onChange={e => setUserAnswers(userAnswers.slice(0, 2).concat(e.target.value))}
            label="Votre formule"
          />
          <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(2, targetNumber)}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>R</Button>
          </div>
          {areCorrect[2] !== null && (
            <Typography color={areCorrect[2] ? 'success.main' : 'error.main'}>
              {areCorrect[2] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default C5A1;

