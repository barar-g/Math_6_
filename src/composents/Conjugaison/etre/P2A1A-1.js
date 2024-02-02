import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import fteacherr1 from "../../Images/fteacherr1.png";
import useSound from "use-sound";
import correctSound from '../../sounds/correct.mp3';
import incorrectSound from '../../sounds/incorrect.mp3';

function P3A4_1() {
  
  
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [play] = useSound(correctSound)
  const [play1] = useSound(incorrectSound)

  const generateQuestion = () => {
    const newQuestions = [
      generateSingleQuestion(),

    ];
    setQuestions(newQuestions);
    setShowMessage(false);
    setShowCongratulations(false);
    setAnswer('');
    setAnswer1('');
  };

  const generateSingleQuestion = () => {
    const numpieces = Math.floor(Math.random() * 91) + 10;
    const nomTour = Math.floor(Math.random() * 10) + 1;
    return { numpieces, nomTour };
  };

  const calculateTotalDistance = () => {
    const quotient = questions.reduce((sum, q) => sum + Math.floor(q.numpieces/q.nomTour), 0 );
    const rest = questions.reduce((sum, q) => sum + (q.numpieces%q.nomTour), 0); 
    setShowMessage(true);
    if (parseInt(answer) === quotient && parseInt(answer1) === rest) {
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
  
  useEffect(() => {
    generateQuestion(); // Call the function when the component mounts
  }, []);

  


  return (
    <Card style={{ minHeight: '400px' }}>
      <CardContent>
        <Box my={2}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={fteacherr1}
              
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
                {!showMessage  && questions.map((q, index) => (
                  <Typography key={index} variant="body1" style={{ color: '#ffffff' }}>
                    Sara veut partager ses {q.numpieces} pieces de bonbons sur sa classe qui  contient {q.nomTour} eleves,combien de bonbons chaque eleve aura-t-il et donner le rest..
                  </Typography>
                ))}
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
                label="Numerateur"
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
              />
              <h1></h1>
                  <TextField
                    label="Denoimanteur"
                    type="number"
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
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
              Générer une nouvelle question
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );

};

export default P3A4_1;
