import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Alert } from "@mui/material";
import { DndProvider, useDrag, useDrop, useDragLayer } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import styled from "styled-components";
import { Card as Card1} from '../Styles/MajorStyles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';
import inestine from "../Images/inestine.png";

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



const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }
  
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer = () => {
  const {
    itemType,
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#0000FF', color: 'white' }} 
        >
          {item.text}
        </Button>
      </div>
    </div>
  );
};

const Card = ({ id, text, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, text },
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
      style={{ opacity: isDragging ? 0 : 1, backgroundColor: '#0000FF', color: 'white' }} 
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
      {lastDroppedId !== null ? lastDroppedId : '?'}
    </Button>
  );
};

const C2A1 = () => {
  const [cards, setCards] = useState([]);
  const [table, setTable] = useState(Array(4).fill(null)); 
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const newCards = [];
    while(newCards.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10000);
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
    const sortedTable = [...table].sort((a, b) => b - a);
    const isOrderedDescending = table.every((num, idx) => num === sortedTable[idx]);
  
    if (isOrderedDescending) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setShowResult(true);
  };
  

  const resetGame = () => {
    const newCards = [];
    while(newCards.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10000);
      if (!newCards.includes(randomNumber)) {
        newCards.push(randomNumber);
      }
    }
    setCards(newCards);
    setTable(Array(4).fill(null));
    setFinished(false);
    setSuccess(false);
    setShowResult(false);
  };

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <Box>
      <img
  src={inestine}
  alt="Teacher"
  style={{
    marginTop: "25px",
    width: "50%", // ou une valeur spécifique comme "100px"
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }}
/>

        <CustomDragLayer />
       <Card1><StyledText>
          Ordonnez ces nomber de plus haut vers le plus petis 
        </StyledText></Card1> 
        <br></br>
        <br></br>
        
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={index}>
              <Card id={card} text={card} moveCard={moveCard} />
            </Grid>
          ))}
        </Grid>
        <br></br>
        <Grid container spacing={2} justifyContent="center">
          {table.map((slot, index) => (
            <Grid item key={index}>
              <Slot id={index} accept={ItemType} lastDroppedId={slot} moveCard={moveCard} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} justifyContent="center" style={{marginTop: '2em'}}>
          <Grid item>
            <Button onClick={checkResult} variant='contained' color='primary' disabled={!finished}>
              <CheckCircleIcon></CheckCircleIcon>
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={resetGame}>
              <ReplyIcon></ReplyIcon>
            </Button>
            <br></br>
          
          </Grid>
          <br></br>
          {showResult && (
          <Alert severity={success ? "success" : "error"}>
            {success
              ? "Félicitations, ces nomber sont bien Ordonner de l'ordere decroissant  !"
              : `Désolé, ces nomber ne sont pas  Ordonner de l'ordere decroissant.`}
          </Alert>
        )}
        </Grid>
      </Box>
    </DndProvider>
  );
};

export default C2A1;