import React, { useState} from 'react';
import { Button, Card, CardContent, Box, TextField, Typography } from '@mui/material';
import kangarooImg from '../images/kangaro.png';
import useSound from 'use-sound';
<<<<<<< HEAD:src/composents/C5/C5A4.js
import correctSound from "../sounds/correct.mp3";
import incorrectSound from '../sounds/incorrect.mp3';
=======
import correctSound from './correct.mp3'
import incorrectSound from './incorrect.mp3'
import ReplyIcon from '@mui/icons-material/Reply';
>>>>>>> 0f40bc53a4fe27f40c3406ab74b1fbb04978e7ae:src/composents/C5A4.js

function C5A4() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [play] = useSound(correctSound)
  const [play1] = useSound(incorrectSound)

  const generateQuestion = () => {
    const newQuestions = [
      generateSingleQuestion(),
      generateSingleQuestion(),
      generateSingleQuestion(),
    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  const generateSingleQuestion = () => {
    const numJumps = Math.floor(Math.random() * 10) + 1;
    const jumpDistance = Math.floor(Math.random() * 10) + 1;
    return { numJumps, jumpDistance };
  };

  const calculateTotalDistance = () => {
    const totalDistance = questions.reduce((sum, q) => sum + q.numJumps * q.jumpDistance, 0);
    setShowMessage(true);
    if (parseInt(answer) === totalDistance) {
      setShowCongratulations(true);
      play();
    } else {
      setShowCongratulations(false);
      play1();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTotalDistance();
    
   
  };
  

  const handleNewQuestion = () => {
    generateQuestion();
  };



  return (
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={kangarooImg}
              alt="kangaroo"
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
                {!showMessage && questions.map((q, index) => (
                  <Typography key={index} variant="body1" style={{ color: '#ffffff' }}>
                    J'ai sauté {q.numJumps} fois avec {q.jumpDistance} mètres, puis{' '}
                  </Typography>
                ))}
                {!showMessage && (
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    Dites-moi quelle est la distance totale parcourue ?
                  </Typography>
                )}
                {showCongratulations && (
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    Félicitations! Vous avez donné la bonne réponse!
                  </Typography>
                )}
                {showMessage && !showCongratulations && (
                  <Typography variant="body1" style={{ color: '#ffffff' }}>
                    Réponse incorrecte. Essayez encore!
                  </Typography>
                )}
              </CardContent>
            </Card>
          </div>
        </Box>
        {!showMessage && (
          <Box my={2}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Réponse"
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
              />
              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                Répondre
              </Button>
            </form>
          </Box>
        )}
        {showMessage && (
          <Box my={2}>
            <Button variant="contained" color="primary" onClick={handleNewQuestion} style={{ marginTop: '10px' }}>
              <ReplyIcon/>
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default C5A4;
