import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";
import useSound from "use-sound";
import correctSound from "../sounds/correct.mp3";
import incorrectSound from "../sounds/incorrect.mp3";
import { Scale } from '@mui/icons-material';
import "../Styles/C2CSS.css";

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



const VerifyButtom = styled.button`
  border-radius: 5px;
  background-color: #007bff;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
const FormulaBox = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
`;


const C2A1 = () => {
  const [signs] = useState(['>', '=', '<']);
  const [droppedSign, setDroppedSign] = useState(null);
  const [selectedSymbol, setSelectedSymbol] = useState(">");
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showX, setShowX] = useState(false);
  const [opverify, setOpverify] = useState(false);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [questions, setQuestions] = useState([]);





  const generateQuestion = () => {
    const newQuestions = [generateNumbers()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
    
  };
  const generateNumbers = () => {
    const first = Math.floor(Math.random() * 1000000000);
    const last = Math.floor(Math.random() * 1000000000);
    return { first, last };
  };

  const VerifieSumbol = () => {
    const first = questions.reduce((sum, q) => sum + Math.floor(q.first), 0);
    const last = questions.reduce((sum, q) => sum + q.last, 0);
    if (selectedSymbol === ">" && first >= last) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
    } else if (selectedSymbol === "<" && last > first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else if (selectedSymbol === "=" && last === first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else {
      setShowCongratulations(false);
      setOpverify(false);
      play1();
      setShowX(true); // Show the "X" element
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
    }
  };
  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

 



  const verify = () => {
    VerifieSumbol();
  };


  useEffect(() => {
    generateQuestion();
  }, []);

  

  const resetGame = () => {
    if (opverify) {
    generateQuestion();
    setShowCongratulations(false);
    setOpverify(false);
    }
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          bgcolor: 'background.default',
        }}>
        <Card elevation={3}>
          <CardContent>
          <StyledText>
           Comparaidon des nombres
            </StyledText>
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
            <StyledText>
            {questions.map((q, index) => (
                    <span>{q.first}</span>
                  ))}
                </StyledText>

              <FormulaBox className="mainSymb">{selectedSymbol}</FormulaBox>

              <StyledText>
              {questions.map((q, index) => (
                    <span>{q.last}</span>
                  ))}
                </StyledText>
            </div>
</div>

            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
                <FormulaBox 
                className="symbols" onClick={() => handleSymbolClick("<")}>
                &#60;
                </FormulaBox>
                <FormulaBox 
                className="symbols"
                onClick={() => handleSymbolClick("=")}>
                &#61;
                </FormulaBox>
                <FormulaBox className="symbols"
                onClick={() => handleSymbolClick(">")}>
                &#62;
                </FormulaBox>
            </Grid>
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div  style={{ display: "flex", alignItems: "center" ,marginTop:"10px" }}>
            <Grid>
              {showX && <span>✖️</span>}
              {showCongratulations && <span>✅</span>}
              </Grid>
            </div>
            </div>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              <Grid item>
                <VerifyButtom onClick={verify}>
                  OK
                </VerifyButtom>
              </Grid>
              
              <Grid item>
                <ResetButton 
                  onClick={resetGame} 
                   // Change button and text color
                >
                  RESET
                </ResetButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </DndProvider>
  );
};

export default C2A1;