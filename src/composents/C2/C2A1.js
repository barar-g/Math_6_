import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Alert } from "@mui/material";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from "styled-components";

const ItemType = 'card';  

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

const Card = ({ id, text, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        moveCard(item.id, dropResult.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Button
      ref={drag}
      variant="contained"
      style={{ opacity: isDragging ? 0.5 : 1, backgroundColor: '#0000FF', color: 'white' }} 
    >
      {text}
    </Button>
  );
};

const Slot = ({ id, accept, lastDroppedId, moveCard }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Button ref={drop} variant="outlined">
      {lastDroppedId !== null ? lastDroppedId : 'Vide'}
    </Button>
  );
};

const C2A1 = () => {
  const [cards, setCards] = useState([]);
  const [table, setTable] = useState(Array(7).fill(null)); 
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const newCards = [];
    while(newCards.length < 10) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!newCards.includes(randomNumber)) {
        newCards.push(randomNumber);
      }
    }
    setCards(newCards);
  }, []);

  const moveCard = (cardId, slotId) => {
    setTable(table.map((item, index) => index === slotId ? cardId : item));
    setCards(cards.filter(item => item !== cardId));
  };

  useEffect(() => {
    if (cards.length === 3) {
      setFinished(true);
    }
  }, [cards]);

  const checkResult = () => {
    const userNumber = parseInt(table.join(''));
    const sortedCards = [...cards, ...table].sort((a, b) => b - a);
    const maxNumber = parseInt(sortedCards.slice(0, 7).join(''));

    if (userNumber === maxNumber) {
      setSuccess(true);
    }

    setShowResult(true);
  };

  const resetGame = () => {
    const newCards = [];
    while(newCards.length < 10) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!newCards.includes(randomNumber)) {
        newCards.push(randomNumber);
      }
    }
    setCards(newCards);
    setTable(Array(7).fill(null));
    setFinished(false);
    setSuccess(false);
    setShowResult(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <StyledText >
          C2A1 : Jeu du plus grand nombre
        </StyledText>
        {showResult && (
          <Alert severity={success ? "success" : "error"}>
            {success
              ? "Félicitations, vous avez formé le plus grand nombre possible !"
              : `Désolé, vous n'avez pas formé le plus grand nombre possible.`}
          </Alert>
        )}
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={index}>
              <Card id={card} text={card} moveCard={moveCard} />
            </Grid>
          ))}
        </Grid>
        <StyledText >
          Tableau
        </StyledText>
        <Grid container spacing={2} justifyContent="center">
          {table.map((slot, index) => (
            <Grid item key={index}>
              <Slot id={index} accept={ItemType} lastDroppedId={slot} moveCard={moveCard} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
          <Grid item>
            <VerifyButtom onClick={checkResult} disabled={!finished}>
              OK
            </VerifyButtom>
          </Grid>
          <Grid item>
            <ResetButton  onClick={resetGame}>
              RESET
            </ResetButton>
          </Grid>
        </Grid>
      </Box>
    </DndProvider>
  );
};

export default C2A1;
