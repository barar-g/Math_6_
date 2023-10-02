import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Branche from "../Images/branches.png";
import Fteacher from "../Images/teacher.png";
import Eggs from "../Images/Eggs.png";
import styled from "styled-components";
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



const StyledText = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }`;


function C5A1() {
  const classes = useStyles();
  const [branches, setBranches] = useState([5, 3, 2, 4]);
  const [completeTrays, setCompleteTrays] = useState(4);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [targetNumber, setTargetNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState(["", "", ""]);
  const [areCorrect, setAreCorrect] = useState([null, null, null]);
  
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

  useEffect(() => {
    generateNumbers();
  }, []);

  
  const checkAnswer = (index, correctAnswer) => {
    try {
      setAreCorrect(areCorrect.map((_, i) => i === index ? eval(userAnswers[i]) === correctAnswer : null));
    } catch (error) {
      setAreCorrect(areCorrect.map((_, i) => i === index ? false : null));
    }
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <StyledText>1er Activite</StyledText>
      <card>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Branche}
              
              style={{
                width: '100px',
                marginBottom: '10px',
                marginRight: '10px',
              }}
            />
            <Card
              style={{
                borderRadius: '20px',
                backgroundColor: '#1877f2',
                padding: '10px',
              }}
            >
              <CardContent>
                
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    J'ai {branches[0]} branches portant chacune {branches[1]} branches qui portent chacune elles-mêmes {branches[2]} branches munies chacune de {branches[3]} feuilles. Combien de feuilles ai-je en tout ?
                  </Typography>
                
          
                
              </CardContent>
            </Card>
          </div>
        </Box>
       
          <Box my={2}>
            <form >
              <TextField
                 variant="outlined" 
                 type="number" 
                 value={userAnswers[0]} 
                 onChange={e => setUserAnswers([parseInt(e.target.value), ...userAnswers.slice(1)])}
                 label="Votre réponse"
                
                
                fullWidth
              />
              <h1></h1>
              <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(0, branches[0]*branches[1]*branches[2]*branches[3])}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>&#x21bb;</Button>
          </div>
          {areCorrect[0] !== null && (
            <Typography color={areCorrect[0] ? 'success.main' : 'error.main'}>
              {areCorrect[0] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
            </form>
          </Box>
        
      </CardContent>
      </card>
      <card>
      <StyledText>2eme Activite</StyledText>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Eggs}
              
              style={{
                width: '100px',
                marginBottom: '10px',
                marginRight: '10px',
              }}
            />
            <Card
              style={{
                borderRadius: '20px',
                backgroundColor: '#1877f2',
                padding: '10px',
              }}
            >
              <CardContent>
               
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                     Il reste sur le comptoir de la boutique {completeTrays} plateaux d'œufs complets. Combien d'œufs reste-t-il ?
                  </Typography>
                
              
              </CardContent>
            </Card>
          </div>
        </Box>
        
          <Box my={2}>
            <form >
              <TextField
               variant="outlined" 
               type="number" 
               value={userAnswers[1]} 
               onChange={e => setUserAnswers([userAnswers[0], parseInt(e.target.value), userAnswers[2]])}
               label="Votre réponse"
                
                
                fullWidth
              />
              <h1></h1>
              <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(1, completeTrays*12)}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>&#x21bb;</Button>
          </div>
          {areCorrect[1] !== null && (
            <Typography color={areCorrect[1] ? 'success.main' : 'error.main'}>
              {areCorrect[1] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
            </form>
          </Box>
      
      </CardContent>
      </card>
      
      <card>
      <StyledText>3eme Activite</StyledText>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Fteacher}
              
              style={{
                width: '100px',
                marginBottom: '10px',
                marginRight: '10px',
              }}
            />
            <Card
              style={{
                borderRadius: '20px',
                backgroundColor: '#1877f2',
                padding: '10px',
              }}
            >
              <CardContent>
                
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                     Voici les nombres : {randomNumbers.join(", ")}. Essayez d'atteindre le nombre : {targetNumber}. 
                     utiliser chaque nombre une seule fois.
                  </Typography>
                
              
              </CardContent>
            </Card>
          </div>
        </Box>
        
          <Box my={2}>
            <form >
              <TextField
               variant="outlined" 
               type="text" 
               value={userAnswers[2]} 
               onChange={e => setUserAnswers(userAnswers.slice(0, 2).concat(e.target.value))}
               label="Votre formule"
                
                fullWidth
              />
              <h1></h1>
              <div className={classes.buttons}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => checkAnswer(2, targetNumber)}>OK</Button>
            <Button className={classes.button} variant="contained" color="error" onClick={generateNumbers}>&#x21bb;</Button>
          </div>
          {areCorrect[2] !== null && (
            <Typography color={areCorrect[2] ? 'success.main' : 'error.main'}>
              {areCorrect[2] ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
            </form>
          </Box>
        
      </CardContent>
      </card>
    </Box>
  );
}

export default C5A1;

