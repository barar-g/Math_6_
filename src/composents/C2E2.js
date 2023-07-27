import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  NUMBER: 'number',
};  

const Number = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.NUMBER,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const buttonWidth = `${text.toString().length * 10 + 10}px`;  // Calculate button width based on number length

  return (
    <Button
      ref={drag}
      variant="contained"
      style={{
        opacity: isDragging ? 0.5 : 1, 
        fontSize: '1.5em', 
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '10px', // Rounded rectangle shape
        width: buttonWidth, 
        height: '60px' 
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

  const buttonWidth = lastDroppedId !== null ? `${lastDroppedId.toString().length * 10 + 10}px` : '60px';  // Calculate button width based on number length

  return (
    <Button
      ref={drop} 
      variant="outlined"
      style={{
        fontSize: '1.5em', 
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '10px', // Rounded rectangle shape
        width: buttonWidth, 
        height: '60px' 
      }}
    >
      {lastDroppedId !== null ? lastDroppedId : '?'}
    </Button>
  );
};

const C2A1 = () => {
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const [droppedNumbers, setDroppedNumbers] = useState([null, null, null, null]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    setNumbers([
      Math.floor(Math.random() * 1000000000), 
      Math.floor(Math.random() * 1000000000),
      Math.floor(Math.random() * 1000000000),
      Math.floor(Math.random() * 1000000000)
    ]);
    setDroppedNumbers([null, null, null, null]);
  };

  const resetGame = () => {
    setNumbers([0, 0, 0, 0]);
    setDroppedNumbers([null, null, null, null]);
    setScore(0);
  };

  const handleDrop = (index) => (number) => {
    let newDroppedNumbers = [...droppedNumbers];
    newDroppedNumbers[index] = number;
    setDroppedNumbers(newDroppedNumbers);
  };

  const checkResult = () => {
    let orderedNumbers = [...numbers].sort((a, b) => b - a);
    if (JSON.stringify(droppedNumbers) === JSON.stringify(orderedNumbers)) {
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
            <Typography variant="h4" align="center" gutterBottom>
            Organisez les nombres en ordre décroissant
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {droppedNumbers.map((droppedNumber, index) => (
                <Grid item key={index}>
                  <Slot accept={ItemTypes.NUMBER} lastDroppedId={droppedNumber} handleDrop={handleDrop(index)} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              {numbers.map((number, index) => (
                <Grid item key={index}>
                  <Number id={number} text={number} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={checkResult} disabled={droppedNumbers.includes(null)}>
                  OK
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  onClick={resetGame} 
                  style={{backgroundColor: 'red', color: 'white'}}
                >
                  RESET
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </DndProvider>
  );
};

export default C2A1;

