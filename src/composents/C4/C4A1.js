import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReplyIcon from '@mui/icons-material/Reply';
import enfant from '../Images/enfant1.png'

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
});

function C4A1() {
  const classes = useStyles();
  const [addValue, setAddValue] = useState(0);
  const [subValue, setSubValue] = useState(0);
  const [addResult, setAddResult] = useState(0);
  const [subResult, setSubResult] = useState(0);
  const [userAddAnswer, setUserAddAnswer] = useState(0);
  const [userSubAnswer, setUserSubAnswer] = useState(0);
  const [isAddCorrect, setIsAddCorrect] = useState(null);
  const [isSubCorrect, setIsSubCorrect] = useState(null);

  useEffect(() => {
    generateNewValues();
  }, []);

  const generateNewValues = () => {
    const add = Math.floor(Math.random() * 50) + 1;
    const sub = Math.floor(Math.random() * 50) + 1;
    const addResult = Math.floor(Math.random() * 100) + 50;
    const subResult = Math.floor(Math.random() * 50) + 50;
    setAddValue(add);
    setSubValue(sub);
    setAddResult(addResult);
    setSubResult(subResult);
    setUserAddAnswer(0);
    setUserSubAnswer(0);
    setIsAddCorrect(null);
    setIsSubCorrect(null);
  };


  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Card className={classes.card}>
        <CardContent>
        <img src={enfant} alt="Etudiant" style={{ width: '70%' }} />

          <Typography variant="h6">
            Je pense à un nombre. Je lui ajoute {addValue}, je trouve {addResult}. Quel est ce nombre ?
          </Typography>
          <br/>
          <br/>
          <TextField
            variant="outlined"
            type="number"
            value={userAddAnswer}
            onChange={e => setUserAddAnswer(parseInt(e.target.value))}
            label="Votre réponse"
          />
          {isAddCorrect !== null && (
            <Typography color={isAddCorrect ? 'success.main' : 'error.main'}>
              {isAddCorrect ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={() => setIsAddCorrect(userAddAnswer === addResult - addValue)} style={{borderRadius: '50%'}}>
              OK
            </Button>
            <Button variant="contained" color="primary" onClick={generateNewValues} style={{borderRadius: '50%'}}>
              <ReplyIcon/>

            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
        <img src={enfant} alt="Etudiant" style={{ width: '70%' }} />
          <Typography variant="h6">
            Je pense à un nombre. Je lui retranche {subValue}, je trouve {subResult}. Quel est ce nombre ?
          </Typography>
          <br/>
          <br/>
          <TextField
            variant="outlined"
            type="number"
            value={userSubAnswer}
            onChange={e => setUserSubAnswer(parseInt(e.target.value))}
            label="Votre réponse"
          />
          {isSubCorrect !== null && (
            <Typography color={isSubCorrect ? 'success.main' : 'error.main'}>
              {isSubCorrect ? 'Correct!' : 'Incorrect.'}
            </Typography>
          )}
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={() => setIsSubCorrect(userSubAnswer === subResult + subValue)} style={{borderRadius: '50%'}}>
              OK
            </Button>
            <Button variant="contained" color="primary" onClick={generateNewValues} style={{borderRadius: '50%'}}>
              <ReplyIcon/>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default C4A1;


