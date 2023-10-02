import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import teacher from "../Images/fteacher.png";
import useSound from "use-sound";
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';

function P2A3_2() {
  
  
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
    const exclusionList = [29, 11, 13, 17, 23, 13, 19];
    let randomNumber;
  
    do {
      randomNumber = Math.floor(Math.random() * 21) + 10;
    } while (exclusionList.includes(randomNumber));
  
  
    return {randomNumber};
  }
;

function generateProductcom(number) {
    const combinations = [];
    for (let a = 2; a <= Math.sqrt(number); a++) {
        if (number % a === 0) {
            const b = number / a;
            combinations.push([a, b]);
        }
    }
    return combinations;
}
let lastInnerArray = [];
const singleQuestionResult = questions.reduce((sum, q) => sum + Math.floor(q.randomNumber), 0);;
const x = generateProductcom(singleQuestionResult);
for (const innerArray of x) {
  const firstNumber = innerArray[0];
  const secondNumber = innerArray[1];
  lastInnerArray = [firstNumber, secondNumber];
  

}
console.log(lastInnerArray)





  
  
  

  


  const calculateTotalDistance = () => {
    setShowMessage(true);
    if (
      (parseInt(answer)*parseInt(answer1) === lastInnerArray[0] * lastInnerArray[1])
    ) {
      setShowCongratulations(true);
      play();
    }
     else {
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
              src={teacher}
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
                {!showMessage  && questions.map((q, index) => (
                  <Typography key={index} variant="body1" style={{ color: '#ffffff' }}>
                    La maîtresse veut rangé tous les élèves de la classe qui contient {q.randomNumber} élèves ,  comment pourrais-tu  les placer de manière que chaque rang contienne le même nombre d'élèves?. 
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Nombre des élèves"
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                style={{ marginRight: '10px' }} // Add some spacing between text fields
                required
              />
              <span style={{ fontSize: '18px', marginRight: '10px' }}>×</span>
              <TextField
                label="Nombre des rangs"
                type="number"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                required
                style={{ marginLeft: '10px' }}
              />
              </div >
              <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px'}}>
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

export default P2A3_2;
