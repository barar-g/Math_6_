import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Box, TextField, Typography } from '@mui/material';
import enfantImg from '../images/enfant.png';
import useSound from 'use-sound';
<<<<<<< HEAD:src/composents/C5/C5A5.js
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';
=======
import correctSound from './correct.mp3';
import incorrectSound from './incorrect.mp3';
import ReplyIcon from '@mui/icons-material/Reply';
>>>>>>> 0f40bc53a4fe27f40c3406ab74b1fbb04978e7ae:src/composents/C5A5.js

function C5A5() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Ajout d'un nouvel état pour suivre l'index actuel
  const [answer, setAnswer] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);

  const generateQuestion = () => {
    const newQuestions = [
      { question: "Combien de secondes y a-t-il dans une heure, 10 heures, et 3 jours ?", answer: 60*60 + 10*60*60 + 3*24*60*60 },
      { question: "Un enfant entre 10 et 15 ans respire environ 20 fois par minute. Combien de fois respire-t-il par jour ?", answer: 20*60*24 },
      { question: "Sidi gagne 20 000 MRU par mois. Combien gagne-t-il par an ?", answer: 20000*12 },
      { question: "Un camionnette peut transporter 1 500 kg de briques. Combien de voyages doit-on faire pour transporter 30 tonnes de briques ?", answer: 30000/1500 },
    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
    if (parseInt(answer) === questions[currentIndex].answer) { // Utilisez l'index actuel pour obtenir la question actuelle
      setShowCongratulations(true);
      play();
    } else {
      setShowCongratulations(false);
      play1();
    }
  };

  const handleNewQuestion = () => {
    setCurrentIndex((currentIndex + 1) % questions.length); // Incrémente l'index actuel et boucle s'il dépasse le nombre de questions
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <Card style={{ minHeight: '400px' }}>
    <CardContent>
      <Box my={2}>
        <div style={{ position: 'relative' }}>
          <img
            src={enfantImg}
            alt="enfant"
            style={{
              width: '60%',
              height: '160px',
              marginLeft: '50%',
              marginTop: '80px',
            }}
          />
          <Card
            style={{
              position: 'absolute',
              bottom: '9%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '10px',
              backgroundColor: '#1877f2',
              padding: '0px',
              color: '#ffffff',
            }}
          >
            <CardContent>
              {!showMessage && questions[currentIndex] && (
                <Typography variant="body1" style={{ color: '#ffffff' }}>
                  {questions[currentIndex].question} 
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
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
              Répondre
            </Button>
          </form>
        </Box>
      )}
      {showMessage && (
        <Box my={2}>
          <Button variant="contained" color="primary" onClick={handleNewQuestion} style={{ marginTop: '20px' }}>
          <ReplyIcon/>
          </Button>
        </Box>
      )}
    </CardContent>
  </Card>
  );
}

export default C5A5;
