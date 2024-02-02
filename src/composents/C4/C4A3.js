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
  button: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    minWidth: '40px',
  },
});

function C4A3() {
  const classes = useStyles();
  const [questions, setQuestions] = useState([
    { operation: 'subtract', value1: 0, value2: 0, answer: '', isCorrect: null },
    { operation: 'subtract', value1: 0, value2: 0, answer: '', isCorrect: null },
    { operation: 'add', value1: 0, value2: 0, answer: '', isCorrect: null },
  ]);

  useEffect(() => {
    setQuestions(questions.map((question) => ({
      ...question,
      value1: getRandomNumber(),
      value2: getRandomNumber(),
    })));
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  const handleChange = (index) => (event) => {
    let newQuestions = [...questions];
    newQuestions[index].answer = event.target.value;
    setQuestions(newQuestions);
  }

  const checkAnswer = (index) => () => {
    let newQuestions = [...questions];
    newQuestions[index].isCorrect = getCorrectAnswer(newQuestions[index]) === Number(newQuestions[index].answer);
    setQuestions(newQuestions);
  }

  const getCorrectAnswer = (question) => {
    return question.operation === 'subtract' ? question.value1 - question.value2 : question.value1 + question.value2;
  }

  const reset = (index) => () => {
    let newQuestions = [...questions];
    newQuestions[index].value1 = getRandomNumber();
    newQuestions[index].value2 = getRandomNumber();
    newQuestions[index].answer = '';
    newQuestions[index].isCorrect = null;
    setQuestions(newQuestions);
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {questions.map((question, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
          <img src={enfant} alt="Etudiant" style={{ width: '70%' }} />
            <Typography variant="h6">
              Je pense à un nombre. Je lui {question.operation === 'subtract' ? 'retranche' : 'ajoute'} {question.value2}, je trouve {question.value1}. Quel est ce nombre ?
            </Typography>
            <TextField 
              variant="outlined" 
              type="number" 
              value={question.answer} 
              onChange={handleChange(index)}
              label="Votre réponse"
            />
            <div className={classes.buttons}>
              <Button className={classes.button} variant="contained" color="primary" onClick={checkAnswer(index)}>OK</Button>
              <Button className={classes.button} variant="contained" color="primary" onClick={reset(index)}><ReplyIcon/></Button>
            </div>
            {question.isCorrect !== null && (
              <Typography color={question.isCorrect ? 'success.main' : 'error.main'}>
                {question.isCorrect ? 'Correct!' : 'Incorrect.'}
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default C4A3;




