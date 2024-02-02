import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Container = styled.div`
  font-family: 'Comic Sans MS', sans-serif;
  text-align: center;
  padding: 40px;
`;

const Box = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
  border: 3px solid black;
  vertical-align: middle;
  background-color: ${props => props.color || '#eee'};
  transition: background-color 0.3s;
`;

const SmallBoxesContainer = styled.div`
  display: inline-block;
`;

function C4() {
  
    // Function to generate a random number between min and max (inclusive)
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
  

  const [originalCount, setOriginalCount] = useState(getRandomNumber(15, 20));
  const [toAdd, setToAdd] = useState(getRandomNumber(0, 10));
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    setShowResult(true);
  };
 
  
  useEffect(() => {
    // Update originalCount and toAdd with new random values
    setOriginalCount(getRandomNumber(15, 20));
    setToAdd(getRandomNumber(1, 10));
  }, []); 
 
  const reset = () => {
    setOriginalCount(getRandomNumber(15, 20));
    setToAdd(getRandomNumber(1, 10));
    setShowResult(false);
  };

  return (
    <Container>
      <h2>Nombre initial de carrés : {originalCount}</h2>
      <SmallBoxesContainer>
        {!showResult && Array.from({ length: originalCount  }).map((_, idx) => (
          <Box 
            key={idx} 
            color= '#eee' 
          />
        ))}
      </SmallBoxesContainer>
      <h3>Ajouter: {toAdd}</h3>
      <SmallBoxesContainer>
        {showResult && Array.from({ length: originalCount + toAdd }).map((_, idx) => (
          <Box 
            key={idx} 
            color={idx < originalCount ? '#eee' : 'green'}
          />
        ))}
      </SmallBoxesContainer>
      {showResult && <h4>Total: {originalCount + toAdd}</h4>}
      
      {!showResult &&
      <Button variant="contained" color="primary" onClick={handleShowResult}>Réponse</Button>
      }
      {showResult &&
      <Button variant="contained" color="primary" onClick={reset}>Reset</Button>
}
    </Container>
  );
}

export default C4;


