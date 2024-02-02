import React, { useState,useEffect } from 'react';
import { Box,  Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from "../sounds/correct.mp3";
import incorrectSound from "../sounds/incorrect.mp3";
import { TrendingUpRounded } from '@mui/icons-material';

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
  
const ResetButton = styled.button`
border-radius: 5px;
background-color: #45a05c;
margin: 15px 0;
color: white;
border: none;
font-family: "Roboto", sans-serif;
font-size: 16px;

&:hover {
  background-color: #0056b3;
}
`;



const VerifieButton = styled.button`
  border-radius: 5px;
  background-color: #45a05c;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const VerifieButton1 = styled.button`
  border-radius: 5px;
  background-color:  #f0f0f0;
  margin: 15px 0;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
const VerifieButton2 = styled.button`
  border-radius: 5px;
  background-color:  #a6c9e2;
  margin: 15px 0;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormulaBox = styled.div`
  padding: 15px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
  margin-Left:0px;
  font-size: 26px;
  
`;
const FormulaBox1 = styled.div`
  padding: 15px 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #f0f0f0;
  margin-Left:0px;
  font-size: 26px;
 
`;
const FormulaBox12 = styled.div`
  padding: 15px 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #a6c9e2;
  margin-Left:0px;
  font-size: 26px;
 
`;

const ItemTypes = {
  BRACKET: 'bracket',
};



function C5A2() {
  const [step, setStep] = useState(4);
  const[move, setMove] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showX, setShowX] = useState(false);
  const [opverify, setOpverify] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [questions, setQuestions] = useState([]);
  const[firstcase, setfirstcase] = useState(false);
  const[secondcase, setsecondcase]= useState(true);
  const[thirdcase, setthirdcase]=useState(false);
  const[firstexp, setfirstexp] = useState(false);
  const[secondexp, setsecondexp]= useState(false);
  const[thirdexp, setthirdexp]=useState(false);





  const forward = () => {
    if (step < 4) {
      setStep(step + 1);
      if (move === 0 && step === 1) {
        setfirstcase(true);
        setsecondcase(false);
        setthirdcase(false);
      } else if (move === 2 && step === 3) {
        setthirdcase(true);
        setfirstcase(false);
        setsecondcase(false);
      } else {
        setsecondcase(true);
        setfirstcase(false);
        setthirdcase(false);
      }
    }
  }
  
  const Backward = () => {
    if ((step - move) > 1) {
      setStep(step - 1);
      if (move === 0 && step == 3) {
        setfirstcase(true);
        setsecondcase(false);
        setthirdcase(false);
      } else if (move === 1 && step === 3) {
        setthirdcase(true);
        setfirstcase(false);
        setsecondcase(false);
      } else {
        setsecondcase(true);
        setfirstcase(false);
        setthirdcase(false);
      }
      
    }
  }
  
  const forwardM = () => {
    if ((step - move) > 1) {
      setMove(move + 1);
      if (move === 0 && step === 1) {
        setfirstcase(true);
        setsecondcase(false);
        setthirdcase(false);
      } else if (move === 1 && step === 4) {
        setthirdcase(true);
        setfirstcase(false);
        setsecondcase(false);
      } else {
        setsecondcase(true);
        setfirstcase(false);
        setthirdcase(false);
      }
    }
  }
  
  const BackwardM = () => {
    if (move > 0) {
      setMove(move - 1);
      if (move === 1 && step ===  2) {
        setfirstcase(true);
        setsecondcase(false);
        setthirdcase(false);
      } else if (move === 3 && step === 4) {
        setthirdcase(true);
        setfirstcase(false);
        setsecondcase(false);
      } else {
        setsecondcase(true);
        setfirstcase(false);
        setthirdcase(false);
      }
    }
  }
  

  const resetGame = () => {
    if (opverify) {
    generateQuestion();
    setShowCongratulations(false);
    setOpverify(false);
    setMove(0);
    setStep(4);

    setShowX(false);
    }
  };

  const verify = () => {
    VerifieSumbol();
  };

  




  const generateQuestion = () => {
    const newQuestions = [generateNumbers()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
    
  };
  const generateNumbers = () => {
    const getRandomNumber = (exclude) => {
      let num;
      do {
        num = Math.floor(Math.random() * 5) + 1;
      } while (exclude.includes(num) || num <= 0);
      return num;
    };
  
    let firstnumber, secondnumber, thirdnumber;
  
    firstnumber = getRandomNumber([]);
    secondnumber = getRandomNumber([firstnumber]);
    thirdnumber = getRandomNumber([firstnumber, secondnumber]);
  
    const fourthnumber = getRandomNumber([firstnumber, secondnumber, thirdnumber]);
  
    const first = Math.floor((Math.floor(firstnumber + secondnumber) * thirdnumber) - fourthnumber);
    const second = Math.floor(firstnumber + Math.floor(secondnumber * thirdnumber) - fourthnumber);
    const third = firstnumber + secondnumber * (thirdnumber - fourthnumber);
  
    const options = [first, second, third];
    const positiveOptions = options.filter(option => option > 0);
    const randomIndex = Math.floor(Math.random() * positiveOptions.length);
    const answer = positiveOptions[randomIndex];
 
  
    return { firstnumber, secondnumber, thirdnumber, fourthnumber, first, second, third, answer };
  };
  
  
  

  const VerifieSumbol = () => {
    const first = questions.reduce((sum, q) => sum + Math.floor(q.first), 0);
    const second = questions.reduce((sum, q) => sum + Math.floor(q.second), 0);
    const third =questions.reduce((sum, q) => sum + Math.floor(q.third), 0);
    const answer = questions.reduce((sum, q) => sum + Math.floor(q.answer), 0);

    if (answer == first && firstcase) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
      setfirstexp(true);
      setsecondexp(false);
      setthirdexp(false);

    } 
    else if (answer == second && secondcase) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
      setfirstexp(false);
      setsecondexp(true);
      setthirdexp(false);

    } else if (answer == third && thirdcase) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
      setfirstexp(false);
      setsecondexp(false);
      setthirdexp(true);

    } else{
      setShowCongratulations(false);
      setOpverify(false);
      play1();
      setShowX(true); // Show the "X" element
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 3000);
    }
  };
  console.log('step is'+step);
  console.log('move is'+move);
  
  console.log(firstcase);
  console.log(secondcase);
  console.log(thirdcase);
  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Card elevation={3}>
          <CardContent>
            <StyledText >
              Placez des parenthèses dans l'équation suivante pour que le résultat soit: 
            </StyledText>
            <StyledText >
            {questions.map((q, index) => (
                    <span>{q.answer}</span>
                  ))}
            </StyledText>


            <Grid container spacing={1} justifyContent="center" style={{marginTop: '0em'}}>
              {move == 0 &&
               <FormulaBox12 className="symbols"
                >
                &#40;
                </FormulaBox12>
}
                <FormulaBox 
                className="symbols" >
                {questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}
                </FormulaBox>
                {step==1 &&
                <FormulaBox1 className="symbols"
                >
                &#41;
                </FormulaBox1>
}
                <FormulaBox 
                className="symbols"
              >
                +
                </FormulaBox>
                {move==1 &&
               <FormulaBox12 className="symbols"
                >
                &#40;
                </FormulaBox12>
}
                <FormulaBox className="symbols"
                >
                {questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}
                </FormulaBox>
                {step==2 &&
                <FormulaBox1 className="symbols"
                >
                &#41;
                </FormulaBox1>
}
                <FormulaBox className="symbols"
                >
                &#215;
                </FormulaBox>
                {move==2 &&
               <FormulaBox12 className="symbols"
                >
                &#40;
                </FormulaBox12>
}
                <FormulaBox className="symbols"
                >
                {questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}
                </FormulaBox>
                {step==3 &&
                <FormulaBox1 className="symbols"
                >
                &#41;
                </FormulaBox1>
}
                <FormulaBox className="symbols"
                >
                -
                </FormulaBox>
                {move==3 &&
               <FormulaBox12 className="symbols"
                >
                &#40;
                </FormulaBox12>
}
                <FormulaBox className="symbols"
                >
                {questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}
                </FormulaBox>
                {step==4 &&
                <FormulaBox1 className="symbols"
                >
                &#41;
                </FormulaBox1>
}
            </Grid>
           
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '1em'}}>
            <div>
              {" "}
              <div>
              <ResetButton
                variant="contained"
                type="submit"
                style={{ marginRight: "10px" }}
                onClick={verify}
                
              >
                Verifier
              </ResetButton>
              <VerifieButton
             onClick={resetGame} 
              >Reset
              </VerifieButton>
              </div>
              <div>
              <VerifieButton2
              style={{ marginRight: "1px", marginLeft:"0px" }}
              onClick={BackwardM}
              
              >&#60;
              </VerifieButton2>
              <VerifieButton2
              style={{ marginRight: "20px" }}
              onClick={forwardM}
              
              >&#62;
              </VerifieButton2>
              
              {showX && <span>✖️</span>}
              {showCongratulations && <span>✅</span>}
              
              <VerifieButton1
              style={{ marginLeft: "20px" }}
              onClick={Backward}
              
              >&#60;
              </VerifieButton1>
              <VerifieButton1
              style={{ marginRight: "px" }}
              onClick={forward}
              
              >&#62;
              </VerifieButton1>
              </div>
              
            </div>
            
           
          
            </Grid>
            <div>
            {(showX&&secondcase)  &&
             <StyledText>{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+&#40;{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}&#41;-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber*q.thirdnumber)}</span>
                  ))}&#41;-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*q.thirdnumber)}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*q.thirdnumber-q.fourthnumber)}</span>
                  ))}
                  </StyledText>}
            </div>
            <div>
            {(showX&&firstcase)  &&
            <StyledText>&#40;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#41;&#215;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber+q.firstnumber)}</span>
                  ))}&#41;&#215;{questions.map((q, index) => (
                    <span>{Math.floor(q.thirdnumber)}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor((q.firstnumber+q.secondnumber))*q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor((q.firstnumber+q.secondnumber)*q.thirdnumber-q.fourthnumber)}</span>
                  ))}
                  </StyledText>}
            </div>
            <div>
            {(showX&&thirdcase) &&
             <StyledText>{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;&#40;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#41;&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.thirdnumber-q.fourthnumber)}</span>
                  ))}&#41;&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber*(q.thirdnumber-q.fourthnumber))}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*(q.thirdnumber-q.fourthnumber))}</span>
                  ))}
                  </StyledText>}



                  {showCongratulations && secondexp &&
             <StyledText>{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+&#40;{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}&#41;-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber*q.thirdnumber)}</span>
                  ))}&#41;-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*q.thirdnumber)}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*q.thirdnumber-q.fourthnumber)}</span>
                  ))}
                  </StyledText>}
            </div>
            <div>
            {showCongratulations && firstexp &&
            <StyledText>&#40;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#41;&#215;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber+q.firstnumber)}</span>
                  ))}&#41;&#215;{questions.map((q, index) => (
                    <span>{Math.floor(q.thirdnumber)}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor((q.firstnumber+q.secondnumber))*q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor((q.firstnumber+q.secondnumber)*q.thirdnumber-q.fourthnumber)}</span>
                  ))}
                  </StyledText>}
            </div>
            <div>
            {showCongratulations && thirdexp &&
             <StyledText>{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;&#40;{questions.map((q, index) => (
                    <span>{q.thirdnumber}</span>
                  ))}-{questions.map((q, index) => (
                    <span>{q.fourthnumber}</span>
                  ))}&#41;&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{q.secondnumber}</span>
                  ))}&#215;&#40;{questions.map((q, index) => (
                    <span>{Math.floor(q.thirdnumber-q.fourthnumber)}</span>
                  ))}&#41;&#61;{questions.map((q, index) => (
                    <span>{q.firstnumber}</span>
                  ))}+{questions.map((q, index) => (
                    <span>{Math.floor(q.secondnumber*(q.thirdnumber-q.fourthnumber))}</span>
                  ))}&#61;{questions.map((q, index) => (
                    <span>{Math.floor(q.firstnumber+q.secondnumber*(q.thirdnumber-q.fourthnumber))}</span>
                  ))}
                  </StyledText>}
            </div>
          </CardContent>
        </Card>
      </Box>
    </DndProvider>
  );
}

export default C5A2;


