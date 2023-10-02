import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";
import { Scale } from '@mui/icons-material';

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

const ItemTypes = {
  SIGN: 'sign',
  NUMBER: 'number',
};  

const Sign = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SIGN,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Button
      ref={drag}
      variant="contained"
      style={{
        opacity: isDragging ? 0.5 : 1, 
        fontSize: '1.5em', 
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '50%', // Make button round
        width: '60px', // Ensure it's a circle, not an oval
        height: '60px' // Ensure it's a circle, not an oval
      }}
    >
      {text}
    </Button>
  );
};

const Slot = ({ accept, lastDroppedId, handleDrop }) => {
  const [, drop] = useDrop({
    accept,
    drop: (item) => handleDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Button
      ref={drop} 
      variant="outlined"
      style={{
        fontSize: '1.5em', 
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '50%', // Make button round
        width: '0px', // Ensure it's a circle, not an oval
        height: '60px', // Ensure it's a circle, not an oval
       
      }}
    >
      {lastDroppedId !== null ? lastDroppedId : '?'}
    </Button>
  );
};

const C2A1 = () => {
  const [numbers, setNumbers] = useState([0, 0]);
  const [signs] = useState(['>', '=', '<']);
  const [droppedSign, setDroppedSign] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    setNumbers([Math.floor(Math.random() * 1000000000), Math.floor(Math.random() * 1000000000)]);
    setDroppedSign(null);
  };

  const resetGame = () => {
    setNumbers([0, 0]);
    setDroppedSign(null);
    setScore(0);
  };

  const handleDrop = (sign) => {
    setDroppedSign(sign);
  };

  const checkResult = () => {
    const [number1, number2] = numbers;
    let isCorrect;

    switch(droppedSign) {
      case '>':
        isCorrect = number1 > number2;
        break;
      case '=':
        isCorrect = number1 === number2;
        break;
      case '<':
        isCorrect = number1 < number2;
        break;
      default:
        isCorrect = false;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    generateNumbers();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh', 
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
                  {numbers[0]}
                </StyledText>

              <Slot accept={ItemTypes.SIGN} lastDroppedId={droppedSign} handleDrop={handleDrop} />

              <StyledText>
                  {numbers[1]}
                </StyledText>
            </div>
</div>

            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              {signs.map((sign, index) => (
                <Grid item key={index}>
                  <Sign id={sign} text={sign} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              <Grid item>
                <VerifyButtom onClick={checkResult} disabled={!droppedSign}>
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
