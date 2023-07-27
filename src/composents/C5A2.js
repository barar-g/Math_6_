import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  BRACKET: 'bracket',
};

function Bracket({ id, text }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BRACKET,
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
        borderRadius: '50%',
        width: '60px',
        height: '60px',
      }}
    >
      {text}
    </Button>
  );
}

function Slot({ accept, lastDroppedId, handleDrop }) {
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
        borderRadius: '50%',
        width: '60px',
        height: '60px',
      }}
    >
      {lastDroppedId !== null ? lastDroppedId : '?'}
    </Button>
  );
}

function C5A2() {
  const [equation, setEquation] = useState('2 * 1 + 5 - 4');
  const [brackets, setBrackets] = useState([]);
  const [droppedBrackets, setDroppedBrackets] = useState([null, null]);

  const resetGame = () => {
    setEquation('2 * 1 + 5 - 4');
    setBrackets(['(', ')']);
    setDroppedBrackets([null, null]);
  };

  const handleDrop = (index) => (bracket) => {
    let newDroppedBrackets = [...droppedBrackets];
    newDroppedBrackets[index] = bracket;
    setDroppedBrackets(newDroppedBrackets);
  };

  const checkAnswer = () => {
    try {
      const userAnswer = `${droppedBrackets[0] ? droppedBrackets[0] : ''}${equation}${droppedBrackets[1] ? droppedBrackets[1] : ''}`;
      const isCorrect = eval(userAnswer) === 3;
      alert(isCorrect ? 'Correct!' : 'Incorrect.');
    } catch (error) {
      alert('Incorrect.');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6">
              Placez des parenthèses dans l'équation suivante pour que le résultat soit 3 : {equation}.
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item>
                <Slot accept={ItemTypes.BRACKET} lastDroppedId={droppedBrackets[0]} handleDrop={handleDrop(0)} />
              </Grid>
              <Grid item>
                <Typography variant="h5">{equation}</Typography>
              </Grid>
              <Grid item>
                <Slot accept={ItemTypes.BRACKET} lastDroppedId={droppedBrackets[1]} handleDrop={handleDrop(1)} />
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              {brackets.map((bracket, index) => (
                <Grid item key={index}>
                  <Bracket id={bracket} text={bracket} />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={checkAnswer} disabled={droppedBrackets.includes(null)}>
                  OK
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="error" onClick={resetGame}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </DndProvider>
  );
}

export default C5A2;


